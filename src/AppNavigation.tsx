import React, { memo } from 'react';
import { adaptNavigationTheme } from 'react-native-paper';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@src/config/navigation';
import { defaultNavigationOptions, Routes } from '@src/config/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

const AppNavigationComponent: React.FC = () => (
  <NavigationContainer theme={LightTheme}>
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={defaultNavigationOptions}
    >
      <Stack.Screen
        name={Routes.Home}
        getComponent={() => require('./screens/Home').Home}
      />

      <Stack.Screen
        name={Routes.CountryDetail}
        getComponent={() => require('./screens/CountryDetail').CountryDetail}
        options={{ headerTransparent: true }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export const AppNavigation = memo(AppNavigationComponent);
