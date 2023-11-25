import React from 'react';

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { HeaderRight } from '@src/components/HeaderRight';

export const defaultNavigationOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
  animationTypeForReplace: 'pop',
  headerBackTitleVisible: false,
  headerTitle: '',
  headerRight: () => <HeaderRight />,
};
