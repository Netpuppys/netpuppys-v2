import type { Metadata } from "next";
import type { Post } from "./api";

/** Yoast SEO fields from WordPress → Next.js metadata (falls back to the post itself). */
/** The site keeps WordPress's trailing-slash URLs (next.config trailingSlash), so canonicals always end in "/". */
const withSlash = (u?: string) => (u ? u.replace(/\/*(?=$|[?#])/, "/") : u);

export function postMetadata(post: Post): Metadata {
  const y = post.seo ?? {};
  const title = y.title ?? `${post.title} - Netpuppys`;
  const description = y.description ?? post.excerpt.slice(0, 160);
  const images = y.og_image?.length
    ? y.og_image.map((i) => ({ url: i.url, width: i.width, height: i.height }))
    : post.image
      ? [{ url: post.image.src, width: post.image.width, height: post.image.height }]
      : undefined;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: withSlash(y.canonical) ?? `/blog/${post.slug}/` },
    // Yoast robots are ignored on purpose: the WordPress install itself is set to noindex (so cms.netpuppys.com
    // stays out of Google), and that must not leak onto the real pages.
    openGraph: {
      type: "article",
      title: y.og_title ?? title,
      description: y.og_description ?? description,
      url: withSlash(y.og_url) ?? `/blog/${post.slug}/`,
      siteName: y.og_site_name ?? "Netpuppys",
      images,
      publishedTime: y.article_published_time ?? post.date,
      modifiedTime: y.article_modified_time ?? post.modified,
    },
    twitter: { card: "summary_large_image" },
  };
}
