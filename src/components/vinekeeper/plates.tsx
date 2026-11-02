import type { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return (
    <article className="plate-in mx-auto w-full max-w-2xl px-5 py-8 md:px-8 md:py-12">
      {children}
    </article>
  );
}

export function Kicker({ numeral, label }: { numeral: string; label: string }) {
  return (
    <p className="font-display text-sm text-vine">
      <span className="text-seed">{numeral}</span>
      <span className="px-2 text-ink/40" aria-hidden="true">
        /
      </span>
      {label}
    </p>
  );
}

export function ChapterTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
      {children}
    </h2>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mt-6 space-y-4 text-base leading-relaxed text-ink md:text-lg">{children}</div>;
}

export function Subhead({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 font-display text-2xl font-semibold leading-tight text-vine">{children}</h3>;
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-2 border-seed pl-4 font-display text-xl italic leading-snug text-ink">
      {children}
    </blockquote>
  );
}

export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 border border-ink/15 border-t-2 border-t-seed px-4 py-4">
      <p className="font-display text-sm text-seed">{title}</p>
      <div className="mt-2 space-y-3 text-base leading-relaxed text-ink">{children}</div>
    </aside>
  );
}

export function Plate({
  src,
  alt,
  plate,
  caption,
}: {
  src: string;
  alt: string;
  plate: string;
  caption: string;
}) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full border border-ink/10 bg-paper" />
      <figcaption className="mt-3 flex gap-3 text-sm leading-relaxed text-ink/75">
        <span className="shrink-0 font-display italic text-seed">{plate}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
