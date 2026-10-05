import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** 1280px content width with a 20px gutter — matches the WordPress theme's boxed width. */
export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1320px] px-5 ${className}`}>{children}</div>
);
