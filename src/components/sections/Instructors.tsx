"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Instructors() {
  // Dersom seksjonen ikke finnes i config → ikke render
  if (!siteConfig.instructorsSection) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.instructorsSection;
  const instructors = section.instructors ?? [];

  // Hvis kunden bare har 0 lærere → ikke vis seksjonen
  if (instructors.length === 0) return null;

  const labels = {
    car: { no: "Bil", en: "Car" },
    languages: { no: "Språk", en: "Languages" },
  };

  return (
    <Section
      id="laerere"
      variant="odd"
      topDiagonal={false} // ingen diagonal på toppen
      bottomDiagonal // diagonal under seksjonen
      bottomDiagonalDirection="rtl" // venstre → høyre
      bottomDiagonalBgVariant="even" // fargen til neste seksjon (bytt hvis neste er noe annet)
    >
      {/* Heading */}
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {section.heading[safeLang]}
      </h2>

      {/* Subtext */}
      {section.subtext?.[safeLang] && (
        <p className="mt-4 text-sm text-gray-600 sm:text-base max-w-2xl">
          {section.subtext[safeLang]}
        </p>
      )}

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((ins) => {
          const carValue =
            ins.car && ins.car.trim() !== "" && ins.car.trim() !== "–"
              ? ins.car
              : "–";

          return (
            <article
              key={ins.name}
              className="rounded-2xl bg-white border border-black/5 p-5 transition hover:shadow-sm"
            >
              {/* Bilde med avrundede kanter (som hero) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[var(--surface)]">
                <Image
                  src={ins.image}
                  alt={ins.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Navn + tittel */}
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {ins.name}
              </h3>
              <p className="text-sm text-gray-600 italic">
                {ins.title[safeLang]}
              </p>

              {/* Ekstra info */}
              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-medium">{labels.car[safeLang]}:</span>{" "}
                  {carValue}
                </p>

                {ins.languages?.length ? (
                  <p>
                    <span className="font-medium">
                      {labels.languages[safeLang]}:
                    </span>{" "}
                    {ins.languages.join(", ")}
                  </p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
