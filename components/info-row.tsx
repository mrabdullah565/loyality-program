import ForkSpoon from "@/assets/icons/fork-spoon.svg";
import Star from "@/assets/icons/star.svg";
import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/app-text";
import { Chip } from "@/components/chip";
import { Colors, Spacing } from "@/constants/theme";

export type InfoRowProps = {
  distanceKm: number;
  category: string;
  rating: number;
};

export function InfoRow({ distanceKm, category, rating }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <AppText variant="headline" weight="700" color={Colors.ink}>
        {distanceKm} km
      </AppText>
      <Chip icon={ForkSpoon} label={category} />
      <View
        style={styles.ratingBadge}
        accessibilityLabel={`Rated ${rating} out of 5`}
      >
        <Star width={26} height={26} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.gap9,
  },
  ratingBadge: {
    marginLeft: "auto",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 6,
    borderColor: Colors.maroon,
    alignItems: "center",
    justifyContent: "center",
  },
});
