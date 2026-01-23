"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4">
          {/* ÉN rad: navn (venstre) | nav (midten) | språk + meny (høyre) */}
          <div className="flex items-center h-16">
            {/* Venstre */}
            <a href="#top" className="text-sm font-semibold text-gray-900 whitespace-nowrap">
              {siteConfig.brand.name}
            </a>

            {/* Midten (desktop) */}
            <nav className="hidden md:flex flex-1 justify-center gap-8">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
                >
                  {item.label[lang]}
                </a>
              ))}
            </nav>

            {/* Høyre */}
            <div className="ml-auto flex items-center gap-4">
              <div className="hidden md:block">
                <LanguageToggle />
              </div>

              <button
                onClick={() => setOpen(true)}
                className="md:hidden rounded-full border border-black/20 px-4 py-2 text-sm"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobilmeny */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <button
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[#F4FBF9] shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm font-semibold">{siteConfig.brand.name}</div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/20 px-4 py-2 text-sm"
              >
                Close
              </button>
            </div>

            {/* Språkvelger i mobilmeny */}
            <div className="mb-6">
              <LanguageToggle />
            </div>

            <nav className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white px-4 py-3 text-sm font-medium border border-black/5"
                >
                  {item.label[lang]}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
