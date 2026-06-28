/**
 * Design tokens for the Merchant Detail screen, sourced from the client's Figma spec.
 * Colours are bespoke to the brand — do not substitute with Tailwind/system defaults.
 */

function withOpacity(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const muted = '#6B6B73';

export const Colors = {
  maroon: '#6B1E2A',
  cream: '#FAF5E9',
  ink: '#1A1A22',
  muted,
  slate: '#3A3A4D',
  gold: '#E0B860',
  white: '#FFFFFF',
  border: withOpacity(muted, 0.18),
  overlay: withOpacity('#FFFFFF', 0.24),
} as const;

export const Spacing = {
  screenPadding: 18,
  sectionGapTop: 28,
  sectionGapBottom: 18,
  stackGap: 12,
} as const;

export const Radius = {
  card: 16,
  button: 12,
  pill: 999,
} as const;

type TypeStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
  fontWeight: '400' | '600' | '700';
};

export const Typography: Record<'display' | 'headline' | 'body' | 'caption' | 'numeric', TypeStyle> = {
  display: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: -1,
    fontWeight: '700',
  },
  headline: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  caption: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  numeric: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
  },
};
