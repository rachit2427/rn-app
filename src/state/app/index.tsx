import type { PropsWithChildren } from 'react';
import React, { createContext, useContext } from 'react';

import type { AppActions } from '@src/state/app/actions';
import type { AppState } from '@src/state/app/reducer';
import { useAppReducer } from '@src/state/app/reducer';

const AppContext = createContext<AppState | null>(null);
AppContext.displayName = 'AppContext';

const AppDispatchContext = createContext<React.Dispatch<AppActions> | null>(
  null,
);
AppDispatchContext.displayName = 'AppDispatchContext';

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useAppReducer();

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

const useLocalContext = <T,>(context: React.Context<T | null>) => {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error(
      `${context.displayName} must be used within an AppContextProvider`,
    );
  }

  return ctx;
};

type useAppContextType = {
  (): AppState;
  <T>(selector: (state: AppState) => T): T;
};

export const useAppContext: useAppContextType = (
  selector = (state: AppState) => state,
) => selector(useLocalContext(AppContext));
export const useAppDispatch = () => useLocalContext(AppDispatchContext);
