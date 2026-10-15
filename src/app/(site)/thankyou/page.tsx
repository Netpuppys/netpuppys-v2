import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/containers/common/Container";
import { thankYou } from "@/lib/data/pages/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/thankyou/" },
  title: "Thankyou - Netpuppys",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[792px] items-center py-20">
      <Container className="text-center">
        <p className="font-display text-base font-light uppercase tracking-[0.5em] text-[#324a6d]">{thankYou.eyebrow}</p>
        <h1 className="mt-5 font-display text-[36px] font-semibold leading-[1.05] text-[#1c244b] md:text-[55px]">
          {thankYou.title} <span aria-hidden="true">🎉</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[1210px] font-display text-[18px] font-light leading-[1.5] text-[#324a6d] md:text-[22px]">{thankYou.text}</p>
        <Link
          href={thankYou.cta.href}
          className="mt-10 inline-flex h-[50px] items-center rounded-full border border-orange bg-orange px-14 font-display text-base text-white hover:bg-white hover:text-orange"
        >
          {thankYou.cta.label}
        </Link>
      </Container>
    </section>
  );
}
