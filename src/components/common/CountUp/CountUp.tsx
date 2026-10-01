"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/helpers/useInView";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

const format = (n: number, decimals: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/**
 * Animates a number up from 0 once it scrolls into view. Renders the final
 * value on the server so the real figure is in the HTML (SEO, no-JS, and no
 * "0%" flash like the WordPress counters).
 */
export const CountUp: React.FC<CountUpProps> = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className = "",
}) => {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(display ?? value, decimals)}
      {suffix}
    </span>
  );
};
