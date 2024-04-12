// #region Import(s)

import { ReactNode } from 'react';

import { Metadata } from 'next';

import { LanguageProvider } from '@/ui/components/language/language-provider';
import { Footer, Navbar } from '@/ui/components/layout';
import { ThemeProvider } from '@/ui/components/theme/theme-provider';
import { ibm_plex_mono, sora } from '@/ui/fonts';

import '@/ui/globals.css';

// #endregion

export const metadata: Metadata = {
  title: {
    template: '%s | FrontFlow',
    default: 'FrontFlow',
  },
  description:
    'The set of front-end tools that aims to help developers create interfaces with more ease and simplicity in their daily lives.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${sora.variable} ${ibm_plex_mono.variable} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
