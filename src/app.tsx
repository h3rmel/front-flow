// #region Imports

import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages/router';

import { LanguageProvider } from '@/ui/components/language/language-provider';
import { ThemeProvider } from '@/ui/components/theme/theme-provider';
import { TooltipProvider } from '@/ui/components/ui/tooltip';

// #endregion

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
