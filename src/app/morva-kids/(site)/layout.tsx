import KidsHeader from "../components/KidsHeader";

export default function MorvaKidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="morva-kids">
      <KidsHeader />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
