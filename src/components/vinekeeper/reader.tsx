import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, List, X } from "lucide-react";
import {
  CompanionPage,
  CoverPage,
  SeedPage,
  YearPage,
} from "@/components/vinekeeper/keep";
import {
  FlowerPage,
  GroundPage,
  PickingPage,
  PlantPage,
  SowingPage,
  TroublePage,
  VinePage,
  ZonePage,
} from "@/components/vinekeeper/grow";
import { MELON_PAGES } from "@/components/vinekeeper/melon-pages";
import { useReading } from "@/lib/reading";

const PAGES = [
  { id: "cover", title: "Cover", dek: "The field book", Page: CoverPage },
  { id: "plant", title: "The plant", dek: "Eaten before it is ripe", Page: PlantPage },
  { id: "ground", title: "Ground", dek: "Sun, a rich bed, warm feet", Page: GroundPage },
  { id: "zones", title: "Zones", dek: "When the ground is ready", Page: ZonePage },
  { id: "sowing", title: "Sowing", dek: "Seed into warm ground", Page: SowingPage },
  { id: "vine", title: "The vine", dek: "Trellis, water, and food", Page: VinePage },
  { id: "flowers", title: "Flowers", dek: "Males first, then fruit", Page: FlowerPage },
  { id: "trouble", title: "Trouble", dek: "Beetles, mildew, bitterness", Page: TroublePage },
  { id: "picking", title: "Picking", dek: "Small, often, with a knife", Page: PickingPage },
  { id: "seed", title: "Saving seed", dek: "Harvest past the kitchen", Page: SeedPage },
  { id: "companions", title: "Companions", dek: "The plants around the vine", Page: CompanionPage },
  { id: "year", title: "The year", dek: "A season you can tick", Page: YearPage },
] as const;

export function Reader() {
  const stored = useReading((state) => state.chapter);
  const setChapter = useReading((state) => state.setChapter);
  const volume = useReading((state) => state.volume);
  const setVolume = useReading((state) => state.setVolume);
  const [contentsOpen, setContentsOpen] = useState(false);
  const scrollerRef = useRef<HTMLElement>(null);
  const pages = volume === "melon" ? MELON_PAGES : PAGES;
  const index = stored >= 0 && stored < pages.length ? stored : 0;
  const page = pages[index];
  const PageView = page.Page;
  const last = pages.length - 1;

  useEffect(() => {
    void useReading.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
  }, [index, volume]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea, select, button, a")) return;
      if (event.key === "Escape") setContentsOpen(false);
      if (contentsOpen) return;
      if (event.key === "ArrowRight" && index < last) setChapter(index + 1);
      if (event.key === "ArrowLeft" && index > 0) setChapter(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, last, setChapter, contentsOpen]);

  const go = (next: number) => {
    setContentsOpen(false);
    setChapter(next);
  };

  return (
    <div className="flex h-dvh bg-paper text-ink">
      <aside className="hidden w-14 shrink-0 flex-col items-center justify-between bg-vine py-6 text-paper md:flex">
        <span className="spine-title font-display text-sm tracking-wide">
          {volume === "melon" ? "Melons" : "Cucumbers"}
        </span>
        <span className="font-display text-sm tabular-nums">{index + 1}</span>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-2 border-b border-ink/10 px-3 py-2 md:px-5">
          <button
            type="button"
            aria-label="Contents"
            aria-expanded={contentsOpen}
            onClick={() => setContentsOpen(true)}
            className="grid size-11 shrink-0 place-items-center text-ink"
          >
            <List className="size-5" aria-hidden="true" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="font-display text-xs tracking-wide text-ink/70">
              The Vinekeeper · {volume === "melon" ? "Melons" : "Cucumbers"}
            </p>
            <p className="truncate font-display text-base text-ink">{page.title}</p>
          </div>
          <p className="shrink-0 font-display text-sm tabular-nums text-ink/60">
            {index + 1} / {pages.length}
          </p>
        </header>

        <main ref={scrollerRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <PageView />
        </main>

        <footer className="grid grid-cols-2 gap-2 border-t border-ink/10 p-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="inline-flex min-h-11 items-center justify-center gap-1 border border-ink/20 px-3 text-ink disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => go(index === last ? 0 : index + 1)}
            className="inline-flex min-h-11 items-center justify-center gap-1 bg-ink px-3 text-paper"
          >
            {index === 0 ? "Open the book" : index === last ? "Back to the cover" : "Next"}
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </footer>
      </div>

      {contentsOpen ? (
        <div className="fixed inset-0 z-20 flex bg-ink/40" role="presentation" onClick={() => setContentsOpen(false)}>
          <nav
            role="dialog"
            aria-modal="true"
            aria-labelledby="contents-title"
            className="flex h-full w-full max-w-md flex-col bg-paper text-ink shadow-none"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
              <h2 id="contents-title" className="font-display text-2xl font-semibold">
                Contents
              </h2>
              <button
                type="button"
                aria-label="Close contents"
                onClick={() => setContentsOpen(false)}
                className="grid size-11 place-items-center"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <ol className="min-h-0 flex-1 overflow-y-auto px-3 py-2">
              {pages.map((entry, entryIndex) => {
                const current = entryIndex === index;
                return (
                  <li key={entry.id}>
                    <button
                      type="button"
                      onClick={() => go(entryIndex)}
                      aria-current={current ? "page" : undefined}
                      className="flex min-h-11 w-full items-baseline gap-4 px-2 py-2 text-left"
                    >
                      <span className="w-6 shrink-0 font-display tabular-nums text-seed">{entryIndex + 1}</span>
                      <span className="min-w-0">
                        <span className={"block font-display text-lg " + (current ? "text-vine" : "text-ink")}>
                          {entry.title}
                        </span>
                        <span className="block text-sm text-ink/60">{entry.dek}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="border-t border-ink/10 p-3">
              <button
                type="button"
                onClick={() => {
                  setVolume(volume === "melon" ? "cucumber" : "melon");
                  setContentsOpen(false);
                }}
                className="min-h-11 w-full px-2 text-left font-display text-lg text-vine"
              >
                {volume === "melon" ? "Open the cucumber volume" : "Open the melon volume"}
              </button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
