import React, { memo } from 'react';
import type { ViewProps } from 'react-native/types';

import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer } from '@react-navigation/native';
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
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </AsyncBoundary>
      </CacheProvider>
    </PortalProvider>
  );
};

export const AppEntry = memo(AppEntryComponent);
