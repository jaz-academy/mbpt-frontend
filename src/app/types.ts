export type Theme = "light" | "dark";
export type Audience = "kids" | "adult";
export type Language = "id" | "en";

export type AppContextType = {
  theme: Theme;
  audience: Audience;
  language: Language;
  toggleTheme: () => void;
  toggleAudience: () => void;
  toggleLanguage: () => void;
};
