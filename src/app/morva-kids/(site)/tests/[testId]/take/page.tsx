"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getQuestions, submitAnswers } from "@/api";
import { QuestionItem, QuestionGroup } from "@/types";

export default function MorvaKidsTestsTakePage() {
  const params = useParams<{ testId: string }>();
  const router = useRouter();

  const testId = Number(params?.testId);

  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!testId || Number.isNaN(testId)) {
      setError("شناسه تست نامعتبر است");
      return;
    }

    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getQuestions(testId);

        // Local palette (override backend colors)
        const palette = [
          "#FFADAD",
          "#FFD6A5",
          "#FDFFB6",
          "#CAFFBF",
          "#9BF6FF",
          "#A0C4FF",
          "#BDB2FF",
          "#FFC6FF",
        ];

        const groupColorMap = new Map<string, string>();

        const flatQuestions: QuestionItem[] = res.data.groups.flatMap(
          (group: QuestionGroup, idx: number) => {
            const assigned =
              groupColorMap.get(group.name) ?? palette[idx % palette.length];
            groupColorMap.set(group.name, assigned);

            return group.questions.map((q: QuestionItem) => ({
              id: q.id,
              text: q.text,
              options: q.options,
              order: q.order,
              groupName: group.name,
              groupColor: assigned,
            }));
          }
        );

        setQuestions(flatQuestions);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت سوالات");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [testId]);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      const answersPayload = Object.entries(answers).map(
        ([questionId, optionId]) => {
          const qid = Number(questionId);
          const question = questions.find((q) => q.id === qid);
          const option = question?.options.find((o) => o.id === optionId);
          return {
            question_id: qid,
            option: option ? option.label : String(optionId),
          };
        }
      );

      const payload = { answers: answersPayload };
      const res = await submitAnswers(payload);

      try {
        localStorage.setItem("last_test_result", JSON.stringify(res));
      } catch (e) {
        console.warn("Could not store test result in localStorage", e);
      }

      router.replace("/dashboard/kids-dashboard/tests/result");
    } catch (err) {
      console.error(err);
      alert("خطا در ارسال پاسخ‌ها");
    } finally {
      setSubmitting(false);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div
      className="p-4 md:p-6 lg:p-8 space-y-6 min-h-screen"
      style={{
        background: `linear-gradient(135deg, var(--color-base-100), var(--color-base-200), var(--color-base-300), var(--color-accent))`,
      }}
    >
      <div className="flex items-center justify-between">
        <button
          className="btn btn-error rounded-xl"
          onClick={() => router.back()}
        >
          بازگشت
        </button>
      </div>

      {loading && (
        <div className="card bg-base-100 shadow-xl animate-pulse mx-auto w-full max-w-4xl">
          <div className="card-body space-y-6">
            <div className="skeleton h-4 w-1/3" />
            <div className="skeleton h-8 w-full" />

            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                >
                  <span className="skeleton h-4 w-4 rounded-full block" />
                  <span className="skeleton h-4 w-3/4 block" />
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <span className="skeleton h-8 w-24 block" />
              <span className="skeleton h-8 w-24 block" />
            </div>
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && currentQuestion && (
        <div className="mx-auto w-full max-w-4xl">
          <div className="rounded-2xl p-4 md:p-6 shadow-lg backdrop-blur-sm glass">
            <div className="grid grid-cols-1 gap-6 items-start">
              {/* Question (full width, no rounded colored background) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {currentQuestion.groupName && (
                      <span
                        className="badge"
                        style={{
                          background: currentQuestion.groupColor,
                          color: "#052a3d",
                        }}
                      >
                        {currentQuestion.groupName}
                      </span>
                    )}
                    <span className="text-sm opacity-70">
                      سوال {currentIndex + 1} از {questions.length}
                    </span>
                  </div>
                </div>

                <div className="p-0 mb-2">
                  <h2 className="text-lg md:text-xl font-bold leading-relaxed">
                    {currentQuestion.text}
                  </h2>
                </div>
              </div>

              {/* Options: two-per-row on larger screens */}
              <div>
                <progress
                  className="progress progress-primary w-full mb-4"
                  value={currentIndex + 1}
                  max={questions.length}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQuestion.options.map((opt) => {
                    const selected = answers[currentQuestion.id] === opt.id;
                    return (
                      <label
                        key={opt.id}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-shadow ${
                          selected
                            ? "bg-primary text-primary-content border-primary shadow-md"
                            : "hover:shadow hover:-translate-y-0.5"
                        }`}
                        style={{ cursor: "pointer" }}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          className="radio radio-primary"
                          checked={selected}
                          onChange={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              [currentQuestion.id]: opt.id,
                            }))
                          }
                        />
                        <div className="flex-1 text-base">{opt.label}</div>
                      </label>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-between pt-2 p-4 mt-4 ">
                  <button
                    className="btn btn-error md:btn-outline w-full sm:w-40 rounded-2xl"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((i) => i - 1)}
                  >
                    قبلی
                  </button>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      className="btn btn-info rounded-2xl md:btn-outline w-full sm:w-40"
                      disabled={!answers[currentQuestion.id]}
                      onClick={() => setCurrentIndex((i) => i + 1)}
                    >
                      بعدی
                    </button>
                  ) : (
                    <button
                      className="btn btn-success rounded-2xl w-full sm:w-40"
                      disabled={submitting}
                      onClick={handleSubmit}
                    >
                      {submitting ? "در حال ارسال..." : "ثبت نهایی"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
