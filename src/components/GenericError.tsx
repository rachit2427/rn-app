import React, { memo } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { translations } from '@src/translations';
import { Spacing } from '@src/utils/spacing';

const GenericErrorComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">
        {translations.components.genericError.title}
      </Text>

      <Text variant="bodyLarge">
        {translations.components.genericError.description}
      </Text>

      {error && error instanceof Error ? (
        <Text style={styles.spacing} variant="bodyMedium">
          {`${translations.components.genericError.error}: ${error.message}`}
        </Text>
      ) : null}

      <Button
        style={styles.spacing}
        onPress={resetErrorBoundary}
        mode="contained-tonal"
        contentStyle={styles.button}
      >
        {translations.components.genericError.retry}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginTop: Spacing.md,
  },
  button: {
    paddingHorizontal: Spacing.md,
  },
});

export const GenericError = memo(GenericErrorComponent);
