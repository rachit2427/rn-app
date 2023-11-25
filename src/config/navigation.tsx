import type { RouteProp as RoutePropBase } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { CountryDetailProps } from '@src/screens/CountryDetail';
import type { CountryListProps } from '@src/screens/CountryList';

export enum Routes {
  CountryList = 'CountryList',
  CountryDetail = 'CountryDetail',
  About = 'About',
}

export type RootStackParamList = {
  [Routes.CountryList]: CountryListProps;
  [Routes.CountryDetail]: CountryDetailProps;
  [Routes.About]: undefined;
};

export type RouteProp<R extends Routes> = RoutePropBase<RootStackParamList, R>;
export type NavigtionProps<R extends Routes> = NativeStackNavigationProp<
  RootStackParamList,
  R
>;
