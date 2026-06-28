import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { Colors, Spacing } from '@/constants/theme';

export type StampGridProps = {
  stampsRequired: number;
  userStamps: number;
  columns?: number;
};

const CELL_SIZE = 44;

export function StampGrid({ stampsRequired, userStamps, columns = 4 }: StampGridProps) {
  const cells = Array.from({ length: stampsRequired }, (_, index) => index);
  const gap = Spacing.stackGap / 2;

  return (
    <View style={[styles.grid, { width: columns * CELL_SIZE + (columns - 1) * gap, gap }]}>
      {cells.map((index) => {
        const isRewardSlot = index === stampsRequired - 1;
        const isFilled = index < userStamps;

        return (
          <View
            key={index}
            style={[styles.cell, isFilled ? styles.cellFilled : styles.cellEmpty]}>
            <Ionicons
              name={isRewardSlot ? 'gift-outline' : 'cafe'}
              size={18}
              color={isFilled ? Colors.maroon : Colors.overlay}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: CELL_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  cellFilled: {
    backgroundColor: Colors.cream,
    borderColor: Colors.gold,
  },
  cellEmpty: {
    backgroundColor: 'transparent',
    borderColor: Colors.overlay,
  },
});
