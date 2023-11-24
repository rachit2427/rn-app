import type { Country } from '@src/api/types';

export const getListItems = (country: Country | undefined) => [
  {
    icon: 'map-marker',
    title: 'Capital',
    items: country?.capital || [],
  },
  {
    icon: 'account-group',
    title: 'Population',
    items: [country?.population?.toLocaleString() || ''],
  },
  {
    icon: 'translate',
    title: 'Languages',
    items: Object.values(country?.languages || {}),
  },
  {
    icon: 'cash-multiple',
    title: 'Currencies',
    items: Object.values(country?.currencies || {}).map(
      currency => `${currency.name} (${currency.symbol})`,
    ),
  },
  {
    icon: 'map-clock',
    title: 'Timezones',
    items: country?.timezones || [],
  },
];
