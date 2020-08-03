import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LocaleContext } from '../context/LocaleContext';

const Layout = ({ children }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <Helmet>
        <html lang={locale} />
      </Helmet>

      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default Layout;
