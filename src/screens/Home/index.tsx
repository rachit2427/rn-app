import React, { memo } from 'react';

import { useSuspense } from '@rest-hooks/react';

import { CountryResource } from '@src/api/countries';
import { GenericError } from '@src/components/GenericError';

const HomeComponent: React.FC = () => {
  const countries = useSuspense(CountryResource.getList);

  return <GenericError />;
};

export const Home = memo(HomeComponent);
