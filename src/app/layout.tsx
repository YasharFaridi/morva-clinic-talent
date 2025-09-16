import type { Metadata } from "next";
import { vazir } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    <html  lang="fa" dir="rtl">
      <body className={`${vazir.variable} antialiased`}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
