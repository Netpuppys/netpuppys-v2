import Image from "next/image";
import { Button } from "@/components/common/Button";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import type { CtaLink } from "@/types/site";

interface CtaPanelProps {
  title: string;
  text?: string;
  cta: CtaLink;
  /** star = sparkle top-right (Meet the Team); rocket = rocket + Google Partner logo (Solutions, service pages). */
  decoration?: "star" | "rocket";
  className?: string;
}

/** Centred peach call-to-action card. */
export const CtaPanel: React.FC<CtaPanelProps> = ({ title, text, cta, decoration = "rocket", className = "" }) => (
  <section className={className}>
    <Container>
      <div className="relative rounded-[30px] bg-peach px-6 py-16 text-center lg:rounded-[50px] lg:px-10 lg:py-20">
        {decoration === "star" ? (
          <Image src="/images/wp/2023/05/star.svg" alt="" width={62} height={62} className="absolute -top-[39px] right-[154px] hidden md:block" />
        ) : (
          <>
            <Image
              src="/images/wp/2023/05/GettyImages-1367732506-159x300.png"
              alt=""
              width={159}
              height={300}
              className="absolute -top-[65px] right-[67px] hidden h-[180px] w-auto md:block lg:right-[107px] lg:h-[256px]"
            />
            <Image src="/images/wp/2023/05/google-logo.svg" alt="Google Partner" width={160} height={37} className="mx-auto" />
          </>
        )}
        {decoration === "star" ? (
          <h3 className="mx-auto max-w-[614px] font-display text-[30px] font-medium leading-[1.1] tracking-[-1.5px] text-ink lg:text-[40px] lg:tracking-[-2px]">
            {title}
          </h3>
        ) : (
          <SectionTitle className="mx-auto mt-5 max-w-[732px]">{title}</SectionTitle>
        )}
        {text && <p className="mx-auto mt-5 max-w-[768px] text-base font-light leading-6 text-body">{text}</p>}
        <Button href={cta.href} className={decoration === "star" ? "mt-9" : "mt-10"}>
          {cta.label}
        </Button>
      </div>
    </Container>
  </section>
);
