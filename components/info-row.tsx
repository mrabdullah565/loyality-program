import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Chip } from '@/components/chip';
import { Colors, Spacing } from '@/constants/theme';

export type InfoRowProps = {
  distanceKm: number;
  category: string;
  rating: number;
};

export function InfoRow({ distanceKm, category, rating }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <AppText variant="body" weight="600" color={Colors.ink}>
        {distanceKm} km
      </AppText>
      <Chip icon="restaurant-outline" label={category} />
      <View
        style={styles.ratingBadge}
        accessibilityLabel={`Rated ${rating} out of 5`}>
        <Ionicons name="star" size={16} color={Colors.maroon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.stackGap,
  },
  ratingBadge: {
    marginLeft: 'auto',
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Colors.maroon,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
