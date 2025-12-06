import React from 'react';
import { PRICING_TIERS } from '../constants';
import { Check, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-iluma-gold font-semibold tracking-wide uppercase">Investimento</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-iluma-navy sm:text-4xl">
            Escolha o plano ideal para seu momento
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Transparência e qualidade. O valor de criação é único.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id}
              className={`flex flex-col rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl relative ${tier.isPopular ? 'ring-2 ring-iluma-gold scale-105 z-10' : 'border border-slate-100'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-iluma-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                  Mais Popular
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className="text-lg font-bold text-iluma-navy">{tier.name}</h3>
                <p className="mt-2 text-sm text-slate-500 h-10">{tier.description}</p>
                
                <div className="my-6">
                    <p className="text-sm text-slate-400 font-medium">Criação (Valor Único)</p>
                    <p className="text-2xl font-bold text-iluma-navy tracking-tight">{tier.priceRange}</p>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-iluma-gold" />
                      </div>
                      <p className="ml-3 text-sm text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-3 border rounded-lg text-sm font-bold transition-colors duration-200 ${
                    tier.isPopular 
                      ? 'bg-iluma-navy border-transparent text-white hover:bg-slate-800' 
                      : 'bg-white border-iluma-navy text-iluma-navy hover:bg-slate-50'
                  }`}
                >
                  Começar Projeto
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Section Info */}
        <div className="bg-white rounded-2xl border border-iluma-blue/10 shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iluma-blue text-xs font-bold uppercase tracking-wide mb-3">
                Opcional & Recomendado
              </div>
              <h3 className="text-2xl font-bold text-iluma-navy mb-3">Manutenção Mensal & Suporte</h3>
              <p className="text-slate-600 mb-4">
                Garanta que seu site esteja sempre seguro, rápido e atualizado. Nossos planos de manutenção incluem atualizações de segurança, backups diários e pequenas alterações de conteúdo.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-slate-500">Investimento:</span>
                <span className="text-2xl font-bold text-iluma-gold">R$ 100 - R$ 300</span>
                <span className="text-sm text-slate-400">/mês</span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <ShieldCheck className="text-iluma-navy w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-iluma-navy text-sm">Segurança Total</h4>
                  <p className="text-xs text-slate-500 mt-1">Proteção contra ataques e vírus.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <RefreshCw className="text-iluma-navy w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-iluma-navy text-sm">Atualizações</h4>
                  <p className="text-xs text-slate-500 mt-1">Plugins e sistemas sempre novos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                 <Headphones className="text-iluma-navy w-6 h-6 flex-shrink-0" />
                 <div>
                   <h4 className="font-bold text-iluma-navy text-sm">Suporte Prioritário</h4>
                   <p className="text-xs text-slate-500 mt-1">Atendimento rápido via WhatsApp.</p>
                 </div>
              </div>
              <div className="flex items-center justify-center p-4">
                 <a href="#contact" className="text-iluma-gold font-bold text-sm hover:underline">
                    Ver detalhes no orçamento &rarr;
                 </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};