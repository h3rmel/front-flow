// #region Imports

import { ArrowsHorizontal } from '@phosphor-icons/react';

import { CardForm, FIRST_HALF, InfoTable, SECOND_HALF } from '@/features/px-rem';

import { RootLayout } from '@/layouts/root-layout';

import { useLanguage } from '@/ui/components/language/language-provider';

import { PX_REM_LANGUAGES } from '@/_languages';

// #endregion

/**
 * Function to render the PX to REM page content.
 *
 * @return {JSX.Element} The content of the PX to REM page.
 */
export function PxRemPage(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <RootLayout>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        {/* Header */}
        <h1 className="inline-flex items-center gap-2 text-2xl">
          PX <ArrowsHorizontal size={28} /> REM
        </h1>
        {/* PX <-> Rem form */}
        <CardForm />
        {/* Conversion Tables */}
        <h2 className="text-2xl">{translate('conversion_table', PX_REM_LANGUAGES)}</h2>
        <div className="w-full flex items-center justify-around">
          <InfoTable tableContent={FIRST_HALF} />
          <InfoTable tableContent={SECOND_HALF} />
        </div>
      </section>
    </RootLayout>
  );
}
