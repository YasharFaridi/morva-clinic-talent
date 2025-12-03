"use client";

import { MdMenu } from "react-icons/md";

export default function KidsHeader({
  onMobileMenuClick,
}: {
  onMobileMenuClick: () => void;
}) {
  return (
    <div className="bg-base-300 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🎈 داشبورد کودک</h1>

      <div className="flex items-center gap-2">
        {/* دکمه موبایل */}
        <button
          className="md:hidden btn btn-ghost p-2"
          onClick={onMobileMenuClick}
        >
          <MdMenu size={28} />
        </button>

        {/* دکمه خروج دسکتاپ */}
        <button className="hidden md:block btn btn-secondary">خروج</button>
      </div>
    </div>
  );
}
