export interface PricingTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  priceRange: string;
  isPopular?: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: 'Layout' | 'Smartphone' | 'Search' | 'Zap';
}