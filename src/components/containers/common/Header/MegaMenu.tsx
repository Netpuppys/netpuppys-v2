import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/common/FaIcon";
import { solutionsMenu } from "@/lib/data/site-content";
import type { MegaMenuLink } from "@/types/site";

const MenuItem: React.FC<{ item: MegaMenuLink }> = ({ item }) => (
  <li>
    <Link href={item.href} className="group/item flex items-center gap-5">
      <span className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-peach text-[15px] text-orange transition-colors group-hover/item:bg-orange group-hover/item:text-white">
        <FaIcon name={item.icon} />
      </span>
      <span className="font-sans text-base text-ink transition-colors group-hover/item:text-orange">{item.label}</span>
    </Link>
  </li>
);

/**
 * Desktop "Marketing Solutions" mega-menu: white rounded panel with two icon
 * columns split by a rule, plus the peach "Explore all solutions" card.
 * Shown by the parent `group/mega` hover/focus in Header.
 */
export const MegaMenu: React.FC = () => {
  const [left, right] = solutionsMenu.columns;
  return (
    <div className="flex rounded-[24px] bg-white pb-[52px] pt-[55px] pl-[70px] pr-[73px] shadow-[0_14px_16px_rgba(88,82,125,0.1)]">
      <ul className="flex w-[398px] flex-col gap-[10px] border-r border-line">
        {left.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </ul>
      <ul className="flex flex-1 flex-col gap-[10px] pl-[68px]">
        {right.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </ul>
      <Link
        href={solutionsMenu.explore.href}
        className="group/card relative mt-auto h-[180px] w-[280px] shrink-0 rounded-[24px] bg-peach"
      >
        <Image
          src="/images/brand/menu-target.webp"
          alt=""
          width={240}
          height={293}
          className="absolute -top-[55px] right-5 w-[120px] transition-transform duration-300 group-hover/card:-translate-y-1"
        />
        <span className="absolute bottom-5 left-5 w-[120px] font-sans text-base leading-[1.3] text-ink">
          {solutionsMenu.explore.label}
        </span>
        <span className="absolute bottom-[26px] right-5 flex size-8 items-center justify-center rounded-full bg-ink text-sm text-white transition-colors group-hover/card:bg-orange">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </Link>
    </div>
  );
};
