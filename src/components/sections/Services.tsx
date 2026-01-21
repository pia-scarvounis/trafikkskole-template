import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";


export default function Services() {
  const { services } = siteConfig;

  return (
    <section
      id="tjenester"
      className="py-24 bg-gradient-to-b from-[#EEF7F4] via-[#F6FCFA] to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900">
          Våre tjenester
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#E6F3EE] p-6 transition hover:bg-[#E0F0EA] flex flex-col justify-between"
            >
              <div>
                {service.icon && (
  <Image
    src={service.icon.src}
    alt={service.icon.alt}
    width={28}
    height={28}
    className="opacity-80"
  />
)}

                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <a
                href={service.cta.href}
                className="mt-4 inline-flex items-center text-sm font-medium text-gray-900"
              >
                {service.cta.label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
