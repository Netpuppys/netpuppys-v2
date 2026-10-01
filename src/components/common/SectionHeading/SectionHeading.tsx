import type { ReactNode } from "react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
  className?: string;
}

/** Eyebrow + H2 (+ optional intro and right-aligned action) used by every section. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  action,
  className = "",
}) => {
  const centered = align === "center";
  return (
    <div
      className={[
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      ].join(" ")}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>}
        <h2
          className={[
            "mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[44px]",
            tone === "dark" ? "text-ink" : "text-white",
          ].join(" ")}
        >
          {title}
        </h2>
        {description && (
          <p className={["mt-4 text-lg leading-relaxed", tone === "dark" ? "text-ink-soft" : "text-white/70"].join(" ")}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
