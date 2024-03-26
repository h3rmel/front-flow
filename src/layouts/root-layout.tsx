// #region Imports

import { HTMLAttributes, ReactNode } from 'react';

import { Footer, Navbar } from '@/ui/components/layout';

// #endregion

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Renders the root layout of the application.
 *
 * @param {RootLayoutProps} props - The props for the RootLayout component.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @return {JSX.Element} The rendered root layout.
 */
export function RootLayout({ children, ...rest }: RootLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <main {...rest}>{children}</main>
      <Footer />
    </>
  );
}
