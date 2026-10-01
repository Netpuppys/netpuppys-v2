import type { FooterLinkColumn, NavLink, SocialLink } from "@/types/site";

/** Site-wide content shared by Header / Footer on every route. */

export const contact = {
  phone: "+91 92667 07333",
  phoneHref: "tel:+919266707333",
  whatsappHref: "https://wa.me/919266707333",
  location: "Gurugram, India",
};

export const primaryCta = { label: "Free audit", href: "/contact" };

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

export const footerBlurb =
  "A different breed of marketers. We sniff out digital challenges and fetch measurable growth for brands across India and beyond.";

export const footerColumns: FooterLinkColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Web Development", href: "/marketing-solutions/web-development" },
      { label: "Search Engine Optimization", href: "/marketing-solutions/search-engine-optimization" },
      { label: "Performance Marketing", href: "/marketing-solutions/performance-marketing" },
      { label: "UGC Content Creation", href: "/marketing-solutions/ugc-content-creation" },
      { label: "Social Media Marketing", href: "/marketing-solutions/social-media-marketing" },
      { label: "AI Content Creation", href: "/marketing-solutions/ai-content-creation" },
      { label: "Influencer Marketing", href: "/marketing-solutions/influencer-marketing" },
      { label: "Branding & Product Shoot", href: "/marketing-solutions/branding-product-shoot" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Meet the Team", href: "/meet-the-team" },
      { label: "Our Work", href: "/our-work" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

// TODO: add X and YouTube URLs — the current WordPress footer links both to an Instagram login page.
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/netpuppys/" },
  { label: "Facebook", href: "https://www.facebook.com/netpuppys/" },
];
