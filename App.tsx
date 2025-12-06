import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicePage } from './components/ServicePage';
import { PricingPage } from './components/PricingPage';
import { Testimonials } from './components/Testimonials';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <Features />
            <Testimonials />
            {/* We show a teaser of contact on home too */}
            <div className="bg-white py-12 text-center border-t border-slate-100">
              <h3 className="text-2xl font-bold text-iluma-navy mb-4">Pronto para começar?</h3>
              <button 
                onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }}
                className="text-iluma-gold font-bold hover:underline"
              >
                Entre em contato conosco &rarr;
              </button>
            </div>
          </>
        );
      case 'services':
        return <ServicePage onNavigate={setCurrentPage} />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return (
          <div className="pt-20 min-h-screen">
             <div className="bg-iluma-navy py-12 text-center">
                <h1 className="text-4xl font-bold text-white">Fale Conosco</h1>
             </div>
             <Contact />
          </div>
        );
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;