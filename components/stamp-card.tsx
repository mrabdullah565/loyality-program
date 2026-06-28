import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { CurrentCardShell } from '@/components/current-card-shell';
import { StampGrid } from '@/components/stamp-grid';
import { Colors, Spacing } from '@/constants/theme';
import type { Merchant, StampCardData } from '@/types/loyalty';

export type StampCardProps = {
  merchant: Merchant;
  stampCard: StampCardData;
};

export function StampCard({ merchant, stampCard }: StampCardProps) {
  const { stamps_required, userStamps, earn_rule_text } = stampCard;

  return (
    <CurrentCardShell accentColor={Colors.slate} logoUrl={merchant.logo_url} brandName={merchant.brand_name}>
      <View style={styles.headerRow}>
        <AppText variant="headline" weight="700" color={Colors.white} numberOfLines={1} style={styles.brand}>
          {merchant.brand_name.toUpperCase()}
        </AppText>
        <AppText variant="numeric" color={Colors.white}>
          {userStamps}/{stamps_required}
        </AppText>
      </View>

      <AppText variant="caption" color={Colors.cream} style={styles.rule}>
        {earn_rule_text}
      </AppText>

      <StampGrid stampsRequired={stamps_required} userStamps={userStamps} />
    </CurrentCardShell>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.stackGap,
  },
  brand: {
    flex: 1,
  },
  rule: {
    marginTop: 6,
    marginBottom: Spacing.stackGap,
  },
});
