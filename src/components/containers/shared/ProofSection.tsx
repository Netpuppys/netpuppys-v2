import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/common/Button";
import { CountUp } from "@/components/common/CountUp";
import { Container } from "@/components/containers/common/Container";
import { proof } from "@/lib/data/home-content";
import type { CtaLink } from "@/types/site";

interface ProofSectionProps {
  /** Button inside the leads panel (defaults to "Contact us"). */
  cta?: CtaLink;
  /** "top" when a testimonials card overlaps the foot (homepage); "all" when it stands alone. */
  corners?: "top" | "all";
  className?: string;
}

/** Peach card: three ringed counters + the 282,000+ leads panel. Used on Home, Our Work, Marketing Solutions and the landing page. */
export const ProofSection: React.FC<ProofSectionProps> = ({ cta = proof.leads.cta, corners = "top", className = "mt-[60px] md:mt-[86px]" }) => (
  <section className={className}>
    <Container className="max-md:px-0">
      <div
        className={[
          "bg-peach px-[30px] pt-[50px] md:px-[60px] md:pt-12 lg:pt-20",
          corners === "top" ? "rounded-t-[50px] pb-[90px] md:rounded-t-[30px] md:pb-[129px] lg:rounded-t-[50px]" : "rounded-[50px] pb-[90px] md:rounded-[30px] md:pb-[129px] lg:rounded-[50px]",
        ].join(" ")}
      >
        <h4 className="text-center font-display text-[19px] font-bold leading-[26.6px] tracking-[-0.6px] text-ink md:text-left md:text-[28px] md:leading-[1.2]">{proof.title}</h4>

        <div className="mt-[30px] flex flex-col gap-9 md:mt-5 md:gap-10 lg:flex-row lg:items-start lg:justify-between">
          <ul className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-8 lg:gap-[39px] lg:pl-5">
            {proof.stats.map((s) => (
              <li key={s.label} className="flex flex-col items-center text-center lg:w-[204px]">
                <div className="flex h-[142px] w-[142px] items-center justify-center rounded-full border border-line md:h-[172px] md:w-[172px]">
                  <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-orange pt-[10px] md:h-32 md:w-32 md:pt-[14px]">
                    <span className="text-[30px] font-normal leading-[30px] text-ink md:text-[50px] md:leading-[50px]">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </span>
                    <FontAwesomeIcon icon={faArrowUp} className="mt-2 text-[13px] text-orange" />
                  </div>
                </div>
                <p className="mt-[38px] max-w-[260px] text-base font-normal leading-[20.8px] text-ink md:mt-[26px] md:max-w-[204px]">{s.label}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center rounded-[50px] bg-blush py-5 text-center md:h-[260px] md:py-0 lg:w-[409px]">
            <p className="font-display text-[26px] font-medium leading-[28.6px] tracking-[-1px] text-ink md:text-[40px] md:leading-10 md:tracking-[-2px]">{proof.leads.value}</p>
            <p className="mt-[5px] text-base font-normal leading-[20.8px] text-ink">{proof.leads.label}</p>
            <Button href={cta.href} className="mt-[21px]">
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
