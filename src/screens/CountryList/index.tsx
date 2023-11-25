import React, { useCallback } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import type { ListRenderItem } from 'react-native/types';

import { useRoute } from '@react-navigation/native';

import { useGetAllCountriesQuery } from '@src/api/countries';
import type { Country } from '@src/api/types';
import { KeyboardAwareView } from '@src/components/KeyboardAwareView';
import type { RouteProp, Routes } from '@src/config/navigation';
import { useInsetBottom } from '@src/hooks/useInsetBottom';
import { CountryItem } from '@src/screens/CountryList/components/CountryItem';
import { ListEmptyComponent } from '@src/screens/CountryList/components/ListEmptyComponent';
import { ListHeaderComponent } from '@src/screens/CountryList/components/ListHeaderComponent';
import { useCountries } from '@src/screens/CountryList/hooks/useCountries';
import { Spacing } from '@src/utils/spacing';

export interface CountryListProps {
  isFavouriteList?: boolean;
}

const CountryListComponent: React.FC = () => {
  const { error, isLoading, refetch } = useGetAllCountriesQuery();
  const route = useRoute<RouteProp<Routes.CountryList>>();

  if (error) throw error;

  const countries = useCountries(route.params?.isFavouriteList);

  const insetBottom = useInsetBottom();

  const renderItem = useCallback<ListRenderItem<Country>>(
    ({ item }) => <CountryItem country={item} key={item.id} />,
    [],
  );

  return (
    <KeyboardAwareView style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        style={styles.flatlist}
        contentContainerStyle={[
          styles.flatlistContent,
          { paddingBottom: insetBottom },
        ]}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={isLoading} />
        }
        refreshing={isLoading}
        keyboardDismissMode="on-drag"
      />
    </KeyboardAwareView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.md,
  },
  flatlist: { flex: 1 },
  flatlistContent: { flexGrow: 1, paddingHorizontal: Spacing.md },
});

export const CountryList = CountryListComponent;
