export default function KidsTestsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-primary mb-6">🎯 تست‌های کودک</h1>

      <div className="space-y-4">
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title text-primary">تست هوش منطقی</h3>
            <p>این تست برای تقویت استدلال و تفکر منطقی طراحی شده.</p>
            <button className="btn btn-primary mt-2">شروع</button>
          </div>
        </div>

        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title text-secondary">تست خلاقیت</h3>
            <p>سطح خلق ایده، تصویرسازی ذهنی و ابتکار را می‌سنجد.</p>
            <button className="btn btn-secondary mt-2">شروع</button>
          </div>
        </div>
      </div>
    </div>
  );
}