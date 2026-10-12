import Image from "next/image";
import { Container } from "@/components/containers/common/Container";
import { wp } from "@/lib/helpers/images";

const badges = [
  wp("elementor/thumbs/56cf51c7d935aba26a8f553867bf878b-rc9ezhuz4qnp1qqzmwzuju570y0y78i16g42acx7a8.png", "Clutch badge"),
  wp("elementor/thumbs/new-badge20220412-1161242-19o8jy5-rc9ezhuz4qnp1qqzmwzuju570y0y78i16g42acx7a8.png", "Agency award badge"),
  wp("elementor/thumbs/new-badge20211006-5432-t7lh3l-rc9ezistbkozdcpmhfeh4bwnmbwbexlrikrjrmvt40.png", "Agency award badge"),
  wp("elementor/thumbs/new-badge20211005-28345-8m8kvp-rc9ezistbkozdcpmhfeh4bwnmbwbexlrikrjrmvt40.png", "Agency award badge"),
  wp("elementor/thumbs/logo_hubspot-rc9ezisuq0a86z5hkowzqnd9dciuwoizampzicfe8w.png", "HubSpot Gold Partner"),
];

/** "Credentials & recognition:" label with the five award badges. */
export const Credentials: React.FC<{ className?: string }> = ({ className = "" }) => (
  <section className={className}>
    <Container className="flex flex-wrap items-center justify-center gap-x-[45px] gap-y-6">
      <p className="w-[160px] font-display text-xl font-bold leading-6 tracking-[-0.6px] text-ink">Credentials &amp; recognition:</p>
      {badges.map((b, i) => (
        <Image key={b.src} src={b.src} alt={b.alt} width={b.width} height={b.height} className={i === 4 ? "h-20 w-auto" : "h-20 w-20 object-contain"} />
      ))}
    </Container>
  </section>
);
