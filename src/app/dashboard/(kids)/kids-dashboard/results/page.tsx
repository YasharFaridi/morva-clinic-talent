export default function KidsResultsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-primary mb-6">📊 نتایج تست‌ها</h1>

      <div className="card bg-base-200 shadow p-6">
        <p className="font-semibold">آخرین نتیجه تست:</p>

        <ul className="mt-3 space-y-2">
          <li>هوش منطقی: ۸۵٪</li>
          <li>خلاقیت: ۹۲٪</li>
          <li>دقت و تمرکز: ۷۸٪</li>
        </ul>
      </div>
    </div>
  );
}
