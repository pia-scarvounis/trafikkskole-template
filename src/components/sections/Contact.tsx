// src/components/sections/Contact.tsx
"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  if (!siteConfig.features.contact) return null;

  const { brand, contact } = siteConfig;
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  return (
    <section id="kontakt" className="bg-[#EAF6F1] py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          {safeLang === "no" ? "Kontakt" : "Contact"}
        </p>

        {/* Heading */}
        <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
          {contact.heading[safeLang]}
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600">{contact.subtext[safeLang]}</p>

        {/* Kontaktinfo */}
        <div className="mt-8 space-y-2 text-gray-800">
          <p>
            <strong>Telefon:</strong>{" "}
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="underline underline-offset-4"
            >
              {brand.phone}
            </a>
          </p>
          <p>
            <strong>E-post:</strong>{" "}
            <a
              href={`mailto:${brand.email}`}
              className="underline underline-offset-4"
            >
              {brand.email}
            </a>
          </p>
          <p>
            <strong>Sted:</strong> {brand.location}
          </p>
        </div>

        {/* CTA-knapper (mobil: stack, desktop: på linje) */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="w-full sm:w-auto text-center rounded-full bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            {safeLang === "no" ? "Ring oss" : "Call us"}
          </a>

          <a
            href={`mailto:${brand.email}`}
            className="w-full sm:w-auto text-center rounded-full border border-gray-400 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-white"
          >
            {safeLang === "no" ? "Send e-post" : "Send email"}
          </a>
        </div>

        {/* Skjema */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-gray-900">
            {safeLang === "no" ? "Send oss en melding" : "Send us a message"}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {safeLang === "no"
              ? "Dette skjemaet åpner e-postprogrammet ditt (ingen backend i v1)."
              : "This form opens your email client (no backend in v1)."}
          </p>

          <form
            className="mt-6 grid max-w-lg gap-4"
            action={`mailto:${brand.email}`}
            method="post"
            encType="text/plain"
          >
            <label className="text-sm">
              {safeLang === "no" ? "Navn" : "Name"}
              <input
                name="Navn"
                type="text"
                className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2"
              />
            </label>

            <label className="text-sm">
              {safeLang === "no" ? "Telefon" : "Phone"}
              <input
                name="Telefon"
                type="text"
                className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2"
              />
            </label>

            <label className="text-sm">
              {safeLang === "no" ? "Melding" : "Message"}
              <textarea
                name="Melding"
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2"
              />
            </label>

            <button
              type="submit"
              className="mt-4 w-full sm:w-auto rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              {safeLang === "no" ? "Send melding" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
