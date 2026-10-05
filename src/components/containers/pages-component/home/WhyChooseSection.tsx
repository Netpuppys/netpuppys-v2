"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Carousel } from "@/components/common/Carousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { whyChoose } from "@/lib/data/home-content";
import type { WhyTab } from "@/types/site";

/** Transparency / Team of experts / Results tabs + "Why Choose Netpuppys ?" copy. */
export const WhyChooseSection: React.FC = () => {
  const [active, setActive] = useState<WhyTab["id"]>("transparency");
  const tab = whyChoose.tabs.find((t) => t.id === active) ?? whyChoose.tabs[0];

  return (
    <section className="mt-5">
      <Container className="grid items-start gap-12 lg:grid-cols-[604px_1fr] lg:gap-[156px]">
        <div>
          <div role="tablist" aria-label="Why Netpuppys" className="grid grid-cols-3 lg:w-[604px]">
            {whyChoose.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`why-tab-${t.id}`}
                aria-selected={t.id === active}
                aria-controls={`why-panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={[
                  "flex h-[72px] items-center justify-center rounded-t-[35px] px-2 font-display text-[13px] font-bold uppercase leading-[1.2] tracking-[-1px] text-ink sm:text-base",
                  t.id === active ? "bg-blush" : "bg-transparent hover:text-orange",
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`why-panel-${tab.id}`}
            aria-labelledby={`why-tab-${tab.id}`}
            className={[
              "min-h-[508px] rounded-b-[35px] bg-blush p-6 sm:p-10",
              tab.id === "transparency" ? "rounded-tr-[35px]" : tab.id === "results" ? "rounded-tl-[35px]" : "rounded-t-[35px]",
            ].join(" ")}
          >
            <h4 className="max-w-[300px] font-display text-[28px] font-bold leading-[1.2] tracking-[-0.6px] text-ink">{tab.title}</h4>
            <p className="mt-[9px] text-base font-light leading-6 text-body">{tab.description}</p>

            <div className={tab.id === "team" ? "mt-5" : "mt-0"}>
              {tab.id === "team" ? (
                <Carousel label="Netpuppys team" slideClassName="basis-full" autoplay={3000} arrows="edge">
                  {whyChoose.team.map((m) => (
                    <Image key={m.src} src={m.src} alt={m.alt} width={m.width} height={m.height} sizes="(min-width: 1024px) 524px, 90vw" className="w-full rounded-2xl" />
                  ))}
                </Carousel>
              ) : (
                <Image
                  key={tab.id}
                  src={tab.id === "results" ? whyChoose.resultsImage.src : whyChoose.transparencyImage.src}
                  alt={tab.id === "results" ? whyChoose.resultsImage.alt : whyChoose.transparencyImage.alt}
                  width={482}
                  height={tab.id === "results" ? 224 : 221}
                  className="w-full max-w-[482px]"
                />
              )}
            </div>
          </div>
        </div>

        <div className="lg:pt-[89px]">
          <SectionTitle className="max-w-[512px]">{whyChoose.title}</SectionTitle>
          {whyChoose.paragraphs.map((p, i) => (
            <p key={i} className={["max-w-[520px] text-base font-light leading-6 text-body", i === 0 ? "mt-[30px]" : "mt-4"].join(" ")}>
              {p}
            </p>
          ))}
          <Button href={whyChoose.cta.href} className="mt-9">
            {whyChoose.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
};
