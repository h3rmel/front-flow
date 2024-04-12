// #region Import(s)

import { Metadata } from 'next';

import { ColorConverterProvider, ColorsConverterInterface } from '@/features/colors-converter';

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
