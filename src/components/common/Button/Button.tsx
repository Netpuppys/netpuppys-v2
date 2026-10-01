import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/common/Icon";

type ButtonVariant = "solid" | "orange" | "outline" | "light" | "link";

interface BaseProps {
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-sm font-semibold transition-all duration-200";

const variantClasses: Record<ButtonVariant, string> = {
  solid: "rounded-full bg-ink px-6 py-3.5 text-white hover:bg-orange",
  orange: "rounded-full bg-orange px-6 py-3.5 text-white hover:bg-orange-dark",
  outline: "rounded-full border border-ink/15 bg-white px-6 py-3.5 text-ink hover:border-ink",
  light: "rounded-full bg-white px-6 py-3.5 text-ink hover:bg-sun",
  link: "border-b-2 border-orange pb-1 text-xs uppercase tracking-[0.12em] text-ink hover:text-orange",
};

/** The one button/link primitive — every CTA on the site renders through it. */
export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  showArrow = true,
  className = "",
  children,
  href,
  ...props
}) => {
  const classes = [base, variantClasses[variant], className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};
