import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-iluma-navy text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
             <div className="flex items-center gap-2 mb-4">
                <Logo className="text-white fill-white" />
                {/* Note: Logo component SVG strokes need to be styled or overridden to look good on dark bg. 
                    Simple fix: We use text-white class, but SVG strokes are hardcoded. 
                    Let's just use text for footer to be safe or re-use Logo with a prop.
                */}
             </div>
            <p className="text-slate-400 max-w-xs text-sm">
              Criando experiências digitais que conectam marcas e pessoas. Minimalismo e performance.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-iluma-gold transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-iluma-gold transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-iluma-gold transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center md:text-left text-sm text-slate-500 flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Iluma Soluções Digitais. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-start">
             <a href="#" className="hover:text-white">Termos de Uso</a>
             <a href="#" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};