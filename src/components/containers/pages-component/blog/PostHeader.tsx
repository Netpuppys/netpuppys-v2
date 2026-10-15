import Image from "next/image";
import { Container } from "@/components/containers/common/Container";
import { formatMonthCommaYear, type Post } from "@/lib/wordpress";

/** Single post top: centred date, title, category pill, then the 830px featured image. */
export const PostHeader: React.FC<{ post: Post }> = ({ post }) => (
  <Container className="pt-[60px] text-center lg:pt-[110px]">
    <time dateTime={post.date} className="text-base font-light leading-6 text-body">
      {formatMonthCommaYear(post.date)}
    </time>
    <h1 className="mx-auto mt-5 max-w-[750px] font-display text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-5xl lg:leading-[52.8px] lg:tracking-[-2px]">
      {post.title}
    </h1>
    {post.categories.length > 0 && (
      <p className="mx-auto mt-5 inline-block rounded-[18px] bg-white px-[15px] py-[5px] text-sm font-light leading-[19.6px] text-body">
        {post.categories.map((c) => c.name).join(", ")}
      </p>
    )}
    {post.image && (
      <Image
        src={post.image.src}
        alt={post.image.alt || post.title}
        width={post.image.width}
        height={post.image.height}
        priority
        sizes="(min-width: 870px) 830px, 100vw"
        className="mx-auto mt-[57px] h-auto w-full max-w-[830px] rounded-[30px]"
      />
    )}
  </Container>
);
