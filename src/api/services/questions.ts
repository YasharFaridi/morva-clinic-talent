import apiClient from "../axios";
import { API_ENDPOINTS } from "../endpoints";
import { QuestionsResponse } from "@/types";

export const getQuestions = async (
  testId: number
): Promise<QuestionsResponse> => {
  const res = await apiClient.get<QuestionsResponse>(
    API_ENDPOINTS.tests.questions,
    {
      params: { test_id: testId },
    }
  );
  return res.data;
};