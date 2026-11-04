import { ArrowUpRight, Braces, Coffee, Hexagon } from "lucide-react";
import { Hero, EngineeringVisual } from "@/components/hero";
import {
  Features,
  ProjectGallery,
  SectionHeading,
} from "@/components/sections";
import { ContactSection } from "@/components/contact";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { projects, services } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="EMANUEL INÁCIO / DESENVOLVEDOR"
        title="Software com propósito."
        highlight="Do código à conexão."
        description="Desenvolvo interfaces e aplicações que conectam pessoas, ideias e tecnologia. Conheça meus projetos, minha base técnica e como posso contribuir com o seu próximo desafio."
        cta="Conversar sobre uma oportunidade"
      >
        <EngineeringVisual />
      </Hero>
      <section
        className="shell stack-strip"
        aria-label="Tecnologias utilizadas"
      >
        <span>
          UMA BASE SÓLIDA.
          <br />
          <strong>POSSIBILIDADES REAIS.</strong>
        </span>
        <div>
          <span>
            <Braces size={22} />
            React
          </span>
          <span className="stack-word">Next.js</span>
          <span>
            <Hexagon size={22} />
            Node.js
          </span>
          <span>
            <Coffee size={22} />
            Java
          </span>
          <span className="stack-word">Spring Boot</span>
          <span className="stack-word stack-tailwind">
            ≈ <span>Tailwind CSS</span>
          </span>
        </div>
      </section>
      <section id="explorar" className="shell section-block">
        <SectionHeading
          eyebrow="01 / O QUE EU FAÇO"
          title="Boa engenharia. Melhor experiência."
          description="Da presença digital ao software, o ponto de partida é o mesmo: entender o que você precisa resolver."
        />
        <Features items={services} />
        <div className="section-footnote">
          <span>
            Front-end com React e Next.js. Back-end com Node.js e Java.
          </span>
          <a href="/sites">
            Conheça minhas competências <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
      <section id="projetos" className="shell section-block">
        <SectionHeading
          eyebrow="02 / PROJETOS SELECIONADOS"
          title="Ideias que viraram código."
          description="Projetos próprios, desafios reais e aprendizado em movimento. Explore a implementação no GitHub."
        />
        <ProjectGallery items={projects} />
        <p className="caption">
          Prévias ilustrativas dos projetos · Tecnologias verificadas nos
          repositórios.
        </p>
      </section>
      <section className="shell section-block">
        <SectionHeading
          eyebrow="03 / COMO EU TRABALHO"
          title="Clareza em cada etapa."
          description="Uma operação próxima, do primeiro alinhamento à entrega. Você sabe o que está sendo construído e por quê."
        />
        <Process />
      </section>
      <section className="shell local-promo">
        <div className="promo-graphic" aria-hidden="true">
          {[35, 52, 40, 68, 59, 85, 75, 100].map((height) => (
            <div key={height} style={{ height: `${height}%` }}>
              <span />
            </div>
          ))}
        </div>
        <div>
          <span className="eyebrow">
            <span className="tiny-square" /> COLABORAÇÃO E PRÓXIMOS DESAFIOS
          </span>
          <h2>
            Bons projetos começam
            <br />
            com uma boa conversa.
          </h2>
          <p>
            Procuro oportunidades para contribuir com desenvolvimento de
            software, trocar conhecimento e construir soluções em equipe. Também
            converso sobre projetos e parcerias.
          </p>
          <div className="promo-actions">
            <Button href="/sites" variant="light">
              Conhecer minha base técnica
            </Button>
            <a href="/projetos/giovanna-freire">
              Explorar o projeto Giovanna <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactSection />
    </>
  );
}
