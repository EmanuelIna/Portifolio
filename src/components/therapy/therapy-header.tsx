"use client";
import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { therapyWhatsApp } from "./config";
import styles from "./therapy.module.css";

export function TherapyBrand() {
  return (
    <a
      className={styles.brand}
      href="#inicio"
      aria-label="Giovanna Freire — início"
    >
      <span className={styles.brandIcon}>
        <Brain size={28} strokeWidth={1.35} />
      </span>
      <span>
        Giovanna Freire<small>PEDAGOGA · PSICOPEDAGOGA</small>
      </span>
    </a>
  );
}
const links = [
  { href: "#acolhimento", label: "Como posso ajudar" },
  { href: "#como-funciona", label: "O acompanhamento" },
  { href: "#sobre", label: "Sobre mim" },
];
export function TherapyHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <TherapyBrand />
        <nav className={styles.desktopNav} aria-label="Navegação da Giovanna">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={therapyWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerCta}
        >
          Vamos conversar
        </a>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="therapy-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        {open && (
          <nav
            id="therapy-menu"
            className={styles.mobileNav}
            aria-label="Navegação móvel da Giovanna"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={therapyWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
