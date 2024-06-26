// #region Import(s)

import { Metadata } from 'next';

import { ColorsConverterInterface } from './_components/interface';
import { ColorConverterProvider } from './_hooks/color-converter-hook';

// #endregion

export const metadata: Metadata = {
  title: 'Colors Converter',
};

export default function Page(): JSX.Element {
  return (
    <ColorConverterProvider>
      <ColorsConverterInterface />
    </ColorConverterProvider>
  );
}
