import { RichText } from "@/components/common/RichText";
import { Container } from "@/components/containers/common/Container";
import { impact } from "@/lib/data/pages/about";

/** "The Impact" — centred 40px heading over large Poppins copy. */
export const ImpactSection: React.FC = () => (
  <section className="pb-[54px] lg:pb-[100px]">
    <Container className="text-center">
      <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-[-2px] text-ink">{impact.title}</h2>
      <RichText
        html={impact.html}
        className="mx-auto mt-5 max-w-[780px] text-left font-display text-[20px] font-normal leading-[1.2] text-ink lg:text-[25px] [&_p+p]:!mt-0"
      />
    </Container>
  </section>
);
