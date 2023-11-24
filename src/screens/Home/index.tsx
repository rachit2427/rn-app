import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import type { ListRenderItem } from 'react-native/types';

import { type Country, useGetAllCountriesQuery } from '@src/api/countries';
import { KeyboardAwareView } from '@src/components/KeyboardAwareView';
import { useInsetBottom } from '@src/hooks/useInsetBottom';
import { CountryItem } from '@src/screens/Home/CountryItem';
import { ListHeaderComponent } from '@src/screens/Home/ListHeaderComponent';
import { Spacing } from '@src/utils/spacing';

const HomeComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: countries, error } = useGetAllCountriesQuery('');
  if (error) throw error;

  const insetBottom = useInsetBottom();

  const renderItem = useCallback<ListRenderItem<Country>>(
    ({ item }) => <CountryItem country={item} key={item.id} />,
    [],
  );

  const listHeaderComponent = useCallback(
    () => (
      <ListHeaderComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    ),
    [searchQuery],
  );

  // const filteredCountries = useMemo(
  //   () =>
  //     countries.filter(country => country.name.common.startsWith(searchQuery)),
  //   [countries, searchQuery],
  // );

  return (
    <KeyboardAwareView style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: insetBottom,
          paddingHorizontal: Spacing.md,
        }}
        ListHeaderComponent={listHeaderComponent}
        stickyHeaderIndices={[0]}
      />
    </KeyboardAwareView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.md,
  },
});

export const Home = HomeComponent;
