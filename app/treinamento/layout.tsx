import type { Metadata } from "next";
import { canonical, serviceStructuredData, ogImage } from "../lib/site";
import { StructuredData } from "../lib/StructuredData";

export const metadata: Metadata = {
  title: "Treinamentos NR: NR-06, 10, 12, 35 e mais (Presencial e Online)",
  description:
    "Treinamentos de Segurança do Trabalho (NR-05, 06, 10, 12, 18, 31, 33, 34 e 35) com certificado válido em todo o Brasil. Cursos presenciais, online e semipresenciais com a AS7 Engenharia.",
  alternates: { canonical: canonical("/treinamento") },
  keywords: [
    "treinamento NR-35",
    "treinamento NR-10",
    "treinamento NR-12",
    "treinamento segurança do trabalho",
    "curso NR online",
    "CIPA NR-05",
  ],
  openGraph: {
    type: "website",
    url: canonical("/treinamento"),
    title: "Treinamentos NR | AS7 Engenharia",
    description:
      "Treinamentos NR com certificado válido: NR-05, 06, 10, 12, 18, 31, 33, 34 e 35. Presencial, online e semipresencial.",
    images: [ogImage],
  },
};

const jsonLd = serviceStructuredData({
  name: "Treinamentos Normativos NR",
  category: "Treinamentos de Segurança do Trabalho",
  description:
    "Treinamentos das Normas Regulamentadoras (NR-05, 06, 10, 12, 18, 31, 33, 34 e 35) com certificado válido em todo o Brasil, nas modalidades presencial, online e semipresencial.",
  path: "/treinamento",
  faq: [
    {
      q: "Os treinamentos NR têm certificado válido?",
      a: "Sim. Os certificados são válidos em todo o território nacional e seguem a carga horária e o conteúdo das Normas Regulamentadoras.",
    },
    {
      q: "O treinamento NR-35 pode ser totalmente online?",
      a: "Não integralmente. A NR-35 exige parte prática, por isso oferecemos a modalidade semipresencial (teoria online + prática presencial) e a modalidade presencial.",
    },
    {
      q: "Vocês fazem treinamento in company?",
      a: "Sim. Levamos o treinamento para a sua empresa, adaptado à realidade do seu ambiente de trabalho.",
    },
  ],
});

export default function TreinamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <StructuredData data={jsonLd} />
    </>
  );
}
