interface SectionEyebrowProps {
  children: string;
  tone?: "dark" | "light";
  className?: string;
}

/** Small pill caption with a paw dot, used above every section heading. */
export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ children, tone = "dark", className = "" }) => (
  <p
    className={[
      "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.16em]",
      tone === "dark" ? "bg-peach text-ink" : "bg-white/10 text-white",
      className,
    ].join(" ")}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
    {children}
  </p>
);
