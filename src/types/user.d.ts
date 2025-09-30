export interface IUserData {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  token: string;
  gender: "M" | "F";
  mobile: string | null;
  national_code: string | null;
  user_status: string;
  setting: boolean;
  blog: boolean;
  page: boolean;
  slider: boolean;
  menu: boolean;
  gallery: boolean;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface IUserFormData {
  national_code: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  sex: "M" | "F";
  parent_name: string;
  school_name: string;
  native_language: string;
  sec_language: string;
  education: string;
  address: string;
  password: string;
  password_confirm: string;
}
