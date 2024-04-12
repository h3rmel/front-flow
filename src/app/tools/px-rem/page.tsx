'use client';

// #region Imports

import { ArrowsHorizontal } from '@phosphor-icons/react';

import { PxRemForm, InfoTable, PX_REM_CONVERSION, PX_REM_LANGUAGES } from '@/features/px-rem';

import { useLanguage } from '@/ui/components/language/language-provider';

// #endregion

const FIRST_HALF = PX_REM_CONVERSION.slice(0, PX_REM_CONVERSION.length / 2);
const SECOND_HALF = PX_REM_CONVERSION.slice(PX_REM_CONVERSION.length / 2, PX_REM_CONVERSION.length);

// TODO: Work on a way to export metadata. (remove the use client from the top.)
// export const metadata: Metadata = {}

/**
 * Function to render the PX to REM page content.
 *
 * @return {JSX.Element} The content of the PX to REM page.
 */
export default function Page(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <main>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        {/* Title */}
        <h1 className="inline-flex items-center gap-2 text-2xl">
          PX <ArrowsHorizontal size={28} /> REM
        </h1>
        {/* PX <-> Rem form */}
        <PxRemForm />
        {/* Conversion Tables */}
        <h2 className="text-2xl">{translate('conversion_table', PX_REM_LANGUAGES)}</h2>
        <div className="w-full flex items-center justify-around">
          <InfoTable tableContent={FIRST_HALF} />
          <InfoTable tableContent={SECOND_HALF} />
        </div>
      </section>
    </main>
  );
}
