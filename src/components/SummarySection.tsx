import { summary } from "@/data/portfolio";

export function SummarySection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12 md:scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/20 sm:p-8 md:p-10">
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Professional summary
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
