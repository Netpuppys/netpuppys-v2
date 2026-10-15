import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RichText } from "@/components/common/RichText";
import { Container } from "@/components/containers/common/Container";
import type { CtaLink, ImageAsset } from "@/types/site";

interface InnerHeroProps {
  /** Small caps page label above the title ("ABOUT US", "CAREERS"…). Omit where WordPress hides it (Our Work). */
  eyebrow?: string;
  title: string;
  /** 66px on most pages, 50px on About / Our Work. */
  titleSize?: "lg" | "md";
  titleWidth?: string;
  /** Lead copy — plain string, or HTML for multi-paragraph intros. */
  lead?: string;
  leadHtml?: string;
  /** Lead style: 20px dark (default) or 16px body grey (About). */
  leadStyle?: "lead" | "body";
  leadWidth?: string;
  cta?: CtaLink;
  image: ImageAsset;
  /** Extra content under the lead (contact cards, checklists…). */
  children?: ReactNode;
  /** Replaces the image column (forms on Contact / Free Audit). */
  aside?: ReactNode;
  imageClassName?: string;
  className?: string;
}

/**
 * Inner-page hero from the WordPress "single page" template: caps label,
 * big title + lead on the left, 518×470 rounded image on the right, on the
 * blush-to-white page gradient that runs behind the transparent header.
 */
export const InnerHero: React.FC<InnerHeroProps> = ({
  eyebrow,
  title,
  titleSize = "lg",
  titleWidth = "",
  lead,
  leadHtml,
  leadStyle = "lead",
  leadWidth = "max-w-[590px]",
  cta,
  image,
  children,
  aside,
  imageClassName = "",
  className = "",
}) => (
  <section className={["lg:pt-[60px]", className].join(" ")}>
    <Container className="grid gap-[30px] pt-[50px] lg:grid-cols-[640px_1fr] lg:gap-0 lg:pt-0">
      <div className="lg:pt-[38px]">
        {eyebrow && <Eyebrow as="h2">{eyebrow}</Eyebrow>}
        <h1
          className={[
            eyebrow ? "mt-[15px] lg:mt-5" : "lg:mt-[42px]",
            "font-display font-semibold text-ink lg:leading-[1.1]",
            titleWidth,
            // Mobile sizes follow the live site: 66px titles drop to 32px, the 50px ones stay 50px.
            titleSize === "lg"
              ? "text-[32px] leading-[35.2px] tracking-[-1px] lg:text-[66px] lg:tracking-[-2px]"
              : "text-[50px] leading-[55px] tracking-[-1px] lg:tracking-[-2px]",
          ].join(" ")}
        >
          {title}
        </h1>
        {lead && (
          <p className={["mt-5 text-xl font-normal leading-[26px] text-ink lg:mt-[30px]", leadWidth].join(" ")}>{lead}</p>
        )}
        {leadHtml && (
          <RichText
            html={leadHtml}
            className={[
              "mt-5 lg:mt-[30px]",
              leadStyle === "body" ? "text-base font-light leading-6 text-body" : "text-xl font-normal leading-[26px] text-ink",
              leadWidth,
            ].join(" ")}
          />
        )}
        {cta && (
          <Button href={cta.href} className="mt-[30px]">
            {cta.label}
          </Button>
        )}
        {children}
      </div>
      {aside ?? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          sizes="(min-width: 1320px) 518px, (min-width: 1024px) 40vw, 100vw"
          className={["aspect-[390/301] w-full rounded-[50px] object-cover lg:ml-auto lg:aspect-[518/470] lg:w-[518px]", imageClassName].join(" ")}
        />
      )}
    </Container>
  </section>
);
