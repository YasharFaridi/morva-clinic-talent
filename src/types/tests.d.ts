export type TestTag = "kids" | "teens" | "adults";

export interface TestItem {
  id: number;
  name: string;
  tag: TestTag;
  description: string;
  is_active: boolean;
  groups_count: number;
}

export interface TestsResponse {
  message: string;
  data: TestItem[];
}
