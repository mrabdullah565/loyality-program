import StarBucksLogo from "@/assets/icons/star-bucks.svg";
import StarbucksWatermark from "@/assets/images/starbucks-watermark.svg";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/app-text";
import { BrandLogo } from "@/components/brand-logo";
import { PrimaryButton } from "@/components/button";
import { Colors, Radius, Spacing } from "@/constants/theme";
import { useCountdown } from "@/hooks/use-countdown";
import type { Offer } from "@/types/loyalty";

export type OfferCardProps = {
  offer: Offer;
  logoUrl: string | null;
  onClaim?: () => void;
};

const SEAL_SIZE = 56;
const BADGE_SIZE = 108;

function OfferSeal({ icon }: { icon: keyof typeof Ionicons.glyphMap }) {
  return (
    <View style={styles.seal}>
      <Ionicons name={icon} size={22} color={Colors.maroon} />
    </View>
  );
}

function OfferBadge({ Source }: { Source: NonNullable<Offer["badge"]> }) {
  return <Source width={BADGE_SIZE} height={BADGE_SIZE} />;
}

export function OfferCard({ offer, logoUrl, onClaim }: OfferCardProps) {
  const expiresLabel = useCountdown(offer.expires_in);
  const isRibbon = offer.style === "featured" && !!offer.discount_label;
  const isSolidFeatured = offer.style === "featured" && !offer.discount_label;

  if (isRibbon) {
    return (
      <View style={styles.card}>
        <View style={styles.ribbon}>
          <View style={styles.ribbonWatermark} pointerEvents="none">
            <StarbucksWatermark
              width={120}
              height={150}
              preserveAspectRatio="xMidYMid slice"
              color={Colors.cream}
              opacity={0.16}
            />
          </View>
          <AppText
            variant="numeric"
            color={Colors.gold}
            style={styles.ribbonText}
            numberOfLines={1}
          >
            {offer.discount_label}
          </AppText>
        </View>
        <View style={styles.ribbonPanel}>
          <View style={styles.brandRow}>
            <AppText
              variant="headline"
              weight="700"
              color={Colors.ink}
              style={styles.brandName}
            >
              {offer.brand}
            </AppText>
            <BrandLogo
              logoUrl={logoUrl}
              brandName={offer.brand}
              size={28}
              shape="circle"
              fallback={<StarBucksLogo width={28} height={28} />}
            />
          </View>
          <AppText variant="headline" weight="700" color={Colors.ink}>
            {offer.headline}
          </AppText>
          <AppText variant="body" color={"#6C6C6C"}>
            {offer.code}
          </AppText>
          <View style={styles.footerRow}>
            <View>
              <AppText variant="body" weight="700" color={Colors.maroon}>
                Expires in
              </AppText>
              <AppText variant="body" weight="700" color={Colors.maroon}>
                {expiresLabel}
              </AppText>
            </View>
            <PrimaryButton
              label="Claim"
              variant="dark"
              style={styles.claimButton}
              onPress={onClaim}
            />
          </View>
        </View>
      </View>
    );
  }

  const cardBackground = isSolidFeatured ? Colors.maroon : Colors.gray;
  const textColor = isSolidFeatured ? Colors.white : Colors.ink;
  const sealIcon = isSolidFeatured ? "cafe" : "star";

  return (
    <View
      style={[
        styles.card,
        styles.iconCard,
        { backgroundColor: cardBackground },
      ]}
    >
      {offer.badge ? (
        <OfferBadge Source={offer.badge} />
      ) : (
        <OfferSeal icon={sealIcon} />
      )}
      <View style={styles.iconCardContent}>
        <View style={styles.brandRow}>
          <AppText
            variant="headline"
            weight="700"
            color={textColor}
            style={styles.brandName}
          >
            {offer.brand}
          </AppText>
          <BrandLogo
            logoUrl={logoUrl}
            brandName={offer.brand}
            size={28}
            shape="circle"
            fallback={<StarBucksLogo width={28} height={28} />}
          />
        </View>
        <AppText variant="headline" weight="700" color={textColor}>
          {offer.headline}
        </AppText>
        <View style={styles.footerRow}>
          <View>
            <AppText
              variant="body"
              weight="700"
              color={isSolidFeatured ? Colors.white : Colors.maroon}
            >
              Expires in
            </AppText>
            <AppText
              variant="body"
              weight="700"
              color={isSolidFeatured ? Colors.white : Colors.maroon}
            >
              {expiresLabel}
            </AppText>
          </View>
          <PrimaryButton
            label="Claim"
            variant="dark"
            style={styles.claimButton}
            onPress={onClaim}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: Radius.card,
    overflow: "hidden",
  },
  ribbon: {
    width: 125,
    backgroundColor: Colors.maroon,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  ribbonWatermark: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  ribbonText: {
    zIndex: 1,
    fontSize: 46,
    lineHeight: 46,
    textAlign: "center",
    includeFontPadding: false,
    transform: [{ rotate: "-90deg" }],
  },
  ribbonPanel: {
    flex: 1,
    backgroundColor: Colors.gray,
    padding: Spacing.paddingLG,
    gap: 4,
  },
  iconCard: {
    alignItems: "center",
    padding: Spacing.paddingLG,
    gap: Spacing.stackGap,
  },
  iconCardContent: {
    flex: 1,
    gap: 4,
  },
  seal: {
    width: SEAL_SIZE,
    height: SEAL_SIZE,
    borderRadius: SEAL_SIZE / 2,
    backgroundColor: Colors.cream,
    borderWidth: 2,
    borderColor: Colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  claimButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: 28,
  },
  brandName: {
    fontSize: 21,
    lineHeight: 27,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
});
