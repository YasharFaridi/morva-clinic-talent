"use client";

import React, { JSX } from "react";
import { IUserFormData } from "@/types";
import {
  FaIdCard,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaSchool,
  FaLanguage,
  FaGraduationCap,
  FaHome,
  FaLock,
  FaVenusMars,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface ReviewStepProps {
  formData: IUserFormData;
}

// مپ کلیدها به فارسی و آیکون
const fieldLabels: Record<
  keyof IUserFormData,
  { label: string; icon: JSX.Element }
> = {
  national_code: { label: "کد ملی", icon: <FaIdCard /> },
  email: { label: "ایمیل", icon: <FaEnvelope /> },
  first_name: { label: "نام", icon: <FaUser /> },
  last_name: { label: "نام خانوادگی", icon: <FaUser /> },
  phone_number: { label: "شماره موبایل", icon: <FaPhone /> },
  sex: { label: "جنسیت", icon: <FaVenusMars /> },
  parent_name: { label: "نام پدر", icon: <FaUser /> },
  school_name: { label: "نام مدرسه", icon: <FaSchool /> },
  native_language: { label: "زبان مادری", icon: <FaLanguage /> },
  sec_language: { label: "زبان دوم", icon: <FaLanguage /> },
  education: { label: "تحصیلات", icon: <FaGraduationCap /> },
  address: { label: "آدرس", icon: <FaHome /> },
  password: { label: "رمز عبور", icon: <FaLock /> },
  password_confirm: { label: "تکرار رمز عبور", icon: <FaLock /> },
};

export default function ReviewStep({ formData }: ReviewStepProps) {
  return (
    <div className="space-y-6">
      {/* عنوان مرحله */}
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <FaCheckCircle /> مرور اطلاعات
      </h2>

      {/* کارت‌های اطلاعات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(formData).map(([key, value]) => {
          const field = fieldLabels[key as keyof IUserFormData];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.05 * Object.keys(formData).indexOf(key),
              }}
              className="flex items-center gap-4 p-4 bg-base-200 rounded-lg shadow-lg border border-base-300"
            >
              <div className="text-primary text-xl">{field?.icon}</div>
              <div>
                <h4 className="font-bold text-white">{field?.label || key}</h4>
                <p className="text-white/90">{value || "—"}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
