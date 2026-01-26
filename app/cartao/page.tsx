"use client";
import React, { useState } from 'react';

// =================================================================
// Ícones e Dados - AS7 ENGENHARIA
// =================================================================

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navItems = [
  { name: "Início", href: "#" },
  { name: "Serviços", href: "#servicos" },
  { name: "Contato", href: "#contato" },
];

const servicos = [
  {
    titulo: "Treinamentos de NR",
    desc: "Capacitação completa e certificada para NR 06, 10, 12, 31, 33 e 35.",
    icon: "🎓"
  },
  {
    titulo: "Documentação Técnica",
    desc: "Elaboração de PCMSO, PGR e LTCAT com rigor técnico e legal.",
    icon: "📄"
  },
  {
    titulo: "Engenharia de Linha de Vida",
    desc: "Projetos, instalação e certificação de sistemas de linha de vida.",
    icon: "🏗️"
  },
  {
    titulo: "Adequação NR 12",
    desc: "Laudos, avaliações e adequação completa de máquinas às normas vigentes.",
    icon: "⚙️"
  },
  {
    titulo: "Avaliação Psicossocial",
    desc: "Realização e adequação de avaliações psicossociais para trabalhadores.",
    icon: "🧠"
  },
  {
    titulo: "Consultoria e Assessoria",
    desc: "Suporte especializado em Engenharia de Segurança do Trabalho em geral.",
    icon: "🛡️"
  }
];

// =================================================================
// COMPONENTE PRINCIPAL
// =================================================================

export default function ServicosEngenhariaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // CORREÇÃO: Tipando o evento de mudança (onChange)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // CORREÇÃO: Tipando o evento de submissão (onSubmit)
  const enviarWhatsapp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.nome || !formData.telefone) {
        alert("Por favor, preencha nome e telefone.");
        return;
    }
    const texto = `*Interesse em Serviços - AS7*%0A%0A` +
                  `*Nome:* ${formData.nome}%0A` +
                  `*Telefone:* ${formData.telefone}%0A` +
                  `*Mensagem:* ${formData.mensagem}`;

    const numero = "5545999799513"; 
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans scroll-smooth">

      {/* 1. CABEÇALHO */}
      <header className="sticky top-0 z-50 w-full bg-slate-900 shadow-2xl border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/as7.png" alt="Logo AS7" width={110} height={35} className="rounded" />
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-200 hover:text-amber-500 transition font-bold uppercase text-xs tracking-widest">
                {item.name}
              </a>
            ))}
          </nav>

          <button onClick={toggleMenu} className="md:hidden text-amber-500 p-2">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-slate-900 border-t border-slate-800`}>
          <nav className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={toggleMenu} className="block py-4 text-slate-200 border-b border-slate-800 font-semibold uppercase text-sm">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tight">
            AS7 <span className="text-amber-600">Engenharia</span>
          </h2>
          <div className="h-1.5 w-32 bg-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções completas em Engenharia de Segurança e adequação normativa.
          </p>
        </div>

        {/* 2. GRID DE SERVIÇOS */}
        <section id="servicos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicos.map((servico, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-700 hover:border-amber-500 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {servico.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                {servico.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {servico.desc}
              </p>
            </div>
          ))}
        </section>

        {/* 3. SEÇÃO DE CONTATO */}
        <section id="contato" className="relative overflow-hidden bg-slate-900 rounded-3xl shadow-2xl border border-slate-700">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 relative z-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Solicite um orçamento especializado
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                Estamos prontos para atender sua demanda técnica com agilidade e total conformidade legal.
              </p>
              <div className="flex items-center gap-3 text-amber-500">
                 <span className="bg-amber-500/10 p-2 rounded-full">📍</span>
                 <span className="text-white">Toledo e Região - PR</span>
              </div>
            </div>

            <form onSubmit={enviarWhatsapp} className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu Nome*"
                className="w-full p-4 rounded-xl bg-slate-800 text-white focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="WhatsApp*"
                className="w-full p-4 rounded-xl bg-slate-800 text-white focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                rows={3}
                className="w-full p-4 rounded-xl bg-slate-800 text-white focus:ring-2 focus:ring-amber-500 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl"
              >
                <span>Falar com Especialista</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full bg-slate-950 text-center py-8 border-t border-slate-900">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AS7 ENGENHARIA. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}