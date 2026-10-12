import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";

interface CenteredHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  width?: string;
  className?: string;
}

/** Centred caps label + 48px heading (+ optional intro) used between service-page blocks. */
export const CenteredHeading: React.FC<CenteredHeadingProps> = ({ eyebrow, title, text, width = "max-w-[896px]", className = "" }) => (
  <section className={className}>
    <Container className="text-center">
      <div className={["mx-auto", width].join(" ")}>
        <Eyebrow as="h6">{eyebrow}</Eyebrow>
        <SectionTitle className="mt-5">{title}</SectionTitle>
        {text && <p className="mt-5 text-base font-light leading-6 text-body">{text}</p>}
      </div>
    </Container>
  </section>
);
