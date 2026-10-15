import type { Metadata } from "next";
import { Container } from "@/components/containers/common/Container";
import { FeaturedPost, PostGrid } from "@/containers/pages-component/blog";
import { InnerPage } from "@/containers/shared";
import { formatLongDate, getBlogPosts } from "@/lib/wordpress";

// Refetch from WordPress at most hourly (keep in sync with WP_REVALIDATE).
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blogs - Netpuppys",
  description: "Digital marketing insights from Netpuppys — SEO, performance marketing, social media, content and web development.",
  alternates: { canonical: "/blogs/" },
};

/** /blogs — newest post featured on top, the rest in a 3-column grid with "Load More". Posts come from WordPress. */
export default async function BlogsPage() {
  const [featured, ...rest] = await getBlogPosts();

  return (
    <InnerPage>
      <h1 className="sr-only">Blogs</h1>
      {featured ? (
        <>
          <FeaturedPost post={featured} />
          <Container className="mt-20">
            <PostGrid posts={rest.map((p) => ({ href: p.href, title: p.title, date: formatLongDate(p.date), image: p.image }))} />
          </Container>
        </>
      ) : (
        <Container className="py-40 text-center text-body">New articles are on their way — check back soon.</Container>
      )}
    </InnerPage>
  );
}
