import { useMemo } from 'react';

import { useGetAllCountriesQuery } from '@src/api/countries';
import { useAppSelector } from '@src/state/app/hooks';

export const useCountries = () => {
  const searchQuery = useAppSelector(state => state.country.searchQuery);
  const { data: allCountries } = useGetAllCountriesQuery('');

  return useMemo(() => {
    if (!allCountries || !searchQuery.trim()) {
      return allCountries;
    }

    return allCountries.filter(
      country =>
        country.name.common
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase()),
    );
  }, [searchQuery, allCountries]);
};
