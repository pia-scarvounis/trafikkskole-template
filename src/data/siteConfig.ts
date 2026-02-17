// src/data/siteConfig.ts

/**
 * siteConfig.ts
 * --------------------------------------------------------------------
 * Mal-prinsippene i dette prosjektet:
 *
 * 1) All kundetekst ligger i siteConfig (denne filen)
 *    - Komponentene renderer primært data herfra
 *    - Når vi selger malen, endrer nye kunder stort sett bare denne filen
 *
 * 2) Feature flags (features) styrer hva som vises
 *    - Kunder kan slå av/på seksjoner uten å endre komponentkode
 *    - Eksempel: features.reviews = false → Reviews-seksjonen rendres ikke
 *
 * 3) Språk løses med LocalizedText { no, en }
 *    - Komponenter bruker LanguageContext og henter tekst med: text[lang]
 *    - Dette gir kvalitet og kontroll (ingen automatisk oversettelse)
 *
 * 4) Seksjonstekster (eyebrow/heading/subtext/CTA) ligger i config
 *    - Gir “mal-perfekt” oppsett: kunder kan endre alt uten å røre komponenter
 */

// ----------------------------
// Grunn-typer
// ----------------------------

export type LocalizedText = {
  no: string;
  en: string;
};

// Brukes for lister som skal være språksensitive (f.eks. process, whyUs.points)
export type LocalizedList = {
  no: string[];
  en: string[];
};

// PROCESS: brukes når vi vil ha trekkspill (title + details per steg)
export type ProcessStep = {
  title: string;
  details: string;
};

export type LocalizedProcess = {
  no: ProcessStep[];
  en: ProcessStep[];
};


// Gjenbrukbar seksjonstittel/intro for mal.
// Kan brukes på tvers av seksjoner (Process, Prices, FAQ, Reviews, Services osv.)
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
  label: LocalizedText; // Header bruker item.label[lang]
  href: string;
};

export type CTA = {
  label: LocalizedText;
  href: string;
};

export type Service = {
  title: LocalizedText;
  description: LocalizedText;

  // NYTT: prisfelt (valgfritt)
  price?: LocalizedText;

  // NYTT: punktliste (valgfritt)
  bullets?: {
    no: string[];
    en: string[];
  };

  cta: CTA;
  icon?: {
    src: string;
    alt: LocalizedText;
  };
};


export type PriceItem = {
  title: LocalizedText;
  price: LocalizedText;
  description?: LocalizedText;
};

export type LicenseClassItem = {
  code: string;
  title: string;
  description: string;
  icon?: string; // valgfri nå, sjekk dette etterpå
};


export type FAQItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type Review = {
  name: LocalizedText;
  text: LocalizedText;
};

/**
 * WhyUs:
 * - WhyUs.tsx bruker i dag whyUs.heading og whyUs.points + valgfri image
 * - For å gjøre config mer “som de andre komponentene”, legger vi også inn
 *   optional eyebrow/subtext her (komponenten kan ignorere det uten å krasje).
 */
export type WhyUs = {
  eyebrow?: LocalizedText; // valgfritt (matcher “SectionText”-mønsteret)
  heading: LocalizedText;
  subtext?: LocalizedText; // valgfritt
  points: LocalizedList;
  image?: {
    src: string;
    alt: LocalizedText;
  };
};

export type Instructor = {
  name: string;
  title: LocalizedText;
  image: string;
  car?: string;
  languages?: string[];
};

export type InstructorsSection = {
  heading: LocalizedText;
  subtext?: LocalizedText;
  instructors: Instructor[];  
};



export type FooterConfig = {
  orgNumber: string;
  privacyHref: string;
  privacyLabel: LocalizedText;
  orgLabel: LocalizedText;

  /**
   * Valgfri “credit” i footer.
   * - Bra for mal-leverandør (“Design by ...”)
   * - Kan fjernes (undefined) for white-label.
   */
  credit?: {
    label: string; // vanligvis ikke språksensitiv
    href: string;
  };
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
  licenseClasses: boolean;
  instructors: boolean;


  // Valgfri CTA i Prices-seksjonen (lenke til full prisliste)
  fullPriceListCta: boolean;

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

    // NYTT 
    address?: LocalizedText;

    // NYTT 
    maps?: {
      embedUrl?: string; // iframe-URL (Google maps embed)
      link?: string;     // klikkbar lenke til maps
    };
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

 
// PROCESS: språksensitiv liste + seksjonstekster (mal-perfekt)
// (trekkspill: title + details)
process: LocalizedProcess;
processSection?: SectionText;


  // PRICES: prislinjer + seksjonstekster + valgfri CTA
  prices: PriceItem[];
  pricesSection?: SectionText & {
    fullPriceListCta?: LinkCTA;
  };


  //  NY: Førerkortklasser
  licenseClassesSection?: SectionText;
  licenseClasses?: {
    no: LicenseClassItem[];
    en: LicenseClassItem[];
  };


  // WHY US: innhold (heading/points/image). (Optional eyebrow/subtext støttes i type.)
  whyUs: WhyUs;
  
// instructors 
  instructorsSection?: InstructorsSection;


  // Reviews og FAQ
  reviews: Review[];
  faq: FAQItem[];

  footer: FooterConfig;
};
export const siteConfig: SiteConfig = {
  brand: {
    name: "Din skole",
    phone: "99 99 99 99",
    email: "post@trafikkskole.no",
    location: "Oslo",

    address: {
      no: "Karl Johans gate 1, 0154 Oslo",
      en: "Karl Johans gate 1, 0154 Oslo",
    },

    maps: {
      embedUrl:
        "https://www.google.com/maps?q=Karl%20Johans%20gate%201%2C%200154%20Oslo&output=embed",
      link:
        "https://www.google.com/maps?q=Karl%20Johans%20gate%201%2C%200154%20Oslo",
    },
  },


  features: {
    languageSwitch: true,

    hero: true,
    services: true,
    process: true,
    prices: true,
    licenseClasses: true,
    fullPriceListCta: true,

    whyUs: true,
    instructors: true,
    reviews: true,
    faq: true,
    contact: true,
    footer: true,
  },

  /**
   * Viktig:
   * - Section ID-ene i komponentene må matche href her (ankerscroll).
   * - WhyUs.tsx har: <section id="hvorfor-oss" ...>
   *   Derfor må href være "#hvorfor-oss" om du vil ha den i menyen.
   */
nav: [
  {
    href: "#tjenester",
    label: { no: "Tjenester", en: "Services" },
  },
  {
    href: "#forerkortklasser",
    label: { no: "Førerkortklasser", en: "License classes" },
  },
  {
    href: "#priser",
    label: { no: "Priser", en: "Prices" },
  },
  {
    href: "#prosess",
    label: { no: "Prosess", en: "Process" },
  },
  {
    href: "#anmeldelser",
    label: { no: "Anmeldelser", en: "Reviews" },
  },
  {
    href: "#faq",
    label: { no: "FAQ", en: "FAQ" },
  },
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
    title: {
      no: "Startpakke – «Kom i gang»",
      en: "Starter package – “Get started”",
    },
    description: {
      no: "Perfekt for deg som vil teste skolen eller akkurat har begynt å øvelseskjøre.",
      en: "Perfect if you want to try the school or have just started practicing driving.",
    },
    price: {
      no: "4 500 kr",
      en: "4,500 NOK",
    },
    bullets: {
      no: [
        "3 x kjøretimer (45 min)",
        "Trinnvurdering trinn 2",
        "Uforpliktende rådgivning for videre løp",
      ],
      en: [
        "3 x driving lessons (45 min)",
        "Step 2 assessment",
        "Non-binding guidance for further training",
      ],
    },
    cta: {
      label: { no: "Bestill startpakke", en: "Book starter package" },
      href: "#kontakt",
    },
  },

  {
    title: {
      no: "Komplett pakke – «Mest populær»",
      en: "Complete package – “Most popular”",
    },
    description: {
      no: "Designet for å gi eleven og foreldre forutsigbarhet. Denne dekker alt det obligatoriske.",
      en: "Designed to give students and parents predictability. Covers all mandatory training.",
    },
    price: {
      no: "21 900 kr",
      en: "21,900 NOK",
    },
    bullets: {
      no: [
        "10 x kjøretimer (45 min)",
        "Sikkerhetskurs på bane (inkl. baneleie)",
        "Sikkerhetskurs på veg (langkjøring)",
        "Trinnvurdering trinn 2 og 3",
        "Leie av bil til oppkjøring",
      ],
      en: [
        "10 x driving lessons (45 min)",
        "Safety course on track (incl. track fee)",
        "Safety course on road (long-distance driving)",
        "Step 2 and 3 assessments",
        "Car rental for driving test",
      ],
    },
    cta: {
      label: { no: "Velg komplett pakke", en: "Choose complete package" },
      href: "#kontakt",
    },
  },

  {
    title: {
      no: "Fleksible enkelttimer",
      en: "Flexible single lessons",
    },
    description: {
      no: "For deg som trenger mengdetrening eller vil finpusse formen før førerprøven.",
      en: "For those who need extra practice or want to polish their skills before the driving test.",
    },
    price: {
      no: "Fra 850 kr",
      en: "From 850 NOK",
    },
    bullets: {
      no: [
        "Enkelttime (45 min): 850 kr",
        "Dobbelttime (90 min): 1 700 kr",
        "Leie av bil til oppkjøring: 2 500 kr",
      ],
      en: [
        "Single lesson (45 min): 850 NOK",
        "Double lesson (90 min): 1,700 NOK",
        "Car rental for driving test: 2,500 NOK",
      ],
    },
    cta: {
      label: { no: "Bestill enkelttime", en: "Book single lesson" },
      href: "#kontakt",
    },
  },
],


  // PROCESS (mal-perfekt): både innhold og seksjonstekster i config
// PROCESS (trekkspill): både innhold og seksjonstekster i config
processSection: {
  eyebrow: { no: "SLIK FUNGERER DET", en: "HOW IT WORKS" },
  heading: { no: "En enkel prosess", en: "A simple process" },
  subtext: {
    no: "Vi tilpasser opplæringen til nivået ditt og sørger for trygg progresjon.",
    en: "We tailor the training to your level and ensure safe progression.",
  },
},

process: {
  no: [
    {
      title: "Kontakt oss og avklar behov",
      details:
        "Vi tar en kort prat og finner ut hva du trenger: manuell/automat, nivå, erfaring og mål. Deretter foreslår vi et passende opplegg.",
    },
    {
      title: "Planlegg opplæringsløp",
      details:
        "Vi setter opp en plan med anbefalt rekkefølge på timer og kurs, og tilpasser etter timeplan, progresjon og hvor raskt du ønsker å bli klar.",
    },
    {
      title: "Kjøretimer og progresjon",
      details:
        "Du får strukturert opplæring med tydelige mål for hver time. Vi bygger ferdigheter steg for steg og gir konkrete tilbakemeldinger underveis.",
    },
    {
      title: "Trinnvurderinger ved behov",
      details:
        "Vi tar vurderinger underveis for å sjekke at du er klar for neste steg. Dette gir trygghet og gjør at du bruker timene effektivt.",
    },
    {
      title: "Obligatoriske kurs",
      details:
        "Når timingen er riktig i løpet ditt, booker vi nødvendige kurs slik at det passer med progresjonen og planen din.",
    },
    {
      title: "Oppkjøringstrening",
      details:
        "Mot slutten finpusser vi: kjøremønster, flyt, selvstendighet og typiske oppkjøringsruter. Du får tips til hva sensor ofte ser etter.",
    },
    {
      title: "Førerprøve / oppkjøring",
      details:
        "Når du er klar, hjelper vi med siste forberedelser og gjennomgang. Målet er at du møter trygg, rolig og godt forberedt til prøven.",
    },
  ],
  en: [
    {
      title: "Get in touch and clarify your needs",
      details:
        "We’ll briefly map your needs: manual/automatic, current level, experience and goals. Then we suggest a suitable plan.",
    },
    {
      title: "Create a training plan",
      details:
        "We plan lessons and courses in the right order, adapted to your schedule, progress and how quickly you want to be ready.",
    },
    {
      title: "Driving lessons and progress",
      details:
        "Structured lessons with clear goals each time. We build skills step by step and give concrete feedback along the way.",
    },
    {
      title: "Progress assessments as needed",
      details:
        "We do checkpoints when needed to ensure you’re ready for the next step. This improves confidence and efficiency.",
    },
    {
      title: "Mandatory courses",
      details:
        "When the timing is right, we book mandatory courses so they fit your learning progress and overall plan.",
    },
    {
      title: "Test preparation",
      details:
        "Near the end we polish everything: flow, independence, common routes and what examiners typically look for.",
    },
    {
      title: "Driving test",
      details:
        "When you’re ready, we help you with final preparations so you arrive calm, confident and well prepared.",
    },
  ],
},


  // PRICES (mal-perfekt)
  pricesSection: {
    eyebrow: { no: "PRISLISTE", en: "PRICE LIST" },
    heading: { no: "Priser", en: "Prices" },
    subtext: {
      no: "Oversikt over våre mest brukte tjenester og kurs.",
      en: "An overview of our most common services and courses.",
    },
    fullPriceListCta: {
      label: { no: "Se full prisliste", en: "View full price list" },
      href: "/prisliste",
    },
  },

prices: [
  {
    title: { no: "Kjøretime (45 min)", en: "Driving lesson (45 min)" },
    description: {
      no: "Ordinær kjøretime",
      en: "Standard driving lesson",
    },
    price: { no: "900 kr", en: "900 NOK" },
  },
  {
    title: { no: "Trinnvurdering trinn 2", en: "Step assessment 2" },
    description: {
      no: "Obligatorisk vurdering",
      en: "Mandatory assessment",
    },
    price: { no: "1 100 kr", en: "1,100 NOK" },
  },
  {
    title: { no: "Trinnvurdering trinn 3", en: "Step assessment 3" },
    description: {
      no: "Obligatorisk vurdering",
      en: "Mandatory assessment",
    },
    price: { no: "1 200 kr", en: "1,200 NOK" },
  },
  {
    title: { no: "Sikkerhetskurs på øvingsbane", en: "Safety course on track" },
    description: {
      no: "Obligatorisk glattkjøring",
      en: "Mandatory skid training",
    },
    price: { no: "5 200 kr", en: "5,200 NOK" },
  },
  {
    title: { no: "Sikkerhetskurs på vei", en: "Safety course on road" },
    description: {
      no: "Avsluttende kurs før oppkjøring",
      en: "Final course before driving test",
    },
    price: { no: "7 900 kr", en: "7,900 NOK" },
  },
  {
    title: { no: "Førerprøve (leie av bil)", en: "Driving test (car rental)" },
    description: {
      no: "Inkluderer klargjøring og oppvarmingstime",
      en: "Includes preparation and warm-up lesson",
    },
    price: { no: "2 900 kr", en: "2,900 NOK" },
  },
  {
    title: { no: "Trafikalt grunnkurs", en: "Basic traffic course" },
    description: {
      no: "Obligatorisk for nye elever",
      en: "Mandatory for new students",
    },
    price: { no: "2 500 kr", en: "2,500 NOK" },
  },
  {
    title: { no: "Førstehjelpskurs", en: "First aid course" },
    description: {
      no: "En del av trafikalt grunnkurs",
      en: "Part of the basic traffic course",
    },
    price: { no: "800 kr", en: "800 NOK" },
  },
  {
    title: { no: "Mørkekjøringsdemonstrasjon", en: "Night driving demonstration" },
    description: {
      no: "Obligatorisk for elever under 25 år",
      en: "Mandatory for students under 25",
    },
    price: { no: "1 900 kr", en: "1,900 NOK" },
  },
  {
    title: { no: "Lastesikringskurs (C1/C)", en: "Load securing course (C1/C)" },
    description: {
      no: "Obligatorisk for lastebil",
      en: "Mandatory for truck license",
    },
    price: { no: "3 500 kr", en: "3,500 NOK" },
  },
  {
    title: { no: "Utvidelse til BE", en: "Upgrade to BE" },
    description: {
      no: "Tilhengeropplæring klasse BE",
      en: "Trailer training class BE",
    },
    price: { no: "4 900 kr", en: "4,900 NOK" },
  },
  {
    title: { no: "Teorikurs klasse B", en: "Theory course class B" },
    description: {
      no: "Forberedelse til teoriprøve",
      en: "Preparation for theory test",
    },
    price: { no: "1 200 kr", en: "1,200 NOK" },
  },
],

  
  licenseClassesSection: {
  heading: { no: "Førerkortklasser", en: "License classes" },
  subtext: {
    no: "Vi tilbyr opplæring i flere førerkortklasser. Velg det som passer deg.",
    en: "We offer training for multiple license classes. Choose what fits you.",
  },
},

licenseClasses: {
  no: [
    {
      code: "AM146 / AM147",
      title: "Moped",
      description: "Klasse AM146 og AM147",
    },
    {
      code: "A / A1 / A2",
      title: "Motorsykkel",
      description: "Klasse A, A1 og A2",
    },
    {
      code: "B",
      title: "Personbil",
      description: "Klasse B",
    },
    {
      code: "C1 / C / CE",
      title: "Lastebil",
      description: "Klasse C1, C og CE",
    },
    {
      code: "BE / B96",
      title: "Førerkortutvidelse",
      description: "Klasse BE og B96",
    },
    {
      code: "TGK",
      title: "Trafikalt grunnkurs",
      description: "Grunnkurs for deg under 25 år",
    },
  ],

  en: [
    {
      code: "AM146 / AM147",
      title: "Moped",
      description: "Class AM146 and AM147",
    },
    {
      code: "A / A1 / A2",
      title: "Motorcycle",
      description: "Class A, A1 and A2",
    },
    {
      code: "B",
      title: "Car",
      description: "Class B",
    },
    {
      code: "C1 / C / CE",
      title: "Truck",
      description: "Class C1, C and CE",
    },
    {
      code: "BE / B96",
      title: "License extension",
      description: "Class BE and B96",
    },
    {
     code: "TGK",
title: "Traffic Safety Course",
description: "Mandatory basic traffic training."

    },
  ],
},


  /**
   * WHY US
   * - WhyUs.tsx forventer:
   *   - whyUs.heading[lang]
   *   - whyUs.points[lang] (array)
   *   - whyUs.image.alt[lang] (hvis bilde finnes)
   *
   * - Tidligere feil her pleier å være:
   *   1) points skrevet som string i stedet for string[]
   *   2) alt skrevet som string i stedet for { no, en }
   *   3) manglende "no"/"en" nøkler
   *
   * Denne strukturen matcher komponenten direkte.
   */
  whyUs: {
    eyebrow: { no: "HVORFOR OSS", en: "WHY US" }, // valgfritt – komponenten kan ignorere
    heading: {
      no: "Hvorfor velge oss?",
      en: "Why choose us?",
    },
    subtext: {
      no: "Trygg opplæring, tydelig plan og instruktører som følger deg opp hele veien.",
      en: "Safe training, a clear plan, and instructors who support you throughout the journey.",
    },
    points: {
      no: [
        "Godkjente og erfarne trafikklærere",
        "Opplæring tilpasset ditt nivå og tempo",
        "Fokus på trygg og effektiv progresjon",
      ],
      en: [
        "Certified and experienced driving instructors",
        "Training adapted to your level and pace",
        "Focus on safe and effective progression",
      ],
    },
    image: {
      src: "/images/why-us.jpg",
      alt: {
        no: "Trafikklærer og elev under kjøretime",
        en: "Driving instructor and student during a lesson",
      },
    },
  },

instructorsSection: {
  heading: {
    no: "Våre kjørelærere",
    en: "Our instructors",
  },
  subtext: {
    no: "Erfarne og engasjerte lærere som følger deg hele veien.",
    en: "Experienced and dedicated instructors who guide you all the way.",
  },
  instructors: [
    {
      name: "Sara Nordmann",
      title: {
        no: "Faglig leder",
        en: "Academic manager",
      },
      image: "/images/ins1.png",
      car: "Tesla Model 3 (Automat)",
      languages: ["Norsk", "English"],
    },
    {
      name: "Ali Rahman",
      title: {
        no: "Trafikklærer Klasse B / BE",
        en: "Driving instructor Class B / BE",
      },
      image: "/images/ins2.png",
      car: "Volvo XC40 (Automat)",
      languages: ["Norsk", "English", "Tysk"],
    },
    {
      name: "Lise Larsen",
      title: {
        no: "Teoriinstruktør",
        en: "Theory instructor",
      },
      image: "/images/ins3.jpg",
      car: "–",
      languages: ["Norsk", "English"],
    },
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

    // Valgfritt: kan fjernes for white-label
    credit: {
      label: "Design by Drist",
      href: "https://www.drist.no",
    },
  },
};
