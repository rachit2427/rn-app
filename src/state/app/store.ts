import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { countryApi } from '@src/api/countries';
import { countryReducer } from '@src/state/country/countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
