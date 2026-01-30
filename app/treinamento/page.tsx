"use client";
import React, { useState, useEffect } from 'react';

// =================================================================
// DADOS DOS TREINAMENTOS (NRs)
// =================================================================

interface Training {
  id: string;
  nr: string;
  title: string;
  desc: string;
  modes: ('Presencial' | 'Online' | 'Semipresencial')[];
  iconPath: string; // SVG path
  color: string;
}

const trainingsData: Training[] = [
  { 
    id: 'nr05', 
    nr: 'NR 05', 
    title: 'CIPA', 
    desc: 'Comissão Interna de Prevenção de Acidentes. Formação de cipeiros e designados.', 
    modes: ['Presencial', 'Semipresencial'],
    color: 'emerald',
    iconPath: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
  },
  { 
    id: 'nr06', 
    nr: 'NR 06', 
    title: 'EPI - Equipamentos de Proteção', 
    desc: 'Uso correto, guarda e conservação de Equipamentos de Proteção Individual.', 
    modes: ['Online', 'Presencial'],
    color: 'blue',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
  },
  { 
    id: 'nr10', 
    nr: 'NR 10', 
    title: 'Segurança em Eletricidade', 
    desc: 'Curso Básico, SEP e Reciclagem. Para eletricistas e profissionais da área.', 
    modes: ['Online', 'Presencial', 'Semipresencial'],
    color: 'yellow',
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
  },
  { 
    id: 'nr12', 
    nr: 'NR 12', 
    title: 'Máquinas e Equipamentos', 
    desc: 'Capacitação para operação segura de maquinário conforme a norma.', 
    modes: ['Presencial', 'Semipresencial'],
    color: 'orange',
    iconPath: 'M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
  },
  { 
    id: 'nr18', 
    nr: 'NR 18', 
    title: 'Construção Civil', 
    desc: 'Condições e Meio Ambiente de Trabalho na Indústria da Construção.', 
    modes: ['Presencial'],
    color: 'stone',
    iconPath: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
  },
  { 
    id: 'nr31', 
    nr: 'NR 31', 
    title: 'Agroindústria (Rural)', 
    desc: 'Segurança e Saúde no Trabalho na Agricultura, Pecuária e Exploração Florestal.', 
    modes: ['Presencial', 'Semipresencial'],
    color: 'green',
    iconPath: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
  },
  { 
    id: 'nr33', 
    nr: 'NR 33', 
    title: 'Espaço Confinado', 
    desc: 'Vigia e Trabalhador autorizado. Obrigatório prática presencial.', 
    modes: ['Semipresencial', 'Presencial'],
    color: 'gray',
    iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
  },
  { 
    id: 'nr34', 
    nr: 'NR 34', 
    title: 'Indústria Naval', 
    desc: 'Condições e Meio Ambiente de Trabalho na Indústria da Construção e Reparação Naval.', 
    modes: ['Presencial'],
    color: 'cyan',
    iconPath: 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' // Generic arrow/move icon representing complexity or specific logic
  },
  { 
    id: 'nr35', 
    nr: 'NR 35', 
    title: 'Trabalho em Altura', 
    desc: 'Capacitação teórica e prática para trabalhos acima de 2,00m de altura.', 
    modes: ['Semipresencial', 'Presencial'],
    color: 'sky',
    iconPath: 'M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
  },
];

// =================================================================
// COMPONENTES AUXILIARES
// =================================================================

// Ícones (Mantidos do seu código)
const MenuIcon: React.FC<any> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
);
const CloseIcon: React.FC<any> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

// Dados de navegação
const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Treinamentos", href: "#lista-treinamentos" },
  { name: "Metodologia", href: "#metodologia" },
  { name: "Contato", href: "#contato" },
];

// Componente para Ícones das NRs
const NrIcon = ({ path, color }: { path: string, color: string }) => (
  <div className={`p-3 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-600 dark:text-${color}-400 mb-4 inline-block`}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  </div>
);

// Componente para Badges de Modalidade
const ModeBadge = ({ mode }: { mode: string }) => {
  let colorClass = "";
  if (mode === "Online") colorClass = "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200";
  else if (mode === "Presencial") colorClass = "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200";
  else colorClass = "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200"; // Semipresencial

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass} mr-2 mb-2`}>
      {mode}
    </span>
  );
};

// =================================================================
// COMPONENTE PRINCIPAL
// =================================================================

export default function TrainingsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filterMode, setFilterMode] = useState<string>("Todos");

  // Lógica de Filtro Inteligente
  const filteredTrainings = trainingsData.filter(item => {
    const matchesText = item.nr.toLowerCase().includes(filterText.toLowerCase()) || 
                        item.title.toLowerCase().includes(filterText.toLowerCase());
    const matchesMode = filterMode === "Todos" ? true : item.modes.some(m => m === filterMode || (filterMode === "Online" && m === "Semipresencial")); // Semipresencial também aparece em filtros online se desejar, mas aqui deixei separado ou junto
    return matchesText && matchesMode;
  });

  const enviarWhatsappCurso = (nr: string) => {
    const texto = `Olá! Gostaria de um orçamento para o treinamento de *${nr}*.`;
    window.open(`https://wa.me/5545999799513?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">
      
      {/* 1. CABEÇALHO (Consistente com seu site) */}
      <header className="w-full bg-slate-800 dark:bg-slate-950 shadow-lg fixed top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex flex-col items-center">
             <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                {/* Aqui você pode colocar sua Logo */}
                <span className="bg-white text-slate-900 px-2 py-1 rounded">AS7</span>
                <span>TREINAMENTOS</span>
             </h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-200 hover:text-white transition font-medium">{item.name}</a>
            ))}
          </nav>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-slate-200 hover:bg-slate-700">{item.name}</a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow pt-[80px]">

        {/* 2. HERO SECTION - Título Específico */}
        <section id="hero" className="bg-white dark:bg-zinc-900 py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm">Capacitação Profissional</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6 leading-tight">
              Treinamentos de NR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Presenciais e Online</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Garanta a conformidade da sua empresa e a segurança da sua equipe com cursos atualizados, certificados válidos em todo território nacional e instrutores qualificados.
            </p>

            {/* BARRA DE PESQUISA INTELIGENTE */}
            <div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-2 rounded-full shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center">
               <div className="pl-4 text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               </div>
               <input 
                  type="text" 
                  placeholder="Qual NR você procura? (Ex: 35, 10, CIPA...)" 
                  className="w-full p-3 bg-transparent outline-none text-gray-700 dark:text-gray-200"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
               />
            </div>
          </div>
        </section>

        {/* 3. ÁREA DE FILTROS E LISTA */}
        <section id="lista-treinamentos" className="py-16 bg-gray-50 dark:bg-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filtros de Botão */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Todos', 'Online', 'Presencial'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setFilterMode(mode)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                    filterMode === mode 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-white dark:bg-zinc-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-600 hover:bg-gray-100'
                  }`}
                >
                  {mode === 'Todos' ? 'Ver Todos' : `Apenas ${mode}`}
                </button>
              ))}
            </div>

            {/* GRID DE CARDS INTELIGENTES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrainings.length > 0 ? (
                filteredTrainings.map((train) => (
                  <div key={train.id} className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 flex flex-col border-t-4" style={{ borderColor: `var(--tw-color-${train.color}-500)` }}>
                    
                    <div className="flex justify-between items-start mb-4">
                      <NrIcon path={train.iconPath} color={train.color} />
                      <div className="flex flex-col items-end">
                        <span className={`text-2xl font-black text-${train.color}-600 dark:text-${train.color}-400`}>{train.nr}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{train.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{train.desc}</p>

                    <div className="flex flex-wrap mb-6">
                      {train.modes.map(m => <ModeBadge key={m} mode={m} />)}
                    </div>

                    <button 
                      onClick={() => enviarWhatsappCurso(train.nr)}
                      className="w-full py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white dark:border-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white transition duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Solicitar Proposta</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-xl text-gray-500">Nenhum treinamento encontrado com esse critério.</p>
                  <button onClick={() => {setFilterText(''); setFilterMode('Todos')}} className="mt-4 text-indigo-600 font-bold hover:underline">Limpar Filtros</button>
                </div>
              )}
            </div>

            {/* Aviso Informativo (Importante para NR 33/35) */}
            <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <h4 className="font-bold text-blue-800 dark:text-blue-200">Nota sobre Cursos Práticos</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  Algumas normas (como NR 33 e NR 35) exigem parte prática presencial obrigatória. Nossos cursos "Semipresenciais" incluem a teoria online e agendamento da prática em nosso centro de treinamento ou in-company.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. FORMULÁRIO DE CONTATO GERAL */}
        <section id="contato" className="py-20 bg-white dark:bg-zinc-900">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Dúvidas ou Personalização?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Precisa treinar uma equipe grande ou quer levar o treinamento para dentro da sua empresa?</p>
              <a 
                href="https://wa.me/5545999799513" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                   <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                </svg>
                Falar com Consultor
              </a>
           </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-center py-6 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} AS7 Engenharia e Treinamentos. Todos os direitos reservados.
      </footer>

    </div>
  );
}