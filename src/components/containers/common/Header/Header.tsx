"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/containers/common/Container";
import { navLinks, primaryCta } from "@/lib/data/site-content";

/**
 * Announcement bar + sticky nav. Client component only for the mobile menu
 * and the shadow that appears once the page is scrolled.
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-ink text-white">
        <Container className="flex items-center justify-center gap-2 py-2.5 font-display text-xs font-medium tracking-wide">
          <span aria-hidden="true">🏆</span>
          <span className="hidden sm:inline">Marketing Agency of the Year 2024 —</span>
          <Link href={primaryCta.href} className="group inline-flex items-center gap-1 font-semibold text-sun">
            Get a free audit
            <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </div>

      <header
        className={[
          "sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow",
          isScrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]" : "",
        ].join(" ")}
      >
        <Container className="flex items-center justify-between py-3.5">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 font-display text-sm font-medium text-ink hover:bg-peach"
                  >
                    {link.label}
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="min-w-48 rounded-2xl border border-line bg-white p-2 shadow-xl">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} className="block rounded-xl px-4 py-2.5 text-sm text-ink hover:bg-peach">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 font-display text-sm font-medium text-ink hover:bg-peach"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-peach text-ink lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              {isMenuOpen ? (
                <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </Container>

        {isMenuOpen && (
          <div className="border-t border-line bg-white lg:hidden">
            <Container className="flex flex-col gap-1 py-5">
              {navLinks.flatMap((link) => [link, ...(link.children ?? []).map((c) => ({ ...c, nested: true }))]).map(
                (link) => (
                  <Link
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={[
                      "rounded-xl px-3 py-2.5 font-display text-base font-medium text-ink hover:bg-peach",
                      "nested" in link ? "pl-7 text-sm text-ink-soft" : "",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Button href={primaryCta.href} className="mt-3">
                {primaryCta.label}
              </Button>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};
