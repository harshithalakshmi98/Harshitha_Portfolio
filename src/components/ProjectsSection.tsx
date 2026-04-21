import { highlightKeywords } from "@/lib/highlightKeywords";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12 md:scroll-mt-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="projects-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Selected work spanning planning simulators, solvers, ML experiments,
          and desktop Java applications.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="group flex flex-col rounded-3xl border border-white/10 bg-[var(--surface)]/90 p-6 transition hover:border-[var(--accent)]/35 hover:shadow-lg hover:shadow-[var(--accent)]/5 sm:p-7"
            >
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {project.name}
              </h3>
              <ul
                className="mt-3 flex flex-wrap gap-2"
                aria-label="Core technologies"
              >
                {project.tech.map((label) => (
                  <li key={label}>
                    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-300 sm:text-xs">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {highlightKeywords(project.description, project.keywords)}
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--accent)] underline-offset-4 transition hover:underline"
              >
                View on GitHub
                <span aria-hidden className="text-xs opacity-80">
                  ↗
                </span>
              </a>
              <span
                className="mt-4 inline-block h-0.5 w-8 rounded-full bg-[var(--accent)]/60 transition group-hover:w-12"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
