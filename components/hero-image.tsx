import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { BrandLogo } from '@/components/brand-logo';
import { Colors, Radius, Spacing } from '@/constants/theme';

export type HeroImageProps = {
  coverUrl: string | null;
  logoUrl: string | null;
  brandName: string;
};

const LOGO_SIZE = 64;

export function HeroImage({ coverUrl, logoUrl, brandName }: HeroImageProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cover}>
        {coverUrl ? (
          <Image source={{ uri: coverUrl }} style={styles.image} contentFit="cover" transition={200} />
        ) : (
          <View style={[styles.image, styles.coverFallback]}>
            <Ionicons name="image-outline" size={32} color={Colors.muted} />
          </View>
        )}
      </View>
      <View style={styles.logoAvatar}>
        <BrandLogo logoUrl={logoUrl} brandName={brandName} size={LOGO_SIZE - 6} shape="circle" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Spacing.screenPadding,
  },
  cover: {
    borderRadius: Radius.card,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
  },
  coverFallback: {
    backgroundColor: Colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoAvatar: {
    position: 'absolute',
    right: Spacing.screenPadding + 16,
    bottom: -LOGO_SIZE / 2,
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: Colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
    shadowColor: Colors.ink,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: 'hidden',
  },
});
