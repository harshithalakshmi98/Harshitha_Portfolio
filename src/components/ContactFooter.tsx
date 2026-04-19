import { person } from "@/data/portfolio";

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-black/40 px-4 py-16 sm:px-5 sm:py-20 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Contact
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Open to roles and collaborations in AI engineering, analytics, and
          data-driven product work.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          <a
            href={`mailto:${person.email}`}
            className="min-h-[44px] text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {person.email}
          </a>
          <a
            href={`tel:${person.phone.replace(/\s/g, "")}`}
            className="min-h-[44px] text-zinc-300 hover:text-white"
          >
            {person.phone}
          </a>
          <span className="text-zinc-400">{person.location}</span>
        </div>
        <p className="mt-12 text-center text-xs text-zinc-600 sm:text-left">
          © {new Date().getFullYear()} {person.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
