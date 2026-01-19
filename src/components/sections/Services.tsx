import { siteConfig } from "@/data/siteConfig";

export default function Services() {
  return (
    <section>
      <h2>Tjenester</h2>
      <p>
        Vi tilbyr kjøretimer, kurs og oppkjøringsforberedelse - tilpasset ditt
        nivå og dine mål.
      </p>

      <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
        {siteConfig.services.map((service) => (
          <div
            key={service.title}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.cta.href}>{service.cta.label}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
