"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";
import { ButtonLink } from "@/components/ui/Button";

const navLinks = [
  { label: "Product", href: "/#product", sectionId: "product" },
  { label: "Benefits", href: "/#benefits", sectionId: "benefits" },
  { label: "Safety", href: "/#safety", sectionId: "safety" },
  { label: "Partnerships", href: "/#partnerships", sectionId: "partnerships" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].sectionId);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 z-50 w-full overflow-hidden border-b border-border bg-[#141313]/95 backdrop-blur-[6px]">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-6 px-4 py-2 sm:px-8 lg:gap-[178px] lg:px-16">
        <Link
          href="/"
          className="relative h-[254px] w-[min(48vw,220px)] shrink-0 sm:w-[280px] lg:w-[381px]"
        >
          <Image
            src={assets.navLogo}
            alt="APEX MODULAR PLATES"
            fill
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 381px"
            priority
            className="object-cover object-left"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <Link
                key={link.sectionId}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:text-foreground ${
                  isActive
                    ? "border-b-2 border-[#c8c6c5] pb-1.5 text-[#c8c6c5]"
                    : "text-[#c4c7c7]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#partnerships"
          className="ml-auto hidden shrink-0 border border-[#e5e2e1] bg-[#e5e2e1] px-[25px] py-[13px] font-display text-sm font-bold uppercase tracking-[0.1em] text-[#141313] md:inline-flex"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="ml-auto p-2 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
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
        <nav className="border-t border-border px-4 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <Link
                  key={link.sectionId}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-mono text-xs font-bold uppercase tracking-widest ${
                    isActive ? "text-foreground" : "text-foreground-label"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink
              href="/#partnerships"
              size="sm"
              className="mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
