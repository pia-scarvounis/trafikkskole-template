// src/components/sections/WhyUs.tsx
"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  // Feature flag
  if (!siteConfig.features.whyUs) return null;

  const { lang } = useLanguage();
  const { whyUs } = siteConfig;

  /**
   * Vi normaliserer språk til nøklene som finnes i config.
   * (Hvis lang f.eks. er "nb" eller "en-US", så faller vi trygt tilbake til "no".)
   */
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  // Trygg image (kan mangle i config)
  const image = whyUs.image;

  // Trygg heading (fallback)
  const heading = whyUs.heading?.[safeLang] ?? whyUs.heading?.no ?? "";

  // Trygg liste: map() kan aldri krasje
  const points = whyUs.points?.[safeLang] ?? whyUs.points?.no ?? [];

  return (
    <section id="hvorfor-oss" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Venstre: bilde */}
          {image?.src && (
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt?.[safeLang] ?? image.alt?.no ?? "Why us"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Høyre: tekst */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500">
              {safeLang === "no" ? "HVORFOR OSS" : "WHY US"}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F3EE] text-[#2FAF7D]"
                  >
                    ✓
                  </span>

                  <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
