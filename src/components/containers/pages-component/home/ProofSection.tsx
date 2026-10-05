import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/common/Button";
import { CountUp } from "@/components/common/CountUp";
import { Container } from "@/components/containers/common/Container";
import { proof } from "@/lib/data/home-content";

/** Peach card: three ringed counters + the 282,000+ leads panel. The testimonials card overlaps its foot. */
export const ProofSection: React.FC = () => (
  <section className="mt-[86px]">
    <Container>
      <div className="rounded-t-[30px] bg-peach px-6 pb-[129px] pt-12 md:px-[60px] lg:rounded-t-[50px] lg:pt-20">
        <h4 className="font-display text-[28px] font-bold leading-[1.2] tracking-[-0.6px] text-ink">{proof.title}</h4>

        <div className="mt-5 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-[39px] lg:pl-5">
            {proof.stats.map((s) => (
              <li key={s.label} className="flex flex-col items-center text-center lg:w-[204px]">
                <div className="flex h-[172px] w-[172px] items-center justify-center rounded-full border border-line">
                  <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-orange pt-[14px]">
                    <span className="text-[50px] font-normal leading-[50px] text-ink">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </span>
                    <FontAwesomeIcon icon={faArrowUp} className="mt-2 text-[13px] text-orange" />
                  </div>
                </div>
                <p className="mt-[26px] max-w-[204px] text-base font-normal leading-[20.8px] text-ink">{s.label}</p>
              </li>
            ))}
          </ul>

          <div className="flex h-[260px] flex-col items-center justify-center rounded-[50px] bg-blush text-center lg:w-[409px]">
            <p className="font-display text-[40px] font-medium leading-10 tracking-[-2px] text-ink">{proof.leads.value}</p>
            <p className="mt-[5px] text-base font-normal leading-[20.8px] text-ink">{proof.leads.label}</p>
            <Button href={proof.leads.cta.href} className="mt-[21px]">
              {proof.leads.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
