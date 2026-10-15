import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Carousel } from "@/components/common/Carousel";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { successStories } from "@/lib/data/home-content";

/** Left intro + 2-up case study carousel (image cards with dark fade, metric and label). */
export const SuccessStoriesSection: React.FC = () => (
  <section className="mt-[60px] lg:mt-[100px]">
    <Container className="grid gap-[31px] lg:grid-cols-[448px_1fr] lg:gap-0">
      <div className="flex flex-col lg:min-h-[400px]">
        <Eyebrow as="h2" className="lg:mt-[21px]">
          {successStories.eyebrow}
        </Eyebrow>
        <SectionTitle className="mt-5 lg:mt-[62px]">{successStories.title}</SectionTitle>
        <Button href={successStories.cta.href} variant="link" underline="sand" className="mt-[43px] self-start lg:mt-auto">
          {successStories.cta.label}
        </Button>
      </div>

      <Carousel label="Success stories" slideClassName="basis-full md:basis-1/2" gap={30} slidesToScroll="auto" dots>
        {successStories.items.map((c) => (
          <Link
            key={c.client}
            href={c.href}
            className="group relative block h-[400px] overflow-hidden rounded-[50px] bg-cover bg-center md:aspect-[401/400] md:h-auto"
            style={{ backgroundImage: `url(${c.image.src})` }}
            aria-label={`${c.client}: ${c.metric} ${c.label}`}
          >
            <span className="absolute inset-0 bg-gradient-to-b from-[rgba(156,156,156,0.18)] to-black opacity-70" />
            <span className="absolute inset-x-[30px] bottom-[45px] text-white md:inset-x-10">
              <span className="block font-display text-[26px] font-medium leading-[28.6px] tracking-[-1px] md:text-[40px] md:leading-[56px] md:tracking-[-2px]">{c.metric}</span>
              <span className="block font-display text-lg font-bold leading-[19.8px] tracking-[-0.6px] md:-mt-2 md:text-xl md:leading-7">{c.label}</span>
              <span className="mt-3 block h-px w-full bg-white" />
            </span>
          </Link>
        ))}
      </Carousel>
    </Container>
  </section>
);
