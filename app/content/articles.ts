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
    description: "Seu CRM mostra quem precisa de um retorno e o que fazer em seguida? Veja como tornar as informações mais úteis para a equipe de vendas.",
    date: "02 out 2026",
    readingTime: "2 min de leitura",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Você abre o CRM, encontra os contatos e vê em que etapa está cada negociação. Mas consegue saber quais clientes precisam de um retorno hoje? É nessa hora que dá para perceber se o sistema também ajuda no trabalho de vender.",
          "Manter o histórico organizado é importante. O problema aparece quando a equipe passa tempo preenchendo campos e, mesmo assim, precisa confiar na memória para acompanhar uma proposta ou lembrar um compromisso.",
        ],
      },
      {
        heading: "O teste do próximo passo",
        paragraphs: [
          "Escolha uma negociação no seu CRM e confira três coisas: o que precisa ser feito, quem vai fazer e até quando. Se você precisa procurar essas respostas em mensagens ou perguntar a outra pessoa, há espaço para melhorar.",
          "Imagine que o cliente pediu uma proposta e combinou um retorno para sexta-feira. O sistema pode guardar esse combinado e mostrar a tarefa para o vendedor no dia certo. É uma ajuda simples, mas evita que o atendimento dependa de alguém lembrar sozinho.",
        ],
      },
      {
        heading: "Velocidade também é parte da venda",
        paragraphs: [
          "Às vezes, uma boa oportunidade se perde porque o contato ficou esperando ou porque a dúvida do cliente não chegou a quem podia responder. Vale olhar para esses intervalos antes de concluir que o problema está no preço ou na proposta.",
          "Distribuir novos contatos, avisar sobre retornos vencidos e reunir informações do cliente são formas de ajudar. Os avisos precisam ser bem escolhidos para que a equipe consiga distinguir o que merece atenção.",
        ],
      },
      {
        heading: "O que os relatórios ajudam a perceber?",
        paragraphs: [
          "Um relatório pode mostrar quantas propostas estão abertas, quais estão sem retorno e há quanto tempo cada cliente espera. Essas informações dão à equipe uma forma de organizar o dia e ao gestor uma visão do que precisa ser revisto.",
          "Eu começaria pelas perguntas que vocês realmente precisam responder. Depois, conferiria se os registros são confiáveis e se o relatório ajuda alguém a tomar uma decisão.",
        ],
      },
      {
        heading: "Comece por uma melhoria pequena",
        paragraphs: [
          "Não é preciso mudar tudo de uma vez. Você pode começar exigindo um responsável e um próximo passo para cada proposta em andamento. Observe se isso torna o acompanhamento mais fácil.",
          "É esse tipo de melhoria que procuro ao desenvolver um CRM: informação que a equipe consegue usar para atender melhor e manter os combinados em dia.",
        ],
      },
    ],
  },
  {
    slug: "onde-um-sistema-encontra-receita-perdida",
    category: "PROCESSO COMERCIAL",
    title: "Onde sua empresa pode estar perdendo oportunidades de venda",
    description: "Retornos atrasados, propostas esquecidas e trocas de responsável podem prejudicar o atendimento. Saiba onde procurar essas falhas.",
    date: "25 set 2026",
    readingTime: "2 min de leitura",
    sections: [
      {
        paragraphs: [
          "Um cliente pediu informações e ficou esperando. Outro recebeu uma proposta, mas ninguém voltou a falar com ele. Uma negociação mudou de responsável e o novo vendedor não sabia o que já tinha sido combinado. São situações que vale investigar quando as vendas não andam como esperado.",
          "Não dá para afirmar que todo atraso custa uma venda. Ainda assim, quando essas falhas se repetem, a empresa precisa entender por que acontecem e o que pode fazer para atender com mais cuidado.",
        ],
      },
      {
        heading: "Entre o interesse e a primeira resposta",
        paragraphs: [
          "Quando chega um contato interessado, quem recebe o aviso? Quem responde? Se ninguém sabe ao certo, o pedido pode ficar parado mesmo com pessoas disponíveis para atender.",
          "O sistema pode encaminhar o contato para um responsável e registrar quando houve a primeira resposta. Com isso, fica mais fácil conferir se os pedidos estão sendo atendidos e ajustar a distribuição quando necessário.",
        ],
      },
      {
        heading: "Entre uma conversa e a próxima",
        paragraphs: [
          "Depois de uma conversa, costuma haver algo a fazer: enviar um documento, confirmar um prazo ou tirar uma dúvida com outra área. Se isso fica apenas nas mensagens, a tarefa pode se perder entre os outros atendimentos.",
          "Registrar o combinado com responsável e prazo ajuda a equipe a continuar o trabalho. Na troca de vendedor, esse histórico também evita que o cliente tenha de explicar tudo novamente.",
        ],
      },
      {
        heading: "Entre a proposta e a decisão",
        paragraphs: [
          "Depois do envio, vale saber se o cliente recebeu a proposta, se tem alguma dúvida e quando pretende decidir. O retorno deve respeitar o que foi combinado, sem virar uma sequência de cobranças.",
          "Uma lista de propostas com a data do próximo contato já ajuda. Separar negociações ativas, adiadas e encerradas também torna a visão da equipe mais próxima do que está acontecendo.",
        ],
      },
      {
        heading: "Escolha um problema para resolver primeiro",
        paragraphs: [
          "Antes de pedir uma nova função, acompanhe alguns atendimentos do início ao fim. Procure onde faltou informação, onde houve espera e quais tarefas ficaram sem responsável.",
          "Escolha uma falha recorrente e faça um ajuste que a equipe consiga usar. Depois, confira se o atendimento melhorou. Isso dá uma base mais segura para decidir o próximo investimento no sistema.",
        ],
      },
    ],
  },
  {
    slug: "automacao-comercial-depois-do-sinal-de-compra",
    category: "AUTOMAÇÃO",
    title: "Automação comercial: como responder quando o cliente demonstra interesse",
    description: "Veja como usar tarefas e avisos para dar atenção a um cliente interessado, sem exagerar nas mensagens ou tratar todo contato como urgente.",
    date: "18 set 2026",
    readingTime: "2 min de leitura",
    sections: [
      {
        paragraphs: [
          "Um cliente responde à proposta perguntando sobre o prazo de entrega. Outro volta a entrar em contato depois de alguns meses. São situações em que a equipe precisa perceber o interesse e conseguir responder com as informações certas.",
          "A automação pode ajudar a encaminhar o pedido, avisar o responsável e criar uma tarefa. Para funcionar bem, as regras precisam considerar o histórico da conversa e o tipo de resposta que o cliente espera.",
        ],
      },
      {
        heading: "Entenda o pedido antes de criar urgência",
        paragraphs: [
          "Uma dúvida sobre preço pode ser uma primeira pesquisa ou a última pergunta antes de fechar uma compra. O histórico ajuda a distinguir essas situações. Quem é o contato? Já existe uma proposta? O que ficou combinado?",
          "O aviso ao vendedor precisa trazer esse contexto. Receber apenas uma notificação de novo interesse obriga a pessoa a procurar tudo de novo antes de conseguir ajudar.",
        ],
      },
      {
        heading: "Encaminhe para quem pode responder",
        paragraphs: [
          "Uma pergunta técnica pode precisar de outra pessoa, enquanto uma alteração na proposta pode ficar com o vendedor que já atende o cliente. Definir esses caminhos evita que o pedido circule sem dono.",
          "Também vale combinar prazos de resposta possíveis de cumprir. Se tudo aparece como urgente, a equipe acaba sem um critério para organizar o trabalho.",
        ],
      },
      {
        heading: "Deixe espaço para uma conversa de verdade",
        paragraphs: [
          "Uma confirmação automática de recebimento pode ser útil. Já uma dúvida específica costuma pedir alguém que leia a mensagem e responda ao que foi perguntado. Escolher o que automatizar exige esse cuidado.",
          "Evite programar contatos repetidos sem considerar as respostas do cliente. Se ele pediu para conversar no mês seguinte, esse combinado precisa orientar as próximas ações.",
        ],
      },
      {
        heading: "Confira se os avisos estão ajudando",
        paragraphs: [
          "Depois de colocar uma regra em uso, converse com a equipe. Os avisos chegam à pessoa certa? Trazem informação suficiente? Algum deles se repete sem necessidade?",
          "Ajuste a automação conforme essas respostas. Ela precisa facilitar o atendimento e reduzir esquecimentos, sem criar mais uma lista de notificações que ninguém consegue acompanhar.",
        ],
      },
    ],
  },
  {
    slug: "quando-vale-construir-um-crm-sob-medida",
    category: "SOFTWARE SOB MEDIDA",
    title: "Quando vale construir um CRM sob medida?",
    description: "Você precisa de um sistema próprio ou pode ajustar o que já usa? Veja o que considerar antes de investir em um CRM sob medida.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Ter um processo diferente não significa que sua empresa precisa de um CRM próprio. Muitas necessidades podem ser atendidas com uma ferramenta pronta bem configurada. Antes de desenvolver, eu procuraria entender o que realmente está impedindo a equipe de trabalhar melhor.",
          "Eu começaria por uma pergunta: qual dificuldade justifica esse investimento? Se uma ferramenta pronta consegue resolvê-la com uma configuração razoável, vale avaliar esse caminho antes de partir para um projeto próprio.",
        ],
      },
      {
        heading: "O problema é a ferramenta ou a configuração?",
        paragraphs: [
          "Um CRM pode parecer inadequado porque as etapas estão mal definidas, os campos são excessivos ou ninguém combinou como registrar os retornos. Nesses casos, revisar a configuração e o processo pode ajudar mais do que trocar de software.",
          "Imagine uma equipe que deixa propostas sem acompanhamento. Se a ferramenta já permite criar tarefas e responsáveis, talvez falte uma regra de uso. Se a próxima ação depende de dados espalhados por outros sistemas e exige conferências manuais constantes, existe uma questão diferente a investigar.",
        ],
      },
      {
        heading: "Procure o trabalho que acontece por fora",
        paragraphs: [
          "Observe as planilhas que a equipe mantém por fora e as informações que precisa conferir por mensagem. Quanto tempo isso toma? O que acontece quando alguém esquece de atualizar um desses lugares? Essas respostas ajudam a identificar o que o sistema atual não está atendendo.",
          "Imagine que, para enviar uma proposta, o vendedor consulta disponibilidade em um sistema, calcula condições em uma planilha e registra a negociação no CRM. Pode fazer sentido integrar essas ferramentas antes de construir um CRM inteiro. O desenvolvimento sob medida também pode resolver apenas uma parte do trabalho.",
        ],
      },
      {
        heading: "Compare o custo de manter, não só de construir",
        paragraphs: [
          "Uma ferramenta pronta tem assinatura, configuração e possíveis limites. Um sistema próprio exige desenvolvimento, hospedagem, manutenção e alguém responsável por sua evolução. Nenhuma opção elimina o trabalho de cuidar do processo.",
          "Ao comparar as alternativas, confira quem vai usar, quais integrações serão necessárias e quem poderá ajudar quando houver um problema. Peça para ver como cada opção atende às tarefas da sua equipe, além da apresentação inicial.",
        ],
      },
      {
        heading: "Resolva uma parte antes de ampliar",
        paragraphs: [
          "Se o desenvolvimento fizer sentido, a primeira versão não precisa reproduzir tudo que existe no mercado. Ela pode começar por um fluxo bem definido, como acompanhar propostas com suas condições e próximos passos.",
          "Antes de ampliar, confira se a equipe consegue usar essa primeira versão e se precisa de menos controles por fora. Também precisa haver alguém responsável pela manutenção. São esses cuidados que ajudam um CRM próprio a continuar útil depois da entrega.",
        ],
      },
    ],
  },
  {
    slug: "proposta-enviada-precisa-de-proximo-passo",
    category: "PROPOSTAS & NEGOCIAÇÃO",
    title: "Enviou a proposta. E agora?",
    description: "Enviar o orçamento é uma etapa. Veja como organizar responsáveis, retornos e versões para acompanhar a negociação até uma decisão clara.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Uma proposta enviada pode parecer uma tarefa concluída. Para a negociação, porém, ela abre uma nova etapa: o cliente precisa avaliar condições, esclarecer dúvidas e decidir. Sem um próximo passo, o acompanhamento acaba dependendo de alguém lembrar de perguntar como ficou.",
          "Um sistema pode dar continuidade a esse trabalho, mas primeiro é preciso definir o que a equipe considera uma proposta em andamento. Apenas guardar um arquivo e marcar a data de envio não explica o que falta para chegar a uma decisão.",
        ],
      },
      {
        heading: "Registre o combinado junto com o orçamento",
        paragraphs: [
          "Além de valor e itens, vale registrar quem acompanha a negociação, qual versão foi enviada e o que ficou combinado com o cliente. Existe uma data para conversar novamente? Outra pessoa precisa aprovar? Alguma dúvida ficou pendente?",
          "Imagine que o cliente vai discutir a proposta com o sócio na quinta-feira. Vocês podem combinar um retorno na sexta e deixar isso registrado. Assim, o vendedor sabe quando entrar em contato e pode perguntar como foi a conversa.",
        ],
      },
      {
        heading: "Dê um responsável a cada retorno",
        paragraphs: [
          "Defina quem vai fazer o retorno e deixe a tarefa visível para essa pessoa, com prazo e informação suficiente para agir. Se houver troca de vendedor, o histórico deve permitir que a conversa continue sem pedir ao cliente que explique tudo novamente.",
          "O sistema pode destacar propostas com retorno vencido ou sem próxima ação. O objetivo é ajudar a equipe a identificar o que precisa de atenção, sem transformar cada negociação aberta em um alerta urgente.",
        ],
      },
      {
        heading: "Cuide das versões e das dúvidas",
        paragraphs: [
          "Durante uma negociação, escopo, prazo e condições podem mudar. Quando essas alterações ficam espalhadas em arquivos e mensagens, é fácil consultar uma proposta antiga ou perder o motivo de uma revisão.",
          "Manter as versões ligadas à mesma oportunidade permite enxergar o que mudou e qual documento está em avaliação. Registrar dúvidas e objeções também ajuda a preparar o retorno: uma conversa sobre prazo exige uma abordagem diferente de uma conversa sobre preço.",
        ],
      },
      {
        heading: "Acompanhar também é saber encerrar",
        paragraphs: [
          "Nem toda proposta vai virar venda. A equipe precisa distinguir uma negociação ativa de uma decisão adiada ou de uma oportunidade encerrada. Deixar tudo aberto dificulta entender o que realmente está em andamento.",
          "Ao encerrar, registre o motivo que o cliente informou. Se você não sabe por que ele deixou de responder, mantenha isso claro. Quando houver interesse futuro, combine uma data para retomar. E, se a decisão for não seguir, respeite esse encerramento.",
        ],
      },
    ],
  },
  {
    slug: "integrar-sistemas-sem-multiplicar-confusao",
    category: "INTEGRAÇÕES",
    title: "Integrar sistemas sem multiplicar a confusão",
    description: "Antes de conectar suas ferramentas, defina quais informações precisam passar de uma para outra e o que fazer quando algo não chega como esperado.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "Quando a equipe copia informações de um sistema para outro, a integração parece uma solução óbvia. Ela pode reduzir esse trabalho, mas conectar ferramentas sem definir as regras também pode espalhar dados incorretos com mais velocidade.",
          "Antes de pensar na conexão técnica, eu acompanharia uma tarefa da equipe. Onde ela consulta os dados? O que copia para outra ferramenta? Quem confere o resultado? Isso ajuda a definir exatamente o que a integração precisa fazer.",
        ],
      },
      {
        heading: "Defina quem responde por cada informação",
        paragraphs: [
          "Imagine uma operação que usa CRM e sistema financeiro. O CRM pode cuidar da negociação, enquanto o financeiro confirma pagamentos. Se os dois puderem alterar a situação de pagamento sem uma regra clara, a equipe pode encontrar respostas diferentes para a mesma pergunta.",
          "Não é necessário que uma ferramenta seja a referência para tudo. O importante é decidir a origem de cada informação e o que acontece quando ela muda. Dados de contato, condições da proposta e pagamentos podem ter responsáveis e caminhos distintos.",
        ],
      },
      {
        heading: "Transfira o que a próxima tarefa precisa",
        paragraphs: [
          "Sincronizar todos os campos nem sempre ajuda. Cada informação transferida cria uma responsabilidade: manter seu significado, respeitar quem pode acessá-la e cuidar de alterações futuras nas ferramentas.",
          "Pense em uma venda aprovada que precisa virar um pedido. A integração pode começar com cliente, itens, condições aprovadas e identificação da negociação. Anotações internas que não ajudam a executar o pedido não precisam ser copiadas junto.",
        ],
      },
      {
        heading: "Planeje o que acontece quando a conexão falha",
        paragraphs: [
          "Um serviço pode ficar indisponível ou recusar uma informação incompleta. A equipe precisa conseguir perceber que o pedido não chegou, entender o motivo e saber quem vai resolver. Uma integração silenciosa pode deixar a operação esperando por algo que nunca aconteceu.",
          "Também é importante evitar que uma nova tentativa crie o mesmo pedido duas vezes. No desenho da solução, eu incluiria uma identificação da operação, um registro do resultado e uma forma de conferir o que está pendente. Esses cuidados protegem a continuidade do trabalho.",
        ],
      },
      {
        heading: "Valide um caminho antes de conectar tudo",
        paragraphs: [
          "Comece com um fluxo delimitado e confira situações diferentes: dados incompletos, alterações após o envio e tentativas repetidas. Envolva quem usa as ferramentas para confirmar se a informação chega no lugar e no momento necessários.",
          "Depois, converse com a equipe para conferir se ela passou a copiar menos dados e se consegue perceber quando há um problema. Uma boa integração deve facilitar essas tarefas sem deixar as pessoas na dúvida sobre o que aconteceu.",
        ],
      },
    ],
  },
  {
    slug: "como-fazer-a-equipe-usar-o-novo-sistema",
    category: "EQUIPE & PROCESSOS",
    title: "Como fazer a equipe usar o novo sistema?",
    description: "Se a equipe continua nas planilhas depois da entrega, vale olhar para a rotina. Veja como preparar a mudança e facilitar o uso do sistema.",
    date: "03 out 2026",
    readingTime: "3 min de leitura",
    sections: [
      {
        paragraphs: [
          "O sistema está pronto, os acessos foram criados e a equipe participou de uma apresentação. Alguns dias depois, as planilhas continuam sendo atualizadas e as informações chegam incompletas ao software. Antes de concluir que as pessoas resistem à mudança, vale entender o que está acontecendo.",
          "Pode haver uma tarefa que ficou mais demorada, um campo difícil de preencher ou uma dúvida que ninguém soube resolver. Colocar um sistema em uso exige acompanhar essas dificuldades e combinar como ele vai entrar na rotina.",
        ],
      },
      {
        heading: "Ouça quem faz o trabalho todos os dias",
        paragraphs: [
          "Quem atende os clientes costuma conhecer detalhes que não aparecem na descrição do processo. Peça para essa pessoa mostrar como registra uma conversa, prepara uma proposta e organiza os retornos. Observe também as consultas que precisa fazer em outras ferramentas.",
          "Trazer a equipe para essa conversa antes da entrega ajuda a identificar necessidades e testar se a solução faz sentido. Não é preciso atender a todo pedido, mas vale explicar as escolhas e ouvir o que pode dificultar o uso.",
        ],
      },
      {
        heading: "Ensine com uma tarefa de verdade",
        paragraphs: [
          "Em vez de apresentar todos os menus de uma vez, acompanhe uma tarefa do início ao fim. Por exemplo: cadastrar um contato, registrar o pedido, enviar uma proposta e agendar o retorno. A pessoa aprende onde encontrar o que precisa para trabalhar.",
          "Use exemplos de treinamento e deixe um guia curto para as dúvidas mais comuns. Também combine a quem recorrer quando algo não funcionar. Saber que existe ajuda torna a mudança menos difícil.",
        ],
      },
      {
        heading: "Combine onde cada informação será registrada",
        paragraphs: [
          "Se parte da equipe usa o sistema e outra parte continua na planilha, ninguém sabe qual informação está atualizada. Defina onde serão registrados os novos atendimentos, quem confere os dados e como lidar com o histórico antigo.",
          "A transição pode acontecer por etapas, desde que as regras estejam claras. Se um controle antigo ainda precisa continuar, explique para quê e até quando. Manter registros duplicados sem uma finalidade definida aumenta o trabalho e a chance de divergência.",
        ],
      },
      {
        heading: "Acompanhe os primeiros dias de uso",
        paragraphs: [
          "Pergunte o que ficou mais fácil e onde a equipe ainda precisa de ajuda. Um campo obrigatório pode não fazer sentido para todos os atendimentos. Uma tarefa frequente pode exigir cliques demais. Pequenos ajustes podem melhorar bastante a rotina.",
          "Confira também se os combinados estão sendo cumpridos e se os gestores usam as informações do sistema. Quando os dados ajudam nas reuniões e nas decisões, a equipe consegue perceber por que vale mantê-los em dia.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
