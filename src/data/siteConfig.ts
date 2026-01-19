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
  {
    title: "Oppfriskningstime",
    price: "800 kr",
  },
],

faq: [
  {
    question: "Hvem må ta trafikalt grunnkurs?",
    answer:
      "Alle under 25 år må ta trafikalt grunnkurs før de kan øvelseskjøre. Er du usikker på hva som gjelder for deg, hjelper vi deg gjerne.",
  },
  {
    question: "Hvilke kurs er obligatoriske for klasse B?",
    answer:
      "De fleste må gjennom trafikalt grunnkurs (hvis aktuelt), mørkekjøring, sikkerhetskurs på bane og sikkerhetskurs på vei. Vi hjelper deg med rekkefølge og plan.",
  },
  {
    question: "Hvor lang tid tar det å ta førerkort?",
    answer:
      "Det varierer fra elev til elev. Vi lager en plan basert på nivå, erfaring og hvor ofte du kan øve.",
  },
  {
    question: "Tilbyr dere kjøretimer på engelsk?",
    answer:
      "Ja, vi tilbyr kjøretimer (og eventuelt kurs) på engelsk. Ta kontakt, så finner vi en løsning som passer.",
  },
  {
    question: "Kan jeg leie bil til oppkjøring?",
    answer:
      "Ja, mange elever leier bil av oss til førerprøven. Vi anbefaler også forberedelse i forkant slik at du møter trygg og klar.",
  },
],

};
