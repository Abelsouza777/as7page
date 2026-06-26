import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { blogArticles } from "./blog/articles";

// Rota nativa do Next.js -> gera /sitemap.xml em build (sem next-sitemap).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/treinamento", priority: 0.9, freq: "monthly" as const },
    { path: "/linhadevida", priority: 0.8, freq: "monthly" as const },
    { path: "/psicossocial", priority: 0.8, freq: "monthly" as const },
    { path: "/engenharia", priority: 0.8, freq: "monthly" as const },
    { path: "/ambiental", priority: 0.8, freq: "monthly" as const },
    { path: "/blog", priority: 0.9, freq: "weekly" as const },
    { path: "/cartao", priority: 0.3, freq: "yearly" as const },
    { path: "/links", priority: 0.3, freq: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path === "" ? "/" : path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  for (const article of blogArticles) {
    entries.push({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  return entries;
}
