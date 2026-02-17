"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function WhyUs() {
  if (!siteConfig.features.whyUs) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const { whyUs } = siteConfig;
  const image = whyUs.image;

  const heading = whyUs.heading?.[safeLang] ?? whyUs.heading?.no ?? "";
  const subtext = whyUs.subtext?.[safeLang];
  const points = whyUs.points?.[safeLang] ?? whyUs.points?.no ?? [];

  if (!heading || points.length === 0) return null;

  return (
    <Section id="hvorfor-oss" variant="odd">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Venstre: bilde (scroll-trigger fra venstre -> høyre) */}
        {image?.src && (
          <Reveal className="reveal-image-left" delayMs={120}>
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
          </Reveal>
        )}

        {/* Høyre: tekst */}
        <div>
          <Reveal variant="heading">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
          </Reveal>

          {subtext && (
            <p className="mt-4 text-sm text-gray-600 sm:text-base max-w-2xl">
              {subtext}
            </p>
          )}

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--brand)]"
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
    </Section>
  );
}
