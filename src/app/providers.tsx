"use client";

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import type { ReactNode } from "react";

import { router } from "./router";
import { AppContext } from "./context";
import type { Theme, Audience, Language } from "./types";

const queryClient = new QueryClient();

export function Providers({ children }: { children?: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) ?? "light";
  });

  const [audience, setAudience] = useState<Audience>(() => {
    return (localStorage.getItem("audience") as Audience) ?? "kids";
  });

  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) ?? "id";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  const toggleAudience = () => {
    setAudience((prev) => {
      const next = prev === "kids" ? "adult" : "kids";
      localStorage.setItem("audience", next);
      return next;
    });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "id" ? "en" : "id";
      localStorage.setItem("language", next);
      return next;
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{ theme, audience, language, toggleTheme, toggleAudience, toggleLanguage }}
      >
        {children ?? <RouterProvider router={router} />}
      </AppContext.Provider>
    </QueryClientProvider>
  );
}
