'use client';

// #region Imports

import { useLanguage } from '@/ui/components/language/language-provider';

import { COLORS_CONVERTER_LANGUAGES } from '@/_languages';

import { ColorsForm } from './components';
import { ColorConverterProvider } from './hooks';

// #endregion

// TODO: Work on a way to export metadata. (remove the use client from the top.)
// export const metadata: Metadata = {}

function ColorsConverterInterface(): JSX.Element {
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

export default function Page(): JSX.Element {
  return (
    <ColorConverterProvider>
      <ColorsConverterInterface />
    </ColorConverterProvider>
  );
}
