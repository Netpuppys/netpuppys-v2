interface WaveDividerProps {
  /** `offset` = bump right of centre (under the hero stats); `center` = bump centred. */
  variant?: "offset" | "center";
  className?: string;
}

/** Hairline with a rounded bump — the theme's border.svg / border-center.svg separators. */
export const WaveDivider: React.FC<WaveDividerProps> = ({ variant = "center", className = "" }) => (
  <div
    aria-hidden="true"
    className={["h-[45px] w-full bg-no-repeat", className].join(" ")}
    style={{
      backgroundImage: `url(/images/shapes/${variant === "center" ? "border-center" : "border"}.svg)`,
      backgroundPosition: "50% 100%",
      // Natural size (1281px), centred: narrow screens crop the hairline but keep the full bump, as on the live site.
      backgroundSize: "auto",
    }}
  />
);
