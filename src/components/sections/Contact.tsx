"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  if (!siteConfig.features.contact) return null;
  const { brand, contact } = siteConfig;
  const { lang } = useLanguage();

  return (
    <section id="kontakt">
      <h2>{contact.heading[lang]}</h2>
      <p>{contact.subtext[lang]}</p>

      <div style={{ marginTop: 16 }}>
        <p>
          <strong>Telefon:</strong>{" "}
          <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
        </p>
        <p>
          <strong>E-post:</strong>{" "}
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </p>
        <p>
          <strong>Sted:</strong> {brand.location}
        </p>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>Ring oss</a>
        <a href={`mailto:${brand.email}`}>Send e-post</a>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Send oss en melding</h3>
        <p style={{ marginTop: 6 }}>
          Dette skjemaet åpner e-postprogrammet ditt (ingen innlogging eller backend i v1).
        </p>

        <form
          style={{ display: "grid", gap: 10, marginTop: 12, maxWidth: 520 }}
          action={`mailto:${brand.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Navn
            <input name="Navn" type="text" style={{ width: "100%" }} />
          </label>

          <label>
            Telefon
            <input name="Telefon" type="text" style={{ width: "100%" }} />
          </label>

          <label>
            Melding
            <textarea name="Melding" rows={4} style={{ width: "100%" }} />
          </label>

          <button type="submit">Send melding</button>
        </form>
      </div>
    </section>
  );
}
