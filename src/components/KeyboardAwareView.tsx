import React, { memo } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import type { KeyboardAvoidingViewProps } from 'react-native/types';

import { useHeaderHeight } from '@react-navigation/elements';

const KeyboardAwareViewComponent: React.FC<
  KeyboardAvoidingViewProps
> = props => {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
      {...props}
    />
  );
};

export const KeyboardAwareView = memo(KeyboardAwareViewComponent);
