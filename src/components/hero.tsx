import {
  ArrowDown,
  Check,
  Code2,
  Command,
  Globe2,
  Layers3,
  MousePointer2,
} from "lucide-react";
import type { ReactNode } from "react";
import { whatsappUrl } from "@/config/site";
import { Button } from "./ui/button";
import { ContactLinks } from "./contact";

interface HeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  cta?: string;
  message?: string;
  children?: ReactNode;
  compact?: boolean;
}
export function Hero({
  eyebrow,
  title,
  highlight,
  description,
  cta = "Vamos construir seu projeto",
  message,
  children,
  compact = false,
}: HeroProps) {
  return (
    <section className={`hero shell ${compact ? "hero-compact" : ""}`}>
      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot" />
          {eyebrow}
        </div>
        <h1>
          {title}
          <br />
          <span>{highlight}</span>
        </h1>
        <p className="hero-description">{description}</p>
        <div className="hero-actions">
          <Button href={whatsappUrl(message)} external>
            {cta}
          </Button>
          <ContactLinks />
        </div>
        <a className="hero-scroll" href="#explorar">
          <ArrowDown size={14} /> EXPLORE O QUE POSSO CONSTRUIR
        </a>
      </div>
      {children}
    </section>
  );
}
export function EngineeringVisual() {
  return (
    <div
      className="engineering-visual"
      aria-label="Ilustração de um fluxo de desenvolvimento: ideia, código e experiência"
    >
      <div className="visual-top">
        <span>
          <span className="status-dot" /> DA IDEIA À EXPERIÊNCIA
        </span>
        <span>SYS.001</span>
      </div>
      <div className="dot-field" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="visual-node node-idea">
        <Globe2 size={17} />
        <span>Sua ideia</span>
        <span className="node-status">01</span>
      </div>
      <div className="visual-connector connector-one" />
      <div className="code-window">
        <div className="code-window-header">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>build-with-purpose.tsx</span>
          <Code2 size={14} />
        </div>
        <div className="code-content">
          <div>
            <span className="line-number">01</span>
            <span className="code-purple">const</span> projeto = {"{"}
          </div>
          <div>
            <span className="line-number">02</span> ideia:{" "}
            <span className="code-green">&quot;o seu negócio&quot;</span>,
          </div>
          <div>
            <span className="line-number">03</span> interface:{" "}
            <span className="code-green">&quot;simples e rápida&quot;</span>,
          </div>
          <div>
            <span className="line-number">04</span> objetivo:{" "}
            <span className="code-green">&quot;conectar pessoas&quot;</span>
          </div>
          <div>
            <span className="line-number">05</span>
            {"}"};
          </div>
          <div className="code-gap">
            <span className="line-number">06</span>
          </div>
          <div>
            <span className="line-number">07</span>
            <span className="code-purple">export default</span>{" "}
            <span className="code-white">construir</span>(projeto);
          </div>
        </div>
        <div className="code-window-footer">
          <span>
            <Check size={12} /> Pronto para ir além
          </span>
          <span>TypeScript</span>
        </div>
      </div>
      <div className="visual-connector connector-two" />
      <div className="visual-node node-result">
        <Layers3 size={17} />
        <span>Uma boa experiência</span>
        <Check size={15} />
      </div>
      <div className="visual-cursor">
        <MousePointer2 size={22} fill="currentColor" />
        <span>Seu próximo projeto</span>
      </div>
      <span className="visual-corner corner-one" />
      <span className="visual-corner corner-two" />
      <div className="visual-bottom">
        <span>
          <Command size={13} /> DESIGN + ENGENHARIA
        </span>
        <span>FEITO PARA PESSOAS ↗</span>
      </div>
    </div>
  );
}
