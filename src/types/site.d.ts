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

export interface CtaLink {
  label: string;
  href: string;
}

/** Font Awesome icon keys used on the site (mapped in components/common/FaIcon). */
export type IconKey =
  | "user"
  | "chartBar"
  | "grinWink"
  | "laptopCode"
  | "sistrix"
  | "chartLine"
  | "cameraRetro";

export interface FeatureCard {
  title: string;
  description: string;
  icon: IconKey;
  href?: string;
}

export interface WhyTab {
  id: "transparency" | "team" | "results";
  label: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  client: string;
  metric: string;
  label: string;
  href: string;
  image: ImageAsset;
}

export interface ProofStat {
  value: number;
  suffix: string;
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

export interface SocialLink {
  label: "Instagram" | "X" | "Facebook" | "YouTube";
  href: string;
}
