"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const t = useMemo(
    () => ({
      menu: safeLang === "no" ? "Meny" : "Menu",
      close: safeLang === "no" ? "Lukk" : "Close",
      contact: safeLang === "no" ? "Kontakt" : "Contact",
    }),
    [safeLang]
  );

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          {/* Rounded container */}
          <div className="flex items-center h-16 rounded-full bg-white border border-black/5 shadow-sm px-4 sm:px-6">
            
            {/* LOGO (kun logo, ingen dobbel tekst) */}
            <a href="#top" className="flex items-center whitespace-nowrap">
              <div className="relative h-10 w-[150px] sm:w-[170px]">
                <Image
                  src="/icons/din-skole-logo.svg"
                  alt={siteConfig.brand.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex flex-1 justify-center gap-8">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition whitespace-nowrap"
                >
                  {item.label[safeLang]}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="ml-auto flex items-center gap-4">

              {/* Language toggle (desktop) */}
              <div className="hidden lg:block">
                <LanguageToggle />
              </div>

              {/* Contact button (desktop) */}
              <a
                href="#kontakt"
                className="hidden lg:inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition"
              >
                {t.contact}
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[var(--surface)] transition"
              >
                {t.menu}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50">
          
          {/* Overlay */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          />

          {/* Slide panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl p-6 border-l border-black/10">
            
            {/* Logo + close */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative h-10 w-[160px]">
                <Image
                  src="/icons/din-skole-logo.svg"
                  alt={siteConfig.brand.name}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[var(--surface)] transition"
              >
                {t.close}
              </button>
            </div>

            {/* Language toggle mobile */}
            <div className="mb-6">
              <LanguageToggle />
            </div>

            {/* Contact button mobile */}
        {/* Contact button mobile */}
<a
  href="#kontakt"
  onClick={() => setOpen(false)}
  className="mb-5 inline-flex w-full items-center justify-start rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
>
  {t.contact}
</a>

            {/* Nav links mobile */}
            <nav className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-medium border border-black/10 hover:bg-[var(--surface)] transition"
                >
                  {item.label[safeLang]}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
