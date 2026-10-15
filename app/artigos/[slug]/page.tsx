import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
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

  const related = articles[(articles.indexOf(article) + 1) % articles.length];

  return (
    <main>
      <SiteHeader />
      <article className="article-page">
        <header className="article-hero">
          <a className="back-link" href="/#artigos"><ArrowLeft size={16} /> Todos os artigos</a>
          <div className="article-meta"><span>{article.category}</span><span>{article.date}</span><span>{article.readingTime}</span></div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>

        <div className="article-layout">
          <aside className="article-author">
            <img className="author-mark" src="/img/breno-avatar.webp" alt="Foto de Breno Luiz" width={38} height={38} />
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

      <SiteFooter />
    </main>
  );
}
