import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-16 sm:px-5 sm:py-20 md:scroll-mt-28"
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
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="group flex flex-col rounded-3xl border border-white/10 bg-[var(--surface)]/90 p-6 transition hover:border-[var(--accent)]/35 hover:shadow-lg hover:shadow-[var(--accent)]/5 sm:p-7"
            >
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
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
