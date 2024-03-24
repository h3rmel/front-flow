// #region Imports

import { ColorConverterProvider } from '@/features/colors-converter';

import { RootLayout } from '@/layouts/root-layout';

// #endregion

export function ColorsConverterInterface(): JSX.Element {  
  return <RootLayout className="p-12">Conversor de cores</RootLayout>;
}

export function ColorsConverterPage(): JSX.Element {
  return (
    <ColorConverterProvider>
      <ColorsConverterInterface />
    </ColorConverterProvider>
  );
}
