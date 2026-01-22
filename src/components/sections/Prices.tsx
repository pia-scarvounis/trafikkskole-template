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
    siteConfig.pricesSection?.heading?.[lang] ?? (lang === "no" ? "Priser" : "Prices");

  const subtext =
    siteConfig.pricesSection?.subtext?.[lang] ??
    (lang === "no"
      ? "Oversikt over våre mest brukte tjenester og kurs."
      : "An overview of our most common services and courses.");

  const fullCta = siteConfig.pricesSection?.fullPriceListCta;

  return (
    <section id="priser">
      <h2>{heading}</h2>
      <p>{subtext}</p>

      <ul style={{ marginTop: 16 }}>
        {visiblePrices.map((item, index) => (
          <li
            key={`${item.title.no}-${index}`}
            style={{
              marginBottom: 12,
              borderBottom: "1px solid #eee",
              paddingBottom: 8,
            }}
          >
            <strong>{item.title[lang]}</strong> – {item.price[lang]}
            {item.description && <p>{item.description[lang]}</p>}
          </li>
        ))}
      </ul>

      {prices.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          style={{ marginTop: 12 }}
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

      {siteConfig.features.fullPriceListCta && fullCta?.href && fullCta?.label && (
  <div style={{ marginTop: 12 }}>
    <a href={fullCta.href}>{fullCta.label[lang]}</a>

        </div>
      )}
    </section>
  );
}
