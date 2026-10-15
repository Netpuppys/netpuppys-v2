import type { Metadata } from "next";
import { LegalContent } from "@/containers/pages-component/legal";
import { InnerPage } from "@/containers/shared";
import { legalPages } from "@/lib/data/pages/legal";

export const metadata: Metadata = { alternates: { canonical: "/privacy-policy/" },  title: "Privacy Policy - Netpuppys" };

export default function Page() {
  return (
    <InnerPage>
      <LegalContent page={legalPages.privacy} />
    </InnerPage>
  );
}
