// #region Imports


import { ColorConverterProvider } from '@/features/colors-converter';

import { RootLayout } from '@/layouts/root-layout';

import { useLanguage } from '@/ui/components/language/language-provider';

import { COLORS_CONVERTER_LANGUAGES } from '@/_languages';

// #endregion

export function ColorsConverterInterface(): JSX.Element {  
  const { translate } = useLanguage();

  return <RootLayout className="p-12">
    <section className="relative container">
      <h1 className="text-2xl text-center">
        {translate('colors_converter', COLORS_CONVERTER_LANGUAGES)}
      </h1>
    </section>
  </RootLayout>;
}

export function ColorsConverterPage(): JSX.Element {
  return (
    <ColorConverterProvider>
      <ColorsConverterInterface />
    </ColorConverterProvider>
  );
}
