export type Kin = "helps" | "uneasy" | "apart";

export type ZoneGuide = {
  zone: number;
  frost: string;
  season: string;
  indoor: string;
  sow: string;
  harvest: string;
  again: string;
  pick: string;
  watch: string;
  /** Month indexes, January = 0, when seed usually goes in. */
  sowMonths: number[];
  /** Month indexes when fruit is usually picked to eat. */
  pickMonths: number[];
};

export type Companion = {
  id: string;
  name: string;
  latin: string;
  kin: Kin;
  role: string;
  how: string;
};

export type SeedStep = {
  title: string;
  paragraphs: string[];
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const ZONES: ZoneGuide[] = [
  {
    zone: 2,
    frost: "Early to mid-June",
    season: "A short, cool summer. Cucumbers are possible, not casual.",
    indoor: "Start in the second half of May, and not more than four weeks before you can plant out. Use soil blocks or deep pots. The roots dislike being teased apart.",
    sow: "Transplant after nights stay above 50°F, often mid to late June. Warm the bed with black plastic and keep a row cover handy. Direct sowing is a gamble unless the soil is near 70°F with real summer still ahead.",
    harvest: "Late July into August, and only from a variety that fruits in about 50 days.",
    again: "No second sowing. One crop is the whole year.",
    pick: "The earliest bush and pickling types. A low tunnel or a south wall is part of the method here, not a luxury.",
    watch: "An August frost ends the vines. Keep the cover where you can reach it.",
    sowMonths: [5],
    pickMonths: [6, 7],
  },
  {
    zone: 3,
    frost: "Late May to early June",
    season: "Short, but a real cucumber season if you do not wait on the weather to feel like July.",
    indoor: "Early to mid-May, under lights, four weeks at the outside.",
    sow: "Direct sow or transplant in early to mid-June, once the soil itself has warmed, not merely the afternoon air.",
    harvest: "Mid-July through early September.",
    again: "Skip succession. Put the year into one strong sowing.",
    pick: "Varieties listed around 50 to 60 days, trellised on a south-facing fence so the fruit stays off the cold ground.",
    watch: "Cold June soil rots more seed than beetles do. If the bed is clammy, wait a week.",
    sowMonths: [5],
    pickMonths: [6, 7, 8],
  },
  {
    zone: 4,
    frost: "Mid to late May",
    season: "One main crop, with a little room if spring is kind.",
    indoor: "Late April. Older transplants stall, so do not start in March.",
    sow: "Late May into early June, when two inches of soil holds near 70°F.",
    harvest: "July into early September.",
    again: "A second sowing only with a very early type, and only if it is in by late June.",
    pick: "Early slicers and picklers. A 75-day novelty will spend your season making leaves.",
    watch: "Have the trellis and the row cover ready in May, before the planting rush.",
    sowMonths: [4, 5],
    pickMonths: [6, 7, 8],
  },
  {
    zone: 5,
    frost: "Early to mid-May",
    season: "The classic northern kitchen-garden calendar.",
    indoor: "Mid-April. Four weeks before the last frost is the earliest that pays.",
    sow: "Mid to late May. A second sowing about three weeks later stretches the picking.",
    harvest: "Late June or July through September, until frost.",
    again: "Succession is worth it until about the first week of July. After that, the fruit may not finish.",
    pick: "An open-pollinated slicer in the 60-day range, such as Marketmore 76, plus a pickler if you want jars.",
    watch: "The first cucumber beetles often arrive with the first true leaves. Cover the bed early, and lift the cover when female flowers open.",
    sowMonths: [4, 5],
    pickMonths: [6, 7, 8],
  },
  {
    zone: 6,
    frost: "Mid to late April",
    season: "Long enough for a spring crop and a late one.",
    indoor: "Early April, and only if you want a head start. Direct sowing is simpler and usually just as early.",
    sow: "Early to mid-May for the main crop, once the soil is warm to the wrist.",
    harvest: "June through September.",
    again: "Sow again near the start of July for fruit into early fall. Save seed from midsummer fruit, not from the last cucumber before frost. That one may never ripen.",
    pick: "Slicers, picklers, or a lemon cucumber. Almost any open-pollinated type has time.",
    watch: "July heat makes fruit bitter if the water drops off. Mulch while the soil is still warm and damp.",
    sowMonths: [4, 5, 6],
    pickMonths: [5, 6, 7, 8],
  },
  {
    zone: 7,
    frost: "Early to mid-April",
    season: "Two crops, with a tired pause in the worst of August.",
    indoor: "Mid-March if you start any at all. Do not keep them in pots longer than four weeks.",
    sow: "Mid-April into May. The air-frost date runs ahead of the soil temperature, so test the bed before you sow.",
    harvest: "June and July from the first sowing, then September and October from the later one.",
    again: "Mid to late July. Those vines sometimes miss the worst beetle flight, and their seed fruit can still go gold before frost.",
    pick: "Disease resistance earns a place. Downy mildew often arrives late. A sturdy open-pollinated slicer is a better seed parent than a delicate heirloom you cannot keep alive.",
    watch: "Do not mulch cold April soil. Wait until it has warmed, then cover it to hold that warmth and the moisture.",
    sowMonths: [3, 4, 6],
    pickMonths: [5, 6, 8, 9],
  },
  {
    zone: 8,
    frost: "Mid to late March",
    season: "A spring crop and a fall crop. High summer is for keeping vines alive, not for asking them to peak.",
    indoor: "Late February, and only under cover. Otherwise sow where they will grow.",
    sow: "Late March through April. Sow again in August as nights ease.",
    harvest: "May and June, then October from the fall sowing.",
    again: "August. Count back from your first fall frost and choose a variety that fits the gap.",
    pick: "Heat-tolerant slicers and long Asian types that stay sweet. A lemon cucumber turns pale yellow at eating size. Deep gold is the seed stage, not the salad stage.",
    watch: "A run of days above 90°F drops flowers. Afternoon shade cloth can save a July vine you still want in September.",
    sowMonths: [2, 3, 7],
    pickMonths: [4, 5, 9],
  },
  {
    zone: 9,
    frost: "Late February into early March, and not every year",
    season: "Treat cucumber as a cool-season crop. Summer is the off-season.",
    indoor: "Rarely useful. In the right months the soil is already warm enough to direct sow.",
    sow: "February through March, and again from late August into September.",
    harvest: "April through June, and October into November.",
    again: "The fall sowing is often the better crop.",
    pick: "Mildew tolerance matters more than earliness. Trellis the vines high so the leaves can dry.",
    watch: "A late February cold snap still kills seedlings. A sheet on a frame is enough protection.",
    sowMonths: [1, 2, 7, 8],
    pickMonths: [3, 4, 5, 9, 10],
  },
  {
    zone: 10,
    frost: "Rare, and usually in January if it comes at all",
    season: "A winter and spring vine. Pause through the hottest, wettest stretch.",
    indoor: "Skip it.",
    sow: "September through November, and again in January or February if the first vines are finished.",
    harvest: "Late fall through spring, depending on the sowing.",
    again: "Think of two cool windows, not one long summer.",
    pick: "Prefer downy-mildew tolerance if your winters are humid. Many greenhouse English types are parthenocarpic: they set fruit without bees, and they are a poor choice if seed is the point.",
    watch: "Heat plus wet leaves is how this climate loses a cucumber bed. Water the soil in the morning.",
    sowMonths: [0, 1, 8, 9, 10],
    pickMonths: [0, 1, 2, 3, 10, 11],
  },
  {
    zone: 11,
    frost: "Essentially none",
    season: "Frost is not the limit. Heat, warm nights, and leaf disease are.",
    indoor: "No.",
    sow: "October through February, in the mildest and driest months you have. A highland garden can stretch this. A hot coast may not.",
    harvest: "About two months after sowing, and for as long as the vines stay healthy.",
    again: "Sow a fresh generation rather than nursing an exhausted one. Cucumbers are annuals, and they mean it.",
    pick: "The toughest open-pollinated types you can find for your humidity. A container can be moved out of the worst weather.",
    watch: "A zone number says nothing about summer. Shift this whole calendar toward your dry season.",
    sowMonths: [0, 1, 9, 10, 11],
    pickMonths: [0, 1, 2, 11],
  },
];

export function zoneByNumber(zone: number): ZoneGuide {
  return ZONES.find((entry) => entry.zone === zone) ?? ZONES[4];
}

export const COMPANIONS: Companion[] = [
  {
    id: "nasturtium",
    name: "Nasturtium",
    latin: "Tropaeolum majus",
    kin: "helps",
    role: "A trap for aphids, and often for cucumber beetles.",
    how: "Sow it at the edge of the bed, not under the trellis, so the sacrifice does not shade the vines. Aphids settle on nasturtium first. Leave those plants alone or pull them once they are crowded with pests. The flowers are edible. Do not spray them.",
  },
  {
    id: "dill",
    name: "Dill",
    latin: "Anethum graveolens",
    kin: "helps",
    role: "Flowers that bring the insects cucumbers need.",
    how: "Let a few plants bloom at the north end of the bed. Hoverflies, lacewings, and parasitic wasps use the flowers, and those hunters take aphids and beetle larvae. Young dill is the companion. A huge plant gone to seed is only competition. That it pickles well with the fruit is a pleasant coincidence, not the growing reason.",
  },
  {
    id: "radish",
    name: "Radish",
    latin: "Raphanus sativus",
    kin: "helps",
    role: "A fast neighbor, with some evidence against beetles.",
    how: "Intercropping trials have found radishes can lower cucumber beetle pressure on cucurbits. Sow them between the future vine sites and pull them at about 30 days, before the cucumber canopy closes. They are a timing crop. They are not a season-long roommate.",
  },
  {
    id: "marigold",
    name: "French marigold",
    latin: "Tagetes patula",
    kin: "helps",
    role: "The marigold tied to root-knot nematodes.",
    how: "Use Tagetes, not whatever orange flower the nursery labeled marigold. French marigolds are the ones associated with suppressing root-knot nematodes when grown densely. They will not stop a flight of beetles by themselves. Line the edge of the bed and let them bloom for the small beneficials.",
  },
  {
    id: "calendula",
    name: "Calendula",
    latin: "Calendula officinalis",
    kin: "helps",
    role: "Open flowers for hoverflies, without stealing the trellis.",
    how: "Keep it in front of the bed, where it stays shorter than the vines. It self-sows. Thin the volunteers so they do not become a mat against the cucumber stems, which want air.",
  },
  {
    id: "borage",
    name: "Borage",
    latin: "Borago officinalis",
    kin: "helps",
    role: "A pollinator plant. Not a fertilizer.",
    how: "Bees work borage hard, and cucumber flowers need those same bees unless you are growing a parthenocarpic type under cover. Give it room at the corner. It flops, and a flopped borage on a wet morning is a slug hotel.",
  },
  {
    id: "bean",
    name: "Bush bean",
    latin: "Phaseolus vulgaris",
    kin: "helps",
    role: "A decent neighbor. A modest nitrogen gift after you cut it.",
    how: "A living bean is feeding itself, not the cucumber. The useful nitrogen is what the roots leave when you cut the plants at the soil and leave the roots in place. Do not ask pole beans to share the cucumber trellis. Put bush beans on the sunny edge.",
  },
  {
    id: "lettuce",
    name: "Lettuce",
    latin: "Lactuca sativa",
    kin: "helps",
    role: "Fills bare soil for the first month.",
    how: "Sow it when you sow the cucumbers and eat it as the vines take the light. This is a timing companion, not a partner for the whole season. It also marks the bed so you do not step on seedlings.",
  },
  {
    id: "chives",
    name: "Chives",
    latin: "Allium schoenoprasum",
    kin: "helps",
    role: "A low, permanent edge that does not steal the bed.",
    how: "The claim that alliums confuse cucumber beetles is thin. The practical virtue is real: chives stay short, flower for small beneficial insects, and do not fight a cucumber for water the way a cabbage does. Plant them on the border and leave them there for years.",
  },
  {
    id: "oregano",
    name: "Oregano",
    latin: "Origanum vulgare",
    kin: "helps",
    role: "A flowering herb edge that will not run like mint.",
    how: "Use it as a border, not a groundcover under the vines. The flowers feed tiny beneficials. The roots stay put, which is the difference between oregano and mint in this bed.",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    latin: "Helianthus annuus",
    kin: "helps",
    role: "A pollinator mast. A stake only for small fruit.",
    how: "Plant on the north side so the midday shadow falls outside the bed. Bees cover the heads. A small pickling cucumber can climb a stout stalk. A full-sized slicer will tear it. Do not find that out in August.",
  },
  {
    id: "corn",
    name: "Sweet corn",
    latin: "Zea mays",
    kin: "helps",
    role: "A windbreak, and a little afternoon shade in hot zones.",
    how: "Stand the corn to the west of the cucumbers if your summers scorch flowers. Do not send the vines up the stalks unless you enjoy picking corn through a thicket. The three-sisters story belongs more honestly to winter squash than to cucumber.",
  },
  {
    id: "tomato",
    name: "Tomato",
    latin: "Solanum lycopersicum",
    kin: "uneasy",
    role: "Not a poison pairing. A quarrel about water.",
    how: "Both are hungry. The real conflict is moisture: cucumbers want it steady all season, and tomatoes, once they are fruiting, are often better slightly drier. In a small bed you end up watering for one of them. Give them separate beds if you can, or accept that one crop is compromised.",
  },
  {
    id: "potato",
    name: "Potato",
    latin: "Solanum tuberosum",
    kin: "uneasy",
    role: "A cool-soil crop beside a heat lover.",
    how: "They compete for fertility, and hilling the potatoes disturbs cucumber roots. They are not chemically hostile. They are a poor use of one bed. Rotate both of them, on their own clocks, rather than stacking them.",
  },
  {
    id: "brassica",
    name: "Cabbage and its kin",
    latin: "Brassica oleracea",
    kin: "uneasy",
    role: "Broccoli, kale, and cabbage want the same fertility.",
    how: "They linger into weather the cucumber is finished with, and they shade a low vine if you let them. Sequence them in the bed across seasons. Do not ask them to share a summer square.",
  },
  {
    id: "sage",
    name: "Sage",
    latin: "Salvia officinalis",
    kin: "uneasy",
    role: "An old chart says sage stunts cucumber. The trials are thin.",
    how: "What is obvious without a trial: sage is a woody perennial that wants a leaner, drier footing. The cucumber bed is rich and kept moist. Put the sage in the herb garden. You do not need a feud to keep them apart.",
  },
  {
    id: "fennel",
    name: "Fennel",
    latin: "Foeniculum vulgare",
    kin: "apart",
    role: "The one plant to actually keep out of the bed.",
    how: "Fennel is allelopathic. It leaks compounds that slow the germination and growth of neighbors, cucumbers included. A pot, or a far corner of the garden, is the right place. Do not tuck it at the end of the vine row because the foliage looks ferny and fine.",
  },
  {
    id: "mint",
    name: "Mint",
    latin: "Mentha",
    kin: "apart",
    role: "Not a cucumber hatred. A plant that takes the bed.",
    how: "Mint runs. A bed you can no longer weed is a bed the vines lose. If you want the flowers for beneficial insects, sink a pot to the rim at the edge and check the drainage hole, which is how mint escapes.",
  },
  {
    id: "other-cucumber",
    name: "Another cucumber variety",
    latin: "Cucumis sativus",
    kin: "apart",
    role: "Fine for eating. A problem only when you are saving seed.",
    how: "Bees cross cucumbers freely with other cucumbers. Seed Savers isolates varieties by 800 feet to half a mile. Squash, zucchini, and melon do not cross with a true cucumber — that part is a myth. If you are only eating the fruit, grow as many varieties as you like. If you want seed that comes true, flower one variety, or bag and hand-pollinate.",
  },
  {
    id: "cucurbit-kin",
    name: "Melon and squash",
    latin: "Cucumis melo and Cucurbita",
    kin: "apart",
    role: "They will not pollute your seed. They share your beetles.",
    how: "Striped and spotted cucumber beetles feed across the squash family and carry bacterial wilt. A gap between these beds, and a clean-up of the old vines, matters more than folklore. Armenian cucumber is the exception to the crossing rule: it is a melon, Cucumis melo, and it crosses with melons, not with slicing cucumbers.",
  },
];

export const KIN_LABEL: Record<Kin, { title: string; line: string }> = {
  helps: {
    title: "Plant with",
    line: "These earn a place beside the vines. None of them replace water, a trellis, or a row cover.",
  },
  uneasy: {
    title: "Give space",
    line: "Not enemies. Poor roommates, because they want a different bed.",
  },
  apart: {
    title: "Keep apart",
    line: "Fennel and mint for the health of the bed. The others for seed purity or for beetles.",
  },
};

export const SEED_STEPS: SeedStep[] = [
  {
    title: "Start with a plant that can come true",
    paragraphs: [
      "Save seed from an open-pollinated variety or an heirloom, not from an F1 hybrid. A hybrid will make seed. That seed will not grow up to be the parent you planted.",
      "One plant is enough for viable seed. Cucumbers are self-compatible and rarely show inbreeding depression, which is why this is a friendly crop for a first seed saver. To keep a variety itself over many years, save from 5 to 10 plants. If you are preserving a rare variety, Seed Savers asks for 25.",
      "Do not save from a vine that was badly diseased, or from a fruit that tasted sharply bitter. Bitterness from cucurbitacins can be inherited, and a very bitter cucumber is not one to eat or to breed.",
    ],
  },
  {
    title: "Decide how pure the seed needs to be",
    paragraphs: [
      "If this is the only cucumber flowering for half a mile, insects can do the work. Cucumis sativus crosses with other cucumbers. It does not cross with squash, zucchini, pumpkins, or true melons.",
      "If another variety is blooming nearby, either grow just one variety this year or hand-pollinate. The evening before a flower opens, bag a female bud — the one with a tiny cucumber behind the petals — and a few male buds. In the morning, before midday, strip the petals from a male flower and dust the female stigma. Use more than one male if you have them. Re-bag her until the blossom wilts, and tie a ribbon on that stem.",
      "Flowers open in the morning and do not last. A pollination done after the pollen has gone dusty and dead is a missed day, not a partial success.",
    ],
  },
  {
    title: "Let one fruit stop being food",
    paragraphs: [
      "Mark it, then ignore the instinct to pick. Eating size is immature. Leave the fruit until the skin turns yellow or orange and the cucumber loses its firmness. Wait several weeks after that color change before you cut it open.",
      "If frost, rats, or a collapsing diseased vine are coming, pick at the color change and hold the fruit indoors until it softens. A ribboned cucumber on the counter for two weeks is normal, not a failure. Mature fruit pulls easily from the vine when it is ready.",
      "A lemon cucumber is already pale yellow when it is good to eat. Seed maturity is a deeper gold, and the fruit has gone soft. Do not scoop seed at salad stage.",
    ],
  },
  {
    title: "Scoop the gel",
    paragraphs: [
      "Cut the fruit lengthwise. Spoon the seeds and the surrounding gel into a jar. Add a little water, only enough to make a slurry. Cover loosely with a cloth and a band. Do not seal a lid. The ferment needs air, and a sealed jar can burst or go foul in the wrong way.",
    ],
  },
  {
    title: "Ferment for one to three days",
    paragraphs: [
      "Hold the jar at 70–80°F. Stir once a day. The gel around each seed inhibits germination, and the ferment strips it. You are done when the gel lets go — often when a film of mold sits on top and the jar smells sour.",
      "Do not chase a longer ferment. At four or five days in a warm kitchen, good seed starts to sprout in the jar, and sprouted seed is no longer storage seed.",
    ],
  },
  {
    title: "Keep what sinks",
    paragraphs: [
      "Add water, stir, and pour off whatever floats: pulp, mold, and thin seeds. Sound seed sinks. Repeat until the water is mostly clear, then rinse in a strainer. Stubborn gel can be sprayed off. It should not go into the drying stage.",
    ],
  },
  {
    title: "Dry until a seed snaps",
    paragraphs: [
      "Spread the seed in one layer on a screen, a ceramic plate, or a coffee filter. Skip the paper towel if you can. Wet seed glues itself to the fibers and tears when you peel it. Keep the seed out of direct sun, with air moving, and where mice cannot tour it.",
      "A seed that bends is still wet. A seed that snaps cleanly is dry. In humid weather this takes more than a week. Impatience here is how seed molds in the envelope in January.",
    ],
  },
  {
    title: "Name it and put it in the dark",
    paragraphs: [
      "Write the variety, the year, and which bed it came from, on the envelope, then put the envelope in a jar somewhere cool, dark, and dry. Stored that way, cucumber seed stays viable about five years.",
      "In spring, test ten seeds in a damp towel inside a bag, kept warm. Count sprouts at a week. If only a few wake up, sow more thickly, or grow a fresh seed crop this year and do not trust the jar for a second season.",
    ],
  },
];

export const SEASON_CHECKS: { id: string; label: string }[] = [
  { id: "soil", label: "Two inches of soil holds near 70°F" },
  { id: "trellis", label: "The trellis is up before the first tendril needs it" },
  { id: "op", label: "If I am saving seed, the variety is open-pollinated" },
  { id: "isolate", label: "Only one cucumber variety will flower, or I will bag blossoms" },
  { id: "cover", label: "Row cover is ready, and I will lift it when female flowers open" },
  { id: "mulch", label: "Mulch waits until the soil is warm, then goes on" },
  { id: "water", label: "Water goes to the soil in the morning, not over the leaves" },
  { id: "ribbon", label: "A ribbon is on the fruit I am keeping for seed" },
  { id: "jar", label: "A jar, a cloth, and a screen are set aside for the gold fruit" },
];
