import type { Metadata } from "next";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Container } from "@/components/containers/common/Container";
import { OpenPositionsSection } from "@/containers/pages-component/careers";
import {
  BannerBand,
  DividerBlock,
  IconCardGrid,
  ImageTextSplit,
  InnerHero,
  InnerPage,
  SplitHeading,
  ValuesRow,
} from "@/containers/shared";
import { benefits, careersHero, companyValues, lifeAt } from "@/lib/data/pages/careers";

export const metadata: Metadata = {
  alternates: { canonical: "/careers/" },
  title: "Careers - Netpuppys",
  description: "Join the Netpuppys team of revolutionaries.",
};

export default function CareersPage() {
  return (
    <InnerPage>
      <InnerHero eyebrow={careersHero.eyebrow} title={careersHero.title} lead={careersHero.lead} cta={careersHero.cta} image={careersHero.image} />
      <DividerBlock className="mb-[80px] mt-10 lg:mb-[120px] lg:mt-20" />
      <ImageTextSplit image={lifeAt.image} imageSize="wide" title={lifeAt.title} html={lifeAt.html} link={lifeAt.link} />
      <Container className="mt-[61px] lg:mt-[120px]">
        <Eyebrow as="h2">{companyValues.eyebrow}</Eyebrow>
      </Container>
      <SplitHeading title={companyValues.title} html={companyValues.html} className="mt-5" />
      <ValuesRow items={companyValues.values} />
      <BannerBand image={benefits.image} title={benefits.title} from="lavender" className="mt-[70px] lg:mt-[100px]">
        <IconCardGrid cards={benefits.cards} cols={3} />
      </BannerBand>
      <DividerBlock className="mb-[55px] mt-0 lg:mb-[120px]" />
      <OpenPositionsSection />
    </InnerPage>
  );
}
