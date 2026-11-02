import type { Gust, ShadeYear } from "@/lib/melon-data";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Kin } from "@/lib/field-data";

export type Volume = "melon" | "cucumber";

type ReadingState = {
  chapter: number;
  zone: number;
  checks: Record<string, boolean>;
  companion: string | null;
  kin: Kin;
  volume: Volume;
  melonId: string;
  gust: Gust;
  heat: string;
  stormChecks: Record<string, boolean>;
  shade: ShadeYear;
  seatChecks: Record<string, boolean>;
  setChapter: (chapter: number) => void;
  setZone: (zone: number) => void;
  toggleCheck: (id: string) => void;
  setCompanion: (id: string | null) => void;
  setKin: (kin: Kin) => void;
  setVolume: (volume: Volume) => void;
  setMelon: (melonId: string) => void;
  setGust: (gust: Gust) => void;
  setHeat: (heat: string) => void;
  toggleStorm: (id: string) => void;
  setShade: (shade: ShadeYear) => void;
  toggleSeat: (id: string) => void;
};

export const useReading = create<ReadingState>()(
  persist(
    (set) => ({
      chapter: 0,
      zone: 6,
      checks: {},
      companion: "nasturtium",
      kin: "helps",
      volume: "melon",
      melonId: "cantaloupe",
      gust: 60,
      heat: "mid",
      stormChecks: {},
      shade: "first",
      seatChecks: {},
      setChapter: (chapter) => set({ chapter }),
      setZone: (zone) => set({ zone }),
      toggleCheck: (id) =>
        set((state) => ({
          checks: { ...state.checks, [id]: !state.checks[id] },
        })),
      setCompanion: (companion) => set({ companion }),
      setKin: (kin) => set({ kin }),
      setVolume: (volume) => set({ volume, chapter: 0 }),
      setMelon: (melonId) => set({ melonId }),
      setGust: (gust) => set({ gust }),
      setHeat: (heat) => set({ heat }),
      toggleStorm: (id) =>
        set((state) => ({
          stormChecks: { ...state.stormChecks, [id]: !state.stormChecks[id] },
        })),
      setShade: (shade) => set({ shade }),
      toggleSeat: (id) =>
        set((state) => ({
          seatChecks: { ...state.seatChecks, [id]: !state.seatChecks[id] },
        })),
    }),
    { name: "vinekeeper-reading", skipHydration: true },
  ),
);
