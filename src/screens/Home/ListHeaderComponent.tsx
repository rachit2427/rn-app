import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Searchbar, useTheme } from 'react-native-paper';

import { translations } from '@src/translations';
import { Spacing } from '@src/utils/spacing';

interface Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ListHeaderComponentRaw: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Searchbar
        placeholder={translations.screens.home.input.label}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button mode="contained-tonal">
            {translations.screens.home.cta.shuffle}
          </Button>
        </View>

        <View style={styles.buttonWrapper}>
          <Button mode="contained-tonal">
            {translations.screens.home.cta.search}
          </Button>
        </View>
      </View>

      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -Spacing.md,
    paddingHorizontal: Spacing.md,
  },
  buttonContainer: {
    paddingTop: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '48%',
  },
  divider: {
    marginVertical: 20,
  },
});

export const ListHeaderComponent = ListHeaderComponentRaw;
