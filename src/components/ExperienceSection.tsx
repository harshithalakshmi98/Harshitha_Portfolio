import { experience } from "@/data/portfolio";
import { highlightKeywords } from "@/lib/highlightKeywords";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12 md:scroll-mt-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="experience-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Experience
        </h2>
        <ol className="mt-6 space-y-5">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--surface)] to-transparent p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[var(--accent)]">{job.company}</p>
                  <p className="text-sm text-zinc-400">{job.location}</p>
                </div>
                <p className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 sm:text-sm">
                  {job.period}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {job.highlights.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    <span>
                      {highlightKeywords(line, job.highlightKeywords)}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
