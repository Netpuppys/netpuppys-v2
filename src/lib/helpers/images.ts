import { wpImageSizes } from "@/lib/data/wp-image-sizes";
import type { ImageAsset } from "@/types/site";

/**
 * Image migrated from the WordPress media library (kept under
 * public/images/wp/<year>/<month>/<file>, same path as on WordPress).
 * Width/height come from the generated size table so next/image can
 * reserve space without layout shift.
 */
export const wp = (path: string, alt = ""): ImageAsset => {
  const size = wpImageSizes[path];
  if (!size) throw new Error(`Unknown WordPress image: ${path} — run scripts/gen-image-sizes.py`);
  return { src: `/images/wp/${path}`, alt, width: size[0], height: size[1] };
};
