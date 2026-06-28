import Bookmark from "@/assets/icons/bookmark.svg";
import Close from "@/assets/icons/close.svg";
import { Pressable, StyleSheet, View } from "react-native";

import { AppText } from "@/components/app-text";
import { Colors, Spacing } from "@/constants/theme";

export type HeaderProps = {
  title: string;
  onClose?: () => void;
  onBookmark?: () => void;
};

export function Header({ title, onClose, onBookmark }: HeaderProps) {
  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close"
        onPress={onClose}
        style={styles.iconButton}
      >
        <Close width={20} height={20} color={Colors.ink} />
      </Pressable>
      <AppText
        variant="headline"
        weight="600"
        numberOfLines={1}
        style={styles.title}
      >
        {title}
      </AppText>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Save merchant"
        onPress={onBookmark}
        style={styles.iconButton}
      >
        <Bookmark width={20} height={20} color={Colors.ink} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.paddingXL,
    marginTop: 10,
    marginBottom: 24,
  },
  title: {
    flex: 1,
    textAlign: "center",
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray,
  },
});
