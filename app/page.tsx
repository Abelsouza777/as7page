"use client";
import React, { useState, useEffect } from 'react';

// =================================================================
// Ícones e Dados de Navegação (MANTIDOS DO SEU CÓDIGO ORIGINAL)
// =================================================================

// Tipagem básica para props de ícones SVG
interface SvgProps {
  className?: string;
  [key: string]: any;
}

// Ícones SVG para Navegação
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
  { name: "Serviços", href: "#servicos" }, // Alterado ligeiramente para apontar para a nova seção
  { name: "NR-1", href: "#servicos" },
  { name: "Contato", href: "#contato" },
];

// Dados das Redes Sociais
interface SocialIconConfig {
  name: 'Instagram' | 'WhatsApp' | 'Facebook' | 'YouTube';
  url: string;
  svgPath: string;
  brandColorClass: string;
}

const socialIcons: SocialIconConfig[] = [
  { 
    name: 'Instagram', 
    url: "https://www.instagram.com/seuperfil", 
    svgPath: "M8 0C5.829 0 5.556.01 4.703.048 3.85.086 3.29.254 2.72.464l-.571.22c-.525.205-.99.475-1.425.867A4.6 4.6 0 0 0 0 4.704v6.592c0 .942.175 1.764.51 2.502.336.738.835 1.343 1.488 1.838.653.495 1.393.79 2.224.898.831.108 1.777.108 2.76.108h1.258c.983 0 1.929 0 2.76-.108.831-.108 1.571-.403 2.224-.898.653-.495 1.152-1.1 1.488-1.838.335-.738.51-1.56.51-2.502V4.704A4.6 4.6 0 0 0 14.515 2.72c-.435-.392-.9-.662-1.425-.867l-.571-.22c-.57-.21-1.13-.378-1.983-.416C10.444.01 10.171 0 8 0zM7.994 3.693c1.688 0 3.06 1.372 3.06 3.06s-1.372 3.06-3.06 3.06-3.06-1.372-3.06-3.06 1.372-3.06 3.06-3.06zM8 4.88c-1.133 0-2.067.934-2.067 2.067s.934 2.067 2.067 2.067 2.067-.934 2.067-2.067S9.133 4.88 8 4.88zM12.916 3.738a.94.94 0 0 1 .937.937c0 .517-.42.937-.937.937s-.937-.42-.937-.937c0-.517.42-.937.937-.937z",
    brandColorClass: "text-pink-500 hover:text-pink-400"
  },
  { 
    name: 'WhatsApp', 
    url: "https://wa.me/5545999799513", 
    svgPath: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z",
    brandColorClass: "text-green-500 hover:text-green-400"
  },
  { 
    name: 'Facebook', 
    url: "https://www.facebook.com/seuperfil", 
    svgPath: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.943 7.355 6.784 7.99v-5.69h-2.13v-2.268h2.13V5.592c0-2.11 1.183-3.95 3.75-3.95 1.096 0 2.248.195 2.248.195v2.463h-1.26a1.99 1.99 0 0 0-1.996 1.834v1.51h2.768l-.444 2.268h-2.324v5.7C13.057 15.393 16 12.061 16 8.049z",
    brandColorClass: "text-blue-600 hover:text-blue-500"
  },
  { 
    name: 'YouTube', 
    url: "https://www.youtube.com/seucanal", 
    svgPath: "M16 4.51c0-1.077-.822-1.954-1.875-1.954h-12.25C1.822 2.556 1 3.433 1 4.51V11.5c0 1.076.822 1.954 1.875 1.954h12.25C15.178 13.454 16 12.576 16 11.5V4.51zM6.5 9.5l4-2.5-4-2.5v5z",
    brandColorClass: "text-red-600 hover:text-red-500"
  },
];

const SocialIconsComponent: React.FC = () => (
  <div className="flex space-x-3 justify-center">
    {socialIcons.map((icon) => (
      <a 
        key={icon.name} 
        href={icon.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`Visite nosso perfil no ${icon.name}`}
        className={`transition duration-200 transform hover:scale-110 ${icon.brandColorClass}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d={icon.svgPath} />
        </svg>
      </a>
    ))}
  </div>
);

// =================================================================
// NOVOS COMPONENTES E DADOS PARA O "MEIO" DO SITE
// =================================================================

// 1. Dados dos Serviços (Baseado na sua lista)
const servicesList = [
  { icon: '📄', title: 'Treinamentos Normativos', desc: 'NR 06, 10, 12, 31, 33 e 35. Capacitação completa e certificada para sua equipe.', color: 'blue' },
  { icon: '🧠', title: 'Saúde e Documentação', desc: 'Elaboração de PCMSO, PGR, LTCAT e Avaliação Psicossocial (NR 01).', color: 'green' },
  { icon: '⚙️', title: 'Adequação de Máquinas', desc: 'Laudos técnicos e projetos de adequação conforme a NR 12.', color: 'orange' },
  { icon: '🏗️', title: 'Engenharia de Linha de Vida', desc: 'Projetos, instalação e inspeção de sistemas de ancoragem para trabalho em altura.', color: 'teal' },
  { icon: '🛡️', title: 'Consultoria em Segurança', desc: 'Assessoria contínua para garantir que sua empresa esteja sempre em conformidade.', color: 'indigo' },
  { icon: '👷', title: 'Engenharia de Segurança Geral', desc: 'Soluções completas para desafios complexos de segurança do trabalho.', color: 'purple' },
];

// 2. Componente de Efeito de Digitação (Simples e leve)
const TypingEffect = () => {
  const words = ["SEGURANÇA.", "ENGENHARIA.", "CONFORMIDADE."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Mais rápido para apagar
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Velocidade normal de digitação
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pausa antes de apagar
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <span className="text-indigo-600 dark:text-indigo-400 font-bold">
      {currentText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

// =================================================================
// COMPONENTE PRINCIPAL
// =================================================================

interface FormDataState {
  nome: string;
  telefone: string;
  mensagem: string;
}

export default function As7PageModern() {
  // Lógica do Menu Mobile (MANTIDA)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

  // Lógica do Formulário (MANTIDA)
  const [formData, setFormData] = useState<FormDataState>({ nome: '', telefone: '', mensagem: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const showCustomAlert = (message: string) => { console.error(`ALERTA: ${message}`); };

  const enviarWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.nome || !formData.telefone) {
        showCustomAlert("Por favor, preencha nome e telefone.");
        return;
    }
    const texto = `*Novo Contato do Site*%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}%0A*Mensagem:* ${formData.mensagem}`;
    const numero = "5545999799513"; 
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, '_blank');
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden">

      {/* 1. CABEÇALHO (Header) - IDÊNTICO AO ORIGINAL */}
      <header className="w-full bg-slate-800 dark:bg-slate-900 shadow-xl fixed top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex flex-col items-center"> 
            <a href="#" className="mb-1" aria-label="AS7 Engenharia - Início"> 
              <h1 className="text-2xl font-bold text-white flex items-center">
                <img src="/as7.png" alt="Logo da AS7 Engenharia" width={120} height={40} className="rounded-lg"/>
                <span className="sr-only">AS7 ENGENHARIA</span>
              </h1>
            </a>
            <div className="pt-1"><SocialIconsComponent /></div>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-200 hover:text-white transition duration-150 font-medium">{item.name}</a>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-slate-700 transition duration-150" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-zinc-700 hover:text-indigo-600 transition duration-150">{item.name}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* ================================================================= */}
      {/* 2. CONTEÚDO PRINCIPAL (Main) - TOTALMENTE REFORMULADO */}
      {/* ================================================================= */}
      <main className="flex-grow w-full mt-[120px] md:mt-[100px]"> {/* Margem superior para compensar o header fixo */}
        
        {/* --- SEÇÃO HERO: Título Principal e Efeito de Digitação --- */}
        <section className="relative bg-white dark:bg-zinc-900 pt-16 pb-24 overflow-hidden">
           {/* Elementos de fundo decorativos (opcional, para dar profundidade) */}
           <div className="absolute top-0 left-0 -translate-x-1/2 transform rounded-full bg-gradient-to-br from-indigo-100 to-transparent opacity-40 dark:from-indigo-900 dark:opacity-20 blur-3xl w-96 h-96 z-0"></div>
           <div className="absolute bottom-0 right-0 translate-x-1/2 transform rounded-full bg-gradient-to-br from-teal-100 to-transparent opacity-40 dark:from-teal-900 dark:opacity-20 blur-3xl w-96 h-96 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 mb-6 leading-tight">
              Solução Completa em<br />
              <TypingEffect />
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Garantimos a proteção da sua equipe e a conformidade legal da sua empresa com agilidade e expertise técnica.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#contato" className="px-8 py-3 text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Falar com Especialista
              </a>
              <a href="#servicos" className="px-8 py-3 text-lg font-medium rounded-xl text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition duration-300">
                Ver Serviços
              </a>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO DE SERVIÇOS: Grid Moderno --- */}
        <section id="servicos" className="py-20 bg-gray-50 dark:bg-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">O Que Fazemos</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Nossas Áreas de Atuação</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <div 
                  key={index}
                  className={`group bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-${service.color}-500 relative overflow-hidden`}
                >
                  {/* Ícone com fundo colorido suave */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${service.color}-100 dark:bg-${service.color}-900/30 text-4xl mb-6 transform group-hover:scale-110 transition duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* --- SEÇÃO SOBRE/IMAGEM (Versão simplificada e mais limpa dos seus blocos originais) --- */}
         <section id="sobre" className="py-20 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Gestão Total de SST</h2>
                         <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify">
                        Oferecemos muito mais do que laudos. Entregamos um serviço de Gestão de Segurança e Saúde Ocupacional completo.
                        Cuidamos do monitoramento ativo de vencimentos, controle de EPIs e garantimos que sua documentação esteja sempre impecável e pronta para fiscalizações.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Monitoramento Ativo de Prazos', 'Gestão de Recursos e EPIs', 'Documentação Impecável'].map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 dark:text-gray-200">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                         {/* Usando uma das suas imagens originais como destaque */}
                        <img src="/gcomp.png" alt="Gestão Completa SST" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white p-4">
                          <p className="font-bold text-xl">Sua empresa em conformidade.</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>


        {/* --- SEÇÃO DE CONTATO (Formulário em destaque) --- */}
        <section id="contato" className="py-24 relative overflow-hidden">
          {/* Fundo gradiente sutil para destacar a seção de contato */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900 -z-10"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl overflow-hidden md:flex">
              
              {/* Lado Esquerdo: Texto de Chamada */}
              <div className="md:w-2/5 bg-indigo-600 p-10 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold mb-6">Vamos conversar sobre a segurança da sua empresa?</h2>
                  <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                    Preencha o formulário e nossa equipe de engenheiros entrará em contato rapidamente via WhatsApp para entender sua necessidade.
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-indigo-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Atendimento ágil</span>
                </div>
              </div>

              {/* Lado Direito: O Formulário (Seu código original adaptado ao novo layout) */}
              <div className="md:w-3/5 p-10 lg:p-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Fale Conosco Agora</h3>
                <form onSubmit={enviarWhatsapp} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
                    <input
                      type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Ex: João Silva" required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Telefone (WhatsApp)</label>
                    <input
                      type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(45) 99999-9999" required
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem <span className="text-xs opacity-70 font-normal">({formData.mensagem.length}/300)</span>
                    </label>
                    <textarea
                      name="mensagem" value={formData.mensagem} onChange={handleChange} maxLength={300} rows={3} placeholder="Descreva brevemente sua necessidade..."
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>Chamar no WhatsApp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 3. RODAPÉ (Footer) - IDÊNTICO AO ORIGINAL */}
      <footer className="w-full bg-slate-800 dark:bg-slate-900 text-center py-4 mt-0">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          &copy; {new Date().getFullYear()} todos os direitos reservados. **AS7 ENGENHARIA**
        </p>
      </footer>
      {/* BOTÃO WHATSAPP FLUTUANTE - IDÊNTICO AO ORIGINAL */}
      <a href="https://wa.me/5545999799513" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition duration-300 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
        </svg>
      </a>

    </div>
  );
}