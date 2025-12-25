// ---------- OPTIONS ----------
export interface QuestionOption {
  id: number;
  label: string;
  points: number;
  order: number;
}

// ---------- QUESTION ----------
export interface QuestionItem {
  id: number;
  text: string;
  order: number;
  options: QuestionOption[];
  groupName?: string;
  groupColor?: string;
}

// ---------- GROUP ----------
export interface QuestionGroup {
  name: string;
  color: string;
  questions: QuestionItem[];
}

// ---------- API RESPONSE ----------
export interface QuestionsResponse {
  message: string;
  data: {
    groups: QuestionGroup[];
  };
}
