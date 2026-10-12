import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/containers/common/Container";
import { portfolio, portfolioIntro } from "@/lib/data/pages/success-stories";

/** Intro line and the staggered 3-column grid of case cards (middle column sits 60px lower). */
export const PortfolioGrid: React.FC = () => (
  <section className="mt-[120px]">
    <Container>
      <p className="mx-auto max-w-[780px] text-center font-display text-[22px] font-bold leading-[1.2] tracking-[-0.6px] text-ink lg:text-[28px]">
        {portfolioIntro}
      </p>
      <ul className="mt-[120px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[30px] lg:pb-[60px]">
        {portfolio.map((c, i) => (
          <li key={c.client} className={i % 3 === 1 ? "lg:translate-y-[60px]" : ""}>
            <article className="group relative flex aspect-[407/400] flex-col overflow-hidden rounded-[50px] bg-cover bg-center p-10 text-white" style={{ backgroundImage: `url(${c.image})` }}>
              <span aria-hidden="true" className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60" />
              <Link href={c.href} className="relative font-display text-xl font-bold leading-6 tracking-[-0.6px] after:absolute after:inset-[-40px] after:content-['']">
                {c.client}
              </Link>
              <div className="relative mt-auto">
                <p className="font-display text-[40px] font-medium leading-10 tracking-[-2px]">{c.metric}</p>
                <p className="mt-1 font-display text-base font-bold uppercase leading-[23px] tracking-[-1px]">{c.label}</p>
                {c.tags && (
                  <ul className="relative z-10 mt-[31px] flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <li key={t.label}>
                        <Link href={t.href} className="inline-flex h-7 items-center rounded-[14px] bg-white px-3 text-sm font-light text-ink hover:bg-peach">
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
      {/* WordPress paginates this grid; every case is already shown here, so "Load More" leads to the full case studies. */}
      <div className="mt-[30px] flex justify-center lg:mt-0">
        <Button href="/our-work" showArrow={false}>
          Load More
        </Button>
      </div>
    </Container>
  </section>
);
