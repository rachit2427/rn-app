import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GenericErrorProps {
  error?: Error;
}

const GenericErrorComponent: React.FC<GenericErrorProps> = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text>Whoops!</Text>
      <Text>Something went wrong! :(</Text>

      {error && (
        <>
          <Text>Error:</Text>
          <Text>{error.message}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const GenericError = memo(GenericErrorComponent);
