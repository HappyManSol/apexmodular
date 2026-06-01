import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

const footerLinks = [
  { label: "Engineering Specs", href: "/#safety" },
  { label: "Contact Us", href: "/#partnerships" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-darker">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-20 sm:px-8 lg:flex-row lg:justify-between lg:px-16">
        <div className="max-w-xs space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src={assets.footerLogo}
              alt="APEX MODULAR PLATES"
              width={1024}
              height={682}
              className="h-14 w-auto"
            />
          </Link>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-foreground-label">
            Engineered for precision. Built for heavy load.
          </p>
          <a
            href="mailto:partnerships@apexmodularplates.com"
            className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-foreground-dim transition-colors hover:text-foreground"
          >
            partnerships@apexmodularplates.com
          </a>
        </div>

        <nav className="flex flex-col gap-4 sm:flex-row sm:gap-12">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-bold uppercase tracking-widest text-foreground-label transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-right lg:text-right">
          <p className="text-xs font-bold uppercase tracking-wide text-foreground-label">
            © 2026 APEX MODULAR SYSTEMS.
          </p>
          <p className="text-xs uppercase tracking-wide text-foreground-dim">
            All patents pending.
          </p>
        </div>
      </div>
    </footer>
  );
}
