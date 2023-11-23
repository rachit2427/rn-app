import React, { memo, useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

import type { Country } from '@src/api/countries';
import { translations } from '@src/translations';

interface CountryItemProps {
  country: Country;
}

const CountryItemComponent: React.FC<CountryItemProps> = ({ country }) => {
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
      <Card.Cover source={{ uri: country.getCoverImage() }} />

      <Card.Title
        title={`${country.name.official} / ${country.name.common}`}
        titleNumberOfLines={2}
        subtitle={`${country.region} / ${country.subregion}`}
        titleVariant="titleLarge"
        subtitleVariant="bodyMedium"
        left={Flag}
        leftStyle={styles.leftStyle}
      />

      <Card.Actions>
        <Button mode="contained">
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
});

export const CountryItem = memo(CountryItemComponent);
