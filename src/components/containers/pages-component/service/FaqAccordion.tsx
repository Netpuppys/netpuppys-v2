"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/containers/common/Container";
import type { ServicePage } from "@/types/site";

/** Bordered accordion of questions, one open at a time. */
export const FaqAccordion: React.FC<{ items: NonNullable<ServicePage["faq"]>["items"]; className?: string }> = ({ items, className = "" }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={className}>
      <Container>
        <div className="mx-auto max-w-[1000px] border border-line">
          {items.map((f, i) => (
            <div key={f.q} className={i > 0 ? "border-t border-line" : ""}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-0 py-[28px] text-left font-display text-xl font-bold leading-7 tracking-[-0.6px] text-ink hover:text-orange"
                >
                  {f.q}
                  <FontAwesomeIcon icon={open === i ? faMinus : faPlus} className="text-base" />
                </button>
              </h3>
              {open === i && (
                <p id={`faq-${i}`} className="pb-7 text-base font-light leading-6 text-body">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
