"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  if (!siteConfig.features.hero) return null;

  const { hero } = siteConfig;
  const { lang } = useLanguage();

  return (
    <section id="hero" className="py-20 bg-[#EEF7F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {hero.headline[lang]}
            </h1>

            <p className="mt-4 text-lg text-gray-700">{hero.subtext[lang]}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#66D69E] px-6 py-3 text-sm font-medium text-gray-900 hover:opacity-90"
              >
                {hero.primaryCta.label[lang]}
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-gray-400 bg-transparent px-6 py-3 text-sm font-medium text-gray-900 hover:bg-white/60"
              >
                {hero.secondaryCta.label[lang]}
              </a>
            </div>
          </div>

          {hero.image && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[330px] w-[330px] sm:h-[380px] sm:w-[380px] overflow-hidden rounded-full">
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
        </div>
      </div>
    </section>
  );
}
