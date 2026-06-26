// Fonte única de verdade para dados do site usados em metadata e JSON-LD.
// Centraliza URL canônica, contato e structured data da organização.

export const SITE_URL = "https://www.as7engenharia.com.br";
export const SITE_NAME = "AS7 Engenharia";
export const SITE_TAGLINE = "Gestão em Saúde e Segurança do Trabalho (SST)";
export const SITE_DESCRIPTION =
  "A AS7 Engenharia é especialista em Saúde e Segurança do Trabalho (SST). Elaboração de PGR, PCMSO, LTCAT, treinamentos NR-06 ao NR-35, laudos NR-12, avaliação psicossocial NR-01 e projetos de linha de vida. Atendimento em todo o Brasil.";
export const ORG_TELEPHONE = "+5545999799513";
export const ORG_PHONE_DISPLAY = "(45) 99979-9513";
export const ORG_EMAIL = "contato@as7engenharia.com.br";
export const ogImage = {
  url: "/site.png",
  width: 1200,
  height: 630,
  alt: "AS7 Engenharia — Gestão em Saúde e Segurança do Trabalho",
};
export const WHATSAPP_URL = "https://wa.me/5545999799513";

// Organização / LocalBusiness — aparece em todas as páginas via root layout.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "AS7 Engenharia | Gestão em SST",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/as7.png`,
  image: `${SITE_URL}/as7.png`,
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  telephone: ORG_TELEPHONE,
  email: ORG_EMAIL,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Brasil" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  founder: { "@type": "Person", name: "Abel Souza" },
  knowsAbout: [
    "Saúde e Segurança do Trabalho (SST)",
    "PGR — Programa de Gerenciamento de Riscos",
    "PCMSO — Programa de Controle Médico de Saúde Ocupacional",
    "LTCAT — Laudo Técnico das Condições Ambientais de Trabalho",
    "NR-12 — Segurança em Máquinas e Equipamentos",
    "NR-35 — Trabalho em Altura",
    "Avaliação Psicossocial (NR-01)",
    "Linha de vida e sistemas de ancoragem",
  ],
};

// WebSite — habilita a entidade do site para o Google.
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: SITE_TAGLINE,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function canonical(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
}

export interface FaqPair {
  q: string;
  a: string;
}

// Monta os blocos JSON-LD (Service + FAQPage opcionais) para uma página de serviço.
export function serviceStructuredData(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
  faq?: FaqPair[];
}): unknown[] {
  const { name, description, path, category, faq } = opts;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: category ?? name,
    description,
    url: canonical(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const blocks: unknown[] = [service];

  if (faq && faq.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return blocks;
}
