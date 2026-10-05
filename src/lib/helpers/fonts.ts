import localFont from "next/font/local";

// Self-hosted from @fontsource — same families as the WordPress theme:
// Poppins (headings), Kanit (body), Syne (nav + buttons).

export const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../../../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "../../../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2", weight: "600" },
    { path: "../../../node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2", weight: "700" },
  ],
});

export const kanit = localFont({
  variable: "--font-kanit",
  display: "swap",
  src: [
    { path: "../../../node_modules/@fontsource/kanit/files/kanit-latin-300-normal.woff2", weight: "300" },
    { path: "../../../node_modules/@fontsource/kanit/files/kanit-latin-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../../../node_modules/@fontsource/kanit/files/kanit-latin-400-normal.woff2", weight: "400" },
  ],
});

export const syne = localFont({
  variable: "--font-syne",
  display: "swap",
  src: [
    { path: "../../../node_modules/@fontsource/syne/files/syne-latin-600-normal.woff2", weight: "600" },
    { path: "../../../node_modules/@fontsource/syne/files/syne-latin-700-normal.woff2", weight: "700" },
  ],
});
