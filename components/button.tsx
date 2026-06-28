import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { AppText } from '@/components/app-text';
import { Colors, Radius } from '@/constants/theme';

export type ButtonVariant = 'primary' | 'dark' | 'outline' | 'light';

export type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
};

const VARIANT_STYLES: Record<ButtonVariant, { backgroundColor: string; textColor: string; borderColor?: string }> = {
  primary: { backgroundColor: Colors.maroon, textColor: Colors.white },
  dark: { backgroundColor: Colors.slate, textColor: Colors.white },
  outline: { backgroundColor: Colors.white, textColor: Colors.ink, borderColor: Colors.border },
  light: { backgroundColor: Colors.cream, textColor: Colors.ink },
};

export function PrimaryButton({ label, onPress, variant = 'primary', fullWidth, style }: PrimaryButtonProps) {
  const variantStyle = VARIANT_STYLES[variant];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[
        styles.button,
        fullWidth && styles.fullWidth,
        {
          backgroundColor: variantStyle.backgroundColor,
          borderColor: variantStyle.borderColor,
          borderWidth: variantStyle.borderColor ? 1 : 0,
        },
        style,
      ]}>
      <AppText variant="body" weight="600" color={variantStyle.textColor}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: Radius.button,
  },
  fullWidth: {
    width: '100%',
  },
});
