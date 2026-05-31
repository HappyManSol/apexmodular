import Image from "next/image";
import Link from "next/link";
import { assets, colors } from "@/lib/assets";

const plateColors = [colors.red, colors.yellow, colors.green, colors.blue];

export function Hero() {
  return (
    <section
      id="product"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <Image
        src={assets.heroBg}
        alt="APEX modular Olympic plates in a smoky gym environment"
        fill
        unoptimized
        className="object-cover object-[75%_center] sm:object-right"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-8 lg:px-16">
        <div className="max-w-3xl space-y-6">
          <div className="flex gap-2">
            {plateColors.map((color) => (
              <span
                key={color}
                className="h-1 w-12"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.1]">
            <span className="bg-gradient-to-r from-[#e5e2e1] to-[#8e9192] bg-clip-text text-transparent">
              The Evolution of
              <br />
              the Olympic
              <br />
              Plate.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-7 text-foreground-muted">
            One precision-engineered plate. Multiple weighted sections. Infinite
            possibilities for your home gym. The future of heavy lifting is modular.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link
              href="#benefits"
              className="bg-button-primary px-8 py-4 text-center font-display text-base font-bold uppercase tracking-widest text-button-primary-text"
            >
              Explore the System
            </Link>
            <Link
              href="#safety"
              className="flex items-center justify-center gap-2 border border-[#444748] px-8 py-4 font-display text-base font-bold uppercase tracking-widest text-foreground"
            >
              <Image src={assets.playIcon} alt="" width={20} height={20} />
              Watch Specs
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground-dim">
          Scroll to Engage
        </span>
        <Image src={assets.scrollIndicator} alt="" width={11} height={11} />
      </div>
    </section>
  );
}
