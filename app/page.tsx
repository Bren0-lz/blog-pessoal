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
            Aprendi vendas desenvolvendo do zero o sistema comercial de uma empresa,
            acompanhando de perto como ela vendia. Hoje uso essa experiência para criar sistemas que ajudam a sua empresa a atrair clientes, conduzir
            negociações, acompanhar metas e vender de novo para quem já comprou.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappLinks.sales} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowRight size={18} /></a>
            <a className="button-link" href="#entregas">Ver o que eu construo</a>
          </div>
          <div className="trust-line">
            <span><Check size={15} /> Vivência real em processo de vendas</span>
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
            Eu aprendi isso na prática. Por isso, antes de pensar em qualquer tela,
            olho para o processo comercial da sua empresa: como os clientes chegam,
            como a negociação anda e o que acontece depois da venda. O sistema vem
            para apoiar esse processo, e não o contrário.
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
            Um sistema bem estruturado se adapta a qualquer modelo de empresa. Dá para
            complementar o que você já usa ou construir tudo do zero, cobrindo uma
            etapa ou o processo comercial inteiro.
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
            ["02", "Definição da solução", "Organizo o que for preciso e uso o que aprendi sobre vendas para propor o que faz sentido para o seu negócio. Juntos, definimos o que entra na primeira versão."],
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

      <section className="presence section" id="sobre">
        <div className="presence-grid">
          <figure className="presence-photo">
            <img src="/img/breno-retrato.webp" alt="Breno Luiz sorrindo, sentado em uma praça" width={800} height={1000} loading="lazy" />
          </figure>
          <div className="presence-copy">
            <p className="eyebrow">FORMAÇÃO E EXPERIÊNCIA</p>
            <h2>Breno Luiz Silva do Carmo.</h2>
            <p>
              Sou técnico em informática e engenheiro de computação. Logo no início da
              carreira, acompanhei de perto o processo de vendas de uma empresa e
              desenvolvi o sistema que sustentava esse processo.
            </p>
            <p>
              Esse projeto me ensinou como uma venda funciona na prática e como um
              sistema pode ajudar em cada etapa dela. Depois dele, percebi que muitas
              empresas precisavam do mesmo e decidi abrir meu próprio negócio.
            </p>
            <p>
              Desde então, desenvolvo sistemas para empresas locais, ajudando negócios
              a sair do papel e das planilhas confusas e a organizar o processo comercial.
              Hoje quero levar essa experiência para mais empresas, de qualquer segmento.
            </p>
          </div>
          <aside className="presence-proof" aria-label="Experiência profissional">
            <p>Sistemas para todo o processo comercial: captação, negociação, metas e pós-venda.</p>
            <figure className="presence-event">
              <img src="/img/breno-sbpc.webp" alt="Breno Luiz ao lado do letreiro da SBPC na UFF" width={1000} height={750} loading="lazy" />
              <figcaption>Na SBPC, na UFF.</figcaption>
            </figure>
            <div className="presence-credentials">
              <span>Vivência em processo de vendas</span>
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
          <div className="conversion-person">
            <img src="/img/breno-avatar.webp" alt="Foto de Breno Luiz" width={400} height={400} loading="lazy" />
            <span><strong>Breno Luiz</strong>Quem responde é quem desenvolve.</span>
          </div>
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
