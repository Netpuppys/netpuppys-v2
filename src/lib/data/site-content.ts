import type { CtaLink, NavLink, SocialLink } from "@/types/site";

/** Site-wide content shared by Header / Footer on every route. */

export const contact = {
  phone: "+91 9266707333",
  phoneHref: "tel:+919266707333",
  whatsappHref: "https://wa.me/919266707333",
};

export const primaryCta: CtaLink = { label: "Free audit", href: "/contact" };
export const mobileTopBar: CtaLink = { label: "Get a free audit", href: "/contact" };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Marketing Solutions", href: "/marketing-solutions" },
  {
    label: "Who We Are",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Meet the Team", href: "/meet-the-team" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];

export const footerCta = {
  title: "Your Brand's Been a Good Boy. It's High Time to Launch your Biggest Marketing Campaign.",
  description: "Ready to speak with a marketing expert? Give us a ring",
  cta: { label: "Contact us now", href: "/contact" },
  partnerEyebrow: "A partner, not a vendor",
  partners: [
    { src: "/images/home/google-partner.png", alt: "Google Partner", width: 55, height: 53 },
    { src: "/images/home/meta-business-partners.svg", alt: "Meta Business Partners", width: 142, height: 30 },
  ],
  roas: { value: "12.5", label: "/ Average ROAS", description: "across our 100+ Global Clients on SEO, PPC & Social" },
};

export const footerSolutions: NavLink[] = [
  { label: "Web Development", href: "/marketing-solutions/web-development" },
  { label: "Search engine optimization", href: "/marketing-solutions/search-engine-optimization" },
  { label: "Performance marketing", href: "/marketing-solutions/performance-marketing" },
  { label: "UGC Content Creation", href: "/marketing-solutions/ugc-content-creation" },
  { label: "Social Media Marketing", href: "/marketing-solutions/social-media-marketing" },
  { label: "AI Content Creation", href: "/marketing-solutions/ai-content-creation" },
  { label: "Influencer marketing", href: "/marketing-solutions/influencer-marketing" },
  { label: "Branding & Product Shoot", href: "/marketing-solutions/branding-product-shoot" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Meet the Team", href: "/meet-the-team" },
    ],
  },
  { label: "Marketing Solutions", href: "/marketing-solutions" },
  { label: "Blogs", href: "/blogs" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

// TODO: confirm X and YouTube URLs — on the WordPress site both point to an Instagram login page.
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/netpuppys/" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "https://www.facebook.com/netpuppys/" },
  { label: "YouTube", href: "#" },
];
