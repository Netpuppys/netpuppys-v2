import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/containers/common/Container";
import { aboutTeam } from "@/lib/data/pages/about";

const socialStyle = {
  Facebook: { icon: faFacebookF, bg: "bg-[#3b5998]" },
  LinkedIn: { icon: faLinkedinIn, bg: "bg-[#0077b5]" },
  Instagram: { icon: faInstagram, bg: "bg-[#262626]" },
} as const;

/** "Meet the Netpuppys revolutionaries" — title left, founder cards with social squares right. */
export const TeamSection: React.FC = () => (
  <section className="mt-[50px]">
    <Container className="grid gap-10 lg:grid-cols-[418px_1fr] lg:gap-[50px]">
      <div className="lg:pt-[31px]">
        <Eyebrow as="h2">{aboutTeam.eyebrow}</Eyebrow>
        <SectionTitle className="mt-5 lg:mt-[81px]">{aboutTeam.title}</SectionTitle>
      </div>
      <ul className="grid gap-10 sm:grid-cols-2 lg:flex lg:gap-10 lg:pt-5">
        {aboutTeam.members.map((m) => (
          <li key={m.image.src} className="lg:w-[376px]">
            <Image src={m.image.src} alt={m.image.alt} width={m.image.width} height={m.image.height} sizes="376px" className="aspect-square w-full" />
            <ul className="mt-[5px] flex gap-[5px]">
              {m.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.image.alt} on ${s.label}`}
                    className={["flex h-7 w-7 items-center justify-center rounded-[3px] text-white hover:opacity-80", socialStyle[s.label].bg].join(" ")}
                  >
                    <FontAwesomeIcon icon={socialStyle[s.label].icon} className="text-[14px]" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
