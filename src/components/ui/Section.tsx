"use client";

import React from "react";

export type SectionVariant = "odd" | "even" | "white" | "surface";
export type DiagonalDirection = "ltr" | "rtl";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;

  variant?: SectionVariant;
  paddingClassName?: string;

  topDiagonal?: boolean;
  bottomDiagonal?: boolean;

  topDiagonalBgVariant?: SectionVariant;
  bottomDiagonalBgVariant?: SectionVariant;

  topDiagonalDirection?: DiagonalDirection;
  bottomDiagonalDirection?: DiagonalDirection;
};

function bgClass(variant: SectionVariant) {
  switch (variant) {
    case "even":
      return "bg-[var(--section-even)]";
    case "odd":
      return "bg-[var(--section-odd)]";
    case "surface":
      return "bg-[var(--surface)]";
    case "white":
    default:
      return "bg-[var(--white)]";
  }
}

function diagonalClip(kind: "top" | "bottom", dir: DiagonalDirection) {
  if (kind === "top") {
    return dir === "ltr"
      ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]"
      : "[clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]";
  }
  return dir === "ltr"
    ? "[clip-path:polygon(0_0,100%_55%,100%_100%,0_100%)]"
    : "[clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)]";
}

export default function Section({
  id,
  children,
  className = "",
  variant = "odd",

  /**
   * Baseline spacing:
   * - Mobil: stramt (det du ønsket)
   * - Desktop: som før (luftig)
   */
  paddingClassName = "pt-16 pb-12 sm:pt-20 sm:pb-20 lg:py-56"
,

  topDiagonal = false,
  bottomDiagonal = false,

  topDiagonalBgVariant,
  bottomDiagonalBgVariant,

  topDiagonalDirection = "rtl",
  bottomDiagonalDirection = "ltr",
}: Props) {
  const topBg = bgClass(topDiagonalBgVariant ?? variant);
  const bottomBg = bgClass(bottomDiagonalBgVariant ?? variant);

  // Diagonalhøyde (kun visuelt – ingen margin “space hacks”)
  const DIAGONAL_H = "h-10 sm:h-20 lg:h-28";

  return (
    <section
      id={id}
      className={[
        "relative",
        "overflow-visible",
        bgClass(variant),
        paddingClassName,
        className,
      ].join(" ")}
    >
      {/* TOP diagonal (over seksjonen) */}
      {topDiagonal && (
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-x-0 top-0",
            DIAGONAL_H,
            topBg,
            "z-0",
            diagonalClip("top", topDiagonalDirection),
            "translate-y-[-100%]",
          ].join(" ")}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* BOTTOM diagonal (under seksjonen) */}
      {bottomDiagonal && (
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-x-0 bottom-0",
            DIAGONAL_H,
            bottomBg,
            "z-0",
            diagonalClip("bottom", bottomDiagonalDirection),
            "translate-y-[100%]",
          ].join(" ")}
        />
      )}
    </section>
  );
}
