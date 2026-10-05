import Image from "next/image";
import type { ImageAsset } from "@/types/site";

/** Three overlapping 44px round avatars (24px step), as in the hero stats and reviews rows. */
export const AvatarStack: React.FC<{ avatars: ImageAsset[]; className?: string }> = ({ avatars, className = "" }) => (
  <div className={["flex", className].join(" ")}>
    {avatars.map((a, i) => (
      <Image
        key={a.src}
        src={a.src}
        alt={a.alt}
        width={88}
        height={88}
        className="h-11 w-11 rounded-full border-2 border-white object-cover"
        style={{ marginLeft: i === 0 ? 0 : -20 }}
      />
    ))}
  </div>
);
