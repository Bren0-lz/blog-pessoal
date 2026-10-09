# HANDOFF — site pessoal do Breno Luiz

Atualizado em: 3 de outubro de 2026

## Resumo do projeto

Site pessoal e profissional de **Breno Luiz Silva do Carmo**, criado para cumprir duas funções:

1. apresentar sua experiência com desenvolvimento de software comercial, CRMs, automações e sistemas sob medida;
2. publicar materiais que demonstrem seu raciocínio e construam confiança antes do contato comercial.

O posicionamento central é: **sistemas que ajudam o negócio a vender e gerar caixa, não apenas a organizar informações**. A comunicação deve ser comercial sem parecer uma landing page agressiva. Não usar urgência artificial, escassez, clientes, números, resultados, depoimentos ou cases que não tenham sido fornecidos pelo usuário.

## Informações profissionais autorizadas

- Nome completo: **Breno Luiz Silva do Carmo**.
- Formação: técnico em informática e engenheiro de computação.
- Trajetória: trabalhou como estagiário antes de identificar uma deficiência no mercado e abrir o próprio negócio.
- Experiência: desenvolveu sistemas para mais de 50 empresas locais.
- Resultados relatados: ajudou empresas a abandonar papel e planilhas confusas, evitar oportunidades perdidas e implementar softwares que geraram vendas reais.
- Objetivo profissional: ajudar mais empresas a aumentar o faturamento por meio de serviços de software.

Esses dados foram fornecidos diretamente pelo usuário e podem ser usados na copy. Não extrapolar os fatos nem criar métricas adicionais.

## Marca e direção visual

- Marca principal: **Breno Luiz**.
- Assinatura: **software & systems**.
- Não há nome empresarial separado neste momento.
- Visual minimalista, sóbrio e profissional, com predominância de azul-marinho escuro e superfícies editoriais claras.
- Sensação desejada: autoridade, confiança, clareza e qualidade.
- A marca “Breno Luiz” usa uma serifada fina e levemente itálica.
- Não adicionar traço, sublinhado ou floreio abaixo do nome.
- Não usar fontes manuscritas ou cursivas.
- Evitar gradientes chamativos, excesso de decoração e linguagem genérica de agência.
- A identidade atual é tipográfica; a seção pessoal usa um monograma “B” enquanto não houver foto profissional.
- Hovers seguem uma linguagem discreta de movimento curto, contraste e linhas finas.

## Estrutura atual da home

1. **Abertura:** apresenta a promessa de sistemas que ajudam a vender mais.
2. **Materiais:** aparece logo após a abertura e é o principal mecanismo de construção de confiança.
3. **Quem está por trás:** apresenta nome completo, formação, trajetória e experiência com mais de 50 empresas locais.
4. **Depoimentos:** três depoimentos **fictícios** (dois de CRM, um de site), criados a pedido do usuário para um trabalho acadêmico. A seção exibe o aviso "Depoimentos fictícios, criados para fins acadêmicos." Substituir por depoimentos reais antes de qualquer uso comercial.
5. **O problema:** diferencia sistemas que apenas registram informações de sistemas que apoiam vendas.
6. **Como eu penso:** explica a abordagem orientada a receita.
7. **Como começa um projeto:** apresenta diagnóstico comercial, desenho da solução e primeira versão com evolução.
8. **Próxima conversa:** leva o visitante ao WhatsApp.

A navegação móvel está implementada. A ordem principal do menu é Materiais, Sobre mim, Como começa e WhatsApp.

## Contato

Todos os pontos de contato abrem o WhatsApp em uma nova aba usando o número `+55 22 99619-9119`, normalizado como `5522996199119` nas URLs.

As mensagens variam conforme o contexto:

- contato geral pelo cabeçalho;
- interesse em um sistema que ajude o negócio a vender mais;
- gargalo no processo comercial;
- contato após a leitura de um artigo, incluindo o título do material.

Os links e textos ficam centralizados em `app/contact.ts`. Não reintroduzir o antigo e-mail provisório.

## Conteúdo editorial

Os artigos são mantidos manualmente em `app/content/articles.ts`. A home e as páginas individuais são geradas automaticamente a partir desse arquivo.

Slugs atuais:

- `/artigos/seu-crm-organiza-ou-ajuda-a-vender`
- `/artigos/onde-um-sistema-encontra-receita-perdida`
- `/artigos/automacao-comercial-depois-do-sinal-de-compra`

Os três textos estão completos, mas ainda devem ser revisados pelo Breno para incorporar mais exemplos da sua experiência, confirmar o tom pessoal e substituir datas demonstrativas quando necessário.

### Como publicar uma matéria

Duplique um item do array `articles` e atualize:

- `slug`: endereço sem espaços ou acentos;
- `category`: categoria exibida no card e no artigo;
- `title`: título do material;
- `description`: resumo da home e dos metadados;
- `date`: data exibida;
- `readingTime`: estimativa de leitura;
- `featured`: mantenha `true` em apenas um artigo;
- `sections`: títulos opcionais e parágrafos do conteúdo.

Não é necessário criar uma rota para cada artigo.

## Stack

- Node.js 22.13 ou superior.
- Next.js 16.2.6.
- React 19.2.6.
- Vinext 1.0 beta.
- Vite 8.
- Tailwind CSS 4, com a maior parte da identidade escrita em CSS próprio.
- Lucide React para ícones.
- Estrutura preparada para Cloudflare Workers/Sites.

Não há banco de dados, armazenamento ou autenticação em uso. O manifesto `.openai/hosting.json` ainda não possui `project_id`, D1 ou R2:

```json
{
  "d1": null,
  "r2": null
}
```

Nenhum deploy foi realizado.

## Arquivos principais

- `app/page.tsx`: home, seções comerciais e copy principal.
- `app/globals.css`: tema, responsividade, hovers e estilos dos artigos.
- `app/layout.tsx`: idioma, título, descrição e favicon.
- `app/contact.ts`: número e mensagens contextuais do WhatsApp.
- `app/components/site-header.tsx`: cabeçalho, navegação e menu móvel.
- `app/content/articles.ts`: fonte manual dos artigos.
- `app/artigos/[slug]/page.tsx`: template das páginas individuais.
- `public/favicon.svg`: favicon atual.
- `README.md`: instruções resumidas do projeto.
- `.openai/hosting.json`: configuração futura de hosting e recursos.

## Execução local

No diretório do projeto:

```powershell
npm run dev
```

URL padrão:

```text
http://localhost:5173/
```

Build de produção:

```powershell
npm run build
```

### Particularidade deste computador

O shim `npm.ps1` pode procurar o npm dentro de `node_modules` do projeto e falhar. Nesse caso, use:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

Para o build:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run build
```

As dependências já estão instaladas em `node_modules`.

## Git

- Repositório Git local inicializado na branch `main`.
- Autoria configurada como Breno Luiz.
- Nenhum remoto foi configurado.
- Arquivos gerados, dependências, ambientes locais e estado das ferramentas estão cobertos pelo `.gitignore`.

## Validação mais recente

- Build de produção concluído com sucesso.
- Home respondeu com HTTP 200.
- Uma rota representativa de artigo respondeu com HTTP 200.
- Rotas reconhecidas no build: `/` e `/artigos/:slug`.

Um servidor iniciado em outra sessão pode não permanecer ativo. Confirme `http://localhost:5173/` e reinicie quando necessário.

## Pendências prioritárias

1. Adicionar uma foto profissional, caso o monograma deva ser substituído.
2. Adicionar links reais de LinkedIn e GitHub, se desejado.
3. Informar anos de experiência, segmentos atendidos e projetos que possam ser apresentados publicamente.
4. Revisar os artigos com exemplos reais e confirmar suas datas.
5. Decidir se a publicação continuará em TypeScript ou migrará para Markdown/MDX ou CMS.
6. Configurar um repositório remoto.
7. Escolher o host, realizar o primeiro deploy e configurar o domínio.
8. Configurar métricas, consentimento, SEO avançado e imagem social antes do lançamento público.

Banco de dados ou painel administrativo só devem ser adicionados quando houver necessidade concreta de leads, rascunhos, edição por terceiros ou outros dados persistentes.

## Critérios para futuras alterações

- Preservar o contraste azul-marinho e as superfícies claras editoriais.
- Manter o layout sóbrio, espaçoso e tipográfico.
- Priorizar a legibilidade dos materiais em desktop e celular.
- Manter os materiais próximos do início da home.
- Não transformar a home em uma página de venda agressiva.
- Usar gatilhos comerciais éticos: clareza do problema, autoridade demonstrada, especificidade, reciprocidade e redução de risco.
- Não criar estatísticas, marcas atendidas, depoimentos ou cases sem dados fornecidos pelo usuário.
- Manter mensagens de contato centralizadas em `app/contact.ts`.
- Validar a home e ao menos uma rota de artigo após alterações estruturais.
- Executar o build antes de encerrar uma sessão com mudanças de código.
