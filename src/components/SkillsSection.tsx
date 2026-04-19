import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 py-16 sm:px-5 sm:py-20 md:scroll-mt-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="skills-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
          A concise map of tools and domains I work across—from classical Java
          desktop engineering to ML and cloud operations.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--surface)]/80 p-5 shadow-lg shadow-black/15"
            >
              <h3 className="text-sm font-semibold text-[var(--accent)]">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 sm:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
