import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Portal } from 'react-native-paper';

const LoaderComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const FullScreenLoaderComponent: React.FC = () => {
  return (
    <Portal>
      <LoaderComponent />
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Loader = memo(LoaderComponent);
export const FullScreenLoader = memo(FullScreenLoaderComponent);
