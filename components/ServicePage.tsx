import React, { useState, useEffect, useRef } from 'react';
import { PRICING_TIERS } from '../constants';
import { Monitor, Smartphone, ShoppingBag, BarChart3, ArrowRight, TrendingUp, X, ZoomIn, ExternalLink, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { Features } from './Features';
import { Testimonials } from './Testimonials';

export const ServicePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Refs para os itens do FAQ para permitir o scroll
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
      // Pequeno delay para garantir que o estado atualizou e iniciar o scroll
      setTimeout(() => {
        const element = faqRefs.current[index];
        if (element) {
          const headerOffset = 100; // Altura aproximada do navbar + margem
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  const getIcon = (id: string) => {
    switch(id) {
      case 'card': return <Smartphone className="w-8 h-8 text-iluma-gold" />;
      case 'landing': return <BarChart3 className="w-8 h-8 text-iluma-gold" />;
      case 'ecommerce': return <ShoppingBag className="w-8 h-8 text-iluma-gold" />;
      default: return <Monitor className="w-8 h-8 text-iluma-gold" />;
    }
  };

  const getExampleData = (id: string) => {
    switch(id) {
      case 'card': return {
        title: "Exemplo: Barbearia Moderna",
        type: "Site 'Cartão de Visita' Digital",
        desc: "Página leve e direta para link na bio. Conecta clientes ao WhatsApp e localização instantaneamente.",
        fullDesc: "Para este modelo de Barbearia, a prioridade foi a agilidade. Criamos um hub digital que centraliza o agendamento e o endereço. O design dark mode reflete a identidade da marca e os botões de ação rápida aumentam significativamente a conversão vinda das redes sociais.",
        result: "3x mais agendamentos via Instagram.",
        imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://barbeariaexemplo.abacusai.app/"
      };
      case 'landing': return {
        title: "Exemplo: Restaurante Gastronômico",
        type: "Landing Page Gastronômica",
        desc: "Página imersiva para restaurante com cardápio digital, fotos de alta qualidade e sistema de reservas integrado.",
        fullDesc: "Desenvolvemos uma experiência visual apetitosa para este modelo de restaurante. O foco foi destacar os pratos principais com fotografia de alta qualidade e facilitar o processo de decisão do cliente. A página inclui cardápio interativo e botão de reserva direta.",
        result: "Experiência premium que converte visitantes em clientes.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://exemplorestaurante.abacusai.app/"
      };
      case 'institutional': return {
        title: "Exemplo: Academia Fitness",
        type: "Site Institucional Fitness",
        desc: "Site completo com grade de horários, apresentação de modalidades e planos de matrícula.",
        fullDesc: "Exemplo de site institucional desenvolvido para o nicho fitness. O objetivo deste modelo é demonstrar como uma presença digital moderna pode apresentar a estrutura, os treinadores e facilitar o agendamento de aulas experimentais (Free Pass) diretamente pelo portal.",
        result: "Otimizado para agendamento de aulas.",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://academiaexemplo.abacusai.app/"
      };
      case 'ecommerce': return {
        title: "Exemplo: Loja de Artesanato",
        type: "E-commerce & Catálogo",
        desc: "Loja online completa com catálogo de produtos, carrinho de compras e cálculo de frete.",
        fullDesc: "Modelo de loja virtual desenvolvido para ateliês e pequenos negócios. O design limpo valoriza as fotos dos produtos, enquanto o sistema robusto gerencia o carrinho e o checkout, permitindo vendas automáticas a qualquer hora.",
        result: "Vendas automáticas 24h por dia.",
        imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://artesanatoexemplo.abacusai.app/"
      };
      default: return null;
    }
  };

  const serviceFaqs = [
    {
      question: "Como funciona o processo de criação?",
      answer: "Nosso processo é dividido em 4 etapas claras: 1. Briefing (reunião para entender sua necessidade); 2. Design e Layout (criamos o visual para sua aprovação); 3. Desenvolvimento (programamos o site); 4. Lançamento e Treinamento (colocamos no ar e te ensinamos a usar)."
    },
    {
      question: "O que eu preciso fornecer para começar?",
      answer: "Para iniciarmos, precisamos basicamente do seu logotipo (se tiver), as informações de contato, textos sobre a empresa/serviços e fotos de boa qualidade. Se não tiver imagens profissionais, podemos utilizar bancos de imagens premium."
    },
    {
      question: "Quem cuida do site depois de pronto?",
      answer: "Você pode cuidar sozinho, pois entregamos acesso administrativo. Porém, recomendamos fortemente nossos planos de Manutenção (R$ 100 - R$ 300/mês), onde nós cuidamos da segurança, backups e atualizações para você focar apenas no seu negócio."
    },
    {
      question: "Vocês escrevem os textos do site?",
      answer: "Nós fazemos a revisão e otimização dos textos para vendas (Copywriting) em todos os planos. Porém, o conteúdo base (informações técnicas, história da empresa) deve ser fornecido por você, que é o especialista no seu negócio."
    },
    {
      question: "Quanto tempo demora para ficar pronto?",
      answer: "O prazo varia conforme o projeto. Sites tipo 'Cartão de Visita' levam cerca de 3 a 5 dias. Landing Pages de 7 a 10 dias. Sites Institucionais e E-commerce levam entre 20 a 30 dias úteis, dependendo da complexidade e rapidez na entrega dos materiais."
    }
  ];

  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-iluma-navy py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Serviços Detalhados</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Entenda qual é a solução ideal para o seu momento atual. 
            Do essencial ao avançado, temos o formato certo para o seu negócio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {PRICING_TIERS.map((tier, index) => {
          const example = getExampleData(tier.id);
          const isEven = index % 2 === 0;

          return (
            <div key={tier.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
              {/* Description Side */}
              <div className="flex-1 space-y-6">
                
                {/* Icon Container with Tooltip */}
                <div 
                  className="relative group/icon inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100"
                  title={tier.name}
                  role="img"
                  aria-label={tier.name}
                >
                  {getIcon(tier.id)}
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    {tier.name}
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-iluma-navy">{tier.name}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {tier.description}
                </p>
                
                <div className="bg-white p-6 rounded-xl border-l-4 border-iluma-gold shadow-sm">
                  <h3 className="font-bold text-iluma-navy mb-2">O que está incluído geralmente:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-iluma-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => { onNavigate('pricing'); window.scrollTo(0,0); }}
                    className="text-iluma-navy font-semibold hover:text-iluma-gold transition-colors flex items-center gap-2"
                  >
                    Ver detalhes de preço <ArrowRight size={18} />
                  </button>
                  
                  {/* Quick link if it has a demo url (optional place, main one is inside modal) */}
                  {example?.demoUrl && (
                     <a 
                       href={example.demoUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-iluma-gold font-semibold hover:text-iluma-navy transition-colors flex items-center gap-2 sm:ml-4"
                     >
                       Ver Demo ao Vivo <Eye size={18} />
                     </a>
                  )}
                </div>
              </div>

              {/* Example Side */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-iluma-gold/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    
                    {/* Visual Example Image with Click Action */}
                    {example?.imageUrl && (
                      <div 
                        className="h-64 w-full overflow-hidden relative cursor-pointer group/image"
                        onClick={() => setSelectedProject(example)}
                        title="Clique para ampliar"
                      >
                         <img 
                           src={example.imageUrl} 
                           alt={example.title}
                           className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                         />
                         
                         {/* Hover Overlay */}
                         <div className="absolute inset-0 bg-iluma-navy/0 group-hover/image:bg-iluma-navy/40 transition-all duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover/image:opacity-100 transform scale-75 group-hover/image:scale-100 transition-all duration-300 shadow-lg">
                                <ZoomIn className="text-iluma-navy w-6 h-6" />
                            </div>
                         </div>

                         {/* Label */}
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 flex justify-between items-end pointer-events-none">
                            <span className="text-white text-xs font-bold uppercase tracking-wider bg-iluma-gold px-2 py-1 rounded">
                              Ver Detalhes
                            </span>
                         </div>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-iluma-navy">{example?.title}</h3>
                          <div className="h-1 w-12 bg-iluma-gold mt-2 rounded-full"></div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                        {example?.desc}
                      </p>
                      
                      <div className="bg-slate-50 rounded-lg p-5 flex items-start gap-4 border border-slate-100">
                        <div className="bg-green-100 p-2.5 rounded-full flex-shrink-0">
                          <TrendingUp className="text-green-600 w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-bold text-iluma-navy text-sm uppercase tracking-wide mb-0.5">Resultado Alcançado</span>
                          <span className="text-base text-slate-700 font-medium">{example?.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Testimonials Section Reused */}
      <Testimonials />

      {/* Reusing Features Section */}
      <div className="bg-white py-12">
         <Features />
      </div>

      {/* Services FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-iluma-navy text-center mb-4">Dúvidas Frequentes</h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
          Entenda melhor como trabalhamos para garantir o sucesso do seu projeto.
        </p>
        
        <div className="space-y-4">
          {serviceFaqs.map((faq, index) => (
            <div 
              key={index} 
              ref={(el) => faqRefs.current[index] = el}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-iluma-navy text-lg pr-8">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="text-iluma-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                 {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-iluma-navy py-16 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ainda com dúvida sobre qual escolher?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Nossos especialistas podem analisar seu negócio e recomendar a melhor estratégia.
          </p>
          <button 
            onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
            className="bg-white text-iluma-navy px-8 py-4 rounded-full font-bold hover:bg-iluma-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            Falar com Consultor
          </button>
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-iluma-navy/90 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"></div>

          {/* Modal Content */}
          <div 
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full relative z-10 flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-iluma-navy p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors shadow-sm border border-slate-100"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="md:w-3/5 h-64 md:h-auto bg-slate-100 relative group">
               <img 
                 src={selectedProject.imageUrl} 
                 alt={selectedProject.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24"></div>
               
               {/* Overlay with Demo Button if available (Desktop Hover alternative) */}
               {selectedProject.demoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={selectedProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-iluma-gold text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105"
                      >
                        Ver Site Online <ExternalLink size={18} />
                      </a>
                  </div>
               )}
            </div>

            {/* Details Section */}
            <div className="md:w-2/5 p-8 flex flex-col overflow-y-auto bg-white">
               <div className="mb-6">
                 <span className="inline-block py-1 px-3 rounded-full bg-iluma-gold/10 text-iluma-gold text-xs font-bold uppercase tracking-wider mb-3">
                   {selectedProject.type || 'Estudo de Caso'}
                 </span>
                 <h2 className="text-3xl font-bold text-iluma-navy leading-tight">{selectedProject.title}</h2>
               </div>

               <div className="space-y-6 flex-grow">
                 <div>
                   <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-2">O Desafio & Solução</h4>
                   <p className="text-slate-600 leading-relaxed">
                     {selectedProject.fullDesc || selectedProject.desc}
                   </p>
                 </div>

                 <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="text-green-600 w-5 h-5" />
                      <span className="font-bold text-iluma-navy text-sm uppercase">Resultado</span>
                    </div>
                    <p className="text-green-800 font-medium text-lg">{selectedProject.result}</p>
                 </div>
               </div>

               <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                 {selectedProject.demoUrl && (
                   <a 
                     href={selectedProject.demoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full bg-iluma-gold text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 shadow-lg animate-pulse hover:animate-none"
                   >
                     Ver Demonstração ao Vivo <Eye size={18} />
                   </a>
                 )}
                 <button 
                    onClick={() => { setSelectedProject(null); onNavigate('contact'); window.scrollTo(0,0); }}
                    className={`w-full text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 ${selectedProject.demoUrl ? 'bg-iluma-navy' : 'bg-iluma-navy'}`}
                 >
                   Quero um projeto assim <ArrowRight size={18} />
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};