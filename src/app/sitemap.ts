import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { getAllPosts, SITE_URL } from "@/lib/wordpress";

// Rebuilt hourly so new WordPress posts appear (same cadence as the blog pages).
export const revalidate = 3600;

/** Indexable pages (thank-you page excluded — it is noindex). */
const PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/meet-the-team/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/marketing-solutions/", priority: 0.9, changeFrequency: "monthly" },
  ...services.map((s) => ({ path: `/marketing-solutions/${s.slug}/`, priority: 0.9, changeFrequency: "monthly" as const })),
  { path: "/our-work/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/success-stories/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/free-audit/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/digital-marketing-agency/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blogs/", priority: 0.8, changeFrequency: "daily" },
  { path: "/terms-conditions/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/refund-policy/", priority: 0.2, changeFrequency: "yearly" },
];

/** /sitemap.xml — every page plus every WordPress post (/blog/<slug>/), same URL as before. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p.path}`, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}/`,
      lastModified: new Date(`${p.modified}+05:30`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
