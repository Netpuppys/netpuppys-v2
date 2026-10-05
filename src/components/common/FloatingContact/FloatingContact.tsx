import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { contact } from "@/lib/data/site-content";

/** Fixed call + WhatsApp buttons, bottom-right on every page (as on the WordPress site). */
export const FloatingContact: React.FC = () => (
  <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-4">
    <a
      href={contact.phoneHref}
      aria-label="Call Netpuppys"
      className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-call text-white shadow-lg transition-transform hover:scale-105"
    >
      <FontAwesomeIcon icon={faPhone} className="text-2xl" />
    </a>
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Netpuppys"
      className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-[34px]" />
    </a>
  </div>
);
