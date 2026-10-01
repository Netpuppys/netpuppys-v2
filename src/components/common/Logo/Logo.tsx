import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

/** Netpuppys wordmark, linked home. `inverted` renders it on a white chip for dark backgrounds. */
export const Logo: React.FC<LogoProps> = ({ className = "", inverted = false }) => (
  <Link
    href="/"
    aria-label="Netpuppys home"
    className={["inline-flex shrink-0", inverted ? "rounded-xl bg-white px-3 py-2" : "", className].join(" ")}
  >
    <Image src="/images/brand/logo.png" alt="Netpuppys" width={480} height={194} priority className="h-10 w-auto sm:h-11" />
  </Link>
);
