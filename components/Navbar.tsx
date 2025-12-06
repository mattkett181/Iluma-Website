import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Serviços & Exemplos', id: 'services' },
    { name: 'Planos e Preços', id: 'pricing' },
    { name: 'Contato', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`${
                    currentPage === link.id ? 'text-iluma-gold font-bold' : 'text-iluma-navy hover:text-iluma-gold'
                  } font-medium px-3 py-2 rounded-md transition-colors duration-200`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleNav('contact')}
                className="bg-iluma-navy text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-iluma-navy hover:text-iluma-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="w-full text-left text-iluma-navy hover:text-iluma-gold block px-3 py-4 rounded-md text-base font-medium border-b border-slate-50"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-8 pb-2 px-3">
                <button 
                  onClick={() => handleNav('contact')}
                  className="block w-full text-center bg-iluma-navy text-white px-5 py-4 rounded-lg font-bold hover:bg-slate-800"
                >
                  Solicitar Orçamento
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};