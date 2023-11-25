import React, { memo, useCallback, useState } from 'react';
import { Button, Divider, Menu } from 'react-native-paper';

import { translations } from '@src/translations';

const SortButtonComponent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = useCallback(() => setVisible(true), []);
  const closeMenu = useCallback(() => setVisible(false), []);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button mode="contained-tonal" onPress={openMenu}>
          {translations.screens.home.cta.sort}
        </Button>
      }
      anchorPosition="bottom"
    >
      <Menu.Item onPress={() => {}} title="Item 1" />
      <Menu.Item onPress={() => {}} title="Item 2" />
      <Divider />
      <Menu.Item onPress={() => {}} title="Item 3" />
    </Menu>
  );
};

export const SortButton = memo(SortButtonComponent);
