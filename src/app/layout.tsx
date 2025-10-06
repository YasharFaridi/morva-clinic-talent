import type { Metadata } from "next";
import { vazir } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "مروا | مدیریت و رشد استعداد",
  description: "سایت استعدیابی مروا مدیریت و رشد استعداد",
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}