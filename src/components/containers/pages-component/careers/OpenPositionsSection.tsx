import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { openPositions } from "@/lib/data/pages/careers";

/** "Open positions" intro and the list of job cards. */
export const OpenPositionsSection: React.FC = () => (
  <section id="open-positions" className="scroll-mt-24">
    <Container className="text-center">
      <SectionTitle className="mx-auto max-w-[850px]">{openPositions.title}</SectionTitle>
      <p className="mx-auto mt-5 max-w-[850px] text-base font-light leading-6 text-body">
        Don’t miss out on the opportunity to join a dynamic and forward-thinking team. Drop us an email at{" "}
        <a href={`mailto:${openPositions.email}`} className="font-bold text-ink">
          {openPositions.email}
        </a>
        , and let’s start a conversation about how your talents can align with our exciting opportunities. We can’t wait to hear from you!
      </p>
    </Container>
    <Container className="mt-[31px] md:mt-[50px]">
      <ul className="mx-auto flex max-w-[1060px] flex-col gap-5">
        {openPositions.jobs.map((j, i) => (
          <li key={`${j.title}-${i}`}>
            <a href={j.href} target="_blank" rel="noopener noreferrer" className="group block rounded-[30px] bg-peach px-5 pb-5 pt-7 hover:bg-blush md:p-10">
              <span className="block font-display text-lg font-bold leading-[19.8px] tracking-[-0.6px] text-ink group-hover:text-orange max-md:max-w-[260px] md:text-xl md:leading-7">{j.title}</span>
              <span className="mt-[3px] block md:mt-1 text-base font-light leading-6 text-body">{j.meta}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
