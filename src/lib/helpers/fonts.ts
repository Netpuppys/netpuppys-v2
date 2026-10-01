import localFont from "next/font/local";

// Self-hosted from @fontsource (no runtime call to Google Fonts).
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
    { path: "../../../node_modules/@fontsource/kanit/files/kanit-latin-400-normal.woff2", weight: "400" },
    { path: "../../../node_modules/@fontsource/kanit/files/kanit-latin-500-normal.woff2", weight: "500" },
  ],
});
