import { FaIcon } from "@/components/common/FaIcon";
import { Container } from "@/components/containers/common/Container";
import type { ServicePage } from "@/types/site";

/** Three outlined stat cards with a chart icon, big figure and supporting line. */
export const StatCards: React.FC<{ stats: ServicePage["numbers"]["stats"]; className?: string }> = ({ stats, className = "" }) => (
  <section className={className}>
    <Container>
      <ul className="grid gap-5 md:grid-cols-3 md:gap-[30px] lg:gap-[45px]">
        {stats.map((s) => (
          <li key={s.value + s.text} className="relative rounded-[50px] border border-line px-[31px] pb-[47px] pt-[31px] md:pb-10 md:pt-[58px] lg:min-h-[249px]">
            <span className="flex h-[70px] w-[70px] md:absolute md:right-[31px] md:top-[31px] items-center justify-center rounded-full bg-peach text-orange">
              <FaIcon name="chartLine" className="text-[30px]" />
            </span>
            <p className="mt-[26px] font-display text-[28px] font-semibold leading-[1.1] tracking-[-2px] text-ink md:mt-0 md:text-[48px]">{s.value}</p>
            <p className="mt-5 text-base font-light leading-6 text-body [&_b]:font-bold" dangerouslySetInnerHTML={{ __html: s.text }} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
