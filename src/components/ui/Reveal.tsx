"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;

  /** Når den skal trigges. Standard er litt før elementet er helt synlig. */
  rootMargin?: string;

  /** Revealer kun én gang (standard: true) */
  once?: boolean;

  /** Delay i ms (nyttig i Hero for sync) */
  delayMs?: number;

  /** Variasjon */
  variant?: "default" | "heading" | "imageLeft";
};

export default function Reveal({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  once = true,
  delayMs = 0,
  variant = "default",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (delayMs > 0) {
            window.setTimeout(() => setVisible(true), delayMs);
          } else {
            setVisible(true);
          }
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, once, delayMs]);

  // Viktig: imageLeft bruker ikke .reveal i det hele tatt (unngår CSS-konflikt)
  const variantClass =
    variant === "heading"
      ? "reveal reveal--heading"
      : variant === "imageLeft"
      ? "reveal-image-left"
      : "reveal";

  return (
    <div
      ref={ref}
      className={[variantClass, visible ? "is-visible" : "", className].join(" ")}
    >
      {children}
    </div>
  );
}
