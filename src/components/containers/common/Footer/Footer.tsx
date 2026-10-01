import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/containers/common/Container";
import { contact, footerBlurb, footerColumns, legalLinks, socialLinks } from "@/lib/data/site-content";
import type { SocialLink } from "@/types/site";

const socialIcons: Record<SocialLink["label"], string> = {
  Instagram:
    "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm4 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5-1.5h.01",
  Facebook: "M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9.8c0-.5.4-.8 1-.8Z",
  X: "M4 4l16 16M20 4 4 20",
  YouTube: "M3 8.5C3 6.6 4.6 5 6.5 5h11C19.4 5 21 6.6 21 8.5v7c0 1.9-1.6 3.5-3.5 3.5h-11A3.5 3.5 0 0 1 3 15.5v-7ZM10 9.5v5l4.5-2.5L10 9.5Z",
  LinkedIn: "M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4 5h3.8v1.6c.6-1 1.9-1.9 3.7-1.9 3.3 0 3.5 2.3 3.5 5V20h-4v-5.3c0-1.3 0-2.9-1.8-2.9S12 13.2 12 14.6V20h-2z",
};

export const Footer: React.FC = () => (
  <footer className="bg-ink text-white">
    <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] lg:gap-10">
      <div className="sm:col-span-2 lg:col-span-1">
        <Logo inverted />
        <p className="mt-6 max-w-sm leading-relaxed text-white/65">{footerBlurb}</p>
        <ul className="mt-6 flex gap-3">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-orange hover:bg-orange"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={socialIcons[s.label]} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {footerColumns.map((col) => (
        <div key={col.heading}>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-sun">{col.heading}</h3>
          <ul className="mt-5 space-y-3">
            {col.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/70 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-sun">Get in touch</h3>
        <a href={contact.phoneHref} className="mt-5 flex items-center gap-3 font-display text-lg font-semibold hover:text-orange">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange">
            <Icon name="phone" className="h-4 w-4" />
          </span>
          {contact.phone}
        </a>
        <p className="mt-4 text-white/60">{contact.location}</p>
        <a href={contact.whatsappHref} className="mt-4 inline-block text-sm text-white/70 underline underline-offset-4 hover:text-white">
          WhatsApp us
        </a>
      </div>
    </Container>

    <div className="border-t border-white/10">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Netpuppys. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-6">
          {legalLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  </footer>
);
