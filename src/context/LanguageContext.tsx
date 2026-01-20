"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "no" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("no");

  // Husk valg i nettleseren
  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "no" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
