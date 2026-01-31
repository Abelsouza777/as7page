"use client";
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

// =================================================================
// 1. COMPONENTE DO CARTÃO (DEFINIDO NO MESMO ARQUIVO)
// =================================================================
const DigitalBusinessCard = () => {
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(`${window.location.origin}/api/vcard`);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white">
      <div className="relative w-full max-w-sm bg-zinc-800 rounded-3xl shadow-2xl overflow-hidden border border-zinc-700">
        <div className="h-24 bg-gradient-to-r from-amber-500 to-amber-600 relative">
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 rounded-full border-4 border-zinc-800 bg-white flex items-center justify-center overflow-hidden">
              <img src="/as7.png" alt="Logo AS7" className="w-full h-full object-contain p-2" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-amber-600">AS7</span>';
                }}
              />
            </div>
          </div>
        </div>

        <div className="pt-10 pb-6 px-6 text-center">
          <h2 className="text-xl font-bold text-white">Abel Souza</h2>
          <p className="text-amber-500 font-medium text-sm">AS7 Engenharia</p>
          
          <div className="mt-4 space-y-2 text-xs text-zinc-400">
             <p>(45) 99979-9513</p>
             <p>as7engenharia.com.br</p>
          </div>

          <a href="/api/vcard" className="mt-6 block w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors">
            Salvar Contato
          </a>
        </div>

        <div className="bg-zinc-900 p-4 flex flex-col items-center border-t border-white/5">
          <p className="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">QR Code de Contato</p>
          <div className="p-2 bg-white rounded-lg">
             {fullUrl && <QRCodeSVG value={fullUrl} size={100} />}
          </div>
        </div>
      </div>
    </div>
  );
};

// =================================================================
// 2. PÁGINA PRINCIPAL
// =================================================================
export default function CartaoDigitalAS7() {
  const [formData, setFormData] = useState({ nome: '', telefone: '' });

  const servicos = [
    { id: 1, nome: "Treinamentos NR 06, 10, 12, 31, 33 e 35", icon: "🎓" },
    { id: 2, nome: "PCMSO, PGR e LTCAT", icon: "📄" },
    { id: 3, nome: "Avaliação Psicossocial (NR 01)", icon: "🧠"  },
    { id: 4, nome: "Adequação de Máquinas (NR 12) e Laudos", icon: "⚙️" },
    { id: 5, nome: "Engenharia de Linha de Vida", icon: "🏗️"},
    { id: 6, nome: "Consultoria e Assessoria em Segurança", icon: "🛡️" },
    { id: 7, nome: "Engenharia de Segurança do Trabalho em Geral", icon: "👷" },
  ];

  const enviarWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `*CONTATO VIA CARTÃO DIGITAL*%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}`;
    window.open(`https://wa.me/5545999799513?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center p-4">
      <main className="w-full max-w-md bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <header className="pt-12 pb-8 px-8 flex flex-col items-center">
          <img src="/as7.png" alt="AS7" className="h-16 mb-6" />
          <h1 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Segurança • Engenharia</h1>
        </header>

        <section className="px-8 mb-8">
          <button 
            onClick={() => document.getElementById('form-contato')?.scrollIntoView({behavior: 'smooth'})}
            className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl text-lg uppercase"
          >
            Solicitar Orçamento
          </button>
        </section>

        <section className="px-8 pb-10">
          <h2 className="text-zinc-500 text-[10px] font-bold uppercase mb-4">Nossas Especialidades</h2>
          <ul className="space-y-4">
            {servicos.map((s) => (
              <li key={s.id} className="flex items-center gap-3 text-sm text-zinc-300">
                <span>{s.icon}</span> {s.nome}
              </li>
            ))}
          </ul>
        </section>

        <section id="form-contato" className="bg-white/5 p-8 border-t border-white/10">
          <form onSubmit={enviarWhatsapp} className="space-y-4">
            <input
              type="text"
              placeholder="Seu Nome"
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className="w-full bg-zinc-800 border border-white/10 rounded-xl p-4 text-sm"
              required
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp"
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              className="w-full bg-zinc-800 border border-white/10 rounded-xl p-4 text-sm"
              required
            />
            <button className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase">Enviar</button>
          </form>
        </section>

        {/* CHAMADA DO COMPONENTE QUE ESTÁ NO MESMO ARQUIVO */}
        <DigitalBusinessCard />

      </main>
      <footer className="mt-8 text-zinc-600 text-[10px] uppercase">AS7 Engenharia © 2026</footer>
    </div>
  );
}