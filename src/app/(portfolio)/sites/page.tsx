import type { Metadata } from "next";
import { Hero, EngineeringVisual } from "@/components/hero";
import { ContactSection } from "@/components/contact";
import { Features, SectionHeading } from "@/components/sections";
import { Button } from "@/components/ui/button";
import type { Feature } from "@/config/site";

export const metadata: Metadata = {
  title: "Competências e desenvolvimento",
  description:
    "Conheça a base técnica de Emanuel Inácio: interfaces com React, Next.js e Tailwind, APIs com Node.js e Java, e projetos que conectam design e engenharia.",
};
const capabilities: Feature[] = [
  {
    title: "Interfaces e experiência",
    description:
      "React, Next.js, TypeScript e Tailwind para construir interfaces responsivas, acessíveis e organizadas em componentes.",
    icon: "code",
  },
  {
    title: "APIs e aplicações",
    description:
      "Node.js e Express, Java e Spring Boot para estruturar APIs, contratos de dados e regras de negócio.",
    icon: "layers",
  },
  {
    title: "Qualidade e evolução",
    description:
      "Atenção a performance, clareza de código, versionamento e integração entre as partes de uma aplicação.",
    icon: "shield",
  },
];
export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        eyebrow="BASE TÉCNICA / EMANUEL INÁCIO"
        title="Design e engenharia."
        highlight="Na mesma direção."
        description="Desenvolvo interfaces e aplicações com atenção à experiência de quem usa e à clareza de quem mantém. Uma base em evolução, construída em projetos reais."
        cta="Conversar sobre uma oportunidade"
      >
        <EngineeringVisual />
      </Hero>
      <section id="explorar" className="shell section-block">
        <SectionHeading
          eyebrow="01 / COMPETÊNCIAS"
          title="Da interface à aplicação."
          description="Tecnologias aplicadas em diferentes contextos, com espaço para aprender, colaborar e resolver novos desafios."
        />
        <Features items={capabilities} />
      </section>
      <section className="shell preview-callout">
        <div>
          <span className="eyebrow">02 / DESIGN APLICADO AO CONTEXTO</span>
          <h2>Uma identidade para cada experiência.</h2>
          <p>
            O projeto Giovanna Freire conecta uma identidade visual acolhedora a
            uma landing page de psicopedagogia, com conteúdo claro, navegação
            mobile e contato direto.
          </p>
        </div>
        <Button href="/projetos/giovanna-freire" variant="light">
          Explorar o projeto Giovanna
        </Button>
      </section>
      <section className="shell section-block">
        <SectionHeading
          eyebrow="03 / CÓDIGO E APRENDIZADO"
          title="Conheça a implementação."
          description="Os repositórios mostram as tecnologias e decisões de cada projeto. É por lá que compartilho meu desenvolvimento e minha prática."
        />
        <Button
          href="https://github.com/EmanuelIna"
          variant="secondary"
          external
        >
          Ver repositórios no GitHub
        </Button>
      </section>
      <ContactSection />
    </>
  );
}
