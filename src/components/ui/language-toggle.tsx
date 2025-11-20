import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('lang');
    if (stored) return stored;

    const browserLang = navigator.language?.split('-')[0];
    return browserLang === 'pt' ? 'pt-BR' : 'en-US';
  });

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [i18n, lang]);

  return (
    <select
      id='lang-toggle'
      onChange={e => setLang(e.target.value)}
      defaultValue={lang}
      aria-label={t('language-toggle.toggle-aria-label')}
      className='rounded-md  *:font-bold dark:*:text-background focus:border-0'
    >
      <option value='pt-BR' aria-label={t('language-toggle.pt-br')}>
        PT
      </option>
      <option value='en-US' aria-label={t('language-toggle.en-us')}>
        EN
      </option>
    </select>
  );
}

export { LanguageToggle };
