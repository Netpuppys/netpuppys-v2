import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/containers/common/Container";
import { hero, testimonials } from "@/lib/data/home-content";

export const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#ffe3dc] via-blush to-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sun/25 blur-3xl"
    />
    <Container className="relative grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-16">
      <div>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white px-4 py-2 font-display text-xs font-semibold text-ink shadow-sm">
            <Icon name="trophy" className="h-4 w-4 text-orange" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[76px]">
            {hero.titleStart}{" "}
            <span className="relative inline-block text-orange">
              {hero.titleHighlight}
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-sun"
                aria-hidden="true"
              >
                <path d="M3 14C60 5 150 3 297 10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            {hero.titleEnd}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{hero.description}</p>
        </Reveal>

        <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </Reveal>

        <Reveal delay={320} className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {testimonials.items.map((t) => (
              <Image
                key={t.name}
                src={t.photo.src}
                alt=""
                width={48}
                height={48}
                className="h-11 w-11 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div>
            <div className="flex text-sun">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-0.5 text-sm text-ink-soft">
              <span className="font-display font-semibold text-ink">{hero.reviews.value}</span> {hero.reviews.label}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Visual composition */}
      <Reveal variant="scale" delay={120} className="relative mx-auto h-[400px] w-full max-w-[600px] sm:h-[520px]">
        <svg viewBox="0 0 320 120" className="absolute right-[14%] top-0 w-[46%] text-ink" aria-hidden="true">
          <path
            d="M6 110C20 40 90 10 170 22s120 50 140 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-dash"
          />
          <path d="m300 92 10 12 4-15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="absolute left-0 top-[16%] h-[58%] w-[76%] overflow-hidden rounded-[32px] bg-lavender shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] ring-8 ring-white">
          <Image
            src={hero.images.team.src}
            alt={hero.images.team.alt}
            width={hero.images.team.width}
            height={hero.images.team.height}
            priority
            sizes="(min-width: 1024px) 460px, 76vw"
            className="h-full w-full object-cover object-[center_35%]"
          />
        </div>

        <div className="absolute left-[4%] top-[9%] rotate-[-6deg] rounded-full bg-orange px-4 py-2 font-display text-xs font-semibold text-white shadow-lg">
          Woof! Leads incoming
        </div>

        <Image
          src={hero.images.dog.src}
          alt={hero.images.dog.alt}
          width={hero.images.dog.width}
          height={hero.images.dog.height}
          priority
          sizes="(min-width: 1024px) 240px, 36vw"
          className="animate-float absolute -bottom-2 -right-2 h-[74%] w-auto drop-shadow-[0_24px_30px_rgba(0,0,0,0.25)]"
        />

        <div className="absolute bottom-[2%] left-[6%] rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]">
          <p className="font-display text-2xl font-semibold text-ink">{hero.revenue.value}</p>
          <p className="text-xs text-muted">{hero.revenue.label}</p>
        </div>
      </Reveal>
    </Container>
  </section>
);
