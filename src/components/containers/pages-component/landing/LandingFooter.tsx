import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { WaveDivider } from "@/components/common/WaveDivider";
import { Container } from "@/components/containers/common/Container";
import { bookCall } from "@/lib/data/pages/landing";
import { contact, footerCta } from "@/lib/data/site-content";

// TODO: confirm the LinkedIn and YouTube URLs.
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/netpuppys/", icon: faInstagram },
  { label: "Facebook", href: "https://www.facebook.com/netpuppys/", icon: faFacebook },
  { label: "LinkedIn", href: "#", icon: faLinkedin },
  { label: "YouTube", href: "#", icon: faYoutube },
];

/** Landing-page footer: the CTA card from the main site, then a slim copyright + social bar. */
export const LandingFooter: React.FC = () => (
  <footer className="mt-10 lg:mt-[10px]">
    <Container>
      <div className="rounded-t-[30px] bg-blush px-6 pb-[94px] pt-12 md:px-[60px] lg:rounded-t-[50px] lg:pt-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <h2 className="max-w-[580px] font-display text-[28px] font-semibold leading-[1.1] tracking-[-1.5px] text-ink lg:text-[35px] lg:tracking-[-2px]">{footerCta.title}</h2>
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <p className="max-w-[261px] text-base font-light leading-6 text-body">{footerCta.description}</p>
            <a href={contact.phoneHref} className="group mt-4 font-display text-base font-bold uppercase tracking-[-1px] text-ink">
              <span className="hover-fill">{contact.phone}</span>
            </a>
            <Button href={bookCall.href} className="mt-6">
              {bookCall.label}
            </Button>
          </div>
        </div>
        <WaveDivider className="mt-[70px]" />
        <div className="mt-16 flex flex-col gap-10 lg:mt-[95px] lg:flex-row lg:justify-between">
          <div>
            <Eyebrow as="h6">{footerCta.partnerEyebrow}</Eyebrow>
            <div className="mt-8 flex items-center gap-[25px] pl-5">
              {[...footerCta.partners].reverse().map((p) => (
                <Image key={p.src} src={p.src} alt={p.alt} width={p.width} height={p.height} />
              ))}
            </div>
          </div>
          <div className="lg:text-right">
            <p className="flex items-baseline gap-1.5 lg:justify-end">
              <span className="font-display text-[40px] font-medium leading-10 tracking-[-2px] text-ink">{footerCta.roas.value}</span>
              <span className="text-base text-ink">{footerCta.roas.label}</span>
            </p>
            <p className="mt-5 max-w-[209px] text-base font-light leading-6 text-body lg:ml-auto">{footerCta.roas.description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-peach px-6 py-3 sm:flex-row sm:items-start sm:justify-between md:px-[60px] lg:h-20">
        <p className="pt-3 text-base font-light text-body">© {new Date().getFullYear()} Netpuppys. All rights reserved.</p>
        <ul className="flex gap-[5px]">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center text-ink hover:text-orange">
                <FontAwesomeIcon icon={s.icon} className="text-xl" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </footer>
);
