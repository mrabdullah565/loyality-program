export type Merchant = {
  /** Short loyalty-brand label shown in the header and on the current card. Not in the client's literal field list — added because the brand label (e.g. "Starbuks") and the branch name ("Al Mirqab Al Jadeed") are visually distinct and neither pointsProgram nor stampCard carries a brand field. */
  brand_name: string;
  name: string;
  description: string;
  cover_image_url: string | number | null;
  logo_url: string | null;
  rating: number;
  distance_km: number;
  category: string;
  members_count: number;
  opening_hours: string;
  phone: string;
};

export type Reward = {
  id: string;
  label: string;
  trigger_value: number;
  image_url: string | null;
};

export type PointsProgram = {
  earn_rule_text: string;
  userPoints: number;
  rewards: Reward[];
};

export type StampCardData = {
  stamps_required: number;
  userStamps: number;
  earn_rule_text: string;
};

import type React from 'react';
import type { SvgProps } from 'react-native-svg';

export type OfferStyle = 'plain' | 'featured';

export type Offer = {
  id: string;
  brand: string;
  headline: string;
  code: string;
  expires_in: number;
  style: OfferStyle;
  discount_label?: string;
  /** Scalloped badge artwork (SVG) shown on the left of non-ribbon offer cards. */
  badge?: React.FC<SvgProps> | null;
};

export type LoyaltyState = 'points' | 'stamps';
