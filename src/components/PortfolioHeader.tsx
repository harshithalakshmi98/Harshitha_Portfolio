"use client";

import { useEffect, useState } from "react";
import { navItems, person } from "@/data/portfolio";

export function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[var(--surface-elevated)]/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4">
        <a
          href="#top"
          className="min-h-[44px] min-w-[44px] flex items-center font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white sm:text-base"
          onClick={() => setOpen(false)}
        >
          <span className="max-w-[12rem] truncate sm:max-w-none">
            {person.name.split(" ").slice(-2).join(" ")}
          </span>
          <span className="ml-2 hidden text-[var(--accent)] sm:inline">
            · Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${
          open
            ? "pointer-events-auto max-h-[min(70vh,28rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden border-t border-white/10 bg-[var(--surface)]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300`}
      >
        <nav
          className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto px-4 py-4"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-xl px-4 py-3 text-base text-zinc-200 transition hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
