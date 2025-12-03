export default function KidsServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-primary mb-4">🧩 خدمات کودک</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card bg-base-200 p-4 shadow">
          <h3 className="font-bold">کارگاه خلاقیت</h3>
        </div>
        <div className="card bg-base-200 p-4 shadow">
          <h3 className="font-bold">دوره شخصیت‌شناسی کودک</h3>
        </div>
      </div>
    </div>
  );
}
