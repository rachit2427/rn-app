import type { translations } from '@src/service/translations';

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
  subregion?: string;

  population: number;
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;

  languages: Record<string, string>;

  flags: {
    png: string;
    svg: string;
    alt: string;
  };

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  timezones: string[];
}

export interface Filter {
  region?: string;
  subregion?: string;
}

export type SortKey = keyof typeof translations.screens.home.sortOptions;
