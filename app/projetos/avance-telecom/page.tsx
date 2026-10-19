import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { contactEmail, whatsappLinks } from "../../contact";
import { avanceTelecom } from "../../content/avance-telecom";

export const metadata: Metadata = {
  title: `${avanceTelecom.title} | Breno Luiz`,
  description: avanceTelecom.description,
  alternates: { canonical: avanceTelecom.href },
  openGraph: {
    title: avanceTelecom.title,
    description: avanceTelecom.description,
    url: avanceTelecom.href,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Breno Luiz · CRM e sistemas sob medida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: avanceTelecom.title,
    description: avanceTelecom.description,
    images: ["/og.jpg"],
  },
};

export default function AvanceTelecomPage() {
  return (
    <main>
      <SiteHeader />
      <article className="case-page">
        <header className="case-hero section">
          <Link className="back-link" href="/#projeto"><ArrowLeft size={16} aria-hidden="true" /> Voltar ao projeto na página inicial</Link>
          <p className="eyebrow">PROJETO REAL · CRM SOB MEDIDA</p>
          <h1>{avanceTelecom.title}</h1>
          <p className="case-lead">{avanceTelecom.description}</p>
          <dl className="case-facts">
            <div><dt>Cliente</dt><dd>{avanceTelecom.name}</dd></div>
            <div><dt>Segmento</dt><dd>Produtos de telefonia</dd></div>
            <div><dt>Meu trabalho</dt><dd>Desenvolvimento do CRM e integrações</dd></div>
          </dl>
        </header>

        <section className="case-story section" aria-labelledby="case-challenge">
          <div>
            <p className="eyebrow dark">O PONTO DE PARTIDA</p>
            <h2 id="case-challenge">Um comercial que dependia do papel.</h2>
          </div>
          <div className="case-copy"><p>{avanceTelecom.context}</p><p>{avanceTelecom.challenge}</p></div>
        </section>

        <section className="case-solution section" aria-labelledby="case-solution">
          <div className="section-heading">
            <div><p className="eyebrow">O QUE CONSTRUÍ</p><h2 id="case-solution">O processo comercial dentro de um CRM.</h2></div>
            <p>{avanceTelecom.solution}</p>
          </div>
          <div className="case-integrations">
            <h3>Integrações do projeto</h3>
            <ul>{avanceTelecom.integrations.map((integration) => <li key={integration}>{integration}</li>)}</ul>
          </div>
        </section>

        <section className="case-flow section" aria-labelledby="case-flow-title">
          <p className="eyebrow dark">ANTES E DEPOIS</p>
          <h2 id="case-flow-title">O que mudou na rotina.</h2>
          <p className="case-flow-intro">Do controle manual à consulta e ao acompanhamento pelo sistema.</p>
          <div className="case-flow-list">
            {avanceTelecom.flow.map((step) => (
              <article className="case-flow-row" key={step.title}>
                <h3>{step.title}</h3>
                <div className="case-flow-change">
                  <div><span>Antes</span><p>{step.before}</p></div>
                  <ArrowRight size={24} aria-hidden="true" />
                  <div><span>Depois</span><p>{step.after}</p></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-results section" aria-labelledby="case-results">
          <div className="section-heading">
            <div><p className="eyebrow">RESULTADOS OBSERVADOS</p><h2 id="case-results">Mais organização e autonomia para a equipe.</h2></div>
            <p>As mudanças abaixo descrevem melhorias observadas no uso do sistema, sem uma medição quantitativa de vendas ou faturamento.</p>
          </div>
          <div className="project-outcomes">
            {avanceTelecom.outcomes.map((outcome) => (
              <article key={outcome.title}>
                <Check size={20} aria-hidden="true" />
                <h3>{outcome.title}</h3><p>{outcome.description}</p>
              </article>
            ))}
          </div>
          <div className="case-possibilities"><h3>Novas possibilidades para a operação</h3><p>{avanceTelecom.possibilities}</p></div>
        </section>
      </article>

      <section className="conversion section">
        <div><p className="eyebrow dark">VAMOS OLHAR PARA O SEU NEGÓCIO?</p><h2>O que ainda depende de papel e planilha na sua empresa?</h2></div>
        <div className="conversion-copy">
          <p>Me conte como sua equipe trabalha e onde a organização está tomando tempo. Vamos avaliar o que faz sentido construir primeiro.</p>
          <a className="button button-dark" href={whatsappLinks.avanceTelecom} target="_blank" rel="noreferrer">Quero organizar meu processo comercial <ArrowRight size={18} aria-hidden="true" /></a>
          <small>Primeira conversa sem compromisso, direto com quem desenvolve. Prefere e-mail? <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</small>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
