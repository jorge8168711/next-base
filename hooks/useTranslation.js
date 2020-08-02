import { useContext } from 'react';
import { strings, defaultLocale } from '../translations';
import { LocaleContext } from '../context/LocaleContext';

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function translate(key) {
    if (!strings[locale][key]) {
      // eslint-disable-next-line no-console
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || '';
  }

  return { translate, locale };
}
