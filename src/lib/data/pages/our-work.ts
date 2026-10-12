import { wp } from "@/lib/helpers/images";
import type { ImageAsset } from "@/types/site";

/** /our-work — case studies, copy mirrors netpuppys.com/our-work. */

export const ourWorkHero = {
  title: "Revenue-Driven Digital Marketing That Pays for Itself.",
  lead: "It’s your turn to shine when we put the spotlight on your brand. Dive into the work that got our clients the attention, conversions, and measurable ROI their business deserves in the digital world.",
  image: wp("2023/06/gettyimages-1404633864-2048x2048-1-1024x948.jpg", "Marketing team reviewing campaign results"),
};

export interface CaseStudyDetail {
  category?: string;
  logo: ImageAsset;
  /** Logo box height on desktop, as sized on WordPress. */
  logoHeight: number;
  html: string;
  /** Video thumbnails; clicking one plays the YouTube video in a lightbox. */
  shots: (ImageAsset & { youtubeId: string })[];
}

const shot = (file: string, alt: string, youtubeId: string) => ({ ...wp(`2025/11/${file}`, alt), youtubeId });

export const caseStudies: CaseStudyDetail[] = [
  {
    category: "FINTECH",
    logo: wp("2025/11/guardeer.png", "Guardeer Funding"),
    logoHeight: 81,
    html: "<h5>Guardeer Funding: Zero to 125K Followers in 4 Months</h5><p><strong>The Challenge:</strong> Rapidly establish an authority presence for a new financial brand.</p><p><strong>The Netpuppy Solution:</strong> A high-volume, high-impact social and content strategy. We launched the page from <strong>scratch (0 followers)</strong> to <strong>125,000+</strong> followers in just <strong>four months.</strong></p><p><strong>Key Results:</strong> Delivered consistently viral content, generating <strong>500K – 1M average views</strong> per post, and produced a successful <strong>YouTube Podcast with 1M average views</strong>.</p>",
    shots: [shot("Screenshot-2025-11-10-at-11.31.05-AM.png", "Guardeer Instagram profile", "kJvpCXs-qXc"), shot("Screenshot-2025-11-10-at-11.33.20-AM.png", "Guardeer content results", "Eu3egUN3FP4")],
  },
  {
    category: "D2C",
    logo: wp("2025/11/emori.avif", "Emori"),
    logoHeight: 53,
    html: "<h5>Emori: Polishing Performance for Premium Jewellery Sales</h5><p><strong>The Challenge:</strong> Drive high-value sales for a lab-grown diamond brand in a competitive e-commerce space.</p><p><strong>The Netpuppy Solution:</strong> Focused heavily on compelling, high-conversion <strong>Video Ad Campaigns</strong> across Meta &amp; Google</p><p><strong>Key Results:</strong> Delivered <strong>huge success in sales</strong> and a significant ROI boost by leveraging visual storytelling to captivate the luxury consumer.</p>",
    shots: [shot("Screenshot-2025-11-10-at-11.54.16-AM.png", "Emori ad creative", "8s73gcg_-xA"), shot("Screenshot-2025-11-10-at-11.55.11-AM.png", "Emori ad creative", "ZyqvrWMyF-Y")],
  },
  {
    logo: wp("2025/11/hgworld-logo.png", "HG World"),
    logoHeight: 48,
    html: "<h5>HG World: Visuals That Convert &amp; Packaging That Persuades</h5><p><strong>The Challenge:</strong> Increase sales and elevate brand perception for an e-commerce brand.</p><p><strong>The Netpuppy Solution:</strong> A full-funnel approach combining design and performance. We created <strong>high-performing video ads</strong> that boosted sales and refined their <strong>packaging design and social media content.</strong></p><p><strong>Key Results: Significantly boosted</strong> sales through engaging video advertising and streamlined brand presentation across all touchpoints.</p>",
    shots: [shot("Screenshot-2025-11-10-at-4.32.34-PM.png", "HG World creative", "Rbutr3qh9t4"), shot("Screenshot-2025-11-10-at-4.33.14-PM.png", "HG World creative", "Eo0er8TNv2M")],
  },
  {
    category: "Real Estate",
    logo: wp("2025/11/gglp.png", "GGLP"),
    logoHeight: 81,
    html: "<h5>GGLP: Converting Luxury Real Estate Leads into Deals</h5><p><strong>The Challenge:</strong> Sell high-end, lavish properties in the competitive Gurugram real estate market.</p><p><strong>The Netpuppy Solution:</strong> Designed highly targeted, <strong>ROI-driven video ad campaigns</strong> that showcased the luxury and exclusivity of the listings.</p><p><strong>Key Results:</strong> Achieved <strong>successful sales conversions</strong> and a strong return on ad spend (ROAS) by reaching the precise clientele for high-ticket properties.</p>",
    shots: [shot("Screenshot-2025-11-10-at-12.25.19-PM.png", "GGLP ad creative", "oN224U06ReM"), shot("Screenshot-2025-11-10-at-12.26.45-PM.png", "GGLP ad creative", "nGCJRuFY4Kw")],
  },
  {
    category: "Education",
    logo: wp("2025/11/LOGO-TULAS-ALL-02-scaled.png", "Tula’s Institute"),
    logoHeight: 56,
    html: "<h5>Tula’s Institute: Four Years of PAN India Educational Dominance</h5><p><strong>The Challenge:</strong> Maintain and grow student admissions for a leading institute year after year.</p><p><strong>The Netpuppy Solution:</strong> A four-year comprehensive strategy covering <strong>yearly social media plans (YouTube, LinkedIn)</strong> and continuous <strong>Performance Marketing</strong> for admissions and seat-filling ads.</p><p><strong>Key Results:</strong> Successfully managed the brand for <strong>4 years,</strong> making it known <strong>PAN India</strong> and consistently meeting annual admission targets.</p>",
    shots: [shot("Screenshot-2025-11-10-at-4.56.10-PM.png", "Tula’s Institute creative", "aSwDsjlbE6k"), shot("Screenshot-2025-11-10-at-4.57.19-PM.png", "Tula’s Institute creative", "-mq3X89hnpk")],
  },
  {
    logo: wp("2025/11/idcQc8thhW_1762773526650.png", "Tula’s International School"),
    logoHeight: 102,
    html: "<h5>Tula’s International School: Defining North India’s Best Boarding School</h5><p><strong>The Challenge:</strong> Position the school as the premier Co-ed Boarding option in North India with a sophisticated image.</p><p><strong>The Netpuppy Solution:</strong> Executed a <strong>classy and International-Level Marketing</strong> strategy across Instagram, Facebook, YouTube, and LinkedIn, supported by yearly admissions ads.</p><p><strong>Key Results:</strong> Firmly established the brand as a leader in the region through premium content and effective student enrollment campaigns.</p>",
    shots: [shot("Screenshot-2025-11-10-at-4.58.10-PM.png", "Tula’s International School creative", "25QcbYj7cv8"), shot("Screenshot-2025-11-10-at-4.58.46-PM.png", "Tula’s International School creative", "y6CdgSN72p8")],
  },
  {
    category: "FMCG",
    logo: wp("2025/11/EGA_AYURVEDA_Logo_final-01.avif", "EGA Wellness"),
    logoHeight: 71,
    html: "<h5>EGA Wellness: Awareness-to-Sales for Ayurvedic Products</h5><p><strong>The Challenge:</strong> Educate the market on Ayurvedic wellness benefits while driving product sales.</p><p><strong>The Netpuppy Solution:</strong> Launched <strong>high-impact awareness video ad campaigns</strong> focused on product effectiveness and brand trust.</p><p><strong>Key Results:</strong> Achieved both significant <strong>brand awareness</strong> and effective ROI by turning educational content into direct sales.</p>",
    shots: [shot("Screenshot-2025-11-11-at-11.21.57-AM.png", "EGA Wellness creative", "yLmg69G7jv0"), shot("Screenshot-2025-11-11-at-11.22.23-AM.png", "EGA Wellness creative", "PzCqVtPZ_Oo")],
  },
  {
    category: "transportation",
    logo: wp("2025/11/wheelo.png", "Gowheelo"),
    logoHeight: 43,
    html: "<h5>Gowheelo: Viral Videos &amp; Unique Market Positioning</h5><p><strong>The Challenge:</strong> Enter the competitive rental market and achieve a unique identity.</p><p><strong>The Netpuppy Solution:</strong> Managed social media with a focus on creating <strong>viral videos and reels</strong>, backed by effective Performance Marketing campaigns to boost rentals.</p><p><strong>Key Results:</strong> Established a <strong>unique brand image</strong> in the Indian market, driving high engagement and successful conversions through creative and viral content.</p>",
    shots: [shot("Screenshot-2025-11-11-at-11.30.07-AM.png", "Gowheelo creative", "BiThhUYn_gQ"), shot("Screenshot-2025-11-11-at-11.30.46-AM.png", "Gowheelo creative", "7Lh_vxUHLLA")],
  },
  {
    category: "Food",
    logo: wp("2025/09/Client-14.png", "Desi Reet"),
    logoHeight: 75,
    html: "<h5>Desi Reet: Cloud Kitchen Branding &amp; Market Differentiation</h5><p><strong>The Challenge:</strong> Establish a distinct presence for a cloud kitchen/catering brand in the hyper-competitive NCR food market.</p><p><strong>The Netpuppy Solution:</strong> Comprehensive branding and social media management with <strong>classy content,</strong> sales-driven ad campaigns, and a unique market positioning strategy.</p><p><strong>Key Results:</strong> Created a <strong>unique brand positioning</strong>, driving consistent sales and high-value catering orders through refined marketing efforts.</p>",
    shots: [shot("Screenshot-2025-11-11-at-11.39.06-AM.png", "Desi Reet creative", "K6spI1DVdUA"), shot("Screenshot-2025-11-11-at-11.39.31-AM.png", "Desi Reet creative", "qVYg-LfQAB0")],
  },
  {
    category: "Medical",
    logo: wp("2025/11/logo-1.png", "Cradlewell"),
    logoHeight: 34,
    html: "<h5>Cradlewell: Full-Service Brand Launch &amp; Digital Success</h5><p><strong>The Challenge:</strong> Launch a new, sensitive post-natal care brand from the ground up.</p><p><strong>The Netpuppy Solution:</strong> A complete 360-degree launch: <strong>Logo design, website creation, social media, flyers, Performance Marketing Ads</strong>, and innovative AI-Generated Video Content.</p><p><strong>Key Results:</strong> Achieved huge brand success in all aspects of the launch, quickly establishing trust and market presence for the specialized healthcare service.</p>",
    shots: [shot("Screenshot-2025-11-11-at-11.44.41-AM.png", "Cradlewell creative", "DtxMX3ZcVx0"), shot("Screenshot-2025-11-11-at-11.45.12-AM.png", "Cradlewell creative", "ABak3DIM_yA")],
  },
];
