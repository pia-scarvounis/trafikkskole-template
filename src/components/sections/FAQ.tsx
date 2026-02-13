"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
if (!siteConfig.features.faq) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-500">
          FAQ
        </p>

        <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {lang === "no" ? "Ofte stilte spørsmål" : "Frequently Asked Questions"}
        </h2>

        <p className="mt-4 text-center text-sm text-gray-600 sm:text-base">
          {lang === "no"
            ? "Her finner du svar på noen av de vanligste spørsmålene."
            : "Here you’ll find answers to some of the most common questions."}
        </p>

        <div className="mt-12 space-y-4">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${index}-${item.question.no}`}
                className="rounded-2xl bg-[#E6F3EE] px-5 py-4"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    {item.question[lang]}
                  </span>

                  <span className="ml-6 flex h-8 w-8 items-center justify-center text-xl font-light text-[#2FAF7D]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                    {item.answer[lang]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
