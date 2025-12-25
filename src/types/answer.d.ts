// ---------- SINGLE ANSWER ----------
export interface AnswerPayloadItem {
  question_id: number;
  option: string;
}

// ---------- SUBMIT PAYLOAD ----------
export interface SubmitAnswersPayload {
  answers: AnswerPayloadItem[];
}

// ---------- RESULT RESPONSE ----------
export interface TestResultResponse {
  group_scores: Record<string, number>;
  total_score: number;
  interpretations: Record<string, string>;
  test_result_id: number;
}
