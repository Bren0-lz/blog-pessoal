import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "../../components/site-header";
import { whatsappLinks } from "../../contact";
import { articles, getArticle } from "../../content/articles";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: `${article.title} | Breno Luiz`, description: article.description };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.find((item) => item.slug !== article.slug) ?? articles[0];

  return (
    <main>
      <SiteHeader />
      <article className="article-page">
        <header className="article-hero">
          <a className="back-link" href="/#materiais"><ArrowLeft size={16} /> Todos os materiais</a>
          <div className="article-meta"><span>{article.category}</span><span>{article.date}</span><span>{article.readingTime}</span></div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>

        <div className="article-layout">
          <aside className="article-author">
            <span className="author-mark">B</span>
            <div><strong>Breno Luiz Silva do Carmo</strong><span>Engenheiro de computação</span></div>
          </aside>
          <div className="article-content">
            {article.sections.map((section, index) => (
              <section key={`${article.slug}-${index}`}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="article-cta">
        <div>
          <p className="eyebrow">ISSO ACONTECE NA SUA EMPRESA?</p>
          <h2>Vamos conversar sobre como melhorar essa parte do trabalho.</h2>
        </div>
        <a className="button button-primary" href={whatsappLinks.fromArticle(article.title)} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowRight size={18} /></a>
      </section>

      <a className="next-article" href={`/artigos/${related.slug}`}>
        <span>PRÓXIMA LEITURA</span><strong>{related.title}</strong><ArrowRight size={22} />
      </a>

      <footer>
        <a className="identity" href="/"><span className="identity-name">Breno</span><span className="identity-role">software &amp; sistemas</span></a>
        <p>Software para facilitar o trabalho e apoiar suas vendas.</p><span>Brasil · 2026</span>
      </footer>
    </main>
  );
}
