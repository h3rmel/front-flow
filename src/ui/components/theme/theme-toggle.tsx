'use client';

// #region Imports

import { useTheme } from 'next-themes';

// import { Moon, Sun } from 'lucide-react';
import { Moon, Sun } from '@phosphor-icons/react';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button } from '@/ui/components/ui/button';

import { NAVBAR_LANGUAGES } from '../layout/languages';

// #endregion

/**
 * Renders a theme toggle button that allows the user to switch between light and dark themes.
 *
 * @return {JSX.Element} The rendered theme toggle button.
 */
export function ThemeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const { translate } = useLanguage();

  function handleToggleTheme() {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  }

  return (
    <Button variant="outline" size="icon" onClick={handleToggleTheme}>
      {theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">{translate('toggle_theme', NAVBAR_LANGUAGES)}</span>
    </Button>
  );
}
