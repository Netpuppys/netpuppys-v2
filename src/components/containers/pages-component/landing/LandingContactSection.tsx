import { Container } from "@/components/containers/common/Container";
import { SlashDivider } from "@/components/common/SlashDivider";
import { ContactForm } from "@/containers/shared/ContactForm";
import { landingContact } from "@/lib/data/pages/landing";
import { contact } from "@/lib/data/site-content";

/** Full-width orange contact band with the extended lead form (website, service, budget). */
export const LandingContactSection: React.FC = () => (
  <section id="contact" className="mt-[50px] scroll-mt-24 bg-orange py-16 text-white lg:py-[75px]">
    <Container className="grid gap-12 lg:grid-cols-[640px_1fr] lg:gap-0">
      <div className="lg:pt-10">
        <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-1.5px] lg:text-[66px] lg:tracking-[-2px]">{landingContact.title}</h2>
        {landingContact.paragraphs.map((p) => (
          <p key={p.slice(0, 20)} className="mt-5 max-w-[512px] text-xl font-normal leading-[26px] first:mt-[30px]">
            {p}
          </p>
        ))}
        <div className="mt-[60px] flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
          <div className="flex items-start sm:w-[320px] sm:pl-[30px]">
            <div className="flex-1">
              <p className="text-base font-light">Phone number:</p>
              <a href={contact.phoneHref} className="mt-1.5 block font-display text-base">
                {contact.phone}
              </a>
            </div>
            <SlashDivider className="mr-[38px] hidden h-10 w-10 fill-white/60 sm:block" />
          </div>
          <div>
            <p className="text-base font-light">Email address:</p>
            <a href="mailto:digital@netpuppys.com" className="mt-1.5 block font-display text-base">
              digital@netpuppys.com
            </a>
          </div>
        </div>
      </div>
      <ContactForm
        source="Landing page — digital-marketing-agency"
        fields={["name", "email", "company", "website", "phone", "service", "budget"]}
        services={landingContact.services}
        budgets={landingContact.budgets}
        submitLabel="Book a call"
        className="text-left lg:ml-auto lg:mt-[75px] lg:w-[508px]"
      />
    </Container>
  </section>
);
