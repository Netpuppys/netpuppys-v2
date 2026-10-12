import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { LandingFooter, LandingHeader } from "@/containers/pages-component/landing";
import { contact } from "@/lib/data/site-content";

/** Stand-alone layout for paid-traffic landing pages: no main nav, only in-page anchors. */
export default function LandingLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <LandingFooter />
      <a
        href={contact.phoneHref}
        aria-label="Call Netpuppys"
        className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-call text-white shadow-lg"
      >
        <FontAwesomeIcon icon={faPhone} className="text-2xl" />
      </a>
    </div>
  );
}
