import { MONTHS, ZONES, zoneByNumber } from "@/lib/field-data";
import { useReading } from "@/lib/reading";

export function ZoneGuide() {
  const zone = useReading((state) => state.zone);
  const setZone = useReading((state) => state.setZone);
  const guide = zoneByNumber(zone);

  return (
    <section className="mt-8" aria-labelledby="zone-heading">
      <h3 id="zone-heading" className="font-display text-2xl font-semibold text-vine">
        Choose a zone
      </h3>
      <p className="mt-2 text-base leading-relaxed text-ink/80">
        These are typical windows for the last spring frost in that zone. A coastal garden and an inland
        garden with the same number do not share a summer. Shift the dates to your own frost, and do not sow
        until the soil is warm.
      </p>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="USDA zones">
        {ZONES.map((entry) => {
          const selected = entry.zone === guide.zone;
          return (
            <button
              key={entry.zone}
              type="button"
              aria-pressed={selected}
              onClick={() => setZone(entry.zone)}
              className={
                "min-h-11 min-w-11 px-3 font-display text-base " +
                (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink")
              }
            >
              {entry.zone}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border border-ink/15 px-4 py-5">
        <p className="font-display text-sm text-seed">Zone {guide.zone}</p>
        <p className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">{guide.season}</p>
        <p className="mt-2 text-sm text-ink/70">Usual last frost: {guide.frost}</p>

        <SeasonStrip sowMonths={guide.sowMonths} pickMonths={guide.pickMonths} />

        <dl className="mt-6 space-y-4">
          <Beat label="Indoors" text={guide.indoor} />
          <Beat label="Sowing" text={guide.sow} />
          <Beat label="Harvest" text={guide.harvest} />
          <Beat label="Again" text={guide.again} />
          <Beat label="Varieties" text={guide.pick} />
          <Beat label="Watch" text={guide.watch} />
        </dl>
      </div>
    </section>
  );
}

function SeasonStrip({ sowMonths, pickMonths }: { sowMonths: number[]; pickMonths: number[] }) {
  return (
    <div className="mt-5">
      <ol aria-label="Season by month" className="grid grid-cols-12 gap-1">
        {MONTHS.map((name, index) => {
          const sowing = sowMonths.includes(index);
          const picking = pickMonths.includes(index);
          const tone = sowing
            ? "bg-blossom text-ink"
            : picking
              ? "bg-vine text-paper"
              : "bg-ink/5 text-ink/70";
          const state = sowing && picking ? "sow and harvest" : sowing ? "sow" : picking ? "harvest" : "quiet";
          return (
            <li key={name}>
              <span
                title={`${name}: ${state}`}
                aria-label={`${name}, ${state}`}
                className={`grid h-11 place-items-center text-xs ${tone}`}
              >
                {name.slice(0, 1)}
              </span>
            </li>
          );
        })}
      </ol>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/75">
        <li className="flex items-center gap-2">
          <span className="inline-block size-3 bg-blossom" aria-hidden="true" />
          Sow
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block size-3 bg-vine" aria-hidden="true" />
          Pick to eat
        </li>
        <li>A shared month is marked for sowing.</li>
      </ul>
    </div>
  );
}

function Beat({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-ink/10 pt-4 sm:flex-row sm:gap-4">
      <dt className="font-display text-sm text-vine sm:w-24 sm:shrink-0">{label}</dt>
      <dd className="text-base leading-relaxed text-ink">{text}</dd>
    </div>
  );
}
