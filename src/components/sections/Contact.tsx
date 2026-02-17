"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Contact() {
  if (!siteConfig.features.contact) return null;

  const { brand, contact } = siteConfig;
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const phoneHref = `tel:${brand.phone.replace(/\s/g, "")}`;
  const mailHref = `mailto:${brand.email}`;

  const mapEmbedUrl = brand.maps?.embedUrl;
  const mapsLink = brand.maps?.link;

 return (
  <Section id="kontakt" variant="even">
    {/* Gjør Contact bredere enn standard section-container */}
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* =========================
            VENSTRE: Toppinfo + Kart
           ========================= */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            {safeLang === "no" ? "Kontakt" : "Contact"}
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {contact.heading[safeLang]}
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            {contact.subtext[safeLang]}
          </p>

          <div className="mt-8 space-y-2 text-gray-800">
            <p>
              <strong>{safeLang === "no" ? "Telefon:" : "Phone:"}</strong>{" "}
              <a href={phoneHref} className="underline underline-offset-4">
                {brand.phone}
              </a>
            </p>

            <p>
              <strong>{safeLang === "no" ? "E-post:" : "Email:"}</strong>{" "}
              <a href={mailHref} className="underline underline-offset-4">
                {brand.email}
              </a>
            </p>

            <p>
              <strong>{safeLang === "no" ? "Sted:" : "Location:"}</strong>{" "}
              {brand.address?.[safeLang] ?? brand.location}
            </p>
          </div>

          {/* Kart-kort */}
          <div className="mt-10 rounded-2xl bg-white border border-black/5 overflow-hidden shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]">
            <div className="p-5 border-b border-black/5">
              <p className="text-sm font-semibold text-gray-900">
                {safeLang === "no" ? "Finn oss" : "Find us"}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {brand.address?.[safeLang] ?? brand.location}
              </p>

              {mapsLink && (
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-[var(--brand)] hover:underline"
                >
                  {safeLang === "no"
                    ? "Åpne i Google Maps"
                    : "Open in Google Maps"}{" "}
                  →
                </a>
              )}
            </div>

            {mapEmbedUrl ? (
              <div className="relative w-full h-[360px]">
                <iframe
                  title={safeLang === "no" ? "Kart" : "Map"}
                  src={mapEmbedUrl}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="p-6 text-sm text-gray-600">
                {safeLang === "no"
                  ? "Kart er ikke satt opp ennå (mangler brand.maps.embedUrl)."
                  : "Map is not set up yet (missing brand.maps.embedUrl)."}
              </div>
            )}
          </div>
        </div>

        {/* =========================
            HØYRE: Skjema
            ✅ Flyttes ned på desktop for å starte på linje med kartet
           ========================= */}
        <div className="lg:mt-[190px] rounded-2xl bg-white border border-black/5 p-8 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]">
          <h3 className="text-xl font-semibold text-gray-900">
            {safeLang === "no" ? "Send oss en melding" : "Send us a message"}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {safeLang === "no"
              ? "Dette skjemaet åpner e-postprogrammet ditt (ingen backend i v1)."
              : "This form opens your email client (no backend in v1)."}
          </p>

          <form
            className="mt-6 grid gap-5"
            action={mailHref}
            method="post"
            encType="text/plain"
          >
            <label className="text-sm text-gray-900">
              {safeLang === "no" ? "Navn" : "Name"}
              <input
                name={safeLang === "no" ? "Navn" : "Name"}
                type="text"
                className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
            </label>

            <label className="text-sm text-gray-900">
              {safeLang === "no" ? "Telefon" : "Phone"}
              <input
                name={safeLang === "no" ? "Telefon" : "Phone"}
                type="text"
                className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
            </label>

            <label className="text-sm text-gray-900">
              {safeLang === "no" ? "E-post" : "Email"}
              <input
                name={safeLang === "no" ? "E-post" : "Email"}
                type="email"
                className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
            </label>

            <label className="text-sm text-gray-900">
              {safeLang === "no" ? "Melding" : "Message"}
              <textarea
                name={safeLang === "no" ? "Melding" : "Message"}
                rows={6}
                className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              {safeLang === "no" ? "Send melding" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </Section>
);

 
}
