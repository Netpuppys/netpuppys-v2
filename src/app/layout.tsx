import type { Metadata } from "next";
import { Layout } from "@/components/containers/common/Layout";
import { kanit, poppins } from "@/lib/helpers/fonts";
import "@/styles/globals.css";

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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${kanit.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
