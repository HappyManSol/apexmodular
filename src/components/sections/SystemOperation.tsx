import Image from "next/image";
import { assets } from "@/lib/assets";

const steps = [
  {
    number: "01",
    color: "accent-red",
    borderColor: "border-accent-red",
    title: "Select Mass",
    description:
      "Choose the required mass by selecting the corresponding color-coded concentric rings. Each ring represents a calibrated weight increment.",
    image: assets.selectMass,
    imageAlt: "Selecting color-coded weight rings on the modular plate",
    imageClassName: "object-contain object-top p-3",
  },
  {
    number: "02",
    color: "accent-yellow",
    borderColor: "border-accent-yellow",
    title: "Lock Sections",
    description:
      "Engage the patented radial locking mechanism. A tactile 'click' confirms the sections are secured to the master plate and barbell sleeve.",
    image: assets.stepLock,
    imageAlt: "Locking modular plate sections into the master hub",
    imageClassName: "object-cover",
  },
  {
    number: "03",
    color: "accent-green",
    borderColor: "border-accent-green",
    title: "Lift It",
    description:
      "Perform your lift with confidence. The unified mass behaves identically to a solid iron plate, with zero rattle or shift during explosive movements.",
    image: assets.stepLift,
    imageAlt: "Athlete lifting with secured modular Olympic plates",
    imageClassName: "object-cover",
  },
];

const numberColorMap: Record<string, string> = {
  "accent-red": "text-accent-red",
  "accent-yellow": "text-accent-yellow",
  "accent-green": "text-accent-green",
};

export function SystemOperation() {
  return (
    <section className="border-b border-border bg-background py-20">
      <div className="mx-auto max-w-[1440px] space-y-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase sm:text-5xl">
          How It Works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="relative flex flex-col">
              <span
                className={`mb-4 font-display text-7xl font-black opacity-20 ${numberColorMap[step.color]}`}
              >
                {step.number}
              </span>
              <div
                className={`flex flex-1 flex-col border border-border bg-[rgba(18,18,18,0.7)] backdrop-blur-sm ${step.borderColor} border-t-2`}
              >
                <div className="relative m-6 h-48 overflow-hidden border border-border bg-surface-raised">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className={step.imageClassName ?? "object-cover"}
                  />
                </div>
                <div className="space-y-3 px-6 pb-6">
                  <h3 className="font-display text-2xl font-bold uppercase">
                    {step.title}
                  </h3>
                  <p className="text-base leading-6 text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
