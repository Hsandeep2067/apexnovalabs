import { HomeHero } from "@/components/sections/home-hero";
import { HomeServices } from "@/components/sections/home-services";
import { HomeCaseStudies } from "@/components/sections/home-case-studies";
import { HomeApproach } from "@/components/sections/home-approach";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { HomeCTA } from "@/components/sections/home-cta";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { BlogHighlights } from "@/components/marketing/blog-highlights";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeCaseStudies />
      <HomeApproach />
      <HomeTestimonials />
      <Section background="default" padding="lg">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Insights"
            title="Notes from the lab."
            description="We share process deep-dives, tooling experiments, and lessons learned from shipping products across Sri Lankan industries."
          />
          <BlogHighlights />
        </div>
      </Section>
      <HomeCTA />
    </>
  );
}
