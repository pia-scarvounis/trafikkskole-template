"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Prices() {
  const [showAll, setShowAll] = useState(false);

  const visiblePrices = showAll
    ? siteConfig.prices
    : siteConfig.prices.slice(0, 3);

  return (
    <section>
      <h2>Priser</h2>
      <p>Oversikt over våre mest brukte tjenester og kurs.</p>

      <ul style={{ marginTop: 16 }}>
        {visiblePrices.map((item) => (
          <li
            key={item.title}
            style={{
              marginBottom: 12,
              borderBottom: "1px solid #eee",
              paddingBottom: 8,
            }}
          >
            <strong>{item.title}</strong> – {item.price}
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>

      {siteConfig.prices.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          style={{ marginTop: 12 }}
        >
          {showAll ? "Skjul priser" : "Vis flere priser"}
        </button>
      )}
    </section>
  );
}

