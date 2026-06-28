import Fire from "@/assets/icons/fire.svg";
import Users from "@/assets/icons/users.svg";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppText } from "@/components/app-text";
import { PrimaryButton } from "@/components/button";
import { Chip } from "@/components/chip";
import { Contacts } from "@/components/contacts";
import { Header } from "@/components/header";
import { HeroImage } from "@/components/hero-image";
import { InfoRow } from "@/components/info-row";
import { OfferCard } from "@/components/offer-card";
import { PointsCard } from "@/components/points-card";
import { StampCard } from "@/components/stamp-card";
import { StateToggle } from "@/components/state-toggle";
import { Colors, Radius, Spacing } from "@/constants/theme";
import {
  merchant,
  offers,
  pointsProgram,
  stampCard,
} from "@/data/mock-merchant";
import type { LoyaltyState } from "@/types/loyalty";

export default function MerchantDetailScreen() {
  const [loyaltyState, setLoyaltyState] = useState<LoyaltyState>("points");

  function handleCall() {
    Linking.openURL(`tel:${merchant.phone.replace(/\s/g, "")}`);
  }

  function handleDirections() {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(merchant.name)}`,
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StateToggle value={loyaltyState} onChange={setLoyaltyState} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header title={merchant.brand_name} />

        <HeroImage
          coverUrl={merchant.cover_image_url}
          logoUrl={merchant.logo_url}
          brandName={merchant.brand_name}
        />

        <View style={styles.section}>
          <AppText variant="display" color={Colors.ink}>
            {merchant.name}
          </AppText>
          <AppText
            variant="body"
            color={Colors.muted}
            style={styles.description}
          >
            {merchant.description}
          </AppText>

          <View style={styles.infoRowWrapper}>
            <InfoRow
              distanceKm={merchant.distance_km}
              category={merchant.category}
              rating={merchant.rating}
            />
          </View>

          <View style={styles.badgeRow}>
            <Chip
              icon={Users}
              label={`${merchant.members_count}+ members`}
              variant="outlined"
            />
            <Chip icon={Fire} label="Active this week" variant="outlined" />
          </View>
        </View>

        <View style={styles.ptsStmCard}>
          <AppText
            variant="headline"
            weight="600"
            color={Colors.ink}
            style={styles.sectionLabel}
          >
            Current card
          </AppText>

          {loyaltyState === "points" ? (
            <PointsCard merchant={merchant} pointsProgram={pointsProgram} />
          ) : (
            <StampCard merchant={merchant} stampCard={stampCard} />
          )}

          <Pressable style={styles.termsButton} accessibilityRole="button">
            <View style={styles.circle}>
              <Ionicons name="arrow-up" size={12} color={Colors.ink} />
            </View>
            <AppText variant="body" weight="600" color={Colors.ink}>
              Tap for full terms
            </AppText>
          </Pressable>

          <PrimaryButton
            label="Reward option"
            variant="dark"
            fullWidth
            style={styles.rewardButton}
          />
        </View>

        {loyaltyState === "points" && (
          <View style={styles.section}>
            <AppText
              variant="headline"
              weight="600"
              color={Colors.ink}
              style={styles.sectionLabel}
            >
              Active offers
            </AppText>
            <View style={styles.offersList}>
              {offers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  logoUrl={merchant.logo_url}
                />
              ))}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <AppText
            variant="headline"
            weight="600"
            color={Colors.ink}
            style={styles.sectionLabel}
          >
            Contacts
          </AppText>
          <Contacts
            openingHours={merchant.opening_hours}
            phone={merchant.phone}
          />
        </View>

        <View style={[styles.section, styles.actionsSection]}>
          <PrimaryButton
            label="Directions"
            variant="primary"
            fullWidth
            onPress={handleDirections}
          />
          <PrimaryButton
            label="Call"
            variant="outline"
            fullWidth
            onPress={handleCall}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  ptsStmCard: {
    paddingHorizontal: Spacing.padding2XL,
    marginTop: Spacing.gap9 + 2,
  },
  section: {
    paddingHorizontal: Spacing.padding2XL,
    marginTop: Spacing.sectionGapTop,
  },
  sectionLabel: {
    marginBottom: Spacing.sectionGapBottom,
  },
  description: {
    marginTop: 8,
  },
  infoRowWrapper: {
    marginTop: Spacing.paddingMD,
  },
  circle: {
    height: 22,
    width: 22,
    backgroundColor: "#F0D793",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeRow: {
    flexDirection: "row",
    gap: Spacing.stackGap,
    marginTop: Spacing.stackGap,
  },
  termsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: Spacing.paddingRail,
    paddingVertical: 12,
    borderRadius: Radius.pill,
    backgroundColor: Colors.cream,
  },
  rewardButton: {
    marginTop: Spacing.sectionGapTop,
  },
  offersList: {
    gap: Spacing.stackGap,
  },
  actionsSection: {
    gap: Spacing.stackGap,
  },
});
