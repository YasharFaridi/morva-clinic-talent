import type { Metadata } from "next";
import { vazir } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "مروا - مدیریت رشد و استعداد",
  description: "مروا وب سایت استعدادیابی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazir.variable} antialiased`}>{children}</body>
    </html>
  );
}
