import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics, GtmNoScript } from "@/components/common/Analytics";
import { kanit, poppins, syne } from "@/lib/helpers/fonts";
import { WORDPRESS_URL } from "@/lib/wordpress/config";
import "@/styles/globals.css";

// Font Awesome CSS is imported above; stop it injecting a duplicate at runtime.
config.autoAddCss = false;

const WP_ICON = `${WORDPRESS_URL}/wp-content/uploads/2025/09/cropped-netpuppy-icon-1-scaled-1`;

export const metadata: Metadata = {
  metadataBase: new URL("https://netpuppys.com"),
  title: "Best Digital Marketing Agency in Gurgaon, India | Netpuppys",
  description:
    "Netpuppys is an award-winning digital marketing agency in Gurugram — web development, SEO, performance marketing, social media and UGC content that fetch measurable growth.",
  openGraph: {
    title: "Netpuppys — Fetching Success For Your Brand",
    description: "Marketing Agency of the Year 2024. SEO, performance marketing, social media, web and UGC.",
    images: ["/images/hero/dog-award.png"],
  },
  // Netpuppys site icon — the same files WordPress serves (Settings → Site Identity).
  icons: {
    icon: [
      { url: `${WP_ICON}-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${WP_ICON}-192x192.png`, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: `${WP_ICON}-180x180.png`, sizes: "180x180", type: "image/png" }],
  },
  // Google Search Console ownership (same token as the WordPress site).
  verification: { google: "xdMz5rqY-puNSnZgKUZvSsNPGDmesKXgyGIEhlAFz94" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${kanit.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <GtmNoScript />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
