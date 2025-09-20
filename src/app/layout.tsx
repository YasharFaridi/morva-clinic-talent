import type { Metadata } from "next";
import { vazir } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "مروا",
  description: "مروا وب سایت...",
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