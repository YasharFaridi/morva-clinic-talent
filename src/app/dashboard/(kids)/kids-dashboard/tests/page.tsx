"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTests } from "@/api";
import { TestItem } from "@/types";

export default function KidsTestsPage() {
  const router = useRouter();
  const [tests, setTests] = useState<TestItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getTests("kids");
        setTests(res.data);
      } catch (err) {
        console.error(err);
        setError("در بارگذاری تست‌ها مشکلی پیش آمد. لطفاً دوباره تلاش کنید.");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleStartTest = (test: TestItem) => {
    router.push(`/morva-kids/tests/${test.id}/take`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-primary mb-6">
        🎯 تست‌های کودک
      </h1>

      {loading && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card bg-base-200 border border-base-300">
              <div className="card-body">
                <span className="skeleton h-6 w-3/4 mb-3 block" />
                <span className="skeleton h-3 w-full mb-2 block" />
                <div className="flex items-center justify-between mt-2">
                  <span className="skeleton h-6 w-24 block" />
                  <span className="skeleton h-6 w-16 block" />
                </div>
                <span className="skeleton h-8 w-full mt-4 block" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && tests.length === 0 && (
        <div className="alert alert-info">
          <span>در حال حاضر تست فعالی برای نمایش وجود ندارد.</span>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <div
            key={test.id}
            className="card bg-base-200 shadow-md hover:shadow-xl transition rounded-3xl p-5 border-2 border-base-300"
          >
            <div className="card-body">
              <h3 className="card-title text-primary">{test.name}</h3>
              <p className="text-sm text-base-content/80 mb-2">
                {test.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <div className="text-xs badge badge-outline badge-primary">
                  تعداد گروه‌ها: {test.groups_count}
                </div>
                <div
                  className={`badge text-xs ${
                    test.is_active ? "badge-success" : "badge-ghost"
                  }`}
                >
                  {test.is_active ? "فعال" : "غیرفعال"}
                </div>
              </div>

              <button
                className="btn btn-primary mt-4 rounded-full w-full flex items-center gap-2"
                disabled={!test.is_active}
                onClick={() => handleStartTest(test)}
              >
                شروع تست
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
