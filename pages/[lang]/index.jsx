import React from 'react';
import Head from 'next/head';
import useTranslation from '../../hooks/useTranslation';
import LangSelector from '../../components/LangSelector';

const IndexPage = () => {
  const { translate, locale } = useTranslation();
  const translations = translate('home');

  return (
    <>
      <Head>
        <title>{translations && translations.title}</title>
        <meta
          name='description'
          content={translations && translations.title}
        />
      </Head>

      <LangSelector />

      <p>{translations && translations.title}</p>
      <p>{translations && translations.description}</p>
    </>
  );
};

export default IndexPage;
