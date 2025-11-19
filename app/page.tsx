"use client";
import React, { useState } from 'react';

// Componente principal para a sua página.
const PageContent = () => {
  // 1. Lógica do Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Lógica do Formulário (NOVO)
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para atualizar os inputs do formulário (NOVO)
  /** * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e 
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para enviar para o WhatsApp (NOVO)
  /** * @param {React.FormEvent} e 
   */
  const enviarWhatsapp = (e) => {
    e.preventDefault();
    
    if(!formData.nome || !formData.telefone) {
        alert("Por favor, preencha nome e telefone.");
        return;
    }

    const texto = `*Novo Contato do Site*%0A%0A` +
                  `*Nome:* ${formData.nome}%0A` +
                  `*Telefone:* ${formData.telefone}%0A` +
                  `*Mensagem:* ${formData.mensagem}`;

    // Formatação da URL
    const numero = "5545999799513"; // Seu número com DDI (55) e DDD (45)
    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, '_blank');
  };

  // Ícones SVG
  const MenuIcon = ({ ...restProps }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...restProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 15.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 20.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
  );

  const CloseIcon = ({ ...restProps }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...restProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  // Dados de navegação
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">

      {/* 1. CABEÇALHO (Header) */}
      <header className="sticky top-0 z-20 w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="AS7 Engenharia - Início">
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
        
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-50">
          Eficiência Para os Melhores Resultados.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CAMPO 1 (Superior Esquerdo) */}
          <section id="sobre" className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
              Planejamento Estratégico
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Desenvolvemos soluções personalizadas para otimizar o ciclo de vida dos seus projetos de engenharia. Foco em eficiência e inovação.
            </p>
            <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              [Imagem de planta de construção]
            </div>
          </section>

          {/* CAMPO 2 (Superior Direito) */}
          <section className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">
              Engenharia de Segurança
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gestão completa da segurança do trabalho com auditorias constantes e adequações com certificações dentro do padrão das NR's.
            </p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                [Imagem de canteiro de obras]
            </div>
          </section>

          {/* CAMPO 3 (Inferior Esquerdo) - AGORA É O FORMULÁRIO */}
          <section className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              Fale Conosco Agora
            </h3>
            
            <form onSubmit={enviarWhatsapp} className="flex flex-col gap-3">
              
              {/* Input Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  required
                />
              </div>

              {/* Input Telefone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(45) 99999-9999"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  required
                />
              </div>

              {/* Área de Texto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem <span className="text-xs opacity-70">({formData.mensagem.length}/300)</span>
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  maxLength={300}
                  placeholder="Como podemos ajudar?"
                  rows={3} // CORREÇÃO AQUI: Usando chaves {} para passar número
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition"
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <span>Enviar no WhatsApp</span>
                {/* Ícone WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                </svg>
              </button>
            </form>
          </section>

          {/* CAMPO 4 (Inferior Direito) */}
          <section id="contato" className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3 text-rose-600 dark:text-rose-400">
              Tecnologia e Inovação
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Utilizamos BIM (Building Information Modeling) e outras ferramentas avançadas para maior precisão e colaboração desde a concepção do projeto.
            </p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                [Imagem de modelo BIM]
            </div>
          </section>

        </div>
      </main>

      {/* 3. RODAPÉ (Footer) */}
      <footer className="w-full bg-slate-800 dark:bg-slate-900 text-center py-4 mt-12">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          &copy; {new Date().getFullYear()} todos os direitos reservados. **AS7 ENGENHARIA**
        </p>
      </footer>
    </div>
  );
};

export default PageContent;