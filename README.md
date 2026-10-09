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

## Próximas etapas sugeridas

- conectar o formulário a um banco de dados ou serviço de e-mail;
- conectar um painel de publicação ou CMS, caso a edição manual deixe de ser suficiente;
- configurar domínio, métricas e SEO avançado;
- publicar em um host compatível com Next.js/Cloudflare Workers.

## Build

```bash
npm run build
```
