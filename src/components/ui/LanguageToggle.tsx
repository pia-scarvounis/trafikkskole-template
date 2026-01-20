"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  // Skjul helt hvis kunden ikke vil ha språkvalg
  if (!siteConfig.features.languageSwitch) return null;

  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center justify-end gap-2 text-sm">
      <button
        type="button"
        onClick={() => setLang("no")}
        className={lang === "no" ? "font-medium text-gray-900" : "text-gray-500 hover:text-gray-900"}
      >
        Norsk
      </button>

      <span className="text-gray-300">|</span>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={lang === "en" ? "font-medium text-gray-900" : "text-gray-500 hover:text-gray-900"}
      >
        English
      </button>
    </div>
  );
}
