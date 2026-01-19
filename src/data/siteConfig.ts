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

export type SiteConfig = {
  brand: {
    name: string;
    phone: string;
    email: string;
    location: string;
  };
  hero: {
    headline: string;
    subtext: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  services: Service[];
  process: string[];
  prices: PriceItem[];
  faq: FAQItem[];
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "Trafikkskole Navn",
    phone: "99 99 99 99",
    email: "post@trafikkskole.no",
    location: "Oslo",
  },
  hero: {
    headline: "Klar for førerkortet?",
    subtext:
      "Vi hjelper deg hele veien – fra første kjøretime til oppkjøring.",
    primaryCta: {
      label: "Bestill kjøretime",
      href: "#kontakt",
    },
    secondaryCta: {
      label: "Kontakt oss",
      href: "#kontakt",
    },
  },
  services: [
    {
      title: "Kjøretimer",
      description:
        "Fleksible kjøretimer tilpasset ditt nivå og dine behov.",
      cta: {
        label: "Bestill kjøretime",
        href: "#kontakt",
      },
    },
    {
      title: "Kurs",
      description:
        "Vi tilbyr alle obligatoriske kurs du trenger for førerkort klasse B.",
      cta: {
        label: "Se kurs",
        href: "#kontakt",
      },
    },
    {
      title: "Oppkjøring",
      description:
        "Vi forbereder deg grundig til oppkjøring slik at du møter trygg og forberedt.",
      cta: {
        label: "Kontakt oss",
        href: "#kontakt",
      },
    },
  ],
  process: [
    "Trafikalt grunnkurs",
    "Kjøretimer og trinnvurdering",
    "Obligatoriske kurs",
    "Oppkjøring",
  ],
  prices: [
    {
      title: "Kjøretime (45 min)",
      price: "850 kr",
    },
    {
      title: "Trafikalt grunnkurs",
      price: "Fra 2 000 kr",
    },
    {
      title: "Leie av bil til førerprøve",
      price: "4 900 kr",
    },
  ],
  faq: [
    {
      question: "Hvem trenger trafikalt grunnkurs?",
      answer:
        "Alle under 25 år må ta trafikalt grunnkurs før de kan øvelseskjøre.",
    },
    {
      question: "Hvor lang tid tar det å ta førerkort?",
      answer:
        "Dette varierer fra elev til elev. Vi lager en plan tilpasset ditt nivå.",
    },
    {
      question: "Kan jeg ta kurs og kjøretimer på engelsk?",
      answer:
        "Ja, vi tilbyr både kjøretimer og kurs på engelsk.",
    },
  ],
};
