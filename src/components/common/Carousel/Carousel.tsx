"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Children, useCallback, useEffect, useState, type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  /** Tailwind basis classes for each slide, e.g. "basis-full md:basis-1/2". */
  slideClassName: string;
  /** Gap between slides in px (applied as slide padding-left). */
  gap?: number;
  autoplay?: number | false;
  loop?: boolean;
  slidesToScroll?: number;
  dots?: boolean;
  /** "edge" = thin chevrons at the slider edges; "round" = white circular prev/next buttons. */
  arrows?: false | "edge" | "round";
  arrowsClassName?: string;
  className?: string;
  label: string;
}

/**
 * Thin Embla wrapper standing in for the Elementor/Swiper carousels on the
 * WordPress site (client logos, success stories, team photos, testimonials).
 */
export const Carousel: React.FC<CarouselProps> = ({
  children,
  slideClassName,
  gap = 0,
  autoplay = false,
  loop = true,
  slidesToScroll = 1,
  dots = false,
  arrows = false,
  arrowsClassName = "",
  className = "",
  label,
}) => {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop, align: "start", slidesToScroll },
    autoplay ? [Autoplay({ delay: autoplay, stopOnInteraction: false, stopOnMouseEnter: true })] : [],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    const onInit = () => {
      setSnaps(embla.scrollSnapList());
      onSelect();
    };
    onInit();
    embla.on("select", onSelect).on("reInit", onInit);
    return () => {
      embla.off("select", onSelect).off("reInit", onInit);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div className={["relative", className].join(" ")} role="region" aria-roledescription="carousel" aria-label={label}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex" style={{ marginLeft: -gap }}>
          {Children.map(children, (child, i) => (
            <div
              key={i}
              className={["min-w-0 shrink-0 grow-0", slideClassName].join(" ")}
              style={{ paddingLeft: gap }}
              role="group"
              aria-roledescription="slide"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {arrows === "edge" && (
        <>
          <button type="button" onClick={prev} aria-label="Previous slide" className="absolute -left-6 top-1/2 hidden -translate-y-1/2 p-2 text-ink/40 hover:text-ink md:block">
            <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
          </button>
          <button type="button" onClick={next} aria-label="Next slide" className="absolute -right-6 top-1/2 hidden -translate-y-1/2 p-2 text-ink/40 hover:text-ink md:block">
            <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
          </button>
        </>
      )}

      {arrows === "round" && (
        <div className={["flex gap-[15px]", arrowsClassName].join(" ")}>
          {[
            { onClick: prev, icon: faArrowLeft, label: "Previous slide" },
            { onClick: next, icon: faArrowRight, label: "Next slide" },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={b.onClick}
              aria-label={b.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-orange hover:text-white"
            >
              <FontAwesomeIcon icon={b.icon} className="text-[14px]" />
            </button>
          ))}
        </div>
      )}

      {dots && snaps.length > 1 && (
        <div className="mt-5 flex justify-center gap-3">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected}
              className={["h-1.5 w-1.5 rounded-full bg-ink transition-opacity", i === selected ? "opacity-100" : "opacity-20"].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
};
