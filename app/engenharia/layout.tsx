import type { Metadata } from "next";
import { canonical, ogImage } from "../lib/site";

// O conteúdo de /engenharia é o mesmo de /psicossocial (riscos psicossociais).
// Canonical aponta para /psicossocial para consolidar conteúdo duplicado.
export const metadata: Metadata = {
  title: "Engenharia de Segurança do Trabalho e SST",
  description:
    "Soluções de engenharia de segurança do trabalho da AS7 Engenharia: gestão de riscos, riscos psicossociais (NR-01), laudos e consultoria em SST.",
  alternates: { canonical: canonical("/psicossocial") },
  keywords: [
    "engenharia de segurança do trabalho",
    "consultoria SST",
    "riscos psicossociais",
    "segurança do trabalho Paraná",
  ],
  openGraph: {
    type: "website",
    url: canonical("/psicossocial"),
    title: "Engenharia de Segurança do Trabalho | AS7 Engenharia",
    description:
      "Engenharia de segurança do trabalho, gestão de riscos e consultoria em SST.",
    images: [ogImage],
  },
};

export default function EngenhariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
