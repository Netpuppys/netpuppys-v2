import Image from "next/image";
import { Container } from "@/components/containers/common/Container";
import { clientsSection } from "@/lib/data/home-content";
import type { ImageAsset } from "@/types/site";

const Row: React.FC<{ logos: ImageAsset[]; reverse?: boolean }> = ({ logos, reverse }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
    <ul className={["flex shrink-0 items-center gap-6", reverse ? "animate-marquee-reverse" : "animate-marquee"].join(" ")}>
      {[...logos, ...logos].map((logo, i) => (
        <li
          key={`${logo.src}-${i}`}
          aria-hidden={i >= logos.length}
          className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-4"
        >
          <Image
            src={logo.src}
            alt={i >= logos.length ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            sizes="176px"
            className="max-h-14 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  </div>
);

export const ClientMarquee: React.FC = () => {
  const half = Math.ceil(clientsSection.logos.length / 2);
  return (
    <section className="py-14">
      <Container>
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted">
          {clientsSection.title}
        </p>
      </Container>
      <div className="mt-8 space-y-4">
        <Row logos={clientsSection.logos.slice(0, half)} />
        <Row logos={clientsSection.logos.slice(half)} reverse />
      </div>
    </section>
  );
};
