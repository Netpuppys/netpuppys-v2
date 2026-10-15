import { INTERNAL_HOSTS, WORDPRESS_URL } from "./config";
import { toPlainText } from "./entities";

/**
 * Turns Elementor-built WordPress post HTML into clean, semantic HTML.
 *
 * Elementor wraps every heading/paragraph in several <div>s with generated
 * classes and inline styles that only make sense with Elementor's own CSS.
 * This keeps the content tags (headings, paragraphs, lists, links, images,
 * tables…), drops the wrappers/styles/icons, and rebuilds the Table of
 * Contents widget (which Elementor fills in with JavaScript) from the
 * headings. Dependency-free: a small tokenizer is enough because WordPress
 * output is well-formed.
 */

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface CleanedHtml {
  html: string;
  toc: TocItem[];
}

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

/** Tags kept in the output (everything else is unwrapped: tag dropped, content kept). */
const KEEP = new Set([
  "p", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "a", "strong", "b", "em", "i", "u", "br", "hr",
  "img", "figure", "figcaption", "blockquote", "table", "thead", "tbody", "tfoot", "tr", "th", "td",
  "sup", "sub", "code", "pre", "iframe", "dl", "dt", "dd",
]);

/** Tags removed together with everything inside them. */
const DROP = new Set(["script", "style", "noscript", "svg", "button", "form", "input", "select", "textarea", "template", "object", "canvas"]);

/** Elementor blocks removed with their content (icons, share bars, the JS-only TOC…). */
const DROP_CLASS = /\b(elementor-widget-table-of-contents|elementor-toc__|elementor-icon\b|elementor-icon-list-icon|elementor-share-buttons|elementor-widget-spacer|elementor-widget-divider|elementor-screen-only)/;

const TOC_MARKER = "<!--wp-toc-->";
const RENAME: Record<string, string> = { b: "strong" };

const TOKEN = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>|[^<]+|</g;
const ATTR = /([^\s=/"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;

const parseAttrs = (raw: string): Record<string, string> => {
  const attrs: Record<string, string> = {};
  for (const m of raw.matchAll(ATTR)) attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4] ?? "";
  return attrs;
};

const esc = (v: string) => v.replace(/"/g, "&quot;");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80) || "section";

/** Absolute WordPress links → site-relative paths; external links open in a new tab. */
const rewriteHref = (href: string): { href: string; external: boolean } | null => {
  const h = href.trim();
  if (!h || /^(javascript|data):/i.test(h)) return null;
  if (h.startsWith("#") || h.startsWith("/") || /^(mailto|tel):/i.test(h)) return { href: h, external: false };
  try {
    const u = new URL(h, WORDPRESS_URL);
    if (INTERNAL_HOSTS.includes(u.host) && !u.pathname.startsWith("/wp-content/")) {
      return { href: (u.pathname.replace(/\/+$/, "") || "/") + u.search + u.hash, external: false };
    }
    return { href: u.toString(), external: true };
  } catch {
    return null;
  }
};

const EMBED_HOSTS = /^(https?:)?\/\/(www\.)?(youtube\.com|youtube-nocookie\.com|player\.vimeo\.com)\//i;

const buildAttrs = (tag: string, a: Record<string, string>): string | null => {
  const out: string[] = [];
  const cls = a.class ?? "";
  switch (tag) {
    case "a": {
      const link = a.href ? rewriteHref(a.href) : null;
      if (link) {
        out.push(`href="${esc(link.href)}"`);
        if (link.external) out.push('target="_blank" rel="noopener noreferrer"');
      }
      if (/\belementor-button\b/.test(cls)) out.push('class="wp-button"');
      break;
    }
    case "img": {
      const src = a["data-lazy-src"] || a["data-src"] || a.src;
      if (!src || src.startsWith("data:")) return null;
      out.push(`src="${esc(src)}"`, `alt="${esc(a.alt ?? "")}"`);
      const srcset = a["data-lazy-srcset"] || a["data-srcset"] || a.srcset;
      if (srcset) out.push(`srcset="${esc(srcset)}"`, 'sizes="(min-width: 870px) 810px, 100vw"');
      if (/^\d+$/.test(a.width ?? "")) out.push(`width="${a.width}"`);
      if (/^\d+$/.test(a.height ?? "")) out.push(`height="${a.height}"`);
      out.push('loading="lazy" decoding="async"');
      break;
    }
    case "iframe": {
      const src = a["data-lazy-src"] || a.src;
      if (!src || !EMBED_HOSTS.test(src)) return null;
      out.push(`src="${esc(src)}"`, `title="${esc(a.title || "Embedded video")}"`, 'loading="lazy"', "allowfullscreen", 'class="wp-embed"');
      out.push('allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"');
      break;
    }
    case "td":
    case "th":
      if (/^\d+$/.test(a.colspan ?? "")) out.push(`colspan="${a.colspan}"`);
      if (/^\d+$/.test(a.rowspan ?? "")) out.push(`rowspan="${a.rowspan}"`);
      break;
    case "ol":
      if (/^\d+$/.test(a.start ?? "")) out.push(`start="${a.start}"`);
      break;
  }
  return out.length ? " " + out.join(" ") : "";
};

interface Frame {
  tag: string;
  out: string | null; // emitted tag name, or null when unwrapped
  headingAt?: number; // index in `out` of an opening heading tag (for id patching)
  level?: number;
}

export function cleanWpHtml(input: string): CleanedHtml {
  const out: string[] = [];
  const stack: Frame[] = [];
  const toc: TocItem[] = [];
  const ids = new Set<string>();
  let skip = 0; // >0 while inside a dropped element
  let hadToc = false;

  for (const m of input.matchAll(TOKEN)) {
    const token = m[0];
    const [, closing, rawName, rawAttrs = ""] = m;

    // Text / stray "<" / comments
    if (!rawName) {
      if (skip || token.startsWith("<!--")) continue;
      out.push(token === "<" ? "&lt;" : token);
      continue;
    }

    const name = rawName.toLowerCase();
    const selfClosing = VOID.has(name) || /\/\s*$/.test(rawAttrs);

    if (skip) {
      if (selfClosing) continue;
      skip += closing ? -1 : 1;
      continue;
    }

    if (closing) {
      // Pop to the matching open element (tolerates unbalanced markup).
      const idx = stack.map((f) => f.tag).lastIndexOf(name);
      if (idx === -1) continue;
      while (stack.length > idx) {
        const f = stack.pop()!;
        if (!f.out) continue;
        out.push(`</${f.out}>`);
        if (f.headingAt !== undefined && f.level) {
          const text = toPlainText(out.slice(f.headingAt + 1, -1).join(""));
          if (!text) continue;
          let id = slugify(text);
          for (let n = 2; ids.has(id); n++) id = `${slugify(text)}-${n}`;
          ids.add(id);
          out[f.headingAt] = out[f.headingAt].replace(/^<(h\d)/, `<$1 id="${id}"`);
          toc.push({ id, text, level: f.level });
        }
      }
      continue;
    }

    const attrs = parseAttrs(rawAttrs);
    const cls = attrs.class ?? "";

    if (/\belementor-widget-table-of-contents\b/.test(cls)) {
      if (!hadToc) out.push(TOC_MARKER);
      hadToc = true;
    }
    if (DROP.has(name) || DROP_CLASS.test(cls) || (name === "i" && /\b(fa[srlbd]?|fa-[\w-]+|eicon-[\w-]+)\b/.test(cls)) || (name === "iframe" && !EMBED_HOSTS.test(attrs.src ?? attrs["data-lazy-src"] ?? ""))) {
      if (!selfClosing) skip = 1;
      continue;
    }

    if (!KEEP.has(name)) {
      if (!selfClosing) stack.push({ tag: name, out: null });
      continue;
    }

    let tag = RENAME[name] ?? name;
    const level = /^h[1-6]$/.test(name) ? Number(name[1]) : undefined;
    let extra = "";
    if (level === 1) {
      // The page title is the only <h1>; Elementor's in-content H1 becomes a large h2.
      tag = "h2";
      extra = ' class="wp-h1"';
    }
    const built = buildAttrs(tag, attrs);
    if (built === null) {
      if (!selfClosing) stack.push({ tag: name, out: null });
      continue;
    }
    out.push(`<${tag}${extra}${built}>`);
    if (!selfClosing) {
      stack.push({
        tag: name,
        out: tag,
        // TOC follows Elementor's settings: original h2–h6 only.
        ...(level && level >= 2 ? { headingAt: out.length - 1, level } : {}),
      });
    }
  }
  while (stack.length) {
    const f = stack.pop()!;
    if (f.out) out.push(`</${f.out}>`);
  }

  let html = out
    .join("")
    .replace(/\s+/g, " ")
    // empty paragraphs / headings left behind by removed icons and spacers
    .replace(/<(p|h[2-6]|li|strong|em)(\s[^>]*)?>(\s|&nbsp;|<br>)*<\/\1>/gi, "")
    .replace(/<a(\s[^>]*)?>\s*<\/a>/gi, "")
    .replace(/(<br>\s*){3,}/gi, "<br><br>")
    .trim();

  if (hadToc && toc.length > 1) {
    html = html.replace(TOC_MARKER, renderToc(toc));
  }
  html = html.replace(TOC_MARKER, "");
  return { html, toc: hadToc ? toc : [] };
}

/** Hierarchical, numbered Table of Contents (1., 3.1., 4.1.2. …) in a collapsible box, as on the live site. */
function renderToc(items: TocItem[]): string {
  const base = Math.min(...items.map((i) => i.level));
  const counters: number[] = [];
  let depth = -1;
  let html = "";
  for (const item of items) {
    const d = Math.max(0, item.level - base);
    while (depth < d) {
      html += '<ol class="wp-toc__list">';
      depth++;
      counters[depth] = 0;
    }
    while (depth > d) {
      html += "</li></ol>";
      depth--;
    }
    if (counters[depth] > 0) html += "</li>";
    counters[depth]++;
    counters.length = depth + 1;
    const num = counters.map((c) => c || 1).join(".") + ".";
    html += `<li><a href="#${item.id}"><span class="wp-toc__num">${num}</span> ${escText(item.text)}</a>`;
  }
  while (depth >= 0) {
    html += "</li></ol>";
    depth--;
  }
  return `<details class="wp-toc" open><summary>Table of Contents</summary><nav aria-label="Table of contents">${html}</nav></details>`;
}

const escText = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
