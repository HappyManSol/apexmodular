import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

const footerLinks = {
  top: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Engineering Specs", href: "/#safety" },
  ],
  bottom: [{ label: "Contact Us", href: "/#partnerships" }],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface-darker">
      <div className="relative mx-auto max-w-[1440px] px-4 pb-20 sm:px-8 lg:px-16">
        <Link
          href="/"
          className="relative -mt-[70px] mb-10 block h-[220px] w-full max-w-[519px] overflow-hidden sm:h-[280px] lg:mb-0 lg:h-[335px]"
        >
          <div className="absolute left-[-0.92%] top-[-2.68%] h-[103.28%] w-full">
            <div className="relative h-full w-full">
              <Image
                src={assets.footerLogo}
                alt="APEX MODULAR PLATES"
                fill
                sizes="(max-width: 640px) 100vw, 519px"
                className="object-cover object-left mix-blend-lighten"
              />
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-12 lg:mt-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[320px]">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-foreground-label">
              Engineered for precision. Built
              <br />
              for heavy load.
            </p>
            <a
              href="mailto:partnerships@apexmodularplates.com"
              className="mt-4 inline-block font-mono text-xs font-bold uppercase tracking-[0.1em] text-foreground-dim transition-colors hover:text-foreground"
            >
              partnerships@apexmodularplates.com
            </a>
          </div>

          <nav
            className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-[42px] lg:gap-x-16"
            aria-label="Footer"
          >
            {footerLinks.top.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-foreground-label transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            {footerLinks.bottom.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-foreground-label transition-colors hover:text-foreground sm:col-start-1 sm:row-start-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-left lg:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.05em] text-foreground-label">
              © 2026 APEX MODULAR
              <br />
              SYSTEMS.
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.05em] text-foreground-dim">
              All patents pending.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
