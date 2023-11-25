import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, MD3Colors, Menu } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import { Routes } from '@src/config/navigation';
import { translations } from '@src/service/translations';
import { Spacing } from '@src/utils/spacing';

const HeaderRightComponent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const openMenu = useCallback(() => setVisible(true), []);
  const closeMenu = useCallback(() => setVisible(false), []);

  const openFavourites = useCallback(() => {
    closeMenu();
    navigation.navigate(Routes.Favourites);
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
            onPress={openMenu}
          />
        }
        anchorPosition="bottom"
      >
        <Menu.Item
          onPress={openFavourites}
          leadingIcon="heart"
          title={translations.components.headerRight.favourites}
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: -Spacing.md,
  },
});

export const HeaderRight = memo(HeaderRightComponent);
