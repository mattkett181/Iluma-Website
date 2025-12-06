import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'landing',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', type: 'landing', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-iluma-navy mb-6">Vamos iluminar suas ideias?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Estamos prontos para levar seu negócio para o próximo nível. 
              Preencha o formulário ou entre em contato direto.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-iluma-navy/5 text-iluma-navy">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-iluma-navy">Email</h3>
                  <p className="mt-1 text-slate-500">ilumaiacontato@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-iluma-navy/5 text-iluma-navy">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-iluma-navy">WhatsApp</h3>
                  <p className="mt-1 text-slate-500">+55 (11) 96402-2939</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-iluma-navy/5 text-iluma-navy">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-iluma-navy">Localização</h3>
                  <p className="mt-1 text-slate-500">São Paulo, SP - Atendimento Online para todo Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-iluma-gold focus:ring-iluma-gold px-4 py-3 bg-white"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-iluma-gold focus:ring-iluma-gold px-4 py-3 bg-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700">Tipo de Projeto</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-iluma-gold focus:ring-iluma-gold px-4 py-3 bg-white"
                >
                  <option value="card">Site Cartão de Visita</option>
                  <option value="landing">Landing Page</option>
                  <option value="institutional">Site Institucional</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensagem (Opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-iluma-gold focus:ring-iluma-gold px-4 py-3 bg-white"
                  placeholder="Conte um pouco sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-iluma-navy hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-iluma-navy transition-all duration-300"
              >
                Solicitar Contato
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};