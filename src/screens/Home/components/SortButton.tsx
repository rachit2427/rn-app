import React, { memo } from 'react';
import { Divider, Menu } from 'react-native-paper';

import { ButtonWithMenu } from '@src/components/ButtonWithMenu';
import { translations } from '@src/translations';

const SortButtonComponent: React.FC = () => {
  return (
    <ButtonWithMenu buttonTitle={translations.screens.home.cta.sort}>
      <Menu.Item onPress={() => {}} title="Item 1" />
      <Menu.Item onPress={() => {}} title="Item 2" />
      <Divider />
      <Menu.Item onPress={() => {}} title="Item 3" />
    </ButtonWithMenu>
  );
};

export const SortButton = memo(SortButtonComponent);
