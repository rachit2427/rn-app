import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CountryState {
  searchQuery: string;
}

const initialState: CountryState = {
  searchQuery: '',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSearchQueryAction: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQueryAction } = countrySlice.actions;

export const countryReducer = countrySlice.reducer;
