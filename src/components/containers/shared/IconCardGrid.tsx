import Link from "next/link";
import { Button } from "@/components/common/Button";
import { FaIcon } from "@/components/common/FaIcon";
import type { FeatureCard } from "@/types/site";

interface IconCardGridProps {
  cards: FeatureCard[];
  /** 4 = 305px cards (process, services); 3 = 407px cards (benefits, reasons). */
  cols?: 3 | 4;
  /** Show a "Learn more" link on cards that have an href. */
  showLink?: boolean;
  cardClassName?: string;
  className?: string;
}

/** White rounded cards with a peach icon circle, bold title and body copy. */
export const IconCardGrid: React.FC<IconCardGridProps> = ({ cards, cols = 4, showLink = false, cardClassName = "", className = "" }) => (
  <div className={["grid gap-5 sm:grid-cols-2", cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3 lg:gap-[30px]", className].join(" ")}>
    {cards.map((c) => (
      <article key={c.title} className={["flex flex-col rounded-[34px] bg-white px-[30px] pb-[35px] pt-10", cardClassName].join(" ")}>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-peach text-orange">
          <FaIcon name={c.icon} className="text-2xl" />
        </span>
        <h3 className="mt-[25px] font-display text-xl font-bold leading-6 tracking-[-0.6px] text-ink">
          {c.href ? (
            <Link href={c.href} className="hover:text-orange">
              {c.title}
            </Link>
          ) : (
            c.title
          )}
        </h3>
        <p className="mt-[18px] flex-1 text-base font-light leading-6 text-body">{c.description}</p>
        {showLink && c.href && (
          <Button href={c.href} variant="link" className="mt-6 self-start">
            Learn more
          </Button>
        )}
      </article>
    ))}
  </div>
);
