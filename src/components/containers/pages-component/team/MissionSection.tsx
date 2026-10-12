import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Carousel } from "@/components/common/Carousel";
import { Container } from "@/components/containers/common/Container";
import { mission } from "@/lib/data/pages/team";

/** Photo slider (left) with orange dots, "Our mission" copy and button (right). */
export const MissionSection: React.FC = () => (
  <section className="mt-[180px]">
    <Container className="grid items-start gap-10 lg:grid-cols-[768px_1fr] lg:gap-32">
      <Carousel label="Life at Netpuppys" slideClassName="basis-full" autoplay={5000} dots dotsTone="orange">
        {mission.images.map((m) => (
          <Image key={m.src} src={m.src} alt={m.alt} width={m.width} height={m.height} sizes="(min-width: 1320px) 768px, 100vw" className="aspect-[768/477] w-full rounded-[30px] object-cover lg:rounded-[50px]" />
        ))}
      </Carousel>
      <div className="lg:pt-[124px]">
        <h3 className="font-display text-[30px] font-medium leading-10 tracking-[-1.5px] text-ink lg:text-[40px] lg:tracking-[-2px]">{mission.title}</h3>
        <p className="mt-[30px] text-base font-light leading-6 text-body">{mission.text}</p>
        <Button href={mission.cta.href} className="mt-[30px]">
          {mission.cta.label}
        </Button>
      </div>
    </Container>
  </section>
);
