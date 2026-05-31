"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assets } from "@/lib/assets";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Benefits", href: "#benefits" },
  { label: "Safety", href: "#safety" },
  { label: "Partnerships", href: "#partnerships" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={assets.logo}
            alt="APEX MODULAR"
            width={40}
            height={40}
            className="opacity-80"
          />
          <span className="font-display text-2xl font-black tracking-tight">
            APEX MODULAR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:text-foreground ${
                i === 0
                  ? "border-b-2 border-[#c8c6c5] pb-1.5 text-[#c8c6c5]"
                  : "text-foreground-label"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#partnerships"
          className="hidden bg-button-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-button-primary-text md:inline-flex"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs font-bold uppercase tracking-widest text-foreground-label"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#partnerships"
              className="mt-2 bg-button-primary px-6 py-3 text-center font-display text-sm font-bold uppercase tracking-widest text-button-primary-text"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
