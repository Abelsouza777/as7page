import type { Metadata } from "next";
import { canonical } from "../lib/site";

export const metadata: Metadata = {
  title: "Cartão Digital de Visitas",
  description:
    "Cartão de visitas digital da AS7 Engenharia — Gestão em Saúde e Segurança do Trabalho (SST). Salve o contato direto no seu celular.",
  alternates: { canonical: canonical("/cartao") },
  robots: { index: false, follow: true },
};

export default function CartaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
