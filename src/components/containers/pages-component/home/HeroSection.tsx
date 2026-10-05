import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/containers/common/Container";
import { hero } from "@/lib/data/home-content";

/*
 * Desktop composition is laid out on the WordPress 1280 × 576 grid and
 * expressed in % of that box, so it scales down proportionally on smaller
 * screens. The coral audit card is sized in container-query units (cqw) for
 * the same reason — at 1280px wide, 1cqw = 12.8px.
 */
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const box = (x: number, y: number, w: number, h: number) => ({
  left: pct(x, 1280),
  top: pct(y, 576),
  width: pct(w, 1280),
  height: pct(h, 576),
});

export const HeroSection: React.FC = () => {
  const { images } = hero;

  return (
    <section className="bg-gradient-to-b from-hero to-[rgba(247,247,250,0)] pb-10 md:pb-0 lg:-mt-[81px] lg:pt-[81px]">
      <Container className="pt-10 text-center md:pt-[51px]">
        <h1 className="font-display text-[45px] font-semibold leading-[1.1] tracking-[-1px] text-ink md:text-[55px]">
          {hero.title}
        </h1>
        <p className="mt-5 text-[22px] font-normal capitalize leading-[1.3] text-body">{hero.subtitle}</p>
      </Container>

      {/* ≥ md: the original collage */}
      <Container className="hidden md:block">
        <div className="@container relative mt-[1px] aspect-[1280/576] w-full">
          <Image
            src="/images/hero/line-arrow.svg"
            alt=""
            width={236}
            height={55}
            className="absolute"
            style={{ ...box(919, 40, 236, 55), height: "auto" }}
          />
          <div
            aria-hidden="true"
            className="absolute bg-contain bg-no-repeat"
            style={{ ...box(0, 86, 538, 490), backgroundImage: `url(${images.leftBase.src})` }}
          />
          <Image
            src={images.speaker.src}
            alt={images.speaker.alt}
            width={images.speaker.width}
            height={images.speaker.height}
            priority
            sizes="(min-width: 1320px) 538px, 42vw"
            className="absolute"
            style={box(0, 0, 538, 500)}
          />
          <Image
            src={images.right.src}
            alt={images.right.alt}
            width={images.right.width}
            height={images.right.height}
            priority
            sizes="(min-width: 1320px) 735px, 58vw"
            className="absolute"
            style={box(545, 86, 735, 490)}
          />
          <Image
            src={images.dog.src}
            alt={images.dog.alt}
            width={images.dog.width}
            height={images.dog.height}
            priority
            sizes="150px"
            className="absolute"
            style={box(1092, 167, 150, 230)}
          />

          <div
            className="absolute flex items-center justify-between rounded-[3.9cqw] bg-coral px-[2.8cqw]"
            style={box(371, 376, 358, 185)}
          >
            <p className="w-[10.2cqw] text-left text-[1.5625cqw] font-normal leading-[1.3] text-body">{hero.audit.text}</p>
            <Button
              href={hero.audit.cta.href}
              className="!h-[3.6cqw] !gap-[0.6cqw] !rounded-[1.4cqw] !px-[2.27cqw] !text-[0.94cqw]"
            >
              {hero.audit.cta.label}
            </Button>
          </div>
        </div>
      </Container>

      {/* < md: stacked, as on the WordPress mobile layout */}
      <Container className="md:hidden">
        <Image src="/images/hero/line-arrow.svg" alt="" width={236} height={55} className="ml-auto mt-8 w-2/3" />
        <div className="relative mt-4 flex items-end gap-2">
          <div className="relative w-[72%]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-[14%] bg-contain bg-bottom bg-no-repeat"
              style={{ backgroundImage: `url(${images.leftBase.src})` }}
            />
            <Image src={images.speaker.src} alt={images.speaker.alt} width={images.speaker.width} height={images.speaker.height} priority sizes="72vw" className="relative w-full" />
          </div>
          <Image src={images.dog.src} alt={images.dog.alt} width={images.dog.width} height={images.dog.height} priority sizes="28vw" className="w-[26%]" />
        </div>
        <div className="mt-6 flex flex-col items-center gap-5 rounded-[50px] bg-coral px-8 py-8 text-center">
          <p className="max-w-[150px] text-[20px] font-normal leading-[1.3] text-body">{hero.audit.text}</p>
          <Button href={hero.audit.cta.href}>{hero.audit.cta.label}</Button>
        </div>
        <Image src={images.right.src} alt={images.right.alt} width={images.right.width} height={images.right.height} sizes="100vw" className="mt-6 w-full" />
      </Container>
    </section>
  );
};
