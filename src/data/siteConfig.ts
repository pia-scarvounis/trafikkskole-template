// src/data/siteConfig.ts

/**
 * siteConfig.ts
 * --------------------------------------------------------------------
 * Mal-prinsippene i dette prosjektet:
 *
 * 1) All kundetekst ligger i siteConfig (denne filen)
 *    - Komponentene skal i hovedsak bare "render" data herfra
 *    - Når vi selger malen, endrer nye kunder stort sett bare denne filen
 *
 * 2) Feature flags (features) styrer hva som vises
 *    - En kunde kan slå av/på seksjoner uten å endre komponentkode
 *    - Eksempel: features.reviews = false → Reviews-seksjonen rendres ikke
 *
 * 3) Språk løses med LocalizedText { no, en }
 *    - Komponenter bruker LanguageContext og henter tekst med: text[lang]
 *    - Dette gir kvalitet og kontroll (ingen automatisk oversettelse)
 *
 * 4) Seksjonstekster (heading/subtext/CTA) kan ligge i config
 *    - Da kan kunder endre overskrifter og CTA-tekster uten kodeendringer
 */

// ----------------------------
// Grunn-typer
// ----------------------------

export type LocalizedText = {
  no: string;
  en: string;
};

// Gjenbrukbar seksjonstittel/intro for mal.
// Kan brukes på tvers av seksjoner (Prices, FAQ, Reviews, Services osv.)
export type SectionText = {
  eyebrow?: LocalizedText; // liten tekst over heading (valgfritt)
  heading: LocalizedText;
  subtext?: LocalizedText; // kort forklaring under heading (valgfritt)
};

// Gjenbrukbar "lenke/knapp"-CTA (valgfritt i seksjoner)
export type LinkCTA = {
  label: LocalizedText;
  href: string;
};

// ----------------------------
// Navigasjon / CTA / innholdstyper
// ----------------------------

export type NavItem = {
  // Språksensitiv label i menyen (Header bruker item.label[lang])
  label: LocalizedText;
  href: string;
};

// CTA brukes bl.a. i Hero og Services
export type CTA = {
  label: LocalizedText;
  href: string;
};

export type Service = {
  title: LocalizedText;
  description: LocalizedText;
  cta: CTA;
  icon?: {
    src: string;
    alt: LocalizedText; // alt-tekst kan også være språksensitiv
  };
};

export type PriceItem = {
  // Prices-komponenten viser title/price/description på valgt språk
  title: LocalizedText;
  price: LocalizedText;
  description?: LocalizedText;
};

export type FAQItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type Review = {
  name: LocalizedText;
  text: LocalizedText;
};

export type WhyUs = {
  // Dette er foreløpig bare norsk i din mal.
  // Når dere vil: gjør heading + points til LocalizedText / to arrays (no/en).
  heading: string;
  points: string[];
};

export type FooterConfig = {
  orgNumber: string;
  privacyHref: string;
  privacyLabel: LocalizedText;
  orgLabel: LocalizedText;
};

export type HeroImage = {
  src: string;
  alt: string; // kan gjøres språksensitiv senere om ønskelig
};

// ----------------------------
// Feature flags (seksjoner som kan slås av/på)
// ----------------------------

export type FeatureFlags = {
  // Vis/skjul språkvelgeren (Norsk/English)
  languageSwitch: boolean;

  // Vis/skjul seksjoner
  hero: boolean;
  services: boolean;
  process: boolean;
  prices: boolean;
  fullPriceListCta: boolean,
  whyUs: boolean;
  reviews: boolean;
  faq: boolean;
  contact: boolean;
  footer: boolean;
};

// ----------------------------
// Hovedkonfig
// ----------------------------

export type SiteConfig = {
  brand: {
    name: string;
    phone: string;
    email: string;
    location: string;
  };

  // Feature flags styrer hva som rendres
  features: FeatureFlags;

  // Navigasjon i Header
  nav: NavItem[];

  // HERO (forside)
  hero: {
    headline: LocalizedText;
    subtext: LocalizedText;
    primaryCta: CTA;
    secondaryCta: CTA;
    image?: HeroImage;
  };

  // CONTACT (forside)
  contact: {
    heading: LocalizedText;
    subtext: LocalizedText;
  };

  // SERVICES (forside)
  services: Service[];

  // PROCESS (forside)
  // Foreløpig bare norsk. Kan bli { no: string[]; en: string[] } senere.
  process: string[];

  // PRICES (forside)
  // prices[] = prislinjene
  prices: PriceItem[];

  // Seksjonstekster for priser + valgfri CTA til full prisliste
  // Kunden kan fjerne fullPriceListCta hvis de ikke vil ha den.
  pricesSection?: SectionText & {
    fullPriceListCta?: LinkCTA;
  };

  // WHY US (forside)
  whyUs: WhyUs;

  // REVIEWS (forside)
  reviews: Review[];

  // FAQ (forside)
  faq: FAQItem[];

  // FOOTER
  footer: FooterConfig;
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Paulos trafikkskole",
    phone: "99 99 99 99",
    email: "post@trafikkskole.no",
    location: "Oslo",
  },

  features: {
    // Sett true for kunder som vil ha språkvalg i header
    languageSwitch: true,

    hero: true,
    services: true,
    process: true,
    prices: true,
    fullPriceListCta: true,
    whyUs: true,
    reviews: true,
    faq: true,
    contact: true,
    footer: true,
  },

  // NAV: språksensitive labels
  nav: [
    { label: { no: "Tjenester", en: "Services" }, href: "#tjenester" },
    { label: { no: "Priser", en: "Prices" }, href: "#priser" },
    { label: { no: "FAQ", en: "FAQ" }, href: "#faq" },
    { label: { no: "Kontakt", en: "Contact" }, href: "#kontakt" },
  ],

  hero: {
    headline: {
      no: "Klar for førerkortet?",
      en: "Ready to get your driver’s license?",
    },
    subtext: {
      no: "Vi hjelper deg hele veien - fra første kjøretime til oppkjøring.",
      en: "We guide you all the way - from your first lesson to the driving test.",
    },
    primaryCta: {
      label: { no: "Bestill kjøretime", en: "Book a lesson" },
      href: "#kontakt",
    },
    secondaryCta: {
      label: { no: "Kontakt oss", en: "Contact us" },
      href: "#kontakt",
    },
    image: {
      src: "/images/hero.jpg",
      alt: "Trafikkskole og elev i bil",
    },
  },

  contact: {
    heading: {
      no: "Kontakt oss",
      en: "Contact us",
    },
    subtext: {
      no: "Ta kontakt for å bestille kjøretimer eller kurs, eller hvis du har spørsmål.",
      en: "Get in touch to book lessons or courses, or if you have any questions.",
    },
  },

  services: [
    {
      icon: {
        src: "/icons/kjoretime.png",
        alt: { no: "Kjøretimer", en: "Driving lessons" },
      },
      title: { no: "Kjøretimer", en: "Driving lessons" },
      description: {
        no: "Individuell opplæring tilpasset nivå og progresjon.",
        en: "Individual training tailored to your level and progress.",
      },
      cta: {
        label: { no: "Bestill kjøretime", en: "Book a lesson" },
        href: "#kontakt",
      },
    },
    {
      icon: {
        src: "/icons/kurs.png",
        alt: { no: "Kurs", en: "Courses" },
      },
      title: { no: "Obligatoriske kurs", en: "Mandatory courses" },
      description: {
        no: "Vi guider deg trygt gjennom alle kurs du må ha.",
        en: "We guide you safely through all mandatory courses.",
      },
      cta: {
        label: { no: "Se kurs", en: "View courses" },
        href: "#kontakt",
      },
    },
    {
      icon: {
        src: "/icons/forerprove.png",
        alt: { no: "Førerprøve", en: "Driving test" },
      },
      title: { no: "Oppkjøringstrening", en: "Test preparation" },
      description: {
        no: "Forberedelse som gir trygghet på den store dagen.",
        en: "Preparation that builds confidence for the big day.",
      },
      cta: {
        label: { no: "Kontakt oss", en: "Contact us" },
        href: "#kontakt",
      },
    },
  ],

  // Process er foreløpig på norsk (kan oversettes senere)
  process: ["Velg girtype (manuell eller automat)", "Bestill time", "Kjør"],

  // PRICES: Seksjonstekst + valgfri CTA for "full prisliste"
  pricesSection: {
    heading: { no: "Priser", en: "Prices" },
    subtext: {
      no: "Oversikt over våre mest brukte tjenester og kurs.",
      en: "An overview of our most common services and courses.",
    },
    // Valgfri: kan fjernes hvis kunden ikke ønsker lenke/knapp
    fullPriceListCta: {
      label: { no: "Se full prisliste", en: "View full price list" },
      href: "/prisliste", // kan være en side, PDF, ekstern URL, eller #kontakt
    },
  },

  prices: [
    {
      title: { no: "Kjøretime", en: "Driving lesson" },
      price: { no: "Fra 850 kr", en: "From 850 NOK" },
      description: {
        no: "45 minutter med godkjent instruktør.",
        en: "45 minutes with a certified instructor.",
      },
    },
    {
      title: { no: "Obligatoriske kurs", en: "Mandatory courses" },
      price: { no: "Fra 2 000 kr", en: "From 2,000 NOK" },
      description: {
        no: "Pris varierer etter kurs og progresjon.",
        en: "Price varies by course and progress.",
      },
    },
    {
      title: { no: "Pakker", en: "Packages" },
      price: { no: "Fra 8 000 kr", en: "From 8,000 NOK" },
      description: {
        no: "Samlet opplæring til en gunstigere pris.",
        en: "Bundled training at a better overall price.",
      },
    },
  ],

  whyUs: {
    heading: "Hvorfor velge oss?",
    points: [
      "Godkjente og erfarne trafikklærere",
      "Opplæring tilpasset ditt nivå og tempo",
      "Fokus på trygg og effektiv progresjon",
    ],
  },

  reviews: [
    {
      name: { no: "Tidligere elev", en: "Former student" },
      text: {
        no: "Veldig trygg og effektiv opplæring. Følte meg godt ivaretatt hele veien.",
        en: "Very safe and effective training. I felt well taken care of throughout the entire process.",
      },
    },
    {
      name: { no: "Elev", en: "Student" },
      text: {
        no: "Tydelige instruktører og god oppfølging. Anbefales på det varmeste.",
        en: "Clear instructors and great follow-up. Highly recommended.",
      },
    },
    {
      name: { no: "Forelder", en: "Parent" },
      text: {
        no: "Profesjonell og ryddig trafikkskole. Veldig fornøyd med opplevelsen.",
        en: "Professional and well-organized driving school. Very satisfied with the experience.",
      },
    },
  ],

  faq: [
    {
      question: {
        no: "Hvem må ta trafikalt grunnkurs?",
        en: "Who needs to take the mandatory basic traffic course?",
      },
      answer: {
        no: "Alle under 25 år må ta trafikalt grunnkurs før de kan øvelseskjøre.",
        en: "If you are under 25, you must complete the basic traffic course before you can practice driving.",
      },
    },
    {
      question: {
        no: "Tilbyr dere kjøretimer på engelsk?",
        en: "Do you offer driving lessons in English?",
      },
      answer: {
        no: "Ja, vi tilbyr kjøretimer på engelsk.",
        en: "Yes, we offer driving lessons in English.",
      },
    },
    {
      question: {
        no: "Hvordan bestiller jeg kjøretimer?",
        en: "How do I book driving lessons?",
      },
      answer: {
        no: "Du kan bestille kjøretimer ved å kontakte oss via telefon, e-post eller ved å bruke bestillingsskjemaet på nettsiden vår.",
        en: "You can book driving lessons by contacting us via phone, email, or by using the booking form on our website.",
      },
    },
    {
      question: {
        no: "Hva er reglene for avbestilling av kjøretimer?",
        en: "What is your cancellation policy?",
      },
      answer: {
        no: "Kjøretimer må avbestilles 24 timer før avtalt tidspunkt. For sen avbestilling kan belastes i henhold til våre vilkår.",
        en: "Driving lessons must be cancelled at least 24 hours before the scheduled time. Late cancellations may be charged according to our terms.",
      },
    },
  ],

  footer: {
    orgNumber: "999 999 999",
    privacyHref: "/personvern",
    privacyLabel: { no: "Personvern", en: "Privacy" },
    orgLabel: { no: "Org.nr", en: "Org. no." },
  },
};
