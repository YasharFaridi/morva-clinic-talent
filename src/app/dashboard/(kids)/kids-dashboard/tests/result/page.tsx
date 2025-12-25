"use client";

import { useEffect, useState } from "react";

type Result = {
  group_scores: Record<string, number>;
  total_score: number;
  interpretations: Record<string, string>;
  test_result_id?: number;
};

export default function TestResultPage() {
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("last_test_result");
      if (raw) {
        setResult(JSON.parse(raw));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (!result) {
    return (
      <div className="p-6">
        <div className="alert alert-info">نتیجه‌ای برای نمایش موجود نیست.</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-3">

        {/* Summary card */}
        <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-center">خلاصه تست</h2>
          <div className="mt-6 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-white/20 flex items-center justify-center shadow-md">
                <div className="text-center">
                  <div className="text-sm opacity-80">امتیاز کل</div>
                  <div className="text-4xl font-extrabold mt-2">{result.total_score}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-sm opacity-80">شناسه نتیجه</div>
              <div className="text-lg font-medium">{result.test_result_id ?? '-'}</div>
              
            </div>
          </div>
        </div>

        {/* Group scores visual */}
        <div className="col-span-2 bg-base-200 rounded-2xl p-6 shadow-inner">
          <h3 className="text-lg font-semibold mb-4">امتیازهای دسته‌ای</h3>

          <div className="space-y-4">
            {Object.entries(result.group_scores).map(([group, score]) => {
              const pct = Math.max(0, Math.min(100, Math.round((score / 30) * 100)));
              const interpretation = result.interpretations[group] ?? '';
              return (
                <div key={group} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{group}</div>
                      <div className="text-sm opacity-70">{score}</div>
                    </div>
                    <div className="w-full bg-base-100 rounded-full h-3 mt-2 overflow-hidden border border-base-300">
                      <div className="h-3 bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  <div className="w-48 text-right">
                    <span className="badge badge-outline">{interpretation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
