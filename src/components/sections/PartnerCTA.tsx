"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

const partnerTypes = [
  { value: "facility", label: "Facility owner / gym operator" },
  { value: "manufacturer", label: "Manufacturer / OEM" },
  { value: "distributor", label: "Distributor / retailer" },
  { value: "other", label: "Investor / other" },
] as const;

const fieldClassName =
  "w-full border border-border-strong bg-surface-raised px-4 py-4 font-mono text-base uppercase text-foreground placeholder:text-foreground-dim focus:border-foreground-dim focus:outline-none disabled:opacity-60";

export function PartnerCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const partnerType = String(formData.get("partner_type") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();

    if (!partnerType) {
      setError("Please select a partner type.");
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid commercial email address.");
      return;
    }

    if (!formspreeId) {
      setError("Form is not configured yet. Email partnerships@apexmodularplates.com directly.");
      return;
    }

    const partnerLabel =
      partnerTypes.find((type) => type.value === partnerType)?.label ?? partnerType;

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
          partner_type: partnerLabel,
          company: company || undefined,
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
          <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="partner_type" className="sr-only">
                Partner type
              </label>
              <select
                id="partner_type"
                name="partner_type"
                required
                disabled={submitting}
                defaultValue=""
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "form-error" : undefined}
                className={`${fieldClassName} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 fill=%22none%22%3E%3Cpath stroke=%22%238e9192%22 stroke-width=%221.5%22 d=%22M1 1.5 6 6.5 11 1.5%22/%3E%3C/svg%3E')] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-10`}
              >
                <option value="" disabled>
                  Select partner type
                </option>
                {partnerTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="company" className="sr-only">
                Company name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                disabled={submitting}
                placeholder="Company name (optional)"
                className={fieldClassName}
              />
            </div>

            <div>
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
                placeholder="Enter commercial email"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "form-error" : undefined}
                className={fieldClassName}
              />
            </div>

            {error && (
              <p id="form-error" className="text-sm text-accent-red">
                {error}
              </p>
            )}

            <Button type="submit" disabled={submitting} className="w-full">
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
