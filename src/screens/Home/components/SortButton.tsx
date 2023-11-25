import React, { memo } from 'react';
import { Divider, Menu } from 'react-native-paper';

import { ButtonWithMenu } from '@src/components/ButtonWithMenu';
import { translations } from '@src/translations';

const SortButtonComponent: React.FC = () => {
  const sortOptions = Object.entries(translations.screens.home.sortOptions);

  return (
    <ButtonWithMenu buttonTitle={translations.screens.home.cta.sort}>
      {sortOptions.map(([key, option], index) => (
        <React.Fragment key={key}>
          <Menu.Item onPress={() => {}} title={option} />
          {index !== sortOptions.length - 1 ? <Divider /> : null}
        </React.Fragment>
      ))}
    </ButtonWithMenu>
  );
};

export const SortButton = memo(SortButtonComponent);
