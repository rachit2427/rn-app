import React from 'react';

import type { RouteProp as RoutePropBase } from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { HeaderRight } from '@src/components/HeaderRight';
import type { CountryDetailProps } from '@src/screens/CountryDetail';

export enum Routes {
  Home = 'Home',
  CountryDetail = 'CountryDetail',
  Favourites = 'Favourites',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.CountryDetail]: CountryDetailProps;
  [Routes.Favourites]: undefined;
};

export const defaultNavigationOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
  animationTypeForReplace: 'pop',
  headerBackTitleVisible: false,
  headerTitle: '',
  headerRight: () => <HeaderRight />,
};

export type RouteProp<R extends Routes> = RoutePropBase<RootStackParamList, R>;
