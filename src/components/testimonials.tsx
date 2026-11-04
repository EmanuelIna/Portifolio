import { Quote, Star } from "lucide-react";
interface Review {
  name: string;
  role: string;
  text: string;
  rating?: number;
}
interface TestimonialsProps {
  reviews?: Review[];
  demo?: boolean;
}
const examples: Review[] = [
  {
    name: "Cliente demonstrativo",
    role: "Projeto residencial",
    text: "O projeto trouxe uma solução prática para o espaço e deixou o ambiente do jeito que imaginávamos.",
  },
  {
    name: "Cliente demonstrativo",
    role: "Ambiente comercial",
    text: "Gostamos da atenção aos detalhes e da clareza em cada etapa, do primeiro contato ao resultado.",
  },
];
export function Testimonials({
  reviews = [],
  demo = false,
}: TestimonialsProps) {
  const items = demo ? examples : reviews;
  return (
    <section className="shell section-block reviews-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <span className="tiny-square" /> CONFIANÇA SE CONSTRÓI
          </span>
          <h2>A experiência de quem chega.</h2>
        </div>
        <p>
          {demo
            ? "Exemplo de como as avaliações do seu negócio aparecem nesta página."
            : "Transparência também faz parte da entrega."}
        </p>
      </div>
      {items.length ? (
        <>
          {demo && (
            <p className="demo-note">
              Conteúdo demonstrativo · Avaliações fictícias, sem vínculo com
              clientes ou Google.
            </p>
          )}
          <div className="review-grid">
            {items.map((review, index) => (
              <figure key={`${review.name}-${index}`} className="review-card">
                {review.rating !== undefined || demo ? (
                  <div
                    className="review-stars"
                    aria-label={`${demo ? "Exemplo ilustrativo: " : ""}${review.rating ?? 5} de 5 estrelas`}
                  >
                    {Array.from(
                      { length: Math.max(0, Math.min(5, review.rating ?? 5)) },
                      (_, i) => (
                        <Star size={14} fill="currentColor" key={i} />
                      ),
                    )}
                    <Quote size={20} />
                  </div>
                ) : (
                  <Quote size={20} className="text-muted" />
                )}
                <blockquote>{review.text}</blockquote>
                <figcaption>
                  <span className="review-avatar">{review.name[0]}</span>
                  <span>
                    {review.name}
                    <small>{review.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      ) : (
        <div className="review-empty">
          <Quote size={28} strokeWidth={1} />
          <div>
            <h3>Seu projeto pode abrir este capítulo.</h3>
            <p>
              Este espaço receberá avaliações reais, publicadas com autorização.
              Enquanto isso, conheça meus repositórios no GitHub.
            </p>
          </div>
          <a
            href="https://github.com/EmanuelIna"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conhecer o GitHub ↗
          </a>
        </div>
      )}
    </section>
  );
}
