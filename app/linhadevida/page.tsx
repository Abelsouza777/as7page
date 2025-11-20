"use client";
import React, { useState } from 'react';

// =================================================================
// Ícones e Dados de Navegação (Mantenha estas funções fora do componente principal)
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
  { name: "Linha de Vida", href: "#linhadevida" },
  { name: "Contato", href: "#contato" },
];

// =================================================================
// COMPONENTE PRINCIPAL
// =================================================================

export default function LinhaDeVidaPage() {

  // 1. Lógica do Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Lógica do Formulário
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lógica para atualizar o formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Lógica de envio para o WhatsApp
  const enviarWhatsapp = (e: React.FormEvent<HTMLFormElement>) => {
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
    const numero = "5545999799513"; 
    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, '_blank');
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">

      {/* 1. CABEÇALHO (Header) */}
      <header className="sticky top-0 z-20 w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="https://as7engenharia.com.br" // <--- MUDANÇA APLICADA AQUI
            className="flex items-center" 
            aria-label="AS7 Engenharia - Início"
          >
            <h1 className="text-2xl font-bold text-white flex items-center"> 
              {/* ATENÇÃO: Substitua "/as7.png" pela URL da sua logo */}
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

      {/* 2. CONTEÚDO PRINCIPAL (Main) - SEÇÃO LINHA DE VIDA */}
      <main className="flex-grow max-w-7xl mx-auto p-8 sm:p-10 w-full">
        
        <h2 id="linhadevida" className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-50 border-b-4 border-indigo-600 pb-3">
          🧗 Linha de Vida: Sua Segurança em Altura
        </h2>
        
        {/* === ESTRUTURA: IMAGEM 1 + TEXTO 1 === */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-2xl mb-12 border-t-8 border-red-500">
            {/* IMAGEM 1 - Linha de Vida em Telhados e Obras */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700">
                {/* ATENÇÃO: Substitua a URL abaixo pela imagem que você gerou */}
                <img
                    src=""
                    alt="Linha de Vida em Telhado com Painéis Solares" 
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* TEXTO 1 - Curto e Instagramável */}
            <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">
                Segurança em Telhados e Obras: #NR35 👷
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Em telhados, montagens ou na manutenção de grandes estruturas. Nossas linhas de vida garantem que **o seu trabalho em altura seja 100% seguro e dentro da norma**. 
                ✅ Projetos personalizados para cada tipo de cobertura. **Sua vida, nossa prioridade!**
            </p>
        </div>
        
        {/* Linha Divisória */}
        <hr className="my-10 border-gray-300 dark:border-zinc-700" />


        {/* === ESTRUTURA: IMAGEM 2 + TEXTO 2 === */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-2xl mb-12 border-t-8 border-teal-500">
            
            {/* IMAGEM 2 - Linha de Vida para Caminhões e Pintura */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700">
                {/* ATENÇÃO: Substitua a URL abaixo pela sua segunda imagem. */}
                <img
                    src=""
                    alt="Linha de Vida em Pintura de Fachada e Caminhões" 
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* TEXTO 2 - Curto e Instagramável */}
            <h3 className="text-2xl font-bold mb-3 text-teal-600 dark:text-teal-400">
                Soluções Específicas: Caminhões e Fachadas 🚛🎨
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Sabia que a movimentação em cima de caminhões e carretas precisa de proteção? Oferecemos **sistemas móveis** para carga/descarga e linhas de vida para **serviços de pintura e limpeza** em fachadas de prédios. 
                👉 **Reduza acidentes, maximize o serviço!**
            </p>
        </div>
        
        {/* Formulário de Contato no final da página (opcional) */}
        <section id="contato" className="bg-indigo-600 dark:bg-indigo-700 p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-extrabold mb-6 text-white text-center">
                Quer um Orçamento? Chame no WhatsApp! 📞
            </h3>
            <form onSubmit={enviarWhatsapp} className="flex flex-col gap-4 max-w-lg mx-auto">
                
                {/* Input Nome */}
                <div>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu Nome Completo*"
                        className="w-full p-3 rounded-md border-0 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none transition"
                        required
                    />
                </div>

                {/* Input Telefone */}
                <div>
                    <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Seu Telefone (WhatsApp)*"
                        className="w-full p-3 rounded-md border-0 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none transition"
                        required
                    />
                </div>

                {/* Área de Texto */}
                <div>
                    <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        maxLength={300}
                        placeholder="Tipo de linha de vida que você precisa (opcional)"
                        rows={2}
                        className="w-full p-3 rounded-md border-0 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none resize-none transition"
                    />
                </div>

                {/* Botão Enviar */}
                <button
                    type="submit"
                    className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-lg uppercase shadow-lg hover:shadow-xl"
                >
                    <span>Falar com Especialista Agora</span>
                    {/* Ícone WhatsApp SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                    </svg>
                </button>
            </form>
        </section>

      </main>

      {/* 3. RODAPÉ (Footer) */}
      <footer className="w-full bg-slate-800 dark:bg-slate-900 text-center py-4 mt-12">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          &copy; {new Date().getFullYear()} todos os direitos reservados. **AS7 ENGENHARIA**
        </p>
      </footer>
    </div>
  );
}