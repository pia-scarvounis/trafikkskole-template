"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

type ProcessStep = {
  title: string;
  details: string;
};

export default function Process() {
  if (!siteConfig.features.process) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const steps: ProcessStep[] =
    (siteConfig.process?.[safeLang] as ProcessStep[]) ?? [];

  const eyebrow = siteConfig.processSection?.eyebrow?.[safeLang];

  const heading =
    siteConfig.processSection?.heading?.[safeLang] ??
    (safeLang === "no" ? "Slik fungerer det" : "How it works");

  const subtext =
    siteConfig.processSection?.subtext?.[safeLang] ??
    (safeLang === "no"
      ? "Her er en enkel oversikt over de vanligste stegene på veien mot førerkortet."
      : "Here is a simple overview of the most common steps on the way to getting your driver’s license.");

  // Som FAQ: én åpen om gangen (kan settes til null for alle lukket)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="prosess" className="py-32 bg-white">
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
          {steps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={`${index}-${step.title}`}
                className="rounded-2xl bg-[#E6F3EE] px-5 py-4"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[#2FAF7D]">
                      {index + 1}.
                    </span>

                    <div>
                      <p className="text-sm font-medium text-gray-900 sm:text-base">
                        {step.title}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden
                    className="mt-0.5 text-[#2FAF7D] text-lg font-semibold"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pl-6">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      {step.details}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
