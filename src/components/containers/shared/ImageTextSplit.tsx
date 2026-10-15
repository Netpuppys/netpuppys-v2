import Image from "next/image";
import { Button } from "@/components/common/Button";
import { RichText } from "@/components/common/RichText";
import { Container } from "@/components/containers/common/Container";
import type { CtaLink, ImageAsset } from "@/types/site";

interface ImageTextSplitProps {
  image: ImageAsset;
  imageSide?: "left" | "right";
  /** "wide" = 640×468 (Careers); "standard" = 614×450 (services, solutions). */
  imageSize?: "wide" | "standard";
  title: string;
  html: string;
  link?: CtaLink;
  button?: CtaLink;
  className?: string;
}

/** Rounded photo beside a 40px heading and body copy, with an optional text link or button. */
export const ImageTextSplit: React.FC<ImageTextSplitProps> = ({
  image,
  imageSide = "left",
  imageSize = "standard",
  title,
  html,
  link,
  button,
  className = "",
}) => {
  const img = (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(min-width: 1320px) 640px, (min-width: 1024px) 48vw, 100vw"
      className={[
        "w-full rounded-[30px] object-cover lg:rounded-[40px]",
        imageSize === "wide" ? "aspect-[640/468] lg:w-[640px]" : "aspect-[614/450] lg:w-[614px]",
      ].join(" ")}
    />
  );
  return (
    <section className={className}>
      <Container className="grid items-center gap-[27px] lg:grid-cols-2 lg:gap-0">
        {imageSide === "left" ? img : null}
        <div className={["lg:max-w-[512px]", imageSide === "left" ? "lg:ml-auto lg:w-[512px] lg:pr-2" : ""].join(" ")}>
          <h3 className="font-display text-[26px] font-medium leading-[1.1] tracking-[-1px] text-ink lg:text-[40px] lg:tracking-[-2px]">{title}</h3>
          <RichText html={html} className="mt-5 text-base font-light leading-6 text-body lg:mt-[30px]" />
          {link && (
            <Button href={link.href} variant="link" className="mt-[30px]">
              {link.label}
            </Button>
          )}
          {button && (
            <Button href={button.href} className="mt-[30px]">
              {button.label}
            </Button>
          )}
        </div>
        {imageSide === "right" ? <div className="lg:flex lg:justify-end">{img}</div> : null}
      </Container>
    </section>
  );
};
