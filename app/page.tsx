import { ArrowRight, ArrowUpRight, Check, MoveDown, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { contactEmail, instagram, location, whatsappLinks } from "./contact";
import { articles } from "./content/articles";
import { avanceTelecom } from "./content/avance-telecom";

export default function Home() {
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const recent = articles.filter((article) => article.slug !== featured.slug);

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">VENDAS · CRM · SISTEMAS SOB MEDIDA</p>
          <h1>Sistemas feitos por quem entende de vendas.</h1>
          <p className="hero-lead">
            Crio CRMs, integrações e automações para organizar o comercial da sua empresa.
            Minha experiência vem de acompanhar a rotina de quem vende e desenvolver
            um sistema em cima desse processo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappLinks.salesBottleneck} target="_blank" rel="noreferrer">Conversar sobre meu negócio <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="button-link" href="#projeto">Conhecer o projeto Avance</a>
          </div>
          <div className="trust-line">
            <span><Check size={15} /> Vivência real em processo de vendas</span>
            <span><Check size={15} /> Você fala direto com quem desenvolve</span>
            <span><Check size={15} /> O código do sistema fica com a sua empresa</span>
          </div>
        </div>
        <aside className="hero-proof">
          <span className="proof-number">DA ROTINA COMERCIAL AO SOFTWARE</span>
          <p className="proof-quote">Primeiro, entender como sua empresa trabalha. Depois, construir o que ajuda a equipe a vender.</p>
          <div className="proof-footer">
            <Image src="/img/breno-avatar.webp" alt="Foto de Breno Luiz" width={400} height={400} />
            <div><span>BRENO LUIZ</span><span>VENDAS &amp; SOFTWARE · {location.toUpperCase()}</span></div>
          </div>
        </aside>
        <a className="scroll-cue" href="#projeto"><MoveDown size={15} aria-hidden="true" /> veja um projeto real</a>
      </section>

      <section className="project-preview section" id="projeto">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJETO REAL · {avanceTelecom.name.toUpperCase()}</p>
            <h2>{avanceTelecom.headline}</h2>
          </div>
          <p>{avanceTelecom.context}</p>
        </div>
        <div className="project-comparison">
          <div><span className="eyebrow">ANTES</span><p>{avanceTelecom.before}</p></div>
          <ArrowRight size={28} aria-hidden="true" />
          <div><span className="eyebrow">DEPOIS</span><p>{avanceTelecom.after}</p></div>
        </div>
        <div className="project-outcomes">
          {avanceTelecom.outcomes.map((outcome) => (
            <article key={outcome.title}>
              <Check size={20} aria-hidden="true" />
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
        <Link className="button button-primary" href={avanceTelecom.href}>Conhecer o projeto completo <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>

      <section className="problem-section section" id="o-problema">
        <div className="problem-heading">
          <p className="eyebrow dark">ISSO ACONTECE NA SUA EMPRESA?</p>
          <h2>Quando organizar a venda dá mais trabalho do que vender.</h2>
        </div>
        <div className="problem-copy">
          <p>
            Contatos espalhados pelo WhatsApp, retornos de propostas esquecidos e
            planilhas que precisam ser atualizadas à mão. Para saber como estão as
            vendas, o gestor precisa perguntar a cada pessoa ou juntar várias informações.
          </p>
          <p>
            Antes de pensar nas telas, olho para essa rotina: como os clientes chegam,
            quem cuida de cada negociação e o que acontece depois da compra.
            A partir daí, construo o que ajuda a equipe a acompanhar o processo.
          </p>
          <a className="inline-link" href="#entregas">Veja o que posso construir <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="deliveries section" id="entregas">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DO PRIMEIRO CONTATO À RECOMPRA</p>
            <h2>O que posso organizar no seu comercial.</h2>
          </div>
          <p>
            Podemos complementar as ferramentas que você já usa ou construir um
            sistema do zero. O ponto de partida é o que está dificultando sua rotina.
          </p>
        </div>
        <div className="deliveries-grid">
          {[
            ["01", "CRM e acompanhamento comercial", "Contatos, propostas e próximos passos reunidos em um sistema que acompanha o jeito da sua empresa vender.", "Exemplo: saber quem atende cada cliente, em que etapa está a negociação e quando fazer o próximo contato."],
            ["02", "Integrações e automações", "Ferramentas conectadas para reduzir cadastros repetidos, atualizações manuais e tarefas que tomam tempo da equipe.", "Exemplo: distribuir um novo contato e atualizar o status da venda automaticamente, conforme as regras do negócio."],
            ["03", "Indicadores, metas e pós-venda", "Informações para acompanhar o mês, orientar a equipe e lembrar de quem já comprou.", "Exemplo: acompanhar metas por vendedor, consultar a origem dos contatos e identificar clientes que pararam de comprar."],
          ].map(([number, title, description, example]) => (
            <article className="delivery" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="delivery-example">{example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-start section" id="como-comeca">
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
            ["02", "Primeira versão e proposta", "Definimos o que vale a pena construir primeiro. Você recebe uma proposta com escopo, prazo e investimento antes de começar."],
            ["03", "Primeira versão e ajustes", "A equipe começa a usar o sistema. Eu acompanho os resultados e a gente ajusta o que for necessário conforme o uso."],
          ].map(([number, title, text]) => (
            <article className="project-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="presence section" id="sobre">
        <div className="presence-grid">
          <figure className="presence-photo photo">
            <Image src="/img/breno-retrato.webp" alt="Breno Luiz sorrindo, sentado em uma praça" width={800} height={1000} loading="lazy" />
            <figcaption><span>BRENO LUIZ</span><span>{location}</span></figcaption>
          </figure>
          <div className="presence-copy">
            <p className="eyebrow">FORMAÇÃO E EXPERIÊNCIA</p>
            <h2>Breno Luiz Silva do Carmo</h2>
            <p>
              Sou técnico em informática e engenheiro de computação. Na Avance Telecom,
              acompanhei o processo de vendas e desenvolvi o CRM que ajudou a empresa
              a organizar sua operação comercial.
            </p>
            <p>
              Essa vivência orienta meu trabalho: entender a rotina de quem vende e
              transformar suas dificuldades em sistemas úteis para o dia a dia.
            </p>
            <p>
              Estou em {location} e atendo empresas de outras cidades online.
              Do primeiro contato aos ajustes do sistema, você conversa diretamente comigo.
            </p>
          </div>
          <aside className="presence-proof" aria-label="Experiência profissional">
            <p>Sistemas para todo o processo comercial: captação, negociação, metas e pós-venda.</p>
            <div className="presence-credentials">
              <span>Vivência em processo de vendas</span>
              <span>Engenheiro de computação</span>
              <span>Técnico em informática</span>
              <span>{location} · atendo online</span>
              <a href={instagram.url} target="_blank" rel="noreferrer">{instagram.handle} no Instagram</a>
            </div>
            <figure className="presence-event photo">
              <Image src="/img/breno-sbpc.webp" alt="Breno Luiz ao lado do letreiro da SBPC na UFF" width={900} height={732} loading="lazy" />
              <figcaption>Na SBPC, na UFF.</figcaption>
            </figure>
          </aside>
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PERGUNTAS FREQUENTES</p>
            <h2>O que costumam me perguntar antes de começar.</h2>
          </div>
          <p>
            Se a sua dúvida não estiver aqui, pode me chamar no WhatsApp ou
            escrever para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
        <div className="faq-list">
          {[
            ["Quanto custa um sistema?", "Depende muito do que precisa ser feito. A primeira conversa não tem custo: é nela que eu entendo como a sua empresa funciona. Depois, te envio uma proposta com o escopo, o prazo e o valor da primeira versão."],
            ["Você atende empresas de outras cidades?", "Sim. Todo o trabalho pode ser feito online, então a distância não atrapalha. Estou sempre de olho no WhatsApp para responder rápido e, durante o projeto, a gente pode fazer reuniões semanais para você acompanhar de perto como o sistema está ficando."],
            ["Quanto tempo leva?", "Também depende do tamanho do sistema, e o prazo já vai definido na proposta. A ideia é colocar uma primeira versão em uso o quanto antes e ir melhorando com a equipe usando no dia a dia."],
            ["Preciso saber exatamente o que quero?", "Não. Pode chegar só contando o que está difícil no atendimento ou nas vendas. A gente define junto o que vale a pena construir primeiro."],
            ["Quem fica com o código do sistema?", "O código é da sua empresa. A hospedagem também fica por conta de vocês: a mensalidade é paga direto ao serviço de hospedagem escolhido."],
            ["E depois que o sistema estiver pronto?", "Manutenções e atualizações pequenas eu cobro por hora, só quando forem necessárias. Se for uma mudança maior, a gente combina um novo contrato de serviço."],
            ["Preciso abandonar as ferramentas que já uso?", "Não. Existem dois caminhos, e escolhemos juntos o que faz mais sentido. Posso complementar o sistema que a sua empresa já usa, criando o que falta e conectando as ferramentas para a equipe não cadastrar a mesma informação em vários lugares. Ou posso desenvolver um sistema do zero, pensado para atender todas as necessidades da sua empresa em um só lugar."],
          ].map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}<Plus size={18} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="materials section" id="artigos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ARTIGOS</p>
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
              <div className="card-meta"><span>{String(index + 2).padStart(2, "0")}</span><span>{article.category}</span></div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="card-footer"><span>{article.readingTime}</span><ArrowUpRight size={20} /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="conversion section">
        <div>
          <p className="eyebrow dark">VAMOS CONVERSAR</p>
          <h2>O que você gostaria de melhorar na sua empresa?</h2>
        </div>
        <div className="conversion-copy">
          <div className="conversion-person">
            <Image src="/img/breno-avatar.webp" alt="Foto de Breno Luiz" width={400} height={400} loading="lazy" />
            <span><strong>Breno Luiz</strong>Quem responde é quem desenvolve.</span>
          </div>
          <p>
            Me conte como vocês trabalham e o que está dando mais trabalho hoje.
            A partir daí, podemos avaliar como um sistema ajudaria.
          </p>
          <a className="button button-dark" href={whatsappLinks.salesBottleneck} target="_blank" rel="noreferrer">Conversar sobre meu negócio <ArrowRight size={18} aria-hidden="true" /></a>
          <small>Uma primeira conversa, sem compromisso. Prefere e-mail? Escreva para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</small>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
