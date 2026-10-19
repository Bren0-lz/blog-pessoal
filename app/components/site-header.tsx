"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { whatsappLinks } from "../contact";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <Link className="identity" href="/" aria-label="Breno Luiz, página inicial">
        <span className="identity-name">Breno Luiz</span>
        <span className="identity-role">software &amp; sistemas</span>
      </Link>
      <button ref={menuButton} type="button" className="menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
      <nav id="main-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Navegação principal">
        <Link href="/#projeto" onClick={() => setOpen(false)}>Projeto</Link>
        <Link href="/#entregas" onClick={() => setOpen(false)}>Soluções</Link>
        <Link href="/#como-comeca" onClick={() => setOpen(false)}>Como começa</Link>
        <Link href="/#sobre" onClick={() => setOpen(false)}>Sobre</Link>
        <Link href="/#artigos" onClick={() => setOpen(false)}>Artigos</Link>
        <a className="nav-contact" href={whatsappLinks.navigation} target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
    </header>
  );
}
