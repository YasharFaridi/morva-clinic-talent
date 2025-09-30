import apiClient from "../axios";
import { SignupRequest, SignupResponse } from "@/types/auth";

export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
  const res = await apiClient.post<SignupResponse>("/api/signup/", data);
  return res.data;
};
