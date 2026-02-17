"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Process() {
  if (!siteConfig.features.process) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const steps = siteConfig.process?.[safeLang] ?? [];
  if (steps.length === 0) return null;

  const section = siteConfig.processSection;

  const eyebrow = section?.eyebrow?.[safeLang];
  const heading =
    section?.heading?.[safeLang] ?? (safeLang === "no" ? "Slik fungerer det" : "How it works");
  const subtext =
    section?.subtext?.[safeLang] ??
    (safeLang === "no"
      ? "Her er en enkel oversikt over de vanligste stegene på veien mot førerkortet."
      : "Here is a simple overview of the most common steps on the way to getting your driver’s license.");

  // Åpne/lukke trekkspill
const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <Section id="prosess" variant="even">
      {eyebrow && (
        <p className="text-center text-xs font-semibold tracking-widest text-gray-500">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {heading}
      </h2>

      {subtext && (
        <p className="mt-4 text-center text-sm text-gray-600 sm:text-base max-w-2xl mx-auto">
          {subtext}
        </p>
      )}

      <div className="mt-12 space-y-4 max-w-3xl mx-auto">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={`${index}-${step.title}`}
              className="rounded-2xl bg-white border border-black/5 overflow-hidden"
            >
              {/* Header (klikkbar) */}
              <button
                type="button"
                onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-start gap-3 min-w-0">
                  {/* Tall */}
                  <span className="mt-0.5 font-semibold text-[var(--brand)]">
                    {index + 1}.
                  </span>

                  {/* Tittel */}
                  <span className="font-medium text-gray-900 break-words">
                    {step.title}
                  </span>
                </div>

                {/* Plus/minus */}
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--brand)] flex-shrink-0"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Innhold */}
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
