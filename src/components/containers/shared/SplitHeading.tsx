import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RichText } from "@/components/common/RichText";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import type { CtaLink } from "@/types/site";

interface SplitHeadingProps {
  eyebrow?: string;
  title: string;
  /** Paragraph(s) on the right — HTML allowed for <b>. */
  html: string;
  link?: CtaLink;
  titleWidth?: string;
  className?: string;
}

/** Caps label, then a 48px title on the left and body copy (plus optional link) on the right. */
export const SplitHeading: React.FC<SplitHeadingProps> = ({ eyebrow, title, html, link, titleWidth = "max-w-[576px]", className = "" }) => (
  <section className={className}>
    <Container>
      {eyebrow && <Eyebrow as="h2">{eyebrow}</Eyebrow>}
      <div className={["grid gap-5 lg:grid-cols-[1fr_512px] lg:gap-10", eyebrow ? "mt-5" : ""].join(" ")}>
        <SectionTitle className={titleWidth}>{title}</SectionTitle>
        <div>
          <RichText html={html} className="text-base font-light leading-6 text-body" />
          {link && (
            <Button href={link.href} variant="link" className="mt-5 lg:mt-[30px]">
              {link.label}
            </Button>
          )}
        </div>
      </div>
    </Container>
  </section>
);
