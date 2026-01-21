"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq">
      <h2>Ofte stilte spørsmål</h2>
      <p>Her finner du svar på noen av de vanligste spørsmålene.</p>

      <div style={{ marginTop: 16 }}>
        {siteConfig.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              style={{
                border: "1px solid #eee",
                borderRadius: 8,
                padding: 12,
                marginBottom: 10,
              }}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "left",
                  fontWeight: 600,
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <span>{item.question}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <p style={{ marginTop: 10, marginBottom: 0 }}>{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
