import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { site } from "@/lib/data";

export default function Page() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin],
    worksFor: { "@type": "Organization", name: "Cognira" },
    address: { "@type": "PostalAddress", addressLocality: site.location }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Education />
      <Stack />
      <Contact />
    </>
  );
}
