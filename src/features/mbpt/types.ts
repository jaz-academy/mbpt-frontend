export type CreateResultDto = {
  answers: Record<string, number>;
  scores: Record<string, number>;
  profile?: string;
  name: string;
  email: string;
  phone?: string;
  segment?: "adult" | "kids";
  locale?: "id" | "en";
};

export type Result = {
  id: string;
  profile: string;
  scores: Record<string, number>;
};

export type Question = {
  id: number;
  segment: "adult" | "kids";
  text: string;
  motivation: "vision" | "meaning" | "validation" | "fear";
  weight: number;
  order: number;
  locale: "id" | "en";
};

export type ResultProfileSection = {
  insight: string;
  details: string[];
  goodFuels: string[];
  badFuels: string[];
  suggestions: string[];
  strength: string[];
  weakness: string[];
  opportunity: string[];
  threat: string[];
};

export type ResultProfileContent = {
  id: number;
  profileId: string;
  segment: "adult" | "kids";
  locale: "id" | "en";
  content: ResultProfileSection;
  label?: string;
  createdAt: string;
  updatedAt: string;
};
