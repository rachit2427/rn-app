import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Country, Filter, SortKey } from '@src/api/types';

export interface CountryState {
  searchQuery: string;
  countryMap: Record<string, Country>;
  regionSubregionMap: Record<string, string[]>;
  filter: Filter;
  sortKey?: SortKey;
}

const initialState: CountryState = {
  searchQuery: '',
  countryMap: {},
  regionSubregionMap: {},
  filter: {},
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSearchQueryAction: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCountryMapAction: (
      state,
      action: PayloadAction<Record<string, Country>>,
    ) => {
      state.countryMap = action.payload;
    },
    setRegionSubregionMapAction: (
      state,
      action: PayloadAction<Record<string, string[]>>,
    ) => {
      state.regionSubregionMap = action.payload;
    },
    setFilterAction: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    setSortKeyAction: (state, action: PayloadAction<SortKey | undefined>) => {
      state.sortKey = action.payload;
    },
  },
});

export const {
  setSearchQueryAction,
  setCountryMapAction,
  setRegionSubregionMapAction,
  setFilterAction,
  setSortKeyAction,
} = countrySlice.actions;

export const countryReducer = countrySlice.reducer;
