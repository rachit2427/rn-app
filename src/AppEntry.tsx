import React, { memo } from 'react';
import type { ViewProps } from 'react-native/types';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

import { PortalProvider } from '@gorhom/portal';
import { AsyncBoundary, CacheProvider } from '@rest-hooks/react';

import { AppNavigation } from '@src/AppNavigation';
import { FullScreenLoader } from '@src/components/FullScreenLoader';
import { GenericError } from '@src/components/GenericError';

const AppEntryComponent: React.FC<ViewProps> = () => {
  return (
    <PortalProvider>
      <CacheProvider>
        <AsyncBoundary
          fallback={<FullScreenLoader />}
          errorComponent={GenericError}
        >
          <PaperProvider theme={MD3LightTheme}>
            <AppNavigation />
          </PaperProvider>
        </AsyncBoundary>
      </CacheProvider>
    </PortalProvider>
  );
};

export const AppEntry = memo(AppEntryComponent);
