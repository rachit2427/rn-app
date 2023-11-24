import { Dimensions } from 'react-native';

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
  subregion = '';

  timezone = [''];

  currencies = {
    '': {
      name: '',
      symbol: '',
    },
  };

  pk() {
    return `cca2-${this.cca2}`;
  }

  getCoverImage() {
    return `https://picsum.photos/seed/${this.name.common}/${
      Dimensions.get('screen').width
    }`;
  }
}

const CountryResourceBase = createResource({
  urlPrefix: getBaseUrl(),
  path: '/alpha/:value',
  schema: [Country],
});

export const CountryResource = {
  ...CountryResourceBase,
  getList: CountryResourceBase.getList.extend({
    path: '/all',
    schema: [Country],
  }),
  getByName: CountryResourceBase.get.extend({
    path: '/name/:value',
  }),
  getByCurrency: CountryResourceBase.get.extend({
    path: '/currency/:value',
  }),
  getByCapital: CountryResourceBase.get.extend({
    path: '/capital/:value',
  }),
  getByRegion: CountryResourceBase.get.extend({
    path: '/region/:value',
  }),
  getBySubregion: CountryResourceBase.get.extend({
    path: '/subregion/:value',
  }),
};
