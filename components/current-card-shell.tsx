import type { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { BrandLogo } from "@/components/brand-logo";
import { Radius, Spacing } from "@/constants/theme";

export type CurrentCardShellProps = PropsWithChildren<{
  accentColor: string;
  logoUrl: string | null;
  brandName: string;
}>;

const LOGO_TILE_SIZE = 64;

export function CurrentCardShell({
  accentColor,
  logoUrl,
  brandName,
  children,
}: CurrentCardShellProps) {
  return (
    <View style={[styles.card, { backgroundColor: accentColor }]}>
      <View style={styles.content}>{children}</View>
      <BrandLogo
        logoUrl={logoUrl}
        brandName={brandName}
        size={LOGO_TILE_SIZE}
        shape="square"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Radius.card,
    padding: Spacing.paddingLG,
    gap: Spacing.stackGap,
  },
  content: {
    flex: 1,
  },
});
