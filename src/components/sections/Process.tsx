import { siteConfig } from "@/data/siteConfig";

export default function Process() {
  if (!siteConfig.features.prices) return null;
  return (
    <section>
      <h2>Veien til førerkortet</h2>
      <p>
        Her er en enkel oversikt over de vanligste stegene på veien mot
        førerkortet.
      </p>

      <ol style={{ marginTop: 16, paddingLeft: 20 }}>
        {siteConfig.process.map((step) => (
          <li key={step} style={{ marginBottom: 8 }}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
