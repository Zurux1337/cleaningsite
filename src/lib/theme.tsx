"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeName = "playful" | "steep";

const STORAGE_KEY = "cleaning-theme";

const ThemeContext = createContext<{ theme: ThemeName; toggle: () => void }>({
  theme: "playful",
  toggle: () => {},
});

function readStored(): ThemeName {
  if (typeof window === "undefined") return "playful";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "steep" || saved === "playful") return saved;
  } catch {
    /* private mode — fall through to default */
  }
  return "playful";
}

function persist(theme: ThemeName) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* keep in-memory only */
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(readStored);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    persist(theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "playful" ? "steep" : "playful"));
  }, []);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
