import React, { memo } from 'react';
import { adaptNavigationTheme } from 'react-native-paper';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSuspense } from '@rest-hooks/react';

import { CountryResource } from '@src/api/countries';
import type { RootStackParamList } from '@src/config/navigation';
import { defaultNavigationOptions, Routes } from '@src/config/navigation';
import { Home } from '@src/screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

const AppNavigationComponent: React.FC = () => {
  useSuspense(CountryResource.getList);

  return (
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={defaultNavigationOptions}
      >
        <Stack.Screen name={Routes.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const AppNavigation = memo(AppNavigationComponent);
