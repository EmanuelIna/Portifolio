import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Emanuel Inácio — Software com propósito",
    template: "%s | Emanuel Inácio",
  },
  description:
    "Portfólio de Emanuel Inácio. Desenvolvimento front-end e back-end com React, Next.js, Node.js e Java. Projetos, competências e oportunidades profissionais.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Emanuel Inácio — Software com propósito",
    description:
      "Projetos, competências e experiências digitais construídas com propósito. Conheça o trabalho de Emanuel Inácio.",
    locale: "pt_BR",
    type: "website",
  },
};
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
