import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/containers/common/Container";
import { portfolio, portfolioIntro } from "@/lib/data/pages/success-stories";

/** Intro line and the staggered 3-column grid of case cards (middle column sits 60px lower). */
export const PortfolioGrid: React.FC = () => (
  <section className="mt-[60px] lg:mt-[120px]">
    <Container>
      <p className="mx-auto max-w-[780px] text-center font-display text-[20px] font-bold leading-[26.6px] tracking-[-0.6px] text-ink lg:text-[28px] lg:leading-[1.2]">
        {portfolioIntro}
      </p>
      <ul className="mt-[19px] grid gap-5 md:mt-[120px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[30px] lg:pb-[60px]">
        {portfolio.map((c, i) => (
          <li key={c.client} className={i % 3 === 1 ? "lg:translate-y-[60px]" : ""}>
            <article className="group relative flex h-[400px] flex-col overflow-hidden rounded-[50px] bg-cover bg-center p-[30px] text-white md:aspect-[407/400] md:h-auto md:p-10" style={{ backgroundImage: `url(${c.image})` }}>
              <span aria-hidden="true" className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60" />
              <Link href={c.href} className="relative font-display text-lg font-bold leading-[19.8px] tracking-[-0.6px] md:text-xl md:leading-6 after:absolute after:inset-[-40px] after:content-['']">
                {c.client}
              </Link>
              <div className="relative mt-auto">
                <p className="font-display text-[26px] font-medium leading-[28.6px] tracking-[-1px] md:text-[40px] md:leading-10 md:tracking-[-2px]">{c.metric}</p>
                <p className="mt-1 font-display text-base font-bold uppercase leading-[23px] tracking-[-1px]">{c.label}</p>
                {c.tags && (
                  <ul className="relative z-10 mt-5 flex flex-wrap gap-1.5 md:mt-[31px]">
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
