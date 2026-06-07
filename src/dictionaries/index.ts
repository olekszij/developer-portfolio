import en from './en.json';
import fr from './fr.json';

const dictionaries = {
  en,
  fr,
};

export const getDictionary = (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
};
