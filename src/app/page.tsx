import { Hero } from "@/components/sections/Hero";
import { ModularPrecision } from "@/components/sections/ModularPrecision";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SpecGrid } from "@/components/sections/SpecGrid";
import { SystemOperation } from "@/components/sections/SystemOperation";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ModularPrecision />
      <SystemOperation />
      <SpecGrid />
      <PartnerCTA />
    </>
  );
}
