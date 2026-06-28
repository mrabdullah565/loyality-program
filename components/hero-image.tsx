import StarBucksLogo from "@/assets/icons/star-bucks.svg";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { Colors, Radius, Spacing } from "@/constants/theme";
import { BrandLogo } from "./brand-logo";

export type HeroImageProps = {
  coverUrl: string | number | null;
  logoUrl: string | null;
  brandName: string;
};

const LOGO_SIZE = 68;
const ICON_SIZE = 42;

export function HeroImage({ coverUrl, logoUrl, brandName }: HeroImageProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cover}>
        {coverUrl ? (
          <Image
            source={coverUrl}
            style={styles.image}
            contentFit="cover"
            transition={200}
          />
        ) : (
          <View style={[styles.image, styles.coverFallback]}>
            <Ionicons name="image-outline" size={32} color={Colors.muted} />
          </View>
        )}
      </View>
      <View style={styles.logoAvatar}>
        <BrandLogo
          logoUrl={logoUrl}
          brandName={brandName}
          size={LOGO_SIZE - 6}
          shape="circle"
          fallback={<StarBucksLogo width={ICON_SIZE} height={ICON_SIZE} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Spacing.paddingLG,
  },
  cover: {
    borderRadius: Radius.card,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 154,
  },
  coverFallback: {
    backgroundColor: Colors.cream,
    alignItems: "center",
    justifyContent: "center",
  },
  logoAvatar: {
    position: "absolute",
    right: Spacing.paddingLG + 30,
    bottom: -LOGO_SIZE / 2,
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: Colors.cream,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: Colors.white,
    shadowColor: Colors.ink,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
  },
});
