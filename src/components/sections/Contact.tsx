// src/components/sections/Contact.tsx
"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  if (!siteConfig.features.contact) return null;

  const { brand, contact } = siteConfig;
  const { lang } = useLanguage();

  // Språk-fallback (samme mønster som WhyUs)
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  /**
   * VIKTIG:
   * Dette er eneste stedet som må endres senere
   * når vi kobler på ekte løsning (API, e-post, etc.)
   */
  const formAction = `mailto:${brand.email}`; // ← senere: "/api/contact" eller ekstern URL

  return (
    <section id="kontakt" className="py-28 bg-[#EAF6F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Overskrift */}
        <h2 className="text-3xl font-semibold text-gray-900">
          {contact.heading[safeLang]}
        </h2>

        <p className="mt-4 text-gray-700">
          {contact.subtext[safeLang]}
        </p>

        {/* Kontaktinfo */}
        <div className="mt-8 space-y-2 text-gray-800">
          <p>
            <strong>Telefon:</strong>{" "}
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="underline"
            >
              {brand.phone}
            </a>
          </p>

          <p>
            <strong>E-post:</strong>{" "}
            <a href={`mailto:${brand.email}`} className="underline">
              {brand.email}
            </a>
          </p>

          <p>
            <strong>Sted:</strong> {brand.location}
          </p>
        </div>

        {/* CTA-knapper */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium"
          >
            {safeLang === "no" ? "Ring oss" : "Call us"}
          </a>

          <a
            href={`mailto:${brand.email}`}
            className="px-5 py-2 rounded-full border border-gray-900 text-sm font-medium"
          >
            {safeLang === "no" ? "Send e-post" : "Send email"}
          </a>
        </div>

        {/* Skjema */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900">
            {safeLang === "no" ? "Send oss en melding" : "Send us a message"}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {safeLang === "no"
              ? "Skjemaet åpner e-postprogrammet ditt (ingen backend i v1)."
              : "This form opens your email client (no backend in v1)."}
          </p>

          <form
            action={formAction}
            method="post"
            encType="text/plain"
            className="mt-6 grid gap-4 max-w-xl"
          >
            <label className="text-sm">
              {safeLang === "no" ? "Navn" : "Name"}
              <input
                name="Navn"
                type="text"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </label>

            <label className="text-sm">
              {safeLang === "no" ? "Telefon" : "Phone"}
              <input
                name="Telefon"
                type="text"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </label>

            <label className="text-sm">
              {safeLang === "no" ? "Melding" : "Message"}
              <textarea
                name="Melding"
                rows={4}
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </label>

            <button
              type="submit"
              className="mt-2 self-start px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-medium"
            >
              {safeLang === "no" ? "Send melding" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
