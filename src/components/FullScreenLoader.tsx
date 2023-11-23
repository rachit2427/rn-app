import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

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
