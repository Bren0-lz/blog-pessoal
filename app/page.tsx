import { ArrowRight, ArrowUpRight, Check, MoveDown, Plus } from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { contactEmail, location, whatsappLinks } from "./contact";
import { articles } from "./content/articles";

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
            Tenho experiência no ramo de vendas e formação em engenharia de computação.
            Uno as duas coisas para criar sistemas que ajudam sua empresa a atrair clientes,
            conduzir negociações, acompanhar metas e vender de novo para quem já comprou.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappLinks.sales} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowRight size={18} /></a>
            <a className="button-link" href="#entregas">Ver o que eu construo</a>
          </div>
          <div className="trust-line">
            <span><Check size={15} /> Experiência prática em vendas</span>
            <span><Check size={15} /> Você fala direto com quem desenvolve</span>
            <span><Check size={15} /> O código do sistema fica com a sua empresa</span>
          </div>
        </div>
        <aside className="hero-proof">
          <span className="proof-number">SINAIS DE QUE VALE CONVERSAR</span>
          <ul className="proof-list">
            <li>Novos contatos chegam, mas ninguém sabe de onde vêm nem quais valem a pena.</li>
            <li>Só dá para saber se a meta foi batida quando o mês acaba.</li>
            <li>Quem já comprou não volta, e ninguém percebe.</li>
            <li>As informações dos clientes estão espalhadas entre planilhas, cadernos e WhatsApp.</li>
          </ul>
          <div className="proof-footer"><span>BRENO LUIZ</span><span>VENDAS &amp; SOFTWARE · {location.toUpperCase()}</span></div>
        </aside>
        <a className="scroll-cue" href="#o-problema"><MoveDown size={15} /> continuar lendo</a>
      </section>

      <section className="problem-section section" id="o-problema">
        <div className="problem-heading">
          <p className="eyebrow dark">QUANDO O SISTEMA NÃO ENTENDE DE VENDAS</p>
          <h2>Um sistema que só guarda dados não ajuda ninguém a vender.</h2>
        </div>
        <div className="problem-copy">
          <p>
            Muitas empresas têm cadastro de clientes, planilhas e relatórios. Mesmo assim,
            não sabem de onde vêm os melhores clientes, em que etapa as vendas emperram,
            se a meta do mês vai ser batida ou quem parou de comprar.
          </p>
          <p>
            Conheço esse dia a dia pela minha experiência no ramo de vendas. Por isso,
            antes de pensar em telas, olho para o processo comercial da sua empresa:
            como os clientes chegam, como a negociação avança e o que acontece depois
            da venda. O sistema vem para apoiar esse processo.
          </p>
          <a className="inline-link" href="#entregas">Veja o que posso construir <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="deliveries section" id="entregas">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DO PRIMEIRO CONTATO À RECOMPRA</p>
            <h2>Um sistema para cada etapa da venda.</h2>
          </div>
          <p>
            Posso melhorar uma etapa específica ou construir um sistema que acompanhe
            todo o processo comercial. A escolha depende do momento da sua empresa e
            das ferramentas que você já usa.
          </p>
        </div>
        <div className="deliveries-grid">
          {[
            ["01", "Prospecção e captação", "Registro da origem de cada contato, qualificação dos interessados e distribuição para o vendedor certo, para a equipe investir tempo em quem tem mais chance de comprar."],
            ["02", "Funil de vendas", "Etapas que refletem como a sua empresa vende, para enxergar onde as negociações avançam e onde costumam parar."],
            ["03", "Metas e desempenho", "Metas por vendedor e por período, previsão de vendas e indicadores que mostram, durante o mês, se o resultado está no caminho."],
            ["04", "Acompanhamento de negociações", "Propostas, prazos e próximos passos organizados, com um responsável definido para cada atendimento."],
            ["05", "Pós-venda e recompra", "Histórico de compras, avisos sobre clientes inativos e lembretes de contato para estimular novas compras e indicações."],
            ["06", "Integrações e automações", "Conecto as ferramentas que a sua empresa já usa e automatizo tarefas repetitivas, para a equipe passar mais tempo vendendo."],
          ].map(([number, title, description]) => (
            <article className="delivery" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method section" id="como-penso">
        <div className="method-grid">
          <div className="method-intro">
            <p className="eyebrow">COMO ESCOLHO O QUE CONSTRUIR</p>
            <h2>Primeiro o processo de vendas, depois o sistema.</h2>
            <p>
              Antes de desenhar uma tela, quero entender como a sua empresa vende:
              quem são os clientes, como eles chegam, como a negociação acontece e
              o que vem depois da venda.
            </p>
          </div>
          <div className="principles">
            {[
              ["01", "Entender como a sua empresa vende", "Mapeio o caminho do cliente, da captação ao pós-venda, e procuro os pontos onde as oportunidades se perdem."],
              ["02", "Aplicar o que funciona em vendas", "Uso minha experiência no ramo comercial para propor práticas que façam sentido para o seu negócio, e não apenas para organizar dados."],
              ["03", "Medir o que melhorou", "Depois que o sistema entra em uso, acompanho os resultados e ajusto o que ainda precisa melhorar."],
            ].map(([number, title, text]) => (
              <div className="principle" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
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
            ["Quanto custa um sistema?", "Depende do tamanho do problema e do que precisa ser construído. Na primeira conversa, que não tem custo, entendo a rotina da sua empresa. Depois disso, envio uma proposta com o escopo, o prazo e o valor da primeira versão."],
            ["Preciso saber exatamente o que quero?", "Não. Você pode começar contando o que está difícil no atendimento ou nas vendas. Definimos juntos o que vale a pena construir primeiro."],
            ["Quem fica com o código do sistema?", "O código fica com a sua empresa. A hospedagem também fica por conta da empresa: a mensalidade é paga diretamente ao serviço de hospedagem escolhido."],
            ["E depois que o sistema estiver pronto?", "Pequenas manutenções e atualizações são cobradas por hora, apenas quando forem necessárias. Para mudanças maiores, combinamos um novo contrato de serviço."],
            ["Preciso abandonar as ferramentas que já uso?", "Nem sempre. Quando faz sentido, conecto o sistema às ferramentas que a sua empresa já usa, para a equipe não precisar cadastrar a mesma informação em vários lugares."],
          ].map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}<Plus size={18} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="presence section" id="sobre">
        <div className="presence-grid">
          <div className="presence-mark" aria-hidden="true">B</div>
          <div className="presence-copy">
            <p className="eyebrow">FORMAÇÃO E EXPERIÊNCIA</p>
            <h2>Breno Luiz Silva do Carmo.</h2>
            <p>
              Sou técnico em informática, engenheiro de computação e tenho experiência
              no ramo de vendas. Essa combinação é o que diferencia o meu trabalho:
              entendo como uma venda acontece na prática e sei transformar isso em sistema.
            </p>
            <p>
              Comecei trabalhando como estagiário e, ao perceber que muitas empresas
              precisavam de sistemas mais adequados à sua rotina, decidi abrir meu próprio
              negócio. Desde então, desenvolvi sistemas para empresas locais, ajudando
              negócios a sair do papel e de planilhas confusas e a organizar o processo
              comercial. Esses softwares também ajudaram empresas a gerar vendas reais.
            </p>
            <p>
              Hoje, quero levar essa experiência para mais empresas, de diferentes
              segmentos, com sistemas que respeitem a forma de trabalhar de cada uma.
            </p>
          </div>
          <aside className="presence-proof" aria-label="Experiência profissional">
            <p>Sistemas para todo o processo comercial: captação, negociação, metas e pós-venda.</p>
            <div className="presence-credentials">
              <span>Experiência no ramo de vendas</span>
              <span>Engenheiro de computação</span>
              <span>Técnico em informática</span>
              <span>{location}</span>
            </div>
          </aside>
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
          <p>
            Me conte como vocês trabalham e o que está dando mais trabalho hoje.
            A partir daí, podemos avaliar como um sistema ajudaria.
          </p>
          <a className="button button-dark" href={whatsappLinks.salesBottleneck} target="_blank" rel="noreferrer">Falar sobre meu negócio <ArrowRight size={18} /></a>
          <small>Uma primeira conversa, sem compromisso. Prefere e-mail? Escreva para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</small>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
