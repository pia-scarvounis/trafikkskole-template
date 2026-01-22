// src/data/siteConfig.ts

export type LocalizedText = {
  no: string;
  en: string;
};

export type NavItem = {
  label: LocalizedText; // kan gjøres LocalizedText senere
  href: string;
};

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
    alt: LocalizedText;
  };
};

export type PriceItem = {
  title: string;
  price: string;
  description?: string;
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
  alt: string;
};

export type FeatureFlags = {
  languageSwitch: boolean;

  hero: boolean;
  services: boolean;
  process: boolean;
  prices: boolean;
  whyUs: boolean;
  reviews: boolean;
  faq: boolean;
  contact: boolean;
  footer: boolean;
};

export type SiteConfig = {
  brand: {
    name: string;
    phone: string;
    email: string;
    location: string;
  };

  features: FeatureFlags;

  nav: NavItem[];

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
    name: "Paulos trafikkskole",
    phone: "99 99 99 99",
    email: "post@trafikkskole.no",
    location: "Oslo",
  },

  features: {
    languageSwitch: true,

    hero: true,
    services: true,
    process: true,
    prices: true,
    whyUs: true,
    reviews: true,
    faq: true,
    contact: true,
    footer: true,
  },

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
        en: "Blabla, answer in English.",
      },
    },
       {
      question: {
        no: "Hva er reglene for avbestilling av kjøretimer?",
        en: "What is your cancellation policy",
      },
      answer: {
        no: "Kjøretimer må avbestilles 24 timer før avtalt tidspunkt. For sen avbestilling kan belastes i henhold til våre vilkår",
        en: "Driving lessons must be cancelled at least 24h before the scheduled time. Late canecellations may be charged according to our terms",
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
