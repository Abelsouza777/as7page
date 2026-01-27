"use client";
import React, { useState } from 'react';

// =================================================================
// DADOS DOS SERVIÇOS E QR CODES
// =================================================================
const servicos = [
  { id: 1, nome: "Treinamentos NR 06, 10, 12, 31, 33 e 35", icon: "🎓" },
  { id: 2, nome: "PCMSO, PGR e LTCAT", icon: "📄" },
  { id: 3, nome: "Avaliação Psicossocial (NR 01)", icon: "🧠"  },
  { id: 4, nome: "Adequação de Máquinas (NR 12) e Laudos", icon: "⚙️" },
  { id: 5, nome: "Engenharia de Linha de Vida", icon: "🏗️"},
  { id: 6, nome: "Consultoria e Assessoria em Segurança", icon: "🛡️" },
  { id: 7, nome: "Engenharia de Segurança do Trabalho em Geral", icon: "👷" },
];

const qrCodes = [
  { id: 1, src: "/psico.png", titulo: "Avaliação Psicossocial" },
  { id: 2, src: "/cartao.png", titulo: "Cartão Virtual" },
  { id: 3, src: "/treinamento.png", titulo: "Treinamentos NR" },
  { id: 4, src: "/site.png", titulo: "Página" },
  { id: 5, src: "/linhadevida.png", titulo: "Linhas de Vida" },
  { id: 6, src: "/engenharia.png", titulo: "Soluções em Projetos" },
  { id: 7, src: "/ambiental.png", titulo: "Soluções Ambientais" },

];

export default function CartaoDigitalAS7() {
  const [formData, setFormData] = useState({ nome: '', telefone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const enviarWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) return alert("Preencha os campos.");
    const texto = `*CONTATO VIA CARTÃO DIGITAL*%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}`;
    window.open(`https://wa.me/5545999799513?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000d1a] text-white font-sans flex flex-col items-center selection:bg-amber-500">
      
      {/* 1. CABEÇALHO FIXO (Opcional) */}
      <header className="w-full max-w-md pt-10 pb-6 flex flex-col items-center sticky top-0 bg-[#000d1a]/90 backdrop-blur-sm z-50">
        <img src="/as7.png" alt="AS7 Engenharia" className="h-14 w-auto object-contain mb-4" />
        <h1 className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase italic">
          Engenharia • Segurança • Meio Ambiente
        </h1>
      </header>

      {/* 2. SEÇÃO DE QR CODES COM SCROLL SNAPPING */}
      {/* Esta div controla a rolagem "um por vez" no mobile */}
      <section className="w-full max-w-md h-[60vh] overflow-y-auto snap-y snap-mandatory scrollbar-hide flex flex-col gap-4 px-4 mt-4">
        {qrCodes.map((qr) => (
          <div 
            key={qr.id} 
            className="min-h-[55vh] flex flex-col items-center justify-center snap-center bg-zinc-900/40 border border-white/5 rounded-[2.5rem] shadow-xl"
          >
            <div className="bg-white p-4 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <img src={qr.src} alt={qr.titulo} className="w-48 h-48 md:w-56 md:h-56 object-contain" />
            </div>
            <h3 className="text-amber-500 font-black uppercase tracking-tighter mt-6 text-lg">
              {qr.titulo}
            </h3>
            <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest">
              qr code as7 engenharia
            </p>
          </div>
        ))}
      </section>

      {/* DICA DE ROLAGEM */}
      <div className="text-zinc-600 text-[9px] mt-4 animate-bounce flex flex-col items-center">
        <span>Role para ver mais QR Codes</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      {/* 3. CONTEÚDO RESTANTE (SERVIÇOS E FORMULÁRIO) */}
      <main className="w-full max-w-md mt-10 space-y-10 px-4">
        
        {/* Lista de Serviços */}
        <div className="bg-zinc-900/20 rounded-3xl p-8 border border-white/5">
            <h2 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-2">
                Nossas Especialidades
            </h2>
            <ul className="space-y-4">
                {servicos.map((s) => (
                    <li key={s.id} className="flex items-center gap-3 text-sm text-zinc-300">
                        <span className="text-lg opacity-80">{s.icon}</span>
                        {s.nome}
                    </li>
                ))}
            </ul>
        </div>

        {/* Formulário */}
        <section id="form-contato" className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 mb-20">
          <h3 className="text-center text-amber-500 font-bold mb-6 text-sm uppercase">Solicitar Orçamento</h3>
          <form onSubmit={enviarWhatsapp} className="space-y-3">
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              onChange={handleChange}
              className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-xs focus:border-amber-500 outline-none"
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Seu WhatsApp"
              onChange={handleChange}
              className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-xs focus:border-amber-500 outline-none"
              required
            />
            <button className="w-full bg-amber-500 text-black font-black py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-amber-500/10">
              Falar com Especialista
            </button>
          </form>
        </section>
      </main>

      <footer className="py-10 text-zinc-700 text-[9px] uppercase tracking-[0.4em] text-center w-full">
        AS7 Engenharia • {new Date().getFullYear()}
      </footer>

      {/* Estilos Auxiliares para esconder scrollbar mantendo a função */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}