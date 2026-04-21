import Image from "next/image";
import { person } from "@/data/portfolio";

export function HeroSection() {
  const [firstNamePart, ...remainingNameParts] = person.name.trim().split(/\s+/);
  const remainingName = remainingNameParts.join(" ");

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-5 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--glow-1)] blur-[100px] sm:left-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[var(--glow-2)] blur-[90px] sm:right-0"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--accent)] sm:text-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            {person.location}
          </p>
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="block">{firstNamePart}</span>
            {remainingName ? <span className="block">{remainingName}</span> : null}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300 sm:text-xl md:text-2xl">
            {person.title}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-foreground)] shadow-lg shadow-[var(--accent)]/25 transition hover:brightness-110 active:scale-[0.98] sm:text-base"
            >
              Get in touch
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-[5/6] w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 sm:max-w-[260px] lg:max-w-[min(100%,18rem)]">
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/25 to-transparent blur-xl"
              aria-hidden
            />
            <Image
              src={person.profileImage}
              alt={`${person.name}, ${person.title}`}
              width={640}
              height={853}
              priority
              sizes="(max-width: 1024px) 260px, 288px"
              className="relative h-full w-full scale-[1.2] object-cover object-[center_18%] shadow-2xl shadow-black/40 [transform-origin:50%_16%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
