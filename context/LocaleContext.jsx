import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isLocale } from '../translations';

export const LocaleContext = createContext({});

export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  // save on local store the current locale
  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  // get lang from current route
  useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
