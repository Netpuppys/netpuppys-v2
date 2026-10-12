import type { Metadata } from "next";
import { LeadershipSection, MissionSection } from "@/containers/pages-component/team";
import { CtaPanel, DividerBlock, InnerHero, InnerPage, SplitHeading, ValuesRow } from "@/containers/shared";
import { beliefs, joinCta, teamHero } from "@/lib/data/pages/team";

export const metadata: Metadata = {
  title: "Meet the Team - Netpuppys",
  description: "A talented team of self-starters who want to deliver the best results for our clients.",
};

export default function MeetTheTeamPage() {
  return (
    <InnerPage>
      <InnerHero eyebrow={teamHero.eyebrow} title={teamHero.title} lead={teamHero.lead} image={teamHero.image} />
      <DividerBlock className="mb-[120px] mt-20" />
      <SplitHeading eyebrow={beliefs.eyebrow} title={beliefs.title} html={beliefs.html} />
      <ValuesRow items={beliefs.values} />
      <LeadershipSection />
      <MissionSection />
      <CtaPanel title={joinCta.title} text={joinCta.text} cta={joinCta.cta} decoration="star" className="mt-[150px]" />
    </InnerPage>
  );
}
