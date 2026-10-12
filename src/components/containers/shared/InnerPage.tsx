import type { ReactNode } from "react";

/**
 * Wrapper for every inner page: the blush-to-white gradient that starts at
 * the very top of the page (behind the transparent desktop header), as on
 * the WordPress "single page" template.
 */
export const InnerPage: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-[linear-gradient(180deg,#ffefe5_0,#ffffff_720px)] pb-[60px] lg:-mt-[81px] lg:pt-[81px] lg:pb-[70px]">{children}</div>
);
