export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type IconName =
  | "audience"
  | "analytics"
  | "outcome"
  | "code"
  | "social"
  | "performance"
  | "ugc"
  | "arrow"
  | "phone"
  | "star"
  | "trophy";

export interface FeatureCard {
  title: string;
  description: string;
  icon: IconName;
  href?: string;
}

export interface WhyTab {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  client: string;
  metric: string;
  label: string;
  href: string;
  tone: "orange" | "ink" | "yellow" | "peach";
}

export interface ProofStat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: ImageAsset;
}

export interface BlogPost {
  title: string;
  date: string;
  href: string;
  image: ImageAsset;
}

export interface FooterLinkColumn {
  heading: string;
  links: NavLink[];
}

export interface SocialLink {
  label: "Instagram" | "Facebook" | "X" | "YouTube" | "LinkedIn";
  href: string;
}
