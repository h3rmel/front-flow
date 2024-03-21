// #region Imports

import { NAVBAR_LANGUAGES } from '@/_languages';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button } from '@/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/ui/dropdown-menu';

// #endregion

/**
 * Renders a dropdown menu for selecting the language of the application.
 *
 * @return {JSX.Element} The rendered dropdown menu component.
 */
export function LanguageDropdown(): JSX.Element {
  const { language, setLanguage, translate } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setLanguage('pt-BR')}>
          {translate('portuguese', NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en-US')}>
          {translate('english', NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
