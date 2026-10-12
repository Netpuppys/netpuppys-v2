export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  /** Opens the Marketing Solutions mega-menu on desktop. */
  mega?: boolean;
}

export interface MegaMenuLink {
  label: string;
  href: string;
  icon: IconKey;
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
  | "cameraRetro"
  | "lightbulb"
  | "map"
  | "starOutline"
  | "rocket"
  | "checkCircle"
  | "checkCircleOutline"
  | "search"
  | "camera"
  | "codeBranch"
  | "chartPie"
  | "child"
  | "checkSquare"
  | "fileVideo"
  | "podcast"
  | "photoVideo"
  | "chartBarSolid"
  | "code"
  | "male"
  | "fileVideoOutline";

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

export interface ServicePage {
  slug: string;
  title: string;
  hero: { text: string; image: ImageAsset };
  intro: { title: string; html: string; checklist: string[] };
  secret: { eyebrow: string; title: string };
  showcase: { title: string; html: string; image: ImageAsset };
  experts: { title: string; html: string };
  included: { eyebrow: string; title: string; text: string };
  tabs: { title: string; text: string }[];
  formula: { eyebrow: string; title: string; cards: { title: string; description: string }[] };
  numbers: { eyebrow: string; title: string; stats: { value: string; text: string }[] };
  faq?: { eyebrow: string; title: string; text: string; items: { q: string; a: string }[] };
}
