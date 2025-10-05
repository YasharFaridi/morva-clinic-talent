import { useFormContext } from "react-hook-form";
import { IUserFormData } from "@/types";
import {
  FaIdCard,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaVenusMars,
} from "react-icons/fa";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <FaUser /> اطلاعات اصلی
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control relative">
          <label className="label text-white">کد ملی</label>
          <div className="relative">
            <input
              {...register("national_code")}
              placeholder="مثلاً 1234567890"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.national_code && (
            <p className="text-error">{errors.national_code.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">ایمیل</label>
          <div className="relative">
            <input
              type="email"
              {...register("email")}
              placeholder="مثلاً your@email.com"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>

        <div className="form-control relative">
          <label className="label text-white">نام</label>
          <div className="relative">
            <input
              {...register("first_name")}
              placeholder="مثلاً علی"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.first_name && (
            <p className="text-error">{errors.first_name.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">نام خانوادگی</label>
          <div className="relative">
            <input
              {...register("last_name")}
              placeholder="مثلاً محمدی"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.last_name && (
            <p className="text-error">{errors.last_name.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">شماره موبایل</label>
          <div className="relative">
            <input
              {...register("phone_number")}
              placeholder="مثلاً 09123456789"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.phone_number && (
            <p className="text-error">{errors.phone_number.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label text-white flex items-center gap-2">
            <FaVenusMars className="text-primary" /> جنسیت
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="M"
                {...register("sex")}
                className="radio radio-primary"
              />
              <FaUser className="text-blue-400" /> مرد
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="F"
                {...register("sex")}
                className="radio radio-secondary"
              />
              <FaUser className="text-pink-400" /> زن
            </label>
          </div>
          {errors.sex && (
            <p className="text-error mt-1">{errors.sex.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
