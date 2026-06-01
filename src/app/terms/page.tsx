import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms of Service | APEX MODULAR",
  description:
    "Terms governing use of the APEX MODULAR website and submission of partnership inquiries.",
  alternates: {
    canonical: "https://apexmodularplates.com/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-8 lg:px-16">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-blue">
        Legal
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold uppercase sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-foreground-dim">Last updated: May 31, 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-foreground-muted">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Agreement
          </h2>
          <p>
            By accessing apexmodularplates.com (the &quot;Site&quot;), you agree to
            these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use
            the Site. APEX MODULAR (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            may update these Terms at any time by posting a revised version on this
            page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Website Use
          </h2>
          <p>
            The Site is provided for informational purposes about our modular Olympic
            plate system and partnership opportunities. You may not use the Site to
            transmit unlawful content, attempt unauthorized access, interfere with site
            operation, or scrape or harvest data without our prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Partnership Inquiries
          </h2>
          <p>
            Submitting a partnership or dealer kit request does not create a
            distributor, reseller, manufacturing, or other commercial relationship.
            All partnership discussions are subject to separate written agreement and
            our sole discretion. Information you submit must be accurate and you must
            have authority to provide it on behalf of any company listed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Intellectual Property
          </h2>
          <p>
            All content on the Site—including text, graphics, logos, product imagery,
            videos, and design—is owned by APEX MODULAR or its licensors and protected
            by applicable intellectual property laws. Patents are pending. You may not
            copy, modify, distribute, or create derivative works without our prior
            written permission, except for personal, non-commercial viewing of the Site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Product Information
          </h2>
          <p>
            Specifications, weights, imagery, and performance descriptions on the Site
            are for general information only. We reserve the right to modify product
            designs, specifications, and availability without notice. Nothing on the
            Site constitutes a binding offer to sell products.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Disclaimers
          </h2>
          <p>
            The Site and its content are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, whether express or implied,
            including implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement. Use of the Site is at your own risk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, APEX MODULAR will not be liable for
            any indirect, incidental, special, consequential, or punitive damages
            arising from your use of the Site. Our total liability for any claim
            relating to the Site will not exceed one hundred U.S. dollars (USD $100).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Privacy
          </h2>
          <p>
            Our collection and use of personal information is described in our{" "}
            <Link
              href="/privacy"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, United
            States, without regard to conflict-of-law principles. Any dispute arising
            from these Terms or the Site will be brought in the state or federal courts
            located in Delaware, and you consent to their jurisdiction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Contact
          </h2>
          <p>
            Questions about these Terms? Email{" "}
            <a
              href="mailto:partnerships@apexmodularplates.com"
              className="text-foreground underline-offset-4 hover:underline"
            >
              partnerships@apexmodularplates.com
            </a>
            .
          </p>
        </section>
      </div>

      <ButtonLink href="/" variant="secondary" size="sm" className="mt-12">
        ← Back to Home
      </ButtonLink>
    </article>
  );
}
