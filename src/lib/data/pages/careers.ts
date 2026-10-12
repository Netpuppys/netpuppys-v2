import { wp } from "@/lib/helpers/images";
import type { FeatureCard } from "@/types/site";

/**
 * /careers — copy mirrors netpuppys.com/careers.
 * TODO(content): most of this page is still the WordPress theme's demo copy
 * ("Numerique", Boston, 401(k), jobs.lever.co/webfx links). Replace before launch.
 */

export const careersHero = {
  eyebrow: "Careers",
  title: "Join our team of revolutionaries",
  lead: "Join us and become the trusted expert relied upon by the world’s biggest brands, venues, and entertainers to solve their most complex challenges.",
  cta: { label: "view open positions", href: "#open-positions" },
  image: wp("2023/05/pexels-mikael-blomkvist-6476185-2-1024x948.jpg", "Team collaborating at a laptop"),
};

export const lifeAt = {
  image: wp("2023/05/pexels-ivan-samkov-8117462.jpg", "Colleagues working together"),
  title: "Life at Numerique",
  html:
    "<p>We are more than just an agency. We embody intensity, thrive on fast-paced challenges, and foster a team-driven environment. We are committed to your growth, learning, and expertise-building because we believe that your success directly contributes to our own.</p>" +
    "<p>At Numerique, you’ll discover a vibrant culture of opportunity, where strong collaboration and mentorship create a path for advancement, all while keeping a touch of fun in the mix.</p>",
  link: { label: "meet our team", href: "/meet-the-team" },
};

export const companyValues = {
  eyebrow: "company values",
  title: "We firmly believe in the power of collaboration to achieve greatness",
  html:
    "<p>At Numerique, continuous improvement is ingrained in our DNA. Each day, we dedicate ourselves to honing our skills and excelling in every aspect of our work. We not only strive for excellence but also prioritize cultivating a diverse and inclusive community that values and respects a wide array of backgrounds, experiences, and ideas. Through our Employee Resource Groups, our team actively celebrates and embraces the unique qualities that define each of us.</p>",
  values: ["Celebrate creativity", "Honest & integrity", "Teamwork & collaboration", "Social responsibility"],
};

export const benefits = {
  image: wp("2023/05/pexels-fauxels-3228745-1024x417.jpg", "Smiling team members holding coffee"),
  title: "Benefits",
  cards: [
    { icon: "checkCircle", title: "Insurance and wellness benefits", description: "Our comprehensive benefits package includes health, dental, and vision coverage, designed to prioritize your well-being. With employer-supported deductibles, low copays, and low deductibles, we ensure that your healthcare needs are met affordably and conveniently." },
    { icon: "checkCircle", title: "Retirement & student loan assistance", description: "Starting from day one, we make an automatic 3% contribution to your 401(k) retirement plan, which is fully vested immediately. Additionally, we set aside a portion of our pre-tax profits to contribute to your 401(k), which gradually vests over three years, further enhancing your retirement savings." },
    { icon: "checkCircle", title: "Unlocking work-life balance", description: "At Numerique, we recognize the value of face-to-face interactions and the power of mentorship that comes from working side-by-side with colleagues. Our office-first approach ensures that you have ample opportunities to engage in meaningful collaboration, foster connections, and receive personalized mentorship." },
    { icon: "checkCircle", title: "Balanced living starts here", description: "Experience a competitive PTO package that goes beyond the basics at Numerique. We understand the importance of work-life balance and community engagement. That's why we offer a comprehensive PTO package that includes not only vacation and sick time but also dedicated volunteer days." },
    { icon: "checkCircle", title: "Enhancing your commuting experience", description: "Experience the convenience of public transportation at Numerique, with our prime location near Back Bay Station and the Arlington T stop. We understand the value of hassle-free commuting, which is why we provide a commuter stipend to help alleviate the costs associated with public transportation." },
    { icon: "checkCircle", title: "Making work enjoyable", description: "Embrace your competitive spirit by joining our summer softball league or engaging in our thrilling fantasy football league. These activities foster team spirit, friendly competition, and lasting memories." },
  ] satisfies FeatureCard[],
};

const lever = "https://jobs.lever.co/webfx/c1e52c14-f500-4a71-8453-a0c6c23642b4";

export const openPositions = {
  title: "Open positions",
  email: "careers@numerique.com",
  jobs: [
    { title: "Conversion rate optimization specialist (CRO)", meta: "Boston, MA, full time", href: lever },
    { title: "Conversion rate optimization specialist (CRO)", meta: "Boston, MA, full time", href: lever },
    { title: "Digital marketing lead (SEO)", meta: "Boston, MA, full time", href: lever },
    { title: "DDigital marketing lead (Search)", meta: "Boston, MA, full time", href: lever },
    { title: "DDigital marketing lead (Search)", meta: "Boston, MA, full time", href: lever },
    { title: "Internet marketing account strategist", meta: "Boston, MA, full time", href: lever },
  ],
};
