import {
  ArrowUpRight,
  Code2,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { contact, whatsappUrl } from "@/config/site";
import { Button } from "./ui/button";

export function ContactLinks() {
  return (
    <div className="contact-links">
      <a href={`mailto:${contact.email}`}>
        <Mail size={15} /> E-mail <ArrowUpRight size={12} />
      </a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} />
      </a>
    </div>
  );
}
export function ContactSection() {
  return (
    <section id="contato" className="contact-section shell">
      <div>
        <span className="eyebrow">
          <span className="status-dot" /> PRÓXIMO PASSO
        </span>
        <h2>
          Vamos construir
          <br />
          <span className="text-muted">o próximo capítulo.</span>
        </h2>
        <p>
          Disponível para conversar sobre projetos, parcerias e oportunidades
          profissionais.
        </p>
      </div>
      <div className="contact-section-actions">
        <Button href={whatsappUrl()} external>
          Entrar em contato
        </Button>
        <ContactLinks />
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="shell site-footer">
      <div className="footer-top">
        <Link className="brand" href="/">
          <Code2 size={22} />
          <span>emanuel.dev</span>
        </Link>
        <div className="footer-navigation">
          <Link href="/">Sobre meu trabalho</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/sites">Competências</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Emanuel Inácio. Código com propósito.
        </span>
        <div>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
interface FloatingWhatsAppButtonProps {
  message?: string;
}
export function FloatingWhatsAppButton({
  message,
}: FloatingWhatsAppButtonProps) {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Emanuel pelo WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Vamos conversar</span>
      <ArrowUpRight size={15} />
    </a>
  );
}
