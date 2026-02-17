Trafikkskole – nettsidemal
Next.js + Tailwind
Hva er dette?
En gjenbrukbar nettsidemal for trafikkskoler.
Bygget med:
Next.js (App Router)
React
Tailwind CSS
TypeScript
Versjon 1 har ingen backend (kontakt via mailto:).
Hensikt med malen
Målet er å:
Bruke samme kodebase for flere kunder
Endre innhold uten å røre komponentkode
Slå funksjoner av/på via konfigurasjon
Struktur og arkitektur
1. All kundetekst ligger i siteConfig
Fil:
src/data/siteConfig.ts
Her ligger:
Overskrifter
Tekster
FAQ
Priser
Reviews
Språkinnhold
Komponentene renderer kun data.
Ingen hardkodet kundetekst i komponentene.
For ny kunde trenger man i praksis bare å:
Endre siteConfig.ts
Justere feature flags
2. Feature flags
I siteConfig finnes:
features: {
  languageSwitch: true,
  hero: true,
  services: true,
  reviews: true,
  faq: true,
  contact: true,
  footer: true,
}
Brukes slik i komponenter:
if (!siteConfig.features.reviews) return null;
Dette gjør at:
Seksjoner kan skjules uten å endre kode
Samme mal kan brukes for enkle og avanserte kunder
Styling-struktur (malvennlig)
For å gjøre malen enklere å vedlikeholde er styling standardisert.
Section-komponent
Alle hovedseksjoner rendres gjennom:
components/ui/Section.tsx
Den støtter:
variant="odd"
variant="even"
Dette gir kontrollert annenhver seksjonsbakgrunn.
Globale CSS-variabler
I:
src/app/globals.css
Defineres blant annet:
--brand
--surface
--section-odd
--section-even
Dette gjør at:
Farger kan endres ett sted
Design kan justeres uten å endre komponentlogikk
Malen blir mer skalerbar
Språkstøtte (NO / EN)
LanguageContext
Fil:
src/context/LanguageContext.tsx
Inneholder:
lang
setLang
lagring i localStorage
Appen pakkes i:
<LanguageProvider>
  {children}
</LanguageProvider>
Default språk:
<html lang="no">
LanguageToggle
Fil:
src/components/ui/LanguageToggle.tsx
Vises kun hvis:
siteConfig.features.languageSwitch === true
Ingen separate kodebaser per kunde.
Ingen automatisk oversettelse
All tekst legges manuelt i siteConfig.
Dette gir:
Full kontroll
Bedre kvalitet
Ingen tredjepartsavhengigheter
Seksjonsmønster
Alle seksjoner følger samme prinsipp:
Data fra siteConfig
Feature flag
Språk via useLanguage()
Wrapper via Section
Eksempel:
FAQ
Accordion
Ett spørsmål åpent om gangen
Struktur:
question: { no, en }
answer: { no, en }
Mobil først
Designet er mobile-first.
Responsive seksjoner
Hamburger-meny på mobil
Samme struktur desktop/mobil
Kontakt (v1)
Telefon (tel:)
E-post (mailto:)
Skjema åpner e-postklient
Backend kan legges til senere.
Prosjektstruktur
src/
  app/
  components/
    sections/
    ui/
  context/
  data/
    siteConfig.ts
Starte prosjektet lokalt
npm install
npm run dev
Mulig videreutvikling
SEO
API-basert kontaktskjema
URL-basert språk (/en)
Branding per kunde
Publisering som kommersiell mal
Kort oppsummert
Denne malen er laget for:
Gjenbruk
Kontroll
Fleksibilitet
Enkelt vedlikehold
Ny kunde = endre siteConfig, ikke komponentene.