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
    category: "CRM & VENDAS",
    title: "Seu CRM organiza contatos ou ajuda a vender?",
    description: "Dá para ter um CRM cheio de informação e, mesmo assim, ninguém saber o que fazer com ela. Veja como descobrir se o seu está ajudando a vender.",
    date: "02 out 2026",
    readingTime: "3 min de leitura",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Uma das coisas que mais aprendi no estágio foi essa: dá para ter um CRM cheio de informação e, mesmo assim, ninguém saber o que fazer com ela. Lá, acompanhei de perto como a empresa vendia e desenvolvi o sistema do zero em cima desse processo. Foi quando percebi que o problema quase nunca é falta de dado.",
          "Então, se você já tem um CRM, faça um teste rápido. Ele te mostra de onde vêm os seus melhores clientes? Em que etapa as vendas costumam travar? Se a meta do mês vai ser batida? Quem parou de comprar? Se a resposta for \"não sei\" para quase tudo, ele está organizando contatos, mas não está ajudando a vender.",
        ],
      },
      {
        heading: "Captação: saber de onde o cliente veio",
        paragraphs: [
          "Parece bobo, mas é uma das informações mais úteis que existem. Indicação, Instagram, anúncio, alguém que passou na frente da loja. Quando isso fica registrado, depois de alguns meses você consegue ver quais canais trazem gente que compra de verdade, e não só gente perguntando preço.",
        ],
      },
      {
        heading: "Negociação: onde as vendas param",
        paragraphs: [
          "Cada empresa vende de um jeito, então as etapas precisam ser as suas, e não as que vieram prontas na ferramenta. Com elas bem definidas, fica fácil ver onde as negociações se acumulam.",
          "E toda negociação precisa de duas coisas: alguém responsável e um próximo passo com data. Sem isso, tudo depende da memória do vendedor, e memória falha.",
        ],
      },
      {
        heading: "Metas: acompanhar durante o mês, e não depois",
        paragraphs: [
          "Se o resultado só aparece no fechamento, não tem mais o que fazer. Quando o sistema mostra quanto já foi vendido e quanto ainda está em negociação, o gestor consegue agir no meio do caminho: reforçar a prospecção, ajudar um vendedor ou focar nas propostas mais perto de fechar.",
        ],
      },
      {
        heading: "Pós-venda: o cliente que já comprou",
        paragraphs: [
          "Esse é o mais esquecido. Muito sistema simplesmente para de olhar para o cliente depois que ele paga. Só que quem já comprou e gostou costuma ser o cliente mais fácil de vender de novo.",
        ],
      },
      {
        heading: "Por onde eu começaria",
        paragraphs: [
          "Eu não tentaria resolver tudo de uma vez. Escolheria a etapa em que a empresa mais perde venda hoje, melhoraria essa parte e só depois partiria para a próxima.",
          "É assim que eu trabalho: primeiro entendo como a empresa vende, depois penso no sistema.",
        ],
      },
    ],
  },
  {
    slug: "prospeccao-quais-contatos-merecem-atencao",
    category: "PROSPECÇÃO & CAPTAÇÃO",
    title: "Prospecção: como saber quais contatos merecem mais atenção",
    description: "Quando todo contato é tratado igual, o vendedor gasta tempo com quem só estava pesquisando. Veja como separar quem precisa de atenção primeiro.",
    date: "14 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Se a sua equipe é pequena, ela não consegue dar a mesma atenção para todo mundo que entra em contato. E quando tudo é tratado igual, acontece o pior cenário: o vendedor passa a tarde com quem só estava pesquisando e responde tarde quem já estava pronto para comprar.",
          "Por isso, para mim, prospectar bem não é só conseguir mais contatos. É saber quais deles merecem atenção primeiro.",
        ],
      },
      {
        heading: "Comece registrando a origem",
        paragraphs: [
          "Toda vez que chegar um contato novo, anote de onde ele veio. Pode ser uma lista simples no cadastro: indicação, Instagram, Google, anúncio, visita. Quanto mais fácil for preencher, maior a chance de a equipe realmente preencher.",
          "Depois de alguns meses, essa informação faz muita diferença. Você para de decidir onde investir em divulgação no achismo e passa a decidir com base em quem realmente comprou.",
        ],
      },
      {
        heading: "Defina o que é um bom contato para a sua empresa",
        paragraphs: [
          "Isso muda de negócio para negócio. Pode ser a região, o tamanho do pedido, o prazo para comprar ou se a pessoa com quem você está falando é quem decide. Dois ou três critérios já bastam.",
          "Um exemplo: um pedido de orçamento com data para começar pede resposta rápida. Já alguém perguntando preço, sem muita informação, pode receber um acompanhamento mais leve, sem ser esquecido.",
        ],
      },
      {
        heading: "Deixe claro quem atende cada contato",
        paragraphs: [
          "Contato sem dono fica parado. Ou pior: dois vendedores falam com o mesmo cliente. Uma regra simples resolve, seja por região, por tipo de produto ou em rodízio.",
          "O sistema pode fazer essa distribuição sozinho e já avisar o vendedor com tudo o que se sabe sobre o contato.",
        ],
      },
      {
        heading: "Depois, olhe os números",
        paragraphs: [
          "Quantos contatos vieram de cada canal? Quantos viraram venda? Quanto tempo a equipe demorou para responder? Com essas respostas na mão, fica bem mais fácil saber onde insistir e o que dá para deixar de lado.",
        ],
      },
    ],
  },
  {
    slug: "meta-de-vendas-durante-o-mes",
    category: "FUNIL & METAS",
    title: "Meta de vendas: como saber durante o mês se ela vai ser batida",
    description: "Descobrir o resultado só no fechamento não deixa tempo para reagir. Veja como o funil e as metas por vendedor ajudam a acompanhar o mês enquanto ainda dá para agir.",
    date: "10 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Em muita empresa, a meta só é conferida no último dia do mês. Bateu, ótimo. Não bateu, resta explicar o porquê. O problema é que aí já não dá para fazer nada.",
          "Acompanhar durante o mês muda isso. Dá tempo de reforçar a prospecção, focar nas negociações mais quentes ou ajudar quem está com dificuldade. Para isso, você precisa enxergar duas coisas: o que já foi vendido e o que ainda está em negociação.",
        ],
      },
      {
        heading: "O funil precisa ser o seu",
        paragraphs: [
          "Um erro comum é usar etapas genéricas que vieram prontas em alguma ferramenta. O funil tem que mostrar o caminho real da venda na sua empresa: primeiro contato, visita, orçamento, negociação, fechamento, ou o que fizer sentido para vocês.",
          "E cada etapa precisa de uma regra clara. Quando uma negociação sai do orçamento e passa para a negociação? Se cada vendedor entende de um jeito, os números não servem para nada.",
        ],
      },
      {
        heading: "Use o histórico para prever",
        paragraphs: [
          "Com o tempo, dá para saber mais ou menos quantas negociações de cada etapa costumam fechar. Se de cada dez orçamentos uns três viram venda, você já consegue estimar o que esperar do que está em aberto.",
          "Não é uma conta exata, mas avisa cedo quando o volume em negociação não vai ser suficiente para chegar na meta.",
        ],
      },
      {
        heading: "Meta por vendedor, e não só da empresa",
        paragraphs: [
          "A meta geral esconde muita coisa. Um vendedor pode estar indo muito bem enquanto outro precisa de ajuda. Vendo o resultado de cada um, junto com o que ele tem em negociação, fica mais fácil orientar a equipe de um jeito justo.",
          "Eu também gosto de acompanhar as atividades, como contatos feitos e orçamentos enviados, porque elas mostram o esforço antes de o resultado aparecer.",
        ],
      },
      {
        heading: "Número serve para conversar",
        paragraphs: [
          "Um painel de metas sozinho não resolve nada. Ele funciona de verdade na reunião da semana: onde estamos, o que falta e quais negociações merecem atenção.",
          "Quando a equipe percebe que os números ajudam a vender, e não só a cobrar, ela passa a manter o sistema atualizado por conta própria.",
        ],
      },
    ],
  },
  {
    slug: "pos-venda-e-recompra",
    category: "PÓS-VENDA & RECOMPRA",
    title: "Quem já comprou é o cliente mais fácil de esquecer",
    description: "Depois do pagamento, muito cliente some do radar da empresa. Veja como o histórico de compras e alguns lembretes simples ajudam a vender de novo.",
    date: "07 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "A gente gasta muita energia para conquistar cliente novo. Enquanto isso, quem já comprou, gostou do atendimento e conhece a empresa muitas vezes nunca mais recebe uma mensagem sequer.",
          "Na maioria dos negócios, vender de novo para quem já é cliente é bem mais fácil do que convencer alguém do zero. Mas, para isso, a empresa precisa lembrar que esse cliente existe.",
        ],
      },
      {
        heading: "Tenha o histórico de compras à mão",
        paragraphs: [
          "O que o cliente comprou, quando e em quais condições. Com isso, o vendedor retoma a conversa sabendo com quem está falando, sem fazer o cliente repetir tudo, e consegue oferecer algo que faça sentido para ele.",
        ],
      },
      {
        heading: "Saiba quando ele deveria voltar",
        paragraphs: [
          "Muita coisa tem um ciclo natural: manutenção anual, reposição de estoque, renovação de contrato. O sistema pode avisar quando esse prazo estiver chegando e já criar a tarefa para o responsável.",
          "Também vale ficar de olho em quem comprava com frequência e parou. Só uma lista de clientes inativos já rende um bom trabalho para a equipe.",
        ],
      },
      {
        heading: "Pergunte se deu tudo certo",
        paragraphs: [
          "Uma mensagem alguns dias depois da compra, só para saber se está tudo certo, mostra cuidado. E ajuda a resolver um problema antes que ele vire reclamação.",
        ],
      },
      {
        heading: "Peça indicação na hora certa",
        paragraphs: [
          "Cliente satisfeito indica. Registrar quem indicou quem ajuda a agradecer e mostra quais clientes trazem mais negócios.",
          "Só que esse pedido funciona melhor logo depois de uma boa experiência, e não como mensagem automática disparada para todo mundo.",
        ],
      },
      {
        heading: "Dá para começar hoje",
        paragraphs: [
          "Você não precisa de um programa de fidelidade complicado. Puxe do seu cadastro quem não compra há mais tempo que o normal e faça alguns contatos. O resultado vai mostrar se vale transformar isso em rotina dentro do sistema.",
        ],
      },
    ],
  },
  {
    slug: "onde-um-sistema-encontra-receita-perdida",
    category: "PROCESSO COMERCIAL",
    title: "Onde sua empresa pode estar perdendo oportunidades de venda",
    description: "Antes de culpar o preço ou o mercado, vale olhar o caminho do cliente. Muita venda se perde em pontos que ninguém está acompanhando.",
    date: "25 set 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Quando as vendas caem, a primeira culpa costuma ir para o preço ou para o mercado. Às vezes é isso mesmo. Mas muita venda se perde em pontos do processo que ninguém está olhando.",
          "O exercício que eu sugiro é simples: percorrer o caminho do cliente, do primeiro contato até a recompra, e procurar onde ele fica sem atenção.",
        ],
      },
      {
        heading: "Antes da primeira conversa",
        paragraphs: [
          "Contato que chega e não é registrado. Pedido que ninguém sabe quem deve responder. Divulgação que ninguém mede. Um cliente que manda mensagem no sábado e só recebe resposta na terça já começa a conversa em desvantagem.",
          "Registrar quando o contato chegou, de onde veio e quem é o responsável já ajuda a enxergar esse tempo e corrigir a distribuição.",
        ],
      },
      {
        heading: "Durante a negociação",
        paragraphs: [
          "Proposta enviada sem próximo passo. Negociação que troca de vendedor e o histórico não vai junto. Orçamento parado na mesma etapa há semanas.",
          "Quando uma etapa do funil concentra muitas perdas, ela está mostrando onde mexer: na forma de apresentar a proposta, no tempo de resposta ou no tipo de contato que está chegando até ali.",
        ],
      },
      {
        heading: "No fechamento do mês",
        paragraphs: [
          "Se a equipe só descobre no último dia que não bateu a meta, não tem mais o que fazer. Acompanhar o que está em negociação ao longo do mês dá tempo de reagir.",
        ],
      },
      {
        heading: "Depois da venda",
        paragraphs: [
          "Cliente que comprou uma vez e nunca mais foi procurado. Problema na entrega que ninguém acompanhou. Indicação que poderia ter sido pedida e não foi. Na minha opinião, o pós-venda é a etapa mais esquecida e uma das mais simples de melhorar.",
        ],
      },
      {
        heading: "Escolha um ponto e comece por ele",
        paragraphs: [
          "Antes de pedir uma função nova no sistema, acompanhe alguns clientes do começo ao fim. Veja onde faltou informação, onde alguém ficou esperando e onde ninguém era responsável.",
          "Pegue a falha que mais pesa, ajuste e confira se melhorou. Isso dá muito mais segurança para decidir o próximo investimento.",
        ],
      },
    ],
  },
  {
    slug: "automacao-comercial-depois-do-sinal-de-compra",
    category: "CAPTAÇÃO & AUTOMAÇÃO",
    title: "Automação comercial: como responder quando o cliente demonstra interesse",
    description: "Automação ajuda a não deixar um cliente interessado esperando, mas, se for mal pensada, vira só mais notificação. Veja onde ela funciona de verdade.",
    date: "18 set 2026",
    readingTime: "2 min de leitura",
    sections: [
      {
        paragraphs: [
          "Um cliente responde à proposta perguntando o prazo de entrega. Outro volta a falar com a empresa depois de meses sumido. Os dois estão mostrando interesse, e a equipe precisa perceber isso e responder com a informação certa.",
          "Automação ajuda muito aqui: encaminha o pedido, avisa o responsável, cria a tarefa. Mas, se for mal pensada, vira só mais um monte de notificação que ninguém lê.",
        ],
      },
      {
        heading: "Nem todo interesse é urgente",
        paragraphs: [
          "Uma pergunta sobre preço pode ser só uma pesquisa ou a última dúvida antes de fechar. O que diferencia uma coisa da outra é o histórico: quem é esse contato, se já existe proposta, o que ficou combinado.",
          "Por isso, o aviso para o vendedor tem que vir com esse contexto. Receber só \"novo interesse\" obriga a pessoa a procurar tudo de novo antes de conseguir ajudar.",
        ],
      },
      {
        heading: "Mande para quem consegue responder",
        paragraphs: [
          "Uma dúvida técnica talvez precise de outra pessoa. Uma mudança na proposta fica com o vendedor que já atende o cliente. Deixar esses caminhos definidos evita que o pedido fique rodando sem dono.",
          "E combine prazos de resposta que a equipe consiga cumprir. Se tudo é urgente, nada é.",
        ],
      },
      {
        heading: "Automatize o que é repetitivo, não a conversa",
        paragraphs: [
          "Uma confirmação automática de recebimento é útil. Agora, uma dúvida específica pede alguém lendo e respondendo de verdade.",
          "E nada de programar mensagens repetidas ignorando o que o cliente respondeu. Se ele pediu para conversar no mês que vem, é isso que tem que guiar o próximo passo.",
        ],
      },
      {
        heading: "Pergunte para a equipe se está ajudando",
        paragraphs: [
          "Depois de colocar uma regra para funcionar, converse com quem recebe os avisos. Eles chegam para a pessoa certa? Têm informação suficiente? Algum se repete à toa?",
          "Ajuste com base nisso. A automação tem que tirar trabalho da equipe, e não criar mais.",
        ],
      },
    ],
  },
  {
    slug: "quando-vale-construir-um-crm-sob-medida",
    category: "SOFTWARE SOB MEDIDA",
    title: "Quando vale construir um CRM sob medida?",
    description: "Nem toda empresa precisa de um sistema feito do zero. Veja quando vale complementar o que você já usa e quando faz sentido construir um sistema próprio.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Essa é uma pergunta que eu gosto de responder com sinceridade: nem toda empresa precisa de um CRM feito do zero. Muita coisa se resolve com uma ferramenta pronta bem configurada, ou complementando o sistema que já existe.",
          "O que eu procuro entender primeiro é o que está impedindo a equipe de vender melhor. A partir daí, fica mais fácil ver qual caminho vale o investimento.",
        ],
      },
      {
        heading: "O problema é a ferramenta ou a configuração?",
        paragraphs: [
          "Às vezes o CRM parece ruim porque as etapas estão mal definidas, tem campo demais ou ninguém combinou como usar. Nesses casos, arrumar o processo resolve mais do que trocar de software.",
          "Agora, se para fechar uma venda o vendedor precisa consultar um sistema, fazer conta numa planilha e depois registrar tudo no CRM, aí já é outra história.",
        ],
      },
      {
        heading: "Olhe para o que acontece por fora",
        paragraphs: [
          "Repare nas planilhas paralelas que a equipe mantém e nas informações que só existem no WhatsApp. Quanto tempo isso toma? O que acontece quando alguém esquece de atualizar? Essas respostas mostram o que o sistema atual não está dando conta.",
          "Muitas vezes, integrar as ferramentas ou desenvolver só a parte que falta já resolve. Em outros casos, faz mais sentido um sistema novo, pensado do zero para o jeito que a empresa vende. Foi o que aconteceu no meu estágio: o sistema foi construído do zero, em volta do processo de vendas da empresa.",
        ],
      },
      {
        heading: "Compare o custo de manter, não só de construir",
        paragraphs: [
          "Ferramenta pronta tem assinatura, configuração e limites. Sistema próprio tem desenvolvimento, hospedagem e manutenção. Nenhuma das duas opções elimina o trabalho de cuidar do processo.",
          "Na hora de comparar, pense em quem vai usar, quais integrações vão ser necessárias e quem vai te ajudar quando der problema.",
        ],
      },
      {
        heading: "Comece pequeno",
        paragraphs: [
          "Se o sistema próprio fizer sentido, a primeira versão não precisa ter tudo. Ela pode começar por uma parte bem definida do processo, entrar em uso rápido e crescer a partir do que a equipe realmente precisa.",
        ],
      },
    ],
  },
  {
    slug: "proposta-enviada-precisa-de-proximo-passo",
    category: "PROPOSTAS & NEGOCIAÇÃO",
    title: "Enviou a proposta. E agora?",
    description: "Enviar o orçamento não encerra a venda, só abre uma nova etapa. Veja como organizar responsáveis, retornos e versões até o cliente decidir.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Muita gente trata o envio da proposta como tarefa concluída. Para a venda, na verdade, é ali que começa uma nova etapa: o cliente vai avaliar, tirar dúvidas e decidir.",
          "Se ninguém define o próximo passo, o acompanhamento fica dependendo de alguém lembrar de perguntar \"e aí, como ficou?\".",
        ],
      },
      {
        heading: "Anote o combinado junto com o orçamento",
        paragraphs: [
          "Além de valor e itens, vale registrar quem acompanha a negociação, qual versão foi enviada e o que ficou combinado. Tem data para conversar de novo? Outra pessoa precisa aprovar? Ficou alguma dúvida no ar?",
          "Por exemplo: o cliente disse que vai conversar com o sócio na quinta. Combine um retorno na sexta e deixe isso registrado. Assim o vendedor sabe quando entrar em contato e já sabe o que perguntar.",
        ],
      },
      {
        heading: "Todo retorno precisa de um dono",
        paragraphs: [
          "Defina quem vai fazer o contato e deixe a tarefa visível para essa pessoa, com prazo e contexto. Se o vendedor mudar, o histórico tem que permitir continuar a conversa sem o cliente precisar explicar tudo de novo.",
          "O sistema pode destacar as propostas com retorno atrasado ou sem próximo passo, mas sem transformar cada negociação aberta em alerta vermelho.",
        ],
      },
      {
        heading: "Cuidado com as versões",
        paragraphs: [
          "Durante a negociação, prazo, escopo e condições mudam. Quando essas mudanças ficam espalhadas em arquivos e mensagens, é fácil alguém mandar a versão errada. Manter tudo ligado à mesma negociação resolve.",
          "Registrar as objeções do cliente também ajuda a preparar o próximo contato. Conversar sobre prazo é bem diferente de conversar sobre preço.",
        ],
      },
      {
        heading: "Saber encerrar também faz parte",
        paragraphs: [
          "Nem toda proposta vira venda, e tudo bem. O importante é separar o que está ativo do que foi adiado e do que acabou. Deixar tudo aberto só bagunça a visão da equipe.",
          "Quando encerrar, anote o motivo que o cliente deu. Se ele só parou de responder, deixe isso claro também. E, se houver interesse mais para a frente, combine uma data para retomar.",
        ],
      },
    ],
  },
  {
    slug: "integrar-sistemas-sem-multiplicar-confusao",
    category: "INTEGRAÇÕES",
    title: "Integrar sistemas sem multiplicar a confusão",
    description: "Integrar evita retrabalho, mas, sem regra, só espalha o erro mais rápido. Veja o que definir antes de conectar as suas ferramentas.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Quando a equipe vive copiando informação de um sistema para outro, integrar parece a solução óbvia. E muitas vezes é. Mas integrar sem regra nenhuma só faz o erro se espalhar mais rápido.",
          "Antes de pensar na parte técnica, eu sempre acompanho uma tarefa da equipe: onde ela consulta os dados, o que copia, quem confere. É isso que define o que a integração precisa fazer.",
        ],
      },
      {
        heading: "Cada informação precisa de um dono",
        paragraphs: [
          "Pense numa empresa que usa um CRM e um sistema financeiro. O CRM cuida da negociação, o financeiro confirma o pagamento. Se os dois podem mudar a situação do pagamento sem regra, cada um vai mostrar uma resposta diferente.",
          "Não precisa existir um sistema que manda em tudo. Precisa estar claro de onde vem cada informação e o que acontece quando ela muda.",
        ],
      },
      {
        heading: "Leve só o que a próxima etapa precisa",
        paragraphs: [
          "Sincronizar todos os campos parece prático, mas cada informação transferida vira mais uma coisa para manter.",
          "Se uma venda aprovada precisa virar pedido, comece pelo essencial: cliente, itens, condições e a referência da negociação. Anotação interna que não ajuda a montar o pedido pode ficar onde está.",
        ],
      },
      {
        heading: "Pense no que acontece quando falhar",
        paragraphs: [
          "Porque vai falhar em algum momento. Um serviço sai do ar, uma informação chega incompleta. A equipe precisa perceber que o pedido não chegou, entender o motivo e saber quem resolve. Integração que falha em silêncio deixa todo mundo esperando por algo que nunca vai chegar.",
          "Outro cuidado importante: evitar que uma nova tentativa crie o mesmo pedido duas vezes.",
        ],
      },
      {
        heading: "Teste um caminho antes de ligar tudo",
        paragraphs: [
          "Comece com um fluxo só e teste situações reais: dado incompleto, alteração depois do envio, tentativa repetida.",
          "Depois, pergunte para a equipe se ela passou a copiar menos coisa e se percebe quando algo dá errado. Se a resposta for sim para as duas, a integração está cumprindo o papel dela.",
        ],
      },
    ],
  },
  {
    slug: "como-fazer-a-equipe-usar-o-novo-sistema",
    category: "EQUIPE & PROCESSOS",
    title: "Como fazer a equipe usar o novo sistema?",
    description: "Se a equipe continua na planilha depois da entrega, quase sempre existe um motivo prático. Veja como preparar a mudança e facilitar o uso do sistema.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "O sistema está pronto, todo mundo tem acesso e já teve a apresentação. Uma semana depois, metade da equipe continua na planilha. Antes de achar que é resistência à mudança, vale descobrir o que está acontecendo de verdade.",
          "Na maioria das vezes, existe um motivo prático: uma tarefa que ficou mais lenta, um campo chato de preencher, uma dúvida que ninguém resolveu.",
        ],
      },
      {
        heading: "Escute quem usa todo dia",
        paragraphs: [
          "Quem atende cliente conhece detalhes que não aparecem em nenhum fluxograma. Peça para essa pessoa mostrar como registra uma conversa, monta uma proposta e organiza os retornos. Foi acompanhando o dia a dia de quem vendia, no meu estágio, que entendi do que o sistema precisava de verdade.",
          "Trazer a equipe para perto antes da entrega ajuda a acertar. Não dá para atender todo pedido, mas dá para explicar as escolhas e ouvir o que pode atrapalhar.",
        ],
      },
      {
        heading: "Ensine com uma tarefa de verdade",
        paragraphs: [
          "Em vez de mostrar todos os menus de uma vez, faça junto uma tarefa do começo ao fim: cadastrar o contato, registrar o pedido, enviar a proposta, agendar o retorno. A pessoa aprende onde está o que ela precisa para trabalhar.",
          "Deixe também um guia curto com as dúvidas mais comuns e combine a quem recorrer quando algo não funcionar.",
        ],
      },
      {
        heading: "Defina onde cada coisa é registrada",
        paragraphs: [
          "Se parte da equipe usa o sistema e parte usa a planilha, ninguém sabe qual informação está certa. Deixe claro onde entram os novos atendimentos e o que fazer com o histórico antigo.",
          "A transição pode ser feita por etapas, desde que as regras estejam claras para todo mundo.",
        ],
      },
      {
        heading: "Acompanhe as primeiras semanas",
        paragraphs: [
          "Pergunte o que ficou mais fácil e onde ainda trava. Um campo obrigatório pode não fazer sentido para todo atendimento. Uma tarefa comum pode estar exigindo clique demais. Ajustes pequenos fazem muita diferença nessa fase.",
          "E repare se os gestores usam as informações do sistema nas reuniões. Quando a equipe vê os dados sendo usados, entende por que vale manter tudo em dia.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
