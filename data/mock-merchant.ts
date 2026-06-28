import heroImage from '@/assets/images/hero-image.png';
import type { Merchant, Offer, PointsProgram, StampCardData } from '@/types/loyalty';

export const merchant: Merchant = {
  brand_name: 'Starbuks',
  name: 'Al Mirqab Al Jadeed',
  description:
    'El pasaje estándar de lorem ipsum ha sido un aliado de los impresores durante siglos. Como las fotos de stock actuales, servía como marcador de posición para el contenido real. El texto original proviene de la obra filosófica de Cicerón "De Finibus Bonorum et Malorum", escrita en el año 45 a.C.',
  cover_image_url: heroImage,
  logo_url: null,
  rating: 4.6,
  distance_km: 1.8,
  category: 'Restaurants',
  members_count: 20,
  opening_hours: '12:00 PM – 12:00 AM',
  phone: '+974 5080 4421',
};

export const pointsProgram: PointsProgram = {
  earn_rule_text: 'Earn 1 point for every QAR 5 spent',
  userPoints: 120,
  rewards: [
    { id: 'reward-1', label: 'Free Pastry', trigger_value: 50, image_url: null },
    { id: 'reward-2', label: 'Free Coffee', trigger_value: 150, image_url: null },
    { id: 'reward-3', label: 'Free Combo Meal', trigger_value: 300, image_url: null },
  ],
};

export const stampCard: StampCardData = {
  stamps_required: 8,
  userStamps: 6,
  earn_rule_text: 'Earn 1 stamp for every visit',
};

export const offers: Offer[] = [
  {
    id: 'offer-1',
    brand: merchant.brand_name,
    headline: '-15% OFF available',
    code: 'CAMP-1289SDR2',
    expires_in: 119,
    style: 'featured',
    discount_label: '-15%',
  },
  {
    id: 'offer-2',
    brand: merchant.brand_name,
    headline: 'Buy 1 get 1 Free',
    code: 'BOGO-CAFE2026',
    expires_in: 119,
    style: 'featured',
  },
  {
    id: 'offer-3',
    brand: merchant.brand_name,
    headline: '50 bonus points',
    code: 'BONUS50PTS',
    expires_in: 119,
    style: 'plain',
  },
];
