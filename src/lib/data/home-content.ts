import type {
  BlogPost,
  CaseStudy,
  FeatureCard,
  ImageAsset,
  ProofStat,
  Testimonial,
  WhyTab,
} from "@/types/site";

/** All homepage copy. Edit here, not in the section components. */

export const hero = {
  eyebrow: "Marketing Agency of the Year 2024",
  titleStart: "Fetching",
  titleHighlight: "Success",
  titleEnd: "For Your Brand",
  description:
    "A different breed of marketers. We focus on business outcomes and fetch tangible, measurable growth for your brand.",
  primaryCta: { label: "Let’s talk", href: "/contact" },
  secondaryCta: { label: "Get your free audit", href: "/contact" },
  revenue: { value: "$26.53M", label: "Revenue driven for our clients" },
  reviews: { value: "50+", label: "Client reviews" },
  images: {
    team: {
      src: "/images/home/team-banner.jpg",
      alt: "The Netpuppys pack brainstorming campaign ideas in the studio",
      width: 1344,
      height: 768,
    },
    dog: {
      src: "/images/hero/dog-award.png",
      alt: "The Netpuppys mascot holding the Marketing Agency of the Year award",
      width: 565,
      height: 865,
    },
  } satisfies Record<string, ImageAsset>,
};

export const clientsSection = {
  title: "The best brands choose loyalty over fake promises",
  logos: Array.from({ length: 36 }, (_, i): ImageAsset => ({
    src: `/images/clients/client-${String(i + 1).padStart(2, "0")}.png`,
    alt: `Client logo ${i + 1}`,
    width: 300,
    height: 130,
  })),
};

export const whatWeDo = {
  eyebrow: "What we do",
  title: "We sniff out digital challenges",
  description:
    "Focused on business outcomes, we help our clients achieve tangible, measurable results. We’re a different breed of marketers, and we bring a unique set of expertise to the table to help your business grow.",
  cta: { label: "More about us", href: "/about-us" },
  pillars: [
    {
      title: "Better audiences",
      icon: "audience",
      description:
        "We take the time to truly understand your brand and analyse the entire market, including your competition — to find the customers who don’t just browse, but engage and convert.",
    },
    {
      title: "Better analytics",
      icon: "analytics",
      description:
        "We go beyond surface-level metrics, interpreting complex market data to build custom predictive models that reveal hidden trends and audience behaviour.",
    },
    {
      title: "Better outcomes",
      icon: "outcome",
      description:
        "Every strategy has a single goal: your success. Deep market understanding plus precise execution delivers measurable, sustainable business growth.",
    },
  ] satisfies FeatureCard[],
};

export const viralBanner = {
  title: "Think you can go viral without us?",
  subtitle: "Scroll-stopping ideas, UGC and AI video — sniffed out by a team that lives on the feed.",
  cta: { label: "Meet the team", href: "/meet-the-team" },
  team: Array.from({ length: 6 }, (_, i): ImageAsset => ({
    src: `/images/team/team-${i + 1}.jpg`,
    alt: `Netpuppys team members, card ${i + 1}`,
    width: 964,
    height: 442,
  })),
};

export const services = {
  eyebrow: "Services",
  title: "Our paw-some services",
  cta: { label: "View all solutions", href: "/marketing-solutions" },
  items: [
    {
      title: "Web Development",
      icon: "code",
      href: "/marketing-solutions/web-development",
      description:
        "High-performance websites that look stunning and are engineered for user experience and conversion — a robust digital foundation.",
    },
    {
      title: "Social Media Marketing",
      icon: "social",
      href: "/marketing-solutions/social-media-marketing",
      description:
        "Compelling social strategies that build brand awareness, foster community engagement and drive tangible business results.",
    },
    {
      title: "Performance Marketing",
      icon: "performance",
      href: "/marketing-solutions/performance-marketing",
      description:
        "Data-driven campaigns built for measurable results and high ROI. We optimise every rupee so your budget works harder.",
    },
    {
      title: "UGC Content Creation",
      icon: "ugc",
      href: "/marketing-solutions/ugc-content-creation",
      description:
        "User-generated content that builds authentic trust — amplifying your most loyal customers’ voices into a powerful connection.",
    },
  ] satisfies FeatureCard[],
};

export const whyChoose = {
  eyebrow: "Why Netpuppys",
  title: "Why choose Netpuppys?",
  paragraphs: [
    "We’re not just another agency; we’re a different breed entirely. Forget the old-school agencies stuck in yesterday’s tactics. As the top-rated marketing agency of 2024, we don’t just follow trends — we set them.",
    "We believe in being a loyal extension of your team, treating your brand as if it were our own. With us you don’t just get a service; you get a partner who is as invested in your success as you are.",
  ],
  cta: { label: "Get proposal", href: "/contact" },
  tabs: [
    {
      id: "transparency",
      label: "Transparency",
      title: "100% campaign transparency",
      description:
        "We cultivate transparency and communication in all we do. You never have to wonder what’s happening with your campaign — we keep you in the loop and in control.",
    },
    {
      id: "team",
      label: "Team of experts",
      title: "A friendly team of experts",
      description:
        "Our experts are never more than an email or a call away. Prefer face to face? Drop by our office and talk plans and goals over a cup of coffee.",
    },
    {
      id: "results",
      label: "Results",
      title: "A partner that understands you",
      description:
        "Every decision is based on your goals. Website, SEO, PPC or anything else — we want to know what keeps you up at night so we can deliver the results you seek.",
    },
  ] satisfies WhyTab[],
  tabImages: {
    transparency: { src: "/images/home/stats-growth.png", alt: "Campaign growth chart", width: 482, height: 221 },
    results: { src: "/images/home/stats-results.png", alt: "Campaign results chart", width: 482, height: 224 },
  } satisfies Record<string, ImageAsset>,
  team: Array.from({ length: 6 }, (_, i): ImageAsset => ({
    src: `/images/team/team-${i + 1}.jpg`,
    alt: `Netpuppys team photo ${i + 1}`,
    width: 964,
    height: 442,
  })),
};

export const successStories = {
  eyebrow: "Success stories",
  title: "Our work drives businesses forward",
  cta: { label: "View all work", href: "/our-work" },
  items: [
    { client: "Tula’s Institute", metric: "+40%", label: "Admission growth", href: "/blog/tulas-institute", tone: "orange" },
    { client: "Tula’s International School", metric: "+50%", label: "Engagement rates", href: "/blog/tis", tone: "ink" },
    { client: "Cradlewell", metric: "+40%", label: "Sales growth", href: "/blog/cradlewell", tone: "yellow" },
    { client: "Fyst World", metric: "+40%", label: "Overall growth", href: "/blog/fyst-world", tone: "peach" },
  ] satisfies CaseStudy[],
};

export const proof = {
  eyebrow: "The proof is in the numbers",
  headline: { value: 282000, suffix: "+", label: "Leads generated so far…" } satisfies ProofStat,
  stats: [
    { value: 37, suffix: "%", label: "Average increase in sales for our clients" },
    { value: 100, suffix: "%", label: "Google and Facebook-certified team" },
    { value: 81, suffix: "%", label: "Results improved compared to previous agencies" },
    { value: 12.5, decimals: 1, suffix: "x", label: "Average ROAS across 100+ global clients on SEO, PPC & social" },
  ] satisfies ProofStat[],
};

export const testimonials = {
  eyebrow: "50+ client reviews",
  title: "Loyal clients, wagging tails",
  cta: { label: "View all reviews", href: "/our-work" },
  items: [
    {
      quote:
        "Netpuppys has played a crucial role in developing our digital marketing strategies. Their expertise in content creation, social media management and SEO has led to increased visibility and engagement across platforms.",
      name: "Mr. Raunak Jain",
      role: "Vice Chairman, Tula’s Group",
      photo: { src: "/images/testimonials/raunak-jain.png", alt: "Raunak Jain", width: 104, height: 104 },
    },
    {
      quote:
        "What truly sets Netpuppys apart is their commitment to collaboration. They took the time to understand our vision, values and goals, and crafted campaigns that resonate with our audience.",
      name: "Mr. Teja Gudluru",
      role: "Co-Founder, Virtual Guru",
      photo: { src: "/images/testimonials/teja-gudluru.png", alt: "Teja Gudluru", width: 104, height: 104 },
    },
    {
      quote:
        "We wanted our content to match the intelligence of our product, and Netpuppys got that instantly. The visuals, the copy, the campaigns — everything just clicked. For an AI startup, that clarity and speed is gold.",
      name: "Mr. Atharv",
      role: "COO & Co-Founder, Chanakya AI",
      photo: { src: "/images/testimonials/atharv.jpg", alt: "Atharv", width: 104, height: 104 },
    },
  ] satisfies Testimonial[],
};

export const blog = {
  eyebrow: "Blog",
  title: "Think further with our expert insights",
  cta: { label: "All articles", href: "/blogs" },
  posts: [
    {
      title: "Best SEO Company in Gurgaon | SEO Agency: Netpuppys",
      date: "June 2026",
      href: "/blog/seo-company-in-gurgaon",
      image: { src: "/images/blog/seo-company-in-gurgaon.jpg", alt: "", width: 700, height: 477 },
    },
    {
      title: "Best Social Media Company in India | Top Social Media Agency",
      date: "May 2026",
      href: "/blog/social-media-company-in-india",
      image: { src: "/images/blog/social-media-company-in-india.jpg", alt: "", width: 700, height: 477 },
    },
    {
      title: "Netpuppys: Most Efficient Creative Content Writing and Marketing Agency in India",
      date: "May 2026",
      href: "/blog/creative-content-writing-and-marketing-agency-in-india",
      image: { src: "/images/blog/content-writing-agency-india.jpg", alt: "", width: 700, height: 477 },
    },
  ] satisfies BlogPost[],
};

export const finalCta = {
  eyebrow: "A partner, not a vendor",
  title: "Your brand’s been a good boy.",
  titleAccent: "It’s time to launch your biggest campaign.",
  description: "Ready to speak with a marketing expert? Give us a ring.",
  cta: { label: "Contact us now", href: "/contact" },
  dog: {
    src: "/images/hero/dog-certificate.png",
    alt: "The Netpuppys mascot holding a certificate",
    width: 285,
    height: 706,
  } satisfies ImageAsset,
};
