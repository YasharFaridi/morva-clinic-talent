"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  MdHome,
  MdQuiz,
  MdBarChart,
  MdSmartToy,
  MdPayments,
  MdHomeRepairService,
  MdPerson,
  MdSettings,
  MdClose,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

const links = [
  {
    name: "خانه",
    href: "/dashboard/kids-dashboard",
    icon: <MdHome size={24} />,
  },
  {
    name: "تست‌ها",
    href: "/dashboard/kids-dashboard/tests",
    icon: <MdQuiz size={24} />,
  },
  {
    name: "نتایج",
    href: "/dashboard/kids-dashboard/results",
    icon: <MdBarChart size={24} />,
  },
  {
    name: "چت‌بات",
    href: "/dashboard/kids-dashboard/chatbot",
    icon: <MdSmartToy size={24} />,
  },
  {
    name: "مدیریت مالی",
    href: "/dashboard/kids-dashboard/finance",
    icon: <MdPayments size={24} />,
  },
  {
    name: "خدمات",
    href: "/dashboard/kids-dashboard/services",
    icon: <MdHomeRepairService size={24} />,
  },
  {
    name: "پروفایل",
    href: "/dashboard/kids-dashboard/profile",
    icon: <MdPerson size={24} />,
  },
  {
    name: "تنظیمات",
    href: "/dashboard/kids-dashboard/settings",
    icon: <MdSettings size={24} />,
  },
];

export default function KidsSidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // بررسی سایز صفحه برای تبلت
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize(); // بار اول
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay موبایل */}
      {mobileOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/5 z-[50]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          background: `linear-gradient(135deg, var(--color-base-100), var(--color-base-200), var(--color-base-300), var(--color-accent))`,
        }}
        className={`
          fixed md:static z-[55] h-screen overflow-y-auto border-r border-base-300
          flex flex-col transition-all duration-300 ease-in-out shadow-xl
          ${collapsed || isTablet ? "w-20" : "w-64"}
          ${mobileOpen ? "left-0" : "-left-64 md:left-0"}
          rounded-r-3xl md:rounded-r-none
        `}
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && !isTablet && (
            <h2 className="font-extrabold text-xl text-[var(--color-base-content)] drop-shadow">
              🌈 داشبورد من
            </h2>
          )}

          {/* دکمه بسته شدن موبایل */}
          <button className="md:hidden" onClick={() => setMobileOpen(false)}>
            <MdClose size={26} className="text-primary" />
          </button>

          {/* دکمه collapse دسکتاپ */}
          {/* <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:block p-2 rounded-xl hover:bg-base-300 transition "
          >
            {collapsed ? (
              <MdChevronRight size={22} className="text-primary" />
            ) : (
              <MdChevronLeft size={22} className="text-primary" />
            )}
          </button> */}
        </div>

        {/* لینک‌ها */}
        <div className="flex flex-col p-3 gap-2 mt-2">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <div
                key={link.href}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-2xl transition-all
                  shadow-sm hover:shadow-md cursor-pointer
                  ${
                    active
                      ? "bg-primary/80 text-primary-content"
                      : "bg-base-100/60 hover:bg-base-100 text-base-content"
                  }
                `}
                onClick={() => {
                  // اگر موبایل هست، Sidebar بسته شود
                  if (mobileOpen) setMobileOpen(false);

                  // استفاده از replace تا تاریخچه زیاد نشود
                  router.replace(link.href);
                }}
              >
                <span>{link.icon}</span>
                {!collapsed && !isTablet && (
                  <span className="font-bold text-lg">{link.name}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
