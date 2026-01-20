// src/data/siteConfig.ts

export type CTA = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  cta: CTA;
};

export type PriceItem = {
  title: string;
  price: string;
  description?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Review = {
  name: string;
  text: string;
};

export type WhyUs = {
  heading: string;
  points: string[];
};

export type FooterConfig = {
  orgNumber: string;
  privacyHref: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

export type FeatureFlags = {
  languageSwitch: boolean;
};

export type LocalizedText = {
  no: string;
  en: string;
};

export type SiteConfig = {
  brand: {
    name: string;
    phone: string;
    email: string;
    location: string;
  };

  features: FeatureFlags;

  hero: {
    headline: LocalizedText;
    subtext: LocalizedText;
    primaryCta: CTA;
    secondaryCta: CTA;
    image?: HeroImage;
  };

  contact: {
    heading: LocalizedText;
    subtext: LocalizedText;
  };

  services: Service[];
  process: string[];
  prices: PriceItem[];
  whyUs: WhyUs;
  reviews: Review[];
  faq: FAQItem[];

  footer: FooterConfig;
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Trafikkskole Navn",
    phone: "99 99 99 99",
    email: "post@trafikkskole.no",
    location: "Oslo",
  },

  features: {
    // Sett true for kunder som vil ha språkvalg i header
    languageSwitch: true,
  },

  hero: {
    headline: {
      no: "Klar for førerkortet?",
      en: "Ready to get your driver’s license?",
    },
    subtext: {
      no: "Vi hjelper deg hele veien – fra første kjøretime til oppkjøring.",
      en: "We guide you all the way — from your first lesson to the driving test.",
    },
    primaryCta: {
      label: "Bestill kjøretime",
      href: "#kontakt",
    },
    secondaryCta: {
      label: "Kontakt oss",
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
      title: "Kjøretimer",
      description: "Individuell opplæring tilpasset nivå og progresjon.",
      cta: {
        label: "Bestill kjøretime",
        href: "#kontakt",
      },
    },
    {
      title: "Obligatoriske kurs",
      description: "Vi guider deg trygt gjennom alle kurs du må ha.",
      cta: {
        label: "Se kurs",
        href: "#kontakt",
      },
    },
    {
      title: "Oppkjøringstrening",
      description: "Forberedelse som gir trygghet på den store dagen.",
      cta: {
        label: "Kontakt oss",
        href: "#kontakt",
      },
    },
  ],

  process: ["Velg girtype (manuell eller automat)", "Bestill time", "Kjør"],

  prices: [
    {
      title: "Kjøretime",
      price: "Fra 850 kr",
      description: "45 minutter med godkjent instruktør.",
    },
    {
      title: "Obligatoriske kurs",
      price: "Fra 2 000 kr",
      description: "Pris varierer etter kurs og progresjon.",
    },
    {
      title: "Pakker",
      price: "Fra 8 000 kr",
      description: "Samlet opplæring til en gunstigere pris.",
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
      name: "Tidligere elev",
      text: "Veldig trygg og effektiv opplæring. Følte meg godt ivaretatt hele veien.",
    },
    {
      name: "Elev",
      text: "Tydelige instruktører og god oppfølging. Anbefales på det varmeste.",
    },
    {
      name: "Forelder",
      text: "Profesjonell og ryddig trafikkskole. Veldig fornøyd med opplevelsen.",
    },
  ],

  faq: [
    {
      question: "Hvem må ta trafikalt grunnkurs?",
      answer:
        "Alle under 25 år må ta trafikalt grunnkurs før de kan øvelseskjøre. Er du usikker på hva som gjelder for deg, hjelper vi deg gjerne.",
    },
    {
      question: "Hvor lang tid tar det å ta førerkort?",
      answer:
        "Det varierer fra elev til elev. Vi lager en plan basert på nivå, erfaring og hvor ofte du kan øve.",
    },
    {
      question: "Tilbyr dere kjøretimer på engelsk?",
      answer: "Ja, vi tilbyr kjøretimer (og eventuelt kurs) på engelsk.",
    },
    {
      question: "Kan jeg leie bil til oppkjøring?",
      answer: "Ja, mange elever leier bil av oss til førerprøven.",
    },
    {
      question: "Hvordan bestiller jeg kjøretimer?",
      answer:
        "Du kan ta kontakt med oss via telefon eller kontaktskjema, så hjelper vi deg i gang.",
    },
  ],

  footer: {
    orgNumber: "999 999 999",
    privacyHref: "/personvern",
  },
};
