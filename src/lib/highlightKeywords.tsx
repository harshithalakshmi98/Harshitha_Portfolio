import type { ReactNode } from "react";

export function highlightKeywords(
  text: string,
  keywords: readonly string[],
): ReactNode {
  if (keywords.length === 0) return text;

  const sorted = [...keywords].sort((a, b) => b.length - a.length);
  const lower = text.toLowerCase();
  const parts: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < text.length) {
    let match: { start: number; end: number; slice: string } | null = null;

    for (const term of sorted) {
      const idx = lower.indexOf(term.toLowerCase(), i);
      if (idx === -1) continue;
      if (!match || idx < match.start) {
        match = {
          start: idx,
          end: idx + term.length,
          slice: text.slice(idx, idx + term.length),
        };
      }
    }

    if (!match) {
      parts.push(text.slice(i));
      break;
    }

    if (match.start > i) {
      parts.push(text.slice(i, match.start));
    }

    parts.push(
      <span
        key={`kw-${key++}`}
        className="font-medium text-[var(--keyword)]"
      >
        {match.slice}
      </span>,
    );
    i = match.end;
  }

  return <>{parts}</>;
}
