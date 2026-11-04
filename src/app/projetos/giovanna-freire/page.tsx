import type { Metadata } from "next";
import { TherapyPage } from "@/components/therapy/therapy-page";
export const metadata: Metadata = {
  title: { absolute: "Giovanna Freire — Psicopedagogia com escuta e afeto" },
  description:
    "Conheça o trabalho de Giovanna Freire, pedagoga e psicopedagoga em Campo Grande, MS. Avaliação cuidadosa e acompanhamento individualizado em parceria com a família.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Giovanna Freire — Aprendizagem com escuta e afeto",
    description:
      "Um olhar acolhedor e individualizado para o processo de aprendizagem.",
    locale: "pt_BR",
    type: "website",
  },
};
export default function GiovannaProjectPage() {
  return <TherapyPage portfolioHref="/" />;
}
