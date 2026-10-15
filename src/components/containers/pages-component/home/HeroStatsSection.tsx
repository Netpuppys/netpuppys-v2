import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { AvatarStack } from "@/components/common/AvatarStack";
import { SlashDivider } from "@/components/common/SlashDivider";
import { StarRating } from "@/components/common/StarRating";
import { Container } from "@/components/containers/common/Container";
import { heroStats } from "@/lib/data/home-content";

/** The stacked (mobile) version of the slash separator: two short offset hairlines. */
const MobileDivider = () => (
  <span aria-hidden="true" className="flex flex-col items-center gap-[3px] md:hidden">
    <span className="ml-3 h-px w-[50px] bg-line" />
    <span className="mr-3 h-px w-[50px] bg-line" />
  </span>
);

/** Experts · revenue · reviews row under the hero, sitting on the offset wave hairline. */
export const HeroStatsSection: React.FC = () => (
  <section
    className="mt-[41px] bg-[url(/images/shapes/border-center.svg)] bg-[position:50%_100%] bg-no-repeat pb-[86px] md:mt-[15px] md:bg-[url(/images/shapes/border.svg)] md:pb-[84px]"
  >
    <Container className="flex flex-col items-center gap-[26px] text-center md:flex-row md:items-start md:justify-between md:gap-4 md:text-left">
      <div className="flex flex-col items-center gap-[7px] md:flex-row md:gap-[15px]">
        <AvatarStack avatars={heroStats.experts.avatars} />
        <Link href={heroStats.experts.href} className="group inline-flex items-center gap-3 text-base font-normal leading-[20.8px] tracking-[-0.2px] text-ink">
          <span className="hover-fill">{heroStats.experts.label}</span>
          <FontAwesomeIcon icon={faAngleRight} className="text-base" />
        </Link>
      </div>

      <SlashDivider className="hidden md:block" />
      <MobileDivider />

      <div className="flex flex-col items-center gap-[5px] md:flex-row md:items-start md:gap-5">
        <p className="font-display text-[26px] font-medium leading-[28.6px] tracking-[-1px] text-ink md:text-[40px] md:leading-10 md:tracking-[-2px]">
          {heroStats.revenue.value}
        </p>
        <p className="max-w-[124px] text-base font-normal leading-[20.8px] text-ink">{heroStats.revenue.label}</p>
      </div>

      <SlashDivider className="hidden md:block" />
      <MobileDivider />

      <div className="flex flex-col items-center pt-[13px] md:items-end md:pt-0">
        <StarRating />
        <p className="mt-[7px] text-base md:mt-1 font-normal leading-[20.8px] text-ink">{heroStats.reviews.label}</p>
      </div>
    </Container>
  </section>
);
