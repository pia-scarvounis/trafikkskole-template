"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { hero } = siteConfig;
  const { lang } = useLanguage();

  return (
    <section id="hero" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Venstre: tekst */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {hero.headline[lang]}
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              {hero.subtext[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                {hero.primaryCta.label}
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Høyre: bilde */}
          {hero.image && (
            <div className="rounded-2xl border bg-gray-50 overflow-hidden">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

