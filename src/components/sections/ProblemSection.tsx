import Image from "next/image";
import { assets } from "@/lib/assets";

const painPoints = [
  "Excessive Storage Requirements",
  "High Cost to Build a Full Set",
  "Fixed Weight Increments",
];

export function ProblemSection() {
  return (
    <section
      id="benefits"
      className="border-b border-border bg-background px-4 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            Traditional Plates Weren&apos;t Built for Modern Home Gyms.
          </h2>
          <p className="text-lg leading-7 text-foreground-muted">
            Traditional Olympic-style plates require multiple pairs across different
            increments, creating unnecessary cost, clutter, and storage demands. For home
            gym owners, building a complete setup often means dedicating an entire wall
            to plates that only serve one fixed weight. APEX Modular rethinks the plate
            system around flexibility, efficiency, and space.
          </p>
          <ul className="space-y-4 pt-2">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 border border-border bg-surface p-4"
              >
                <span
                  className="font-mono text-sm font-bold text-accent-red"
                  aria-hidden
                >
                  ✕
                </span>
                <span className="font-mono text-xs font-bold tracking-widest text-foreground-label">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-h-[480px] flex-col overflow-hidden border border-[rgba(132,136,132,0.2)] bg-surface-raised lg:min-h-[600px]">
          <div className="relative z-10 border-b border-border bg-background px-6 py-5">
            <h3 className="font-display text-2xl font-bold uppercase">
              One System. Fewer Plates.
            </h3>
            <p className="mt-2 text-base leading-6 text-foreground-muted">
              Replace multiple traditional plate pairs with a single modular 50 lb plate
              system designed for flexible loading and cleaner storage.
            </p>
          </div>
          <div className="relative min-h-[320px] flex-1">
            <Image
              src={assets.eliminateClutter}
              alt="Before and after comparison of traditional plate clutter versus Apex modular wall-mounted system"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </section>
  );
}
