// src/components/sections/Reviews.tsx
"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

function Stars({ lang }: { lang: "no" | "en" }) {
  return (
    <div
      aria-label={lang === "no" ? "5 av 5 stjerner" : "5 out of 5 stars"}
      className="text-[#2FAF7D] tracking-widest text-sm"
    >
      ★★★★★
    </div>
  );
}

export default function Reviews() {
  if (!siteConfig.features.reviews) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const { reviews } = siteConfig;
  if (!reviews || reviews.length === 0) return null;

  return (
    <section
      id="anmeldelser"
      className="relative py-32 overflow-hidden"
    >
      {/* Skrå bakgrunn */}
      <div
        aria-hidden
        className="absolute inset-0 -skew-y-2 bg-[#E6F3EE] origin-top-left"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-500">
          {safeLang === "no" ? "ANMELDELSER" : "TESTIMONIALS"}
        </p>

        <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {safeLang === "no"
            ? "Hva kundene våre sier"
            : "Customer testimonials"}
        </h2>

        <p className="mt-4 text-center text-sm text-gray-600 sm:text-base">
          {safeLang === "no"
            ? "Hva tidligere elever sier om oss"
            : "What former students say about us"}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={`${review.name.no}-${index}`}
              className="rounded-2xl bg-white p-6 shadow-sm text-center"
            >
              <Stars lang={safeLang} />

              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                “{review.text[safeLang]}”
              </p>

              <h3 className="mt-6 text-sm font-semibold text-gray-900">
                {review.name[safeLang]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
