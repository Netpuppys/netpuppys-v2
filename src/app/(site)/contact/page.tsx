import type { Metadata } from "next";
import { ContactDetails, OfficesSection } from "@/containers/pages-component/contact";
import { ContactForm, DividerBlock, InnerHero, InnerPage } from "@/containers/shared";
import { contactPage, formPagesImage } from "@/lib/data/pages/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/contact/" },
  title: "Contact - Netpuppys",
  description: "Call +91 9266707333, email digital@netpuppys.com or send us a message — we’d love to hear about your business.",
};

export default function ContactPage() {
  return (
    <InnerPage>
      <InnerHero
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        lead={contactPage.lead}
        leadWidth="max-w-[512px]"
        image={formPagesImage}
        aside={<ContactForm source="Contact page" submitLabel="Get in touch" className="lg:ml-auto lg:mt-10 lg:w-[508px]" />}
      >
        <ContactDetails />
      </InnerHero>
      <DividerBlock className="mb-[80px] mt-10 lg:mt-20" />
      <OfficesSection />
    </InnerPage>
  );
}
