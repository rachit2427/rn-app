import React, { memo, useCallback, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Image, Linking, ScrollView, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, Surface, Text } from 'react-native-paper';

import { useRoute } from '@react-navigation/native';

import type { RouteProp, Routes } from '@src/config/navigation';
import { useInsetBottom } from '@src/hooks/useInsetBottom';
import {
  ListItem,
  type ListItemProps,
} from '@src/screens/CountryDetail/components/ListItem';
import { getListItems } from '@src/screens/CountryDetail/utils';
import { useCountry } from '@src/screens/Home/hooks/useCountries';
import { Spacing } from '@src/utils/spacing';

export interface CountryDetailProps {
  id: string;
}

const CountryDetailComponent: React.FC = () => {
  const insetBottom = useInsetBottom();
  const { showBoundary } = useErrorBoundary();

  const { params } = useRoute<RouteProp<Routes.CountryDetail>>();
  const country = useCountry(params.id);

  const [showDialog, setShowDialog] = React.useState(false);
  const hideDialog = useCallback(() => setShowDialog(false), []);

  const onPressMap = useCallback(() => {
    if (!country?.maps.googleMaps) return;

    try {
      Linking.openURL(country.maps.googleMaps);
    } catch {
      setShowDialog(true);
    }
  }, [country?.maps.googleMaps]);

  const listItems = useMemo<ListItemProps[]>(
    () => getListItems(country),
    [country],
  );

  if (!country) {
    showBoundary(new Error('Country not found'));
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollview}
      contentContainerStyle={[
        styles.scrollviewContent,
        { paddingBottom: insetBottom },
      ]}
    >
      <Image
        source={{ uri: country.flags.png }}
        alt={country.flags.alt}
        style={styles.imageBanner}
        resizeMode="cover"
      />

      <Surface style={styles.contentContainer}>
        <Text variant="headlineSmall">
          {`${country.name.official} / ${country.name.common}`}
        </Text>

        <Text variant="bodyLarge">
          {`${country.region} / ${country.subregion}`}
        </Text>

        {listItems.map((item, index) => (
          <ListItem
            key={item.title}
            {...item}
            divider={index !== listItems.length - 1}
          />
        ))}

        <Button
          mode="contained-tonal"
          style={{ marginTop: Spacing.md }}
          icon={'google-maps'}
          onPress={onPressMap}
        >
          Find us on Google Maps
        </Button>
      </Surface>

      <Portal>
        <Dialog visible={showDialog} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  scrollviewContent: {
    flexGrow: 1,
  },
  imageBanner: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    marginHorizontal: Spacing.xs,
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
});

export const CountryDetail = memo(CountryDetailComponent);
