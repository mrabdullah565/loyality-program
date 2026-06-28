import type { ComponentType } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import type { SvgProps } from "react-native-svg";

import { AppText } from "@/components/app-text";
import { Colors, Radius, Spacing } from "@/constants/theme";

export type ChipProps = {
  icon: ComponentType<SvgProps>;
  label: string;
  variant?: "filled" | "outlined";
  style?: StyleProp<ViewStyle>;
};

export function Chip({ icon: Icon, label, variant = "filled", style }: ChipProps) {
  return (
    <View style={[styles.chip, variant === "outlined" && styles.chipOutlined, style]}>
      <Icon width={22} height={22} />
      <AppText variant="body" color={Colors.ink}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: Spacing.paddingLG,
    paddingVertical: Spacing.paddingMD,
    borderRadius: Radius.pill,
    backgroundColor: Colors.gray,
  },
  chipOutlined: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
