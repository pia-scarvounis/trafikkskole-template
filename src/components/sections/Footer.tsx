"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  if (!siteConfig.features.footer) return null;

  const { brand, footer } = siteConfig;
  const { lang } = useLanguage();

  return (
    <footer
      style={{
        borderTop: "1px solid #333",
        marginTop: 40,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div style={{ display: "grid", gap: 6 }}>
        <div>
          © {new Date().getFullYear()} {brand.name}
        </div>
        <div>
          {footer.orgLabel[lang]}: {footer.orgNumber}
        </div>
        <a href={footer.privacyHref}>{footer.privacyLabel[lang]}</a>
      </div>
    </footer>
  );
}
