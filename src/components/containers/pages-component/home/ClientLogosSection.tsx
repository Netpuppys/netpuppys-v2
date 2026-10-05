import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Container } from "@/components/containers/common/Container";
import { clients } from "@/lib/data/home-content";

/** "The best brands choose Loyalty over Fake Promises" — 4-up autoplay logo slider with arrows. */
export const ClientLogosSection: React.FC = () => (
  <section className="mt-[100px]">
    <Container>
      <Eyebrow as="h2" className="text-center">
        {clients.title}
      </Eyebrow>
      <Carousel
        label="Client logos"
        slideClassName="basis-1/2 md:basis-1/3 lg:basis-1/4"
        gap={20}
        autoplay={5000}
        arrows="edge"
        className="mt-[20px]"
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
