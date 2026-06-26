import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// Rota nativa do Next.js -> gera /robots.txt em build.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
