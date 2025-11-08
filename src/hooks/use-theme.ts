import { useContext } from 'react';
import { ThemeProviderContext } from '../contexts/theme-context';

function useTheme() {
  const context = useContext(ThemeProviderContext);

  return context;
}

export { useTheme };
