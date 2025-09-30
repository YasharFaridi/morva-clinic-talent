import * as z from "zod";

export const signupSchema = z
  .object({
    national_code: z.string().min(10, "کد ملی باید ۱۰ رقم باشد"),
    email: z.string().email("ایمیل معتبر وارد کنید"),
    first_name: z.string().min(1, "نام الزامی است"),
    last_name: z.string().min(1, "نام خانوادگی الزامی است"),
    phone_number: z.string().min(11, "شماره موبایل معتبر نیست"),
    sex: z.enum(["M", "F"]),
    parent_name: z.string().min(1, "نام پدر الزامی است"),
    school_name: z.string().min(1, "نام مدرسه الزامی است"),
    native_language: z.string().min(1),
    sec_language: z.string().min(1),
    education: z.string().min(1),
    address: z.string().min(1),
    password: z.string().min(6, "رمز عبور حداقل ۶ کاراکتر باشد"),
    password_confirm: z.string().min(6, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "رمز عبور و تکرار آن مطابقت ندارد",
    path: ["password_confirm"],
  });
