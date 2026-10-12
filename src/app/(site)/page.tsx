import {
  BlogSection,
  HeroSection,
  HeroStatsSection,
  ServicesSection,
  SuccessStoriesSection,
  WhatWeDoSection,
  WhyChooseSection,
} from "@/containers/pages-component/home";
import { ClientLogosSection, ProofSection, TestimonialsSection } from "@/containers/shared";

/** Homepage — section order mirrors netpuppys.com. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroStatsSection />
      <WhatWeDoSection />
      <ServicesSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <ClientLogosSection />
      <BlogSection />
      <ProofSection />
      <TestimonialsSection overlap />
    </>
  );
}
