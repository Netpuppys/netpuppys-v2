import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { WaveDivider } from "@/components/common/WaveDivider";
import { Container } from "@/components/containers/common/Container";
import { blog } from "@/lib/data/home-content";

/** Centred wave hairline, then "Blog / Think further…" and the three latest posts. */
export const BlogSection: React.FC = () => (
  <section className="mt-[50px]">
    <Container>
      <WaveDivider />
    </Container>
    <Container className="mt-[50px] px-[30px]">
      <div className="pt-[10px] text-center">
        <Eyebrow as="h2">{blog.eyebrow}</Eyebrow>
        <SectionTitle className="mx-auto mt-10 max-w-[655px]">{blog.title}</SectionTitle>
      </div>

      <div className="mt-[45px] grid gap-[30px] md:grid-cols-3">
        {blog.posts.map((post) => (
          <article key={post.href} className="overflow-hidden rounded-[50px] border border-line lg:min-h-[458px]">
            <Link href={post.href} tabIndex={-1} aria-hidden="true">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                sizes="(min-width: 1320px) 400px, (min-width: 768px) 33vw, 100vw"
                className="aspect-[398/275] w-full rounded-t-[50px] object-cover"
              />
            </Link>
            <div className="px-[35px] pb-10 pt-[30px]">
              <time className="text-base font-light leading-6 text-body">{post.date}</time>
              <h3 className="mt-2">
                <Link href={post.href} className="font-display text-xl font-bold leading-6 tracking-[-0.6px] text-ink hover:text-orange">
                  {post.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
