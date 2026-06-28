import type { PropsWithChildren, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import BrandLogoMark from "@/assets/images/brand-logo.svg";
import BrandWatermark from "@/assets/images/brand-watermark.svg";
import { BrandLogo } from "@/components/brand-logo";
import { Colors, Radius, Spacing } from "@/constants/theme";

export type CurrentCardShellProps = PropsWithChildren<{
  accentColor: string;
  logoUrl: string | null;
  brandName: string;
  railColor?: string;
  logoFallback?: ReactNode;
  watermark?: ReactNode;
}>;

const LOGO_SIZE = 56;
const RAIL_WIDTH = 102;

export function CurrentCardShell({
  accentColor,
  logoUrl,
  brandName,
  railColor = Colors.white,
  logoFallback,
  watermark,
  children,
}: CurrentCardShellProps) {
  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.card}>
        <View style={[styles.leftArea, { backgroundColor: accentColor }]}>
          <View style={styles.watermark} pointerEvents="none">
            {watermark ?? (
              <BrandWatermark
                width={215}
                height={224}
                viewBox="-8 0 215 224"
                opacity={0.12}
              />
            )}
          </View>
          <View style={styles.content}>{children}</View>
        </View>
        <View style={[styles.rail, { backgroundColor: railColor }]}>
          <BrandLogo
            logoUrl={logoUrl}
            brandName={brandName}
            size={LOGO_SIZE}
            backgroundColor="transparent"
            fallback={
              logoFallback ?? (
                <BrandLogoMark width={LOGO_SIZE} height={LOGO_SIZE} />
              )
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: Radius.card,
    backgroundColor: Colors.white,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 64,
    elevation: 8,
  },
  card: {
    flexDirection: "row",
    borderRadius: Radius.card,
    overflow: "hidden",
  },
  leftArea: {
    flex: 1,
    padding: Spacing.paddingLG,
    overflow: "hidden",
  },
  watermark: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  content: {
    zIndex: 1,
  },
  rail: {
    width: RAIL_WIDTH,
    padding: Spacing.paddingRail,
    alignItems: "flex-end",
  },
});
