import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';

import { Colors, Radius } from '@/constants/theme';

export type ProgressBarProps = {
  /** 0–1 fraction of progress toward the next reward. */
  progress: number;
};

const TRACK_HEIGHT = 10;
const KNOB_SIZE = 24;

export function ProgressBar({ progress }: ProgressBarProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const clamped = Math.min(Math.max(progress, 0), 1);
  const knobLeft = Math.min(Math.max(clamped * trackWidth - KNOB_SIZE / 2, 0), trackWidth - KNOB_SIZE);

  function handleLayout(event: LayoutChangeEvent) {
    setTrackWidth(event.nativeEvent.layout.width);
  }

  return (
    <View style={styles.wrapper} onLayout={handleLayout}>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${clamped * 100}%` }]} />
      </View>
      {trackWidth > 0 && (
        <View style={[styles.knob, { left: knobLeft }]}>
          <Ionicons name="star" size={12} color={Colors.maroon} />
        </View>
      )}
      <View style={styles.endCap}>
        <Ionicons name="gift-outline" size={12} color={Colors.maroon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: KNOB_SIZE,
    justifyContent: 'center',
  },
  track: {
    height: TRACK_HEIGHT,
    borderRadius: Radius.pill,
    backgroundColor: Colors.cream,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.gold,
    borderRadius: Radius.pill,
  },
  knob: {
    position: 'absolute',
    top: 0,
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_SIZE / 2,
    backgroundColor: Colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  endCap: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_SIZE / 2,
    backgroundColor: Colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
