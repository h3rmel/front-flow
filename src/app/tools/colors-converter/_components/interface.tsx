'use client';

// #region Import(s)

import { useLanguage } from '@/ui/components/language/language-provider';

import { COLORS_CONVERTER_LANGUAGES } from '../_languages/colors-converter.lng';
import { ColorsForm } from './colors-form';

// #endregion

export function ColorsConverterInterface(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <main>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        {/* Title */}
        <h1 className="text-2xl text-center">{translate('colors_converter', COLORS_CONVERTER_LANGUAGES)}</h1>
        {/* Colors Form */}
        <ColorsForm />
      </section>
    </main>
  );
}
