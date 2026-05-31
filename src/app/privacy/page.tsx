import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | APEX MODULAR",
  description:
    "How APEX MODULAR collects, uses, and protects information submitted through our website.",
  alternates: {
    canonical: "https://apexmodularplates.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-8 lg:px-16">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-blue">
        Legal
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold uppercase sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-foreground-dim">Last updated: May 31, 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-foreground-muted">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Overview
          </h2>
          <p>
            APEX MODULAR (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            apexmodularplates.com. This policy explains what information we collect when
            you use our website and how we use it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Information We Collect
          </h2>
          <p>
            When you submit the partnership form, we collect the email address you
            provide. We may also collect standard technical data such as browser type,
            device type, and pages visited through analytics tools, if enabled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            How We Use Information
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Respond to partnership and dealer kit requests</li>
            <li>Communicate about APEX MODULAR products and opportunities</li>
            <li>Improve website performance and user experience</li>
            <li>Maintain site security and prevent abuse</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Third-Party Services
          </h2>
          <p>
            Form submissions are processed by Formspree. Analytics, if enabled, may be
            provided by Plausible Analytics and/or Google Analytics. These services
            process data according to their own privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Data Retention
          </h2>
          <p>
            We retain contact information for as long as needed to respond to inquiries
            and maintain business records, unless you request deletion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of your personal
            information by contacting us at{" "}
            <a
              href="mailto:partnerships@apexmodularplates.com"
              className="text-foreground underline-offset-4 hover:underline"
            >
              partnerships@apexmodularplates.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold uppercase text-foreground">
            Contact
          </h2>
          <p>
            Questions about this policy? Email{" "}
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

      <Link
        href="/"
        className="btn-secondary mt-12 inline-block border border-border-strong px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground-label"
      >
        ← Back to Home
      </Link>
    </article>
  );
}
