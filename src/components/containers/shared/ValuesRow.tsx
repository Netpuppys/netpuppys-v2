import { Container } from "@/components/containers/common/Container";

/** Four values on a 2px hairline, each marked by an orange dot (Meet the Team, Careers). */
export const ValuesRow: React.FC<{ items: string[]; className?: string }> = ({ items, className = "mt-[30px] md:mt-[55px]" }) => (
  <section className={className}>
    <Container>
      <ul className="flex flex-col gap-[30px] md:flex-row md:justify-between md:gap-0 md:border-t-2 md:border-line">
        {items.map((v) => (
          <li key={v} className="relative md:w-[209px] md:pt-[46px] md:[&:nth-child(2)]:w-[239px] md:[&:nth-child(3)]:w-[239px]">
            <span aria-hidden="true" className="block h-[15px] w-[15px] rounded-full bg-orange md:absolute md:-top-[8.5px] md:left-0" />
            <span className="mt-[22px] block text-base font-normal leading-[20.8px] text-ink md:mt-0">{v}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
