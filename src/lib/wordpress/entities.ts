const NAMED: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", laquo: "«", raquo: "»", copy: "©", reg: "®", trade: "™", bull: "•",
};

/** Decode HTML entities in WordPress strings (titles, excerpts) for use as plain text. */
export const decodeEntities = (s: string): string =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, code: string) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    return NAMED[code.toLowerCase()] ?? m;
  });

/** Strip tags and decode entities — WordPress `rendered` field to plain text. */
export const toPlainText = (html: string): string =>
  decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
