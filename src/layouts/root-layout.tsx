import { ReactNode } from "react";

import { Navbar } from "@/ui/components/layout/navbar";
import { Footer } from "@/ui/components/layout/footer";

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
