import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { AvatarStack } from "@/components/common/AvatarStack";
import { SlashDivider } from "@/components/common/SlashDivider";
import { StarRating } from "@/components/common/StarRating";
import { Container } from "@/components/containers/common/Container";
import { heroStats } from "@/lib/data/home-content";

/** Experts · revenue · reviews row under the hero, sitting on the offset wave hairline. */
export const HeroStatsSection: React.FC = () => (
  <section
    className="mt-10 bg-no-repeat pb-[84px] md:mt-[15px]"
    style={{ backgroundImage: "url(/images/shapes/border.svg)", backgroundPosition: "50% 100%" }}
  >
    <Container className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:gap-4 md:text-left">
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-[15px]">
        <AvatarStack avatars={heroStats.experts.avatars} />
        <Link href={heroStats.experts.href} className="group inline-flex items-center gap-3 text-base font-normal leading-[20.8px] tracking-[-0.2px] text-ink">
          <span className="hover-fill">{heroStats.experts.label}</span>
          <FontAwesomeIcon icon={faAngleRight} className="text-base" />
        </Link>
      </div>

      <SlashDivider className="hidden md:block" />
      <span aria-hidden="true" className="h-px w-16 bg-line md:hidden" />

      <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:gap-5">
        <p className="font-display text-[40px] font-medium leading-10 tracking-[-2px] text-ink">{heroStats.revenue.value}</p>
        <p className="max-w-[124px] text-base font-normal leading-[20.8px] text-ink">{heroStats.revenue.label}</p>
      </div>

      <SlashDivider className="hidden md:block" />
      <span aria-hidden="true" className="h-px w-16 bg-line md:hidden" />

      <div className="flex flex-col items-center md:items-end">
        <StarRating />
        <p className="mt-1 text-base font-normal leading-[20.8px] text-ink">{heroStats.reviews.label}</p>
      </div>
    </Container>
  </section>
);
