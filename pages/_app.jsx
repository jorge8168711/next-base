import React, { useState, useEffect } from 'react';
import '../styles/index.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { LocaleProvider } from '../context/LocaleContext';
import { getInitialLocale, defaultLocale } from '../translations';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  return (
    <LocaleProvider lang={locale}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </LocaleProvider>
  );
}

export default MyApp;
