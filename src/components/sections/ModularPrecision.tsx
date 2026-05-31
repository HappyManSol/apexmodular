import Image from "next/image";
import type { ReactNode } from "react";
import { assets } from "@/lib/assets";

function ProductImagePanel({
  src,
  alt,
  imageClassName = "object-cover object-center",
  children,
}: {
  src: string;
  alt: string;
  imageClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-[500px] overflow-hidden border border-[rgba(132,136,132,0.2)] bg-[#121212]">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 1024px) 100vw, 760px"
        className={imageClassName}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-8">
        {children}
      </div>
    </div>
  );
}

export function ModularPrecision() {
  return (
    <section className="border-b border-border bg-surface-darker py-20">
      <div className="mx-auto max-w-[1440px] space-y-12 px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-blue">
            Engineering Marvel
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase sm:text-5xl">
            Modular Precision.
          </h2>
          <p className="pt-2 text-lg leading-7 text-foreground-muted">
            A patented nesting mechanism allows individual weight sections to lock
            securely into a master plate, changing the total mass up to 50 lb without
            adding bulk.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ProductImagePanel
            src={assets.explodedView}
            alt="Exploded axis view of modular plate system"
            imageClassName="object-contain object-[center_35%] p-6"
          >
            <div className="inline-flex w-fit items-center gap-2 border border-border-strong bg-background/90 px-4 py-2">
              <span className="size-2 rounded-full bg-accent-yellow" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Exploded Axis View
              </span>
            </div>
            <div className="max-w-3xl border-l-2 border-accent-yellow bg-background/90 px-6 py-4">
              <h3 className="font-display text-2xl font-bold uppercase leading-tight">
                Concentric Nesting
              </h3>
              <p className="mt-1 text-base leading-snug text-foreground-muted">
                Individual colored weight rings lock seamlessly into the central hub. Calibrated to 0.01g tolerances for perfect balance.
              </p>
            </div>
          </ProductImagePanel>

          <ProductImagePanel
            src={assets.sideProfile}
            alt="Side profile metrics of modular plate"
            imageClassName="object-cover object-center"
          >
            <div className="inline-flex w-fit border border-border-strong bg-background/90 px-4 py-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Profile Metrics
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 border-l-2 border-accent-blue bg-background/90 p-4">
              <div>
                <p className="font-mono text-[10px] text-foreground-dim">THICKNESS</p>
                <p className="font-display text-3xl font-black">
                  45<span className="text-base">mm</span>
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-foreground-dim">DIAMETER</p>
                <p className="font-display text-3xl font-black">
                  450<span className="text-base">mm</span>
                </p>
              </div>
            </div>
          </ProductImagePanel>
        </div>
      </div>
    </section>
  );
}
