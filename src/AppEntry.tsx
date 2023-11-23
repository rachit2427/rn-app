import React, { memo } from 'react';
import type { ViewProps } from 'react-native/types';

import { AsyncBoundary, CacheProvider } from '@rest-hooks/react';

import { AppNavigation } from '@src/AppNavigation';

const AppEntryComponent: React.FC<ViewProps> = () => {
  return (
    <CacheProvider>
      <AsyncBoundary fallback={<></>} errorComponent={() => <></>}>
        <AppNavigation />
      </AsyncBoundary>
    </CacheProvider>
  );
};

export const AppEntry = memo(AppEntryComponent);
