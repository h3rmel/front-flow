// #region Imports

import { Moon, Sun } from '@phosphor-icons/react';

import { NAVBAR_LANGUAGES } from '@/_languages';

import { useTheme } from '@/ui/components/theme/theme-provider';
import { Button } from '@/ui/components/ui/button';
import { useLanguage } from '@/ui/components/language/language-provider';

// #endregion

/**
 * Generate the Theme Dropdown component for selecting different themes.
 *
 * @return {JSX.Element} The Theme Dropdown component
 */
export function ThemeToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();
  const { translate } = useLanguage();

  function handleToggleTheme() {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  }

  return (
    <Button size="icon" variant="outline" onClick={handleToggleTheme}>
      {theme === 'light' && (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      {theme === 'dark' && (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">{translate('toggle-theme', NAVBAR_LANGUAGES)}</span>
    </Button>
  );
}
