import React, { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { type ViewProps } from 'react-native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { AppNavigation } from '@src/AppNavigation';
import { GenericError } from '@src/components/GenericError';
import { store } from '@src/state/app/store';

const AppEntryComponent: React.FC<ViewProps> = () => {
  return (
    <ErrorBoundary FallbackComponent={GenericError}>
      <Provider store={store}>
        <PaperProvider theme={MD3LightTheme}>
          <AppNavigation />
        </PaperProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export const AppEntry = memo(AppEntryComponent);
