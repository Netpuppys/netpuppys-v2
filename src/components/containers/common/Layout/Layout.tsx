import type { ReactNode } from "react";
import { FloatingContact } from "@/components/common/FloatingContact";
import { Footer } from "@/components/containers/common/Footer";
import { Header } from "@/components/containers/common/Header";

interface LayoutProps {
  children: ReactNode;
}

/** Wraps every route with the shared Header, Footer and floating call/WhatsApp buttons. */
export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingContact />
  </div>
);
