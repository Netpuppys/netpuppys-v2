import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/containers/common/Container";
import { formatLongDate, type PostSummary } from "@/lib/wordpress";

/** /blogs hero: the newest post in a blush 40px-rounded panel — date, title, "Read full story", image right. */
export const FeaturedPost: React.FC<{ post: PostSummary }> = ({ post }) => (
  <Container>
    <div className="mt-[50px] grid items-center gap-10 rounded-[40px] bg-blush px-6 py-12 md:px-[77px] lg:min-h-[912px] lg:grid-cols-2 lg:py-[100px]">
      <div className="lg:max-w-[507px]">
        <time className="text-base font-light leading-6 text-body">{formatLongDate(post.date)}</time>
        <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-5xl lg:leading-[52.8px] lg:tracking-[-2px]">
          {post.title}
        </h2>
        <Button href={post.href} variant="link" className="mt-[25px]">
          Read full story
        </Button>
      </div>
      {post.image && (
        <Image
          src={post.image.src}
          alt={post.image.alt || post.title}
          width={post.image.width}
          height={post.image.height}
          priority
          sizes="(min-width: 1024px) 456px, 100vw"
          className="aspect-[456/470] w-full rounded-[30px] object-cover lg:ml-auto lg:w-[456px]"
        />
      )}
    </div>
  </Container>
);
