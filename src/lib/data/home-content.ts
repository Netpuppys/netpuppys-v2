import type {
  BlogPost,
  CaseStudy,
  CtaLink,
  FeatureCard,
  ImageAsset,
  ProofStat,
  Testimonial,
  WhyTab,
} from "@/types/site";

/**
 * All homepage copy and imagery, mirroring netpuppys.com (WordPress) section
 * by section. Edit content here — the section components only lay it out.
 */

const img = (src: string, alt: string, width: number, height: number): ImageAsset => ({ src, alt, width, height });

export const hero = {
  title: "Fetching Success For Your Brand",
  subtitle: "Marketing Agency of the year 2024",
  audit: { text: "Get Your Free Audit Today", cta: { label: "Let’s Talk", href: "/contact" } as CtaLink },
  images: {
    leftBase: img("/images/hero/left-base.png", "", 2560, 2361),
    speaker: img("/images/hero/marketer.png", "Marketer shouting through a megaphone", 2560, 2356),
    right: img("/images/hero/right-image.png", "Creators saying Hey! Listen and Million Views", 2048, 1364),
    dog: img("/images/hero/dog-award.png", "Netpuppys mascot holding the Marketing Agency of the Year award", 565, 865),
  },
};

export const heroStats = {
  experts: {
    label: "Connect our experts",
    href: "/meet-the-team",
    avatars: [
      img("/images/avatars/expert-1.jpg", "", 300, 300),
      img("/images/avatars/expert-2.jpg", "", 300, 300),
      img("/images/avatars/expert-3.jpg", "", 300, 300),
    ],
  },
  revenue: { value: "$ 26.53 Million", label: "Revenue driven for our clients" },
  reviews: { label: "50+ Client reviews" },
};

export const whatWeDo = {
  eyebrow: "What we do",
  title: "We sniff out digital challenges",
  description:
    "Focused on business outcomes, we help our clients achieve tangible, measurable results. We’re a different breed of marketers, and we bring a unique set of expertise to the table to help your business grow.",
  cta: { label: "More about us", href: "/about-us" } as CtaLink,
  pillars: [
    {
      title: "Better audiences",
      icon: "user",
      description:
        "We take the time to truly understand your brand and analyze the entire market, including your competition. Our expertise lies in identifying your actual audience: the customers who don’t just browse, but engage and convert into sales.",
    },
    {
      title: "Better analytics",
      icon: "chartBar",
      description:
        "We go beyond surface-level metrics. Our expertise lies in interpreting complex market data to build custom predictive models that reveal hidden trends and audience behaviors, giving you a powerful competitive advantage",
    },
    {
      title: "Better outcomes",
      icon: "grinWink",
      description:
        "Every strategy we build is focused on a single goal: your success. By combining a deep understanding of your market with precise execution, we deliver tangible, measurable results that drive sustainable business growth.",
    },
  ] satisfies FeatureCard[],
};

export const services = {
  banner: img("/images/home/team-banner.jpg", "The Netpuppys pack brainstorming campaign ideas", 1344, 768),
  title: "Our Paw-some Services",
  cta: { label: "View all solutions", href: "/marketing-solutions" } as CtaLink,
  items: [
    {
      title: "Web Development",
      icon: "laptopCode",
      href: "/marketing-solutions/web-development",
      description:
        "We build high-performance websites that are not only visually stunning but also engineered for user experience and conversion. Our focus is on creating a robust digital foundation",
    },
    {
      title: "Social Media Marketing",
      icon: "sistrix",
      href: "/marketing-solutions/social-media-marketing",
      description:
        "We craft compelling social media strategies that build brand awareness, foster community engagement, and drive tangible business results.",
    },
    {
      title: "Performance Marketing",
      icon: "chartLine",
      href: "/marketing-solutions/performance-marketing",
      description:
        "Our data-driven campaigns are designed to deliver measurable results and a high return on investment. We optimize every dollar spent to ensure your marketing budget works",
    },
    {
      title: "UGC Content Creation",
      icon: "cameraRetro",
      href: "/marketing-solutions/ugc-content-creation",
      description:
        "We harness the power of user-generated content to build authentic brand trust and credibility. Our strategies amplify your most loyal customers’ voices to create a powerful connection",
    },
  ] satisfies FeatureCard[],
  viral: {
    title: "Think you can go viral without us?",
    dog: img("/images/home/lay-down-dog.png", "Netpuppys mascot asking: Woof! Need help?", 906, 587),
  },
};

export const whyChoose = {
  title: "Why Choose Netpuppys ?",
  paragraphs: [
    "We’re not just another agency; we’re a different breed entirely. Forget the old-school marketing agencies stuck in yesterday’s tactics. As the top-rated marketing agency of 2024, we don’t just follow trends we set them.",
    "We believe in being a loyal extension of your team, treating your brand as if it were our own. Our relentless pursuit is to achieve the tangible, measurable results you expect and deserve. With us, you don’t just get a service; you get a partner who is as invested in your success as you are.",
  ],
  cta: { label: "Get proposal", href: "/contact" } as CtaLink,
  tabs: [
    {
      id: "transparency",
      label: "Transparency",
      title: "100% Campaign transparency",
      description:
        "We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.",
    },
    {
      id: "team",
      label: "Team of experts",
      title: "Friendly team of experts",
      description:
        "Our experts and professionals are never more than an email or a phone call away. Or, if you prefer to talk face to face, drop by our office to discuss your plans and goals over a cup of coffee. We are here for you.",
    },
    {
      id: "results",
      label: "Results",
      title: "Choose a partner that understands you",
      description:
        "All our decisions are based on your goals and concerns. Whether it’s website design, SEO, PPC, or anything else, we want to understand what keep you up at night so we can deliver the business results you seek.",
    },
  ] satisfies WhyTab[],
  transparencyImage: img("/images/home/stats-growth.png", "Campaign growth chart", 482, 221),
  resultsImage: img("/images/home/stats-results.png", "Campaign results chart", 482, 224),
  team: Array.from({ length: 6 }, (_, i) => img(`/images/team/team-${i + 1}.jpg`, `Netpuppys team members ${i + 1}`, 964, 442)),
};

export const successStories = {
  eyebrow: "Success Stories",
  title: "Our work drives businesses forward",
  cta: { label: "View all", href: "/our-work" } as CtaLink,
  items: [
    { client: "Tula’s Institute", metric: "+40%", label: "Admission growth", href: "/blog/tulas-institute", image: img("/images/work/tulas-institute.jpg", "Tula’s Institute ranked 86th by Times School of India", 1080, 1080) },
    { client: "Tula’s International School", metric: "+50%", label: "Engagement rates", href: "/blog/tis", image: img("/images/work/tis.jpg", "Tula’s International School ranked 4th best co-ed boarding school in India", 1080, 1080) },
    { client: "Cradlewell", metric: "+40%", label: "Sales growth", href: "/blog/cradlewell", image: img("/images/work/cradlewell.jpg", "Cradlewell campaign", 1080, 1080) },
    { client: "Fyst World", metric: "+40%", label: "Overall growth", href: "/blog/fyst-world", image: img("/images/work/fyst-world.jpg", "Fyst World campaign", 1080, 1080) },
  ] satisfies CaseStudy[],
};

const clientFiles = [
  ["logo-golden.png", "Logo Golden", 768, 428],
  ["kosha-yoga.png", "Kosha Yoga Co", 392, 164],
  ["outdoorgoats.png", "Outdoor Goats", 420, 63],
  ["photoroom-2.png", "Client logo", 768, 220],
  ["origami.png", "Origami", 768, 264],
  ["logo-3.png", "Client logo", 768, 284],
  ["client-14.png", "Client logo", 768, 333],
  ["nm-pickles.png", "NM Pickles", 768, 417],
  ...["01", "02", "03", "04", "05", "06", "08", "07", "09", "10", "11", "12", "13", "15", "16", "17", "18", "19", "21", "20", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"].map(
    (n) => [`client-${n}.png`, "Client logo", 768, 333] as const,
  ),
  ["babasim.webp", "Babasim", 768, 272],
] as const;

export const clients = {
  title: "The best brands choose Loyalty over Fake Promises",
  logos: clientFiles.map(([file, alt, w, h]) => img(`/images/clients/${file}`, alt, w, h)),
};

export const blog = {
  eyebrow: "Blog",
  title: "Think further with our expert insights",
  posts: [
    { title: "Best SEO Company in Gurgaon | SEO Agency: Netpuppys", date: "June 2026", href: "/blog/seo-company-in-gurgaon", image: img("/images/blog/seo-company-in-gurgaon.jpg", "", 1024, 698) },
    { title: "Best Social Media Company in India | Top Social Media Agency: Netpuppys", date: "May 2026", href: "/blog/social-media-company-in-india", image: img("/images/blog/social-media-company-in-india.jpg", "", 1024, 698) },
    { title: "NetPuppys: Most Efficient Creative Content Writing and Marketing Agency in India", date: "May 2026", href: "/blog/creative-content-writing-and-marketing-agency-in-india", image: img("/images/blog/content-writing-agency-india.jpg", "", 1024, 698) },
  ] satisfies BlogPost[],
};

export const proof = {
  title: "The proof is in the numbers",
  stats: [
    { value: 37, suffix: "%", label: "Average increase in sales for our clients" },
    { value: 100, suffix: "%", label: "Google and Facebook-certified team" },
    { value: 81, suffix: "%", label: "Results improved compared to previous agencies" },
  ] satisfies ProofStat[],
  leads: { value: "282,000+", label: "Leads generated so far…", cta: { label: "Contact us", href: "/contact" } as CtaLink },
};

export const testimonials = {
  items: [
    {
      quote:
        "We wanted our content to match the intelligence of our product, and Netpuppys got that instantly. Their team didn’t throw buzzwords at us; they got down to what would actually connect with our users. The visuals, the copy, the campaigns, everything just clicked. For a startup in the AI space, that kind of clarity and speed is gold.",
      name: "Mr. Atharv",
      role: "COO/Co-Founder of Chanakya AI",
      photo: img("/images/testimonials/atharv.jpg", "Atharv", 104, 104),
    },
    {
      quote:
        "Netpuppys has played a crucial role in developing our digital marketing strategies, ensuring that we effectively reach our target audience. Their expertise in content creation, social media management, and SEO optimization has led to increased visibility and engagement across various platforms. We have seen a remarkable growth in our online interactions, thanks to their tailored approach and innovative ideas",
      name: "Mr. Raunak Jain",
      role: "Vice Chairman of Tula's Group.",
      photo: img("/images/testimonials/raunak-jain.png", "Raunak Jain", 104, 104),
    },
    {
      quote:
        "What truly sets Netpuppys apart is their commitment to collaboration. They took the time to understand our vision, values, and goals, which allowed them to craft campaigns that resonate with our audience. The responsiveness and adaptability of their team have made our partnership not just productive, but enjoyable as well.",
      name: "Mr. Teja Gudluru",
      role: "Co-Founder of Virtual Guru.",
      photo: img("/images/testimonials/teja-gudluru.png", "Teja Gudluru", 104, 104),
    },
  ] satisfies Testimonial[],
  reviews: {
    label: "50+ Client reviews",
    cta: { label: "View all reviews", href: "/our-work" } as CtaLink,
    avatars: [
      img("/images/avatars/review-1.jpg", "", 300, 300),
      img("/images/avatars/review-2.jpg", "", 300, 300),
      img("/images/avatars/review-3.jpg", "", 300, 300),
    ],
  },
};
