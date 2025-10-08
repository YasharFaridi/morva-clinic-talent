import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function MorvaKidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="morva-kids">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
