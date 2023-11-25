import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useGetAllCountriesQuery } from '@src/api/countries';
import { Loader } from '@src/components/Loader';
import { translations } from '@src/service/translations';

interface ListEmptyComponentProps {}

const ListEmptyComponentComponent: React.FC<ListEmptyComponentProps> = ({}) => {
  const { isLoading } = useGetAllCountriesQuery();

  if (isLoading) return <Loader />;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">
        {translations.screens.countryList.emptyList.title}
      </Text>

      <Text variant="bodyMedium">
        {translations.screens.countryList.emptyList.description}
      </Text>
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

export const ListEmptyComponent = memo(ListEmptyComponentComponent);
