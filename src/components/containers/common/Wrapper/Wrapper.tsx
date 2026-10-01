import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}

/** Standard vertical section padding/spacing wrapper. */
export const Wrapper: React.FC<WrapperProps> = ({
  children,
  className = "",
  as = "section",
  id,
}) => {
  const Tag = as;
  return (
    <Tag id={id} className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </Tag>
  );
};
