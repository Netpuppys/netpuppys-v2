"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Container } from "@/components/containers/common/Container";
import { Wrapper } from "@/components/containers/common/Wrapper";
import { whyChoose } from "@/lib/data/home-content";

export const WhyChooseSection: React.FC = () => {
  const [active, setActive] = useState(whyChoose.tabs[0].id);
  const tab = whyChoose.tabs.find((t) => t.id === active) ?? whyChoose.tabs[0];
  const tabImage = whyChoose.tabImages[tab.id as keyof typeof whyChoose.tabImages];

  return (
    <Wrapper className="bg-blush">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <div className="rounded-[32px] bg-white p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
            <div role="tablist" aria-label="Why Netpuppys" className="grid grid-cols-3 gap-1 rounded-[24px] bg-peach p-1.5">
              {whyChoose.tabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  id={`tab-${t.id}`}
                  aria-selected={t.id === active}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className={[
                    "rounded-[18px] px-2 py-3 font-display text-xs font-semibold uppercase tracking-wide transition-colors sm:text-[13px]",
                    t.id === active ? "bg-ink text-white" : "text-ink hover:bg-white/60",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{tab.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{tab.description}</p>
              <div className="mt-6">
                {tab.id === "team" ? (
                  <div className="grid grid-cols-2 gap-2">
                    {whyChoose.team.map((img) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="240px"
                        className="w-full rounded-xl"
                      />
                    ))}
                  </div>
                ) : (
                  tabImage && (
                    <Image
                      src={tabImage.src}
                      alt={tabImage.alt}
                      width={tabImage.width}
                      height={tabImage.height}
                      sizes="(min-width: 1024px) 480px, 90vw"
                      className="w-full rounded-2xl"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right">
          <SectionEyebrow>{whyChoose.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            {whyChoose.title}
          </h2>
          {whyChoose.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <Button href={whyChoose.cta.href} variant="orange" className="mt-8">
            {whyChoose.cta.label}
          </Button>
        </Reveal>
      </Container>
    </Wrapper>
  );
};
