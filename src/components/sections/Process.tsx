"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  if (!siteConfig.features.process) return null;

  const { lang } = useLanguage();

  // Stegene (språksensitiv liste)
  const steps = siteConfig.process?.[lang] ?? [];

  // Seksjonstekster fra config (med trygge fallbacks)
  const eyebrow = siteConfig.processSection?.eyebrow?.[lang];
  const heading =
    siteConfig.processSection?.heading?.[lang] ??
    (lang === "no" ? "Slik fungerer det" : "How it works");

  const subtext =
    siteConfig.processSection?.subtext?.[lang] ??
    (lang === "no"
      ? "Her er en enkel oversikt over de vanligste stegene på veien mot førerkortet."
      : "Here is a simple overview of the most common steps on the way to getting your driver’s license.");

  return (
    <section id="prosess" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {eyebrow && (
          <p className="text-center text-xs font-semibold tracking-widest text-gray-500">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {heading}
        </h2>

        {subtext && (
          <p className="mt-4 text-center text-sm text-gray-600 sm:text-base">
            {subtext}
          </p>
        )}

        <ol className="mt-12 space-y-4">
          {steps.map((step, index) => (
            <li
              key={`${index}-${step}`}
              className="rounded-2xl bg-[#E6F3EE] px-5 py-4 text-sm text-gray-900 sm:text-base"
            >
              <span className="mr-2 font-semibold text-[#2FAF7D]">
                {index + 1}.
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
