"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/containers/common/Container";
import type { ServicePage } from "@/types/site";

/**
 * "What's included" tabs: black list on the left with the active item as an
 * orange pill, the active item's title, copy and CTA on the peach panel.
 */
export const ServiceTabs: React.FC<{ tabs: ServicePage["tabs"] }> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Container>
      {/* < lg: Elementor's accordion — active title as an orange pill with its peach panel below */}
      <div className="rounded-[50px] bg-ink px-5 py-[30px] lg:hidden">
        {tabs.map((t, i) => (
          <div key={t.title}>
            <button
              type="button"
              aria-expanded={i === active}
              aria-controls={`svc-acc-${i}`}
              onClick={() => setActive(i)}
              className={[
                "block w-full py-5 pl-5 pr-[50px] text-left font-display text-lg font-bold leading-[19.8px] tracking-[-0.6px] text-white",
                i === active ? "rounded-[50px] bg-orange" : "",
              ].join(" ")}
            >
              {t.title}
            </button>
            {i === active && (
              <div id={`svc-acc-${i}`} className="mt-[9px] rounded-[40px] bg-peach px-5 pb-[30px] pt-[46px]">
                <h3 className="font-display text-[26px] font-medium leading-[1.1] tracking-[-1px] text-ink">{t.title}</h3>
                <p className="mt-2 text-base font-light leading-6 text-ink">{t.text}</p>
                <Button href="/contact" className="mt-[25px]">
                  Get a Free audit
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ≥ lg: vertical tabs */}
      <div className="relative hidden min-h-[517px] overflow-hidden rounded-[50px] bg-ink lg:block">
        <div role="tablist" aria-label="What's included" aria-orientation="vertical" className="flex flex-col gap-1 p-5 lg:w-[464px] lg:gap-[25px] lg:px-10 lg:py-[50px]">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              type="button"
              role="tab"
              id={`svc-tab-${i}`}
              aria-selected={i === active}
              aria-controls="svc-tab-panel"
              onClick={() => setActive(i)}
              className={[
                "flex min-h-[78px] items-center rounded-[50px] px-6 py-5 text-left font-display text-lg font-bold leading-6 tracking-[-0.6px] text-white transition-colors lg:w-[413px] lg:text-xl",
                i === active ? "bg-orange" : "hover:bg-white/10",
              ].join(" ")}
            >
              <span className="block lg:max-w-[296px]">{t.title}</span>
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id="svc-tab-panel"
          aria-labelledby={`svc-tab-${active}`}
          className="bg-peach px-6 py-10 lg:absolute lg:inset-y-0 lg:left-[384px] lg:right-0 lg:rounded-[50px] lg:py-0 lg:pl-[148px] lg:pr-[110px] lg:pt-[50px]"
        >
          <h3 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-1.5px] text-ink lg:text-[40px] lg:tracking-[-2px]">{tab.title}</h3>
          <p className="mt-6 text-base font-light leading-6 text-ink">{tab.text}</p>
          <Button href="/contact" className="mt-[25px]">
            Get a Free audit
          </Button>
        </div>
      </div>
    </Container>
  );
};
