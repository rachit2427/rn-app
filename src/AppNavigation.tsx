import React, { memo } from 'react';

import { useSuspense } from '@rest-hooks/react';

import { CountryResource } from '@src/api/countries';
import { GenericError } from '@src/components/GenericError';

interface AppNavigationProps {}

const AppNavigationComponent: React.FC<AppNavigationProps> = ({}) => {
  const countries = useSuspense(CountryResource.getList);

  console.log(countries);

  return <GenericError />;
};

export const AppNavigation = memo(AppNavigationComponent);
