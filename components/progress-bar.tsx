import { StyleSheet, View } from "react-native";

import GiftIcon from "@/assets/images/pop.svg";
import StarIcon from "@/assets/images/star-small.svg";
import { Colors, Radius } from "@/constants/theme";

export type ProgressBarProps = {
  /** 0–1 fraction of progress toward the next reward. */
  progress: number;
};

const BAR_HEIGHT = 32;
const KNOB_SIZE = 32;
const TRACK_WIDTH = 148;
const FILL_RATIO = 0.6;

export function ProgressBar({ progress: _progress }: ProgressBarProps) {
  const fillWidth = TRACK_WIDTH * FILL_RATIO;
  const knobLeft = Math.min(
    Math.max(fillWidth - KNOB_SIZE / 2, 0),
    TRACK_WIDTH - KNOB_SIZE,
  );

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: fillWidth }]} />
      <View style={[styles.knob, { left: knobLeft - 16 }]}>
        <StarIcon width={12} height={12} />
      </View>
      <View style={styles.endCap}>
        <GiftIcon width={18} height={18} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: TRACK_WIDTH,
    height: BAR_HEIGHT,
    borderRadius: Radius.pill,
    backgroundColor: Colors.cream,
    overflow: "hidden",
  },
  fill: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: Colors.gold,
    borderRadius: 18,
  },
  knob: {
    position: "absolute",
    top: 2,
    width: KNOB_SIZE - 4,
    height: KNOB_SIZE - 4,
    borderRadius: KNOB_SIZE / 2,
    backgroundColor: Colors.gold,
    borderWidth: 4,
    borderColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  endCap: {
    position: "absolute",
    top: 0,
    right: 0,
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_SIZE / 2,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#EBEBEB",
  },
});
