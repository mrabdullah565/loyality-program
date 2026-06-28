import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Colors, Radius, Spacing } from '@/constants/theme';
import type { LoyaltyState } from '@/types/loyalty';

export type StateToggleProps = {
  value: LoyaltyState;
  onChange: (next: LoyaltyState) => void;
};

const OPTIONS: { key: LoyaltyState; label: string }[] = [
  { key: 'points', label: 'Points' },
  { key: 'stamps', label: 'Stamps' },
];

export function StateToggle({ value, onChange }: StateToggleProps) {
  return (
    <View style={styles.bar}>
      <AppText variant="caption" color={Colors.muted} style={styles.label}>
        Preview state
      </AppText>
      <View style={styles.segments}>
        {OPTIONS.map((option) => {
          const isActive = option.key === value;
          return (
            <Pressable
              key={option.key}
              accessibilityRole="button"
              onPress={() => onChange(option.key)}
              style={[styles.segment, isActive && styles.segmentActive]}>
              <AppText variant="caption" weight="600" color={isActive ? Colors.white : Colors.ink}>
                {option.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPadding,
    paddingVertical: 10,
    backgroundColor: Colors.cream,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  label: {
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  segments: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: Radius.pill,
    padding: 4,
    gap: 4,
  },
  segment: {
    paddingHorizontal: Spacing.stackGap,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  segmentActive: {
    backgroundColor: Colors.maroon,
  },
});
