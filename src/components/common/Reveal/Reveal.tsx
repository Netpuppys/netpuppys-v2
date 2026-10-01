"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/helpers/useInView";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  /** Visual entrance style. Defaults to a gentle fade + rise. */
  variant?: RevealVariant;
  /** Stagger delay in ms — pass `index * 90` when revealing a list. */
  delay?: number;
  /** Transition duration in ms. */
  duration?: number;
  as?: ElementType;
  className?: string;
}

const hiddenByVariant: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-8",
  fade: "opacity-0",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  scale: "opacity-0 scale-95",
};

const shownState = "opacity-100 translate-y-0 translate-x-0 scale-100";

/**
 * Wraps content that should animate in as it scrolls into view — the one
 * place scroll-reveal behaviour lives, so every section uses the same
 * timing/easing instead of ad-hoc transitions per component. Falls back to
 * fully visible, static content when JS is off or reduced-motion is set.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = "up",
  delay = 0,
  duration = 700,
  as = "div",
  className = "",
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={[
        "transition-all ease-out will-change-transform",
        isInView ? shownState : hiddenByVariant[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
