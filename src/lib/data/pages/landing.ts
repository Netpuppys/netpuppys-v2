import { hero, services } from "@/lib/data/home-content";
import { wp } from "@/lib/helpers/images";
import type { FeatureCard } from "@/types/site";

/** /digital-marketing-agency — the stand-alone paid-traffic landing page (own header/footer). */

export const landingNav = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact us", href: "#contact" },
];

export const bookCall = { label: "Book a call", href: "#contact" };

export const landingHero: typeof hero = {
  ...hero,
  title: "Growth-Focused Performance Marketing Agency",
  subtitle: "Grow your business with ROI-driven campaigns across Google, Meta, LinkedIn, TikTok, Snapchat and more.",
  audit: { text: "Get Your Audit Today", cta: bookCall },
  images: { ...hero.images, speaker: { ...wp("2026/07/Left-man-2.png", "Marketer shouting through a megaphone") } },
};

const ms = (slug: string) => `/marketing-solutions/${slug}`;

export const landingServices: FeatureCard[] = [
  ...services.items,
  { icon: "codeBranch", title: "AI Content Creation", href: ms("ai-content-creation"), description: "We leverage cutting-edge artificial intelligence to generate high-quality, scalable content that is both creative and data-optimized. Our AI-powered solutions help you stay ahead of the curve." },
  { icon: "chartPie", title: "Search Engine Optimization", href: ms("search-engine-optimization"), description: "We improve your online visibility and drive organic traffic with strategic SEO that moves you to the top of search results. Our goal is to ensure your business is easily found by the customers who are already looking for you." },
  { icon: "podcast", title: "Influencer marketing", href: ms("influencer-marketing"), description: "We connect you with authentic and relevant voices who can genuinely promote your brand to their audiences. Our campaigns are designed to build trust and generate buzz that drives real conversions." },
  { icon: "photoVideo", title: "Branding & Product Shoot", href: ms("branding-product-shoot"), description: "We capture your brand's unique essence through professional and compelling visuals. Our photography and styling services are designed to create a strong visual identity that resonates with your target audience." },
];

export const landingContact = {
  title: "We Are Here To Help You Grow",
  paragraphs: [
    "Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and explore how our digital marketing team can contribute to your success.",
    "We believe in being a loyal extension of your team, treating your brand as if it were our own. Our relentless pursuit is to achieve the tangible, measurable results you expect and deserve.",
  ],
  services: [
    "Website Development & Management",
    "Content Creation and Curation",
    "Ads/Performance Marketing",
    "Digital Marketing Solutions",
    "SEO (Search Engine Optimization)",
    "Social Media Marketing",
    "Others",
  ],
  budgets: ["INR 50k - INR 1.5 lacs", "INR 1.5 lacs - INR 3 lacs", "INR 3 lacs - INR 5 lacs", "INR 5 lacs and above"],
};
