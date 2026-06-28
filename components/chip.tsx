import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { AppText } from '@/components/app-text';
import { Colors, Radius, Spacing } from '@/constants/theme';

export type ChipProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  style?: StyleProp<ViewStyle>;
};

export function Chip({ icon, label, style }: ChipProps) {
  return (
    <View style={[styles.chip, style]}>
      <Ionicons name={icon} size={14} color={Colors.ink} />
      <AppText variant="caption" color={Colors.ink}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.stackGap,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
});
