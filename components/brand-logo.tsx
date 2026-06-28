import { Image } from "expo-image";
import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/app-text";
import { Colors } from "@/constants/theme";

export type BrandLogoProps = {
  logoUrl: string | null;
  brandName: string;
  size: number;
  shape?: "circle" | "square";
  backgroundColor?: string;
  fallback?: ReactNode;
};

export function BrandLogo({
  logoUrl,
  brandName,
  size,
  shape = "circle",
  backgroundColor = Colors.white,
  fallback,
}: BrandLogoProps) {
  const borderRadius = shape === "circle" ? size / 2 : size * 0.22;

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius, backgroundColor },
      ]}
    >
      {logoUrl ? (
        <Image
          source={{ uri: logoUrl }}
          style={styles.image}
          contentFit="cover"
        />
      ) : fallback ? (
        fallback
      ) : (
        <AppText
          variant="headline"
          weight="700"
          color={Colors.maroon}
          style={{ fontSize: size * 0.4 }}
        >
          {brandName.charAt(0).toUpperCase()}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
