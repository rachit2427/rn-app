import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, MD3Colors, Menu } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import type { NavigtionProps } from '@src/config/navigation';
import { Routes } from '@src/config/navigation';
import { translations } from '@src/service/translations';
import { Spacing } from '@src/utils/spacing';

const HeaderRightComponent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<NavigtionProps<Routes>>();

  const openMenu = useCallback(() => setVisible(true), []);
  const closeMenu = useCallback(() => setVisible(false), []);

  const openFavourites = useCallback(() => {
    closeMenu();
    navigation.push(Routes.CountryList, { isFavouriteList: true });
  }, [closeMenu, navigation]);

  const navigateToAbout = useCallback(() => {
    closeMenu();
    navigation.push(Routes.About);
  }, [closeMenu, navigation]);

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="dots-vertical"
            size={24}
            iconColor={MD3Colors.primary40}
            style={styles.iconStyle}
            onPress={openMenu}
          />
        }
        anchorPosition="bottom"
      >
        <Menu.Item
          onPress={openFavourites}
          leadingIcon="heart-multiple-outline"
          title={translations.components.headerRight.favourites}
        />

        <Menu.Item
          onPress={navigateToAbout}
          leadingIcon="information-outline"
          title={translations.components.headerRight.about}
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: -Spacing.md,
  },
  iconStyle: {
    paddingBottom: Spacing.xs,
  },
});

export const HeaderRight = memo(HeaderRightComponent);
