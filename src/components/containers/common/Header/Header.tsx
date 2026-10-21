"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars, faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/containers/common/Container";
import { mobileTopBar, navLinks, primaryCta, solutionsMenu } from "@/lib/data/site-content";
import type { NavLink } from "@/types/site";
import { MegaMenu } from "./MegaMenu";

const navItem =
  "group relative flex items-center gap-1 font-syne text-sm font-semibold uppercase leading-[19.6px] tracking-[-0.17px] text-ink";

/** Mobile menu: Marketing Solutions opens as an accordion listing "All solutions" + every service page. */
const mobileLinks: NavLink[] = navLinks.map((l) =>
  l.mega
    ? {
        ...l,
        children: [
          { label: "All Solutions", href: l.href },
          ...solutionsMenu.columns.flat().map((s) => ({ label: s.label, href: s.href })),
        ],
      }
    : l,
);

const mobileItem =
  "flex items-center px-10 py-[15px] font-sans text-base font-normal text-ink transition-colors hover:bg-peach";

/**
 * Transparent header over the hero that turns white once the page scrolls
 * (sticky), plus the black "Get a free audit" bar shown on mobile only.
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  /** Which desktop dropdown is open (hover/keyboard), so it can be closed after navigating. */
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const isExact = (href: string) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSub(null);
  };

  // Close every menu whenever the page changes (state adjusted during render, as React recommends).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDesktopOpen(null);
    setIsMenuOpen(false);
    setOpenSub(null);
  }

  /** Hover/focus handlers for a desktop dropdown; clicking any link inside closes it. */
  const dropdown = (label: string) => ({
    onMouseEnter: () => setDesktopOpen(label),
    onMouseLeave: () => setDesktopOpen(null),
    onFocus: () => setDesktopOpen(label),
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDesktopOpen(null);
    },
    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("a")) {
        setDesktopOpen(null);
        (document.activeElement as HTMLElement | null)?.blur();
      }
    },
  });
  const panel = (label: string) =>
    ["transition-all duration-200", desktopOpen === label ? "visible opacity-100" : "invisible opacity-0"].join(" ");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Link
        href={mobileTopBar.href}
        className="flex items-center justify-center gap-2 bg-ink py-3 font-syne text-xs font-bold uppercase tracking-[-0.2px] text-white lg:hidden"
      >
        {mobileTopBar.label}
        <FontAwesomeIcon icon={faAngleRight} className="text-xs" />
      </Link>

      <header
        className={[
          "sticky top-0 z-40 transition-colors duration-300",
          isScrolled || isMenuOpen ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-white lg:bg-transparent",
        ].join(" ")}
      >
        <Container className="relative flex h-[61px] items-center justify-between lg:h-[81px]">
          <Link href="/" aria-label="Netpuppys home" className="shrink-0">
            <Image src="/images/brand/logo.png" alt="Netpuppys" width={480} height={194} priority className="h-[60px] w-auto lg:h-[81px]" />
          </Link>

          <nav aria-label="Main" className="hidden h-full items-center gap-6 lg:flex">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label} className="flex h-full items-center" {...dropdown(link.label)}>
                  <Link href={link.href} className={navItem} aria-expanded={desktopOpen === link.label}>
                    <span className="hover-fill [--fill:rgba(255,92,0,0.25)]">{link.label}</span>
                  </Link>
                  <div className={["absolute inset-x-5 top-full pt-[3px]", panel(link.label)].join(" ")}>
                    <MegaMenu />
                  </div>
                </div>
              ) : link.children ? (
                <div key={link.label} className="relative flex h-full items-center" {...dropdown(link.label)}>
                  <Link href={link.href} className={navItem} aria-expanded={desktopOpen === link.label}>
                    <span className="hover-fill [--fill:rgba(255,92,0,0.25)]">{link.label}</span>
                    <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
                  </Link>
                  <div className={["absolute left-0 top-full", panel(link.label)].join(" ")}>
                    <ul className="min-w-48 bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} className="block px-5 py-2.5 font-syne text-sm font-semibold uppercase text-ink hover:text-orange">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className={navItem}>
                  <span className="hover-fill [--fill:rgba(255,92,0,0.25)]">{link.label}</span>
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button href={primaryCta.href} showArrow={false} className="px-[29px]">
              {primaryCta.label}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-xs" />
            </Button>
          </div>

          <button
            type="button"
            className="text-ink lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-2xl" />
          </button>
        </Container>

        {isMenuOpen && (
          <nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-full overflow-hidden rounded-b-[30px] border-t border-line bg-white shadow-[0_14px_16px_rgba(0,0,0,0.11)] lg:hidden"
          >
            <ul>
              {mobileLinks.map((link) => {
                const active = isActive(link.href) && !link.children;
                const subOpen = openSub === link.label;
                return (
                  <li key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={subOpen}
                          onClick={() => setOpenSub(subOpen ? null : link.label)}
                          className={[mobileItem, "w-full text-left", link.children.some((c) => isExact(c.href)) ? "bg-peach" : ""].join(" ")}
                        >
                          {link.label}
                          <FontAwesomeIcon icon={faCaretDown} className={["ml-3 text-sm transition-transform", subOpen ? "rotate-180" : ""].join(" ")} />
                        </button>
                        {subOpen && (
                          <ul>
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={closeMenu}
                                  className={[mobileItem, "pl-[60px]", isExact(child.href) ? "bg-peach" : ""].join(" ")}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link href={link.href} onClick={closeMenu} className={[mobileItem, active ? "bg-peach" : ""].join(" ")}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
