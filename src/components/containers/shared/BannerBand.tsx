import Image from "next/image";
import type { ReactNode } from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import type { ImageAsset } from "@/types/site";

interface BannerBandProps {
  image: ImageAsset;
  title: string;
  /** Colour the band's top-to-white gradient starts from (peach on About, lavender on Careers). */
  from?: "peach" | "lavender";
  children: ReactNode;
  className?: string;
}

/**
 * Wide rounded photo that straddles the start of a soft gradient band,
 * followed by a centred heading and whatever cards the page passes in.
 */
export const BannerBand: React.FC<BannerBandProps> = ({ image, title, from = "peach", children, className = "" }) => (
  <section className={["relative", className].join(" ")}>
    <div
      aria-hidden="true"
      className={[
        "absolute inset-x-0 bottom-0 top-[120px] bg-gradient-to-b to-[rgba(247,247,250,0)] lg:top-[256px]",
        from === "peach" ? "from-peach" : "from-[#e9e5ff]",
      ].join(" ")}
    />
    <Container className="relative pb-[30px] lg:pb-[120px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1320px) 1280px, 100vw"
        className="h-[172px] w-full rounded-[30px] object-cover md:aspect-[1280/528] md:h-auto lg:rounded-[50px]"
      />
      <SectionTitle className="mx-auto mt-7 max-w-[234px] text-center md:max-w-[768px] lg:mt-[96px]">{title}</SectionTitle>
      <div className="mt-6 lg:mt-10">{children}</div>
    </Container>
  </section>
);
