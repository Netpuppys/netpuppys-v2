import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Container } from "@/components/containers/common/Container";
import { clients } from "@/lib/data/home-content";

interface ClientLogosSectionProps {
  title?: string;
  /** "eyebrow" = small centred caps (Home, Solutions); "heading" = 40px left-aligned (About). */
  titleStyle?: "eyebrow" | "heading";
  className?: string;
}

/** 4-up autoplay client logo slider with arrows. */
export const ClientLogosSection: React.FC<ClientLogosSectionProps> = ({
  title = clients.title,
  titleStyle = "eyebrow",
  className = "mt-[50px] lg:mt-[100px]",
}) => (
  <section className={className}>
    <Container>
      {titleStyle === "eyebrow" ? (
        <Eyebrow as="h2" className="px-5 text-center md:px-0">
          {title}
        </Eyebrow>
      ) : (
        <h2 className="px-5 font-display text-[40px] font-semibold leading-[1.1] tracking-[-2px] text-ink md:px-0">{title}</h2>
      )}
      <Carousel
        label="Client logos"
        slideClassName="basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
        gap={20}
        autoplay={5000}
        arrows="edge"
        className={titleStyle === "eyebrow" ? "mt-[20px]" : "mt-[28px] lg:mt-[53px]"}
      >
        {clients.logos.map((logo, i) => (
          <div key={`${logo.src}-${i}`} className="flex h-[195px] items-center justify-center md:h-[170px]">
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="(min-width: 768px) 305px, 350px" className="max-h-full w-full object-contain" />
          </div>
        ))}
      </Carousel>
    </Container>
  </section>
);
