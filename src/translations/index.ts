import { EnglishTranslations } from '@src/translations/en-us';

type supportedLocales = 'en-US';

const translationMap: Record<supportedLocales, typeof EnglishTranslations> = {
  'en-US': EnglishTranslations,
};

const defaultLocale: supportedLocales = 'en-US';
const appLocale: supportedLocales = 'en-US';

export const translations: typeof EnglishTranslations = {
  ...translationMap[defaultLocale],
  ...translationMap[appLocale],
};
