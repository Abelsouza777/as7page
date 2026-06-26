import type { Metadata } from "next";
import { canonical, serviceStructuredData, ogImage } from "../lib/site";
import { StructuredData } from "../lib/StructuredData";

export const metadata: Metadata = {
  title: "Projeto e Instalação de Linha de Vida (NR-35)",
  description:
    "Projeto, instalação e inspeção de sistemas de ancoragem e linha de vida para trabalho em altura (NR-35). Engenharia com memorial de cálculo e ART pela AS7 Engenharia.",
  alternates: { canonical: canonical("/linhadevida") },
  keywords: [
    "projeto linha de vida",
    "linha de vida NR-35",
    "sistema de ancoragem",
    "trabalho em altura",
    "instalação linha de vida",
  ],
  openGraph: {
    type: "website",
    url: canonical("/linhadevida"),
    title: "Projeto e Instalação de Linha de Vida (NR-35) | AS7 Engenharia",
    description:
      "Sistemas de ancoragem e linha de vida para trabalho em altura, com projeto, instalação e inspeção técnica.",
    images: [ogImage],
  },
};

const jsonLd = serviceStructuredData({
  name: "Projeto e Instalação de Linha de Vida",
  category: "Engenharia de Segurança",
  description:
    "Projeto, instalação e inspeção de sistemas de ancoragem e linha de vida para trabalho em altura conforme a NR-35, com memorial de cálculo e ART.",
  path: "/linhadevida",
  faq: [
    {
      q: "A linha de vida precisa de projeto?",
      a: "Sim. Todo sistema de ancoragem deve ser projetado por engenheiro habilitado, com memorial de cálculo e ART. Ancoragens improvisadas podem falhar em uma queda.",
    },
    {
      q: "Quem pode instalar uma linha de vida?",
      a: "Equipe qualificada, sob responsabilidade técnica de um engenheiro habilitado, com emissão da ART de instalação.",
    },
    {
      q: "É necessária inspeção periódica?",
      a: "Sim. Sistemas em uso devem ser inspecionados por profissional habilitado periodicamente e após eventos que possam comprometer a integridade.",
    },
  ],
});

export default function LinhaDeVidaLayout({
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
