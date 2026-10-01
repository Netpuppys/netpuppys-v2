import type { ReactNode } from "react";
import { Footer } from "@/components/containers/common/Footer";
import { Header } from "@/components/containers/common/Header";

interface LayoutProps {
  children: ReactNode;
}

/** Wraps every route with the shared Header and Footer. */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
