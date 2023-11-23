import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Spacing } from '@src/utils/spacing';

export const useInsetBottom = () => {
  const insets = useSafeAreaInsets();

  return useMemo(
    () => Math.max(insets.bottom + Spacing.xs, Spacing.lg),
    [insets.bottom],
  );
};
