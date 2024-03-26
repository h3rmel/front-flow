import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);


/**
 * Provides a theme for the application.
 * @param {ReactNode} children - The child components to be wrapped by the theme provider.
 * @param {Theme} defaultTheme - The default theme to be used if no theme is stored in local storage.
 * @param {string} storageKey - The key used to store the theme in local storage.
 * @param {any }props - Additional props to be passed to the underlying provider component.
 * @returns {JSX.Element} The theme provider component.
 */
export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Custom hook that provides access to the theme state within a ThemeProvider.
 * 
 * @returns {ThemeProviderState} The theme state from the nearest ThemeProvider.
 * @throws {Error} If used outside of a ThemeProvider.
 */
export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
