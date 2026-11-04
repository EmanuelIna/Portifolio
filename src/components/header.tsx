"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Code2, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { contact, whatsappUrl } from "@/config/site";

const links = [
  { href: "/", label: "Sobre meu trabalho" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/sites", label: "Competências" },
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header shell">
      <div className="nav-main">
        <Link href="/" className="brand" aria-label="Emanuel Inácio — início">
          <Code2 size={25} strokeWidth={2.2} />
          <span>
            emanuel<span className="font-normal">.dev</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal" className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className="nav-contacts">
        <a
          href={`mailto:${contact.email}`}
          aria-label="Enviar e-mail"
          title={contact.email}
        >
          <Mail size={18} />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar LinkedIn"
        >
          <Linkedin size={17} />
        </a>
      </div>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        aria-label="Vamos conversar pelo WhatsApp"
      >
        <span className="sm:hidden">Contato</span>
        <span className="hidden sm:inline">Vamos conversar</span>
        <ArrowUpRight size={16} />
      </a>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegação móvel"
          className="mobile-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <a href={`mailto:${contact.email}`}>
            Enviar e-mail <Mail size={16} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Linkedin size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
