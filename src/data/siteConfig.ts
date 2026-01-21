// src/data/siteConfig.ts

export type NavItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  cta: CTA;
  icon?: {
    src: string;
    alt: string;
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
  // Sett true for kunder som vil ha språkvalg i header
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
    { label: "Tjenester", href: "#tjenester" },
    { label: "Priser", href: "#priser" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
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

    icon: { src: "/icons/kjoretime.png", alt: "Kjøretimer" },
      title: "Kjøretimer",
      description: "Individuell opplæring tilpasset nivå og progresjon.",
      cta: {
        label: "Bestill kjøretime",
        href: "#kontakt",
      },
    },
    {
      icon: { src: "/icons/kurs.png", alt: "kurs"},
      title: "Obligatoriske kurs",
      description: "Vi guider deg trygt gjennom alle kurs du må ha.",
      cta: {
        label: "Se kurs",
        href: "#kontakt",
      },
    },
    {
      icon: { src: "/icons/forerprove.png", alt: "Førerprøve"},
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
      no: "Alle under 25 år må ta trafikalt grunnkurs før de kan øvelseskjøre. Er du usikker på hva som gjelder for deg, hjelper vi deg gjerne.",
      en: "If you are under 25, you must complete the basic traffic course before you can practice driving. If you’re unsure what applies to you, we’re happy to help.",
    },
  },
  {
    question: {
      no: "Hvor lang tid tar det å ta førerkort?",
      en: "How long does it take to get a driver’s license?",
    },
    answer: {
      no: "Det varierer fra elev til elev. Vi lager en plan basert på nivå, erfaring og hvor ofte du kan øve.",
      en: "It varies from student to student. We’ll create a plan based on your level, experience, and how often you can practice.",
    },
  },
  {
    question: {
      no: "Tilbyr dere kjøretimer på engelsk?",
      en: "Do you offer driving lessons in English?",
    },
    answer: {
      no: "Ja, vi tilbyr kjøretimer (og eventuelt kurs) på engelsk.",
      en: "Yes, we offer driving lessons (and in some cases courses) in English.",
    },
  },
  {
    question: {
      no: "Kan jeg leie bil til oppkjøring?",
      en: "Can I rent a car for the driving test?",
    },
    answer: {
      no: "Ja, mange elever leier bil av oss til førerprøven. Ta kontakt, så finner vi en løsning som passer.",
      en: "Yes, many students rent a car from us for the driving test. Get in touch and we’ll find a solution that fits.",
    },
  },
  {
    question: {
      no: "Hvordan bestiller jeg kjøretimer?",
      en: "How do I book driving lessons?",
    },
    answer: {
      no: "Du kan ta kontakt med oss via telefon eller kontaktskjema, så hjelper vi deg i gang.",
      en: "You can contact us by phone or through the contact form, and we’ll help you get started.",
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
