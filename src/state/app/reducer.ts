import { useReducer } from 'react';

import { type AppActions, setRandomSeedAction } from '@src/state/app/actions';
import { getType } from '@src/utils/state';

export interface AppState {
  randomSeed: number;
}

const initialState: AppState = {
  randomSeed: Math.random(),
};

const AppReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case getType(setRandomSeedAction):
      return {
        ...state,
        randomSeed: Math.random(),
      };

    default:
      return state;
  }
};

export const useAppReducer = () => useReducer(AppReducer, initialState);
