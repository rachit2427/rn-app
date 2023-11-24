import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import type { CountryDetailProps } from '@src/screens/CountryDetail';

export enum Routes {
  Home = 'Home',
  CountryDetail = 'CountryDetail',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.CountryDetail]: CountryDetailProps;
};

export const defaultNavigationOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
  animationTypeForReplace: 'pop',
  headerBackTitleVisible: false,
  headerTitle: '',
};
