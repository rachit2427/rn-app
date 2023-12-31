import React, { memo, useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Menu, useTheme } from 'react-native-paper';

import { ButtonWithMenu } from '@src/components/ButtonWithMenu';
import { useMountedRef } from '@src/hooks/useMountedRef';
import { translations } from '@src/service/translations';
import { useAppDispatch, useAppSelector } from '@src/state/app/hooks';
import { setFilterAction } from '@src/state/country/countrySlice';
import { Spacing } from '@src/utils/spacing';

const FilterButtonComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const mountedRef = useMountedRef();

  const { filter, regionSubregionMap } = useAppSelector(state => state.country);

  const [selectedRegion, setSelectedRegion] = useState(filter.region || '');
  const onMenuClose = useCallback(
    () =>
      setTimeout(() => {
        mountedRef.current && setSelectedRegion('');
      }, 350),
    [mountedRef],
  );

  const setFilter = useCallback(
    (region?: string, subregion?: string) => {
      dispatch(
        setFilterAction({
          region,
          subregion,
        }),
      );
    },
    [dispatch],
  );

  const onPressRegion = useCallback(
    (region: string) => {
      const subRegions = regionSubregionMap[region];
      if (!subRegions.length) {
        setFilter(region);
        return;
      }

      setSelectedRegion(region);
    },
    [regionSubregionMap, setFilter],
  );

  const items = useMemo<
    {
      title: string;
      onPress: () => void;
      leadingIcon?: string;
      active?: boolean;
    }[]
  >(() => {
    const regions = Object.keys(regionSubregionMap);

    if (!selectedRegion) {
      return [
        ...regions.map(region => ({
          onPress: () => onPressRegion(region),
          title: region,
          active: region === filter.region,
        })),
        {
          onPress: () => setFilter(),
          title: translations.global.actions.clear,
          leadingIcon: 'close',
        },
      ];
    }

    const subRegions = regionSubregionMap[selectedRegion];
    return [
      {
        onPress: () => setSelectedRegion(''),
        title: translations.global.actions.back,
        leadingIcon: 'arrow-left',
      },
      ...subRegions.map(subregion => ({
        onPress: () => setFilter(selectedRegion, subregion),
        title: subregion,
        active: subregion === filter.subregion,
      })),
    ];
  }, [
    filter.region,
    filter.subregion,
    onPressRegion,
    regionSubregionMap,
    selectedRegion,
    setFilter,
  ]);

  return (
    <ButtonWithMenu
      buttonTitle={translations.screens.countryList.cta.filter}
      onClose={onMenuClose}
      icon="filter"
      active={Boolean(filter.region || filter.subregion)}
      menuStyle={styles.menu}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Menu.Item
            leadingIcon={item.leadingIcon}
            onPress={item.onPress}
            title={item.title}
            style={
              item.active
                ? { backgroundColor: theme.colors.primaryContainer }
                : undefined
            }
          />
          {index !== items.length - 1 ? <Divider /> : null}
        </React.Fragment>
      ))}
    </ButtonWithMenu>
  );
};

const styles = StyleSheet.create({
  menu: {
    right: Spacing.md,
  },
});

export const FilterButton = memo(FilterButtonComponent);
