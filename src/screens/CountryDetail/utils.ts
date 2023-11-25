import type { Country } from '@src/api/types';
import { translations } from '@src/translations';

export const getListItems = (country: Country | undefined) =>
  [
    {
      icon: 'map-marker',
      title: translations.screens.countryDetail.listItems.capital,
      items: country?.capital || [],
    },
    {
      icon: 'account-group',
      title: translations.screens.countryDetail.listItems.population,
      items: [country?.population?.toLocaleString() || ''],
    },
    {
      icon: 'translate',
      title: translations.screens.countryDetail.listItems.languages,
      items: Object.values(country?.languages || {}),
    },
    {
      icon: 'cash-multiple',
      title: translations.screens.countryDetail.listItems.currencies,
      items: Object.values(country?.currencies || {}).map(
        currency => `${currency.name} (${currency.symbol})`,
      ),
    },
    {
      icon: 'map-clock',
      title: translations.screens.countryDetail.listItems.timezones,
      items: country?.timezones || [],
    },
  ].filter(item => item.items.filter(Boolean).length > 0);
