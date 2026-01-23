"use client";
import React, { useState } from 'react';

// =================================================================
// Ícones e Dados de Navegação (Replicando a estrutura anterior)
// =================================================================

// Ícones SVG
const MenuIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 15.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 20.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>
);

const CloseIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Dados de navegação
const navItems = [
  { name: "Início", href: "/" }, // Exemplo: Link para a página inicial
  { name: "NR35", href: "/linhadevida" }, 
  { name: "Contato", href: "#contato" },
];

// =================================================================
// COMPONENTE PRINCIPAL PARA RISCOS PSICOSSOCIAIS
// =================================================================

export default function RiscosPsicossociaisPage() {

  // Lógica do Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Dados simulados para o Formulário de Contato (no rodapé da página)
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const enviarWhatsapp = (e: any) => {
    e.preventDefault();
    // A lógica de envio para o WhatsApp (mantida do código anterior)
    if(!formData.nome || !formData.telefone) {
        alert("Por favor, preencha nome e telefone.");
        return;
    }
    const texto = `*Novo Contato (Riscos Psicossociais)*%0A%0A` +
                  `*Nome:* ${formData.nome}%0A` +
                  `*Telefone:* ${formData.telefone}%0A` +
                  `*Mensagem:* ${formData.mensagem}`;

    const numero = "5545999799513"; 
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, '_blank');
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">

      {/* 1. CABEÇALHO (Header) - Igual ao modelo anterior */}
      <header className="sticky top-0 z-20 w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo - Link para a Home */}
          <a href="https://as7engenharia.com.br" className="flex items-center" aria-label="AS7 Engenharia - Início">
            <h1 className="text-2xl font-bold text-white flex items-center"> 
              <img
                src="/as7.png" 
                alt="Logo da AS7 Engenharia" 
                width={120} 
                height={40} 
                className="rounded-lg"
              />
              <span className="sr-only">AS7 ENGENHARIA</span>
            </h1>
          </a>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-200 hover:text-white transition duration-150 font-medium">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Botão Menu Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-slate-700 transition duration-150"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-zinc-700 hover:text-indigo-600 transition duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL (Main) */}
      <main className="flex-grow max-w-7xl mx-auto p-8 sm:p-10 w-full">
        
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-50 border-b-4 border-amber-600 pb-3">
          🧠 Riscos Psicossociais no Trabalho: Cuidado e Gestão
        </h2>

        {/* 2.1. SEÇÃO DE CONTEÚDO 1: Introdução e Impacto */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-2xl mb-12 border-t-8 border-indigo-500">
            
            {/* IMAGEM 1: Trabalho e Estresse */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700">
                {/* Use uma imagem que represente estresse ou ambiente de trabalho */}
                

[Image of Person at desk with visible work-related stress]

            </div>

            {/* TEXTO 1: Descrição dos Riscos */}
            <h3 className="text-2xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">
                O que são Riscos Psicossociais?
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                São aspectos da organização do trabalho, design de tarefas, gestão e ambiente social que têm o **potencial de causar danos psicológicos** ou físicos. Eles incluem estresse, sobrecarga de trabalho, falta de controle, violência e assédio.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold italic">
                Investir na gestão desses riscos é crucial para a produtividade e para o cumprimento da legislação de Saúde e Segurança no Trabalho.
            </p>
        </div>
        
        {/* Linha Divisória */}
        <hr className="my-10 border-gray-300 dark:border-zinc-700" />

        {/* 2.2. SEÇÃO DE CONTEÚDO 2: O Serviço da Psicóloga da Empresa */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-2xl border-t-8 border-teal-500">
            <h3 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400 text-center">
                Suporte Profissional e Avaliação
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Nossa equipe conta com profissionais qualificados para realizar **avaliações ergonômicas cognitivas** e oferecer o suporte necessário para criar um ambiente de trabalho saudável e resiliente.
            </p>

            {/* CARD DA PSICÓLOGA */}
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-lg max-w-sm mx-auto shadow-md">
                
                {/* IMAGEM 2: Foto da Psicóloga (Substitua pela URL real) */}
                <div className="mb-4 w-36 h-36 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-700 flex items-center justify-center border-4 border-teal-500">
                    {/* ATENÇÃO: SUBSTITUA PELA IMAGEM REAL DA PSICÓLOGA */}
                    
                </div>

                {/* NOME E REGISTRO */}
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Dra. Paola de Medeiros Souza
                </p>
                <p className="text-md text-gray-600 dark:text-gray-400">
                    **Psicóloga**
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    CRP-08/21862
                </p>
            </div>

            {/* Formulário de Contato no final da página (mantido do modelo anterior) */}
            <section id="contato" className="bg-amber-600 dark:bg-amber-700 p-8 rounded-xl shadow-xl mt-12">
                <h3 className="text-3xl font-extrabold mb-6 text-white text-center">
                    Agende uma Avaliação
                </h3>
                <form onSubmit={enviarWhatsapp} className="flex flex-col gap-4 max-w-lg mx-auto">
                    
                    {/* Input Nome */}
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu Nome Completo*"
                        className="w-full p-3 rounded-md border-0 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-black outline-none transition"
                        required
                    />

                    {/* Input Telefone */}
                    <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Seu Telefone (WhatsApp)*"
                        className="w-full p-3 rounded-md border-0 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-black outline-none transition"
                        required
                    />

                    {/* Área de Texto */}
                    <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        maxLength={300}
                        placeholder="Detalhe a necessidade da sua empresa (opcional)"
                        rows={2}
                        className="w-full p-3 rounded-md border-0 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-black outline-none resize-none transition"
                    />

                    {/* Botão Enviar */}
                    <button
                        type="submit"
                        className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-lg uppercase shadow-lg hover:shadow-xl"
                    >
                        <span>Falar com o Suporte</span>
                        {/* Ícone WhatsApp SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                        </svg>
                    </button>
                </form>
            </section>
        </div>
      </main>

      {/* 3. RODAPÉ (Footer) - Igual ao modelo anterior */}
      <footer className="w-full bg-slate-800 dark:bg-slate-900 text-center py-4 mt-12">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          &copy; {new Date().getFullYear()} todos os direitos reservados. **AS7 ENGENHARIA**
        </p>
      </footer>
    </div>
  );
}