import {
  BlogSection,
  ClientLogosSection,
  HeroSection,
  HeroStatsSection,
  ProofSection,
  ServicesSection,
  SuccessStoriesSection,
  TestimonialsSection,
  WhatWeDoSection,
  WhyChooseSection,
} from "@/containers/pages-component/home";

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
      <TestimonialsSection />
    </>
  );
}
