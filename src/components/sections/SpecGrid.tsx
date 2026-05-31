import Image from "next/image";
import { PlateAnimationVideo } from "@/components/sections/PlateAnimationVideo";
import { assets } from "@/lib/assets";

const specRows = [
  {
    label: "Base Plate Mass",
    value: "12.5 LB",
    dot: "#1976d2",
    highlight: false,
  },
  {
    label: "Red Ring",
    value: "+ 15 LB",
    dot: "#d32f2f",
    highlight: true,
  },
  {
    label: "Yellow Ring",
    value: "+ 12.5 LB",
    dot: "#fbc02d",
    highlight: false,
  },
  {
    label: "Green Ring",
    value: "+ 10 LB",
    dot: "#388e3c",
    highlight: true,
  },
  {
    label: "Locking Bar",
    value: "+ 1.25 LB",
    icon: assets.lockingBar,
    highlight: false,
  },
];

export function SpecGrid() {
  return (
    <section id="safety" className="border-b border-border bg-surface-darker px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
        <div className="space-y-6">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
            Technical Specs
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            Patented Locking
            <br />
            Technology.
          </h2>
          <p className="text-lg leading-7 text-foreground-muted">
            Safety is engineered into the core. Our proprietary radial locking pins
            ensure that once engaged, the concentric rings cannot separate under lateral
            or vertical load. Designed for Olympic lifting drops.
          </p>

          <div className="border border-border bg-background">
            <div className="grid grid-cols-2 border-b border-border bg-surface-raised">
              <div className="p-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground-dim">
                Parameter
              </div>
              <div className="border-l border-border p-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground-dim">
                Specification
              </div>
            </div>
            {specRows.map((row) => (
              <div
                key={row.label}
                className={`grid grid-cols-2 border-b border-border last:border-b-0 ${
                  row.highlight ? "bg-surface-raised/50" : ""
                }`}
              >
                <div className="flex items-center gap-2 p-4">
                  {row.dot && (
                    <span
                      className="size-3 shrink-0"
                      style={{ backgroundColor: row.dot }}
                    />
                  )}
                  {row.icon && (
                    <Image src={row.icon} alt="" width={11} height={14} />
                  )}
                  <p className="font-semibold">{row.label}</p>
                </div>
                <div className="border-l border-border p-4 font-mono text-base text-foreground-muted">
                  {row.value}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 bg-surface-raised/50">
              <div className="p-4 font-bold uppercase tracking-wide">
                Total Assembly Weight
              </div>
              <div className="border-l border-border p-4 font-mono font-bold">
                50 LB
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:self-stretch">
          <div className="relative h-[min(560px,75vh)] min-h-[280px] w-full overflow-hidden border border-[rgba(132,136,132,0.2)] bg-background">
            <PlateAnimationVideo />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
