import type { PersistConfig } from 'redux-persist';
import { persistReducer } from 'redux-persist';

import { Storage } from '@src/service/storage';
import type { CountryState } from '@src/state/country/countrySlice';
import { countryReducer } from '@src/state/country/countrySlice';

const countryPersistConfig: PersistConfig<CountryState> = {
  key: 'country',
  storage: Storage,
  whitelist: ['favouriteCountries'],
};

export const countryPersistedReducer = persistReducer(
  countryPersistConfig,
  countryReducer,
);
