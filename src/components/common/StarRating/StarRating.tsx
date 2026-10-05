import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

/** Five yellow stars (16px). */
export const StarRating: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={["flex gap-1 text-star", className].join(" ")} aria-label="Rated 5 out of 5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FontAwesomeIcon key={i} icon={faStar} className="text-base" aria-hidden="true" />
    ))}
  </div>
);
