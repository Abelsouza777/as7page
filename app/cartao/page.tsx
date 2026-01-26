"use client";
import React, { useState } from 'react';

// =================================================================
// DADOS DOS SERVIÇOS - AS7 ENGENHARIA
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

export default function CartaoDigitalAS7() {
  const [formData, setFormData] = useState({ nome: '', telefone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const enviarWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) {
      alert("Por favor, preencha nome e telefone.");
      return;
    }
    const texto = `*CONTATO VIA CARTÃO DIGITAL - AS7*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Assunto:* Gostaria de um orçamento especializado.`;

    const numero = "5545999799513";
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col items-center justify-center p-4 selection:bg-amber-500 selection:text-black">
      
      {/* Container Principal Estilo Cartão Premium */}
      <main className="w-full max-w-md bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm">
        
        {/* Cabeçalho com SUA LOGO */}
        <header className="pt-12 pb-8 px-8 flex flex-col items-center">
          <div className="mb-8 hover:scale-105 transition-transform duration-500">
             {/* AQUI VOCÊ INSERE SUA LOGO */}
            <img 
              src="/as7.png" 
              alt="AS7 Engenharia" 
              className="h-20 w-auto object-contain" 
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase">
              Segurança • Engenharia • Conformidade
            </h1>
            <p className="text-zinc-400 text-xs uppercase tracking-widest">Toledo - PR e Região</p>
          </div>
        </header>

        {/* Botão de Ação Principal (Estilo Opção 3) */}
        <section className="px-8 mb-10">
          <button 
            onClick={() => document.getElementById('form-contato')?.scrollIntoView({behavior: 'smooth'})}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-5 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] uppercase tracking-tighter text-lg flex items-center justify-center gap-3"
          >
            Solicitar Orçamento
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
            </svg>
          </button>
        </section>

        {/* Lista de Serviços Minimalista */}
        <section className="px-8 pb-10">
          <h2 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-2">
            Nossas Especialidades
          </h2>
          <ul className="space-y-5">
            {servicos.map((s) => (
              <li key={s.id} className="flex items-start gap-4 group cursor-default">
                <span className="text-xl group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-300 font-medium leading-tight">
                  {s.nome}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Formulário de Lead Rápido */}
        <section id="form-contato" className="bg-white/5 p-8 border-t border-white/10">
          <form onSubmit={enviarWhatsapp} className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              onChange={handleChange}
              className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none transition-all"
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Seu WhatsApp"
              onChange={handleChange}
              className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none transition-all"
              required
            />
            <button className="w-full bg-zinc-100 hover:bg-white text-black font-bold py-4 rounded-xl text-sm transition-all uppercase tracking-widest">
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>

      {/* Rodapé Simples */}
      <footer className="mt-8 text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-medium">
        AS7 Engenharia © {new Date().getFullYear()}
      </footer>
    </div>
  );
}