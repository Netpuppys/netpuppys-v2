import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { finalCta } from "@/lib/data/home-content";
import { contact } from "@/lib/data/site-content";

export const FinalCtaSection: React.FC = () => (
  <Wrapper>
    <Container>
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-[40px] bg-orange px-8 py-14 text-white sm:px-14 lg:py-16">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-sun/40 blur-2xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <SectionEyebrow tone="light">{finalCta.eyebrow}</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                {finalCta.title}
                <br />
                <span className="text-ink">{finalCta.titleAccent}</span>
              </h2>
              <p className="mt-5 text-lg text-white/85">{finalCta.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={finalCta.cta.href} variant="light">
                  {finalCta.cta.label}
                </Button>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3.5 font-display text-sm font-semibold hover:bg-white/10"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {contact.phone}
                </a>
              </div>
            </div>
            <Image
              src={finalCta.dog.src}
              alt={finalCta.dog.alt}
              width={finalCta.dog.width}
              height={finalCta.dog.height}
              sizes="220px"
              className="mx-auto hidden h-80 w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] lg:block"
            />
          </div>
        </div>
      </Reveal>
    </Container>
  </Wrapper>
);
