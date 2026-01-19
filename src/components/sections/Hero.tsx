import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section>
      <h1>{siteConfig.hero.headline}</h1>
      <p>{siteConfig.hero.subtext}</p>

      <div style={{ display: "flex", gap: 12 }}>
        <a href={siteConfig.hero.primaryCta.href}>
          {siteConfig.hero.primaryCta.label}
        </a>
        <a href={siteConfig.hero.secondaryCta.href}>
          {siteConfig.hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
