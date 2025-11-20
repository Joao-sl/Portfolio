import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/use-theme';
import { IconMoon, IconSun } from '@tabler/icons-react';

function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';
  const nextTheme = isDarkMode
    ? t('theme-toggle.light-theme')
    : t('theme-toggle.dark-theme');

  return (
    <button
      aria-label={clsx(t('theme-toggle.button-aria-label'), t(nextTheme))}
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
}

export { ThemeToggle };
