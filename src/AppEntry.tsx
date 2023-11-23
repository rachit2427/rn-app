import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ViewProps } from 'react-native/types';

import { StatusBar } from 'expo-status-bar';
import { CacheProvider } from '@rest-hooks/react';

const AppEntryComponent: React.FC<ViewProps> = () => {
  return (
    <CacheProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </CacheProvider>
  );
};

export const AppEntry = memo(AppEntryComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
