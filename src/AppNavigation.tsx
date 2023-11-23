import React, { memo } from 'react';
import { adaptNavigationTheme } from 'react-native-paper';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GenericError } from '@src/components/GenericError';
import type { RootStackParamList } from '@src/config/navigation';
import { Routes } from '@src/config/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

interface AppNavigationProps {}

const AppNavigationComponent: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={GenericError} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const AppNavigation = memo(AppNavigationComponent);
