import type React from 'react';
import { memo } from 'react';

import { useSuspense } from '@rest-hooks/react';

import { CountryResource } from '@src/api/countries';

interface AppNavigationProps {}

const AppNavigationComponent: React.FC<AppNavigationProps> = ({}) => {
  const countries = useSuspense(CountryResource.getList);

  console.log(countries);

  return null;
};

export const AppNavigation = memo(AppNavigationComponent);
