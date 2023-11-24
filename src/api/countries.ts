import { Dimensions } from 'react-native';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getBaseUrl } from '@src/config/api';

export interface Country {
  id: string;
  coverImage: string;

  cca2: string;
  cca3: string;

  name: {
    common: string;
    official: string;
  };

  capital: string[];

  region: string;
  subregion: string;

  population: number;
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;

  flags: {
    png: string;
    svg: string;
    alt: string;
  };

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  timezone: string[];
}

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: builder => ({
    getAllCountries: builder.query<Country[], string>({
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
            'timezone',
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
    }),
  }),
});

export const { useGetAllCountriesQuery } = countryApi;
