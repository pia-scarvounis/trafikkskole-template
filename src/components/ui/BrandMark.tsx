"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

type BrandMarkProps = {
  href?: string;           // default "#top"
  size?: "sm" | "md";      // default "md"
  showName?: boolean;      // default false (header der er logo-only)
  className?: string;
};

export default function BrandMark({
  href = "#top",
  size = "md",
  showName = false,
  className = "",
}: BrandMarkProps) {
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const logoSrc = siteConfig.brand.logo?.src ?? "/icons/din-skole-logo.svg";
  const logoAlt = siteConfig.brand.logo?.alt?.[safeLang] ?? siteConfig.brand.name;

  const widthClass = size === "sm" ? "w-[140px] sm:w-[150px]" : "w-[150px] sm:w-[170px]";
  const heightClass = size === "sm" ? "h-9" : "h-10";

  return (
    <a href={href} className={`flex items-center gap-3 whitespace-nowrap ${className}`}>
      <div className={`relative ${heightClass} ${widthClass}`}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          className="object-contain"
          priority={size === "md"} // header-opplevelse
        />
      </div>

      {showName && (
        <span className="text-sm sm:text-base font-semibold text-gray-900">
          {siteConfig.brand.name}
        </span>
      )}
    </a>
  );
}
