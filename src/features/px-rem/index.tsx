// #region Imports

import { ArrowsHorizontal } from '@phosphor-icons/react';

import { PX_REM_CONVERSION } from '@/_data/px-rem';
import { PX_REM_LANGUAGES } from '@/_languages';

import { RootLayout } from '@/layouts/root-layout';

import { useLanguage } from '@/ui/components/language/language-provider';

import { CardForm } from './components/card-form';
import { InfoTable } from './components/info-table';

// #endregion

const FIRST_HALF = PX_REM_CONVERSION.slice(0, PX_REM_CONVERSION.length / 2);
const SECOND_HALF = PX_REM_CONVERSION.slice(PX_REM_CONVERSION.length / 2, PX_REM_CONVERSION.length);

export function PxRem() {
  const { translate } = useLanguage();

  return (
    <RootLayout>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        <h1 className="inline-flex items-center gap-2 text-2xl">
          PX <ArrowsHorizontal size={28} /> REM
        </h1>
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
