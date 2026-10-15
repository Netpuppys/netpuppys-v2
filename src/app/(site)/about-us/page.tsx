import type { Metadata } from "next";
import { ImpactSection, TeamSection } from "@/containers/pages-component/about";
import {
  BannerBand,
  ClientLogosSection,
  DividerBlock,
  IconCardGrid,
  InnerHero,
  InnerPage,
  SplitHeading,
  TestimonialsSection,
} from "@/containers/shared";
import { aboutHero, aboutTestimonialsHeading, leader, process } from "@/lib/data/pages/about";

export const metadata: Metadata = {
  alternates: { canonical: "/about-us/" },
  title: "About Us - Netpuppys",
  description: "We’re a team of thinkers, makers and problem-solvers helping brands grow — not just in numbers, but in meaning, relevance and recall.",
};

export default function AboutPage() {
  return (
    <InnerPage>
      <InnerHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        titleSize="md"
        leadHtml={aboutHero.html}
        leadStyle="body"
        leadWidth="max-w-[640px]"
        image={aboutHero.image}
        imageClassName="lg:mt-[75px]"
      />
      <DividerBlock className="mb-[75px] mt-10 lg:mb-[120px] lg:mt-20" />
      <ImpactSection />
      <BannerBand image={process.image} title={process.title}>
        <IconCardGrid cards={process.cards} cardClassName="lg:min-h-[349px]" />
      </BannerBand>
      <SplitHeading eyebrow={leader.eyebrow} title={leader.title} html={leader.html} link={leader.link} />
      <ClientLogosSection title="The best brands choose Netpuppys" titleStyle="heading" className="mt-[61px] lg:mt-[121px]" />
      <TeamSection />
      <DividerBlock className="mb-[75px] mt-[60px] lg:mb-[120px] lg:mt-[100px]" />
      <TestimonialsSection heading={aboutTestimonialsHeading} />
    </InnerPage>
  );
}
