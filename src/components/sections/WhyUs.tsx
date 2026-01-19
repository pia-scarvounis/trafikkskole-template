import { siteConfig } from "@/data/siteConfig";

export default function WhyUs() {
  const { whyUs } = siteConfig;

  return (
    <section>
      <h2>{whyUs.heading}</h2>

      <ul style={{ marginTop: 12 }}>
        {whyUs.points.map((point) => (
          <li key={point} style={{ marginBottom: 8 }}>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
