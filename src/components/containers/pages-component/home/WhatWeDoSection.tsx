import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { FaIcon } from "@/components/common/FaIcon";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { whatWeDo } from "@/lib/data/home-content";

export const WhatWeDoSection: React.FC = () => (
  <section className="mt-[70px]">
    <Container>
      <div className="grid gap-6 lg:grid-cols-[640px_1fr] lg:gap-0">
        <div>
          <Eyebrow as="h2">{whatWeDo.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5 max-w-[640px]">{whatWeDo.title}</SectionTitle>
        </div>
        <div className="lg:ml-auto lg:max-w-[512px] lg:pt-[60px]">
          <p className="text-base font-light leading-6 text-body">{whatWeDo.description}</p>
          <Button href={whatWeDo.cta.href} variant="link" className="mt-[30px]">
            {whatWeDo.cta.label}
          </Button>
        </div>
      </div>

      <div className="mt-[70px] grid gap-[30px] md:grid-cols-3 lg:gap-[45px]">
        {whatWeDo.pillars.map((p) => (
          <article key={p.title} className="relative rounded-[50px] border border-line px-[31px] pb-[45px] pt-[58px] lg:min-h-[336px]">
            <span className="absolute right-[31px] top-[31px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-peach text-orange">
              <FaIcon name={p.icon} className="text-[30px]" />
            </span>
            <h3 className="max-w-[201px] font-display text-[28px] font-bold leading-[1.2] tracking-[-0.6px] text-ink">{p.title}</h3>
            <p className="mt-5 text-base font-light leading-6 text-body">{p.description}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
