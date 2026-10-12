import { wp } from "@/lib/helpers/images";
import type { ImageAsset, Testimonial } from "@/types/site";

/**
 * /success-stories — copy mirrors netpuppys.com/success-stories.
 * TODO(content): the logo strip, the last five case cards (Subway, Jolie,
 * NIKO, Nestlle, MarcPol), the "Numerique" lead and the testimonial are the
 * WordPress theme's demo content.
 */

export const successHero = {
  eyebrow: "Success Stories",
  title: "Delivering real results",
  lead: "When you partner with Numerique, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.",
  image: wp("2023/05/pexels-mikael-blomkvist-6476185-1024x895.jpg", "Team celebrating results"),
};

export const demoLogos: ImageAsset[] = [
  wp("2023/06/jolie-1.svg", "Jolie"),
  wp("2023/06/caridad.svg", "Caridad"),
  wp("2023/06/F7.svg", "F7"),
  wp("2023/06/Scuola_Logo_OnlyTop-1.svg", "Scuola"),
  wp("2023/06/petmania.svg", "Petmania"),
  wp("2023/06/tecnologia.svg", "Tecnologia"),
];

export const portfolioIntro =
  "No matter what service you’re looking for — SEO, PPC, web design, social media, email marketing, or anything else — we’ve got you covered. Check out our portfolio to learn how our digital marketing solutions drive results for clients!";

export interface PortfolioCard {
  client: string;
  metric: string;
  label: string;
  href: string;
  image: string;
  tags?: { label: string; href: string }[];
}

const tag = (label: string) => ({ label, href: `/blog/tag/${label.toLowerCase().replace(/\s+/g, "-")}` });

export const portfolio: PortfolioCard[] = [
  { client: "Tula’s Institute", metric: "+40%", label: "Admission growth", href: "/blog/tulas-institute", image: "/images/work/tulas-institute.jpg" },
  { client: "Tula’s International School", metric: "+50%", label: "Engagement rates", href: "/blog/tis", image: "/images/work/tis.jpg" },
  { client: "Cradlewell", metric: "+40%", label: "Sales growth", href: "/blog/cradlewell", image: "/images/work/cradlewell.jpg" },
  { client: "Fyst World", metric: "+40%", label: "Overall growth", href: "/blog/fyst-world", image: "/images/work/fyst-world.jpg" },
  { client: "Subway", metric: "+50%", label: "Increase in organic sessions", href: "/blog/subway", image: "/images/wp/2023/05/pexels-lucas-oliveira-4249007.jpg", tags: [tag("Organic Social Media"), tag("Paid Social")] },
  { client: "Jolie", metric: "+40%", label: "Ecommerce growth", href: "/blog/jolie", image: "/images/wp/2023/05/pexels-ekaterina-bolovtsova-6311861.jpg", tags: [tag("Paid Search"), tag("Paid Social"), tag("SEO")] },
  { client: "NIKO", metric: "+40%", label: "Ecommerce growth", href: "/blog/niko", image: "/images/wp/2023/05/pexels-melvin-buezo-2529148-1.jpg", tags: [tag("Paid Search"), tag("Paid Social"), tag("SEO")] },
  { client: "Nestlle", metric: "+50%", label: "Increase in organic transactions", href: "/blog/nestlle", image: "/images/wp/2023/05/pexels-amar-preciado-16230535.jpg", tags: [tag("Organic Social Media"), tag("Paid Social")] },
  { client: "MarcPol", metric: "55%", label: "Ecommerce growth", href: "/blog/marcpol", image: "/images/wp/2023/05/pexels-godisable-jacob-1191522.jpg", tags: [tag("Paid Search"), tag("Paid Social"), tag("SEO")] },
];

export const successTestimonials: Testimonial[] = [
  {
    quote: "“The entire staff at Numerique has been phenomenal. They are quick with their replies and incredibly helpful.”",
    name: "Edward Kennedy",
    role: "Director, Client Experience",
    photo: { src: "", alt: "", width: 0, height: 0 },
  },
];
