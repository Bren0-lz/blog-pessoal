# Breno Luiz — software & sistemas

![Next.js](https://img.shields.io/badge/Next.js%2016-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?logo=tailwindcss&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-Todos%20os%20direitos%20reservados-red)

Site pessoal e espaço editorial sobre CRM, processos, produto e desenvolvimento de software,
estruturado para transformar conteúdo em autoridade e novas conversas. Gerado como site estático
com **Next.js + TypeScript** e publicado automaticamente por **GitHub Actions**.

---

## Comprovação de experiência

| | |
|---|---|
| **Autor** | Breno Luiz Silva do Carmo — único autor dos 20 commits deste repositório |
| **Tipo** | Item de portfólio de autoria própria — site pessoal e blog profissional |
| **Período de desenvolvimento** | 03/10/2026 a 21/10/2026 |
| **Verificação** | `npm install && npm run build` gera o site estático em `out/`, com a página inicial e as 10 páginas de artigo pré-renderizadas |

### Competências técnicas evidenciadas

| Competência | Onde verificar neste repositório |
|---|---|
| **Next.js** | App Router com rota dinâmica [`app/artigos/[slug]/page.tsx`](app/artigos/%5Bslug%5D/page.tsx) — `generateStaticParams` e `generateMetadata` geram uma página e o SEO de cada artigo; exportação estática configurada em [`next.config.ts`](next.config.ts) |
| **React** | Componentes de página e de layout em [`app/`](app/) ([`page.tsx`](app/page.tsx), [`site-header.tsx`](app/components/site-header.tsx), [`site-footer.tsx`](app/components/site-footer.tsx)) |
| **TypeScript** | Todo o código em `.ts`/`.tsx`, com tipos para o conteúdo editorial em [`app/content/articles.ts`](app/content/articles.ts) |
| **Outros frameworks de desenvolvimento web** | Tailwind CSS 4, componentes shadcn/ui ([`components/ui/`](components/ui/)), ícones Lucide |
| **Design e prototipagem de interfaces** | Identidade visual tipográfica, paleta e diretrizes de interface documentadas em [`HANDOFF.md`](HANDOFF.md); tema em [`app/globals.css`](app/globals.css); layout responsivo |
| **CI/CD e DevOps** | [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — a cada push na `main`, instala, faz o build e publica por FTP na Hostinger, com credenciais em *secrets* e controle de concorrência |
| **GitHub / versionamento** | 20 commits, com histórico de evolução e reversões registradas (`git revert`) |

> A estrutura inicial veio de um *starter* Next.js (componentes shadcn/ui e scripts de build em
> `scripts/`). As páginas, o conteúdo, os componentes do site, a configuração de exportação
> estática e o pipeline de deploy foram desenvolvidos por mim.

---

## Estrutura

```
app/
  page.tsx                  página inicial
  layout.tsx                layout raiz e metadados (SEO / Open Graph)
  artigos/[slug]/page.tsx   página de cada artigo, gerada estaticamente
  content/articles.ts       artigos do blog (fonte do conteúdo)
  components/               cabeçalho e rodapé do site
  contact.ts                e-mail e links de WhatsApp com mensagem por contexto
  globals.css               tema visual
components/ui/              componentes de interface (shadcn/ui)
public/                     imagens e ícones
.github/workflows/          deploy automático na Hostinger
HANDOFF.md                  diretrizes de marca, conteúdo e interface
```

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O site estático é gerado em `out/`. O mesmo comando roda no GitHub Actions antes do deploy.

## Publicar uma matéria

Abra `app/content/articles.ts`, duplique um artigo existente e altere:

- `slug`: endereço da matéria, sem espaços ou acentos;
- `category`, `title`, `description`, `date` e `readingTime`;
- `sections`: conteúdo da matéria, dividido em títulos e parágrafos.

A página individual, os metadados e o card na página inicial são gerados automaticamente.

## Próximos passos

- conectar o formulário a um banco de dados ou serviço de e-mail;
- conectar um painel de publicação ou CMS, caso a edição manual deixe de ser suficiente;
- configurar métricas e SEO avançado;
- adicionar testes automatizados e zerar os avisos do `npm run lint`.

## Autor

**Breno Luiz Silva do Carmo**
[LinkedIn](https://www.linkedin.com/in/breno-luiz-silva-do-carmo-19451a243/) ·
[GitHub](https://github.com/Bren0-lz)

## Licença

Copyright (c) 2026 Breno Luiz Silva do Carmo. Todos os direitos reservados.
Nenhuma parte deste código pode ser utilizada, reproduzida, distribuída ou modificada sem
autorização prévia por escrito do autor. Veja [LICENSE](LICENSE).
