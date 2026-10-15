/**
 * Headless WordPress settings. The old netpuppys.com WordPress install is the
 * CMS: posts are written there and read here over the REST API.
 *
 * When this Next.js site takes over the netpuppys.com domain, move WordPress
 * to a subdomain (e.g. cms.netpuppys.com) and set WORDPRESS_URL to it.
 */
export const WORDPRESS_URL = (process.env.WORDPRESS_URL ?? "https://netpuppys.com").replace(/\/+$/, "");
export const WORDPRESS_API = `${WORDPRESS_URL}/wp-json/wp/v2`;

/** Public URL of this site — used to rewrite canonical / og URLs that WordPress returns. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://netpuppys.com").replace(/\/+$/, "");

/** Category whose posts make up /blogs (the live site lists only "Blog", not "Stories"). */
export const BLOG_CATEGORY = process.env.WORDPRESS_BLOG_CATEGORY ?? "blog";

/** Seconds before cached WordPress data is refetched (also refreshable on demand via /api/revalidate). */
export const WP_REVALIDATE = 3600;
export const WP_CACHE_TAG = "wordpress";

/** Hosts whose links inside post content are treated as internal (rewritten to relative paths). */
export const INTERNAL_HOSTS = Array.from(
  new Set(
    [WORDPRESS_URL, SITE_URL, "https://netpuppys.com"].flatMap((u) => {
      const host = new URL(u).host.replace(/^www\./, "");
      return [host, `www.${host}`];
    }),
  ),
);
