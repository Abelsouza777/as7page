import type { Metadata } from "next";
import Link from "next/link";
import { canonical, WHATSAPP_URL, ogImage } from "../lib/site";
import { blogArticles } from "./articles";

export const metadata: Metadata = {
  title: "Blog SST — Artigos sobre NRs, PGR, PCMSO e Segurança do Trabalho",
  description:
    "Artigos técnicos de Saúde e Segurança do Trabalho (SST): PGR, PCMSO, LTCAT, NR-12, NR-35, linha de vida e mais. Conteúdo prático da AS7 Engenharia.",
  alternates: { canonical: canonical("/blog") },
  openGraph: {
    type: "website",
    url: canonical("/blog"),
    title: "Blog SST — AS7 Engenharia",
    description:
      "Artigos técnicos de Saúde e Segurança do Trabalho (SST): PGR, PCMSO, LTCAT, NR-12, NR-35 e mais.",
    images: [ogImage],
  },
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${y}`;
}

export default function BlogIndex() {
  const articles = [...blogArticles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">
      <header className="w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3" aria-label="AS7 Engenharia — Início">
            <img src="/as7.png" alt="Logo da AS7 Engenharia" width={120} height={40} className="rounded-lg" />
          </a>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <a href="/" className="text-slate-200 hover:text-white transition">Início</a>
            <a href="/treinamento" className="text-slate-200 hover:text-white transition">Treinamentos</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white transition">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full">
        <section className="bg-white dark:bg-zinc-900 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Blog SST</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 leading-tight">
              Saúde e Segurança do Trabalho, na prática
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Guias e artigos sobre NRs, PGR, PCMSO, LTCAT, NR-12, NR-35 e gestão de SST para manter sua empresa em conformidade.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="group bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs mb-3">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{article.category}</span>
                      <span className="text-gray-400">•</span>
                      <time className="text-gray-500 dark:text-gray-400" dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt)}
                      </time>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">{article.excerpt}</p>
                    <Link href={`/blog/${article.slug}`} className="inline-block mt-5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      Ler artigo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-slate-800 dark:bg-slate-900 text-center py-6">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          © {new Date().getFullYear()} AS7 Engenharia | Gestão em SST — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
