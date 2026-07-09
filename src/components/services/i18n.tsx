"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang } from "./copy";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Copy;
}

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = "services-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Estonian is the default. Read a saved choice after mount to stay
  // hydration-safe (never read localStorage during the initial render).
  const [lang, setLangState] = useState<Lang>("et");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "et") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t: copy[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
