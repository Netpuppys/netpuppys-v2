import { cache } from "react";
import { BLOG_CATEGORY, SITE_URL, WORDPRESS_API, WORDPRESS_URL, WP_CACHE_TAG, WP_REVALIDATE } from "./config";
import { decodeEntities, toPlainText } from "./entities";
import { cleanWpHtml, type TocItem } from "./html";

/* ----------------------------------------------------------------------------
 * Raw REST API shapes (only the fields we request)
 * ------------------------------------------------------------------------- */

interface WPMedia {
  source_url: string;
  alt_text?: string;
  media_details?: { width?: number; height?: number };
}

interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: "category" | "post_tag" | string;
}

export interface YoastHead {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: { index?: string; follow?: string };
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  og_image?: { url: string; width?: number; height?: number; type?: string }[];
  article_published_time?: string;
  article_modified_time?: string;
  twitter_card?: string;
  schema?: unknown;
}

interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  categories: number[];
  yoast_head_json?: YoastHead;
  _embedded?: { "wp:featuredmedia"?: WPMedia[]; "wp:term"?: WPTerm[][] };
}

/* ----------------------------------------------------------------------------
 * App shapes
 * ------------------------------------------------------------------------- */

export interface PostImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface PostTerm {
  name: string;
  slug: string;
}

export interface PostSummary {
  id: number;
  slug: string;
  href: string;
  title: string;
  /** WordPress local date, e.g. "2026-06-04T16:52:36". Format with lib/wordpress/date. */
  date: string;
  modified: string;
  excerpt: string;
  image: PostImage | null;
  categories: PostTerm[];
}

export interface Post extends PostSummary {
  html: string;
  toc: TocItem[];
  tags: PostTerm[];
  seo: YoastHead | null;
}

/* ----------------------------------------------------------------------------
 * Fetching
 * ------------------------------------------------------------------------- */

const LIST_FIELDS = "id,slug,date,modified,title,excerpt,categories,_links,_embedded";
const EMBED = "wp:featuredmedia,wp:term";

async function wpFetch<T>(path: string, params: Record<string, string | number>): Promise<{ data: T; totalPages: number } | null> {
  const qs = new URLSearchParams(Object.entries(params).map(([k, v]) => [k, String(v)]));
  const url = `${WORDPRESS_API}/${path}?${qs}`;
  try {
    const res = await fetch(url, { next: { revalidate: WP_REVALIDATE, tags: [WP_CACHE_TAG] } });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return { data: (await res.json()) as T, totalPages: Number(res.headers.get("x-wp-totalpages") ?? 1) };
  } catch (err) {
    // Never take the site down because WordPress is unreachable: pages render
    // without posts and retry on the next revalidation.
    console.error(`[wordpress] ${url} failed:`, err instanceof Error ? err.message : err);
    return null;
  }
}

/** Original upload + its dimensions; next/image generates the responsive sizes. */
const pickImage = (media: WPMedia | undefined): PostImage | null => {
  if (!media?.source_url) return null;
  return {
    src: media.source_url,
    width: media.media_details?.width ?? 1200,
    height: media.media_details?.height ?? 800,
    alt: decodeEntities(media.alt_text ?? ""),
  };
};

const terms = (p: WPPost, taxonomy: string): PostTerm[] =>
  (p._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((t) => t?.taxonomy === taxonomy)
    .map((t) => ({ name: decodeEntities(t.name), slug: t.slug }));

const toSummary = (p: WPPost): PostSummary => ({
  id: p.id,
  slug: p.slug,
  href: `/blog/${p.slug}`,
  title: decodeEntities(p.title.rendered),
  date: p.date,
  modified: p.modified,
  excerpt: toPlainText(p.excerpt.rendered).replace(/\s*\[(…|&hellip;|\.\.\.)\]\s*$/, "…"),
  image: pickImage(p._embedded?.["wp:featuredmedia"]?.[0]),
  categories: terms(p, "category"),
});

const getCategoryId = cache(async (slug: string): Promise<number | null> => {
  const res = await wpFetch<{ id: number }[]>("categories", { slug, _fields: "id" });
  return res?.data[0]?.id ?? null;
});

/** Every published post (all categories), newest first — paginates the 100-per-page API limit. */
export const getAllPosts = cache(async (category?: string): Promise<PostSummary[]> => {
  const params: Record<string, string | number> = { per_page: 100, _fields: LIST_FIELDS, _embed: EMBED };
  if (category) {
    const id = await getCategoryId(category);
    if (id === null) return [];
    params.categories = id;
  }
  const posts: PostSummary[] = [];
  for (let page = 1; ; page++) {
    const res = await wpFetch<WPPost[]>("posts", { ...params, page });
    if (!res) break;
    posts.push(...res.data.map((p) => toSummary(p)));
    if (page >= res.totalPages) break;
  }
  return posts;
});

/** Posts listed on /blogs and on the homepage (the "Blog" category). */
export const getBlogPosts = () => getAllPosts(BLOG_CATEGORY);

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  const res = await wpFetch<WPPost[]>("posts", {
    slug,
    _fields: `${LIST_FIELDS},content,yoast_head_json`,
    _embed: EMBED,
  });
  const p = res?.data[0];
  if (!p) return null;
  const { html, toc } = cleanWpHtml(p.content?.rendered ?? "");
  return {
    ...toSummary(p),
    html,
    toc,
    tags: terms(p, "post_tag"),
    seo: p.yoast_head_json ? rewriteSeoUrls(p.yoast_head_json) : null,
  };
});

/** Yoast returns URLs on the WordPress host; point them at this site instead. */
function rewriteSeoUrls(seo: YoastHead): YoastHead {
  if (WORDPRESS_URL === SITE_URL) return seo;
  const swap = (s?: string) => s?.split(WORDPRESS_URL + "/").join(SITE_URL + "/").split(WORDPRESS_URL).join(SITE_URL);
  const schema = seo.schema ? JSON.parse(swap(JSON.stringify(seo.schema))!.replaceAll(`${SITE_URL}/wp-content/`, `${WORDPRESS_URL}/wp-content/`)) : undefined;
  return { ...seo, canonical: swap(seo.canonical), og_url: swap(seo.og_url), schema };
}
