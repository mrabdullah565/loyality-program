import StarBucksLogo from "@/assets/icons/star-bucks.svg";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { Colors, Spacing } from "@/constants/theme";

export type StampGridProps = {
  stampsRequired: number;
  userStamps: number;
  columns?: number;
};

const CELL_SIZE = 44;
const LOGO_SIZE = 34;

export function StampGrid({
  stampsRequired,
  userStamps,
  columns = 4,
}: StampGridProps) {
  const cells = Array.from({ length: stampsRequired }, (_, index) => index);
  const gap = Spacing.stackGap / 2;

  return (
    <View
      style={[
        styles.grid,
        { width: columns * CELL_SIZE + (columns - 1) * gap, gap },
      ]}
    >
      {cells.map((index) => {
        const isRewardSlot = index === stampsRequired - 1;
        const isFilled = index < userStamps;

        return (
          <View
            key={index}
            style={[styles.cell, isFilled ? styles.cellFilled : styles.cellEmpty]}
          >
            {isRewardSlot ? (
              <Ionicons
                name="gift"
                size={18}
                color={isFilled ? Colors.maroon : Colors.muted}
              />
            ) : (
              <StarBucksLogo
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                opacity={isFilled ? 1 : 0.25}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: CELL_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  cellFilled: {
    backgroundColor: Colors.cream,
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  cellEmpty: {
    backgroundColor: Colors.white,
  },
});
