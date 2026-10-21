import Script from "next/script";

/**
 * Tracking tags, same IDs as the WordPress site. Each can be overridden or
 * switched off (set to "") with an env var, e.g. to keep preview deployments
 * out of the reports.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-WFL568B5";
// GA4 (G-P3H8EZV6NS) is fired by the GTM container's Google Tag — loading it here too would double-count.
// Only set NEXT_PUBLIC_GA4_ID if GA4 is ever removed from GTM.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "ocsuc6rozm";

export const Analytics: React.FC = () => (
  <>
    {GTM_ID && (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    )}
    {GA4_ID && (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
        </Script>
      </>
    )}
    {CLARITY_ID && (
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
      </Script>
    )}
  </>
);

/** GTM's <noscript> fallback — first thing inside <body>. */
export const GtmNoScript: React.FC = () =>
  GTM_ID ? (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
    </noscript>
  ) : null;
