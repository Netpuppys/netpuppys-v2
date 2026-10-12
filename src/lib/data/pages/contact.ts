import { wp } from "@/lib/helpers/images";

/** /contact, /free-audit and /thankyou — copy mirrors netpuppys.com. */

export const contactPage = {
  eyebrow: "Contact",
  title: "We’re here to help you grow",
  lead: "Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and explore how our digital marketing team can contribute to your success.",
  phone: { label: "Phone number:", value: "+91 9266707333", href: "tel:+919266707333" },
  email: { label: "Email address:", value: "digital@netpuppys.com", href: "mailto:digital@netpuppys.com" },
  address: "UNIT 417-418, 4th Floor, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana 122018",
  mapHref: "https://maps.app.goo.gl/y1D8mbYNKK5vS8Dq6",
};

// TODO(content): the US address is the WordPress theme's demo address — confirm or remove.
export const offices = {
  title: "Office Address",
  items: [
    { label: "US OFFICE ADDRESS", address: "2050 Research Rd Frisco TX 75034", phone: "+91 9266707333" },
    { label: "DUBAI OFFICE ADDRESS", address: "Jumeirah Garden City, Dubai,UAE", phone: "+91 9266707333" },
  ],
};

// TODO(content): "Numerique" is left over from the WordPress theme demo.
export const freeAudit = {
  eyebrow: "Free Audit",
  title: "Ready to grow your revenue?",
  lead: "When you partner with Numerique, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.",
  checklist: [
    "Review your marketing goals: Begin by reviewing your marketing goals and objectives.",
    "Evaluate your target audience to see if they have changed or if you need to adjust your messaging to better reach them",
    "Analyze your website to ensure it is user-friendly, mobile-responsive, and optimized for search engines.",
    "Review your content marketing efforts, including your blog posts, social media, and email marketing.",
  ],
  formTitle: "Get your free audit",
  submit: "Send Me a Proposal",
};

export const thankYou = {
  eyebrow: "We will contact you shortly",
  title: "Thank You for Reaching Out!",
  text: "We’ve received your details and our team will connect with you shortly. At Netpuppys we’re excited to learn more about your business and explore how we can help you grow.",
  cta: { label: "Explore more", href: "/" },
};

/** Placeholder image so InnerHero's required prop is satisfied when a form replaces it. */
export const formPagesImage = wp("2023/05/GettyImages-1367732506-159x300.png");
