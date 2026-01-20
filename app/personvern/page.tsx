import { siteConfig } from "@/data/siteConfig";

export default function PersonvernPage() {
  const { brand } = siteConfig;

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Personvern</h1>

      <p style={{ marginTop: 12 }}>
        Denne siden beskriver hvordan {brand.name} behandler personopplysninger.
        Teksten er en standard mal og bør tilpasses ved publisering.
      </p>

      <h2 style={{ marginTop: 24 }}>Hvilke opplysninger kan samles inn</h2>
      <p style={{ marginTop: 8 }}>
        Hvis du tar kontakt via telefon, e-post eller kontaktskjema, kan vi
        motta opplysninger som navn, telefonnummer, e-postadresse og innholdet i
        meldingen din.
      </p>

      <h2 style={{ marginTop: 24 }}>Hva opplysningene brukes til</h2>
      <p style={{ marginTop: 8 }}>
        Opplysningene brukes for å svare på henvendelser, følge opp forespørsler
        og administrere kundeforhold knyttet til opplæring og kurs.
      </p>

      <h2 style={{ marginTop: 24 }}>Deling av opplysninger</h2>
      <p style={{ marginTop: 8 }}>
        Vi deler ikke personopplysninger med tredjeparter med mindre det er
        nødvendig for å levere en tjeneste, eller vi er pålagt dette etter lov.
      </p>

      <h2 style={{ marginTop: 24 }}>Dine rettigheter</h2>
      <p style={{ marginTop: 8 }}>
        Du kan be om innsyn, retting eller sletting av opplysninger vi har om
        deg. Ta kontakt med oss dersom du ønsker dette.
      </p>

      <h2 style={{ marginTop: 24 }}>Kontakt</h2>
      <p style={{ marginTop: 8 }}>
        Har du spørsmål om personvern, ta kontakt på{" "}
        <a href={`mailto:${brand.email}`}>{brand.email}</a>.
      </p>
    </main>
  );
}
