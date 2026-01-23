Trafikkskole – nettsidemal (Next.js + Tailwind)

Dette prosjektet er en gjenbrukbar nettsidemal for trafikkskoler, bygget med Next.js (App Router) og Tailwind CSS.

Målet med malen er å gjøre det enkelt å:
* selge og gjenbruke samme kodebase for flere kunder
* tilpasse innhold uten å endre komponentkode
* slå av/på funksjonalitet per kunde via konfigurasjon

Teknologi
* Next.js (App Router)
* React
* Tailwind CSS
* TypeScript
* Ingen backend i v1 (kontakt via mailto:)

Kjerneprinsipper i malen
1. All kundetekst ligger i siteConfig
All tekst som kunden skal kunne endre (overskrifter, beskrivelser, FAQ, priser osv.) ligger i:
src/data/siteConfig.ts
Komponentene renderer kun data – de inneholder ingen hardkodet kundetekst.

Nye kunder trenger i praksis bare å:
endre siteConfig.ts
evt. slå av/på seksjoner via feature flags
2. Feature flags – slå funksjoner av/på uten kodeendringer
I siteConfig finnes et features-objekt:
features: {
  languageSwitch: true,
  hero: true,
  services: true,
  reviews: true,
  faq: true,
  contact: true,
  footer: true,
}
Dette gjør det mulig å:
skjule hele seksjoner (f.eks. reviews eller FAQ)
tilby valgfrie funksjoner per kunde
bruke samme kodebase for “enkle” og “avanserte” kunder
Dette mønsteret brukes konsekvent i komponentene:
if (!siteConfig.features.reviews) return null;

Språkstøtte (Norsk / English)
Mål
Bygge et språkfundament som:
er enkelt å gjenbruke i en mal
kan skrus av/på per kunde
ikke låser design eller arkitektur for tidlig

1. Global språk-state med React Context
Språk håndteres via en React Context:
src/context/LanguageContext.tsx
Contexten inneholder:
lang ("no" | "en")
setLang(...)
lagring i localStorage
Hvorfor Context?
Språk brukes i mange seksjoner (Hero, Services, FAQ, Contact osv.)
Context unngår “prop drilling”
localStorage gjør at valgt språk huskes mellom besøk
Default språk er norsk ("no").

2. Appen pakkes med LanguageProvider
I src/app/layout.tsx:
<LanguageProvider>
  {children}
</LanguageProvider>
Dette gjør at hele applikasjonen har tilgang til språk-state.
Vi bruker også:
<html lang="no">
som fornuftig default for en norsk mal.

  3. LanguageToggle – valgfri per kunde
Språkvelgeren ligger i:
src/components/ui/LanguageToggle.tsx
Den:
Leser feature flag:
if (!siteConfig.features.languageSwitch) return null;
Bytter språk via setLang(...)
Resultat:
Kunden kan ha koden liggende klar
men språkvelgeren vises kun hvis languageSwitch: true
Ingen separate kodebaser per kunde.

4. Ingen automatisk oversettelse (bevisst valg)
Alle tekster legges manuelt inn i siteConfig
Ingen Google Translate / auto-oversettelse
Dette gir:
bedre språkkvalitet
mindre juridisk risiko
full kontroll per kunde
Arkitekturen er den samme som brukes i profesjonelle løsninger.

Seksjoner og mønstre

FAQ
Accordion-basert FAQ
Kun ett spørsmål åpent om gangen (openIndex)
Innhold fra siteConfig.faq
Flerspråklig struktur:
question: { no, en }
answer: { no, en }
Reviews (Anmeldelser)
Innhold fra siteConfig.reviews
Manuell stjernerating (★★★★★)
Seksjonen bruker korrekt id="anmeldelser" for ankerscroll

Why Us / Process / Prices / Contact
Samme mønster:
innhold i siteConfig
feature flag
språksensitiv tekst via useLanguage()
Mobil først
Alle seksjoner er bygget responsivt
Majoriteten av brukere for slike sider er mobilbrukere
Hamburger-meny brukes på mobil
Desktop og mobil deler samme innholdsstruktur
Kontakt
Kontakt i v1:
Telefon (tel:)
E-post (mailto:)
Skjema som åpner e-postklient
Dette gjør løsningen:
enkel
backend-fri
lett å utvide senere (API, skjema, CRM)
Struktur (kort)
src/
  app/
  components/
    sections/
    ui/
  context/
  data/
    siteConfig.ts

Hvordan starte prosjektet lokalt
npm install
npm run dev
Videre arbeid (valgfritt)
SEO-forbedringer
Ekte kontaktskjema (API)
URL-baserte språk (/en)
Logo/branding per kunde
Publisering som kommersiell mal
Oppsummering
Denne malen er bygget for:
gjenbruk
fleksibilitet
kontroll
profesjonell videreutvikling
Nye kunder = endre siteConfig, ikke kode.
