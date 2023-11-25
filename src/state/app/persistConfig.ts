import { persistReducer } from 'redux-persist';

import { Storage } from '@src/service/storage';
import { reducer } from '@src/state/app/reducer';

const persistConfig = {
  key: 'root',
  storage: Storage,
};

export const persistedReducer = persistReducer(persistConfig, reducer);
