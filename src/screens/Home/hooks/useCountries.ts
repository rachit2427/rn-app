import { useMemo } from 'react';

import { useGetAllCountriesQuery } from '@src/api/countries';
import type { Country } from '@src/api/types';
import { useAppSelector } from '@src/state/app/hooks';
import { getSortFunction } from '@src/utils/sort';

export const useCountries = () => {
  const { searchQuery, filter, sortKey } = useAppSelector(
    state => state.country,
  );
  const { data: allCountries } = useGetAllCountriesQuery();

  return useMemo(() => {
    if (!allCountries) {
      return allCountries;
    }

    return [...allCountries]
      .filter(
        country =>
          (country.name.common
            .toLowerCase()
            .startsWith(searchQuery.trim().toLowerCase()) ||
            country.name.official
              .toLowerCase()
              .startsWith(searchQuery.trim().toLowerCase())) &&
          (!filter.region || country.region === filter.region) &&
          (!filter.subregion || country.subregion === filter.subregion),
      )
      .sort(getSortFunction(sortKey));
  }, [allCountries, sortKey, searchQuery, filter.region, filter.subregion]);
};

export const useCountry = (id: Country['id']): Country | undefined =>
  useAppSelector(state => state.country.countryMap[id]);
