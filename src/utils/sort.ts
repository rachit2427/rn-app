import type { Country, SortKey } from '@src/api/types';

type SortFn = (a: Country, b: Country) => number;

const sortMap: Partial<Record<SortKey, SortFn>> = {
  commonNameAsc: (a, b) => a.name.common.localeCompare(b.name.common),
  commonNameDesc: (a, b) => b.name.common.localeCompare(a.name.common),
  officialNameAsc: (a, b) => a.name.official.localeCompare(b.name.official),
  officialNameDesc: (a, b) => b.name.official.localeCompare(a.name.official),
  populationAsc: (a, b) => Number(a.population) - Number(b.population),
  populationDesc: (a, b) => Number(b.population) - Number(a.population),
};

const defaultSort: SortFn = (_a, _b) => 0;

export const getSortFunction = (key?: SortKey) =>
  key ? sortMap[key] || defaultSort : defaultSort;
