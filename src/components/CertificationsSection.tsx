import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12 md:scroll-mt-28"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="certifications-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Certifications
        </h2>
        <ul className="mt-6 space-y-4">
          {certifications.map((cert) => (
            <li key={cert.url}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[var(--surface)] px-5 py-4 text-left text-sm text-zinc-200 transition hover:border-[var(--accent)]/40 hover:bg-white/[0.04] sm:text-base"
              >
                <span className="font-medium">{cert.name}</span>
                <span
                  className="shrink-0 text-[var(--accent)]"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
