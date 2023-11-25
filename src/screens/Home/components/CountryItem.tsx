import React, { memo, useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import type { Country } from '@src/api/types';
import { Routes } from '@src/config/navigation';
import { translations } from '@src/translations';
import { Spacing } from '@src/utils/spacing';

interface CountryItemProps {
  country: Country;
}

const CountryItemComponent: React.FC<CountryItemProps> = ({ country }) => {
  const navigation = useNavigation();

  const onPress = useCallback(
    () =>
      navigation.navigate(Routes.CountryDetail, {
        id: country.id,
      }),
    [country.id, navigation],
  );

  const Flag = useCallback(
    () => (
      <Image
        source={{ uri: country.flags.png }}
        alt={country.flags.alt}
        height={100}
        resizeMode="contain"
      />
    ),
    [country.flags.alt, country.flags.png],
  );

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: country.coverImage }} />

      <Card.Title
        title={`${country.name.official} / ${country.name.common}`}
        titleNumberOfLines={2}
        subtitle={`${country.region} / ${
          country.subregion ? country.subregion : '-'
        }`}
        titleVariant="titleLarge"
        subtitleVariant="bodyMedium"
        left={Flag}
        leftStyle={styles.leftStyle}
      />

      <Card.Actions>
        <Button
          style={styles.cta}
          mode="contained"
          hitSlop={{
            top: 10,
            bottom: 10,
          }}
          onPress={onPress}
        >
          {translations.screens.home.countryCard.cta}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
  },
  leftStyle: {
    width: 50,
  },
  cta: {
    width: '100%',
    marginTop: Spacing.sm,
  },
});

export const CountryItem = memo(CountryItemComponent);
