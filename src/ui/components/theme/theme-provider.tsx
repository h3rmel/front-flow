'use client';

// #region Import(s)

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

// #endregion

/**
 * Provides the theme for the application.
 *
 * @param {ReactNode} children - The child components to be wrapped by the theme provider.
 * @param {...ThemeProviderProps} props - Additional props to be passed to the underlying NextThemesProvider component.
 * @returns {JSX.Element} The rendered NextThemesProvider component with the provided children.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps): JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
