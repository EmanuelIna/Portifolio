"use client";
import { useState } from "react";
import { ArrowRight, Check, GitBranch } from "lucide-react";
const steps = [
  {
    label: "Entender",
    title: "A melhor solução começa com uma boa conversa.",
    description:
      "Entendo seu negócio, seu público e o que a página precisa fazer. Definimos juntos o escopo antes de escrever a primeira linha.",
    file: "briefing.md",
    rows: ["Objetivo do projeto", "Público e mensagem", "Escopo combinado"],
  },
  {
    label: "Projetar",
    title: "Cada elemento com um motivo para estar ali.",
    description:
      "Organizo a informação e desenho uma experiência que funciona primeiro no celular. O visitante entende sua oferta e encontra o próximo passo.",
    file: "interface.tsx",
    rows: [
      "Estrutura mobile-first",
      "Identidade e conteúdo",
      "Contato sem atrito",
    ],
  },
  {
    label: "Construir",
    title: "Código enxuto. Uma base para crescer.",
    description:
      "Transformo o projeto em componentes reutilizáveis, com atenção à acessibilidade, performance e manutenção.",
    file: "desenvolvimento.ts",
    rows: [
      "Componentes modulares",
      "Performance e acessibilidade",
      "Revisão responsiva",
    ],
  },
  {
    label: "Entregar",
    title: "Tudo pronto para o seu próximo capítulo.",
    description:
      "Revisamos os detalhes, conferimos os contatos e preparamos a publicação. Você recebe uma página pronta para apresentar seu negócio.",
    file: "entrega.md",
    rows: ["Revisão com você", "Contatos conferidos", "Publicação orientada"],
  },
];
export function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <div className="process">
      <div
        className="process-tabs"
        role="tablist"
        aria-label="Etapas do projeto"
      >
        {steps.map((item, index) => (
          <button
            key={item.label}
            type="button"
            id={`step-tab-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls={`step-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (index + 1) % steps.length
                  : event.key === "ArrowLeft"
                    ? (index + steps.length - 1) % steps.length
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? steps.length - 1
                        : null;
              if (next !== null) {
                event.preventDefault();
                setActive(next);
                document.getElementById(`step-tab-${next}`)?.focus();
              }
            }}
          >
            <span>0{index + 1}</span>
            {item.label}
            <ArrowRight size={14} />
          </button>
        ))}
      </div>
      <div
        className="process-panel"
        id={`step-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`step-tab-${active}`}
        tabIndex={0}
      >
        <div>
          <span className="eyebrow">ETAPA 0{active + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
        <div className="process-preview">
          <div className="process-file">
            <GitBranch size={15} />
            <span>{step.file}</span>
            <span className="file-badge">alinhado</span>
          </div>
          {step.rows.map((row, index) => (
            <div className="process-row" key={row}>
              <span>0{index + 1}</span>
              {row}
              <Check size={15} />
            </div>
          ))}
          <div className="process-preview-footer">
            <span className="status-dot" /> Menos ruído. Mais clareza.
          </div>
        </div>
      </div>
    </div>
  );
}
