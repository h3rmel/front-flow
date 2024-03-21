// #region Imports

import { Link } from 'react-router-dom';

import { FOOTER_LANGUAGES } from '@/_languages';

import { useLanguage } from '@/ui/components/language/language-provider';

// #endregion

/**
 * Renders the Footer component with information about the developer.
 *
 * @return {JSX.Element} The rendered Footer component
 */
export function Footer(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <footer className="w-full p-4 border-t bg-background text-foreground">
      <section className="container flex items-center justify-between">
        <p>
          {translate('developed_by', FOOTER_LANGUAGES)}{' '}
          <Link to="https://github.com/K4mome" target="_blank" className="hover:underline">
            Kamome.
          </Link>
        </p>
      </section>
    </footer>
  );
}
