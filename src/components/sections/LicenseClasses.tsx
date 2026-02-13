"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function LicenseClasses() {
  if (!siteConfig.features.licenseClasses) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.licenseClassesSection;
  const classes = siteConfig.licenseClasses?.[safeLang] ?? [];

  if (classes.length === 0) return null;

  const getIconLabel = (code: string) => {
    const first = code.split(" ")[0];
    return first.split("/")[0];
  };

  return (
    <section id="forerkortklasser" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {section?.heading?.[safeLang]}
        </h2>

        {/* Subtext */}
        {section?.subtext?.[safeLang] && (
          <p className="mt-4 text-sm text-gray-600 sm:text-base max-w-2xl">
            {section.subtext[safeLang]}
          </p>
        )}

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <div
              key={item.code}
              className="flex items-center gap-4 rounded-2xl bg-[#F6F7F9] p-6 transition hover:shadow-sm"
            >
              {/* Blå ikon-sirkel */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0049FF] text-white font-semibold text-xs">
                <span className="truncate max-w-[42px]">
                  {getIconLabel(item.code)}
                </span>
              </div>

              {/* Tekst */}
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 break-words">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
