"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { AvatarStack } from "@/components/common/AvatarStack";
import { Carousel } from "@/components/common/Carousel";
import { SlashDivider } from "@/components/common/SlashDivider";
import { StarRating } from "@/components/common/StarRating";
import { Container } from "@/components/containers/common/Container";
import { testimonials } from "@/lib/data/home-content";

/** White card overlapping the proof section: quote slider (left) + dashed arrow and reviews row (right). */
export const TestimonialsSection: React.FC = () => (
  <section className="relative -mt-[44px]">
    <Container>
      <div className="grid grid-cols-1 rounded-t-[30px] bg-white lg:grid-cols-[704px_1fr] lg:rounded-t-[50px]">
        <div className="relative min-w-0 px-6 pb-16 pt-12 md:px-[62px] lg:min-h-[570px] lg:pt-[60px]">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-[62px] text-orange" aria-hidden="true" />
          <Carousel
            label="Client testimonials"
            slideClassName="basis-full"
            autoplay={5000}
            arrows="round"
            arrowsClassName="mt-8 lg:absolute lg:-left-[14px] lg:top-[351px] lg:mt-0"
            className="mt-[47px] max-w-[510px] lg:min-h-[320px]"
          >
            {testimonials.items.map((t) => (
              <figure key={t.name}>
                <blockquote className="text-xl font-light italic leading-[30px] tracking-[-0.3px] text-ink">
                  &quot;{t.quote}&quot;
                </blockquote>
                <figcaption className="mt-[25px] flex items-center gap-5">
                  <Image src={t.photo.src} alt={t.photo.alt} width={100} height={100} className="h-[50px] w-[50px] rounded-full object-cover" />
                  <span>
                    <span className="block text-base font-normal leading-[20.8px] text-ink">{t.name}</span>
                    <span className="block text-sm font-light leading-[21px] text-body">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>

        <div className="relative px-6 pb-12 lg:min-h-[570px] lg:px-0">
          <Image
            src="/images/shapes/line-arrow-2.svg"
            alt=""
            width={340}
            height={329}
            className="absolute left-[118px] top-[66px] hidden lg:block"
          />
          <div className="flex flex-wrap items-center gap-6 lg:absolute lg:left-0 lg:top-[410px] lg:gap-0">
            <div className="lg:w-[184px]">
              <StarRating />
              <p className="mt-1 text-base font-normal leading-[20.8px] text-ink">{testimonials.reviews.label}</p>
            </div>
            <SlashDivider className="hidden lg:block" />
            <AvatarStack avatars={testimonials.reviews.avatars} className="lg:ml-[61px]" />
            <Link href={testimonials.reviews.cta.href} className="group inline-flex items-center gap-2.5 text-base font-normal tracking-[-0.2px] text-ink lg:ml-5">
              <span className="hover-fill">{testimonials.reviews.cta.label}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-base" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
