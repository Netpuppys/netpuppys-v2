import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody, PostHeader, ReadNext } from "@/containers/pages-component/blog";
import { InnerPage } from "@/containers/shared";
import { getAllPosts, getBlogPosts, getPostBySlug, postMetadata } from "@/lib/wordpress";

// Refetch from WordPress at most hourly (keep in sync with WP_REVALIDATE).
export const revalidate = 3600;
/** Posts published after the last build are rendered on first visit, then cached. */
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return post ? postMetadata(post) : {};
}

/** Single post (any category — Blog posts and the "Stories" case studies share the /blog/<slug> URL, as on WordPress). */
export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const next = (await getBlogPosts()).filter((p) => p.slug !== post.slug).slice(0, 3);
  const schema = post.seo?.schema;

  return (
    <InnerPage>
      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ) : null}
      <article>
        <PostHeader post={post} />
        <PostBody post={post} />
      </article>
      <ReadNext posts={next} />
    </InnerPage>
  );
}
