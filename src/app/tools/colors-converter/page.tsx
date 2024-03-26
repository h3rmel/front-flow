'use client';

// #region Imports

import { useLanguage } from '@/ui/components/language/language-provider';
import { ColorConverterProvider } from '@/ui/components/tools/colors-converter';

import { COLORS_CONVERTER_LANGUAGES } from '@/_languages';

// #endregion

export function ColorsConverterInterface(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <main className="p-12">
      <section className="relative container">
        <h1 className="text-2xl text-center">{translate('colors_converter', COLORS_CONVERTER_LANGUAGES)}</h1>
      </section>
    </main>
  );
}

export default function Page(): JSX.Element {
  return (
    <ColorConverterProvider>
      <ColorsConverterInterface />
    </ColorConverterProvider>
  );
}
