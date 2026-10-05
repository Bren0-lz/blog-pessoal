"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappLinks } from "../contact";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="identity" href="/" aria-label="Breno, página inicial">
        <span className="identity-name">Breno</span>
        <span className="identity-role">software &amp; sistemas</span>
      </a>
      <button className="menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? "nav nav-open" : "nav"} aria-label="Navegação principal">
        <a href="/#materiais" onClick={() => setOpen(false)}>Materiais</a>
        <a href="/#sobre" onClick={() => setOpen(false)}>Sobre mim</a>
        <a href="/#como-comeca" onClick={() => setOpen(false)}>Como começa</a>
        <a className="nav-contact" href={whatsappLinks.navigation} target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
    </header>
  );
}
