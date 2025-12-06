import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Costa",
      service: "Site Institucional",
      quote: "A Iluma transformou a imagem da minha clínica. O site ficou elegante, rápido e transmite muita confiança para os meus pacientes.",
      initial: "M"
    },
    {
      name: "Pedro Alves",
      service: "Landing Page",
      quote: "Precisava de uma página de alta conversão para meu curso e o resultado foi imediato. O design é impecável e vende sozinho.",
      initial: "P"
    },
    {
      name: "Carla Souza",
      service: "E-commerce",
      quote: "Minha loja online ficou perfeita. O suporte da equipe foi nota 10 e o sistema é muito fácil de gerenciar no dia a dia.",
      initial: "C"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-iluma-gold/5 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-iluma-navy/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-iluma-gold font-semibold tracking-wide uppercase">Feedback</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-iluma-navy sm:text-4xl">
            O que dizem nossos clientes
          </p>
          <div className="w-24 h-1 bg-iluma-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-iluma-navy" />
              </div>
              
              <div className="mb-6 text-iluma-gold">
                {[1,2,3,4,5].map(star => <span key={star} className="text-xl">★</span>)}
              </div>
              
              <p className="text-slate-600 mb-8 italic relative z-10 flex-grow">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-iluma-navy to-iluma-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-iluma-navy">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};