import { createResource, Entity } from '@rest-hooks/rest';

import { getBaseUrl } from '@src/config/api';

export class Country extends Entity {
  cca2 = '';
  cca3 = '';

  capital = [''];
  flags = {
    png: '',
    svg: '',
    alt: '',
  };

  maps = {
    googleMaps: '',
    openStreetMaps: '',
  };

  name = {
    common: '',
    official: '',
  };

  population = 0;
  region = '';

  timezone = [''];

  currencies = {
    '': {
      name: '',
      symbol: '',
    },
  };

  pk() {
    return `${this.cca2}-${this.cca3}`;
  }
}

const CountryResourceBase = createResource({
  urlPrefix: getBaseUrl(),
  path: '/:by/:value',
  schema: [Country],
  searchParams: {
    fields:
      'cca2,cca3,name,region,population,capital,flags,maps,timezone,currencies',
  },
});

export const CountryResource = {
  ...CountryResourceBase,
  getList: CountryResourceBase.getList.extend({
    path: '/all',
    schema: [Country],
  }),
};
