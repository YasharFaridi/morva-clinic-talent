"use client";

import { FaStar, FaChild, FaPuzzlePiece, FaChartLine } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";

export default function KidsDashboardHome() {
  return (
    <div className="w-full p-4 md:p-8">

      {/* --- TOP BANNER --- */}
      <section
        className="w-full rounded-3xl p-6 md:p-10 shadow-xl text-center mb-10"
        style={{
          background: `
            linear-gradient(
              135deg,
              var(--color-base-100),
              var(--color-base-200),
              var(--color-base-300),
              var(--color-accent)
            )
          `,
        }}
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-[var(--color-base-content)] drop-shadow-xl">
          🎉 خوش اومدی به دنیای جادویی استعدادها!
        </h1>

        <p className="mt-4 text-base md:text-lg font-medium text-[var(--color-base-content)]">
          اینجا همه چیز آماده‌ست تا استعدادتو کشف کنیم و بهتر بشناسیم ✨  
        </p>
      </section>

      {/* --- ROW OF 3 CHILD CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-base-300">
          <FaPuzzlePiece className="text-primary text-4xl mb-3" />
          <h3 className="text-xl font-bold">شروع تست‌های شخصیت</h3>
          <p className="text-sm mt-2">
            تست‌های سرگرم‌کننده که به ما کمک می‌کنه استعدادتو پیدا کنیم.
          </p>

          <button className="btn btn-primary mt-4 rounded-full w-full flex items-center gap-2">
            <MdPlayArrow size={20} />
            شروع کن
          </button>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-base-300">
          <FaStar className="text-secondary text-4xl mb-3" />
          <h3 className="text-xl font-bold">نتایج و گزارش‌ها</h3>
          <p className="text-sm mt-2">
            می‌تونی ببینی کدوم مهارت‌ها قوی‌تر هستن و چطور رشد می‌کنی.
          </p>

          <button className="btn btn-secondary mt-4 rounded-full w-full flex items-center gap-2">
            <MdPlayArrow size={20} />
            مشاهده نتایج
          </button>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-base-300">
          <FaChild className="text-warning text-4xl mb-3" />
          <h3 className="text-xl font-bold">پروفایل تو</h3>
          <p className="text-sm mt-2">
            اطلاعات و امتیازاتت اینجاست، همینطور علاقه‌مندی‌هات 🎈
          </p>

          <button className="btn btn-warning mt-4 rounded-full w-full flex items-center gap-2 text-black">
            <MdPlayArrow size={20} />
            دیدن پروفایل
          </button>
        </div>
      </div>

      {/* --- SECTION: RECOMMENDED TESTS --- */}
      <section className="bg-base-100 p-6 rounded-3xl shadow-md border border-base-300 mb-10">
        <h2 className="text-xl font-bold mb-4 text-[var(--color-base-content)]">
          🧠 تست‌های پیشنهادی برای امروز
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "تست خلاقیت",
            "تست هوش تصویری",
            "تست مهارت‌های حرکتی",
          ].map((title, index) => (
            <div
              key={index}
              className="p-4 bg-base-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold">{title}</p>
              <button className="btn btn-primary btn-sm mt-3 w-full rounded-full">
                شروع
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROGRESS SECTION --- */}
      <section className="bg-base-100 p-6 rounded-3xl shadow-md border border-base-300">
        <h2 className="text-xl font-bold mb-4 text-[var(--color-base-content)]">
          📊 پیشرفت کلی
        </h2>

        <div className="flex flex-col md:flex-row gap-6">

          <div className="flex-1 bg-base-200 p-5 rounded-2xl text-center">
            <FaChartLine className="text-primary text-4xl mx-auto mb-2" />
            <p className="font-bold text-lg">۶۵٪ پیشرفت</p>
            <p className="text-sm mt-1">این یعنی خیلی عالی پیش می‌ری! 🌟</p>
          </div>

          <div className="flex-1 bg-base-200 p-5 rounded-2xl text-center">
            <FaStar className="text-secondary text-4xl mx-auto mb-2" />
            <p className="font-bold text-lg">۱۲ امتیاز جدید</p>
            <p className="text-sm mt-1">با همین قدرت ادامه بده! 🚀</p>
          </div>

        </div>
      </section>

    </div>
  );
}
