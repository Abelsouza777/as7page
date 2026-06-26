// Conteúdo do blog SST da AS7 Engenharia.
// Cada artigo é renderizado em SSR (app/blog/[slug]/page.tsx) com metadata e FAQ schema próprios.
// Conteúdo em pt-BR, focado nas palavras-chave estratégicas de SST/NR.

export interface BlogSection {
  heading: string;
  body?: string[];
  bullets?: string[];
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  category: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  excerpt: string;
  sections: BlogSection[];
  faq: BlogFaq[];
  relatedService?: { label: string; href: string };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "o-que-e-pgr-programa-de-gerenciamento-de-riscos",
    title: "O que é o PGR (Programa de Gerenciamento de Riscos) e como elaborar",
    metaDescription:
      "Entenda o que é o PGR (Programa de Gerenciamento de Riscos) da NR-01, quem precisa elaborar, o que o documento deve conter e como a AS7 Engenharia ajuda sua empresa a ficar em conformidade.",
    keyword: "pgr programa de gestão de riscos",
    category: "Documentação",
    publishedAt: "2026-06-26",
    excerpt:
      "O PGR substituiu o antigo PPRA e é obrigatório para toda empresa abrangida pelas Normas Regulamentadoras. Veja o que ele deve conter e como elaborá-lo.",
    sections: [
      {
        heading: "O que é o PGR?",
        body: [
          "O PGR (Programa de Gerenciamento de Riscos) é o documento previsto na NR-01 (Disposições Gerais e Gerenciamento de Riscos Ocupacionais) que identifica, avalia e estabelece medidas de controle para os riscos ocupacionais de uma empresa.",
          "Com a atualização das NRs publicada em 2020, o PGR passou a substituir o PPRA (Programa de Prevenção de Riscos Ambientais). O foco mudou de um documento apenas descritivo para um programa de gestão contínuo, com plano de ação e priorização dos riscos mais graves.",
        ],
      },
      {
        heading: "Quem precisa elaborar o PGR?",
        body: [
          "O PGR é obrigatório para as empresas abrangidas pelas Normas Regulamentadoras, ou seja, aquelas com empregados regidos pela CLT. Microempresas e empresas de pequeno porte classificadas como de baixo risco podem adotar modelos simplificados, mas não ficam dispensadas de gerenciar seus riscos.",
        ],
        bullets: [
          "Empresas com empregados celetistas, de qualquer porte",
          "Um PGR por estabelecimento (CNPJ/endereço), não por empresa",
          "Revisão no mínimo a cada 2 anos ou diante de mudanças no processo, acidente grave ou doença ocupacional",
        ],
      },
      {
        heading: "O que o PGR deve conter",
        body: [
          "O conteúdo mínimo do PGR está definido na NR-01. Um documento bem elaborado vai além do modelo e entrega um plano de ação realmente utilizável pela empresa.",
        ],
        bullets: [
          "Identificação da empresa e do estabelecimento",
          "Inventário de riscos por cargo, função e ambiente",
          "Avaliação e classificação dos riscos (probabilidade e severidade)",
          "Plano de ação com priorização dos riscos mais graves",
          "Definição de monitoramento e indicadores de controle",
          "Registro de informações e responsáveis",
        ],
      },
      {
        heading: "Como a AS7 Engenharia elabora o seu PGR",
        body: [
          "Nossa equipe realiza a visita técnica, faz o levantamento por setor e cargo, avalia e prioriza os riscos e entrega um plano de ação claro, em formato digital, pronto para fiscalização e para apoiar o dia a dia do SESMT. Atendemos em todo o Brasil.",
        ],
      },
    ],
    faq: [
      {
        q: "O PGR substitui o PPRA?",
        a: "Sim. Desde a atualização da NR-01 e da NR-09 em 2020, o PGR (Programa de Gerenciamento de Riscos) substituiu o PPRA, com foco em gestão contínua e plano de ação.",
      },
      {
        q: "Com que frequência o PGR precisa ser revisado?",
        a: "No mínimo a cada 2 anos. Também deve ser revisado quando há mudanças no processo de trabalho, após acidentes graves ou doenças ocupacionais e quando da instalação de novas máquinas ou setores.",
      },
      {
        q: "O PGR é por empresa ou por estabelecimento?",
        a: "Por estabelecimento. Cada endereço (CNPJ/CEI) precisa do seu próprio PGR, porque os riscos variam de um local para outro.",
      },
      {
        q: "Quem pode elaborar o PGR?",
        a: "O PGR deve ser elaborado e assinado por profissional habilitado (engenheiro de segurança do trabalho, médico do trabalho ou técnico de segurança do trabalho), com a participação do empregador e do SESMT/CIPA.",
      },
    ],
    relatedService: { label: "Solicitar elaboração do PGR", href: "/" },
  },
  {
    slug: "nr-12-adequacao-de-maquinas",
    title: "NR-12: tudo sobre a adequação de máquinas e equipamentos",
    metaDescription:
      "Guia completo sobre a NR-12: o que é a adequação de máquinas, quando o laudo técnico é obrigatório, prazos e como a AS7 Engenharia executa projetos de conformidade.",
    keyword: "NR-12 adequação de máquinas",
    category: "Engenharia",
    publishedAt: "2026-06-26",
    excerpt:
      "A NR-12 define requisitos de segurança para máquinas e equipamentos. Entenda o que é a adequação, quando o laudo é exigido e como se preparar para a fiscalização.",
    sections: [
      {
        heading: "O que é a NR-12",
        body: [
          "A NR-12 estabelece as medidas de prevenção e segurança no projeto, fabricação, montagem, instalação e uso de máquinas e equipamentos. Seu objetivo é proteger trabalhadores e terceiros de acidentes graves, como esmagamento, cortes, choques e aprisionamento.",
          "Ela se aplica a máquinas novas e usadas, nacionais ou importadas, e cobre desde painéis e esmeris industriais até prensas, injetoras e esteiras.",
        ],
      },
      {
        heading: "O que é a adequação NR-12",
        body: [
          "Adequar uma máquina à NR-12 significa analisar os riscos e instalar dispositivos de segurança para que ela atenda aos requisitos da norma. O processo envolve diagnóstico, projeto de intervenção e validação.",
        ],
        bullets: [
          "Diagnóstico técnico com inventário de não conformidades",
          "Instalação de dispositivos de segurança (grades, intertravamentos, cortinas de luz)",
          "Comando e sinalização de segurança (parada de emergência, LOTO)",
          "Manual técnico e certificação/laudo de conformidade",
        ],
      },
      {
        heading: "Laudo técnico NR-12: quando é obrigatório",
        body: [
          "O laudo técnico NR-12 documenta o estado da máquina e as medidas necessárias. Ele é exigido para demonstrar conformidade em fiscalizações do Ministério do Trabalho, em auditorias de clientes e em processos de responsabilidade técnica.",
          "O laudo deve ser elaborado por profissional habilitado (engenheiro de segurança do trabalho ou mecânico) e vir acompanhado da Anotação de Responsabilidade Técnica (ART)."
        ],
      },
      {
        heading: "Como a AS7 executa projetos de adequação",
        body: [
          "Fazemos o diagnóstico, o projeto de intervenção com priorização por risco, o acompanhamento da execução e a emissão do laudo técnico com ART. O resultado é uma máquina legalmente conforme e mais segura para a sua equipe.",
        ],
      },
    ],
    faq: [
      {
        q: "Toda máquina precisa de adequação à NR-12?",
        a: "Sim. As máquinas em uso precisam atender aos requisitos da NR-12. A adequação adapta o equipamento existente por meio de dispositivos e procedimentos de segurança.",
      },
      {
        q: "Quem emite o laudo NR-12?",
        a: "Um profissional habilitado (engenheiro de segurança do trabalho ou engenheiro mecânico), com registro no CREA e emissão da ART correspondente.",
      },
      {
        q: "Adequação NR-12 evita multas?",
        a: "A conformidade reduz significativamente o risco de autuações e, principalmente, de acidentes graves. A fiscalização do trabalho verifica a conformidade com a norma.",
      },
      {
        q: "A NR-12 vale para máquinas usadas?",
        a: "Sim. A norma se aplica a máquinas novas e usadas, nacionais e importadas, independentemente do ano de fabricação.",
      },
    ],
    relatedService: { label: "Solicitar laudo e adequação NR-12", href: "/" },
  },
  {
    slug: "nr-35-treinamento-trabalho-em-altura",
    title: "NR-35: treinamento de trabalho em altura obrigatório",
    metaDescription:
      "Tudo sobre o treinamento NR-35 (trabalho em altura): quem precisa fazer, carga horária, validade do certificado, conteúdo prático e como agendar com a AS7 Engenharia.",
    keyword: "NR-35 treinamento altura",
    category: "Treinamentos",
    publishedAt: "2026-06-26",
    excerpt:
      "O trabalho em altura acima de 2 metros exige treinamento pela NR-35. Veja carga horária, validade, parte prática obrigatória e quem deve ser capacitado.",
    sections: [
      {
        heading: "O que é a NR-35",
        body: [
          "A NR-35 estabelece os requisitos para o trabalho em altura, definido como qualquer atividade executada acima de 2,00 metros do nível inferior, onde haja risco de queda.",
          "Ela aborda planejamento, organização e execução do trabalho, além dos requisitos de capacitação do trabalhador, equipamentos e procedimentos de emergência.",
        ],
      },
      {
        heading: "Quem precisa do treinamento NR-35",
        body: [
          "Todo trabalhador que execute atividade em altura deve ser capacitado. O treinamento é obrigatório antes de iniciar a atividade e deve ser periódico.",
        ],
        bullets: [
          "Trabalhadores que atuam acima de 2,00 m de altura",
          "Equipes de manutenção, telecomunicações, construção e instalação",
          "Pessoas autorizadas e supervisor de trabalho em altura",
        ],
      },
      {
        heading: "Carga horária e validade",
        body: [
          "O treinamento NR-35 tem carga horária mínima de 8 horas para o trabalhador autorizado, com conteúdo teórico e, fundamentalmente, parte prática.",
          "O certificado é válido por 2 anos. A reciclagem também tem 8 horas e deve anteceder o vencimento. Em caso de mudança de procedimentos, acidente grave ou retorno de afastamento, a reciclagem pode ser exigida antes do prazo.",
        ],
      },
      {
        heading: "Parte prática é obrigatória",
        body: [
          "A NR-35 exige atividades práticas de aplicação dos conceitos. Por isso, treinamentos exclusivamente online não são suficientes para a NR-35: oferecemos modalidade semipresencial (teoria online + prática presencial) e totalmente presencial, em nosso centro ou in company.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe treinamento NR-35 100% online válido?",
        a: "Não. A NR-35 exige parte prática, portanto o treinamento deve incluir componente presencial. A modalidade semipresencial combina teoria online com prática presencial.",
      },
      {
        q: "Qual a validade do certificado NR-35?",
        a: "2 anos. A reciclagem de 8 horas deve ser feita antes do vencimento e também em situações específicas, como mudança de procedimentos ou após acidente grave.",
      },
      {
        q: "A partir de que altura o treinamento é obrigatório?",
        a: "A partir de 2,00 metros do nível inferior, quando houver risco de queda, conforme definição da NR-35.",
      },
      {
        q: "O treinamento NR-35 pode ser in company?",
        a: "Sim. Levamos o treinamento para a sua empresa, com a parte prática adaptada à realidade do seu ambiente de trabalho.",
      },
    ],
    relatedService: { label: "Agendar treinamento NR-35", href: "/treinamento" },
  },
  {
    slug: "ltcat-laudo-tecnico-das-condicoes-ambientais",
    title: "LTCAT: o laudo técnico das condições ambientais do trabalho",
    metaDescription:
      "Entenda o que é o LTCAT, para que serve, qual a diferença para o PGR/PPRA e por que ele impacta os tributos (RAT/FAP) da sua empresa. Elaboração pela AS7 Engenharia.",
    keyword: "LTCAT laudo técnico",
    category: "Documentação",
    publishedAt: "2026-06-26",
    excerpt:
      "O LTCAT documenta as condições ambientais do trabalho e impacta tributos como RAT e FAP. Veja para que serve e como diferir do PGR.",
    sections: [
      {
        heading: "O que é o LTCAT",
        body: [
          "O LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) é o documento que descreve as condições ambientais dos setores e cargos da empresa, com foco na exposição a agentes ambientais (físicos, químicos e biológicos).",
          "Diferente do PGR, o LTCAT tem finalidade previdenciária: ele embasa a apuração de tributos como o RAT (Risco de Acidente do Trabalho) e o FAP (Fator Acidentário de Prevenção), além de respaldar defesas em casos de insalalidade e perícias do INSS.",
        ],
      },
      {
        heading: "Para que serve o LTCAT",
        body: [
          "O LTCAT é peça-chave na gestão tributária e trabalhista da empresa.",
        ],
        bullets: [
          "Base para o enquadramento do RAT e do FAP",
          "Respaldo técnico em ações de insalalidade e aposentadoria especial",
          "Defesa em casos de NTEP (Nexo Técnico Epidemiológico Previdenciário)",
          "Subsídio para o PCMSO e o PGR",
        ],
      },
      {
        heading: "Qual a diferença entre LTCAT e PGR",
        body: [
          "O PGR é um programa de gestão de riscos (NR-01), com plano de ação. O LTCAT é um laudo descritivo das condições ambientais, com finalidade previdenciária. Os documentos se complementam: o levantamento de riscos do PGR alimenta o LTCAT.",
        ],
      },
      {
        heading: "Quem elabora e quando atualizar",
        body: [
          "O LTCAT deve ser elaborado por engenheiro de segurança do trabalho ou médico do trabalho, com ART. Recomenda-se atualização quando há mudanças no processo, na empresa ou nas informações que baseiam os tributos previdenciários.",
        ],
      },
    ],
    faq: [
      {
        q: "LTCAT é a mesma coisa que PGR?",
        a: "Não. O PGR é um programa de gestão de riscos (NR-01). O LTCAT é um laudo descritivo com finalidade previdenciária, que impacta tributos como RAT e FAP.",
      },
      {
        q: "O LTCAT é obrigatório?",
        a: "É indispensável para a correta apuração de tributos previdenciários e para defesa em ações trabalhistas e perícias. Empresas que ignoram o LTCAT podem pagar tributos indevidos.",
      },
      {
        q: "Com que frequência atualizar o LTCAT?",
        a: "Sempre que houver mudanças no processo de trabalho, na atividade econômica ou nos dados que embasam o RAT/FAP. Boa prática é revisá-lo anualmente.",
      },
      {
        q: "Quem pode assinar o LTCAT?",
        a: "Engenheiro de segurança do trabalho ou médico do trabalho, com emissão da respectiva ART.",
      },
    ],
    relatedService: { label: "Solicitar elaboração do LTCAT", href: "/" },
  },
  {
    slug: "diferenca-entre-pcmso-e-pgr",
    title: "Diferença entre PCMSO e PGR: entenda de uma vez",
    metaDescription:
      "PCMSO e PGR se confundem, mas têm focos diferentes. Entenda a diferença entre o PCMSO (saúde, NR-07) e o PGR (riscos, NR-01) e como eles se integram.",
    keyword: "PCMSO PGR diferença",
    category: "Documentação",
    publishedAt: "2026-06-26",
    excerpt:
      "PCMSO cuida da saúde do trabalhador (NR-07); PGR gerencia os riscos (NR-01). Entenda a diferença e por que um depende do outro.",
    sections: [
      {
        heading: "O que é cada documento",
        body: [
          "O PGR (Programa de Gerenciamento de Riscos), da NR-01, identifica e gerencia os riscos ocupacionais do ambiente de trabalho — físicos, químicos, biológicos, ergonômicos e de acidentes.",
          "O PCMSO (Programa de Controle Médico de Saúde Ocupacional), da NR-07, é o programa de vigilância à saúde do trabalhador: define exames médicos, periodicidade e diretrizes de acompanhamento clínico.",
        ],
      },
      {
        heading: "A diferença prática",
        body: [
          "De forma simples: o PGR olha para o ambiente e os riscos; o PCMSO olha para a saúde das pessoas expostas a esses riscos.",
        ],
        bullets: [
          "PGR: mapeia e controla riscos (NR-01)",
          "PCMSO: acompanha a saúde do trabalhador (NR-07)",
          "Um depende do outro: o PCMSO é elaborado a partir dos riscos identificados no PGR",
        ],
      },
      {
        heading: "Por que um depende do outro",
        body: [
          "A NR-07 determina que o PCMSO considere os riscos identificados no PGR. Assim, sem um PGR bem feito, o PCMSO fica incompleto — exames podem ser subdimensionados ou em excesso. Por isso, o ideal é elaborar os dois de forma integrada.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso ter PGR sem PCMSO?",
        a: "Não de forma completa. Os dois são obrigatórios e integrados: o PCMSO usa os riscos do PGR para definir os exames necessários.",
      },
      {
        q: "Quem elabora o PCMSO?",
        a: "O PCMSO é coordenado por um médico do trabalho, que define os exames e a periodicidade conforme os riscos do PGR.",
      },
      {
        q: "PGR substitui o PCMSO?",
        a: "Não. São programas distintos e complementares. O PGR gerencia riscos (NR-01); o PCMSO cuida da saúde (NR-07).",
      },
      {
        q: "Os exames do PCMSO são os mesmos para todos?",
        a: "Não. Os exames variam conforme os riscos a que cada função está exposta, identificados no PGR.",
      },
    ],
    relatedService: { label: "Solicitar PGR e PCMSO integrados", href: "/" },
  },
  {
    slug: "avaliacao-psicossocial-nr-01",
    title: "Avaliação psicossocial NR-01: o que é e quando fazer",
    metaDescription:
      "A atualização da NR-01 trouxe o gerenciamento de riscos psicossociais. Entenda o que é a avaliação psicossocial, quando é necessária e como a AS7 conduz o processo.",
    keyword: "avaliação psicossocial NR-01",
    category: "Saúde Ocupacional",
    publishedAt: "2026-06-26",
    excerpt:
      "A NR-01 passou a exigir o gerenciamento de riscos psicossociais. Veja o que é a avaliação psicossocial, o que ela contempla e como implantá-la.",
    sections: [
      {
        heading: "O que são riscos psicossociais",
        body: [
          "Riscos psicossociais são aspectos do trabalho que podem causar danos à saúde mental e física dos trabalhadores, como estresse, sobrecarga, ritmo excessivo, falta de controle sobre as tarefas, conflitos, violência e assédio.",
          "Com a atualização da NR-01, o gerenciamento desses riscos passou a integrar o PGR, exigindo identificação, avaliação e medidas de controle.",
        ],
      },
      {
        heading: "O que é a avaliação psicossocial",
        body: [
          "A avaliação psicossocial é o processo de identificar e analisar os fatores psicossociais presentes no trabalho, com instrumentos válidos e profissionais habilitados, para orientar ações de prevenção e promoção da saúde mental.",
        ],
        bullets: [
          "Identificação de fatores de risco psicossocial",
          "Aplicação de instrumentos e entrevistas com a equipe",
          "Análise dos resultados por profissional habilitado",
          "Plano de ação integrado ao PGR",
        ],
      },
      {
        heading: "Quando realizar",
        body: [
          "A avaliação faz parte do gerenciamento contínuo de riscos da NR-01. Recomenda-se realizá-la na implantação do PGR, periodicamente e sempre que houver mudanças relevantes na organização do trabalho, altos índices de afastamento ou sinais de adoecimento mental.",
        ],
      },
      {
        heading: "Como a AS7 conduz o processo",
        body: [
          "Nossa equipe conta com psicóloga habilitada para realizar avaliações ergonômicas cognitivas e conduzir o processo de forma ética e sigilosa, entregando um relatório técnico que orienta a empresa na prevenção e na conformidade com a NR-01.",
        ],
      },
    ],
    faq: [
      {
        q: "A avaliação psicossocial é obrigatória?",
        a: "O gerenciamento de riscos psicossociais integra a NR-01 e deve compor o PGR. A avaliação é o instrumento técnico para cumprir essa etapa.",
      },
      {
        q: "Quem aplica a avaliação psicossocial?",
        a: "Profissionais habilitados, como psicólogos, com instrumentos válidos e respeito ao sigilo. Na AS7, a avaliação é conduzida por nossa psicóloga responsável.",
      },
      {
        q: "A avaliação psicossocial substitui o PGR?",
        a: "Não. Ela é uma etapa do PGR, dedicada aos riscos psicossociais previstos na NR-01.",
      },
      {
        q: "A empresa fica sabendo das respostas individuais?",
        a: "O processo preserva o sigilo individual. O relatório entregue à empresa trata os dados de forma agregada, para apoiar decisões de prevenção.",
      },
    ],
    relatedService: { label: "Agendar avaliação psicossocial", href: "/psicossocial" },
  },
  {
    slug: "projeto-de-linha-de-vida-e-sistemas-de-ancoragem",
    title: "Projeto de linha de vida e sistemas de ancoragem (NR-35)",
    metaDescription:
      "Saiba como funciona um projeto de linha de vida para trabalho em altura: quando é obrigatório, quem pode projetar, inspeção periódica e execução pela AS7 Engenharia.",
    keyword: "projeto linha de vida",
    category: "Engenharia",
    publishedAt: "2026-06-26",
    excerpt:
      "Linhas de vida e sistemas de ancoragem são essenciais para o trabalho em altura conforme a NR-35. Veja quando projetar, quem executa e como manter.",
    sections: [
      {
        heading: "O que é um sistema de linha de vida",
        body: [
          "A linha de vida é um sistema de proteção contra quedas composto por pontos de ancoragem, cabos e acessórios, ao qual o trabalhador conecta seu cinto de segurança durante o trabalho em altura.",
          "Ela é uma medida de proteção coletiva/individual obrigatória quando não é possível eliminar o risco de queda por outros meios, sendo regida principalmente pela NR-35 e, na construção civil, pela NR-18.",
        ],
      },
      {
        heading: "Quando o projeto é necessário",
        body: [
          "Todo sistema de ancoragem deve ser projetado por profissional habilitado e ter Anotação de Responsabilidade Técnica (ART). Usar pontos improvisados (torres, tubulações) sem cálculo é uma das principais causas de acidentes graves.",
        ],
        bullets: [
          "Trabalho em altura em telhados, silos, tanques e coberturas",
          "Manutenção industrial em estruturas elevadas",
          "Acesso a equipamentos em altitude",
          "Qualquer situação com risco de queda acima de 2,00 m",
        ],
      },
      {
        heading: "O que o projeto contempla",
        body: [
          "Um projeto de linha de vida bem feito garante que a estrutura suportará as cargas de impacto de uma queda. Ele inclui memorial de cálculo, plantas, especificação de materiais certificados e procedimentos de uso e inspeção.",
        ],
      },
      {
        heading: "Execução, inspeção e certificação",
        body: [
          "A AS7 Engenharia projeta, instala e inspeciona sistemas de linha de vida, emitindo a ART do projeto e da instalação. Sistemas em uso exigem inspeção periódica por profissional habilitado para garantir a integridade ao longo do tempo.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso instalar a linha de vida sem projeto?",
        a: "Não. O sistema deve ser projetado por engenheiro habilitado, com memorial de cálculo e ART. Ancoragens improvisadas podem falhar em uma queda real.",
      },
      {
        q: "Quem pode projetar uma linha de vida?",
        a: "Um engenheiro habilitado (geralmente engenheiro de segurança, civil ou mecânico), com emissão da ART de projeto e instalação.",
      },
      {
        q: "A linha de vida precisa de inspeção periódica?",
        a: "Sim. Sistemas em uso devem ser inspecionados por profissional habilitado periodicamente e após qualquer evento que possa comprometer a integridade.",
      },
      {
        q: "Linha de vida substitui o treinamento NR-35?",
        a: "Não. O treinamento NR-35 é obrigatório para quem trabalha em altura. A linha de vida é o equipamento de proteção; o treinamento capacita o trabalhador a usá-la corretamente.",
      },
    ],
    relatedService: { label: "Solicitar projeto de linha de vida", href: "/linhadevida" },
  },
  {
    slug: "checklist-de-seguranca-do-trabalho-por-nr",
    title: "Checklist de segurança do trabalho por NR: como organizar",
    metaDescription:
      "Monte um checklist de segurança do trabalho eficaz, organizado por NRs (NR-01, NR-06, NR-12, NR-35 e outras). Veja itens essenciais e como implantar na sua empresa.",
    keyword: "checklist segurança trabalho NR",
    category: "Gestão",
    publishedAt: "2026-06-26",
    excerpt:
      "Um checklist de segurança do trabalho organiza a conformidade por NRs. Veja os itens essenciais por norma e como implantar de forma prática.",
    sections: [
      {
        heading: "Por que usar um checklist de SST",
        body: [
          "Um checklist transforma as obrigações das Normas Regulamentadoras em rotina verificável. Ele ajuda a empresa a antecipar não conformidades, organizar auditorias internas e manter a documentação sempre pronta para fiscalização.",
          "A organização por NR facilita a divisão de responsabilidades e o acompanhamento dos prazos por área.",
        ],
      },
      {
        heading: "Itens essenciais por NR",
        body: [
          "Um bom ponto de partida cobre as normas mais cobradas em fiscalização.",
        ],
        bullets: [
          "NR-01: PGR atualizado, registro de riscos, ordens de serviço e gerenciamento de riscos psicossociais",
          "NR-04/NR-05: SESMT e CIPA constituídos e em dia",
          "NR-06: EPIs adequados, entregues e com treinamento registrado",
          "NR-07: PCMSO vigente e exames em dia",
          "NR-09/NR-15: avaliações ambientais e enquadramento de insalalidade",
          "NR-12: máquinas adequadas com laudo",
          "NR-35: trabalhadores em altura treinados e sistemas de ancoragem em dia",
        ],
      },
      {
        heading: "Como implantar na sua empresa",
        body: [
          "Defina um responsável, estabeleça periodicidade (diária, semanal, mensal), registre cada verificação e trate as não conformidades como ações do PGR. Ferramentas digitais ajudam, mas o essencial é a disciplina do ciclo verificar–agir.",
        ],
      },
    ],
    faq: [
      {
        q: "Com que frequência aplicar o checklist de SST?",
        a: "Depende do item. Verificações operacionais podem ser diárias ou semanais; itens documentais (PGR, PCMSO, laudos) são conferidos mensalmente ou conforme o prazo de validade.",
      },
      {
        q: "O checklist substitui o PGR?",
        a: "Não. O checklist é uma ferramenta operacional de verificação; o PGR é o programa obrigatório de gestão de riscos da NR-01. Um alimenta o outro.",
      },
      {
        q: "Quem deve aplicar o checklist?",
        a: "O SESMT, a CIPA e os líderes de área, conforme as responsabilidades definidas na NR-04 e na NR-05.",
      },
      {
        q: "A AS7 ajuda a montar o checklist?",
        a: "Sim. No acompanhamento de consultoria, ajudamos a estruturar checklists por NR e a integrá-los ao PGR da sua empresa.",
      },
    ],
    relatedService: { label: "Contratar consultoria em SST", href: "/engenharia" },
  },
];
