import { Check } from "lucide-react";
import { CompanionGuide } from "@/components/vinekeeper/companion-guide";
import { ChapterTitle, Kicker, Note, Page, Plate, Prose, Pull, Subhead } from "@/components/vinekeeper/plates";
import { SEASON_CHECKS, SEED_STEPS, zoneByNumber } from "@/lib/field-data";
import { useReading } from "@/lib/reading";

export function CoverPage() {
  const setChapter = useReading((state) => state.setChapter);
  const setVolume = useReading((state) => state.setVolume);

  const jumps = [
    { chapter: 1, label: "The plant", note: "What you are actually growing" },
    { chapter: 3, label: "Zones", note: "A sowing calendar from 2 to 11" },
    { chapter: 9, label: "Saving seed", note: "Gold fruit, a short ferment, dry seed" },
    { chapter: 10, label: "Companions", note: "Who helps, and who only shares beetles" },
  ];

  return (
    <article className="plate-in mx-auto grid w-full max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-10 md:py-12">
      <div>
        <p className="font-display text-sm text-vine">A field book</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ink md:text-6xl">
          The Vinekeeper
        </h1>
        <p className="mt-2 font-display text-lg text-ink">Blue and the Awesome Dudes</p>
        <p className="mt-4 max-w-md font-display text-xl italic leading-snug text-ink/85">
          How to grow cucumbers, and how to keep their seed.
        </p>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink/80">
          Sowing, a zone calendar, the flowers, the pests that matter, a companion bed, and the ferment
          that turns one gold cucumber into next year’s packet.
        </p>
        <button
          type="button"
          onClick={() => setChapter(1)}
          className="mt-8 inline-flex min-h-11 items-center bg-ink px-5 text-paper"
        >
          Open the book
        </button>
        <button
          type="button"
          onClick={() => setVolume("melon")}
          className="mt-3 block min-h-11 text-left font-display text-vine"
        >
          Melons — weight, trellis, and storm covers
        </button>
        <ul className="mt-8 border-t border-ink/15">
          {jumps.map((jump) => (
            <li key={jump.chapter} className="border-b border-ink/10">
              <button
                type="button"
                onClick={() => setChapter(jump.chapter)}
                className="flex min-h-11 w-full flex-col items-start justify-center py-2 text-left"
              >
                <span className="font-display text-lg text-ink">{jump.label}</span>
                <span className="text-sm text-ink/60">{jump.note}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img
          src="/plates/cover.jpg"
          alt="A botanical painting of a cucumber vine with yellow flowers, a green fruit, and a ripe golden seed cucumber."
          className="w-full border border-ink/10 bg-paper"
        />
        <figcaption className="mt-3 text-sm leading-relaxed text-ink/75">
          <span className="font-display italic text-seed">Plate I. </span>
          Eating fruit and seed fruit on the same vine. Only one of them belongs in the kitchen this week.
        </figcaption>
      </figure>
    </article>
  );
}

export function SeedPage() {
  return (
    <Page>
      <Kicker numeral="IX" label="Saving seed" />
      <ChapterTitle>Harvest past the kitchen</ChapterTitle>
      <Plate
        src="/plates/seed.jpg"
        alt="A golden overripe cucumber cut open, seeds in gel, a glass jar of pulp, and rinsed seeds drying on cloth."
        plate="Plate VI"
        caption="Cut lengthwise, ferment the gel, keep the seeds that sink, and dry them until they snap."
      />
      <Prose>
        <p className="drop">
          Cucumbers are one of the easier fruits in the squash family to save. The color change is obvious,
          one plant can give you plenty of seed, and the cleaning is the same wet ferment you would use for
          a tomato. The discipline is waiting. Everything you like to eat is an unripe cucumber.
        </p>
      </Prose>
      <Pull>Several weeks after the fruit turns gold, it is finally a seed crop.</Pull>
      <ol className="mt-8 space-y-8">
        {SEED_STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span className="w-8 shrink-0 font-display text-2xl tabular-nums text-seed">{index + 1}</span>
            <div>
              <h3 className="font-display text-xl font-semibold leading-tight text-ink">{step.title}</h3>
              <div className="mt-2 space-y-3 text-base leading-relaxed text-ink">
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <Note title="A population, not a museum jar">
        <p>
          A single fruit can hold more seed than a household will sow. Viability is about five years in a
          cool, dark, dry jar — and shorter on a sunny shelf. Grow a fresh seed crop before the envelope
          gets casual. If you are keeping a variety going, draw that seed from several plants, not from the
          one fruit that happened to hide behind a leaf.
        </p>
      </Note>
    </Page>
  );
}

export function CompanionPage() {
  return (
    <Page>
      <Kicker numeral="X" label="Companions" />
      <ChapterTitle>The plants around the vine</ChapterTitle>
      <Plate
        src="/plates/companions.jpg"
        alt="A painted kitchen bed with cucumber vines on a trellis, nasturtiums, dill, marigolds, and lettuce along the edges."
        plate="Plate VII"
        caption="Nasturtium, dill, and marigold at the feet of a trellis. Companions are a border, not a crowd in the root zone."
      />
      <Prose>
        <p className="drop">
          Companion planting is a mix of useful insects, a few measured trials, and a lot of charts copied
          from other charts. This one keeps the pairings that change how you lay out a bed, and it says when
          the evidence is only tradition. Nothing here replaces steady water or a trellis.
        </p>
        <p>
          The crossing rule is the one people get backward. Cucumbers cross with other cucumbers. They do
          not cross with squash or melon. Grow melons beside them if you like the fruit. Give the beetles a
          gap if bacterial wilt has ever emptied a row.
        </p>
      </Prose>
      <CompanionGuide />
    </Page>
  );
}

export function YearPage() {
  const zone = useReading((state) => zoneByNumber(state.zone));
  const checks = useReading((state) => state.checks);
  const toggleCheck = useReading((state) => state.toggleCheck);
  const done = SEASON_CHECKS.filter((item) => checks[item.id]).length;

  return (
    <Page>
      <Kicker numeral="XI" label="The year" />
      <ChapterTitle>A season you can tick</ChapterTitle>
      <Prose>
        <p className="drop">
          Zone {zone.zone} is the calendar saved in this book. The usual last frost is {zone.frost}.{" "}
          {zone.season} {zone.sow}
        </p>
        <p>
          Change the zone in the calendar chapter if this is the wrong garden. The ticks below stay on this
          device. Mark a line when it is true in the bed, not when you have merely read it.
        </p>
      </Prose>
      <p className="mt-6 font-display text-sm tabular-nums text-seed">
        {done} of {SEASON_CHECKS.length} in place
      </p>
      <ul className="mt-3 border-t border-ink/15">
        {SEASON_CHECKS.map((item) => {
          const on = Boolean(checks[item.id]);
          return (
            <li key={item.id} className="border-b border-ink/10">
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggleCheck(item.id)}
                className="flex min-h-11 w-full items-start gap-3 py-3 text-left"
              >
                <span
                  className={
                    "mt-0.5 grid size-5 shrink-0 place-items-center border " +
                    (on ? "border-ink bg-ink text-paper" : "border-ink/40 bg-paper")
                  }
                  aria-hidden="true"
                >
                  {on ? <Check className="size-3" strokeWidth={2.5} /> : null}
                </span>
                <span className={on ? "text-ink/50 line-through" : "text-ink"}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <Subhead>Colophon</Subhead>
      <Prose>
        <p>
          Seed-saving numbers in this book follow Seed Savers Exchange: isolate varieties by 800 feet to
          half a mile, save from one plant for viable seed and from five to ten plants to maintain a
          variety, ferment one to three days at 70–80°F, and expect about five years of life in cool, dry,
          dark storage. Spacing, the four-week indoor limit, and the advice to trellis come from the same
          guide.
        </p>
        <p>
          The zone calendars are typical frost windows, shifted for the warmth cucumber seed actually
          needs. They are not a local forecast. A soil thermometer and your own last frost outrank every
          chart in here.
        </p>
        <p>
          <a
            className="underline decoration-seed decoration-2 underline-offset-4"
            href="https://seedsavers.org/grow-cucumber/"
            target="_blank"
            rel="noreferrer"
          >
            Seed Savers Exchange, Growing Guide: Cucumber
          </a>
        </p>
      </Prose>
    </Page>
  );
}
