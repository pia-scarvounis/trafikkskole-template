import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Prices from "@/components/sections/Prices";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Prices />
      <FAQ />
    </main>
  );
}
