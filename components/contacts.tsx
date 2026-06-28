import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Colors } from '@/constants/theme';

export type ContactsProps = {
  openingHours: string;
  phone: string;
};

export function Contacts({ openingHours, phone }: ContactsProps) {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <AppText variant="caption" color={Colors.muted}>
          Everyday
        </AppText>
        <AppText variant="body" color={Colors.ink}>
          {openingHours}
        </AppText>
      </View>
      <View style={styles.column}>
        <AppText variant="caption" color={Colors.muted}>
          Phone
        </AppText>
        <AppText variant="body" color={Colors.ink}>
          {phone}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    gap: 4,
  },
});
