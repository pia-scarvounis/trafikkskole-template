"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Prices() {
  if (!siteConfig.features.prices) return null;

  const { lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const prices = siteConfig.prices ?? [];
  const visiblePrices = showAll ? prices : prices.slice(0, 3);

  // Seksjonstekster fra config med fallback
  const heading =
    siteConfig.pricesSection?.heading?.[lang] ??
    (lang === "no" ? "Priser" : "Prices");

  const subtext =
    siteConfig.pricesSection?.subtext?.[lang] ??
    (lang === "no"
      ? "Oversikt over våre mest brukte tjenester og kurs."
      : "An overview of our most common services and courses.");

  const fullCta =
    siteConfig.features.fullPriceListCta
      ? siteConfig.pricesSection?.fullPriceListCta
      : null;

  return (
    <section
      id="priser"
      className="relative py-28 overflow-hidden bg-[#EAF6F1]"
    >
      {/* Diagonal topp */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-12 h-24 bg-white skew-y-1 origin-top-left z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
  <span className="block text-xs tracking-widest uppercase text-gray-500">
  {siteConfig.pricesSection?.eyebrow?.[lang] ?? (lang === "no" ? "PRISER" : "PRICES")}
</span>



        <h2 className="mt-2 text-3xl font-semibold text-gray-900">
          {heading}
        </h2>

        <p className="mt-4 text-gray-600">
          {subtext}
        </p>

        {/* Pris-boks */}
        <div className="mt-12 mb-12 rounded-2xl bg-white/80 backdrop-blur p-6 sm:p-8 text-left">
          <ul>
            {visiblePrices.map((item, index) => (
              <li
                key={`${item.title.no}-${index}`}
                className="flex justify-between gap-4 py-4 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {item.title[lang]}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description[lang]}
                    </p>
                  )}
                </div>

                <p className="font-medium text-gray-900 whitespace-nowrap">
                  {item.price[lang]}
                </p>
              </li>
            ))}
          </ul>

          {/* Vis flere / færre */}
          {prices.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-6 text-sm underline text-gray-700 hover:text-gray-900"
            >
              {showAll
                ? lang === "no"
                  ? "Skjul priser"
                  : "Hide prices"
                : lang === "no"
                  ? "Vis flere priser"
                  : "Show more prices"}
            </button>
          )}

          {/* Full prisliste CTA */}
          {fullCta?.href && fullCta?.label && (
            <div className="mt-4">
              <a
                href={fullCta.href}
                className="text-sm underline text-gray-900"
              >
                {fullCta.label[lang]}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Diagonal bunn */}
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-16 h-24 bg-white skew-y-1 origin-bottom-right z-0"
      />
    </section>
  );
}
