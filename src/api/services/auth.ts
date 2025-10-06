import apiClient from "../axios";
import { API_ENDPOINTS } from "../endpoints";
import { SignupRequest, SignupResponse } from "@/types/auth";

export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
  const res = await apiClient.post<SignupResponse>(API_ENDPOINTS.auth.signup, data);
  return res.data;
};
