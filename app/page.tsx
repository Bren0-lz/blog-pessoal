import { ArrowRight, ArrowUpRight, Check, MoveDown } from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { whatsappLinks } from "./contact";
import { articles } from "./content/articles";

export default function Home() {
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const recent = articles.filter((article) => article.slug !== featured.slug);

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE COMERCIAL · CRM · AUTOMAÇÃO</p>
          <h1>Eu construo sistemas que ajudam o seu negócio a vender mais.</h1>
          <p className="hero-lead">
            Organizar é o mínimo. Eu transformo processos comerciais em software
            que conduz oportunidades, reduz perdas e trabalha para gerar caixa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#materiais">Ver como eu penso <ArrowRight size={18} /></a>
            <a className="button-link" href={whatsappLinks.sales} target="_blank" rel="noreferrer">Conversar no WhatsApp</a>
          </div>
          <div className="trust-line">
            <span><Check size={15} /> Pensado para gerar receita</span>
            <span><Check size={15} /> Construído ao redor do seu processo</span>
            <span><Check size={15} /> Sem tecnologia por vaidade</span>
          </div>
        </div>
        <aside className="hero-proof">
          <span className="proof-number">01</span>
          <p className="proof-quote">“Um sistema comercial não deveria apenas guardar o que aconteceu. Ele deveria ajudar a próxima venda a acontecer.”</p>
          <div className="proof-footer"><span>BRENO</span><span>DESENVOLVEDOR DE SOFTWARE</span></div>
        </aside>
        <a className="scroll-cue" href="#materiais"><MoveDown size={15} /> explorar os materiais</a>
      </section>

      <section className="materials section" id="materiais">
        <div className="section-code materials-code">02 / MATERIAIS</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">CONFIANÇA COMEÇA PELO RACIOCÍNIO</p>
            <h2>Leia como eu penso<br />antes de falar comigo.</h2>
          </div>
          <p>
            Aqui eu abro os critérios que uso para encontrar receita perdida,
            desenhar processos comerciais e decidir quando vale construir software.
          </p>
        </div>

        <a className="featured-article" href={`/artigos/${featured.slug}`}>
          <div className="featured-label"><span>COMECE POR AQUI</span><span>{featured.readingTime}</span></div>
          <div className="featured-body">
            <div>
              <p>{featured.category}</p>
              <h3>{featured.title}</h3>
            </div>
            <div className="featured-description">
              <p>{featured.description}</p>
              <span>Ler matéria completa <ArrowUpRight size={19} /></span>
            </div>
          </div>
        </a>

        <div className="article-grid">
          {recent.map((article, index) => (
            <a className="article-card" href={`/artigos/${article.slug}`} key={article.slug}>
              <div className="card-meta"><span>0{index + 2}</span><span>{article.category}</span></div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="card-footer"><span>{article.readingTime}</span><ArrowUpRight size={20} /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="presence section" id="sobre">
        <div className="section-code">03 / QUEM ESTÁ POR TRÁS</div>
        <div className="presence-grid">
          <div className="presence-mark" aria-hidden="true">B</div>
          <div className="presence-copy">
            <p className="eyebrow">TÉCNICA, NEGÓCIO E EXPERIÊNCIA REAL</p>
            <h2>Breno Luiz Silva do Carmo.</h2>
            <p>
              Minha trajetória começou com a formação técnica em informática e avançou
              até a engenharia de computação. Trabalhei como estagiário, mas, ao perceber
              uma deficiência no mercado, decidi abrir meu próprio negócio.
            </p>
            <p>
              Desde então, desenvolvi sistemas para mais de 50 empresas locais,
              transformando processos presos ao papel e a planilhas confusas em operações
              mais claras e eficientes. Mais do que organizar informações, esses softwares
              ajudaram empresas a evitar oportunidades perdidas e gerar vendas reais.
            </p>
            <p>
              Hoje, meu objetivo é levar essa experiência a mais empresas que querem
              aumentar o faturamento por meio de software pensado para a realidade da operação.
            </p>
          </div>
          <aside className="presence-proof" aria-label="Experiência profissional">
            <strong>50+</strong>
            <span>empresas locais atendidas</span>
            <p>Do papel e das planilhas para sistemas que acompanham e apoiam a venda.</p>
            <div className="presence-credentials">
              <span>Técnico em informática</span>
              <span>Engenheiro de computação</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="problem-section section" id="o-problema">
        <div className="section-code">04 / O PROBLEMA</div>
        <div className="problem-heading">
          <p className="eyebrow dark">ORGANIZAR NÃO É O MESMO QUE VENDER</p>
          <h2>Um sistema organizado ainda pode estar deixando dinheiro na mesa.</h2>
        </div>
        <div className="problem-copy">
          <p>
            Muitos sistemas funcionam como arquivos caros: guardam contatos, exibem
            etapas e geram relatórios, mas não ajudam a equipe a avançar uma oportunidade.
          </p>
          <p>
            Meu trabalho é identificar onde a receita escapa e transformar esses pontos
            em ações, alertas e automações que apoiam a venda — não apenas o controle.
          </p>
          <a className="inline-link" href="#como-penso">Veja como eu construo <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="method section" id="como-penso">
        <div className="section-code">05 / COMO EU PENSO</div>
        <div className="method-grid">
          <div className="method-intro">
            <p className="eyebrow">SOFTWARE ORIENTADO A RECEITA</p>
            <h2>Cada função precisa mover a venda.</h2>
            <p>
              Antes de pensar em telas e funcionalidades, eu procuro entender
              qual comportamento comercial o sistema precisa provocar.
            </p>
          </div>
          <div className="principles">
            {[
              ["01", "Encontrar onde a receita escapa", "Leads esquecidos, retornos atrasados, propostas sem acompanhamento e decisões presas em informação dispersa."],
              ["02", "Transformar sinais em ação", "O sistema precisa mostrar o próximo passo, acionar a pessoa certa e reduzir o tempo entre interesse e resposta."],
              ["03", "Aprender com cada oportunidade", "Dados úteis revelam gargalos, melhoram o processo e ajudam a equipe a repetir o que realmente funciona."],
            ].map(([number, title, text]) => (
              <div className="principle" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-start section" id="como-comeca">
        <div className="section-code">06 / COMO COMEÇA</div>
        <div className="project-start-heading">
          <div>
            <p className="eyebrow dark">DO PROBLEMA À PRIMEIRA VERSÃO</p>
            <h2>Você não precisa chegar com um escopo pronto.</h2>
          </div>
          <p>
            O projeto começa pela operação comercial que existe hoje. Primeiro entendemos
            onde a venda trava; depois, transformamos esse diagnóstico em software útil.
          </p>
        </div>
        <div className="project-steps">
          {[
            ["01", "Diagnóstico comercial", "Conversamos sobre o processo, os canais, as pessoas envolvidas e os pontos em que oportunidades perdem velocidade ou desaparecem."],
            ["02", "Desenho da solução", "Organizo o fluxo, defino o que o sistema precisa provocar e priorizo as funções com maior impacto sobre a operação e a receita."],
            ["03", "Primeira versão e evolução", "Colocamos uma versão útil na operação, observamos o uso real e evoluímos o software com dados, aprendizado e novas prioridades."],
          ].map(([number, title, text]) => (
            <article className="project-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="conversion section">
        <div className="conversion-marker">07 / PRÓXIMA CONVERSA</div>
        <div>
          <p className="eyebrow dark">SE O SEU SISTEMA SÓ ORGANIZA</p>
          <h2>Talvez seja hora de fazê-lo trabalhar pela próxima venda.</h2>
        </div>
        <div className="conversion-copy">
          <p>
            A primeira conversa serve para localizar o ponto em que a venda trava e
            entender se existe uma oportunidade real para o software criar retorno.
          </p>
          <a className="button button-dark" href={whatsappLinks.salesBottleneck} target="_blank" rel="noreferrer">Me conte onde a venda trava <ArrowRight size={18} /></a>
          <small>Conversa inicial, sem proposta genérica e sem compromisso.</small>
        </div>
      </section>

      <footer>
        <a className="identity" href="/"><span className="identity-name">Breno</span><span className="identity-role">software &amp; sistemas</span></a>
        <p>Software pensado para mover vendas.</p>
        <span>Brasil · 2026</span>
      </footer>
    </main>
  );
}
