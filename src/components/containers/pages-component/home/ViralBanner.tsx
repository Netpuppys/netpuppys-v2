import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/containers/common/Container";
import { viralBanner } from "@/lib/data/home-content";

/** Dark "go viral" band with the real team cards scrolling underneath. */
export const ViralBanner: React.FC = () => (
  <section className="pb-4">
    <Container>
      <Reveal variant="scale">
        <div className="overflow-hidden rounded-[36px] bg-ink py-12 sm:py-14">
          <div className="flex flex-col gap-6 px-8 sm:px-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {viralBanner.title}
              </h2>
              <p className="mt-4 max-w-md text-lg text-white/70">{viralBanner.subtitle}</p>
            </div>
            <Button href={viralBanner.cta.href} variant="light" className="self-start md:self-auto">
              {viralBanner.cta.label}
            </Button>
          </div>

          <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <ul className="animate-marquee flex shrink-0 gap-4 pr-4">
              {[...viralBanner.team, ...viralBanner.team].map((img, i) => (
                <li key={`${img.src}-${i}`} aria-hidden={i >= viralBanner.team.length} className="shrink-0">
                  <Image
                    src={img.src}
                    alt={i >= viralBanner.team.length ? "" : img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="420px"
                    className="h-48 w-auto rounded-2xl bg-white sm:h-56"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);
