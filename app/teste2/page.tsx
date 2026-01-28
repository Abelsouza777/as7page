"use client";
import React, { useState, useEffect } from 'react';

// --- TIPAGENS ---
interface Service {
  id: string;
  category: 'Treinamento' | 'Engenharia' | 'Documentação';
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- COMPONENTES DE ÍCONE ---
const IconShield = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const IconEngine = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconDoc = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

const SERVICES: Service[] = [
  { id: '1', category: 'Treinamento', title: 'Treinamentos Normativos', description: 'Capacitação técnica para NRs 06, 10, 12, 31, 33 e 35 com foco em prevenção real.', icon: <IconShield /> },
  { id: '2', category: 'Documentação', title: 'Inteligência em SST', description: 'Elaboração estratégica de PGR, PCMSO e LTCAT para total conformidade legal.', icon: <IconDoc /> },
  { id: '3', category: 'Engenharia', title: 'Sistemas de Ancoragem', description: 'Engenharia aplicada em Linhas de Vida e soluções para trabalho em altura.', icon: <IconEngine /> },
  { id: '4', category: 'Engenharia', title: 'Adequação NR 12', description: 'Diagnóstico e implementação de segurança em máquinas e equipamentos industriais.', icon: <IconEngine /> },
  { id: '5', category: 'Documentação', title: 'Avaliação Psicossocial', description: 'Cumprimento da NR 01 com foco na saúde mental e aptidão do colaborador.', icon: <IconDoc /> },
  { id: '6', category: 'Treinamento', title: 'Gestão 360º', description: 'Consultoria e assessoria contínua para manter sua empresa protegida 24/7.', icon: <IconShield /> },
];

export default function ProfessionalAs7Site() {
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' });
  const [typedText, setTypedText] = useState("");
  const fullText = "Segurança, Engenharia e Conformidade.";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Efeito de digitação
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);

    // Controle de scroll para a Navbar
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        clearInterval(interval);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `*SOLICITAÇÃO DE DIAGNÓSTICO TÉCNICO*%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}%0A*Mensagem:* ${formData.mensagem}`;
    window.open(`https://wa.me/5545999799513?text=${texto}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- NAVBAR FIXA COM LOGO --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/as7logo.png" alt="AS7 Engenharia" className="h-20 md:h-24 w-auto object-contain" />
           
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
            <a href="#servicos" className="hover:text-indigo-600 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-indigo-600 transition-colors">Contato</a>
            <a href="#contato" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
              Diagnóstico Grátis
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-zinc-900/50 skew-x-12 translate-x-32 hidden lg:block"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full uppercase">
              Excelência Técnica em SST
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
              Onde a Engenharia encontra a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 italic">
                {typedText}
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Protegemos o seu maior patrimônio através de soluções de engenharia de segurança de alto impacto e conformidade rigorosa com as normas vigentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:bg-indigo-600 transition-all shadow-xl text-center">
                Solicitar Consultoria
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/docsst.png" alt="Engenharia e Segurança" className="w-full h-auto grayscale hover:grayscale-0 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Treinamentos', val: 'NRs' },
            { label: 'Conformidade', val: 'eSocial' },
            { label: 'Suporte', val: 'Técnico' },
            { label: 'Engenharia', val: 'Especializada' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-indigo-400">{stat.val}</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="servicos" className="py-24 bg-slate-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl border-l-4 border-indigo-600 pl-6">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Soluções Corporativas</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 italic">Estratégias de engenharia para empresas que buscam zero acidentes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800 hover:border-indigo-500 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter text-indigo-500 mb-2 block">{s.category}</span>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Diagnóstico Técnico</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Receba um relatório preliminar das adequações necessárias para sua empresa estar 100% segura.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                  <div className="font-bold text-indigo-600 text-lg tracking-widest">WPP.</div>
                  <div className="text-slate-500">(45) 99979-9513</div>
               </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900 p-10 rounded-3xl border border-white dark:border-zinc-800 shadow-2xl">
            <form onSubmit={handleSendWhatsapp} className="space-y-4">
              <input 
                type="text" placeholder="Nome do Responsável" 
                className="w-full p-4 rounded-xl bg-white dark:bg-zinc-800 ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                required
              />
              <input 
                type="tel" placeholder="WhatsApp / Telefone Corporativo" 
                className="w-full p-4 rounded-xl bg-white dark:bg-zinc-800 ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                required
              />
              <textarea 
                placeholder="Descreva brevemente sua necessidade (ex: Treinamento NR35, Adequação NR12...)" rows={4}
                className="w-full p-4 rounded-xl bg-white dark:bg-zinc-800 ring-1 ring-slate-200 dark:ring-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              ></textarea>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">
                ENVIAR PARA ENGENHARIA
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER ATUALIZADO COM LOGO --- */}
      <footer className="w-full bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <img src="/as7logo.png" alt="AS7" className="h-12 brightness-0 invert opacity-80" />
          <div className="h-px w-24 bg-indigo-600"></div>
          <p className="text-sm text-slate-400 max-w-md text-center">
            Excelência técnica em Segurança do Trabalho e Engenharia. Garantindo a integridade dos seus colaboradores e a conformidade da sua empresa.
          </p>
          <p className="text-xs text-slate-500 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} AS7 ENGENHARIA - Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5545999799513"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
        </svg>
      </a>

    </div>
  );
}