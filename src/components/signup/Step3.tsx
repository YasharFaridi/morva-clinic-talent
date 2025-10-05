import { useFormContext } from "react-hook-form";
import { IUserFormData } from "@/types";
import { FaLock } from "react-icons/fa";

export default function Step3() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <FaLock /> اطلاعات ورود
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* رمز عبور */}
        <div className="form-control relative">
          <label className="label text-white">رمز عبور</label>
          <div className="relative">
            <input
              type="password"
              {...register("password")}
              placeholder="رمز عبور خود را وارد کنید"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>

        {/* تکرار رمز عبور */}
        <div className="form-control relative">
          <label className="label text-white">تکرار رمز عبور</label>
          <div className="relative">
            <input
              type="password"
              {...register("password_confirm")}
              placeholder="رمز عبور را دوباره وارد کنید"
              className="input input-bordered w-full pl-10 bg-base-200 text-white"
            />
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
          </div>
          {errors.password_confirm && (
            <p className="text-error">{errors.password_confirm.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
