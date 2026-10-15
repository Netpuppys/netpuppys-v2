import type { Metadata } from "next";
import { CaseStudyRow } from "@/containers/pages-component/our-work";
import { InnerHero, InnerPage, ProofSection } from "@/containers/shared";
import { caseStudies, ourWorkHero } from "@/lib/data/pages/our-work";

export const metadata: Metadata = {
  alternates: { canonical: "/our-work/" },
  title: "Our Work - Netpuppys",
  description: "Case studies: the campaigns that got our clients attention, conversions and measurable ROI.",
};

export default function OurWorkPage() {
  return (
    <InnerPage>
      <InnerHero title={ourWorkHero.title} titleSize="md" lead={ourWorkHero.lead} image={ourWorkHero.image} />
      <div className="mt-[100px]">
        {caseStudies.map((s) => (
          <CaseStudyRow key={s.logo.src} study={s} />
        ))}
      </div>
      <ProofSection className="mt-0" />
    </InnerPage>
  );
}
