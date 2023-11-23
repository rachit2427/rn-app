import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Portal } from 'react-native-paper';

const FullScreenLoaderComponent: React.FC = () => {
  return (
    <Portal>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
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

export const FullScreenLoader = memo(FullScreenLoaderComponent);
