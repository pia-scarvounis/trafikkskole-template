"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  if (!siteConfig.features.faq) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  if (!siteConfig.faq || siteConfig.faq.length === 0) return null;

  return (
    <Section id="faq" variant="odd">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest text-gray-500">
          FAQ
        </p>

        {/* 🔥 Overskrift med reveal (lik de andre) */}
        <Reveal variant="heading">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {safeLang === "no"
              ? "Ofte stilte spørsmål"
              : "Frequently Asked Questions"}
          </h2>
        </Reveal>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          {safeLang === "no"
            ? "Her finner du svar på noen av de vanligste spørsmålene."
            : "Here you’ll find answers to some of the most common questions."}
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {siteConfig.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={`${index}-${item.question.no}`}
              className="rounded-2xl bg-[var(--surface)] px-6 py-5 border border-black/5"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-gray-900 sm:text-base">
                  {item.question[safeLang]}
                </span>

                <span className="ml-6 flex h-8 w-8 items-center justify-center text-xl font-light text-[var(--brand)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {item.answer[safeLang]}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
