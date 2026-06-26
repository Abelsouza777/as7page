import type { Metadata } from "next";
import { canonical, serviceStructuredData, ogImage } from "../lib/site";
import { StructuredData } from "../lib/StructuredData";

export const metadata: Metadata = {
  title: "Engenharia Ambiental: Diagnósticos e Regularização",
  description:
    "Engenharia ambiental técnica e legal: diagnóstico ambiental, monitoramento, EIA/RIMA, estudos de impacto e regularização do seu empreendimento com a AS7 Engenharia.",
  alternates: { canonical: canonical("/ambiental") },
  keywords: [
    "engenharia ambiental",
    "diagnóstico ambiental",
    "EIA RIMA",
    "regularização ambiental",
    "estudos ambientais",
  ],
  openGraph: {
    type: "website",
    url: canonical("/ambiental"),
    title: "Engenharia Ambiental | AS7 Engenharia",
    description:
      "Diagnóstico, monitoramento e gestão ambiental para a viabilidade do seu empreendimento.",
    images: [ogImage],
  },
};

const jsonLd = serviceStructuredData({
  name: "Engenharia Ambiental",
  category: "Engenharia Ambiental",
  description:
    "Diagnóstico ambiental, monitoramento, estudos de impacto (EIA/RIMA, PCA/RCA), auditorias e regularização ambiental de empreendimentos.",
  path: "/ambiental",
  faq: [
    {
      q: "O que inclui o diagnóstico ambiental?",
      a: "A caracterização do meio físico, biótico e antrópico, com ensaios químicos de solos e identificação de fontes poluidoras.",
    },
    {
      q: "Vocês elaboram EIA/RIMA?",
      a: "Sim. Executamos os estudos exigidos pelos órgãos ambientais, como EIA/RIMA, PCA/RCA e modelagem ambiental.",
    },
  ],
});

export default function AmbientalLayout({
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
