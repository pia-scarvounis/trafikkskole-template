"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { brand, nav } = siteConfig;
  const { lang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F2FBF8]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="#hero"
            className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50"
          >
            {brand.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

