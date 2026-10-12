import { FaIcon } from "@/components/common/FaIcon";
import { RichText } from "@/components/common/RichText";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import type { ServicePage } from "@/types/site";

/** Opening statement (left) and the deliverables checklist (right), separated by a hairline. */
export const ServiceIntro: React.FC<{ intro: ServicePage["intro"] }> = ({ intro }) => (
  <section>
    <Container className="grid gap-10 lg:grid-cols-[577px_1fr] lg:gap-[100px]">
      <div className="lg:pt-[22px]">
        <SectionTitle>{intro.title}</SectionTitle>
        <RichText html={intro.html} className="mt-[30px] text-base font-light leading-6 text-body" />
      </div>
      <ul className="flex flex-col gap-5 border-line lg:border-l lg:pl-[83px] lg:pt-[26px]">
        {intro.checklist.map((item) => (
          <li key={item} className="flex gap-[6px]">
            <FaIcon name="checkCircleOutline" className="mt-0.5 w-[30px] shrink-0 text-2xl text-orange" />
            <span className="text-base font-light leading-6 text-body">{item}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
