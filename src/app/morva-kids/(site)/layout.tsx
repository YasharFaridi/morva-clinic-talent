"use client";

import { usePathname } from "next/navigation";
import KidsHeader from "../components/KidsHeader";

export default function MorvaKidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeader = pathname?.startsWith("/morva-kids/tests");

  return (
    <div data-theme="morva-kids">
      {!hideHeader && <KidsHeader />}
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
