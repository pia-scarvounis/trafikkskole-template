// src/components/sections/Footer.tsx
"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  if (!siteConfig.features.footer) return null;

  const { brand, footer } = siteConfig;
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  return (
    <footer className="bg-[#F4F6F6] border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Venstre */}
          <div className="space-y-3">
            <div className="text-sm text-gray-800">
              <span className="font-semibold">{brand.name}</span>
              <span className="text-gray-500"> · </span>
              <span className="text-gray-600">© {new Date().getFullYear()}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700">
                {footer.orgLabel[safeLang]}:
                <span className="ml-1 font-medium text-gray-900">
                  {footer.orgNumber}
                </span>
              </span>

              <span className="text-xs text-gray-600">{brand.location}</span>
            </div>
          </div>

          {/* Høyre */}
          <div className="flex items-center gap-6">
            <a
              href={footer.privacyHref}
              className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-black"
            >
              {footer.privacyLabel[safeLang]}
            </a>

            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              {safeLang === "no" ? "Til toppen" : "Back to top"}
            </a>
          </div>
        </div>

        {/* Bunnlinje */}
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-600">
          <span>
            {safeLang === "no"
              ? "Designet for en enkel, rask og tydelig trafikkskole-side."
              : "Designed for a simple, fast, and clear driving school website."}
          </span>

          {/* Credit (valgfri) */}
          {footer.credit?.href && footer.credit?.label && (
            <a
              href={footer.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 underline underline-offset-4"
            >
              {footer.credit.label}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
