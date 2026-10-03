export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  sections: ArticleSection[];
};

// Para publicar uma nova matéria manualmente, duplique um item abaixo,
// altere o slug, os metadados e o conteúdo das seções.
export const articles: Article[] = [
  {
    slug: "seu-crm-organiza-ou-ajuda-a-vender",
    category: "CRM & RECEITA",
    title: "Seu CRM organiza contatos ou ajuda a vender?",
    description: "Registrar dados é o mínimo. Um sistema comercial valioso transforma informação em próximo passo, velocidade e oportunidade de receita.",
    date: "02 out 2026",
    readingTime: "8 min de leitura",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Muitos CRMs conseguem responder onde cada oportunidade está. Poucos ajudam a equipe a decidir o que fazer agora para que ela avance. Essa diferença separa um banco de dados organizado de um sistema que participa da venda.",
          "Organização tem valor, mas não deveria ser o destino final. Se o software exige preenchimento constante e devolve apenas relatórios, a empresa pode estar pagando para documentar o passado enquanto as melhores oportunidades continuam dependendo de memória e iniciativa individual.",
        ],
      },
      {
        heading: "O teste do próximo passo",
        paragraphs: [
          "Abra qualquer oportunidade no seu CRM e faça uma pergunta simples: está claro qual é a próxima ação, quem deve executá-la e até quando? Se a resposta depende de interpretar notas ou procurar uma conversa em outro lugar, o sistema ainda está apenas registrando.",
          "Um processo comercial ganha força quando cada avanço cria a ação seguinte. Uma reunião realizada pede um retorno. Uma proposta enviada pede acompanhamento. Um período sem resposta pede uma decisão. O software deve tornar essa sequência visível e difícil de esquecer.",
        ],
      },
      {
        heading: "Velocidade também é parte da venda",
        paragraphs: [
          "Nem toda perda acontece por uma proposta ruim. Algumas começam quando um lead espera demais, quando uma informação não chega à pessoa certa ou quando uma intenção de compra passa despercebida.",
          "Alertas, distribuição automática, prioridades e integrações bem escolhidas reduzem esse intervalo. A automação não substitui o vendedor; ela protege o tempo e a atenção que a venda exige.",
        ],
      },
      {
        heading: "Os dados precisam mudar decisões",
        paragraphs: [
          "Um painel cheio de números não garante clareza. Métricas úteis revelam onde as oportunidades param, quanto tempo permanecem ali e quais ações costumam produzir avanço.",
          "O objetivo não é medir tudo. É criar um ciclo em que o sistema orienta a operação, a operação produz dados confiáveis e esses dados ajudam a melhorar a próxima decisão comercial.",
        ],
      },
      {
        heading: "Organização é a base, não o retorno",
        paragraphs: [
          "Um bom CRM mantém a casa em ordem. Um CRM estratégico também ajuda a equipe a agir no momento certo, protege oportunidades e mostra onde o processo pode melhorar.",
          "É essa mudança que procuro ao desenhar software comercial: sair do registro passivo e construir um sistema que trabalhe, todos os dias, pela próxima venda.",
        ],
      },
    ],
  },
  {
    slug: "onde-um-sistema-encontra-receita-perdida",
    category: "PROCESSO COMERCIAL",
    title: "Onde um sistema encontra a receita que sua operação perde",
    description: "Oportunidades raramente desaparecem de uma vez. Elas escapam em atrasos, transferências confusas e próximos passos que ninguém assumiu.",
    date: "25 set 2026",
    readingTime: "7 min de leitura",
    sections: [
      {
        paragraphs: [
          "Receita perdida nem sempre aparece como um grande problema. Muitas vezes ela está distribuída em pequenos intervalos: um lead que esperou, uma proposta sem retorno, uma negociação que trocou de responsável sem contexto.",
          "Quando esses pontos se repetem, deixam de ser exceções e passam a fazer parte do processo. É justamente aí que um sistema pode criar valor: não apenas mostrando o problema, mas impedindo que ele continue invisível.",
        ],
      },
      {
        heading: "Entre o interesse e a primeira resposta",
        paragraphs: [
          "A entrada de um lead deveria iniciar uma sequência clara. Classificar, distribuir, informar contexto e definir o tempo de resposta são tarefas que podem acontecer sem depender de alguém vigiar uma caixa de entrada.",
          "Quando o sistema reconhece origem, perfil ou intenção, ele pode encaminhar a oportunidade com mais precisão e preservar o momento em que o interesse está mais vivo.",
        ],
      },
      {
        heading: "Entre uma conversa e a próxima",
        paragraphs: [
          "Boa parte do trabalho comercial acontece entre reuniões. É quando compromissos precisam virar tarefas, dúvidas precisam chegar a outras áreas e materiais precisam ser enviados.",
          "Um sistema útil transforma esses combinados em continuidade. Ele reduz a chance de uma boa conversa terminar sem consequência prática.",
        ],
      },
      {
        heading: "Entre a proposta e a decisão",
        paragraphs: [
          "Enviar uma proposta não encerra o trabalho. A partir dali, tempo, objeções e envolvimento dos decisores passam a importar ainda mais.",
          "O software pode sinalizar silêncio, organizar versões, registrar objeções e ajudar a equipe a separar negociações que pedem atenção daquelas que já não têm movimento real.",
        ],
      },
      {
        heading: "Comece pelo vazamento, não pela funcionalidade",
        paragraphs: [
          "Antes de pedir uma nova tela, vale localizar o momento em que a oportunidade perde velocidade ou responsabilidade. A melhor funcionalidade costuma nascer de uma falha concreta do processo.",
          "Quando o desenho começa pela receita que escapa, o sistema deixa de ser um custo de organização e passa a ter uma razão econômica clara para existir.",
        ],
      },
    ],
  },
  {
    slug: "automacao-comercial-depois-do-sinal-de-compra",
    category: "AUTOMAÇÃO",
    title: "Automação comercial: o que deve acontecer depois de um sinal de compra",
    description: "Automatizar não é disparar mais mensagens. É reconhecer intenção e coordenar a melhor resposta enquanto ela ainda importa.",
    date: "18 set 2026",
    readingTime: "6 min de leitura",
    sections: [
      {
        paragraphs: [
          "Uma visita recorrente à página de preços, uma resposta a uma proposta ou o retorno de um cliente antigo podem indicar intenção. O valor da automação está no que acontece depois desse sinal.",
          "Automatizar bem não significa remover pessoas da venda. Significa garantir que contexto e prioridade cheguem a elas antes que a oportunidade esfrie.",
        ],
      },
      {
        heading: "Primeiro: reunir contexto",
        paragraphs: [
          "Um sinal isolado pode enganar. Antes de criar uma tarefa urgente, o sistema precisa combinar informações: quem é o contato, qual relação já existe, o que ele consultou e em que estágio está.",
          "Essa leitura evita automações barulhentas e dá ao vendedor uma razão concreta para agir.",
        ],
      },
      {
        heading: "Depois: definir prioridade e responsável",
        paragraphs: [
          "Nem todo evento merece a mesma resposta. Regras simples podem separar curiosidade de intenção, distribuir a oportunidade e indicar um prazo coerente com seu potencial.",
          "O objetivo é fazer a atenção comercial acompanhar a qualidade do sinal, não apenas a ordem em que os dados chegaram.",
        ],
      },
      {
        heading: "Por fim: apoiar uma abordagem humana",
        paragraphs: [
          "A automação pode preparar o terreno, mas a conversa precisa fazer sentido para quem está do outro lado. Histórico, interesse e momento ajudam a criar uma abordagem relevante em vez de uma mensagem genérica.",
          "O melhor fluxo é aquele que desaparece para o cliente: ele percebe agilidade e contexto, não a engrenagem que coordenou tudo.",
        ],
      },
      {
        heading: "Automação boa termina em aprendizado",
        paragraphs: [
          "Depois da ação, o sistema deve registrar o resultado. O sinal realmente indicava intenção? A resposta veio no tempo certo? A abordagem gerou avanço?",
          "Sem esse retorno, a regra apenas se repete. Com ele, a operação aprende e melhora a forma como reconhece e atende as próximas oportunidades.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
