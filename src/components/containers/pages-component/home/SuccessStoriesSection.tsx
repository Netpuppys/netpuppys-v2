import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { successStories } from "@/lib/data/home-content";
import type { CaseStudy } from "@/types/site";

const tones: Record<CaseStudy["tone"], string> = {
  orange: "bg-orange text-white",
  ink: "bg-ink text-white",
  yellow: "bg-sun text-ink",
  peach: "bg-peach text-ink",
};

export const SuccessStoriesSection: React.FC = () => (
  <Wrapper id="work">
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow={successStories.eyebrow}
          title={successStories.title}
          action={
            <Button href={successStories.cta.href} variant="outline">
              {successStories.cta.label}
            </Button>
          }
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {successStories.items.map((c, i) => (
          <Reveal key={c.client} delay={i * 80}>
            <Link
              href={c.href}
              className={[
                "group relative flex h-72 flex-col justify-between overflow-hidden rounded-[28px] p-7 transition-transform duration-300 hover:-translate-y-1",
                tones[c.tone],
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold leading-snug">{c.client}</h3>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-current/10 ring-1 ring-current/20 transition-transform group-hover:-rotate-45">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>
              <div>
                <p className="font-display text-6xl font-semibold tracking-tight">{c.metric}</p>
                <p className="mt-1 text-base opacity-80">{c.label}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </Wrapper>
);
