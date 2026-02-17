"use client";

import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Services() {
  if (!siteConfig.features.services) return null;

  const { services } = siteConfig;
  const { lang } = useLanguage();

  return (
    <Section
      id="tjenester"
      variant="even"
      topDiagonal={false}
      bottomDiagonal={true}
      bottomDiagonalDirection="ltr"
      bottomDiagonalBgVariant="odd"
    >
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {lang === "no" ? "Våre tjenester" : "Our services"}
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
          {lang === "no"
            ? "Pakker og kurs - fra første kjøretime til oppkjøring."
            : "Packages and courses tailored to your level - from your first lesson to the driving test."}
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const isFeatured = index === 1;

          return (
            <div
              key={index}
              className={[
                "rounded-2xl p-6 flex flex-col justify-between transition",
                isFeatured
                  ? "bg-[var(--brand)] text-white shadow-xl border border-transparent"
                  : "bg-white border border-black/5 hover:shadow-sm",
              ].join(" ")}
            >
              <div>
                {service.icon && (
                  <Image
                    src={service.icon.src}
                    alt={service.icon.alt[lang]}
                    width={28}
                    height={28}
                    className={isFeatured ? "opacity-100" : "opacity-80"}
                  />
                )}

                <h3
                  className={[
                    "mt-2 text-lg font-semibold",
                    isFeatured ? "text-white" : "text-gray-900",
                  ].join(" ")}
                >
                  {service.title[lang]}
                </h3>

                <p
                  className={[
                    "mt-2 text-sm leading-relaxed",
                    isFeatured ? "text-white/90" : "text-gray-700",
                  ].join(" ")}
                >
                  {service.description[lang]}
                </p>

                {service.price && (
                  <p
                    className={[
                      "mt-4 text-base font-semibold",
                      isFeatured ? "text-white" : "text-gray-900",
                    ].join(" ")}
                  >
                    {lang === "no" ? "Pris: " : "Price: "}
                    <span>{service.price[lang]}</span>
                  </p>
                )}

                {service.bullets?.[lang]?.length ? (
                  <ul className="mt-4 space-y-2">
                    {service.bullets[lang].map((item) => (
                      <li
                        key={item}
                        className={[
                          "flex gap-3 text-sm",
                          isFeatured ? "text-white/90" : "text-gray-700",
                        ].join(" ")}
                      >
                        <span
                          aria-hidden
                          className={[
                            "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full",
                            isFeatured
                              ? "bg-white/20 text-white"
                              : "bg-[var(--surface)] text-[var(--brand)]",
                          ].join(" ")}
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
                className={[
                  "mt-6 inline-flex items-center text-sm font-medium",
                  isFeatured ? "text-white" : "text-gray-900",
                ].join(" ")}
              >
                {service.cta.label[lang]} →
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
