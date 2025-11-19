"use client";
import React, { useState } from 'react'; // Adicionado useState
// import Image from 'next/image'; // Removido Image do Next.js para compatibilidade no ambiente



// Componente principal para a sua página.
const PageContent = () => {
  // 1. Lógica do Menu Mobile (Usando useState)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Ícone de Três Pontinhos (Menu de opções) - SVG inline
  // Corrigido o erro de tipo implícito usando desestruturação de props.
  const MenuIcon = ({ ...restProps }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-6 h-6" 
      {...restProps}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 15.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 20.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
  );

  // Ícone simples de Fechar (X) - SVG inline
  // Corrigido o erro de tipo implícito usando desestruturação de props.
  const CloseIcon = ({ ...restProps }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-6 h-6" 
      {...restProps}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  // Dados de navegação
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    // Container principal que define o layout da página
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">

      {/* 1. CABEÇALHO (Header) */}
      <header className="sticky top-0 z-20 w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo/Title - Cor do Texto Branca */}
          <a href="#" className="flex items-center" aria-label="AS7 Engenharia - Início">
            <h1 className="text-2xl font-bold text-white flex items-center"> 
              {/* Usando o placeholder URL para demonstração */}
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
          
          {/* Links de Navegação (Desktop: Visível | Mobile: Escondido) */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-slate-200 hover:text-white transition duration-150 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Botão do Menu Mobile (Mobile: Visível | Desktop: Escondido) - Controlado por onClick */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-slate-700 transition duration-150"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {/* Exibe X ou os 3 pontinhos dependendo do estado (isMenuOpen) */}
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Conteúdo do Menu Mobile (Condicionalmente Renderizado) - Controlado por isMenuOpen */}
        <div 
            id="mobile-menu" 
            className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={toggleMenu} // Adicionado para fechar o menu ao clicar no link
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

        {/* Layout 2x2: 4 campos (2 em cima, 2 embaixo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CAMPO 1 (Superior Esquerdo) */}
          <section id="sobre" className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
              Planejamento Estratégico
            </h3>
            {/* Placeholder para texto ou imagem */}
            <p className="text-gray-600 dark:text-gray-400">
              Desenvolvemos soluções personalizadas para otimizar o ciclo de vida dos seus projetos de engenharia. Foco em eficiência e inovação.
            </p>
            {/* Exemplo de Placeholder de Imagem (remova se for usar uma imagem real) */}
            <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              [Imagem de planta de construção]
            </div>
          </section>

          {/* CAMPO 2 (Superior Direito) */}
          <section className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">
              Engenharia de Segurança do Trabalho
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gestão completa da segurança do trabalho com auditorias constantes e adequações com certificações dentro do padrão das NR's para que o seu time e o ambiente estejam sempre seguros.
            </p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                [Imagem de canteiro de obras]
            </div>
          </section>

          {/* CAMPO 3 (Inferior Esquerdo) */}
          <section className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500">
            <h3 className="text-xl font-semibold mb-3 text-amber-600 dark:text-amber-400">
              Projetos Sustentáveis
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integração de práticas de sustentabilidade e tecnologias verdes, resultando em construções mais eficientes e responsáveis ambientalmente.
            </p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                [Imagem de turbina eólica]
            </div>
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