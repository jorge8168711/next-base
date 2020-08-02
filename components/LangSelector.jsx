import React, { useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';

const regex = new RegExp(`^/(${locales.join('|')})`);
const LangSelector = () => {
  const router = useRouter();
  const { locale } = useContext(LocaleContext);

  const handleLocaleChange = useCallback(
    (e) => router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`)),
    [router],
  );

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}>
      {locales.map((item) => (
        <option value={item} key={item}>
          {languageNames[item]}
        </option>
      ))}
    </select>

  );
};

export default LangSelector;
