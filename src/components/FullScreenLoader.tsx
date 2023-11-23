import React, { memo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Portal } from '@gorhom/portal';

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
