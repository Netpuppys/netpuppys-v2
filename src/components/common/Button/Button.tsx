import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

type ButtonVariant = "solid" | "link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Underline colour for the `link` variant (orange on most sections, sand on Success Stories). */
  underline?: "orange" | "sand";
  showArrow?: boolean;
  className?: string;
}

/**
 * The theme's single button style: black 46px pill (18px radius) with Syne
 * 12px bold uppercase label + arrow, or a text link with a coloured rule
 * underneath. The label gets the lavender hover fill used site-wide.
 */
export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "solid",
  underline = "orange",
  showArrow,
  className = "",
}) => {
  const arrow = showArrow ?? variant === "solid";

  if (variant === "link") {
    return (
      <Link
        href={href}
        className={[
          "group inline-flex items-center border-b-2 pb-0.5 font-syne text-xs font-bold uppercase leading-[20.4px] tracking-[-0.2px] text-ink",
          underline === "orange" ? "border-orange" : "border-sand",
          className,
        ].join(" ")}
      >
        <span className="hover-fill">{children}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={[
        "group inline-flex h-[46px] items-center justify-center gap-2 rounded-[18px] bg-ink px-[29px] font-syne text-xs font-bold uppercase leading-[20.4px] tracking-[-0.2px] text-white",
        className,
      ].join(" ")}
    >
      <span className="hover-fill [--fill:rgba(176,167,239,0.35)]">{children}</span>
      {arrow && <FontAwesomeIcon icon={faArrowRight} className="text-xs" aria-hidden="true" />}
    </Link>
  );
};
