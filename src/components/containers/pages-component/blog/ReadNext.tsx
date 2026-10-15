import { Container } from "@/components/containers/common/Container";
import { BlogCard } from "@/containers/shared";
import { formatMonthYear, type PostSummary } from "@/lib/wordpress";

/** "What to read next": the three newest other blog posts. */
export const ReadNext: React.FC<{ posts: PostSummary[] }> = ({ posts }) =>
  posts.length ? (
    <Container className="mt-[100px] lg:mt-[120px]">
      <h2 className="text-center font-display text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-5xl lg:leading-[52.8px] lg:tracking-[-2px]">
        What to read next
      </h2>
      <div className="mt-[60px] grid gap-[30px] md:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.href} post={{ href: p.href, title: p.title, date: formatMonthYear(p.date), image: p.image }} />
        ))}
      </div>
    </Container>
  ) : null;
