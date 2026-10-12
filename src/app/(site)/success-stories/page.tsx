import type { Metadata } from "next";
import { LogoStrip, PortfolioGrid } from "@/containers/pages-component/success-stories";
import { InnerHero, InnerPage, TestimonialsSection } from "@/containers/shared";
import { successHero, successTestimonials } from "@/lib/data/pages/success-stories";

export const metadata: Metadata = {
  title: "Success Stories - Netpuppys",
  description: "See how our digital marketing solutions drive results for clients.",
};

export default function SuccessStoriesPage() {
  return (
    <InnerPage>
      <InnerHero eyebrow={successHero.eyebrow} title={successHero.title} lead={successHero.lead} leadWidth="max-w-[440px]" image={successHero.image} />
      <LogoStrip />
      <PortfolioGrid />
      <TestimonialsSection
        heading="What our happy customers are saying"
        items={successTestimonials}
        tone="peach"
        reviewsLabel="5000+ Client reviews"
        className="mt-[120px]"
      />
    </InnerPage>
  );
}
