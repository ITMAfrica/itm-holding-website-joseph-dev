import type { Locale } from './i18n-config';
import { langType } from './types';
import en from '@/dictionaries/en.json';
import fr from '@/dictionaries/fr.json';
// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: langType = {
  en,
  fr,
};

export const getDictionary = (locale: Locale = 'en') =>
  dictionaries[locale as keyof langType] ?? dictionaries.en;
