import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { whatWeDo } from "@/lib/data/home-content";

export const WhatWeDoSection: React.FC = () => (
  <Wrapper id="what-we-do">
    <Container>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <SectionHeading eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-ink-soft">{whatWeDo.description}</p>
          <Button href={whatWeDo.cta.href} variant="link" className="mt-6">
            {whatWeDo.cta.label}
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {whatWeDo.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="group h-full rounded-[28px] border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-peach hover:shadow-[0_30px_60px_-30px_rgba(255,92,0,0.45)]">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-muted">0{i + 1}</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-peach text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <Icon name={p.icon} />
                </span>
              </div>
              <h3 className="mt-10 font-display text-2xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{p.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  </Wrapper>
);
