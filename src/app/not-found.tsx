import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 py-20 text-center sm:px-8">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold uppercase sm:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-7 text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Head
        back to explore the modular plate system.
      </p>
      <ButtonLink href="/" size="md" showArrow className="mt-10">
        Back to Home
      </ButtonLink>
    </section>
  );
}
