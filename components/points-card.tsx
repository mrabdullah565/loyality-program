import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { CurrentCardShell } from '@/components/current-card-shell';
import { ProgressBar } from '@/components/progress-bar';
import { Colors, Spacing } from '@/constants/theme';
import type { Merchant, PointsProgram } from '@/types/loyalty';

export type PointsCardProps = {
  merchant: Merchant;
  pointsProgram: PointsProgram;
};

export function PointsCard({ merchant, pointsProgram }: PointsCardProps) {
  const { userPoints, earn_rule_text, rewards } = pointsProgram;
  const nextReward = rewards.find((reward) => reward.trigger_value > userPoints);
  const progress = nextReward ? userPoints / nextReward.trigger_value : 1;

  return (
    <CurrentCardShell accentColor={Colors.maroon} logoUrl={merchant.logo_url} brandName={merchant.brand_name}>
      <View style={styles.headerRow}>
        <AppText variant="headline" weight="700" color={Colors.white} numberOfLines={1} style={styles.brand}>
          {merchant.brand_name.toUpperCase()}
        </AppText>
        <AppText variant="numeric" color={Colors.white}>
          {userPoints} pts
        </AppText>
      </View>

      <View style={styles.ruleRow}>
        <Ionicons name="information-circle-outline" size={14} color={Colors.cream} />
        <AppText variant="caption" color={Colors.cream}>
          {earn_rule_text}
        </AppText>
      </View>

      <View style={styles.progressRow}>
        <ProgressBar progress={progress} />
      </View>

      <AppText variant="caption" color={Colors.cream}>
        {nextReward ? `Next reward at ${nextReward.trigger_value} pts` : 'All rewards unlocked'}
      </AppText>
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
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  progressRow: {
    marginTop: Spacing.stackGap,
    marginBottom: 8,
  },
});
