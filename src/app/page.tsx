import {
  BlogSection,
  ClientMarquee,
  FinalCtaSection,
  HeroSection,
  ProofSection,
  ServicesSection,
  SuccessStoriesSection,
  TestimonialsSection,
  ViralBanner,
  WhatWeDoSection,
  WhyChooseSection,
} from "@/containers/pages-component/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <WhatWeDoSection />
      <ViralBanner />
      <ServicesSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <ProofSection />
      <TestimonialsSection />
      <BlogSection />
      <FinalCtaSection />
    </>
  );
}
