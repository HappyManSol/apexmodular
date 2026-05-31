import { Hero } from "@/components/sections/Hero";
import { ModularPrecision } from "@/components/sections/ModularPrecision";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SpecGrid } from "@/components/sections/SpecGrid";
import { SystemOperation } from "@/components/sections/SystemOperation";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <ProblemSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ModularPrecision />
      </RevealOnScroll>
      <RevealOnScroll>
        <SystemOperation />
      </RevealOnScroll>
      <RevealOnScroll>
        <SpecGrid />
      </RevealOnScroll>
      <RevealOnScroll>
        <PartnerCTA />
      </RevealOnScroll>
    </>
  );
}
