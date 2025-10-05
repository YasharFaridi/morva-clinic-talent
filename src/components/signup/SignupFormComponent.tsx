"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/validation/auth/signup.schema";
import { IUserFormData } from "@/types";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ReviewStep from "./ReviewStep";
import ProgressBar from "./ProgressBar";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const methods = useForm<IUserFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      national_code: "",
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      sex: "M",
      parent_name: "",
      school_name: "",
      native_language: "",
      sec_language: "",
      education: "",
      address: "",
      password: "",
      password_confirm: "",
    },
  });

  const { trigger, handleSubmit, getValues } = methods;

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof IUserFormData)[] = [];

    if (step === 1)
      fieldsToValidate = [
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "national_code",
      ];
    if (step === 2)
      fieldsToValidate = ["school_name", "education", "native_language"];
    if (step === 3) fieldsToValidate = ["password", "password_confirm"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (data: IUserFormData) => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      // فرضی: api call
      await new Promise((res) => setTimeout(res, 1000));
      setSuccessMessage(
        `ثبت نام با موفقیت انجام شد. خوش آمدید ${data.first_name}`
      );
    } catch {
      setErrorMessage("خطا در ثبت نام");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div
    className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[url('/images/Form-bg.png')] bg-repeat bg-[length:256px_256px] bg-center"
  >
    {/* لایه گرادیان تاریک برای کنتراست */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0f172a]/80 to-[#020617]/90" />

    {/* افکت نور مرکزی */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] rounded-full" />

    {/* فرم */}
    <div className="relative z-10 w-full max-w-3xl p-10 rounded-2xl border border-cyan-500/30 shadow-2xl bg-white/10 backdrop-blur-sm">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ProgressBar */}
          <ProgressBar step={step} totalSteps={totalSteps} />

          {/* مراحل فرم */}
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <ReviewStep formData={getValues()} />}

          {/* دکمه‌ها */}
          <div className="flex justify-between items-center mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                مرحله قبل
              </button>
            )}
            {step < totalSteps && (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-[0_0_20px_#06b6d4aa] transition-all duration-200"
              >
                مرحله بعد
              </button>
            )}
            {step === totalSteps && (
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-[0_0_20px_#22c55eaa] transition-all duration-200"
              >
                {loading ? "در حال ارسال..." : "ثبت نام"}
              </button>
            )}
          </div>

          {/* پیام‌ها */}
          {errorMessage && (
            <p className="text-red-400 text-center mt-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-400 text-center mt-4">
              {successMessage}
            </p>
          )}
        </form>
      </FormProvider>
    </div>
  </div>
);

}
