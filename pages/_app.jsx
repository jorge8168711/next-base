/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/index.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { LocaleProvider } from '../context/LocaleContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <LocaleProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </LocaleProvider>
  );
}

export default MyApp;
