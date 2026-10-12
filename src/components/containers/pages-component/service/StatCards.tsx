import { FaIcon } from "@/components/common/FaIcon";
import { Container } from "@/components/containers/common/Container";
import type { ServicePage } from "@/types/site";

/** Three outlined stat cards with a chart icon, big figure and supporting line. */
export const StatCards: React.FC<{ stats: ServicePage["numbers"]["stats"]; className?: string }> = ({ stats, className = "" }) => (
  <section className={className}>
    <Container>
      <ul className="grid gap-[30px] md:grid-cols-3 lg:gap-[45px]">
        {stats.map((s) => (
          <li key={s.value + s.text} className="relative rounded-[50px] border border-line px-[31px] pb-10 pt-[58px] lg:min-h-[249px]">
            <span className="absolute right-[31px] top-[31px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-peach text-orange">
              <FaIcon name="chartLine" className="text-[30px]" />
            </span>
            <p className="font-display text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-ink">{s.value}</p>
            <p className="mt-5 text-base font-light leading-6 text-body [&_b]:font-bold" dangerouslySetInnerHTML={{ __html: s.text }} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
