// #region Imports

import { ArrowsHorizontal } from "@phosphor-icons/react";

import { RootLayout } from "@/layouts/root-layout";
import { useLanguage } from "@/ui/components/language/language-provider";

import { PX_REM_CONVERSION } from "@/_data/px-rem";
import { PX_REM_LANGUAGES } from "@/_languages";

import { InfoTable } from "./components/info-table";
import { CardForm } from "./components/card-form";

// #endregion

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
        <h2 className="text-2xl">
          {translate("conversion_table", PX_REM_LANGUAGES)}
        </h2>
        <div className="w-full flex items-center justify-around">
          <InfoTable
            tableContent={PX_REM_CONVERSION.slice(
              0,
              PX_REM_CONVERSION.length / 2
            )}
          />
          <InfoTable
            tableContent={PX_REM_CONVERSION.slice(
              PX_REM_CONVERSION.length / 2,
              PX_REM_CONVERSION.length
            )}
          />
        </div>
      </section>
    </RootLayout>
  );
}
