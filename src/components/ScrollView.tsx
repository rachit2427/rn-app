import React, { memo, useMemo } from 'react';
import {
  ScrollView as ScrollViewBase,
  type ScrollViewProps,
  StyleSheet,
} from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native/types';

import { useInsetBottom } from '@src/hooks/useInsetBottom';
import { Spacing } from '@src/utils/spacing';

const ScrollViewComponent: React.FC<ScrollViewProps> = props => {
  const insetBottom = useInsetBottom();

  const [styleProp, contentContainerStyleProp] = useMemo<
    [StyleProp<ViewStyle>, StyleProp<ViewStyle>]
  >(
    () => [
      StyleSheet.flatten([props.style, styles.container]),
      StyleSheet.flatten([
        props.contentContainerStyle,
        styles.contentContainer,
        { paddingBottom: insetBottom },
      ]),
    ],
    [insetBottom, props.contentContainerStyle, props.style],
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
    paddingHorizontal: Spacing.md,
  },
});

export const ScrollView = memo(ScrollViewComponent);
