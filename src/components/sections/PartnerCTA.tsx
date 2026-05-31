export function PartnerCTA() {
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
        <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-center">
          <label htmlFor="email" className="sr-only">
            Commercial email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ENTER COMMERCIAL EMAIL"
            className="min-w-0 flex-1 border border-border-strong bg-surface-raised px-4 py-4 font-mono text-base uppercase text-foreground placeholder:text-foreground-dim focus:border-foreground-dim focus:outline-none sm:min-w-[300px]"
          />
          <button
            type="submit"
            className="bg-button-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-button-primary-text"
          >
            Request Dealer Kit
          </button>
        </form>
      </div>
    </section>
  );
}
