import { PricingTier, ServiceFeature } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'card',
    name: 'Site "Cartão de Visita"',
    description: 'Ideal para profissionais liberais que precisam de presença digital rápida.',
    priceRange: 'R$ 400 – R$ 800',
    features: [
      'Template pronto e otimizado',
      'Informações básicas de contato',
      'Links para redes sociais',
      'Entrega expressa',
      'Hospedagem simples'
    ]
  },
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Página única focada totalmente em conversão e vendas.',
    priceRange: 'R$ 600 – R$ 1.500',
    isPopular: true,
    features: [
      'Design focado em conversão',
      'Formulário de contato/Lead',
      'Copywriting persuasivo (básico)',
      'Integração com WhatsApp',
      'Alta velocidade de carregamento'
    ]
  },
  {
    id: 'institutional',
    name: 'Site Institucional',
    description: 'Para empresas que precisam apresentar serviços e construir autoridade.',
    priceRange: 'R$ 1.800 – R$ 3.500',
    features: [
      '4 a 6 páginas personalizadas',
      'Blog integrado',
      'Painel administrativo fácil',
      'Otimização SEO On-page',
      'Google Maps e Formulários'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Pequeno',
    description: 'Comece a vender online com uma loja profissional e segura.',
    priceRange: 'R$ 3.500 – R$ 6.000+',
    features: [
      'Catálogo até 20 produtos',
      'Carrinho de compras',
      'Integração de pagamentos',
      'Cálculo de frete',
      'Gestão de pedidos'
    ]
  }
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: 'Design Exclusivo',
    description: 'Visual moderno alinhado à identidade da sua marca, transmitindo confiança e profissionalismo.',
    iconName: 'Layout'
  },
  {
    title: '100% Responsivo',
    description: 'Seu site perfeito em qualquer tela: celulares, tablets e computadores.',
    iconName: 'Smartphone'
  },
  {
    title: 'Otimizado para SEO',
    description: 'Estrutura preparada para que seu negócio seja encontrado no Google.',
    iconName: 'Search'
  },
  {
    title: 'Alta Performance',
    description: 'Sites leves e rápidos que garantem a melhor experiência para o usuário.',
    iconName: 'Zap'
  }
];