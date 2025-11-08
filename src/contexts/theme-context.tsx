import { createContext } from 'react';

type Theme = 'system' | 'dark' | 'light';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'system',
  setTheme: () => null,
});

export { ThemeProviderContext };
export type { Theme };
