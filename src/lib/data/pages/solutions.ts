import { wp } from "@/lib/helpers/images";
import type { FeatureCard } from "@/types/site";

/** /marketing-solutions hub — copy mirrors netpuppys.com/marketing-solutions. */

export const solutionsHero = {
  eyebrow: "Marketing Solutions",
  title: "Solutions for business growth",
  lead: "Netpuppys Marketing is the intersection between creative and performance. Our team delivers the perfect combination of creative and paid media expertise to maximize results.",
  cta: { label: "Get a free audit", href: "/contact" },
  image: wp("2025/10/1-2.jpg", "The Netpuppys mascot with marketing icons"),
};

export const solutionsIntro = {
  title: "We lead with customer-first strategies",
  text: "Driving growth through personalized experiences for truly end-to-end business building.",
};

const ms = (slug: string) => `/marketing-solutions/${slug}`;

export const solutionCards: FeatureCard[] = [
  { icon: "laptopCode", title: "Web Development", href: ms("web-development"), description: "We build high-performance websites that are not only visually stunning but also engineered for user experience and conversion. Our focus is on creating a robust digital foundation that helps your business grow." },
  { icon: "search", title: "Social Media Marketing", href: ms("social-media-marketing"), description: "We craft compelling social media strategies that build brand awareness, foster community engagement, and drive tangible business results. Our approach turns your social presence into a powerful growth engine." },
  { icon: "chartBar", title: "Performance Marketing", href: ms("performance-marketing"), description: "Our data-driven campaigns are designed to deliver measurable results and a high return on investment. We optimize every dollar spent to ensure your marketing budget works as hard as you do." },
  { icon: "camera", title: "UGC Content Creation", href: ms("ugc-content-creation"), description: "We harness the power of user-generated content to build authentic brand trust and credibility. Our strategies amplify your most loyal customers’ voices to create a powerful connection with new audiences." },
  { icon: "codeBranch", title: "AI Content Creation", href: ms("ai-content-creation"), description: "We leverage cutting-edge artificial intelligence to generate high-quality, scalable content that is both creative and data-optimized. Our AI-powered solutions help you stay ahead of the curve." },
  { icon: "chartPie", title: "Search Engine Optimization", href: ms("search-engine-optimization"), description: "We improve your online visibility and drive organic traffic with strategic SEO that moves you to the top of search results. Our goal is to ensure your business is easily found by the customers who are already looking for you." },
  { icon: "child", title: "Influencer marketing", href: ms("influencer-marketing"), description: "We connect you with authentic and relevant voices who can genuinely promote your brand to their audiences. Our campaigns are designed to build trust and generate buzz that drives real conversions." },
  { icon: "checkSquare", title: "Branding & Product Shoot", href: ms("branding-product-shoot"), description: "Our photography and styling services are designed to create a strong visual identity that resonates with your target audience.solutions help you stay ahead of the curve." },
  // TODO(content): no Video Productions page exists yet — "Learn more" goes to Contact.
  { icon: "fileVideo", title: "Video Productions (TVC & OTT Ads)", href: "/contact", description: "We produce captivating video content for TV and streaming platforms that tells your brand's story in a compelling way. Our productions are crafted to engage audiences and drive significant brand recall." },
];

export const commitment = {
  image: wp("2025/10/2-2.jpg", "Netpuppys strategists planning a campaign"),
  title: "We are committed to your strategy",
  // TODO(content): "Renaissance" is left over from the WordPress theme demo.
  html: "<p>We are committed to your strategy and intuitively understand how to deliver value in the digital economy. Through the most effective digital marketing options, Renaissance makes it happen seamlessly. Every day, we help brands think big, execute smart and deliver growth. We employ an intelligent digital marketing strategy to consistently unlock value from digital investments in a rapidly advancing world. From simple to the infinitely complex.</p>",
  link: { label: "more about our company", href: "/about-us" },
};

export const solutionsCta = { title: "Get started with a Free consultation", cta: { label: "Get a proposal", href: "/contact" } };
