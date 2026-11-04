import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Brain,
  Check,
  Flower2,
  Heart,
  Home,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  Puzzle,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { therapy, therapySteps, therapyWhatsApp } from "./config";
import { TherapyBrand, TherapyHeader } from "./therapy-header";
import { TherapyFaq } from "./therapy-faq";
import styles from "./therapy.module.css";

interface TherapyButtonProps {
  children: ReactNode;
  message?: string;
}
export function TherapyButton({ children, message }: TherapyButtonProps) {
  return (
    <a
      className={styles.button}
      href={therapyWhatsApp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={19} strokeWidth={1.6} />
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
interface SectionIntroProps {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}
function SectionIntro({ label, title, children }: SectionIntroProps) {
  return (
    <div className={styles.sectionIntro}>
      <span className={styles.eyebrow}>{label}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
function TherapyHero() {
  return (
    <section id="inicio" className={`${styles.container} ${styles.hero}`}>
      <div className={styles.heroCopy}>
        <span className={styles.heroTag}>
          <span /> PSICOPEDAGOGIA COM ESCUTA E AFETO
        </span>
        <h1>
          Cada criança aprende de um jeito.
          <br />
          <em>Vamos descobrir o dela.</em>
        </h1>
        <p>
          Avaliação cuidadosa, acompanhamento personalizado e uma parceria de
          verdade com a família. Um caminho para aprender com mais confiança e
          acolhimento.
        </p>
        <TherapyButton>Agendar uma conversa</TherapyButton>
        <div className={styles.heroLocation}>
          <MapPin size={15} />
          {therapy.city}
          <span>·</span>Clínica e domiciliar
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.portraitArch}>
          <div className={styles.archCircle} />
          <Image
            src={therapy.portrait}
            width={500}
            height={500}
            alt="Giovanna Freire, pedagoga e psicopedagoga"
            sizes="(max-width: 767px) 86vw, 480px"
            loading="eager"
            className={styles.portrait}
          />
        </div>
        <div className={styles.flowerDecoration} aria-hidden="true">
          <Flower2 strokeWidth={1.1} />
        </div>
        <div className={styles.heartDecoration} aria-hidden="true">
          <Heart strokeWidth={1.2} />
        </div>
        <div className={styles.portraitNote}>
          <Heart size={18} />
          <span>
            Ciência para compreender.
            <br />
            <strong>Afeto para caminhar junto.</strong>
          </span>
        </div>
        <span className={styles.smallSparkle} aria-hidden="true">
          ✳
        </span>
      </div>
      <a href="#acolhimento" className={styles.discover}>
        <ArrowDown size={14} /> Um olhar para cada possibilidade
      </a>
    </section>
  );
}
function TherapyServices() {
  const icons = { book: BookOpen, puzzle: Puzzle, heart: Heart, family: Users };
  return (
    <section
      id="acolhimento"
      className={`${styles.section} ${styles.container}`}
    >
      <SectionIntro
        label="UM OLHAR ALÉM DA DIFICULDADE"
        title={
          <>
            Aprender pode ser
            <br />
            <em>um caminho mais leve.</em>
          </>
        }
      >
        A tarefa demora, a concentração se perde, a frustração aparece? Antes de
        cobrar mais, podemos escutar o que está por trás desses desafios.
      </SectionIntro>
      <div className={styles.servicesGrid}>
        {therapy.services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <article className={styles.serviceCard} key={service.title}>
              <span className={styles.serviceIcon}>
                <Icon size={25} strokeWidth={1.4} />
              </span>
              <span className={styles.serviceNumber}>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
      <p className={styles.reassurance}>
        <Leaf size={16} /> Cada processo é único. O primeiro passo é
        compreender, sem comparações.
      </p>
    </section>
  );
}
function TherapyProcess() {
  return (
    <section id="como-funciona" className={styles.processSection}>
      <div className={styles.container}>
        <SectionIntro
          label="COMO FUNCIONA O ACOMPANHAMENTO"
          title={
            <>
              Pequenos passos.
              <br />
              <em>Um caminho construído juntos.</em>
            </>
          }
        >
          Da primeira conversa à devolutiva, você participa de um processo
          claro, cuidadoso e pensado para a sua família.
        </SectionIntro>
        <div className={styles.stepsGrid}>
          {therapySteps.map((step) => (
            <article className={styles.step} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.processClosing}>
          <Home size={22} strokeWidth={1.3} />
          <p>
            O cuidado também olha para o que acontece
            <br />
            <strong>
              em casa, na escola e nas pequenas conquistas do dia a dia.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
function TherapyAbout() {
  return (
    <section id="sobre" className={`${styles.container} ${styles.about}`}>
      <div className={styles.aboutVisual}>
        <div className={styles.aboutPhoto}>
          <Image
            src={therapy.portrait}
            width={500}
            height={500}
            alt="Giovanna Freire em seu retrato profissional"
            sizes="(max-width: 767px) 85vw, 400px"
          />
        </div>
        <div className={styles.aboutQuote}>
          <Quote size={24} strokeWidth={1.4} />
          <span>
            Aprender começa
            <br />
            com se sentir acolhido.
          </span>
        </div>
        <span className={styles.aboutFlower} aria-hidden="true">
          <Flower2 size={65} strokeWidth={1} />
        </span>
      </div>
      <div className={styles.aboutCopy}>
        <span className={styles.eyebrow}>PRAZER, SOU A GIOVANNA</span>
        <h2>
          Escuta que aproxima.
          <br />
          <em>Cuidado que acompanha.</em>
        </h2>
        <p>
          Sou Giovanna Freire, pedagoga e psicopedagoga em Campo Grande, MS.
          Acredito que compreender a criança é o ponto de partida para ajudá-la
          a aprender.
        </p>
        <p>
          Meu trabalho une avaliação psicopedagógica, estratégias personalizadas
          e diálogo com a família. Um olhar para as dificuldades, mas também
          para os interesses, as possibilidades e o jeito de ser de cada
          criança.
        </p>
        <div className={styles.credentials}>
          <span>
            <Check size={15} /> Formação em Pedagogia
          </span>
          <span>
            <Check size={15} /> Especialização em Psicopedagogia
          </span>
          <span>
            <Check size={15} /> Acompanhamento individualizado
          </span>
        </div>
        <a
          href={therapy.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramLink}
        >
          <Instagram size={18} /> Me acompanhe no Instagram{" "}
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
function TherapyTrust() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>
        <SectionIntro
          label="VÍNCULOS QUE FAZEM PARTE DO CAMINHO"
          title={
            <>
              Família e escola.
              <br />
              <em>Uma parceria para aprender.</em>
            </>
          }
        >
          A escuta de quem acompanha a criança ajuda a construir um cuidado mais
          próximo da sua realidade.
        </SectionIntro>
        {therapy.reviews.length > 0 ? (
          <div className={styles.reviews}>
            {therapy.reviews.map((review) => (
              <figure key={`${review.name}-${review.context}`}>
                <Quote size={23} />
                <blockquote>{review.text}</blockquote>
                <figcaption>
                  {review.name}
                  <small>{review.context}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className={styles.trustPrinciples}>
            <div>
              <Users size={24} />
              <h3>Família ouvida</h3>
              <p>
                Espaço para compartilhar dúvidas e compreender os próximos
                passos.
              </p>
            </div>
            <div>
              <BookOpen size={24} />
              <h3>Escola em diálogo</h3>
              <p>
                Troca de informações, quando pertinente e autorizada pela
                família.
              </p>
            </div>
            <div>
              <Heart size={24} />
              <h3>Criança acolhida</h3>
              <p>
                Respeito à sua história, ao seu tempo e à sua individualidade.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function TherapyContact() {
  return (
    <section id="contato" className={`${styles.container} ${styles.contact}`}>
      <span className={styles.contactFlower} aria-hidden="true">
        <Flower2 size={80} strokeWidth={1} />
      </span>
      <span className={styles.eyebrow}>UM PRIMEIRO PASSO, SEM PRESSA</span>
      <h2>
        Vamos conversar
        <br />
        <em>sobre o seu pequeno?</em>
      </h2>
      <p>
        Conte o que está acontecendo e tire suas dúvidas sobre o acompanhamento.
        Você não precisa encontrar esse caminho sozinho.
      </p>
      <TherapyButton>Falar com a Giovanna</TherapyButton>
      <div className={styles.contactDetails}>
        <span>
          <MapPin size={15} /> {therapy.city}
        </span>
        <a href={therapy.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram size={15} /> @psico.giovannafreire
        </a>
      </div>
    </section>
  );
}
interface TherapyPageProps {
  portfolioHref?: string;
}
export function TherapyPage({ portfolioHref }: TherapyPageProps) {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>
      <TherapyHeader />
      <main id="conteudo">
        <TherapyHero />
        <div className={styles.promiseStrip}>
          <span>
            <Brain size={20} /> Conhecimento que orienta
          </span>
          <span>
            <Heart size={20} /> Afeto que acolhe
          </span>
          <span>
            <Sparkles size={20} /> Um olhar para cada criança
          </span>
        </div>
        <TherapyServices />
        <TherapyProcess />
        <TherapyAbout />
        <TherapyTrust />
        <section className={`${styles.container} ${styles.faqSection}`}>
          <SectionIntro
            label="PODEMOS COMEÇAR POR AQUI"
            title={
              <>
                Suas dúvidas
                <br />
                <em>também são bem-vindas.</em>
              </>
            }
          />
          <TherapyFaq />
        </section>
        <TherapyContact />
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <TherapyBrand />
          <p>
            Aprendizagem com escuta e afeto.
            <br />
            {therapy.city}
          </p>
          <a
            href={therapy.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Giovanna Freire"
          >
            <Instagram size={21} />
          </a>
          <div className={styles.footerBottom}>
            <span>
              © {new Date().getFullYear()} {therapy.name} · {therapy.profession}
            </span>
            {portfolioHref ? (
              <a href={portfolioHref}>
                <ArrowLeft size={13} /> Voltar ao portfólio de Emanuel
              </a>
            ) : (
              <a
                href="https://github.com/EmanuelIna/Landing-Terapia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desenvolvido por Emanuel Inácio <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </div>
      </footer>
      <a
        className={styles.floating}
        href={therapyWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Giovanna pelo WhatsApp"
      >
        <MessageCircle size={23} />
        <span>Posso te ajudar?</span>
      </a>
    </div>
  );
}
