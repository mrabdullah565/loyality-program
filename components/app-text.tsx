import { Text, type TextProps } from 'react-native';

import { Colors, Typography } from '@/constants/theme';

export type AppTextVariant = keyof typeof Typography;
type Weight = '400' | '600' | '700';

const FONT_FAMILY_BY_WEIGHT: Record<Weight, string> = {
  '400': 'Inter_400Regular',
  '600': 'Inter_600SemiBold',
  '700': 'Inter_700Bold',
};

export type AppTextProps = TextProps & {
  variant?: AppTextVariant;
  color?: string;
  weight?: Weight;
};

export function AppText({
  variant = 'body',
  color = Colors.ink,
  weight,
  style,
  ...rest
}: AppTextProps) {
  const base = Typography[variant];
  const resolvedWeight = weight ?? base.fontWeight;

  return (
    <Text
      style={[
        {
          fontFamily: FONT_FAMILY_BY_WEIGHT[resolvedWeight],
          fontSize: base.fontSize,
          lineHeight: base.lineHeight,
          letterSpacing: base.letterSpacing,
          color,
        },
        style,
      ]}
      {...rest}
    />
  );
}
