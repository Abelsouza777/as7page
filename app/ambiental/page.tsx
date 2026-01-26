"use client";
import React, { useState } from 'react';

// =================================================================
// ÍCONES TEMÁTICOS (SVG)
// =================================================================
const IconMicroscope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 1 1-2-2V6h6v4a2 2 0 1 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
);

const IconFileCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
);

const IconMountain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
);

const IconActivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);

// =================================================================
// COMPONENTE PRINCIPAL: SOLUÇÕES AMBIENTAIS AS7
// =================================================================
export default function SolucoesAmbientaisPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const enviarWhatsapp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.nome || !formData.telefone) return alert("Preencha os campos obrigatórios.");
    const texto = `*Interesse em Soluções Ambientais*%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}%0A*Mensagem:* ${formData.mensagem}`;
    window.open("https://wa.me/5545999799513?text=" + texto, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-30 w-full bg-emerald-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/as7.png" alt="AS7" width={100} height={40} />
          <nav className="hidden md:flex space-x-8 text-sm font-bold text-emerald-50 uppercase tracking-widest">
            <a href="#atribuicoes" className="hover:text-white">Atribuições</a>
            <a href="#estudos" className="hover:text-white">Estudos Técnicos</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main className="flex-grow">
        
        {/* HERO */}
        <section className="bg-emerald-900 text-white py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Engenharia Ambiental Técnica e Legal</h1>
            <p className="text-emerald-200 text-lg md:text-xl font-light">Diagnósticos, monitoramento e gestão integral para a viabilidade do seu empreendimento.</p>
          </div>
        </section>

        {/* SEÇÃO DE ATRIBUIÇÕES - BASEADO NAS IMAGENS DO CREA */}
        <section id="atribuicoes" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">Nossas Atribuições Profissionais</h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Bloco 1: Diagnóstico */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform border border-emerald-50">
              <div className="text-emerald-600 mb-6"><IconMicroscope /></div>
              <h3 className="text-xl font-bold mb-4">Diagnóstico Ambiental</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Caracterização completa do Meio Físico, Biótico e Antrópico. Ensaios químicos de solos e identificação precisa de fontes poluidoras.
              </p>
            </div>

            {/* Bloco 2: Monitoramento */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform border border-emerald-50">
              <div className="text-emerald-600 mb-6"><IconActivity /></div>
              <h3 className="text-xl font-bold mb-4">Monitoramento e Controle</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Controle de poluição e monitoramento ambiental contínuo. Implementação de tecnologias para controle de qualidade e indicadores.
              </p>
            </div>

            {/* Bloco 3: Gestão */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform border border-emerald-50">
              <div className="text-emerald-600 mb-6"><IconFileCheck /></div>
              <h3 className="text-xl font-bold mb-4">Gestão e Auditoria</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Avaliação de riscos, auditorias ambientais, estudos de viabilidade técnica e adequação às normas vigentes.
              </p>
            </div>

            {/* Bloco 4: Recuperação */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform border border-emerald-50">
              <div className="text-emerald-600 mb-6"><IconMountain /></div>
              <h3 className="text-xl font-bold mb-4">Reserva e Recuperação</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Projetos de reserva ambiental e recuperação de áreas. Planejamento estratégico para potencialização de impactos positivos.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE ESTUDOS TÉCNICOS ESPECÍFICOS (IMAGEM 2) */}
        <section id="estudos" className="bg-slate-100 dark:bg-zinc-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-black text-emerald-800 dark:text-emerald-500 mb-6 uppercase leading-none">
                  Estudos de Impacto e Controle
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                  Executamos os estudos mais complexos exigidos pelos órgãos ambientais, garantindo segurança jurídica ao seu projeto.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['EIA / RIMA', 'PCA / RCA', 'Modelagem Ambiental', 'Certificação', 'Educação Ambiental', 'Indicadores'].map((item) => (
                    <div key={item} className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="bg-white dark:bg-zinc-800 p-4 rounded-3xl shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800" alt="Natureza e Engenharia" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-emerald-800 rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Sua empresa precisa de regularização?</h3>
            <p className="text-emerald-100 mb-10">Fale diretamente com um engenheiro habilitado para sua demanda ambiental.</p>
            
            <form onSubmit={enviarWhatsapp} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome*" className="p-4 rounded-2xl outline-none" required />
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="WhatsApp*" className="p-4 rounded-2xl outline-none" required />
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Como podemos ajudar?" rows={3} className="p-4 rounded-2xl outline-none md:col-span-2" />
              <button type="submit" className="md:col-span-2 bg-green-500 hover:bg-green-400 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-widest shadow-xl">
                Iniciar Atendimento Técnico
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 py-10 text-center border-t border-emerald-900">
        <p className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} AS7 ENGENHARIA | Soluções Ambientais
        </p>
      </footer>
    </div>
  );
}