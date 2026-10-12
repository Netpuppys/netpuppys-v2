import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUser, faChartBar, faFaceGrinWink, faCircleCheck as faCircleCheckRegular, faFileVideo as faFileVideoRegular, faMap, faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faLaptopCode,
  faChartLine,
  faCameraRetro,
  faLightbulb,
  faRocket,
  faCircleCheck,
  faMagnifyingGlass,
  faCamera,
  faCodeBranch,
  faChartPie,
  faChild,
  faSquareCheck,
  faFileVideo,
  faPodcast,
  faPhotoFilm,
  faChartColumn,
  faCode,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
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
  lightbulb: faLightbulb,
  map: faMap,
  starOutline: faStarRegular,
  rocket: faRocket,
  checkCircle: faCircleCheck,
  checkCircleOutline: faCircleCheckRegular,
  search: faMagnifyingGlass,
  camera: faCamera,
  codeBranch: faCodeBranch,
  chartPie: faChartPie,
  child: faChild,
  checkSquare: faSquareCheck,
  fileVideo: faFileVideo,
  podcast: faPodcast,
  photoVideo: faPhotoFilm,
  chartBarSolid: faChartColumn,
  code: faCode,
  male: faPerson,
  fileVideoOutline: faFileVideoRegular,
};

interface FaIconProps {
  name: IconKey;
  className?: string;
}

/** Content icons referenced by key from lib/data (same Font Awesome glyphs as the WordPress site). */
export const FaIcon: React.FC<FaIconProps> = ({ name, className = "" }) => (
  <FontAwesomeIcon icon={icons[name]} className={className} aria-hidden="true" />
);
