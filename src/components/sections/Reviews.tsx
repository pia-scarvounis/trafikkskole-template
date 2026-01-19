import { siteConfig } from "@/data/siteConfig";

function Stars() {
  return (
    <div aria-label="5 av 5 stjerner" style={{ letterSpacing: 2 }}>
      ★★★★★
    </div>
  );
}

export default function Reviews() {
  const { reviews } = siteConfig;

  return (
    <section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 24,
          marginTop: 16,
        }}
      >
        {reviews.map((review, index) => (
          <div key={`${review.name}-${index}`} style={{ textAlign: "center" }}>
            <Stars />
            <h3 style={{ marginTop: 10 }}>{review.name}</h3>
            <p style={{ marginTop: 8 }}>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
