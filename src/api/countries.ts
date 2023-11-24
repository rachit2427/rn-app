import { Dimensions } from 'react-native';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Country } from '@src/api/types';
import { getBaseUrl } from '@src/config/api';
import { setCountryMapAction } from '@src/state/country/countrySlice';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: builder => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => ({
        url: '/all',
        params: {
          fields: [
            'cca2',
            'cca3',
            'name',
            'capital',
            'region',
            'subregion',
            'population',
            'currencies',
            'flags',
            'maps',
            'timezones',
            'languages',
          ].join(','),
        },
      }),
      transformResponse: (response: Country[]) =>
        response.map(country => ({
          ...country,
          id: `${country.cca2}-${country.cca3}`,
          coverImage: `https://picsum.photos/seed/${country.name.common}/${
            Dimensions.get('screen').width
          }`,
        })),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data: countries } = await queryFulfilled;

          dispatch(
            setCountryMapAction(
              Object.fromEntries(
                countries.map(country => [country.id, country]),
              ),
            ),
          );
        } catch {}
      },
    }),
  }),
});

export const { useGetAllCountriesQuery } = countryApi;
