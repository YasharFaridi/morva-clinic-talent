"use client";

import { useState } from "react";
import KidsSidebar from "./components/KidsSidebar";
import KidsHeader from "./components/KidsHeader";

export default function KidsDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" data-theme="morva-kids">
      {/* Sidebar */}
      <KidsSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* محتویات اصلی */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <KidsHeader onMobileMenuClick={() => setMobileOpen(true)} />

        {/* محتوای صفحه */}
        <div className="flex-1 overflow-y-auto bg-base-100 p-4">{children}</div>
      </div>
    </div>
  );
}
