export type Hang = "sling" | "ground";

export type MelonKind = {
  id: string;
  name: string;
  latin: string;
  /** Heavy end of a typical fruit, in pounds. */
  fruitLb: number;
  /** How many fruit to leave hanging on one vine. Zero means the fruit stays down. */
  keep: number;
  /** Wet vine and leaves, pounds. */
  vineLb: number;
  hang: Hang;
  spacingFt: 2 | 4;
  note: string;
};

export type HeatBand = {
  id: string;
  zones: string;
  title: string;
  text: string;
};

export const PANEL = {
  lengthFt: 16,
  heightFt: 50 / 12,
  /** Face the wind sees once the panel is walked down: length times a low bulk of vine. */
  laidHeightFt: 1.25,
  leafy: 0.5,
  tarp: 1,
};

export const GUSTS = [40, 60, 80] as const;
export type Gust = (typeof GUSTS)[number];

export const MELONS: MelonKind[] = [
  {
    id: "sprite",
    name: "Sprite and Korean",
    latin: "Cucumis melo",
    fruitLb: 1.5,
    keep: 6,
    vineLb: 5,
    hang: "sling",
    spacingFt: 2,
    note: "The stem will often hold a fruit this light. The sling is for wind, and for the morning the fruit ripens and lets go.",
  },
  {
    id: "galia",
    name: "Charentais and Galia",
    latin: "Cucumis melo",
    fruitLb: 3,
    keep: 4,
    vineLb: 7,
    hang: "sling",
    spacingFt: 2,
    note: "Small muskmelons. Leave four on the vine and eat or thin the rest. Sling each one so a ripe fruit cannot drop.",
  },
  {
    id: "cantaloupe",
    name: "Cantaloupe",
    latin: "Cucumis melo",
    fruitLb: 5,
    keep: 4,
    vineLb: 8,
    hang: "sling",
    spacingFt: 4,
    note: "Size the trellis for the heavy end of the variety, not the catalog average. A full-slip cantaloupe detaches when it is ripe. The sling is what catches it.",
  },
  {
    id: "honeydew",
    name: "Honeydew and Canary",
    latin: "Cucumis melo",
    fruitLb: 7,
    keep: 3,
    vineLb: 10,
    hang: "sling",
    spacingFt: 4,
    note: "A seven-pound fruit will kink its own stem in a gust. Sling every one, to two wires, while the fruit is still the size of a fist.",
  },
  {
    id: "personal",
    name: "Personal watermelon",
    latin: "Citrullus lanatus",
    fruitLb: 6,
    keep: 2,
    vineLb: 10,
    hang: "sling",
    spacingFt: 4,
    note: "A watermelon stem does not carry the fruit. The sling is the structure. Two fruit is enough on a vine you are hanging.",
  },
  {
    id: "icebox",
    name: "Icebox watermelon",
    latin: "Citrullus lanatus",
    fruitLb: 12,
    keep: 1,
    vineLb: 12,
    hang: "sling",
    spacingFt: 4,
    note: "One fruit in the air. Cradle it early and let the cloth take the weight as it grows. Do not try to sling a melon that is already ten pounds and swinging.",
  },
  {
    id: "ground",
    name: "Standard and Crenshaw",
    latin: "Citrullus and late Cucumis",
    fruitLb: 20,
    keep: 0,
    vineLb: 14,
    hang: "ground",
    spacingFt: 4,
    note: "Standard watermelons of 15 to 30 pounds, casaba, Crenshaw, and anything bred for size stay on the ground. Hanging them bends the panel or snaps the stem on the first real gust.",
  },
];

export const HEAT: HeatBand[] = [
  {
    id: "short",
    zones: "Zones 2–4",
    title: "A short, cool summer",
    text: "Sprite, Korean, and the earliest cantaloupes only, on black woven groundcover to warm the bed. Start them indoors no more than three weeks before the soil holds near 70°F, in pots you can plant whole. Icebox watermelon is a gamble. A standard watermelon will not finish.",
  },
  {
    id: "mid",
    zones: "Zones 5–6",
    title: "Enough heat if you do not wait",
    text: "Cantaloupe, Galia, and Charentais are the reliable hang. Honeydew needs a long warm tail. Icebox watermelon in a hot summer; standard watermelon only in the warmer end of zone 6, and on the ground. Sow when the soil, not the air, is near 70°F.",
  },
  {
    id: "long",
    zones: "Zones 7–8",
    title: "A full melon summer",
    text: "Muskmelons and ground watermelons both have time. Direct sow or transplant once the soil is warm, and get the trellis, the hinge, and the cover roller up the same week. Fruit that is still small in a September storm is the crop you laid the panel down to save.",
  },
  {
    id: "hot",
    zones: "Zones 9–11",
    title: "Heat is not the limit. Wet leaves are.",
    text: "Sow as a warm-season crop and do not ask vines to flower through the wettest month if you can choose. Trellis for air. In a humid summer the storm cloth must come off as soon as the wind drops, or downy mildew and gummy stem blight will take what the gusts spared.",
  },
];

export function melonById(id: string): MelonKind {
  return MELONS.find((melon) => melon.id === id) ?? MELONS[2];
}

export function plantLoad(melon: MelonKind) {
  const fruit = melon.fruitLb * melon.keep;
  const staticLb = fruit + melon.vineLb;
  const designLb = staticLb * 2;
  const plants = PANEL.lengthFt / melon.spacingFt;
  return { fruit, staticLb, designLb, plants, panelLb: designLb * plants };
}

/** Velocity pressure in pounds per square foot. Speed is miles per hour. */
export function velocityPressure(mph: number) {
  return 0.00256 * mph * mph;
}

export function lateralLb(mph: number, areaSqFt: number, solidity: number) {
  return velocityPressure(mph) * areaSqFt * solidity;
}

export function windCases(mph: number) {
  const standingArea = PANEL.lengthFt * PANEL.heightFt;
  const laidArea = PANEL.lengthFt * PANEL.laidHeightFt;
  return {
    standing: lateralLb(mph, standingArea, PANEL.leafy),
    tarp: lateralLb(mph, standingArea, PANEL.tarp),
    laid: lateralLb(mph, laidArea, PANEL.leafy),
  };
}

export const SPRING_TASKS: { id: string; label: string }[] = [
  { id: "posts", label: "Galvanized posts are 30 inches in the ground, 4 feet apart" },
  { id: "hinge", label: "Bottom hinge pins are in, and the panel has been laid down once on a calm day" },
  { id: "shackles", label: "The top is held by two snap shackles, not by wire" },
  { id: "anchors", label: "Screw anchors are already in the ground, windward and for the lay-down" },
  { id: "roller", label: "Wind cloth is rolled on the ridge pipe, loose end ready" },
  { id: "hail", label: "Hail net and clamps are in a bin at the row, not at the back of the shed" },
  { id: "slings", label: "Hanging fruit is slung from the wire while it is still small" },
  { id: "hoops", label: "Ground-melon hoop rods are already in the row" },
];

export const WATCH_TASKS: { id: string; label: string }[] = [
  { id: "pick", label: "Fruit that will slip is off the vine" },
  { id: "thin", label: "Extra shoots are clipped so the sail is thinner" },
  { id: "down", label: "If gusts may pass 45 mph, the panel is walked down before dark" },
  { id: "pin", label: "The lowered panel is pinned to the anchors" },
  { id: "net", label: "If hail is forecast, the net is over the lowered row" },
  { id: "chain", label: "Ground-melon hail net is unrolled and the hem is chained" },
];

export type ShadeYear = "first" | "later";

export const SHADE: { id: ShadeYear; label: string; title: string; text: string }[] = [
  {
    id: "first",
    label: "First summer",
    title: "The morning glories make the roof",
    text: "Sown at the posts after frost, they cover the wire by midsummer. You sit in dappled shade the same year you build. The roses are only canes you have tied in, flowering at the sides, not overhead.",
  },
  {
    id: "later",
    label: "Third summer",
    title: "The roses hold the walls",
    text: "Fanned canes cover the side panels and bloom along their length. Keep sowing morning glories. A climber that stays near ten feet will not, by itself, make a solid ceiling, and you do not want it to. The glory is the quick shade. The rose is the room.",
  },
];

export const SEAT_TASKS: { id: string; label: string }[] = [
  { id: "place", label: "The square sits on the north side of the beds, in full sun" },
  { id: "piers", label: "Four posts are 3 feet in the ground, 8 feet apart, plumbed and braced" },
  { id: "rail", label: "A galvanized top rail runs the square at 7½ feet" },
  { id: "ridge", label: "A ridge rail sits about 18 inches above the eaves" },
  { id: "roof", label: "Two half cattle panels are clipped from eave to ridge, not a solid roof" },
  { id: "walls", label: "North, east, and west panels are on shackles. The garden side is open" },
  { id: "bench", label: "The bench faces the beds: galvanized frame, HDPE slats, a rail at your back" },
  { id: "floor", label: "Gravel is down over pinned woven groundcover" },
  { id: "roses", label: "Two climbers are 18 inches off the side posts, on their own inner wires" },
  { id: "glory", label: "Morning glory seed is on the outer grid, not on the rose canes" },
];
