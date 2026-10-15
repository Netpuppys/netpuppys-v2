import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { WaveDivider } from "@/components/common/WaveDivider";
import { Carousel } from "@/components/common/Carousel";
import { Container } from "@/components/containers/common/Container";
import { BlogCard, type BlogCardData } from "@/containers/shared";
import { blog } from "@/lib/data/home-content";
import { formatMonthYear, getBlogPosts } from "@/lib/wordpress";

/**
 * Centred wave hairline, then "Blog / Think further…" and the three latest
 * posts from WordPress (falls back to the static copy if WordPress is down).
 */
export const BlogSection: React.FC = async () => {
  const latest = (await getBlogPosts()).slice(0, 3);
  const posts: BlogCardData[] = latest.length
    ? latest.map((p) => ({ href: p.href, title: p.title, date: formatMonthYear(p.date), image: p.image }))
    : blog.posts;

  return (
    <section className="mt-[50px]">
      <Container>
        <WaveDivider />
      </Container>
      <Container className="max-md:px-5 md:mt-[50px] md:px-[30px]">
        <div className="pt-[10px] text-center">
          <Eyebrow as="h2">{blog.eyebrow}</Eyebrow>
          <SectionTitle className="mx-auto mt-10 max-w-[655px]">{blog.title}</SectionTitle>
        </div>

        {/* < md: one card per slide with dots, as on the live site */}
        <Carousel label="Latest blog posts" slideClassName="basis-full" gap={30} dots className="mt-5 md:hidden">
          {posts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </Carousel>
        <div className="mt-[45px] hidden gap-[30px] md:grid md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};
