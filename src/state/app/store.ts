import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { countryApi } from '@src/api/countries';
import { countryPersistedReducer } from '@src/state/app/persistConfig';

export const store = configureStore({
  reducer: {
    country: countryPersistedReducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(countryApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
