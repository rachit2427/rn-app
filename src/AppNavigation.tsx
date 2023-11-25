import React, { memo } from 'react';
import { adaptNavigationTheme } from 'react-native-paper';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@src/config/navigation';
import { Routes } from '@src/config/navigation';
import { defaultNavigationOptions } from '@src/utils/app';

const Stack = createNativeStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

const AppNavigationComponent: React.FC = () => (
  <NavigationContainer theme={LightTheme}>
    <Stack.Navigator
      initialRouteName={Routes.CountryList}
      screenOptions={defaultNavigationOptions}
    >
      <Stack.Screen
        name={Routes.CountryList}
        getComponent={() => require('./screens/CountryList').CountryList}
        options={({ route }) => ({
          ...defaultNavigationOptions,
          ...(route.params?.isFavouriteList === false
            ? { headerRight: () => null }
            : undefined),
        })}
      />

      <Stack.Screen
        name={Routes.CountryDetail}
        getComponent={() => require('./screens/CountryDetail').CountryDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export const AppNavigation = memo(AppNavigationComponent);
