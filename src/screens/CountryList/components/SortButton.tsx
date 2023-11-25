import React, { memo, useCallback } from 'react';
import { Divider, Menu, useTheme } from 'react-native-paper';

import type { SortKey } from '@src/api/types';
import { ButtonWithMenu } from '@src/components/ButtonWithMenu';
import { translations } from '@src/service/translations';
import { useAppDispatch, useAppSelector } from '@src/state/app/hooks';
import { setSortKeyAction } from '@src/state/country/countrySlice';

const SortButtonComponent: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const sortKey = useAppSelector(state => state.country.sortKey);

  const sortOptions = Object.entries(
    translations.screens.countryList.sortOptions,
  ) as [SortKey, string][];

  const setSortKey = useCallback(
    (key?: SortKey) => {
      dispatch(setSortKeyAction(key));
    },
    [dispatch],
  );

  return (
    <ButtonWithMenu
      buttonTitle={translations.screens.countryList.cta.sort}
      icon="sort"
      active={Boolean(sortKey)}
    >
      {sortOptions.map(([key, option], index) => (
        <React.Fragment key={key}>
          <Menu.Item
            onPress={() => setSortKey(key)}
            title={option}
            style={
              sortKey === key
                ? { backgroundColor: theme.colors.primaryContainer }
                : undefined
            }
          />
          {index !== sortOptions.length - 1 ? <Divider /> : null}
        </React.Fragment>
      ))}
      <Menu.Item
        onPress={() => setSortKey()}
        title={translations.global.actions.clear}
        leadingIcon="close"
      />
    </ButtonWithMenu>
  );
};

export const SortButton = memo(SortButtonComponent);
