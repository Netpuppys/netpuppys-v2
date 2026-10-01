import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { services } from "@/lib/data/home-content";

export const ServicesSection: React.FC = () => (
  <Wrapper id="services">
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          action={<Button href={services.cta.href}>{services.cta.label}</Button>}
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <Link
              href={s.href ?? "#"}
              className="group flex h-full flex-col rounded-[28px] bg-blush p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-ink"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange shadow-sm transition-colors group-hover:bg-orange group-hover:text-white">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-8 font-display text-xl font-semibold text-ink transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft transition-colors group-hover:text-white/70">
                {s.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-orange">
                Learn more
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </Wrapper>
);
