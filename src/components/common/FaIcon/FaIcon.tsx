import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUser, faChartBar, faFaceGrinWink } from "@fortawesome/free-regular-svg-icons";
import { faLaptopCode, faChartLine, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import type { IconKey } from "@/types/site";

const icons: Record<IconKey, IconDefinition> = {
  user: faUser,
  chartBar: faChartBar,
  grinWink: faFaceGrinWink,
  laptopCode: faLaptopCode,
  sistrix: faSistrix,
  chartLine: faChartLine,
  cameraRetro: faCameraRetro,
};

interface FaIconProps {
  name: IconKey;
  className?: string;
}

/** Content icons referenced by key from lib/data (same Font Awesome glyphs as the WordPress site). */
export const FaIcon: React.FC<FaIconProps> = ({ name, className = "" }) => (
  <FontAwesomeIcon icon={icons[name]} className={className} aria-hidden="true" />
);
