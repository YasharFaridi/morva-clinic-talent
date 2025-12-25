import apiClient from "../axios";
import { API_ENDPOINTS } from "../endpoints";
import { TestTag, TestsResponse } from "@/types";

export const getTests = async (tag: TestTag): Promise<TestsResponse> => {
  const res = await apiClient.get<TestsResponse>(API_ENDPOINTS.tests.list, {
    params: { tag },
  });
  return res.data;
};
