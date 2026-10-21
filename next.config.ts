import type { NextConfig } from "next";

/** WordPress (headless CMS) host — featured images are served from its /wp-content/uploads. */
const wordpress = new URL(process.env.WORDPRESS_URL ?? "https://netpuppys.com");
const site = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://netpuppys.com");

const nextConfig: NextConfig = {
  // Keep WordPress's URL format exactly (/about-us/, /blog/slug/) so every indexed URL stays the same.
  // URLs without the slash get a permanent redirect to the slashed one.
  trailingSlash: true,

  images: {
    // WordPress image host, plus the old one so images keep working while WordPress moves to cms.netpuppys.com.
    remotePatterns: [...new Set([wordpress.hostname, "netpuppys.com", "cms.netpuppys.com"])].map((hostname) => ({
      protocol: "https" as const,
      hostname,
      pathname: "/wp-content/uploads/**",
    })),
  },

  /** 301s for WordPress URLs that have no page on the new site. Add any future slug changes here. */
  async redirects() {
    const r = (source: string, destination: string) => ({ source, destination, statusCode: 301 as const });
    return [
      r("/home-2/", "/"),
      // Blog archives (categories, tags, authors, feeds, bare /blog/) → the blog listing
      r("/blog/", "/blogs/"),
      r("/blog/category/:path*", "/blogs/"),
      r("/blog/tag/:path*", "/blogs/"),
      r("/category/:path*", "/blogs/"),
      r("/tag/:path*", "/blogs/"),
      r("/author/:path*", "/blogs/"),
      r("/feed/", "/blogs/"),
      r("/blog/:slug/feed/", "/blog/:slug/"),
      r("/blog/:slug/amp/", "/blog/:slug/"),
      // WordPress sitemaps that robots.txt / Search Console may still reference
      r("/sitemap_index.xml", "/sitemap.xml"),
      r("/post-sitemap.xml", "/sitemap.xml"),
      r("/page-sitemap.xml", "/sitemap.xml"),
      r("/wp-sitemap.xml", "/sitemap.xml"),
      // Once WordPress moves to its own subdomain, old image URLs keep working.
      ...(wordpress.host !== site.host ? [r("/wp-content/uploads/:path*", `${wordpress.origin}/wp-content/uploads/:path*`)] : []),
    ];
  },
};

export default nextConfig;
