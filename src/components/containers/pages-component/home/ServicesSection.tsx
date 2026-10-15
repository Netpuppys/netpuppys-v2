import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { FaIcon } from "@/components/common/FaIcon";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { services } from "@/lib/data/home-content";
import type { FeatureCard } from "@/types/site";

interface ServicesSectionProps {
  items?: FeatureCard[];
  showCta?: boolean;
  id?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ items = services.items, showCta = true, id }) => (
  <section id={id} className="relative mt-10 scroll-mt-24 md:mt-[74px]">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 top-[80px] bg-gradient-to-b md:top-[256px] from-peach to-[rgba(247,247,250,0)]"
    />
    <Container className="relative">
      <Image
        src={services.banner.src}
        alt={services.banner.alt}
        width={services.banner.width}
        height={services.banner.height}
        sizes="(min-width: 1320px) 1280px, 100vw"
        className="h-[160px] w-full rounded-[30px] object-cover md:aspect-[1280/731] md:h-auto lg:rounded-[50px]"
      />

      <SectionTitle className="mt-7 md:mt-[46px]">{services.title}</SectionTitle>
      {showCta && (
        <Button href={services.cta.href} className="mt-5">
          {services.cta.label}
        </Button>
      )}

      <div className="mt-[30px] grid gap-5 sm:grid-cols-2 md:mt-[50px] lg:grid-cols-4">
        {items.map((s) => (
          <article key={s.title} className="flex flex-col rounded-[34px] bg-white px-[30px] pb-[30px] pt-10 lg:min-h-[419px]">
            <Link
              href={s.href ?? "#"}
              aria-label={s.title}
              tabIndex={-1}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-peach text-orange"
            >
              <FaIcon name={s.icon} className="text-2xl" />
            </Link>
            <h3 className="mt-4 leading-[19.8px] sm:max-w-[215px] md:mt-[25px] md:leading-6">
              <Link href={s.href ?? "#"} className="font-display text-lg font-bold leading-[19.8px] tracking-[-0.6px] text-ink hover:text-orange md:text-xl md:leading-6">
                {s.title}
              </Link>
            </h3>
            <p className="mt-[18px] flex-1 text-base font-light leading-6 text-body">{s.description}</p>
            <Button href={s.href ?? "#"} variant="link" className="mt-6 self-start">
              Learn more
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-[23px] px-[10px] md:mt-[111px] md:flex-row md:items-end md:justify-between md:gap-6 md:pb-[10px] md:pl-[10px] md:pr-[92px]">
        <SectionTitle className="max-w-[579px] md:mb-[56px]">{services.viral.title}</SectionTitle>
        <Image
          src={services.viral.dog.src}
          alt={services.viral.dog.alt}
          width={services.viral.dog.width}
          height={services.viral.dog.height}
          sizes="331px"
          className="w-[296px] md:w-[331px]"
        />
      </div>
    </Container>
  </section>
);
