"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function LicenseClasses() {
  if (!siteConfig.features.licenseClasses) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.licenseClassesSection;
  const classes = siteConfig.licenseClasses?.[safeLang] ?? [];
  if (classes.length === 0) return null;

  const iconMap: Record<string, string> = {
    AM146: "/icons/moped.svg",
    A: "/icons/motorsykkel.svg",
    B: "/icons/personbil.svg",
    C1: "/icons/lastebil.svg",
    BE: "/icons/forerkortutvidelse.svg",
    TGK: "/icons/trafikalt-grunnkurs.svg",
  };

  const getPrimaryCode = (code: string) => code.split("/")[0].trim();

  return (
 <Section
  id="forerkortklasser"
  variant="odd"
  topDiagonal={true}
  bottomDiagonal={true}
  topDiagonalDirection="ltr"
  bottomDiagonalDirection="ltr"
  topDiagonalBgVariant="even"       // bakgrunnen på seksjonen OVER
  bottomDiagonalBgVariant="even"    // bakgrunnen på seksjonen UNDER (Prices)
>


      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {section?.heading?.[safeLang]}
        </h2>

        {section?.subtext?.[safeLang] && (
          <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            {section.subtext[safeLang]}
          </p>
        )}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => {
          const primaryCode = getPrimaryCode(item.code);
          const iconSrc = iconMap[primaryCode];

          return (
            <div
              key={item.code}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 transition hover:shadow-sm border border-black/5"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)]">
                {iconSrc ? (
                  <Image
                    src={iconSrc}
                    alt={item.title}
                    width={26}
                    height={26}
                    className="h-6 w-6 object-contain"
                  />
                ) : (
                  <span className="text-white font-semibold text-xs truncate max-w-[42px]">
                    {primaryCode}
                  </span>
                )}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 break-words">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
