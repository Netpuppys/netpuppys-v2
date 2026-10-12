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
    <Container className="grid gap-10 pt-10 lg:grid-cols-[640px_1fr] lg:gap-0 lg:pt-0">
      <div className="lg:pt-[38px]">
        {eyebrow && <Eyebrow as="h2">{eyebrow}</Eyebrow>}
        <h1
          className={[
            eyebrow ? "mt-5" : "lg:mt-[42px]",
            "font-display font-semibold leading-[1.1] text-ink",
            titleWidth,
            titleSize === "lg" ? "text-[44px] tracking-[-1.5px] lg:text-[66px] lg:tracking-[-2px]" : "text-[38px] tracking-[-1.5px] lg:text-[50px] lg:tracking-[-2px]",
          ].join(" ")}
        >
          {title}
        </h1>
        {lead && (
          <p className={["mt-[30px] text-xl font-normal leading-[26px] text-ink", leadWidth].join(" ")}>{lead}</p>
        )}
        {leadHtml && (
          <RichText
            html={leadHtml}
            className={[
              "mt-[30px]",
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
          className={["aspect-[518/470] w-full rounded-[30px] object-cover lg:ml-auto lg:w-[518px] lg:rounded-[50px]", imageClassName].join(" ")}
        />
      )}
    </Container>
  </section>
);
