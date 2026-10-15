import type { Metadata } from "next";
import { HeroSection, HeroStatsSection, ServicesSection, WhatWeDoSection, WhyChooseSection } from "@/containers/pages-component/home";
import { LandingContactSection } from "@/containers/pages-component/landing";
import { ClientLogosSection, ProofSection, TestimonialsSection } from "@/containers/shared";
import { bookCall, landingHero, landingServices } from "@/lib/data/pages/landing";

export const metadata: Metadata = {
  alternates: { canonical: "/digital-marketing-agency/" },
  title: "Top Trusted Digital Marketing Agency in India | Netpuppys",
  description: "Growth-focused performance marketing agency. ROI-driven campaigns across Google, Meta, LinkedIn, TikTok, Snapchat and more.",
};

/**
 * Paid-traffic landing page — homepage sections with a lead form instead of
 * site navigation. Deliberately has NO links to other pages (only on-page
 * anchors, phone and email) so ad visitors stay on the form.
 */
export default function DigitalMarketingAgencyPage() {
  return (
    <>
      <HeroSection content={landingHero} compactTitle />
      <HeroStatsSection expertsHref="#contact" />
      <WhatWeDoSection id="what-we-do" showCta={false} />
      <ServicesSection id="services" items={landingServices} showCta={false} linked={false} />
      <WhyChooseSection id="why-choose-us" cta={bookCall} />
      <ClientLogosSection />
      <ProofSection cta={bookCall} className="mt-0" />
      <LandingContactSection />
      <TestimonialsSection className="mt-[60px]" reviewsLink={false} />
    </>
  );
}
