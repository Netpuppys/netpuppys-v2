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
      <div className={["relative rounded-[50px] bg-peach text-center md:rounded-[30px] md:px-6 md:py-16 lg:rounded-[50px] lg:px-10 lg:py-20", decoration === "star" ? "p-[30px]" : "px-5 py-10"].join(" ")}>
        {decoration === "star" ? (
          <Image src="/images/wp/2023/05/star.svg" alt="" width={62} height={62} className="absolute -top-6 right-[43px] w-[46px] md:-top-[39px] md:right-[154px] md:w-[62px]" />
        ) : (
          <>
            <Image
              src="/images/wp/2023/05/GettyImages-1367732506-159x300.png"
              alt=""
              width={159}
              height={300}
              className="absolute -top-[46px] right-[15px] h-[107px] w-auto md:-top-[65px] md:right-[67px] md:h-[180px] lg:right-[107px] lg:h-[256px]"
            />
            <Image src="/images/wp/2023/05/google-logo.svg" alt="Google Partner" width={160} height={37} className="mx-auto w-[140px] md:w-[160px]" />
          </>
        )}
        {decoration === "star" ? (
          <h3 className="mx-auto max-w-[614px] font-display text-[26px] font-medium leading-[1.1] tracking-[-1px] text-ink lg:text-[40px] lg:tracking-[-2px]">
            {title}
          </h3>
        ) : (
          <SectionTitle className="mx-auto mt-5 max-w-[732px]">{title}</SectionTitle>
        )}
        {text && <p className="mx-auto mt-5 max-w-[768px] text-base font-light leading-6 text-body">{text}</p>}
        <Button href={cta.href} className={decoration === "star" ? "mt-9" : "mt-5 md:mt-10"}>
          {cta.label}
        </Button>
      </div>
    </Container>
  </section>
);
