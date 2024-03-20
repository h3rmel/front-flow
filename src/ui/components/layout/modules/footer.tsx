// #region Imports

import { Link } from "react-router-dom";

import { FOOTER_LANGUAGES } from "@/languages";
import { useLanguage } from "@/ui/components/language/language-provider";

// #endregion

export function Footer() {
  const { translate } = useLanguage();

  return (
    <footer className="w-full p-4 border-t bg-background text-foreground">
      <section className="container flex items-center justify-between">
        <p>
          {translate("developed_by", FOOTER_LANGUAGES)}{" "}
          <Link
            to="https://github.com/K4mome"
            target="_blank"
            className="hover:underline"
          >
            Kamome.
          </Link>
        </p>
      </section>
    </footer>
  );
}
