// #region Imports

import { RouterProvider } from "react-router-dom";

import { router } from "@/pages/router";
import { ThemeProvider } from "@/ui/components/theme/theme-provider";
import { LanguageProvider } from "@/ui/components/language/language-provider";

// #endregion

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
