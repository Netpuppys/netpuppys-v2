"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { AvatarStack } from "@/components/common/AvatarStack";
import { Carousel } from "@/components/common/Carousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SlashDivider } from "@/components/common/SlashDivider";
import { StarRating } from "@/components/common/StarRating";
import { Container } from "@/components/containers/common/Container";
import { testimonials as defaultTestimonials } from "@/lib/data/home-content";
import type { Testimonial } from "@/types/site";

interface TestimonialsSectionProps {
  items?: Testimonial[];
  /** Optional centred heading above the card ("What our happy customers are saying"). */
  heading?: string;
  /** white = default card; peach = Success Stories variant (both halves peach, all corners rounded). */
  tone?: "white" | "peach";
  /** Pull the card up over the foot of the proof section (homepage). */
  overlap?: boolean;
  reviewsLabel?: string;
  className?: string;
}

/** Quote slider (left) + dashed arrow and reviews row (right). */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  items = defaultTestimonials.items,
  heading,
  tone = "white",
  overlap = false,
  reviewsLabel = defaultTestimonials.reviews.label,
  className = "",
}) => {
  const peach = tone === "peach";
  return (
    <section className={["relative", overlap ? "-mt-[44px]" : "", className].join(" ")}>
      <Container>
        {heading && <SectionTitle className="mx-auto mb-10 max-w-[720px] text-center">{heading}</SectionTitle>}
        <div
          className={[
            "grid grid-cols-1 lg:grid-cols-[704px_1fr]",
            peach ? "rounded-[30px] bg-peach lg:rounded-[50px]" : "rounded-t-[30px] bg-white lg:rounded-t-[50px]",
          ].join(" ")}
        >
          <div className={["relative min-w-0 px-6 pb-16 pt-12 md:px-[62px] lg:pt-[60px]", peach ? "lg:min-h-[549px]" : "lg:min-h-[570px]"].join(" ")}>
            {!peach && <FontAwesomeIcon icon={faQuoteLeft} className="text-[62px] text-orange" aria-hidden="true" />}
            <Carousel
              label="Client testimonials"
              slideClassName="basis-full"
              autoplay={5000}
              arrows="round"
              arrowsClassName={peach ? "mt-8 lg:absolute lg:-left-[2px] lg:top-[275px] lg:mt-0" : "mt-8 lg:absolute lg:-left-[14px] lg:top-[351px] lg:mt-0"}
              className={peach ? "mt-0 max-w-[538px] lg:mt-[154px]" : "mt-[47px] max-w-[510px] lg:min-h-[320px]"}
            >
              {items.map((t) => (
                <figure key={t.name}>
                  <blockquote
                    className={[
                      "font-light italic text-ink",
                      peach ? "text-[22px] leading-[30px]" : "text-xl leading-[30px] tracking-[-0.3px]",
                    ].join(" ")}
                  >
                    {peach ? t.quote : <>&quot;{t.quote}&quot;</>}
                  </blockquote>
                  <figcaption className={["flex items-center gap-5", peach ? "mt-6" : "mt-[25px]"].join(" ")}>
                    {t.photo.src && (
                      <Image src={t.photo.src} alt={t.photo.alt} width={100} height={100} className="h-[50px] w-[50px] rounded-full object-cover" />
                    )}
                    <span>
                      <span className="block text-base font-normal leading-[20.8px] text-ink">{t.name}</span>
                      <span className={["block", peach ? "text-base font-light text-ink" : "text-sm font-light leading-[21px] text-body"].join(" ")}>
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Carousel>
          </div>

          <div className="relative px-6 pb-12 lg:min-h-[549px] lg:px-0">
            <Image src="/images/shapes/line-arrow-2.svg" alt="" width={340} height={329} className="absolute left-[118px] top-[66px] hidden lg:block" />
            <div className="flex flex-wrap items-center gap-6 lg:absolute lg:left-0 lg:top-[410px] lg:gap-0">
              <div className="lg:w-[184px]">
                <StarRating />
                <p className="mt-1 text-base font-normal leading-[20.8px] text-ink">{reviewsLabel}</p>
              </div>
              <SlashDivider className="hidden lg:block" />
              <AvatarStack avatars={defaultTestimonials.reviews.avatars} className="lg:ml-[61px]" />
              <Link href={defaultTestimonials.reviews.cta.href} className="group inline-flex items-center gap-2.5 text-base font-normal tracking-[-0.2px] text-ink lg:ml-5">
                <span className="hover-fill">{defaultTestimonials.reviews.cta.label}</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
