import { ReactNode } from "react";

import { Footer, Navbar } from "@/ui/components/layout";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="p-12">{children}</main>
      <Footer />
    </>
  );
}
