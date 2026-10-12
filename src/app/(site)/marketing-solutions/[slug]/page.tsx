import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/containers/common/Container";
import { RichText } from "@/components/common/RichText";
import {
  CenteredHeading,
  FaqAccordion,
  ServiceIntro,
  ServiceTabs,
  StatCards,
} from "@/containers/pages-component/service";
import { CtaPanel, DividerBlock, IconCardGrid, ImageTextSplit, InnerHero, InnerPage } from "@/containers/shared";
import { getService, serviceCta, serviceExpertsImage, services } from "@/lib/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/marketing-solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: `${service.title} - Netpuppys`, description: service.hero.text.slice(0, 155) };
}

/** One template for all eight service pages (WordPress "single page" template 5043). */
export default async function ServicePageRoute({ params }: PageProps<"/marketing-solutions/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <InnerPage>
      <InnerHero
        eyebrow="Marketing solutions"
        title={s.title}
        lead={s.hero.text}
        leadWidth="max-w-[440px]"
        cta={{ label: "Get a free audit", href: "/contact" }}
        image={s.hero.image}
        className="lg:!pt-[60px]"
      />
      <DividerBlock className="mb-[100px] mt-5" />

      <ServiceIntro intro={s.intro} />
      <CenteredHeading eyebrow={s.secret.eyebrow} title={s.secret.title} width="max-w-[845px]" className="mt-[100px]" />
      <ImageTextSplit image={s.showcase.image} title={s.showcase.title} html={s.showcase.html} className="mt-20" />

      {/* Experts: copy left, dashboard image right */}
      <section className="mt-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[512px_1fr] lg:gap-0">
          <div>
            <h3 className="font-display text-[30px] font-medium leading-10 tracking-[-1.5px] text-ink lg:text-[40px] lg:tracking-[-2px]">{s.experts.title}</h3>
            <RichText html={s.experts.html} className="mt-[30px] text-base font-light leading-6 text-body" />
          </div>
          <Image
            src={serviceExpertsImage.src}
            alt={serviceExpertsImage.alt}
            width={serviceExpertsImage.width}
            height={serviceExpertsImage.height}
            sizes="(min-width: 1320px) 614px, 100vw"
            className="w-full rounded-[30px] lg:ml-auto lg:w-[614px] lg:rounded-[40px]"
          />
        </Container>
      </section>

      <DividerBlock className="my-[100px]" />
      <CenteredHeading eyebrow={s.included.eyebrow} title={s.included.title} text={s.included.text} />

      {/* Tabs straddle the top of a blush → white band that holds the "formula" cards */}
      <section className="relative mt-[60px]">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[120px] bg-gradient-to-b from-blush to-white" />
        <div className="relative">
          <ServiceTabs tabs={s.tabs} />
          <CenteredHeading eyebrow={s.formula.eyebrow} title={s.formula.title} width="max-w-[768px]" className="mt-[140px]" />
          <Container className="mt-10">
            <IconCardGrid
              cols={3}
              cards={s.formula.cards.map((c) => ({ ...c, icon: "checkCircleOutline" as const }))}
              className="lg:!gap-5"
              cardClassName="lg:min-h-[373px]"
            />
          </Container>
        </div>
      </section>

      <CenteredHeading eyebrow={s.numbers.eyebrow} title={s.numbers.title} className="mt-[130px]" />
      <StatCards stats={s.numbers.stats} className="mt-10" />

      {s.faq && (
        <>
          <CenteredHeading eyebrow={s.faq.eyebrow} title={s.faq.title} text={s.faq.text} className="mt-[130px]" />
          <FaqAccordion items={s.faq.items} className="mt-[60px]" />
        </>
      )}

      <CtaPanel title={serviceCta.title} cta={serviceCta.cta} className="mt-[130px]" />
    </InnerPage>
  );
}
