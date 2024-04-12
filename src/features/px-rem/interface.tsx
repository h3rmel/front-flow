// Import(s)
import { ConversionTables } from './components/conversion-table';
import { PxRemForm } from './components/px-rem-form';

export function PxRemInterface(): JSX.Element {
  return (
    <main>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        {/* Title */}
        <h1 className="inline-flex items-center gap-2 text-2xl">PX / REM</h1>
        {/* PX <-> Rem form */}
        <PxRemForm />
        {/* Conversion Tables */}
        <ConversionTables />
      </section>
    </main>
  );
}
