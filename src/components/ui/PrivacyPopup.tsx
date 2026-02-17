"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

interface PrivacyPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyPopup({ open, onClose }: PrivacyPopupProps) {
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const privacy = siteConfig.footer?.privacy;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold">
            {privacy?.title?.[safeLang] ?? (safeLang === "no" ? "Personvern" : "Privacy")}
          </h2>

          <button onClick={onClose} className="text-gray-400 hover:text-black text-xl">
            ✕
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          {(privacy?.paragraphs?.[safeLang] ?? []).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
