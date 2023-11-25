import { useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@src/state/app/hooks';
import {
  addFavouriteCountryAction,
  removeFavouriteCountryAction,
} from '@src/state/country/countrySlice';

export const useFavouriteCountry = (id: string) => {
  const dispatch = useAppDispatch();
  const { favouriteCountries } = useAppSelector(state => state.country);

  const setFavourite = useCallback(
    () => dispatch(addFavouriteCountryAction(id)),
    [dispatch, id],
  );

  const removeFavourite = useCallback(
    () => dispatch(removeFavouriteCountryAction(id)),
    [dispatch, id],
  );

  const isFavourite = useMemo(
    () => favouriteCountries.includes(id),
    [favouriteCountries, id],
  );

  return {
    isFavourite,
    setFavourite,
    removeFavourite,
  };
};
