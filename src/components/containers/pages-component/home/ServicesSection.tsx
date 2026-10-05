import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { FaIcon } from "@/components/common/FaIcon";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { services } from "@/lib/data/home-content";

/**
 * Team banner (straddling the start of the peach gradient), the four service
 * cards, and the "Think you can go viral without us?" strip with the
 * lying-down mascot — one peach-to-white band on the WordPress site.
 */
export const ServicesSection: React.FC = () => (
  <section className="relative mt-[74px]">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 top-[256px] bg-gradient-to-b from-peach to-[rgba(247,247,250,0)]"
    />
    <Container className="relative">
      <Image
        src={services.banner.src}
        alt={services.banner.alt}
        width={services.banner.width}
        height={services.banner.height}
        sizes="(min-width: 1320px) 1280px, 100vw"
        className="aspect-[1280/731] w-full rounded-[30px] object-cover lg:rounded-[50px]"
      />

      <SectionTitle className="mt-[46px]">{services.title}</SectionTitle>
      <Button href={services.cta.href} className="mt-5">
        {services.cta.label}
      </Button>

      <div className="mt-[50px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((s) => (
          <article key={s.title} className="flex flex-col rounded-[34px] bg-white px-[30px] pb-[30px] pt-10 lg:min-h-[419px]">
            <Link
              href={s.href ?? "#"}
              aria-label={s.title}
              tabIndex={-1}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-peach text-orange"
            >
              <FaIcon name={s.icon} className="text-2xl" />
            </Link>
            <h3 className="mt-[25px] max-w-[215px]">
              <Link href={s.href ?? "#"} className="font-display text-xl font-bold leading-6 tracking-[-0.6px] text-ink hover:text-orange">
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

      <div className="mt-12 flex flex-col items-center gap-6 pb-5 md:mt-[111px] md:flex-row md:items-end md:justify-between md:pb-[10px] md:pl-[10px] md:pr-[92px]">
        <SectionTitle className="max-w-[579px] md:mb-[56px]">{services.viral.title}</SectionTitle>
        <Image
          src={services.viral.dog.src}
          alt={services.viral.dog.alt}
          width={services.viral.dog.width}
          height={services.viral.dog.height}
          sizes="331px"
          className="w-[260px] md:w-[331px]"
        />
      </div>
    </Container>
  </section>
);
