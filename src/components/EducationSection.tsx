import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12 md:scroll-mt-28"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="education-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Education
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {education.map((entry) => (
            <li
              key={entry.degree}
              className="rounded-3xl border border-white/10 bg-[var(--surface)] p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {entry.degree}
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)] sm:text-base">
                {entry.detail}
              </p>
              <p className="mt-3 text-zinc-300">{entry.school}</p>
              <p className="text-sm text-zinc-500">{entry.location}</p>
              {entry.coursework ? (
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  <span className="font-medium text-zinc-300">
                    Relevant coursework:{" "}
                  </span>
                  {entry.coursework}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
