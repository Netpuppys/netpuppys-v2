import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { testimonials } from "@/lib/data/home-content";

export const TestimonialsSection: React.FC = () => (
  <Wrapper>
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          action={
            <Button href={testimonials.cta.href} variant="outline">
              {testimonials.cta.label}
            </Button>
          }
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure
              className={[
                "flex h-full flex-col rounded-[28px] p-8",
                i === 1 ? "bg-peach" : "border border-line bg-white",
              ].join(" ")}
            >
              <svg viewBox="0 0 32 24" className="h-7 w-9 text-orange" fill="currentColor" aria-hidden="true">
                <path d="M0 24V14C0 6 4 1 12 0l1 4C8 5 6 8 6 12h6v12H0Zm18 0V14c0-8 4-13 12-14l1 4c-5 1-7 4-7 8h6v12H18Z" />
              </svg>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                <Image
                  src={t.photo.src}
                  alt={t.photo.alt}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-display font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
                <div className="flex text-sun">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="h-3.5 w-3.5" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Container>
  </Wrapper>
);
