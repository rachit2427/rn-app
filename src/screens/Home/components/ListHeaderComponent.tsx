import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Searchbar, useTheme } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '@src/state/app/hooks';
import { setSearchQueryAction } from '@src/state/country/countrySlice';
import { translations } from '@src/translations';
import { Spacing } from '@src/utils/spacing';

const ListHeaderComponentRaw: React.FC = () => {
  const theme = useTheme();
  const searchQuery = useAppSelector(state => state.country.searchQuery);
  const dispatch = useAppDispatch();

  const setSearchQuery = useCallback(
    (query: string) => {
      dispatch(setSearchQueryAction(query.trim()));
    },
    [dispatch],
  );

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
