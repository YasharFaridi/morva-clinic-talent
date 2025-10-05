import { useFormContext } from "react-hook-form";
import { IUserFormData } from "@/types";
import {
  FaUserTie,
  FaSchool,
  FaLanguage,
  FaGlobe,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";

export default function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <FaInfoCircle /> اطلاعات تکمیلی
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control relative">
          <label className="label text-white">نام پدر</label>
          <div className="relative">
            <input
              {...register("parent_name")}
              placeholder="مثلاً حسن"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaUserTie className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.parent_name && (
            <p className="text-error">{errors.parent_name.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">نام مدرسه</label>
          <div className="relative">
            <input
              {...register("school_name")}
              placeholder="مثلاً دبیرستان امام"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaSchool className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.school_name && (
            <p className="text-error">{errors.school_name.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">زبان مادری</label>
          <div className="relative">
            <input
              {...register("native_language")}
              placeholder="مثلاً فارسی"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaLanguage className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.native_language && (
            <p className="text-error">{errors.native_language.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">زبان دوم</label>
          <div className="relative">
            <input
              {...register("sec_language")}
              placeholder="مثلاً انگلیسی"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.sec_language && (
            <p className="text-error">{errors.sec_language.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">تحصیلات</label>
          <div className="relative">
            <input
              {...register("education")}
              placeholder="مثلاً دیپلم"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaUserTie className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.education && (
            <p className="text-error">{errors.education.message}</p>
          )}
        </div>

        <div className="form-control relative">
          <label className="label text-white">آدرس</label>
          <div className="relative">
            <input
              {...register("address")}
              placeholder="مثلاً تهران، خیابان انقلاب"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.address && (
            <p className="text-error">{errors.address.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
