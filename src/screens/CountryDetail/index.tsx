import React, { memo, useCallback, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  Dialog,
  IconButton,
  MD3Colors,
  Portal,
  Text,
} from 'react-native-paper';

import { useRoute } from '@react-navigation/native';

import type { RouteProp, Routes } from '@src/config/navigation';
import { useFavouriteCountry } from '@src/hooks/useFavouriteCountry';
import { useInsetBottom } from '@src/hooks/useInsetBottom';
import {
  ListItem,
  type ListItemProps,
} from '@src/screens/CountryDetail/components/ListItem';
import { getListItems } from '@src/screens/CountryDetail/utils';
import { useCountry } from '@src/screens/CountryList/hooks/useCountries';
import { translations } from '@src/service/translations';
import { Spacing } from '@src/utils/spacing';

export interface CountryDetailProps {
  id: string;
}

const CountryDetailComponent: React.FC = () => {
  const insetBottom = useInsetBottom();
  const { showBoundary } = useErrorBoundary();

  const { params } = useRoute<RouteProp<Routes.CountryDetail>>();
  const country = useCountry(params.id);
  const { isFavourite, setFavourite, removeFavourite } = useFavouriteCountry(
    params.id,
  );

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
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: country.flags.png }}
          alt={country.flags.alt}
          style={styles.imageBanner}
          resizeMode="cover"
        />

        <View style={styles.titleRow}>
          <View style={styles.titleContainer}>
            <Text variant="headlineSmall" style={styles.itemSpacing}>
              {`${country.name.official} / ${country.name.common}`}
            </Text>

            <Text variant="bodyLarge">
              {`${country.region} / ${
                country.subregion ? country.subregion : '-'
              }`}
            </Text>
          </View>

          <IconButton
            icon={isFavourite ? 'star' : 'star-outline'}
            iconColor={isFavourite ? MD3Colors.primary50 : MD3Colors.neutral50}
            size={24}
            onPress={isFavourite ? removeFavourite : setFavourite}
          />
        </View>

        <View style={styles.itemSpacing}>
          {listItems.map((item, index) => (
            <ListItem
              key={item.title}
              {...item}
              divider={index !== listItems.length - 1}
            />
          ))}
        </View>
      </View>

      <Button
        mode="contained-tonal"
        style={{ marginTop: Spacing.md }}
        icon={'google-maps'}
        onPress={onPressMap}
      >
        Find us on Google Maps
      </Button>

      <Portal>
        <Dialog visible={showDialog} onDismiss={hideDialog}>
          <Dialog.Title>
            {translations.screens.countryDetail.mapDialog.title}
          </Dialog.Title>

          <Dialog.Content>
            <Text variant="bodyMedium">
              {translations.screens.countryDetail.mapDialog.description}
            </Text>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={hideDialog}>
              {translations.screens.countryDetail.mapDialog.cta}
            </Button>
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
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  imageBanner: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    flex: 1,
  },
  itemSpacing: {
    marginTop: Spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    paddingRight: Spacing.xs,
  },
});

export const CountryDetail = memo(CountryDetailComponent);
