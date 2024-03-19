// #region Imports

import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "@/pages/router";
import { ThemeProvider } from "@/ui/components/theme/theme-provider";
import { initUserLanguage } from "@/lib/translate";

// #endregion

export function App() {
  useEffect(() => {
    initUserLanguage();
  }, []);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
