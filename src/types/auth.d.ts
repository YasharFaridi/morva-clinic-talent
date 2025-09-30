export interface SignupRequest {
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

export interface SignupResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  token: string;
}
