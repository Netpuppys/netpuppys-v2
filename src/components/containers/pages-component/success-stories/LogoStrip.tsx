import Image from "next/image";
import { Container } from "@/components/containers/common/Container";
import { WaveDivider } from "@/components/common/WaveDivider";
import { demoLogos } from "@/lib/data/pages/success-stories";

/** Row of client wordmarks above the wave hairline. */
export const LogoStrip: React.FC = () => (
  <section className="mt-[130px]">
    <Container>
      <ul className="flex flex-wrap items-center justify-center gap-x-[90px] gap-y-6 lg:justify-between">
        {demoLogos.map((l) => (
          <li key={l.src}>
            <Image src={l.src} alt={l.alt} width={l.width} height={l.height} className="h-[34px] w-auto" />
          </li>
        ))}
      </ul>
      <WaveDivider className="mt-[60px]" />
    </Container>
  </section>
);
