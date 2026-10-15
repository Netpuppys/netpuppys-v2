import { MapPin } from "@/components/common/MapPin";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { offices } from "@/lib/data/pages/contact";

/** "Office Address" heading and the two peach office cards. */
export const OfficesSection: React.FC = () => (
  <section className="mb-5 lg:mb-0">
    <Container>
      <SectionTitle>{offices.title}</SectionTitle>
      <ul className="mt-5 grid gap-5 md:grid-cols-2 md:gap-[30px] lg:mt-10">
        {offices.items.map((o) => (
          <li key={o.label} className="min-h-[260px] rounded-[34px] bg-peach px-[30px] pb-10 pt-[26px] md:px-10 md:pt-10 lg:min-h-[280px]">
            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
              <MapPin />
            </span>
            <p className="text-xl font-normal leading-[30px] text-ink">{o.label}</p>
            <p className="text-xl font-normal leading-[26px] text-ink">{o.address}</p>
            <p className="mt-5 text-base font-light leading-6 text-body">Phone number:</p>
            <a href="tel:+919266707333" className="text-lg leading-[26px] text-ink hover:text-orange">
              {o.phone}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
