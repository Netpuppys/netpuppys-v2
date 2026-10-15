import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { SolutionCardsSection } from "@/containers/pages-component/solutions";
import { ClientLogosSection, CtaPanel, DividerBlock, ImageTextSplit, InnerHero, InnerPage, ProofSection } from "@/containers/shared";
import { commitment, solutionsCta, solutionsHero, solutionsIntro } from "@/lib/data/pages/solutions";

export const metadata: Metadata = {
  alternates: { canonical: "/marketing-solutions/" },
  title: "Marketing Solutions - Netpuppys",
  description: "Web development, SEO, performance marketing, social media, UGC, AI content, influencer marketing and branding — creative and performance under one roof.",
};

export default function MarketingSolutionsPage() {
  return (
    <InnerPage>
      <InnerHero
        eyebrow={solutionsHero.eyebrow}
        title={solutionsHero.title}
        lead={solutionsHero.lead}
        leadWidth="max-w-[440px]"
        cta={solutionsHero.cta}
        image={solutionsHero.image}
      />
      <section className="mt-[50px] lg:mt-[130px]">
        <Container className="text-center">
          <SectionTitle className="mx-auto max-w-[768px]">{solutionsIntro.title}</SectionTitle>
          <p className="mx-auto mt-5 max-w-[768px] text-base font-light leading-6 text-body">{solutionsIntro.text}</p>
        </Container>
      </section>
      <SolutionCardsSection />
      <DividerBlock className="mb-[50px] mt-0 lg:mb-20" />
      <ImageTextSplit image={commitment.image} title={commitment.title} html={commitment.html} link={commitment.link} />
      <ProofSection corners="all" className="mt-[61px] lg:mt-20" />
      <ClientLogosSection />
      <CtaPanel title={solutionsCta.title} cta={solutionsCta.cta} className="mt-[127px] lg:mt-[110px]" />
    </InnerPage>
  );
}
