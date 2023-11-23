import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export enum Routes {
  Home = 'Home',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
};

export const defaultNavigationOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
  animationTypeForReplace: 'pop',
  headerBackTitleVisible: false,
  headerTitle: '',
};
