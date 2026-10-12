import { Container } from "@/components/containers/common/Container";

/** Four values on a 2px hairline, each marked by an orange dot (Meet the Team, Careers). */
export const ValuesRow: React.FC<{ items: string[]; className?: string }> = ({ items, className = "mt-[55px]" }) => (
  <section className={className}>
    <Container>
      <ul className="grid grid-cols-2 gap-y-8 border-t-2 border-line md:flex md:justify-between">
        {items.map((v) => (
          <li key={v} className="relative pt-[46px] md:w-[209px] md:[&:nth-child(2)]:w-[239px] md:[&:nth-child(3)]:w-[239px]">
            <span aria-hidden="true" className="absolute -top-[8.5px] left-0 h-[15px] w-[15px] rounded-full bg-orange" />
            <span className="text-base font-normal leading-[20.8px] text-ink">{v}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
