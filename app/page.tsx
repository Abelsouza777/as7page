"use client";
import React, { useState } from 'react';

// =================================================================
// Ícones e Dados de Navegação
// =================================================================

// Tipagem básica para props de ícones SVG
interface SvgProps {
  className?: string;
  [key: string]: any;
}

// Ícones SVG para Navegação (mantidos como utilitário)
const MenuIcon: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 15.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 20.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>
);

const CloseIcon: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Dados de navegação
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Sobre", href: "#sobre" },
  { name: "NR35", href: "/linhadevida" },
  { name: "NR-1", href: "/psicossocial" },
  { name: "Contato", href: "#contato" },
];

// Dados das Redes Sociais com seus respectivos ícones SVG e CLASSE DE COR DA MARCA
interface SocialIconConfig {
  name: 'Instagram' | 'WhatsApp' | 'Facebook' | 'YouTube';
  url: string;
  svgPath: string; // O caminho (path) SVG do ícone
  brandColorClass: string; // Nova propriedade para a cor da marca
}

const socialIcons: SocialIconConfig[] = [
  // Instagram SVG Path (Usando um tom de rosa/magenta para representar o gradiente)
  { 
    name: 'Instagram', 
    url: "https://www.instagram.com/seuperfil", 
    svgPath: "M8 0C5.829 0 5.556.01 4.703.048 3.85.086 3.29.254 2.72.464l-.571.22c-.525.205-.99.475-1.425.867A4.6 4.6 0 0 0 0 4.704v6.592c0 .942.175 1.764.51 2.502.336.738.835 1.343 1.488 1.838.653.495 1.393.79 2.224.898.831.108 1.777.108 2.76.108h1.258c.983 0 1.929 0 2.76-.108.831-.108 1.571-.403 2.224-.898.653-.495 1.152-1.1 1.488-1.838.335-.738.51-1.56.51-2.502V4.704A4.6 4.6 0 0 0 14.515 2.72c-.435-.392-.9-.662-1.425-.867l-.571-.22c-.57-.21-1.13-.378-1.983-.416C10.444.01 10.171 0 8 0zM7.994 3.693c1.688 0 3.06 1.372 3.06 3.06s-1.372 3.06-3.06 3.06-3.06-1.372-3.06-3.06 1.372-3.06 3.06-3.06zM8 4.88c-1.133 0-2.067.934-2.067 2.067s.934 2.067 2.067 2.067 2.067-.934 2.067-2.067S9.133 4.88 8 4.88zM12.916 3.738a.94.94 0 0 1 .937.937c0 .517-.42.937-.937.937s-.937-.42-.937-.937c0-.517.42-.937.937-.937z",
    brandColorClass: "text-pink-500 hover:text-pink-400"
  },
  // WhatsApp SVG Path
  { 
    name: 'WhatsApp', 
    url: "https://wa.me/5545999799513", 
    svgPath: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z",
    brandColorClass: "text-green-500 hover:text-green-400"
  },
  // Facebook SVG Path
  { 
    name: 'Facebook', 
    url: "https://www.facebook.com/seuperfil", 
    svgPath: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.943 7.355 6.784 7.99v-5.69h-2.13v-2.268h2.13V5.592c0-2.11 1.183-3.95 3.75-3.95 1.096 0 2.248.195 2.248.195v2.463h-1.26a1.99 1.99 0 0 0-1.996 1.834v1.51h2.768l-.444 2.268h-2.324v5.7C13.057 15.393 16 12.061 16 8.049z",
    brandColorClass: "text-blue-600 hover:text-blue-500"
  },
  // YouTube SVG Path
  { 
    name: 'YouTube', 
    url: "https://www.youtube.com/seucanal", 
    // Este SVG simples foi mantido, mas com a cor vermelha do YouTube
    svgPath: "M16 4.51c0-1.077-.822-1.954-1.875-1.954h-12.25C1.822 2.556 1 3.433 1 4.51V11.5c0 1.076.822 1.954 1.875 1.954h12.25C15.178 13.454 16 12.576 16 11.5V4.51zM6.5 9.5l4-2.5-4-2.5v5z",
    brandColorClass: "text-red-600 hover:text-red-500"
  },
];

// Componente para renderizar os ícones sociais (substituto do SocialMediaIcons)
const SocialIconsComponent: React.FC = () => (
  <div className="flex space-x-3 justify-center">
    {socialIcons.map((icon) => (
      <a 
        key={icon.name} 
        href={icon.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`Visite nosso perfil no ${icon.name}`}
        // Aplica a cor da marca, transição suave e efeito de escala no hover
        className={`transition duration-200 transform hover:scale-110 ${icon.brandColorClass}`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" // Tamanho ligeiramente maior para melhor visualização
          height="20" 
          fill="currentColor" // Usa a cor da classe Tailwind
          viewBox="0 0 16 16"
        >
          <path d={icon.svgPath} />
        </svg>
      </a>
    ))}
  </div>
);


// =================================================================
// COMPONENTE PRINCIPAL
// =================================================================

// Tipagem para o estado do formulário
interface FormDataState {
  nome: string;
  telefone: string;
  mensagem: string;
}

export default function As7Page() {

  // 1. Lógica do Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  // 2. Lógica do Formulário com tipagem
  const [formData, setFormData] = useState<FormDataState>({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lógica para atualizar o formulário (tipagem do evento)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Função que substitui o alert() nativo para evitar problemas no iframe
  const showCustomAlert = (message: string) => {
    console.error(`ALERTA: ${message}`);
    // Em produção, use um modal ou toast para o usuário
  };

  // Lógica de envio para o WhatsApp
  const enviarWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Substituindo alert() por showCustomAlert
    if(!formData.nome || !formData.telefone) {
        showCustomAlert("Por favor, preencha nome e telefone.");
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
      <header className="w-full bg-slate-800 dark:bg-slate-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          {/* BLOCO DA LOGO + ÍCONES (Empilhado e Centralizado) */}
          {/* CORREÇÃO: Usamos um <div> como wrapper para evitar aninhar links (<a> dentro de <a>) */}
          <div className="flex flex-col items-center"> 
            
            {/* O logo agora é o <a> clicável, separado dos ícones sociais */}
            <a href="#" className="mb-1" aria-label="AS7 Engenharia - Início"> 
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

            {/* ÍCONES DE REDES SOCIAIS (Agora fora do link do logo, resolvendo o erro) */}
            <div className="pt-1">
              <SocialIconsComponent />
            </div>
            
          </div>
          
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
          SOLUÇÃO COMPLETA EM SAÚDE E SEGURANÇA DO TRABALHO.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CAMPO 1 (Superior Esquerdo) */}
          <section id="sobre" className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
              Saúde e Segurança do Trabalho
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
             PCMSO, PGR, LTCAT, Exames Laborais e Avaliação Psicossociale e envio ao eSocial. Garanta a segurança e conformidade da sua empresa com quem entende. Fale conosco e proteja sua equipe!
            </p>
            <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <img
                  src="/docsst.png"
                  alt="Ilustração inteligente sobre Saúde e Segurança do Trabalho (SST), mostrando treinamento, certificação, laudos e linhas de vida." 
                  // Usamos w-full para preencher a largura e h-auto para manter a proporção
                  className="w-full h-auto object-cover lg:w-3/4 lg:mx-auto rounded-xl" 
                  // Definimos dimensões intrínsecas (largura/altura) para evitar CLS (Cumulative Layout Shift)
                  width={417} 
                  height={250} 
              />
            </div>
          </section>

          {/* CAMPO 2 (Superior Direito) */}
          <section className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">
              Trabalho em Altura: Engenharia na sua Segurança
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
              Nossas linhas de vida garantem proteção total. Instalação, inspeção e certificação para sua tranquilidade e conformidade. soluções conforme a necessidade, seja para caminhão, obra ou agro.
            </p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                 <img
                  src="/nr351.png"
                  alt="Ilustração inteligente sobre Saúde e Segurança do Trabalho (SST), mostrando treinamento, certificação, laudos e linhas de vida." 
                  // Usamos w-full para preencher a largura e h-auto para manter a proporção
                  className="w-full h-auto object-cover lg:w-3/4 lg:mx-auto rounded-xl" 
                  // Definimos dimensões intrínsecas (largura/altura) para evitar CLS (Cumulative Layout Shift)
                  width={417} 
                  height={250} 
              />
            </div>
          </section>

          {/* CAMPO 3 (Inferior Esquerdo) - FORMULÁRIO */}
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
                  rows={3}
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
              Gestão total de SST 
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
             Oferecemos um serviço de Gestão de Segurança e Saúde Ocupacional (SSO) completo, cobrindo todas as necessidades da sua empresa:
              Monitoramento Ativo: Auditoria constante e controle rigoroso das datas de treinamentos e exames periódicos.
              Gestão de Recursos: Planejamento e controle da distribuição de EPIs (Equipamentos de Proteção Individual).
              Documentação Impecável: Garantia de que toda a documentação e conformidade legal de segurança do trabalho esteja sempre organizada e em dia.
              Nós fazemos a gestão completa da segurança do seu pessoal, garantindo a proteção da sua equipe e a tranquilidade da sua empresa.
            </p>
              <div className="mt-4 h-32 bg-gray-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                 <img
                  src="/gcomp.png"
                  alt="gestão completa em SST" 
                  // Usamos w-full para preencher a largura e h-auto para manter a proporção
                  className="w-full h-auto object-cover lg:w-3/4 lg:mx-auto rounded-xl" 
                  // Definimos dimensões intrínsecas (largura/altura) para evitar CLS (Cumulative Layout Shift)
                  width={417} 
                  height={250} 
              />
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
      {/* BOTÃO WHATSAPP FLUTUANTE */}
<a
  href="https://wa.me/5545999799513"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-5
    right-5
    bg-green-500
    hover:bg-green-600
    text-white
    w-14
    h-14
    rounded-full
    shadow-xl
    flex
    items-center
    justify-center
    transition
    duration-300
    z-50
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
  </svg>
</a>

    </div>
  );
}