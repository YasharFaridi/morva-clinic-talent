export default function KidsSettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-primary mb-6">⚙️ تنظیمات</h1>

      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">اعلان‌ها</span>
        </label>
        <input type="checkbox" className="toggle toggle-primary" />
      </div>
    </div>
  );
}
