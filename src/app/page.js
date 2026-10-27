import { SITE, SITE_URL } from "@/lib/config";
import { FAQS } from "@/lib/data";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { MatchRadar } from "@/components/sections/MatchRadar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { Passes } from "@/components/sections/Passes";
import { Venues } from "@/components/sections/Venues";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      description: SITE.description,
      email: "soporte@caimanera.app",
      areaServed: {
        "@type": "City",
        name: "Caracas",
        addressCountry: "VE",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE_URL,
      inLanguage: "es",
      description: SITE.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <main id="contenido">
        <Hero />
        <Ticker />
        <MatchRadar />
        <HowItWorks />
        <FeaturesBento />
        <Passes />
        <Venues />
        <Faq />
        <FinalCta />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
