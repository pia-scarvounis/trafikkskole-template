import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Prices from "@/components/sections/Prices";
import LicenseClasses from "@/components/sections/LicenseClasses";
import WhyUs from "@/components/sections/WhyUs";
import Instructors from "@/components/sections/Instructors";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <div id="top" /> 
    <Header />
<Hero />
<Services />
<LicenseClasses />
<Prices />
<Instructors />
<Process />
<WhyUs />
<Reviews />
<FAQ />
<Contact />
<Footer />

    </main>
  );
}
