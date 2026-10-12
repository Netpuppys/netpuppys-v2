import Image from "next/image";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { executiveTeam, leadership } from "@/lib/data/pages/team";

/** Leadership cards, a hairline, then the (currently empty) Executive Team heading — as on WordPress. */
export const LeadershipSection: React.FC = () => (
  <section className="mt-[120px]">
    <Container>
      <SectionTitle>{leadership.title}</SectionTitle>
      <ul className="mt-[30px] grid gap-5 sm:grid-cols-2 lg:flex">
        {leadership.people.map((p) => (
          <li key={p.src} className="lg:w-[413px]">
            <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="413px" className="aspect-square w-full rounded-[30px]" />
          </li>
        ))}
      </ul>
      <hr className="mt-[50px] border-line" />
      <SectionTitle className="mt-[120px]">{executiveTeam.title}</SectionTitle>
    </Container>
  </section>
);
