import type { Metadata } from "next";
import { canonical } from "../lib/site";

export const metadata: Metadata = {
  title: "Links e Serviços AS7",
  description:
    "Acesse todos os serviços da AS7 Engenharia em SST: treinamentos NR, PGR/PCMSO, linha de vida, avaliação psicossocial (NR-01), adequação NR-12 e engenharia ambiental.",
  alternates: { canonical: canonical("/links") },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
