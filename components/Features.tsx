import React from 'react';
import { SERVICE_FEATURES } from '../constants';
import { Layout, Smartphone, Search, Zap } from 'lucide-react';

const icons = {
  Layout: Layout,
  Smartphone: Smartphone,
  Search: Search,
  Zap: Zap
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-iluma-gold font-semibold tracking-wide uppercase">Diferenciais</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-iluma-navy sm:text-4xl">
            Por que escolher a Iluma?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Não entregamos apenas código. Entregamos uma ferramenta de negócios projetada para crescer sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_FEATURES.map((feature, index) => {
            const Icon = icons[feature.iconName];
            return (
              <div 
                key={index}
                className="group relative bg-slate-50 p-8 rounded-2xl hover:bg-white border border-slate-100 hover:border-iluma-gold/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-iluma-navy to-iluma-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"></div>
                
                {/* Icon Container with Tooltip */}
                <div 
                  className="relative group/icon w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-iluma-gold mb-6 group-hover:bg-iluma-navy group-hover:text-white transition-colors duration-300"
                  title={feature.title}
                  role="img"
                  aria-label={feature.title}
                >
                  <Icon size={24} strokeWidth={2} />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    {feature.title}
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-iluma-navy mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};