import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Colors, Spacing } from '@/constants/theme';

export type HeaderProps = {
  title: string;
  onClose?: () => void;
  onBookmark?: () => void;
};

export function Header({ title, onClose, onBookmark }: HeaderProps) {
  return (
    <View style={styles.row}>
      <Pressable accessibilityRole="button" accessibilityLabel="Close" onPress={onClose} style={styles.iconButton}>
        <Ionicons name="close" size={20} color={Colors.ink} />
      </Pressable>
      <AppText variant="headline" weight="600" numberOfLines={1} style={styles.title}>
        {title}
      </AppText>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Save merchant"
        onPress={onBookmark}
        style={styles.iconButton}>
        <Ionicons name="bookmark-outline" size={20} color={Colors.ink} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPadding,
    paddingVertical: 12,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.cream,
  },
});
