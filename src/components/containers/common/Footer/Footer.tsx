import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { WaveDivider } from "@/components/common/WaveDivider";
import { Container } from "@/components/containers/common/Container";
import {
  contact,
  footerCta,
  footerNav,
  footerSolutions,
  legalLinks,
  socialLinks,
} from "@/lib/data/site-content";
import type { SocialLink } from "@/types/site";

const socialIcons: Record<SocialLink["label"], IconDefinition> = {
  Instagram: faInstagram,
  X: faXTwitter,
  Facebook: faFacebook,
  YouTube: faYoutube,
};

const footerLink = "group text-base font-light leading-6 text-ink";

/**
 * Footer exactly as on netpuppys.com: blush CTA card (headline, phone,
 * contact button, partner badges, ROAS stat) overlapped by the peach
 * links card (solutions, site nav, legal + social bar).
 */
export const Footer: React.FC = () => (
  <footer className="pt-10 lg:pt-0">
    <Container>
      {/* CTA card */}
      <div className="rounded-t-[30px] bg-blush px-6 pb-[90px] pt-12 md:px-[60px] lg:rounded-t-[50px] lg:pb-[94px] lg:pt-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <h2 className="max-w-[580px] font-display text-[28px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-[35px] lg:tracking-[-2px]">
            {footerCta.title}
          </h2>
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <p className="max-w-[261px] text-base font-light leading-6 text-body">{footerCta.description}</p>
            <a href={contact.phoneHref} className="group mt-4 font-display text-base font-bold uppercase leading-[22.4px] tracking-[-1px] text-ink">
              <span className="hover-fill">{contact.phone}</span>
            </a>
            <Button href={footerCta.cta.href} className="mt-6">
              {footerCta.cta.label}
            </Button>
          </div>
        </div>

        <WaveDivider className="mt-[70px]" />

        <div className="mt-16 flex flex-col gap-10 lg:mt-[95px] lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Eyebrow as="h6">{footerCta.partnerEyebrow}</Eyebrow>
            <div className="mt-8 flex items-center gap-5">
              {footerCta.partners.map((p) => (
                <Image key={p.src} src={p.src} alt={p.alt} width={p.width} height={p.height} />
              ))}
            </div>
          </div>
          <div className="lg:text-right">
            <p className="flex items-baseline gap-1.5 lg:justify-end">
              <span className="font-display text-[40px] font-medium leading-10 tracking-[-2px] text-ink">{footerCta.roas.value}</span>
              <span className="text-base font-normal text-ink">{footerCta.roas.label}</span>
            </p>
            <p className="mt-5 max-w-[209px] text-base font-light leading-6 text-body lg:ml-auto">{footerCta.roas.description}</p>
          </div>
        </div>
      </div>

      {/* Links card — overlaps the CTA card by its 50px radius */}
      <div className="-mt-[50px] rounded-t-[30px] bg-peach px-6 pt-[50px] md:px-[60px] lg:rounded-t-[50px]">
        <Eyebrow as="h6">Solutions</Eyebrow>
        <div className="mt-[31px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:justify-between">
          {[0, 2, 4, 6].map((start) => (
            <ul key={start} className="space-y-5">
              {footerSolutions.slice(start, start + 2).map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={footerLink}>
                    <span className="hover-fill [--fill:rgba(255,92,0,0.25)]">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <nav aria-label="Footer" className="mt-[45px] border-y border-line py-[31px]">
          <ul className="flex flex-wrap items-center justify-around gap-x-8 gap-y-4">
            {footerNav.map((l) => (
              <li key={l.label} className="group relative">
                <Link href={l.href} className={[footerLink, "inline-flex items-center gap-2"].join(" ")}>
                  <span className="hover-fill [--fill:rgba(255,92,0,0.25)]">{l.label}</span>
                  {l.children && <FontAwesomeIcon icon={faCaretDown} className="text-xs" />}
                </Link>
                {l.children && (
                  <ul className="invisible absolute bottom-full left-0 z-10 min-w-40 bg-white py-2 opacity-0 shadow-lg transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {l.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} className="block px-4 py-2 text-sm hover:text-orange">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 pb-10 pt-0.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-base font-light text-body">
            <p className="leading-4">© {new Date().getFullYear()} Netpuppys. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="leading-5 text-ink hover:text-orange">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex gap-[5px]">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-peach text-ink hover:text-orange"
                >
                  <FontAwesomeIcon icon={socialIcons[s.label]} className="text-lg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </footer>
);
