import type { Metadata } from "next";
import { canonical, serviceStructuredData, ogImage } from "../lib/site";
import { StructuredData } from "../lib/StructuredData";

export const metadata: Metadata = {
  title: "Avaliação Psicossocial NR-01",
  description:
    "Avaliação e gestão de riscos psicossociais conforme a NR-01. Contamos com psicóloga habilitada (CRP) para apoiar a conformidade da sua empresa e a saúde mental da equipe.",
  alternates: { canonical: canonical("/psicossocial") },
  keywords: [
    "avaliação psicossocial NR-01",
    "riscos psicossociais",
    "saúde mental no trabalho",
    "NR-01 psicossocial",
    "gestão de riscos psicossociais",
  ],
  openGraph: {
    type: "website",
    url: canonical("/psicossocial"),
    title: "Avaliação Psicossocial NR-01 | AS7 Engenharia",
    description:
      "Gestão de riscos psicossociais conforme a NR-01, conduzida por psicóloga habilitada.",
    images: [ogImage],
  },
};

const jsonLd = serviceStructuredData({
  name: "Avaliação Psicossocial (NR-01)",
  category: "Saúde Ocupacional",
  description:
    "Identificação e gestão de riscos psicossociais no trabalho conforme a NR-01, conduzida por profissional habilitado, integrada ao PGR.",
  path: "/psicossocial",
  faq: [
    {
      q: "A avaliação psicossocial é obrigatória?",
      a: "O gerenciamento de riscos psicossociais integra a NR-01 e compõe o PGR. A avaliação é o instrumento técnico para cumprir essa etapa.",
    },
    {
      q: "Quem aplica a avaliação psicossocial?",
      a: "Um profissional habilitado, como psicólogo, com instrumentos válidos e respeito ao sigilo.",
    },
    {
      q: "A empresa tem acesso às respostas individuais?",
      a: "Não. Os dados são tratados de forma agregada para preservar o sigilo individual e apoiar decisões de prevenção.",
    },
  ],
});

export default function PsicossocialLayout({
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
