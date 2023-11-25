import { combineReducers } from '@reduxjs/toolkit';

import { countryApi } from '@src/api/countries';
import { countryReducer } from '@src/state/country/countrySlice';

export const reducer = combineReducers({
  country: countryReducer,
  [countryApi.reducerPath]: countryApi.reducer,
});
