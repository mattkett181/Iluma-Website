import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-iluma-gold/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-iluma-navy/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-iluma-navy text-sm font-semibold mb-8 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-iluma-gold animate-pulse"></span>
            Design Moderno & Minimalista
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-iluma-navy tracking-tight leading-tight mb-8">
            Transforme sua visão em <span className="text-transparent bg-clip-text bg-gradient-to-r from-iluma-navy via-iluma-blue to-iluma-gold">realidade digital</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Criamos sites de alta conversão que elevam sua marca. 
            Do cartão de visita digital ao e-commerce, nós temos a solução ideal para o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => { onNavigate('pricing'); window.scrollTo(0,0); }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-iluma-navy hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Planos e Preços
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all duration-300"
            >
              Falar com Especialista
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-iluma-gold h-5 w-5" />
              Design Exclusivo
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-iluma-gold h-5 w-5" />
              Otimizado para Vendas
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-iluma-gold h-5 w-5" />
              Suporte Dedicado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};