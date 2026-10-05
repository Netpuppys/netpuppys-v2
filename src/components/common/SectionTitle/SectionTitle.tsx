import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

/** 48px Poppins section heading (32px on mobile), -2px tracking — used by every section. */
export const SectionTitle: React.FC<SectionTitleProps> = ({ children, as: Tag = "h2", className = "" }) => (
  <Tag
    className={[
      "font-display text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink md:text-[40px] lg:text-[48px] lg:tracking-[-2px]",
      className,
    ].join(" ")}
  >
    {children}
  </Tag>
);
