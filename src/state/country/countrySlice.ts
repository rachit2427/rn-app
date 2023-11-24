import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Country } from '@src/api/types';

export interface CountryState {
  searchQuery: string;
  countryMap: Record<string, Country>;
}

const initialState: CountryState = {
  searchQuery: '',
  countryMap: {},
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
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQueryAction, setCountryMapAction } =
  countrySlice.actions;

export const countryReducer = countrySlice.reducer;
