'use client';

// #region Imports

import Link from 'next/link';

import { GithubLogo } from '@phosphor-icons/react';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button } from '@/ui/components/ui/button';

import { FOOTER_LANGUAGES } from '../languages';

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
          <Link href="https://github.com/k4mome" target="_blank" className="text-kamome-green-500 hover:underline">
            Kamome.{' '}
          </Link>
          {translate('all_rights_reserved', FOOTER_LANGUAGES)}
        </p>
        <p>
          <Link href="https://github.com/k4mome/front-flow" target="_blank">
            <Button variant="ghost" size="icon">
              <GithubLogo size={22} />
            </Button>
          </Link>
        </p>
      </section>
    </footer>
  );
}
