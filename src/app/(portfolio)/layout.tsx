import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer, FloatingWhatsAppButton } from "@/components/contact";
interface PortfolioLayoutProps {
  children: ReactNode;
}
export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
