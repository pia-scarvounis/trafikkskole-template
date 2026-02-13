"use client";

import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  if (!siteConfig.features.services) return null;

  const { services } = siteConfig;
  const { lang } = useLanguage();

  return (
    <section
      id="tjenester"
      className="py-32 bg-gradient-to-b from-[#EEF7F4] via-[#F6FCFA] to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900">
          {lang === "no" ? "Våre tjenester" : "Our services"}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#E6F3EE] p-6 transition hover:bg-[#E0F0EA] flex flex-col justify-between"
            >
              <div>
                {service.icon && (
                  <Image
                    src={service.icon.src}
                    alt={service.icon.alt[lang]}
                    width={28}
                    height={28}
                    className="opacity-80"
                  />
                )}

                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {service.title[lang]}
                </h3>

                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {service.description[lang]}
                </p>

                {/* Pris */}
                {service.price && (
                  <p className="mt-4 text-base font-semibold text-gray-900">
                    {lang === "no" ? "Pris: " : "Price: "}
                    <span className="font-semibold">{service.price[lang]}</span>
                  </p>
                )}

                {/* Punktliste */}
                {service.bullets?.[lang]?.length ? (
                  <ul className="mt-4 space-y-2">
                    {service.bullets[lang].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-700">
                        <span
                          aria-hidden
                          className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/70 text-[#2FAF7D]"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <a
                href={service.cta.href}
                className="mt-6 inline-flex items-center text-sm font-medium text-gray-900"
              >
                {service.cta.label[lang]} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
