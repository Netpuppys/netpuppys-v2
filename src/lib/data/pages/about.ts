import { wp } from "@/lib/helpers/images";
import type { FeatureCard } from "@/types/site";

/** /about-us — copy mirrors netpuppys.com/about-us. */

export const aboutHero = {
  eyebrow: "About Us",
  title: "Your Brand’s Ultimate Growth Partner!",
  html:
    "<p>We’re not a factory of templates and quick fixes. We’re a team of thinkers, makers, and problem-solvers who believe brands deserve more than recycled ideas. At our core, we help brands grow—not just in numbers, but in meaning, relevance, and recall. Whether you’re building from scratch or pivoting into something new, we ask the uncomfortable questions, challenge the obvious answers, and work with you to find what truly fits.</p>" +
    "<p>Our team is built on range. Designers who understand business. Strategists who care about aesthetics. Writers who ask “why” more than “how.” It’s this mix that lets us sit across the table from startups, legacy businesses, and restless founders alike—and actually get what they’re trying to say, even when they’re still figuring it out. We don’t talk about brands. We build with them.</p>" +
    "<p>We’re also not in the business of chasing trends for the sake of being “cool.” We believe in ideas that outlast algorithm changes. In systems that scale. In craft that doesn’t cut corners. That means we take our time to listen, map out what matters, and then obsess over the execution—because that’s where real brand value is built: in the details.</p>",
  image: wp("2025/10/1-3-1-1024x948.jpg", "The Netpuppys mascot in front of client logos"),
};

export const impact = {
  title: "The Impact",
  html:
    "<p>When we say we’re growth partners, we don’t just mean dashboards and KPIs. We mean being the team that sees what you’re trying to build—and helps you get there faster, sharper, and with fewer detours. From launches that actually launch to rebrands that feel like a rebirth, we’ve been in rooms where clarity clicked and momentum finally took off. That’s our favorite kind of success story.</p>" +
    "<p>But more than numbers, we create shifts. In how people perceive you. In how your team sees the brand. In the confidence you feel when telling your story. That’s the kind of impact that doesn’t just show up in a quarterly report—it shows up in how your brand lives, breathes, and grows in the real world.</p>",
};

export const process = {
  image: wp("2025/09/Team-banner-1024x585.jpg", "The Netpuppys pack brainstorming"),
  title: "How Our Process Works",
  cards: [
    { icon: "lightbulb", title: "Understanding Your Needs", description: "We start by getting to know your project inside out. Tell us what you need, and we’ll align our approach to match your vision perfectly" },
    { icon: "map", title: "Mapping Out the Plan", description: "With the details in place, we strategize the best way forward—curating ideas, refining concepts, and setting the stage for smooth execution." },
    { icon: "starOutline", title: "Bringing It to Life", description: "Now, it’s time to put the plan into action. We execute with precision, creativity, and efficiency to ensure everything runs seamlessly." },
    { icon: "rocket", title: "Final Checks & Sign-Off", description: "Before wrapping up, we go through every detail with you to make sure it’s just right. Once you’re happy, we mark it as complete" },
  ] satisfies FeatureCard[],
};

export const leader = {
  eyebrow: "marketing solutions provider",
  title: "We’re a leader in digital marketing solutions",
  html:
    "<p>After years of experience, we have learned that each marketing channel has its own unique advantages, but they work best when strategically combined with other channels. Therefore, we provide our clients with full-service strategies that utilize a comprehensive mix of digital channels to enhance visibility, boost conversions, and drive revenue.</p>",
  link: { label: "Marketing Solutions", href: "/marketing-solutions" },
};

export const aboutTeam = {
  eyebrow: "team",
  title: "Meet the Netpuppys revolutionaries",
  members: [
    {
      image: wp("2025/09/Artboard-6-1024x1024.png", "Mr. Pratik Marwah, Co-Founder & CEO"),
      socials: [
        { label: "Facebook", href: "https://www.facebook.com/pratikmarwah" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/pratikmarwah/" },
        { label: "Instagram", href: "https://www.instagram.com/pratikmarwah/" },
      ],
    },
    {
      image: wp("2025/09/Artboard-1-1-1024x1024.jpg", "Mrs. Silky Jain Marwah, Co-Founder"),
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/silky-jain-marwah-32939710/" },
        { label: "Instagram", href: "https://www.instagram.com/silky_netpuppys/" },
      ],
    },
  ],
} as const;

export const aboutTestimonialsHeading = "What our happy customers are saying";
