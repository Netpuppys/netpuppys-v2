import { CountUp } from "@/components/common/CountUp";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Container } from "@/components/containers/common/Container";
import { proof } from "@/lib/data/home-content";

export const ProofSection: React.FC = () => (
  <section className="px-3 sm:px-5">
    <div className="relative overflow-hidden rounded-[40px] bg-ink py-20 text-white lg:py-24">
      <div aria-hidden="true" className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sun/20 blur-3xl" />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <Reveal>
          <SectionEyebrow tone="light">{proof.eyebrow}</SectionEyebrow>
          <p className="mt-6 font-display text-6xl font-semibold tracking-tight text-sun sm:text-7xl lg:text-8xl">
            <CountUp value={proof.headline.value} suffix={proof.headline.suffix} />
          </p>
          <p className="mt-3 text-xl text-white/70">{proof.headline.label}</p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2">
          {proof.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-ink p-8">
              <p className="font-display text-5xl font-semibold tracking-tight">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-3 leading-relaxed text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  </section>
);
