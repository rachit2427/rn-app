import type React from 'react';
import { memo } from 'react';

export interface CountryDetailProps {
  name: string;
  cca2: string;
}

const CountryDetailComponent: React.FC = ({}) => {
  return null;
};

export const CountryDetail = memo(CountryDetailComponent);
