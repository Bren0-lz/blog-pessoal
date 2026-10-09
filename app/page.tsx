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
            Desenvolvo CRMs, integrações e automações para sua equipe acompanhar
            clientes, responder no momento certo e deixar menos oportunidades pelo caminho.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#materiais">Ver como eu penso <ArrowRight size={18} /></a>
            <a className="button-link" href={whatsappLinks.sales} target="_blank" rel="noreferrer">Conversar no WhatsApp</a>
          </div>
          <div className="trust-line">
            <span><Check size={15} /> Foco no resultado do negócio</span>
            <span><Check size={15} /> Adaptado à sua forma de trabalhar</span>
            <span><Check size={15} /> Tecnologia com uma finalidade clara</span>
          </div>
        </div>
        <aside className="hero-proof">
          <span className="proof-number">01</span>
          <p className="proof-quote">“Um bom sistema ajuda a equipe a saber quem precisa de atenção e o que fazer em seguida.”</p>
          <div className="proof-footer"><span>BRENO LUIZ</span><span>DESENVOLVEDOR DE SOFTWARE</span></div>
        </aside>
        <a className="scroll-cue" href="#materiais"><MoveDown size={15} /> explorar os materiais</a>
      </section>

      <section className="materials section" id="materiais">
        <div className="section-code materials-code">02 / MATERIAIS</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">IDEIAS PARA O DIA A DIA DO NEGÓCIO</p>
            <h2>Como eu penso<br />sobre software e vendas.</h2>
          </div>
          <p>
            Escrevo sobre problemas comuns no trabalho comercial e como a tecnologia
            pode ajudar. São leituras para você avaliar o que faz sentido na sua empresa.
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

      <section className="deliveries section" id="entregas">
        <div className="section-code materials-code">03 / O QUE EU CONSTRUO</div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">O QUE POSSO FAZER PELA SUA EMPRESA</p>
            <h2>Soluções para o seu processo comercial.</h2>
          </div>
          <p>
            Podemos melhorar uma etapa do trabalho ou desenvolver um sistema mais
            completo. A escolha depende do problema e das ferramentas que você já usa.
          </p>
        </div>
        <div className="deliveries-grid">
          {[
            ["01", "CRM sob medida", "Um lugar para consultar contatos, conversas e negociações, com etapas que fazem sentido para sua equipe e um responsável por cada atendimento."],
            ["02", "Acompanhamento de propostas", "Propostas, prazos e retornos organizados para você saber o que está em negociação e quando precisa falar com cada cliente."],
            ["03", "Integrações entre sistemas", "Conecto as ferramentas que sua empresa já usa para evitar que a equipe precise cadastrar a mesma informação em vários lugares."],
            ["04", "Automações comerciais", "Tarefas, lembretes e distribuição de contatos interessados para reduzir o trabalho repetitivo e ajudar a equipe a manter os retornos em dia."],
          ].map(([number, title, description]) => (
            <article className="delivery" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="presence section" id="sobre">
        <div className="section-code">04 / QUEM ESTÁ POR TRÁS</div>
        <div className="presence-grid">
          <div className="presence-mark" aria-hidden="true">B</div>
          <div className="presence-copy">
            <p className="eyebrow">FORMAÇÃO E EXPERIÊNCIA</p>
            <h2>Breno Luiz Silva do Carmo.</h2>
            <p>
              Sou técnico em informática e engenheiro de computação. Comecei trabalhando
              como estagiário e, ao perceber que muitas empresas precisavam de sistemas
              mais adequados à sua rotina, decidi abrir meu próprio negócio.
            </p>
            <p>
              Desde então, desenvolvi sistemas para mais de 50 empresas locais. Ajudei
              negócios a sair do papel e de planilhas confusas, organizar o atendimento
              e acompanhar melhor suas oportunidades. Esses softwares também ajudaram
              empresas a gerar vendas reais.
            </p>
            <p>
              Hoje, quero ajudar mais empresas a vender melhor com software que respeite
              sua forma de trabalhar e resolva dificuldades do dia a dia.
            </p>
          </div>
          <aside className="presence-proof" aria-label="Experiência profissional">
            <strong>50+</strong>
            <span>empresas locais atendidas</span>
            <p>Sistemas para organizar o trabalho e acompanhar o atendimento ao cliente.</p>
            <div className="presence-credentials">
              <span>Técnico em informática</span>
              <span>Engenheiro de computação</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="problem-section section" id="o-problema">
        <div className="section-code">05 / O PROBLEMA</div>
        <div className="problem-heading">
          <p className="eyebrow dark">QUANDO O SISTEMA NÃO ACOMPANHA A EQUIPE</p>
          <h2>Você sabe quais clientes estão esperando um retorno?</h2>
        </div>
        <div className="problem-copy">
          <p>
            Os contatos estão cadastrados e os relatórios estão prontos. Mesmo assim,
            uma proposta fica sem resposta, um prazo passa e alguém precisa procurar
            nas mensagens o que foi combinado.
          </p>
          <p>
            Meu trabalho é entender por que isso acontece e criar formas de evitar
            essas falhas, com tarefas, lembretes e informações fáceis de encontrar.
          </p>
          <a className="inline-link" href="#como-penso">Veja como eu construo <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="method section" id="como-penso">
        <div className="section-code">06 / COMO EU PENSO</div>
        <div className="method-grid">
          <div className="method-intro">
            <p className="eyebrow">COMO ESCOLHO O QUE CONSTRUIR</p>
            <h2>Cada função precisa ajudar em alguma coisa.</h2>
            <p>
              Antes de desenhar uma tela, quero entender quem vai usá-la,
              qual tarefa precisa fazer e o que está dificultando esse trabalho hoje.
            </p>
          </div>
          <div className="principles">
            {[
              ["01", "Entender onde o trabalho trava", "Procuro os retornos atrasados, as propostas esquecidas e as tarefas que exigem procurar informações em vários lugares."],
              ["02", "Facilitar o próximo passo", "A equipe precisa saber o que fazer, quem cuida de cada atendimento e quais prazos merecem atenção."],
              ["03", "Conferir o que melhorou", "Depois de colocar o sistema em uso, observo o que ficou mais simples e o que ainda precisa de ajuste."],
            ].map(([number, title, text]) => (
              <div className="principle" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-start section" id="como-comeca">
        <div className="section-code">07 / COMO COMEÇA</div>
        <div className="project-start-heading">
          <div>
            <p className="eyebrow dark">DO PROBLEMA À PRIMEIRA VERSÃO</p>
            <h2>Você não precisa chegar com um escopo pronto.</h2>
          </div>
          <p>
            Você pode começar contando o que está difícil na rotina da empresa.
            Vamos entender o problema e definir juntos o que vale a pena construir.
          </p>
        </div>
        <div className="project-steps">
          {[
            ["01", "Conversa sobre o negócio", "Quero conhecer sua rotina, as ferramentas que você usa e as dificuldades da equipe no atendimento e nas vendas."],
            ["02", "Definição da solução", "Organizo as necessidades, proponho como o sistema pode ajudar e defino com você as prioridades da primeira versão."],
            ["03", "Primeira versão e ajustes", "A equipe começa a usar o sistema. Acompanhamos o uso e ajustamos o que for necessário conforme aparecem novas necessidades."],
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
        <div className="conversion-marker">08 / PRÓXIMA CONVERSA</div>
        <div>
          <p className="eyebrow dark">VAMOS CONVERSAR</p>
          <h2>O que você gostaria de melhorar na sua empresa?</h2>
        </div>
        <div className="conversion-copy">
          <p>
            Me conte como vocês trabalham e o que está dando mais trabalho hoje.
            A partir daí, podemos avaliar como um sistema ajudaria.
          </p>
          <a className="button button-dark" href={whatsappLinks.salesBottleneck} target="_blank" rel="noreferrer">Falar sobre meu negócio <ArrowRight size={18} /></a>
          <small>Uma primeira conversa, sem compromisso.</small>
        </div>
      </section>

      <footer>
        <a className="identity" href="/"><span className="identity-name">Breno Luiz</span><span className="identity-role">software &amp; sistemas</span></a>
        <p>Software para facilitar o trabalho e apoiar suas vendas.</p>
        <span>Brasil · 2026</span>
      </footer>
    </main>
  );
}
