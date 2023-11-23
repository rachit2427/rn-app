import React, { memo, useMemo } from 'react';
import {
  ScrollView as ScrollViewBase,
  type ScrollViewProps,
  StyleSheet,
} from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScrollViewComponent: React.FC<ScrollViewProps> = props => {
  const insets = useSafeAreaInsets();

  const [styleProp, contentContainerStyleProp] = useMemo<
    [StyleProp<ViewStyle>, StyleProp<ViewStyle>]
  >(
    () => [
      StyleSheet.flatten([props.style, styles.container]),
      StyleSheet.flatten([
        props.contentContainerStyle,
        styles.contentContainer,
        { paddingBottom: Math.max(insets.bottom + 8, 24) },
      ]),
    ],
    [insets.bottom, props.contentContainerStyle, props.style],
  );

  return (
    <ScrollViewBase
      {...props}
      style={styleProp}
      contentContainerStyle={contentContainerStyleProp}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export const ScrollView = memo(ScrollViewComponent);
