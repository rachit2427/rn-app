import React, { memo } from 'react';
import { type ViewProps } from 'react-native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

import { AsyncBoundary, CacheProvider } from '@rest-hooks/react';

import { AppNavigation } from '@src/AppNavigation';
import { FullScreenLoader } from '@src/components/FullScreenLoader';
import { GenericError } from '@src/components/GenericError';
import { AppContextProvider } from '@src/state/app';

const AppEntryComponent: React.FC<ViewProps> = () => {
  return (
    <AppContextProvider>
      <PaperProvider theme={MD3LightTheme}>
        <CacheProvider>
          <AsyncBoundary
            fallback={<FullScreenLoader />}
            errorComponent={GenericError}
          >
            <AppNavigation />
          </AsyncBoundary>
        </CacheProvider>
      </PaperProvider>
    </AppContextProvider>
  );
};

export const AppEntry = memo(AppEntryComponent);
