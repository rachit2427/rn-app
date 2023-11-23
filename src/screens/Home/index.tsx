import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import type { ListRenderItem } from 'react-native/types';

import { useSuspense } from '@rest-hooks/react';

import type { Country } from '@src/api/countries';
import { CountryResource } from '@src/api/countries';
import { KeyboardAwareView } from '@src/components/KeyboardAwareView';
import { useInsetBottom } from '@src/hooks/useInsetBottom';
import { CountryItem } from '@src/screens/Home/CountryItem';
import { ListHeaderComponent } from '@src/screens/Home/ListHeaderComponent';
import { useAppContext } from '@src/state/app';
import { Spacing } from '@src/utils/spacing';

const show = 'suggestions';

const HomeComponent: React.FC = () => {
  const countries = useSuspense(CountryResource.getList);
  const { randomSeed } = useAppContext();
  const insetBottom = useInsetBottom();

  const suggestions = useMemo(() => {
    const shuffled = [...countries].sort(() => 0.5 - randomSeed);
    const suggestionCount = Math.min(shuffled.length, 10);

    return shuffled.slice(0, suggestionCount);
  }, [countries, randomSeed]);

  const renderItem = useCallback<ListRenderItem<Country>>(
    ({ item }) => <CountryItem country={item} key={item.pk()} />,
    [],
  );

  const data = useMemo(() => {
    if (show === 'suggestions') {
      return suggestions;
    }

    return countries;
  }, [countries, suggestions]);

  return (
    <KeyboardAwareView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: insetBottom,
          paddingHorizontal: Spacing.md,
        }}
        ListHeaderComponent={ListHeaderComponent}
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
