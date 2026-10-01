import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { blog } from "@/lib/data/home-content";

export const BlogSection: React.FC = () => (
  <Wrapper className="bg-blush">
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow={blog.eyebrow}
          title={blog.title}
          action={
            <Button href={blog.cta.href} variant="outline">
              {blog.cta.label}
            </Button>
          }
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {blog.posts.map((post, i) => (
          <Reveal key={post.href} delay={i * 90}>
            <Link href={post.href} className="group block h-full overflow-hidden rounded-[28px] bg-white">
              <div className="overflow-hidden">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-orange">{post.date}</p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  Read article
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </Wrapper>
);
