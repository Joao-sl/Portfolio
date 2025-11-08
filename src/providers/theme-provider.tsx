import { useEffect, useMemo, useState } from 'react';
import { ThemeProviderContext, type Theme } from '../contexts/theme-context';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  animation?: boolean;
};

function ThemeProvider({
  children,
  storageKey = 'theme',
  defaultTheme = 'system',
  animation = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(() => {
    return (localStorage.getItem(storageKey) as Theme) ?? defaultTheme;
  });

  if (animation) {
    document.body.classList.add('transition-colors', 'duration-200');
  }

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      html.classList.add(systemTheme);
      return;
    }

    html.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      },
    }),
    [theme, storageKey],
  );

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export { ThemeProvider };
