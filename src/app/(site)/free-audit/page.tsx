import type { Metadata } from "next";
import { AuditChecklist } from "@/containers/pages-component/contact";
import { ContactForm, Credentials, DividerBlock, InnerHero, InnerPage } from "@/containers/shared";
import { formPagesImage, freeAudit } from "@/lib/data/pages/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/free-audit/" },
  title: "Free Audit - Netpuppys",
  description: "Get a free marketing audit from Netpuppys — we review your goals, audience, website and content.",
};

export default function FreeAuditPage() {
  return (
    <InnerPage>
      <InnerHero
        eyebrow={freeAudit.eyebrow}
        title={freeAudit.title}
        titleWidth="max-w-[544px]"
        lead={freeAudit.lead}
        leadWidth="max-w-[544px]"
        image={formPagesImage}
        aside={
          <ContactForm
            source="Free audit"
            title={freeAudit.formTitle}
            submitLabel={freeAudit.submit}
            decoration="rocket"
            className="lg:ml-auto lg:mt-11 lg:w-[534px]"
          />
        }
      >
        <AuditChecklist />
      </InnerHero>
      <DividerBlock className="mb-[70px] mt-[100px]" />
      <Credentials />
    </InnerPage>
  );
}
