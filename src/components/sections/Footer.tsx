import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const { brand, footer } = siteConfig;

  return (
    <footer
      style={{
        borderTop: "1px solid #333",
        marginTop: 40,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div style={{ display: "grid", gap: 6 }}>
        <div>© {new Date().getFullYear()} {brand.name}</div>
        <div>Org.nr: {footer.orgNumber}</div>
        <a href={footer.privacyHref}>Personvern</a>
      </div>
    </footer>
  );
}
