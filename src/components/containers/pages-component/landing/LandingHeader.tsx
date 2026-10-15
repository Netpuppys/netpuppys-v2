"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/containers/common/Container";
import { landingNav } from "@/lib/data/pages/landing";
import { contact } from "@/lib/data/site-content";

/** Landing-page header: logo, in-page anchor links and a "Let's talk" phone button. */
export const LandingHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={["sticky top-0 z-40 transition-colors", scrolled || open ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-white lg:bg-transparent"].join(" ")}>
      <Container className="flex h-[72px] items-center justify-between lg:h-[81px]">
        {/* Not a link — the landing page keeps visitors on the page. */}
        <Image src="/images/brand/logo.png" alt="Netpuppys" width={480} height={194} priority className="h-[58px] w-auto lg:h-[81px]" />
        <nav aria-label="Page sections" className="hidden items-center gap-8 lg:flex">
          {landingNav.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-normal uppercase text-ink hover:text-orange">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.phoneHref}
          className="hidden h-[46px] items-center gap-2.5 rounded-[18px] bg-ink px-[29px] font-display text-xs font-bold text-white lg:inline-flex"
        >
          <FontAwesomeIcon icon={faPhone} className="text-xs" />
          Let&apos;s talk {contact.phone}
        </a>
        <button type="button" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-2xl" />
        </button>
      </Container>
      {open && (
        <Container className="flex flex-col border-t border-line bg-white py-4 lg:hidden">
          {landingNav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base uppercase text-ink">
              {l.label}
            </a>
          ))}
          <a href={contact.phoneHref} className="py-3 font-display font-bold text-ink">
            Let&apos;s talk {contact.phone}
          </a>
        </Container>
      )}
    </header>
  );
};
