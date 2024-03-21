// #region Imports

import { ReactNode } from 'react';

import { Footer, Navbar } from '@/ui/components/layout';

// #endregion

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Renders the root layout of the application.
 *
 * @param {RootLayoutProps} props - The props for the RootLayout component.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @return {JSX.Element} The rendered root layout.
 */
export function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="p-12">{children}</main>
      <Footer />
    </>
  );
}
