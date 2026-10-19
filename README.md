# Breno Luiz — software & sistemas

Site pessoal e espaço editorial sobre CRM, processos, produto e desenvolvimento de software, estruturado para transformar conteúdo em autoridade e novas conversas.

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

O conteúdo principal está em `app/page.tsx` e o tema visual em `app/globals.css`.

## Publicar uma matéria manualmente

Abra `app/content/articles.ts`, duplique um artigo existente e altere:

- `slug`: endereço da matéria, sem espaços ou acentos;
- `category`, `title`, `description`, `date` e `readingTime`;
- `sections`: conteúdo da matéria, dividido em títulos e parágrafos.

A página individual e o card na página inicial são gerados automaticamente.

## Projeto Avance Telecom

Os fatos do projeto ficam em `app/content/avance-telecom.ts`, compartilhados pelo resumo da página inicial e pelo caso completo em `/projetos/avance-telecom/`.

O caso apresenta resultados qualitativos e um fluxo de antes e depois. Capturas reais com dados fictícios podem ser acrescentadas posteriormente; esta versão não inclui telas simuladas, depoimentos nem métricas de resultado.

## Próximas etapas sugeridas

- conectar um painel de publicação ou CMS, caso a edição manual deixe de ser suficiente;
- configurar domínio, métricas e SEO avançado;
- acrescentar capturas autorizadas do CRM com dados fictícios.

## Build

```bash
npm run build
```

O build gera o site estático em `out/`, incluindo os artigos e o projeto Avance Telecom. Essa pasta pode ser servida pela hospedagem atual sem um servidor Node.js. A publicação é manual.
