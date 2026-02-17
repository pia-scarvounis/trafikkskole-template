"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  if (!siteConfig.features.hero) return null;

  const { hero } = siteConfig;
  const { lang } = useLanguage();

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex items-center
        overflow-hidden
        pt-16 sm:pt-20 lg:pt-32
        pb-24
        bg-[var(--section-odd)]
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* IMAGE FIRST on mobile, SECOND on desktop */}
          {hero.image && (
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[520px] h-[260px] sm:h-[320px] lg:h-[500px] overflow-hidden rounded-xl">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* TEXT SECOND on mobile, FIRST on desktop */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {hero.headline[lang]}
            </h1>

            <p className="mt-4 text-lg text-gray-700">
              {hero.subtext[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                {hero.primaryCta.label[lang]}
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-black/20 bg-transparent px-6 py-3 text-sm font-medium text-gray-900 hover:bg-black/5"
              >
                {hero.secondaryCta.label[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fade til neste seksjon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[var(--section-even)]"
      />
    </section>
  );
}
