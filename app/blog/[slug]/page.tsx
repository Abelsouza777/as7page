import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canonical, SITE_URL, WHATSAPP_URL, ogImage } from "../../lib/site";
import { blogArticles } from "../articles";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${y}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: canonical(`/blog/${article.slug}`) },
    keywords: [article.keyword, "segurança do trabalho", "SST", "AS7 Engenharia"],
    openGraph: {
      type: "article",
      url: canonical(`/blog/${article.slug}`),
      title: article.title,
      description: article.metaDescription,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: ["AS7 Engenharia"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    inLanguage: "pt-BR",
    keywords: article.keyword,
    mainEntityOfPage: canonical(`/blog/${article.slug}`),
    author: { "@type": "Organization", name: "AS7 Engenharia", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">
      <header className="w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3" aria-label="AS7 Engenharia — Início">
            <img src="/as7.png" alt="Logo da AS7 Engenharia" width={120} height={40} className="rounded-lg" />
          </a>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link href="/blog" className="text-slate-200 hover:text-white transition">Blog</Link>
            <a href="/" className="text-slate-200 hover:text-white transition">Início</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-indigo-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 dark:text-gray-300">{article.category}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{article.category}</span>
            <span className="text-gray-400">•</span>
            <time className="text-gray-500 dark:text-gray-400" dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-5 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="prose-as7">
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{section.heading}</h2>
                {section.body?.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-2 my-4">
                    {section.bullets.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {article.faq.length > 0 ? (
            <section className="mt-12 bg-white dark:bg-zinc-800 rounded-2xl p-7 shadow-sm border border-gray-100 dark:border-zinc-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Perguntas frequentes</h2>
              <div className="space-y-3">
                {article.faq.map((item) => (
                  <details key={item.q} className="group bg-gray-50 dark:bg-zinc-900 rounded-xl px-5 py-4 border border-gray-100 dark:border-zinc-700">
                    <summary className="cursor-pointer list-none font-semibold text-gray-900 dark:text-white flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-indigo-600 dark:text-indigo-400 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10 rounded-2xl bg-indigo-600 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Precisa de ajuda com {article.keyword.toLowerCase()}?</h2>
            <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
              Fale com a equipe da AS7 Engenharia e receba orientação técnica para a sua empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {article.relatedService ? (
                <Link href={article.relatedService.href} className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition">
                  {article.relatedService.label}
                </Link>
              ) : null}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 font-semibold transition">
                Falar no WhatsApp
              </a>
            </div>
          </section>

          {related.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Continue lendo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group block bg-white dark:bg-zinc-800 rounded-xl p-5 border border-gray-100 dark:border-zinc-700 hover:shadow-md transition">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{r.category}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{r.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-10">
            <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">← Ver todos os artigos</Link>
          </div>
        </article>
      </main>

      <footer className="w-full bg-slate-800 dark:bg-slate-900 text-center py-6">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          © {new Date().getFullYear()} AS7 Engenharia | Gestão em SST — Todos os direitos reservados.
        </p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
