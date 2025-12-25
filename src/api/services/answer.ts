import apiClient from "../axios";
import { API_ENDPOINTS } from "../endpoints";
import { SubmitAnswersPayload } from "@/types";

export const submitAnswers = async (payload: SubmitAnswersPayload): Promise<SubmitAnswersPayload> => {
  const res = await apiClient.post(API_ENDPOINTS.tests.submit, payload);
  return res.data;
};