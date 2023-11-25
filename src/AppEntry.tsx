import React, { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { type ViewProps } from 'react-native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { AppNavigation } from '@src/AppNavigation';
import { GenericError } from '@src/components/GenericError';
import { FullScreenLoader } from '@src/components/Loader';
import { persistor, store } from '@src/state/app/store';

const AppEntryComponent: React.FC<ViewProps> = () => {
  return (
    <ErrorBoundary FallbackComponent={GenericError}>
      <Provider store={store}>
        <PaperProvider theme={MD3LightTheme}>
          <PersistGate loading={<FullScreenLoader />} persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </PaperProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export const AppEntry = memo(AppEntryComponent);
