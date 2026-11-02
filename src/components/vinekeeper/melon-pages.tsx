import { Check } from "lucide-react";
import { ChapterTitle, Kicker, Note, Page, Plate, Prose, Pull, Subhead } from "@/components/vinekeeper/plates";
import {
  GUSTS,
  HEAT,
  MELONS,
  SEAT_TASKS,
  SHADE,
  SPRING_TASKS,
  WATCH_TASKS,
  melonById,
  plantLoad,
  windCases,
  type Gust,
} from "@/lib/melon-data";
import { useReading } from "@/lib/reading";

function lb(n: number) {
  const rounded = Math.round(n * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

export function MelonCover() {
  const setChapter = useReading((state) => state.setChapter);
  const setVolume = useReading((state) => state.setVolume);
  const jumps = [
    { chapter: 1, label: "Weight", note: "What each fruit asks of the wire" },
    { chapter: 2, label: "The trellis", note: "Metal that stays clean and does not rot" },
    { chapter: 3, label: "Wind", note: "Standing, tarped, or laid down" },
    { chapter: 4, label: "The storm", note: "Covers you can drop before dark" },
    { chapter: 8, label: "Bonus", note: "A wire gazebo, glories, and roses" },
  ];

  return (
    <article className="plate-in mx-auto grid w-full max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-10 md:py-12">
      <div>
        <p className="font-display text-sm text-vine">The Vinekeeper · Volume II</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ink md:text-6xl">Melons</h1>
        <p className="mt-2 font-display text-lg text-ink">Blue and the Awesome Dudes</p>
        <p className="mt-4 max-w-md font-display text-xl italic leading-snug text-ink/85">
          What the fruit weighs, what the trellis must be, and how to cover it before the wind arrives.
        </p>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink/80">
          Cantaloupe through icebox watermelon, hung in cloth and carried on galvanized steel. A solid tarp is
          not a storm plan. A hinge you already installed is.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setChapter(1)}
            className="inline-flex min-h-11 items-center bg-ink px-5 text-paper"
          >
            Open the book
          </button>
          <button
            type="button"
            onClick={() => setVolume("cucumber")}
            className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-ink"
          >
            Cucumber volume
          </button>
        </div>
        <ul className="mt-8 border-t border-ink/15">
          {jumps.map((jump) => (
            <li key={jump.chapter} className="border-b border-ink/10">
              <button
                type="button"
                onClick={() => setChapter(jump.chapter)}
                className="flex min-h-11 w-full flex-col items-start justify-center py-2 text-left"
              >
                <span className="font-display text-lg text-ink">{jump.label}</span>
                <span className="text-sm text-ink/70">{jump.note}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img
          src="/plates/melon-cover.jpg"
          alt="A botanical plate of a melon vine: a netted cantaloupe in a cloth sling, a pale honeydew, and a small striped watermelon on the ground."
          className="w-full border border-ink/10 bg-paper"
        />
        <figcaption className="mt-3 text-sm leading-relaxed text-ink/75">
          <span className="font-display italic text-seed">Plate I. </span>
          Three fruits, three weights. Only the lighter two belong in the air.
        </figcaption>
      </figure>
    </article>
  );
}

export function WeightsPage() {
  const melonId = useReading((state) => state.melonId);
  const setMelon = useReading((state) => state.setMelon);
  const melon = melonById(melonId);
  const load = plantLoad(melon);

  return (
    <Page>
      <Kicker numeral="I" label="Weight" />
      <ChapterTitle>Hang only what the stem can survive</ChapterTitle>
      <Plate
        src="/plates/melon-kinds.jpg"
        alt="A painted row of melons from a tiny pale fruit through cantaloupe and honeydew to a small watermelon and a large ground watermelon."
        plate="Plate II"
        caption="Left to right the fruit gets heavier. Past a certain weight it stays on the ground, on purpose."
      />
      <Prose>
        <p className="drop">
          A melon trellis fails in two different ways, and they are easy to confuse. The wire can be too weak
          for the fruit. Or the fruit can be light enough for the wire and still tear off its own stem the
          first time the vine sails in a gust. The sling is how you separate those problems. The cloth carries
          the pounds. The stem only has to stay unkinked.
        </p>
        <p>
          The figures below use the heavy end of a typical fruit, not a hopeful average. Static load is the
          fruit you chose to keep, plus a wet vine. The design load doubles that, because a sling swings. This
          is a gardener’s allowance, not a stamped drawing.
        </p>
      </Prose>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Melon types">
        {MELONS.map((entry) => {
          const selected = entry.id === melon.id;
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setMelon(entry.id)}
              className={
                "min-h-11 px-3 text-left text-sm " +
                (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink")
              }
            >
              {entry.name}
            </button>
          );
        })}
      </div>
      <div className="mt-4 border border-ink/15 px-4 py-5">
        <p className="font-display text-sm text-seed">{melon.latin}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">{melon.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-ink">{melon.note}</p>
        <dl className="mt-5 space-y-4">
          <Row
            label="Fruit"
            text={
              melon.hang === "ground"
                ? `${lb(melon.fruitLb)} lb, and it stays down`
                : `${lb(melon.keep)} fruit × ${lb(melon.fruitLb)} lb = ${lb(load.fruit)} lb`
            }
          />
          <Row label="Wet vine" text={`${lb(melon.vineLb)} lb of leaves and stem after rain`} />
          <Row label="Static" text={`${lb(load.staticLb)} lb on that plant`} />
          <Row label="Design" text={`${lb(load.designLb)} lb, static times two, per plant`} />
          <Row
            label="On 16 ft"
            text={`${lb(load.plants)} plants at ${melon.spacingFt} ft, ${lb(load.panelLb)} lb of design load on the panel`}
          />
        </dl>
      </div>
      <Note title="Space the heavy ones">
        <p>
          Anything with a design load of about 40 pounds or more is set 4 feet apart, not 2. You carry fewer
          fruit on the panel, and the wind gets a gap. A 16-foot cattle panel can take the vertical load. The
          post and the anchor are what fold.
        </p>
      </Note>
    </Page>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-ink/10 pt-4 sm:flex-row sm:gap-4">
      <dt className="font-display text-sm text-vine sm:w-24 sm:shrink-0">{label}</dt>
      <dd className="text-base tabular-nums leading-relaxed text-ink">{text}</dd>
    </div>
  );
}

export function TrellisPage() {
  return (
    <Page>
      <Kicker numeral="II" label="The trellis" />
      <ChapterTitle>Metal, cloth, and anchors</ChapterTitle>
      <Plate
        src="/plates/melon-trellis.jpg"
        alt="A galvanized steel arch trellis with two cantaloupes resting in cloth slings, no wood and no rust."
        plate="Plate III"
        caption="The panel is the shelf. The sling is the shelf bracket. The stem is not a bracket."
      />
      <Prose>
        <p className="drop">
          Choose materials that wet leaves cannot feed, that sap cannot stain or rot, and that a storm cannot
          soften. That rules out wood, bamboo, cotton, jute, and the thin zinc on bargain wire. It leaves
          hot-dip galvanized steel, stainless where the air is salty, anodized aluminum for light frames, and
          cloth that does not drink water.
        </p>
      </Prose>
      <Subhead>The frame</Subhead>
      <Prose>
        <p>
          Use a 16-foot cattle panel or hog panel in 4-gauge wire that was hot-dip galvanized, not merely
          electroplated. Electroplate looks silver in May and freckles by August. Hot-dip zinc survives wet
          foliage, soil splash, and years of weather. Hose it off. Do not let bare copper pipe or copper wire
          rest on it. Copper strips zinc.
        </p>
        <p>
          Posts are galvanized steel pipe, the 2-3/8 inch chain-link terminal post, set 30 to 36 inches in the
          ground, 4 feet apart. In clay that stays wet, guy the top or set the post in a concrete pier. A
          T-post driven a foot deep is a fair-weather stick. It will hinge at the soil in a gust.
        </p>
        <p>
          Within about ten miles of salt water, use 316 stainless for shackles, cable, and sling clips. Type
          304 tea-stains and then pits. Anodized 6061 aluminum tube is a clean light frame if the wall is
          thick, about an eighth of an inch, and the diameter is at least an inch and a half. Aluminum is less
          stiff than steel. Do not build a melon arch out of thin conduit.
        </p>
      </Prose>
      <Subhead>The sling</Subhead>
      <Prose>
        <p>
          One-inch polyester webbing, the outdoor-chair kind, or a doubled square of UV-stable HDPE shade
          cloth. Neither one absorbs water, so they do not stay wet against the rind and they do not host the
          mildew a cotton hammock keeps. Girth the fruit loosely. Clip the sling to two horizontal wires with
          a galvanized or stainless snap, not a zip tie. A zip tie goes brittle in the sun, and you cannot
          open it with cold wet hands.
        </p>
        <p>
          Put the sling on while the fruit is small. A cantaloupe that slips when ripe will fall the height of
          the wire if nothing is under it. A watermelon never slips. Its stem simply breaks.
        </p>
      </Prose>
      <Subhead>Do not build it out of these</Subhead>
      <Prose>
        <p>
          Untreated wood rots at the soil and holds disease from one summer to the next. Pressure-treated
          lumber stays damp, grows a film, and the copper in the treatment is hard on galvanized wire. Bamboo
          fails at the node in a wet year. PVC pipe chalks and turns brittle in the sun, then shatters in a
          cold gust. Sisal, jute, and cotton twine rot where they touch a wet stem. Baling twine stretches and
          then snaps. A solid blue tarp is a material problem of its own, and it is treated on the wind page.
        </p>
      </Prose>
      <Pull>The panel is rarely what fails. The anchor is.</Pull>
    </Page>
  );
}

export function WindPage() {
  const gust = useReading((state) => state.gust);
  const setGust = useReading((state) => state.setGust);
  const cases = windCases(gust);
  const advice =
    gust <= 40
      ? "A guyed panel can stay up. Check the shackles and the slings before the wind, not during it."
      : gust <= 60
        ? "A thick vine is near the edge. If the forecast says gusts rather than a steady breeze, lay the panel down."
        : "Do not leave it standing. The laid-down load is the one the anchors can actually hold.";

  return (
    <Page>
      <Kicker numeral="III" label="Wind" />
      <ChapterTitle>A trellis is a sail</ChapterTitle>
      <Prose>
        <p className="drop">
          Fruit weight pulls down. Wind pushes sideways, and sideways is how posts fold. A 16-foot panel that
          stands about four feet tall is roughly 67 square feet of vine. The push on it is estimated here with
          the ordinary velocity pressure, 0.00256 times the speed squared, speed in miles per hour, answer in
          pounds per square foot. A leafy panel you can still see light through is taken as half a solid wall.
          A sealed tarp is the whole wall.
        </p>
      </Prose>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Gust speed">
        {GUSTS.map((speed) => {
          const selected = speed === gust;
          return (
            <button
              key={speed}
              type="button"
              aria-pressed={selected}
              onClick={() => setGust(speed as Gust)}
              className={
                "min-h-11 min-w-16 px-4 tabular-nums " +
                (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink")
              }
            >
              {speed} mph
            </button>
          );
        })}
      </div>
      <dl className="mt-4 border border-ink/15">
        <WindRow label="Leafy panel, standing" pounds={cases.standing} hint="Half a solid wall of vine" />
        <WindRow label="Solid tarp, standing" pounds={cases.tarp} hint="The same panel under a sealed cover" />
        <WindRow label="Panel laid down" pounds={cases.laid} hint="About 16 feet by a foot and a quarter of vine" />
      </dl>
      <p className="mt-4 text-base leading-relaxed text-ink">{advice}</p>
      <Note title="Read the middle number twice">
        <p>
          At {gust} mph a solid cover does not protect the trellis. It roughly doubles the sideways load. That
          is why the storm cloth in the next chapter is a permeable windbreak, about half solid, and why a
          hail net goes over a panel that is already lying down. Four screw anchors, each rated well above
          the share of a standing hit, live in the ground from spring. If the forecast is an 80 mph gust, you
          do not ask them to prove it.
        </p>
      </Note>
    </Page>
  );
}

function WindRow({ label, pounds, hint }: { label: string; pounds: number; hint: string }) {
  return (
    <div className="border-b border-ink/10 px-4 py-4 last:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <dt className="font-display text-lg text-ink">{label}</dt>
        <dd className="font-display text-2xl tabular-nums text-seed">{lb(pounds)} lb</dd>
      </div>
      <p className="mt-1 text-sm text-ink/70">{hint}</p>
    </div>
  );
}

export function StormPage() {
  return (
    <Page>
      <Kicker numeral="IV" label="The storm" />
      <ChapterTitle>Drop it before the wind does</ChapterTitle>
      <Plate
        src="/plates/melon-storm.jpg"
        alt="A galvanized melon trellis at dusk with a roll of pale cloth on a pipe along the top and one length already dropped."
        plate="Plate IV"
        caption="The cloth lives on the ridge all season. A storm is an unroll, not a trip to the shed."
      />
      <Prose>
        <p className="drop">
          The covers that survive a bad decade of wind are the ones already attached. If the plan requires
          finding a tarp, a ladder, and eight loose bricks, it will not happen in the twenty minutes you
          actually get. Bricks become projectiles. A sealed tarp becomes a sail. Build three setups in the
          spring, and the warning is a short list.
        </p>
      </Prose>
      <Subhead>One. The hinged panel</Subhead>
      <Prose>
        <p>
          Pin the bottom wire of the cattle panel to the posts with two galvanized hitch pins, so the panel
          can rotate down to the leeward side. Hold the top with two snap shackles. On a calm day in May,
          unclip it and walk it down onto boards or straw, then stand it back up. You want to know the path
          of the fruit before you do it in the dark.
        </p>
        <p>
          When gusts may pass 45 mph, that is the move. Two shackles, walk it down, pin it to the anchors
          that are already in the ground. A panel on its side is no longer a four-foot sail. Do this before
          dark if you can. A vine laid down for one night is usually fine. A vine left standing through the
          gust is the one that kinks.
        </p>
      </Prose>
      <Subhead>Two. Wind cloth on a pipe</Subhead>
      <Prose>
        <p>
          For a wind you intend to ride out with the panel still up — a 40 mph blow, not an 80 — keep a
          knitted agricultural windbreak, about half solid, rolled on an aluminum pipe at the ridge. One slip
          knot releases it. Clip the leeward edge. Leave the bottom open a hand’s width so the cloth cannot
          balloon. Half-solid cloth sheds some speed and lets air through. A painter’s tarp does the opposite,
          and the wind page is the arithmetic.
        </p>
        <p>
          Fleece row cover is not this cloth. It shreds, and it sticks to wet leaves.
        </p>
      </Prose>
      <Subhead>Three. Hail over a lowered row, and over fruit on the ground</Subhead>
      <Prose>
        <p>
          Hail wants a cover. Wind wants that cover small. So the hail net goes on after the panel is down, or
          over low hoops, never as a lid on a standing trellis. Use knitted hail net, not vinyl. Weight the
          hem with chain in a sleeve, or with a sand tube sewn in. Nothing loose.
        </p>
        <p>
          For melons that live on the ground, leave fiberglass hoop rods in the row all season, pushed a foot
          deep, every 4 feet. Fiberglass flexes. Sun-rotted PVC snaps. The net stays rolled at the end of the
          row, and the clamps live on the hoops. Two people can cover one row in about ten minutes. A
          windward fence of the same half-solid cloth, 4 feet high and a few feet upwind, slows the gust at
          the fruit without building a roof.
        </p>
        <p>
          Sit ground fruit on coarse gravel or a pinned sheet of HDPE so the rain that follows does not leave
          them in mud. Do not use a loose edge of plastic mulch. Storms turn it into litter and a small sail.
          Woven groundcover, pinned and taken up at the end of the year, is the piece that stays clean.
        </p>
      </Prose>
      <Pull>If the hinge is not in yet, you do not have a fifteen-minute plan.</Pull>
      <Prose>
        <p>
          An unwired panel is not a job for a warning. Guy the posts if that is all you can do, pick what will
          slip, and put the hinge in before the next one. The lists below stay on this device.
        </p>
      </Prose>
      <CheckList title="Set this in the spring" items={SPRING_TASKS} />
      <CheckList title="When a watch is posted" items={WATCH_TASKS} />
    </Page>
  );
}

function CheckList({ title, items }: { title: string; items: { id: string; label: string }[] }) {
  const checks = useReading((state) => state.stormChecks);
  const toggle = useReading((state) => state.toggleStorm);
  const done = items.filter((item) => checks[item.id]).length;

  return (
    <section className="mt-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold text-vine">{title}</h3>
        <p className="font-display text-sm tabular-nums text-seed">
          {done} of {items.length}
        </p>
      </div>
      <ul className="mt-3 border-t border-ink/15">
        {items.map((item) => {
          const on = Boolean(checks[item.id]);
          return (
            <li key={item.id} className="border-b border-ink/10">
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(item.id)}
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
    </section>
  );
}

export function HeatPage() {
  const heatId = useReading((state) => state.heat);
  const setHeat = useReading((state) => state.setHeat);
  const band = HEAT.find((entry) => entry.id === heatId) ?? HEAT[1];

  return (
    <Page>
      <Kicker numeral="V" label="Heat" />
      <ChapterTitle>They will not rush for you</ChapterTitle>
      <Prose>
        <p className="drop">
          Melons want warmer soil than cucumbers and a longer run of hot days. Seed sits and rots below about
          70°F. Germination is happier near 80°F to 90°F. If you start them indoors, give them no more than
          three weeks, in a pot that is planted whole. A torn root is a vine that sits there while the season
          leaves.
        </p>
        <p>
          A zone number is only a hint about how long the heat lasts. Pick the band you actually garden in.
        </p>
      </Prose>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Summer length">
        {HEAT.map((entry) => {
          const selected = entry.id === band.id;
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setHeat(entry.id)}
              className={
                "min-h-11 px-3 text-sm " +
                (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink")
              }
            >
              {entry.zones}
            </button>
          );
        })}
      </div>
      <div className="mt-4 border border-ink/15 px-4 py-5">
        <p className="font-display text-sm text-seed">{band.zones}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">{band.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-ink">{band.text}</p>
      </div>
      <Note title="Sugar is a heat problem too">
        <p>
          Keep water steady while the fruit is sizing. Ease off only after it is full size, and not in the
          middle of a scorching week. A drought swing early makes small, split, or tasteless fruit. The last
          dry days are for concentrating sugar, not for saving a wilted vine.
        </p>
      </Note>
    </Page>
  );
}

export function MelonVinePage() {
  return (
    <Page>
      <Kicker numeral="VI" label="The vine" />
      <ChapterTitle>Flowers, water, and the day it lets go</ChapterTitle>
      <Prose>
        <p className="drop">
          Melon flowers work like cucumber flowers. Males open first, on a plain stem. Females carry a tiny
          fruit behind the blossom. Bees do the work in the morning, or you do it with a male flower stripped
          of its petals, before noon. A fruit that yellows and drops when it is the size of a thumb was not
          pollinated.
        </p>
        <p>
          Muskmelons, honeydews, Galias, and Charentais are all <em>Cucumis melo</em>. They cross with each
          other, and with an Armenian cucumber, which is a melon wearing the wrong name. They do not cross
          with watermelon, and they do not cross with a true cucumber. Watermelon crosses only with
          watermelon.
        </p>
      </Prose>
      <Subhead>When it is ready</Subhead>
      <Prose>
        <p>
          A cantaloupe or Galia is ready at full slip: the fruit separates from the stem with a gentle push,
          and it smells like itself across the row. Do not pull a half-slip fruit and expect it to sweeten on
          the counter the way a pear might. Honeydew and Canary do not slip. The rind turns cream or gold and
          the blossom end gives slightly.
        </p>
        <p>
          Watermelon does not slip. Look at the tendril nearest the fruit, the yellow ground spot, and a thud
          that has gone dull. Those signs together are better than any one of them. Cut it. Do not tear the
          vine you are hoping will feed the next fruit.
        </p>
      </Prose>
      <Pull>A sling under a slipping cantaloupe is the difference between a fruit and a bruise.</Pull>
    </Page>
  );
}

export function GazeboPage() {
  const shadeId = useReading((state) => state.shade);
  const setShade = useReading((state) => state.setShade);
  const checks = useReading((state) => state.seatChecks);
  const toggle = useReading((state) => state.toggleSeat);
  const shade = SHADE.find((entry) => entry.id === shadeId) ?? SHADE[0];
  const done = SEAT_TASKS.filter((item) => checks[item.id]).length;

  return (
    <Page>
      <Kicker numeral="VIII" label="Bonus" />
      <ChapterTitle>Shade at the edge of the beds</ChapterTitle>
      <Plate
        src="/plates/gazebo.jpg"
        alt="A galvanized gazebo with blue morning glories on the wire roof, pink climbing roses on the sides, and a bench facing the vegetable beds."
        plate="Plate V"
        caption="The garden side stays open. The vines shade the seat, not the beds."
      />
      <Prose>
        <p className="drop">
          Set an eight-foot square of the same galvanized pipe on the north side of the garden, in full sun.
          Morning glories cover the wire the first summer. Climbing roses take the sides and stay. You sit
          facing the beds, in dappled light, close enough to see what wants picking.
        </p>
        <p>
          Put it on the north edge so the noon shadow falls inside the square and not across the melons. The
          structure itself wants sun. The vegetables do not want its shade.
        </p>
      </Prose>
      <Subhead>The frame, in a weekend</Subhead>
      <Prose>
        <p>
          Four galvanized posts, the 2-3/8 inch chain-link terminal post, ten feet long. Dig a hole about a
          foot across and three feet deep at each corner, eight feet apart. Set the post, plumb it, and pour
          concrete. Brace it and leave it overnight. About seven and a half feet of post stand above the
          gravel.
        </p>
        <p>
          Clamp a galvanized fence rail around the top, a level square. Then a ridge of the same rail down
          the middle, about eighteen inches higher, held by two short uprights clamped to the side rails.
          Bolt-cut a sixteen-foot cattle panel into two halves. Bend each half from an eave up to the ridge
          and clip it. That is the roof: open wire, not decking and not a tarp. A sealed lid is the sail the
          wind chapter already priced.
        </p>
        <p>
          Clip panels to the north, east, and west with snap shackles at the top, the same hardware as the
          melon trellis, so a windward wall can come off before a warning. Leave the south side open toward
          the beds. You walk in there. You look out there.
        </p>
      </Prose>
      <Subhead>A bench you can hose</Subhead>
      <Prose>
        <p>
          A galvanized frame, five feet long, set against the north panel and facing the garden. Seat height
          eighteen inches, depth about sixteen. Slats of HDPE lumber, gapped half an inch so rain does not
          sit. It does not splinter, rot, or hold a film the way a wooden seat does in a wet summer. A
          horizontal rail a foot above the seat is the backrest. Do not lean into the wires. The roses will
          live there, and they have thorns.
        </p>
        <p>
          Floor the square with gravel over a pinned sheet of woven groundcover. Gravel drains, hoses clean,
          and does not splash soil onto rose leaves. Do not leave a loose edge of plastic. Wind takes it.
        </p>
      </Prose>
      <Subhead>Two plants, two wires</Subhead>
      <Prose>
        <p>
          Give them separate grids. Morning glory dies at frost and has to be pulled. If it has twined through
          the rose, you strip bark when you pull it. Roses go on an inner run of wire at the east and west
          posts. Morning glories go on the outer grid and across the roof.
        </p>
      </Prose>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Which summer">
        {SHADE.map((entry) => {
          const selected = entry.id === shade.id;
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setShade(entry.id)}
              className={
                "min-h-11 px-3 text-sm " +
                (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink")
              }
            >
              {entry.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 border border-ink/15 px-4 py-5">
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{shade.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-ink">{shade.text}</p>
      </div>
      <Prose>
        <p>
          Sow <em>Ipomoea tricolor</em>, the annual morning glory, not bindweed. Soak the seed overnight and
          sow half an inch deep when the soil is near 65°F, about six seeds at each post, thinned to three.
          Set them six inches out from the metal so the stem is not against a post that heats in the sun. They
          twine on wire. A bare post is not a trellis. Pull the dead vines while they are still limp, before
          they dry into a mat. Pull seedlings that come up in the beds. They will.
        </p>
        <p>
          Plant two repeat-blooming climbers that stay near eight to twelve feet. Not a rambler. A rambler
          can throw twenty feet of cane and turn the roof into a solid sail. Eighteen inches off the side
          posts, so the crown is not against hot metal and your hand can get in to tie. Where winters freeze
          hard, set the bud union about two inches below the soil. Where they do not, set it at soil level.
        </p>
        <p>
          Fan the canes toward horizontal. A cane trained straight up flowers at the tip. A cane laid along
          the wire flowers along its length, which is the wall beside the bench. Tie with a loose strip of
          polyester webbing or soft stretch tape, never wire, and loosen the ties each spring before they
          girdle. Water the soil, not the leaves. Wet foliage is how black spot starts.
        </p>
        <p>
          In late winter take out dead and crossing wood and keep the main canes. Do not cut a climber down
          to stubs.
        </p>
      </Prose>
      <Pull>The glory is this summer’s shade. The rose is the reason you sit there next year.</Pull>
      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-vine">Raise it, then plant it</h3>
          <p className="font-display text-sm tabular-nums text-seed">
            {done} of {SEAT_TASKS.length}
          </p>
        </div>
        <ul className="mt-3 border-t border-ink/15">
          {SEAT_TASKS.map((item) => {
            const on = Boolean(checks[item.id]);
            return (
              <li key={item.id} className="border-b border-ink/10">
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(item.id)}
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
      </section>
    </Page>
  );
}

export function AfterPage() {
  const setVolume = useReading((state) => state.setVolume);

  return (
    <Page>
      <Kicker numeral="VII" label="After" />
      <ChapterTitle>Lift it in the morning</ChapterTitle>
      <Prose>
        <p className="drop">
          Once the gusts are under about 25 mph, stand the panel back up and take the cloth off. Melon leaves
          that stay wet under a cover get downy mildew and gummy stem blight, which will take the rest of the
          season even if the wind took nothing. Rewind the cloth on the pipe while it is dry. A wet roll
          mildews in the sleeve and welds itself shut.
        </p>
        <p>
          Reset every sling. A fruit that spent the night on a board may have a kinked stem. If the stem is
          pinched white, eat that fruit if it is close, or accept that it has stopped. Check the hinge pins
          and the anchor eyes. Replace a shackle that opened. Do not “temporarily” wire the top shut. Wire is
          how the next storm catches you.
        </p>
      </Prose>
      <Subhead>What the decade changed</Subhead>
      <Prose>
        <p>
          A trellis that was fine in a calm year is a sail in a year of warnings. Build the hinge, the
          anchors, and the roller as part of the trellis, out of metal and cloth that the plants and the
          weather do not eat. Then the warning is a walk down the row, not a rebuild.
        </p>
        <p>
          <button type="button" onClick={() => setVolume("cucumber")} className="min-h-11 text-left underline decoration-seed decoration-2 underline-offset-4">
            The cucumber volume is the other half of this press.
          </button>
        </p>
      </Prose>
    </Page>
  );
}

export const MELON_PAGES = [
  { id: "cover", title: "Cover", dek: "Weight, metal, and weather", Page: MelonCover },
  { id: "weight", title: "Weight", dek: "What each fruit asks of the wire", Page: WeightsPage },
  { id: "trellis", title: "The trellis", dek: "Metal that stays clean", Page: TrellisPage },
  { id: "wind", title: "Wind", dek: "Standing, tarped, or laid down", Page: WindPage },
  { id: "storm", title: "The storm", dek: "Covers you can drop before dark", Page: StormPage },
  { id: "heat", title: "Heat", dek: "They will not rush for you", Page: HeatPage },
  { id: "vine", title: "The vine", dek: "Flowers, water, and slip", Page: MelonVinePage },
  { id: "after", title: "After", dek: "Lift it in the morning", Page: AfterPage },
  { id: "seat", title: "Bonus", dek: "A seat of glory and roses", Page: GazeboPage },
] as const;
