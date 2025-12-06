import React from 'react';
import { Pricing } from './Pricing';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
       <div className="bg-iluma-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Investimento Transparente</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Sem taxas ocultas. Valores de criação únicos e opções flexíveis de manutenção.
          </p>
        </div>
      </div>

      {/* Original Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-3xl font-bold text-iluma-navy text-center mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {[
            {
              q: "Quais são os custos recorrentes (mensais/anuais)?",
              a: "Existem dois tipos de custos recorrentes: 1. Externos: Domínio (nome do site, ~R$ 40/ano) e Hospedagem (~R$ 20/mês). 2. Internos (Opcional): Oferecemos planos de Manutenção e Suporte variando de R$ 100 a R$ 300 mensais para cuidar das atualizações técnicas e pequenas alterações para você."
            },
            {
              q: "O pagamento do site é único?",
              a: "Sim! O valor do desenvolvimento do projeto (listado nos planos acima) é pago uma única vez. O site é seu propriedade sua. A taxa de manutenção mencionada acima é opcional para quem deseja que cuidemos do site continuamente."
            },
            {
              q: "Em quanto tempo meu site fica pronto?",
              a: "Depende do plano. Sites 'Cartão de Visita' ficam prontos em até 3 dias úteis. Landing Pages em 5-7 dias. Sites Institucionais e E-commerce levam de 15 a 30 dias."
            },
            {
              q: "O que inclui a manutenção mensal de R$ 100 - R$ 300?",
              a: "Inclui monitoramento de segurança, backups diários, atualização de plugins/sistema e um pacote de horas para pequenas alterações de texto ou imagem que você precisar."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="flex items-start font-bold text-iluma-navy text-lg mb-2">
                <HelpCircle className="w-5 h-5 text-iluma-gold mr-2 mt-1 flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-slate-600 ml-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};