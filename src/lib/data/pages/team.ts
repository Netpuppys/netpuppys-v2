import { wp } from "@/lib/helpers/images";

/** /meet-the-team — copy mirrors netpuppys.com/meet-the-team. */

export const teamHero = {
  eyebrow: "Meet the team",
  title: "Meet the Netpuppys revolutionaries",
  lead: "We believe in having a talented team of self-starters that want to deliver the best results for our clients",
  image: wp("2025/10/meet-the-team-1024x947.jpg", "The Netpuppys mascot"),
};

export const beliefs = {
  eyebrow: "What We Believe In",
  title: "We believe in making the world a better place",
  html:
    "<p>We achieve this by scaling impactful businesses. Our focus is on promoting our clients’ brands and effectively disseminating their message worldwide. We refuse to settle for the status quo, constantly striving to expand our own business with the same level of honesty and integrity we employ to enhance our clients’ enterprises.</p>",
  values: ["Transparency", "Accountability", "Lifelong Learning", "Ambition"],
};

export const leadership = {
  title: "Leadership",
  people: [
    wp("2025/09/Artboard-6-1024x1024.png", "Mr. Pratik Marwah, Co-Founder & CEO"),
    wp("2025/09/Artboard-1-1-1024x1024.jpg", "Mrs. Silky Jain Marwah, Co-Founder"),
  ],
};

export const executiveTeam = { title: "Executive Team" };

export const mission = {
  title: "Our mission",
  text: "Our mission drives nearly everything we do; to positively impact 3,000,000 people around the world by working with scientists, engineers, businesses and non-profits to advance and accelerate the adoption of life-changing innovation.",
  cta: { label: "partner with experts", href: "/contact" },
  images: [
    wp("2025/10/1-4-1.jpg", "The Netpuppys team at work"),
    wp("2025/10/2-3-1.jpg", "The Netpuppys team at work"),
    wp("2025/10/3-2.jpg", "The Netpuppys team at work"),
  ],
};

// TODO(content): "Numerique" is left over from the WordPress theme demo — replace with Netpuppys copy.
export const joinCta = {
  title: "Explore opportunities with us today",
  text: "Joining Numerique means joining our extended family. As we work together to create impactful marketing campaigns, we prioritize not only the success of our team members but also their well-being and the well-being of their families.",
  cta: { label: "Join our team", href: "/contact" },
};
