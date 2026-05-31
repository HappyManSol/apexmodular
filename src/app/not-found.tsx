import Link from "next/link";

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
      <Link
        href="/"
        className="btn-primary mt-10 bg-button-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-button-primary-text"
      >
        Back to Home
      </Link>
    </section>
  );
}
