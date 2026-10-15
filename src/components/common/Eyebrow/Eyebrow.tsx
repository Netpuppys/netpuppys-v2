interface EyebrowProps {
  children: string;
  as?: "h2" | "h6" | "p";
  className?: string;
}

/** Small uppercase caption above section headings ("WHAT WE DO", "SUCCESS STORIES"…). */
export const Eyebrow: React.FC<EyebrowProps> = ({ children, as: Tag = "p", className = "" }) => (
  <Tag className={["font-display text-base font-bold uppercase leading-[17.6px] tracking-[-1px] text-ink md:leading-[22.4px]", className].join(" ")}>
    {children}
  </Tag>
);
