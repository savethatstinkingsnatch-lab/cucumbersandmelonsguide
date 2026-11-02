import { COMPANIONS, KIN_LABEL, type Kin } from "@/lib/field-data";
import { useReading } from "@/lib/reading";

const ORDER: Kin[] = ["helps", "uneasy", "apart"];

export function CompanionGuide() {
  const kin = useReading((state) => state.kin);
  const setKin = useReading((state) => state.setKin);
  const companion = useReading((state) => state.companion);
  const setCompanion = useReading((state) => state.setCompanion);
  const plants = COMPANIONS.filter((plant) => plant.kin === kin);
  const copy = KIN_LABEL[kin];

  return (
    <section className="mt-8" aria-labelledby="companion-heading">
      <h3 id="companion-heading" className="font-display text-2xl font-semibold text-vine">
        The bed beside the vine
      </h3>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Companion groups">
        {ORDER.map((key) => {
          const selected = key === kin;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={selected}
              onClick={() => setKin(key)}
              className={
                "min-h-11 px-4 text-sm " +
                (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink")
              }
            >
              {KIN_LABEL[key].title}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-base leading-relaxed text-ink/80">{copy.line}</p>

      <ul className="mt-4 space-y-2">
        {plants.map((plant) => {
          const open = plant.id === companion;
          return (
            <li key={plant.id} className="border border-ink/15">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setCompanion(open ? null : plant.id)}
                className="flex min-h-11 w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span className="mt-1 size-2 shrink-0 rounded-full bg-seed" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-display text-lg text-ink">{plant.name}</span>
                  <span className="block text-sm italic text-ink/60">{plant.latin}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink/80">{plant.role}</span>
                </span>
              </button>
              {open ? (
                <p className="border-t border-ink/10 px-4 py-3 text-base leading-relaxed text-ink">
                  {plant.how}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
