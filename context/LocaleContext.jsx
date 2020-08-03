import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { isLocale, defaultLocale, getInitialLocale } from '../translations';

export const LocaleContext = createContext({});

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const { query } = useRouter();

  // if localstorage locale exists is taken from there
  useEffect(() => {
    setLocale(getInitialLocale());
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', getInitialLocale());
    }
  }, []);

  // get lang from current route on change
  useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
      localStorage.setItem('locale', query.lang);
    }
  }, [query.lang]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

LocaleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};
