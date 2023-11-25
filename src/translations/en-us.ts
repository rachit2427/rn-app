export const EnglishTranslations = {
  global: {
    actions: {
      back: 'Back',
      clear: 'Clear',
    },
  },
  components: {
    genericError: {
      title: 'Whoops!',
      description: 'Something went wrong. :(',
      error: 'Error',
      retry: 'Retry',
    },
  },
  screens: {
    home: {
      input: {
        label: 'Find your next destination',
      },
      cta: {
        sort: 'Sort by',
        filter: 'Filter by',
      },
      sortOptions: {
        officialNameAsc: 'Official Name (A-Z)',
        officialNameDesc: 'Official Name (Z-A)',
        commonNameAsc: 'Common Name (A-Z)',
        commonNameDesc: 'Common Name (Z-A)',
        populationAsc: 'Population (Low to High)',
        populationDesc: 'Population (High to Low)',
      },
      alert: {
        shuffleWithSearch: {
          title: 'Whoops!',
          description:
            'You are trying to shuffle with a search term. Shuffling will clear the search term.\nDo you want to continue?',
          cta: {
            yes: 'Yes',
            no: 'No',
          },
        },
      },
      countryCard: {
        cta: 'Learn more',
      },
      emptyList: {
        title: 'Whoops!',
        description: "Looks like there's nothing to show at the moment! :(",
      },
    },
    countryDetail: {
      noCountry: "Whoops! Looks like we couldn't find that country. :(",
      mapDialog: {
        title: 'Whoops!',
        description: "We couldn't open the country's map link",
        cta: 'Close',
      },
      listItems: {
        capital: 'Capital',
        population: 'Population',
        languages: 'Languages',
        currencies: 'Currencies',
        timezones: 'Timezones',
      },
    },
  },
};
