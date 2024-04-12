// #region Imports

import { Metadata } from 'next';

import { PxRemForm, ConversionTable } from '@/features/px-rem';

// #endregion

export const metadata: Metadata = {
  title: 'PX/REM',
};

/**
 * Function to render the PX to REM page content.
 *
 * @return {JSX.Element} The content of the PX to REM page.
 */
export default function Page(): JSX.Element {
  return (
    <main>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        {/* Title */}
        <h1 className="inline-flex items-center gap-2 text-2xl">PX / REM</h1>
        {/* PX <-> Rem form */}
        <PxRemForm />
        {/* Conversion Tables */}
        <ConversionTable />
      </section>
    </main>
  );
}
