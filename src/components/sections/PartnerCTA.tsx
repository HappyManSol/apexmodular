"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export function PartnerCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid commercial email address.");
      return;
    }

    if (!formspreeId) {
      setError("Form is not configured yet. Email partnerships@apexmodularplates.com directly.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "APEX MODULAR — Dealer Kit Request",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch {
      setError("Something went wrong. Try again or email partnerships@apexmodularplates.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-8 lg:px-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(142,145,146,0.4) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl border border-[rgba(68,71,72,0.3)] bg-background/90 p-8 backdrop-blur-sm sm:p-12">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase sm:text-5xl">
          Partner With Apex.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-7 text-foreground-muted">
          We are actively seeking facility owners, gym manufacturers, and distributors
          to redefine iron sports. Equip your space with the future.
        </p>

        {submitted ? (
          <div
            className="mt-8 border border-accent-green/40 bg-surface-raised p-6 text-center"
            role="status"
          >
            <p className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
              Request received
            </p>
            <p className="mt-2 text-base text-foreground-muted">
              Thanks for your interest. Our partnerships team will follow up shortly.
            </p>
            <button
              type="button"
              className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground-label underline-offset-4 hover:underline"
              onClick={() => setSubmitted(false)}
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-center"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="min-w-0 flex-1 sm:min-w-[300px]">
              <label htmlFor="email" className="sr-only">
                Commercial email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={submitting}
                placeholder="ENTER COMMERCIAL EMAIL"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "email-error" : undefined}
                className="w-full border border-border-strong bg-surface-raised px-4 py-4 font-mono text-base uppercase text-foreground placeholder:text-foreground-dim focus:border-foreground-dim focus:outline-none disabled:opacity-60"
              />
              {error && (
                <p id="email-error" className="mt-2 text-sm text-accent-red">
                  {error}
                </p>
              )}
            </div>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Sending…" : "Request Dealer Kit"}
            </Button>
          </form>
        )}

        {!submitted && (
          <p className="mt-4 text-center text-xs text-foreground-dim">
            By submitting, you agree to our{" "}
            <Link
              href="/privacy"
              className="text-foreground-label underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
