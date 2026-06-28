import { StyleSheet, View } from "react-native";

import StarBucksLogo from "@/assets/icons/star-bucks.svg";
import StarbucksWatermark from "@/assets/images/starbucks-watermark.svg";
import { AppText } from "@/components/app-text";
import { CurrentCardShell } from "@/components/current-card-shell";
import { StampGrid } from "@/components/stamp-grid";
import { Colors, Spacing } from "@/constants/theme";
import type { Merchant, StampCardData } from "@/types/loyalty";

export type StampCardProps = {
  merchant: Merchant;
  stampCard: StampCardData;
};

const RAIL_LOGO_SIZE = 56;

export function StampCard({ merchant, stampCard }: StampCardProps) {
  const { stamps_required, userStamps } = stampCard;

  return (
    <CurrentCardShell
      accentColor={Colors.slate}
      railColor={Colors.gray}
      logoUrl={merchant.logo_url}
      brandName={merchant.brand_name}
      logoFallback={
        <StarBucksLogo width={RAIL_LOGO_SIZE} height={RAIL_LOGO_SIZE} />
      }
      watermark={
        <StarbucksWatermark
          width="100%"
          height="100%"
          viewBox="-88 -88 315 304"
          preserveAspectRatio="xMidYMid slice"
          color={Colors.white}
          opacity={0.06}
        />
      }
    >
      <View style={styles.headerRow}>
        <AppText
          variant="display"
          weight="700"
          color={Colors.white}
          numberOfLines={1}
          style={styles.brand}
        >
          {merchant.brand_name.toUpperCase()}
        </AppText>
        <AppText variant="numeric" color={Colors.white}>
          {userStamps} / {stamps_required}
        </AppText>
      </View>

      <View style={styles.gridWrapper}>
        <StampGrid stampsRequired={stamps_required} userStamps={userStamps} />
      </View>
    </CurrentCardShell>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.stackGap,
  },
  brand: {
    flex: 1,
  },
  gridWrapper: {
    marginTop: 40,
  },
});
