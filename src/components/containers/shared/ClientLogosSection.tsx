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
  className = "mt-[100px]",
}) => (
  <section className={className}>
    <Container>
      {titleStyle === "eyebrow" ? (
        <Eyebrow as="h2" className="text-center">
          {title}
        </Eyebrow>
      ) : (
        <h2 className="font-display text-[30px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-[40px]">{title}</h2>
      )}
      <Carousel
        label="Client logos"
        slideClassName="basis-1/2 md:basis-1/3 lg:basis-1/4"
        gap={20}
        autoplay={5000}
        arrows="edge"
        className={titleStyle === "eyebrow" ? "mt-[20px]" : "mt-[53px]"}
      >
        {clients.logos.map((logo, i) => (
          <div key={`${logo.src}-${i}`} className="flex h-[170px] items-center justify-center">
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="305px" className="w-full" />
          </div>
        ))}
      </Carousel>
    </Container>
  </section>
);
