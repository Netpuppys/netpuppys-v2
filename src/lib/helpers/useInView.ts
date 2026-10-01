"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** 0–1, how much of the element must be visible before it triggers. */
  threshold?: number;
  /** Shrinks/grows the viewport box used for the check, e.g. "-10% 0px". */
  rootMargin?: string;
  /** Once true, keep the element revealed even if it scrolls back out. */
  triggerOnce?: boolean;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Tracks whether an element has scrolled into the viewport, via
 * IntersectionObserver. Powers the site's on-scroll reveal animations
 * (see components/common/Reveal). Client-only; on the server / before the
 * observer fires it reports `false` so content still renders without JS.
 * Reduced-motion users start (and stay) revealed — the initial state does
 * that check directly rather than flipping it inside the effect.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
