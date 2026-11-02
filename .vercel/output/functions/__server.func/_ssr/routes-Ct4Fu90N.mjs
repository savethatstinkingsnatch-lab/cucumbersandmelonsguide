import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronLeft, i as ChevronRight, o as Check, r as List, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ct4Fu90N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MONTHS = [
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
	"Dec"
];
var ZONES = [
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
		pickMonths: [6, 7]
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
		pickMonths: [
			6,
			7,
			8
		]
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
		pickMonths: [
			6,
			7,
			8
		]
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
		pickMonths: [
			6,
			7,
			8
		]
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
		sowMonths: [
			4,
			5,
			6
		],
		pickMonths: [
			5,
			6,
			7,
			8
		]
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
		sowMonths: [
			3,
			4,
			6
		],
		pickMonths: [
			5,
			6,
			8,
			9
		]
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
		sowMonths: [
			2,
			3,
			7
		],
		pickMonths: [
			4,
			5,
			9
		]
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
		sowMonths: [
			1,
			2,
			7,
			8
		],
		pickMonths: [
			3,
			4,
			5,
			9,
			10
		]
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
		sowMonths: [
			0,
			1,
			8,
			9,
			10
		],
		pickMonths: [
			0,
			1,
			2,
			3,
			10,
			11
		]
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
		sowMonths: [
			0,
			1,
			9,
			10,
			11
		],
		pickMonths: [
			0,
			1,
			2,
			11
		]
	}
];
function zoneByNumber(zone) {
	return ZONES.find((entry) => entry.zone === zone) ?? ZONES[4];
}
var COMPANIONS = [
	{
		id: "nasturtium",
		name: "Nasturtium",
		latin: "Tropaeolum majus",
		kin: "helps",
		role: "A trap for aphids, and often for cucumber beetles.",
		how: "Sow it at the edge of the bed, not under the trellis, so the sacrifice does not shade the vines. Aphids settle on nasturtium first. Leave those plants alone or pull them once they are crowded with pests. The flowers are edible. Do not spray them."
	},
	{
		id: "dill",
		name: "Dill",
		latin: "Anethum graveolens",
		kin: "helps",
		role: "Flowers that bring the insects cucumbers need.",
		how: "Let a few plants bloom at the north end of the bed. Hoverflies, lacewings, and parasitic wasps use the flowers, and those hunters take aphids and beetle larvae. Young dill is the companion. A huge plant gone to seed is only competition. That it pickles well with the fruit is a pleasant coincidence, not the growing reason."
	},
	{
		id: "radish",
		name: "Radish",
		latin: "Raphanus sativus",
		kin: "helps",
		role: "A fast neighbor, with some evidence against beetles.",
		how: "Intercropping trials have found radishes can lower cucumber beetle pressure on cucurbits. Sow them between the future vine sites and pull them at about 30 days, before the cucumber canopy closes. They are a timing crop. They are not a season-long roommate."
	},
	{
		id: "marigold",
		name: "French marigold",
		latin: "Tagetes patula",
		kin: "helps",
		role: "The marigold tied to root-knot nematodes.",
		how: "Use Tagetes, not whatever orange flower the nursery labeled marigold. French marigolds are the ones associated with suppressing root-knot nematodes when grown densely. They will not stop a flight of beetles by themselves. Line the edge of the bed and let them bloom for the small beneficials."
	},
	{
		id: "calendula",
		name: "Calendula",
		latin: "Calendula officinalis",
		kin: "helps",
		role: "Open flowers for hoverflies, without stealing the trellis.",
		how: "Keep it in front of the bed, where it stays shorter than the vines. It self-sows. Thin the volunteers so they do not become a mat against the cucumber stems, which want air."
	},
	{
		id: "borage",
		name: "Borage",
		latin: "Borago officinalis",
		kin: "helps",
		role: "A pollinator plant. Not a fertilizer.",
		how: "Bees work borage hard, and cucumber flowers need those same bees unless you are growing a parthenocarpic type under cover. Give it room at the corner. It flops, and a flopped borage on a wet morning is a slug hotel."
	},
	{
		id: "bean",
		name: "Bush bean",
		latin: "Phaseolus vulgaris",
		kin: "helps",
		role: "A decent neighbor. A modest nitrogen gift after you cut it.",
		how: "A living bean is feeding itself, not the cucumber. The useful nitrogen is what the roots leave when you cut the plants at the soil and leave the roots in place. Do not ask pole beans to share the cucumber trellis. Put bush beans on the sunny edge."
	},
	{
		id: "lettuce",
		name: "Lettuce",
		latin: "Lactuca sativa",
		kin: "helps",
		role: "Fills bare soil for the first month.",
		how: "Sow it when you sow the cucumbers and eat it as the vines take the light. This is a timing companion, not a partner for the whole season. It also marks the bed so you do not step on seedlings."
	},
	{
		id: "chives",
		name: "Chives",
		latin: "Allium schoenoprasum",
		kin: "helps",
		role: "A low, permanent edge that does not steal the bed.",
		how: "The claim that alliums confuse cucumber beetles is thin. The practical virtue is real: chives stay short, flower for small beneficial insects, and do not fight a cucumber for water the way a cabbage does. Plant them on the border and leave them there for years."
	},
	{
		id: "oregano",
		name: "Oregano",
		latin: "Origanum vulgare",
		kin: "helps",
		role: "A flowering herb edge that will not run like mint.",
		how: "Use it as a border, not a groundcover under the vines. The flowers feed tiny beneficials. The roots stay put, which is the difference between oregano and mint in this bed."
	},
	{
		id: "sunflower",
		name: "Sunflower",
		latin: "Helianthus annuus",
		kin: "helps",
		role: "A pollinator mast. A stake only for small fruit.",
		how: "Plant on the north side so the midday shadow falls outside the bed. Bees cover the heads. A small pickling cucumber can climb a stout stalk. A full-sized slicer will tear it. Do not find that out in August."
	},
	{
		id: "corn",
		name: "Sweet corn",
		latin: "Zea mays",
		kin: "helps",
		role: "A windbreak, and a little afternoon shade in hot zones.",
		how: "Stand the corn to the west of the cucumbers if your summers scorch flowers. Do not send the vines up the stalks unless you enjoy picking corn through a thicket. The three-sisters story belongs more honestly to winter squash than to cucumber."
	},
	{
		id: "tomato",
		name: "Tomato",
		latin: "Solanum lycopersicum",
		kin: "uneasy",
		role: "Not a poison pairing. A quarrel about water.",
		how: "Both are hungry. The real conflict is moisture: cucumbers want it steady all season, and tomatoes, once they are fruiting, are often better slightly drier. In a small bed you end up watering for one of them. Give them separate beds if you can, or accept that one crop is compromised."
	},
	{
		id: "potato",
		name: "Potato",
		latin: "Solanum tuberosum",
		kin: "uneasy",
		role: "A cool-soil crop beside a heat lover.",
		how: "They compete for fertility, and hilling the potatoes disturbs cucumber roots. They are not chemically hostile. They are a poor use of one bed. Rotate both of them, on their own clocks, rather than stacking them."
	},
	{
		id: "brassica",
		name: "Cabbage and its kin",
		latin: "Brassica oleracea",
		kin: "uneasy",
		role: "Broccoli, kale, and cabbage want the same fertility.",
		how: "They linger into weather the cucumber is finished with, and they shade a low vine if you let them. Sequence them in the bed across seasons. Do not ask them to share a summer square."
	},
	{
		id: "sage",
		name: "Sage",
		latin: "Salvia officinalis",
		kin: "uneasy",
		role: "An old chart says sage stunts cucumber. The trials are thin.",
		how: "What is obvious without a trial: sage is a woody perennial that wants a leaner, drier footing. The cucumber bed is rich and kept moist. Put the sage in the herb garden. You do not need a feud to keep them apart."
	},
	{
		id: "fennel",
		name: "Fennel",
		latin: "Foeniculum vulgare",
		kin: "apart",
		role: "The one plant to actually keep out of the bed.",
		how: "Fennel is allelopathic. It leaks compounds that slow the germination and growth of neighbors, cucumbers included. A pot, or a far corner of the garden, is the right place. Do not tuck it at the end of the vine row because the foliage looks ferny and fine."
	},
	{
		id: "mint",
		name: "Mint",
		latin: "Mentha",
		kin: "apart",
		role: "Not a cucumber hatred. A plant that takes the bed.",
		how: "Mint runs. A bed you can no longer weed is a bed the vines lose. If you want the flowers for beneficial insects, sink a pot to the rim at the edge and check the drainage hole, which is how mint escapes."
	},
	{
		id: "other-cucumber",
		name: "Another cucumber variety",
		latin: "Cucumis sativus",
		kin: "apart",
		role: "Fine for eating. A problem only when you are saving seed.",
		how: "Bees cross cucumbers freely with other cucumbers. Seed Savers isolates varieties by 800 feet to half a mile. Squash, zucchini, and melon do not cross with a true cucumber — that part is a myth. If you are only eating the fruit, grow as many varieties as you like. If you want seed that comes true, flower one variety, or bag and hand-pollinate."
	},
	{
		id: "cucurbit-kin",
		name: "Melon and squash",
		latin: "Cucumis melo and Cucurbita",
		kin: "apart",
		role: "They will not pollute your seed. They share your beetles.",
		how: "Striped and spotted cucumber beetles feed across the squash family and carry bacterial wilt. A gap between these beds, and a clean-up of the old vines, matters more than folklore. Armenian cucumber is the exception to the crossing rule: it is a melon, Cucumis melo, and it crosses with melons, not with slicing cucumbers."
	}
];
var KIN_LABEL = {
	helps: {
		title: "Plant with",
		line: "These earn a place beside the vines. None of them replace water, a trellis, or a row cover."
	},
	uneasy: {
		title: "Give space",
		line: "Not enemies. Poor roommates, because they want a different bed."
	},
	apart: {
		title: "Keep apart",
		line: "Fennel and mint for the health of the bed. The others for seed purity or for beetles."
	}
};
var SEED_STEPS = [
	{
		title: "Start with a plant that can come true",
		paragraphs: [
			"Save seed from an open-pollinated variety or an heirloom, not from an F1 hybrid. A hybrid will make seed. That seed will not grow up to be the parent you planted.",
			"One plant is enough for viable seed. Cucumbers are self-compatible and rarely show inbreeding depression, which is why this is a friendly crop for a first seed saver. To keep a variety itself over many years, save from 5 to 10 plants. If you are preserving a rare variety, Seed Savers asks for 25.",
			"Do not save from a vine that was badly diseased, or from a fruit that tasted sharply bitter. Bitterness from cucurbitacins can be inherited, and a very bitter cucumber is not one to eat or to breed."
		]
	},
	{
		title: "Decide how pure the seed needs to be",
		paragraphs: [
			"If this is the only cucumber flowering for half a mile, insects can do the work. Cucumis sativus crosses with other cucumbers. It does not cross with squash, zucchini, pumpkins, or true melons.",
			"If another variety is blooming nearby, either grow just one variety this year or hand-pollinate. The evening before a flower opens, bag a female bud — the one with a tiny cucumber behind the petals — and a few male buds. In the morning, before midday, strip the petals from a male flower and dust the female stigma. Use more than one male if you have them. Re-bag her until the blossom wilts, and tie a ribbon on that stem.",
			"Flowers open in the morning and do not last. A pollination done after the pollen has gone dusty and dead is a missed day, not a partial success."
		]
	},
	{
		title: "Let one fruit stop being food",
		paragraphs: [
			"Mark it, then ignore the instinct to pick. Eating size is immature. Leave the fruit until the skin turns yellow or orange and the cucumber loses its firmness. Wait several weeks after that color change before you cut it open.",
			"If frost, rats, or a collapsing diseased vine are coming, pick at the color change and hold the fruit indoors until it softens. A ribboned cucumber on the counter for two weeks is normal, not a failure. Mature fruit pulls easily from the vine when it is ready.",
			"A lemon cucumber is already pale yellow when it is good to eat. Seed maturity is a deeper gold, and the fruit has gone soft. Do not scoop seed at salad stage."
		]
	},
	{
		title: "Scoop the gel",
		paragraphs: ["Cut the fruit lengthwise. Spoon the seeds and the surrounding gel into a jar. Add a little water, only enough to make a slurry. Cover loosely with a cloth and a band. Do not seal a lid. The ferment needs air, and a sealed jar can burst or go foul in the wrong way."]
	},
	{
		title: "Ferment for one to three days",
		paragraphs: ["Hold the jar at 70–80°F. Stir once a day. The gel around each seed inhibits germination, and the ferment strips it. You are done when the gel lets go — often when a film of mold sits on top and the jar smells sour.", "Do not chase a longer ferment. At four or five days in a warm kitchen, good seed starts to sprout in the jar, and sprouted seed is no longer storage seed."]
	},
	{
		title: "Keep what sinks",
		paragraphs: ["Add water, stir, and pour off whatever floats: pulp, mold, and thin seeds. Sound seed sinks. Repeat until the water is mostly clear, then rinse in a strainer. Stubborn gel can be sprayed off. It should not go into the drying stage."]
	},
	{
		title: "Dry until a seed snaps",
		paragraphs: ["Spread the seed in one layer on a screen, a ceramic plate, or a coffee filter. Skip the paper towel if you can. Wet seed glues itself to the fibers and tears when you peel it. Keep the seed out of direct sun, with air moving, and where mice cannot tour it.", "A seed that bends is still wet. A seed that snaps cleanly is dry. In humid weather this takes more than a week. Impatience here is how seed molds in the envelope in January."]
	},
	{
		title: "Name it and put it in the dark",
		paragraphs: ["Write the variety, the year, and which bed it came from, on the envelope, then put the envelope in a jar somewhere cool, dark, and dry. Stored that way, cucumber seed stays viable about five years.", "In spring, test ten seeds in a damp towel inside a bag, kept warm. Count sprouts at a week. If only a few wake up, sow more thickly, or grow a fresh seed crop this year and do not trust the jar for a second season."]
	}
];
var SEASON_CHECKS = [
	{
		id: "soil",
		label: "Two inches of soil holds near 70°F"
	},
	{
		id: "trellis",
		label: "The trellis is up before the first tendril needs it"
	},
	{
		id: "op",
		label: "If I am saving seed, the variety is open-pollinated"
	},
	{
		id: "isolate",
		label: "Only one cucumber variety will flower, or I will bag blossoms"
	},
	{
		id: "cover",
		label: "Row cover is ready, and I will lift it when female flowers open"
	},
	{
		id: "mulch",
		label: "Mulch waits until the soil is warm, then goes on"
	},
	{
		id: "water",
		label: "Water goes to the soil in the morning, not over the leaves"
	},
	{
		id: "ribbon",
		label: "A ribbon is on the fruit I am keeping for seed"
	},
	{
		id: "jar",
		label: "A jar, a cloth, and a screen are set aside for the gold fruit"
	}
];
var useReading = create()(persist((set) => ({
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
	toggleCheck: (id) => set((state) => ({ checks: {
		...state.checks,
		[id]: !state.checks[id]
	} })),
	setCompanion: (companion) => set({ companion }),
	setKin: (kin) => set({ kin }),
	setVolume: (volume) => set({
		volume,
		chapter: 0
	}),
	setMelon: (melonId) => set({ melonId }),
	setGust: (gust) => set({ gust }),
	setHeat: (heat) => set({ heat }),
	toggleStorm: (id) => set((state) => ({ stormChecks: {
		...state.stormChecks,
		[id]: !state.stormChecks[id]
	} })),
	setShade: (shade) => set({ shade }),
	toggleSeat: (id) => set((state) => ({ seatChecks: {
		...state.seatChecks,
		[id]: !state.seatChecks[id]
	} }))
}), {
	name: "vinekeeper-reading",
	skipHydration: true
}));
var ORDER = [
	"helps",
	"uneasy",
	"apart"
];
function CompanionGuide() {
	const kin = useReading((state) => state.kin);
	const setKin = useReading((state) => state.setKin);
	const companion = useReading((state) => state.companion);
	const setCompanion = useReading((state) => state.setCompanion);
	const plants = COMPANIONS.filter((plant) => plant.kin === kin);
	const copy = KIN_LABEL[kin];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		"aria-labelledby": "companion-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				id: "companion-heading",
				className: "font-display text-2xl font-semibold text-vine",
				children: "The bed beside the vine"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Companion groups",
				children: ORDER.map((key) => {
					const selected = key === kin;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => setKin(key),
						className: "min-h-11 px-4 text-sm " + (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink"),
						children: KIN_LABEL[key].title
					}, key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-ink/80",
				children: copy.line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: plants.map((plant) => {
					const open = plant.id === companion;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-ink/15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": open,
							onClick: () => setCompanion(open ? null : plant.id),
							className: "flex min-h-11 w-full items-start gap-3 px-4 py-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 size-2 shrink-0 rounded-full bg-seed",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-lg text-ink",
										children: plant.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm italic text-ink/60",
										children: plant.latin
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-relaxed text-ink/80",
										children: plant.role
									})
								]
							})]
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border-t border-ink/10 px-4 py-3 text-base leading-relaxed text-ink",
							children: plant.how
						}) : null]
					}, plant.id);
				})
			})
		]
	});
}
function Page({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "plate-in mx-auto w-full max-w-2xl px-5 py-8 md:px-8 md:py-12",
		children
	});
}
function Kicker({ numeral, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "font-display text-sm text-vine",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-seed",
				children: numeral
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 text-ink/40",
				"aria-hidden": "true",
				children: "/"
			}),
			label
		]
	});
}
function ChapterTitle({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl",
		children
	});
}
function Prose({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 space-y-4 text-base leading-relaxed text-ink md:text-lg",
		children
	});
}
function Subhead({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mt-10 font-display text-2xl font-semibold leading-tight text-vine",
		children
	});
}
function Pull({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
		className: "my-8 border-l-2 border-seed pl-4 font-display text-xl italic leading-snug text-ink",
		children
	});
}
function Note({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-8 border border-ink/15 border-t-2 border-t-seed px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm text-seed",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 space-y-3 text-base leading-relaxed text-ink",
			children
		})]
	});
}
function Plate({ src, alt, plate, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full border border-ink/10 bg-paper"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 flex gap-3 text-sm leading-relaxed text-ink/75",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 font-display italic text-seed",
				children: plate
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: caption })]
		})]
	});
}
function CoverPage() {
	const setChapter = useReading((state) => state.setChapter);
	const setVolume = useReading((state) => state.setVolume);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "plate-in mx-auto grid w-full max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-10 md:py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm text-vine",
				children: "A field book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl font-semibold leading-tight text-ink md:text-6xl",
				children: "The Vinekeeper"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md font-display text-xl italic leading-snug text-ink/85",
				children: "How to grow cucumbers, and how to keep their seed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-md text-base leading-relaxed text-ink/80",
				children: "Sowing, a zone calendar, the flowers, the pests that matter, a companion bed, and the ferment that turns one gold cucumber into next year’s packet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setChapter(1),
				className: "mt-8 inline-flex min-h-11 items-center bg-ink px-5 text-paper",
				children: "Open the book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setVolume("melon"),
				className: "mt-3 block min-h-11 text-left font-display text-vine",
				children: "Melons — weight, trellis, and storm covers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 border-t border-ink/15",
				children: [
					{
						chapter: 1,
						label: "The plant",
						note: "What you are actually growing"
					},
					{
						chapter: 3,
						label: "Zones",
						note: "A sowing calendar from 2 to 11"
					},
					{
						chapter: 9,
						label: "Saving seed",
						note: "Gold fruit, a short ferment, dry seed"
					},
					{
						chapter: 10,
						label: "Companions",
						note: "Who helps, and who only shares beetles"
					}
				].map((jump) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setChapter(jump.chapter),
						className: "flex min-h-11 w-full flex-col items-start justify-center py-2 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-ink",
							children: jump.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-ink/60",
							children: jump.note
						})]
					})
				}, jump.chapter))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/plates/cover.jpg",
			alt: "A botanical painting of a cucumber vine with yellow flowers, a green fruit, and a ripe golden seed cucumber.",
			className: "w-full border border-ink/10 bg-paper"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 text-sm leading-relaxed text-ink/75",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display italic text-seed",
				children: "Plate I. "
			}), "Eating fruit and seed fruit on the same vine. Only one of them belongs in the kitchen this week."]
		})] })]
	});
}
function SeedPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "IX",
			label: "Saving seed"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Harvest past the kitchen" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/seed.jpg",
			alt: "A golden overripe cucumber cut open, seeds in gel, a glass jar of pulp, and rinsed seeds drying on cloth.",
			plate: "Plate VI",
			caption: "Cut lengthwise, ferment the gel, keep the seeds that sink, and dry them until they snap."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Cucumbers are one of the easier fruits in the squash family to save. The color change is obvious, one plant can give you plenty of seed, and the cleaning is the same wet ferment you would use for a tomato. The discipline is waiting. Everything you like to eat is an unripe cucumber."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "Several weeks after the fruit turns gold, it is finally a seed crop." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 space-y-8",
			children: SEED_STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 shrink-0 font-display text-2xl tabular-nums text-seed",
					children: index + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold leading-tight text-ink",
					children: step.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-3 text-base leading-relaxed text-ink",
					children: step.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
				})] })]
			}, step.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "A population, not a museum jar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A single fruit can hold more seed than a household will sow. Viability is about five years in a cool, dark, dry jar — and shorter on a sunny shelf. Grow a fresh seed crop before the envelope gets casual. If you are keeping a variety going, draw that seed from several plants, not from the one fruit that happened to hide behind a leaf." })
		})
	] });
}
function CompanionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "X",
			label: "Companions"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "The plants around the vine" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/companions.jpg",
			alt: "A painted kitchen bed with cucumber vines on a trellis, nasturtiums, dill, marigolds, and lettuce along the edges.",
			plate: "Plate VII",
			caption: "Nasturtium, dill, and marigold at the feet of a trellis. Companions are a border, not a crowd in the root zone."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Companion planting is a mix of useful insects, a few measured trials, and a lot of charts copied from other charts. This one keeps the pairings that change how you lay out a bed, and it says when the evidence is only tradition. Nothing here replaces steady water or a trellis."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The crossing rule is the one people get backward. Cucumbers cross with other cucumbers. They do not cross with squash or melon. Grow melons beside them if you like the fruit. Give the beetles a gap if bacterial wilt has ever emptied a row." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionGuide, {})
	] });
}
function YearPage() {
	const zone = useReading((state) => zoneByNumber(state.zone));
	const checks = useReading((state) => state.checks);
	const toggleCheck = useReading((state) => state.toggleCheck);
	const done = SEASON_CHECKS.filter((item) => checks[item.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "XI",
			label: "The year"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "A season you can tick" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "drop",
			children: [
				"Zone ",
				zone.zone,
				" is the calendar saved in this book. The usual last frost is ",
				zone.frost,
				".",
				" ",
				zone.season,
				" ",
				zone.sow
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Change the zone in the calendar chapter if this is the wrong garden. The ticks below stay on this device. Mark a line when it is true in the bed, not when you have merely read it." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 font-display text-sm tabular-nums text-seed",
			children: [
				done,
				" of ",
				SEASON_CHECKS.length,
				" in place"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 border-t border-ink/15",
			children: SEASON_CHECKS.map((item) => {
				const on = Boolean(checks[item.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => toggleCheck(item.id),
						className: "flex min-h-11 w-full items-start gap-3 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid size-5 shrink-0 place-items-center border " + (on ? "border-ink bg-ink text-paper" : "border-ink/40 bg-paper"),
							"aria-hidden": "true",
							children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3",
								strokeWidth: 2.5
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: on ? "text-ink/50 line-through" : "text-ink",
							children: item.label
						})]
					})
				}, item.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Colophon" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Seed-saving numbers in this book follow Seed Savers Exchange: isolate varieties by 800 feet to half a mile, save from one plant for viable seed and from five to ten plants to maintain a variety, ferment one to three days at 70–80°F, and expect about five years of life in cool, dry, dark storage. Spacing, the four-week indoor limit, and the advice to trellis come from the same guide." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The zone calendars are typical frost windows, shifted for the warmth cucumber seed actually needs. They are not a local forecast. A soil thermometer and your own last frost outrank every chart in here." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "underline decoration-seed decoration-2 underline-offset-4",
				href: "https://seedsavers.org/grow-cucumber/",
				target: "_blank",
				rel: "noreferrer",
				children: "Seed Savers Exchange, Growing Guide: Cucumber"
			}) })
		] })
	] });
}
function ZoneGuide() {
	const zone = useReading((state) => state.zone);
	const setZone = useReading((state) => state.setZone);
	const guide = zoneByNumber(zone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		"aria-labelledby": "zone-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				id: "zone-heading",
				className: "font-display text-2xl font-semibold text-vine",
				children: "Choose a zone"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base leading-relaxed text-ink/80",
				children: "These are typical windows for the last spring frost in that zone. A coastal garden and an inland garden with the same number do not share a summer. Shift the dates to your own frost, and do not sow until the soil is warm."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "USDA zones",
				children: ZONES.map((entry) => {
					const selected = entry.zone === guide.zone;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => setZone(entry.zone),
						className: "min-h-11 min-w-11 px-3 font-display text-base " + (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink"),
						children: entry.zone
					}, entry.zone);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border border-ink/15 px-4 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm text-seed",
						children: ["Zone ", guide.zone]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl font-semibold leading-tight text-ink",
						children: guide.season
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-ink/70",
						children: ["Usual last frost: ", guide.frost]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonStrip, {
						sowMonths: guide.sowMonths,
						pickMonths: guide.pickMonths
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
								label: "Indoors",
								text: guide.indoor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
								label: "Sowing",
								text: guide.sow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
								label: "Harvest",
								text: guide.harvest
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
								label: "Again",
								text: guide.again
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
								label: "Varieties",
								text: guide.pick
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
								label: "Watch",
								text: guide.watch
							})
						]
					})
				]
			})
		]
	});
}
function SeasonStrip({ sowMonths, pickMonths }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			"aria-label": "Season by month",
			className: "grid grid-cols-12 gap-1",
			children: MONTHS.map((name, index) => {
				const sowing = sowMonths.includes(index);
				const picking = pickMonths.includes(index);
				const tone = sowing ? "bg-blossom text-ink" : picking ? "bg-vine text-paper" : "bg-ink/5 text-ink/70";
				const state = sowing && picking ? "sow and harvest" : sowing ? "sow" : picking ? "harvest" : "quiet";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					title: `${name}: ${state}`,
					"aria-label": `${name}, ${state}`,
					className: `grid h-11 place-items-center text-xs ${tone}`,
					children: name.slice(0, 1)
				}) }, name);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/75",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block size-3 bg-blossom",
						"aria-hidden": "true"
					}), "Sow"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block size-3 bg-vine",
						"aria-hidden": "true"
					}), "Pick to eat"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A shared month is marked for sowing." })
			]
		})]
	});
}
function Beat({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1 border-t border-ink/10 pt-4 sm:flex-row sm:gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-display text-sm text-vine sm:w-24 sm:shrink-0",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-base leading-relaxed text-ink",
			children: text
		})]
	});
}
function PlantPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "I",
			label: "The plant"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Eaten before it is ripe" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/kinds.jpg",
			alt: "A painted plate of five cucumbers: a long slicer, a pickler, a round lemon cucumber, a slender pale cucumber, and a golden seed cucumber.",
			plate: "Plate II",
			caption: "Slicer, pickler, lemon, a long pale type, and the gold fruit you leave for seed. They are the same species at different moments, except when they are not."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "A cucumber is eaten unripe. That one fact explains the awkward parts of the crop: why a fruit turns bitter if you forget it, why the vine slows down when you stop picking, and why the seed you want looks nothing like the cucumber you slice for lunch."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"The plant is ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Cucumis sativus" }),
			", an annual. It makes separate male and female flowers on the same vine, and it wants heat, steady water, and something to climb. Most of what we call a cucumber — slicers, picklers, lemon cucumbers, the long pale Asian types — is this species. Open-pollinated kinds come true from saved seed. Hybrids, the packets marked F1, do not."
		] })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Names that lie a little" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"A Mexican sour gherkin is ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Melothria scabra" }),
			", a different genus. It is a fine pot plant and it will not cross with your cucumbers. An Armenian cucumber is a melon,",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Cucumis melo" }),
			". It climbs like a cucumber and crosses with melons, not with a Marketmore."
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Grocery fruit is a poor place to start seed. It was picked immature, so the seed inside is not finished, and the variety is often a hybrid in any case. Begin with a named open-pollinated packet: Marketmore 76 or Straight Eight for slicing, Boston Pickling for jars, a lemon cucumber if you want something round, Suyo Long if you want length that stays tender." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "Leave the seed fruit until it no longer looks like food." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For the kitchen you pick small and often. For seed you choose one fruit and do the opposite. The rest of this book is how to tell those two jobs apart, and how to time them where you live." }) })
	] });
}
function GroundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "II",
			label: "Ground"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Sun, a rich bed, warm feet" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Cucumbers want at least six hours of direct sun, and eight is better. They also want a soil that holds moisture without staying cold and sour. A slightly acid to near-neutral bed, worked with finished compost, is the usual home. Do not lay raw manure in the same season. The fruit ends up near the soil, and fresh manure is a poor neighbor for anything you eat uncooked."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Drainage matters as much as richness. Seed in cold, wet ground rots. If your spring soil is heavy clay, a raised row or a low hill warms faster than a flat bed. Shelter from the prevailing wind helps too: the leaves are large, and a vine that has grabbed a trellis will still tear if the trellis itself rocks." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "In a pot" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Use a deep container, opaque so the root ball does not bake, with real drainage. A compost-heavy potting mix beats garden soil in a pot. Choose a smaller vine — a pickler, a bush type, something like Miniature White — and do not expect a pot to feed a rampant slicer without constant water." }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "The warmth test",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Germination is poor in cold soil and happiest in real warmth. Wait until the top two inches hold near 70°F before you sow outdoors. A cheap soil thermometer is more useful here than another bag of fertilizer." })
		})
	] });
}
function ZonePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "III",
			label: "Zones"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "When the ground is ready" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "A USDA zone tells you how cold the winter gets. Cucumbers care more about the last spring frost and about summer heat, but the zone is a workable shorthand for when the soil usually wakes up. Direct sow after frost danger has passed and the soil has warmed. If you start plants indoors, do it no earlier than four weeks before that last frost. They resent a long stay in a pot, and they resent a cold transplant even more."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In zones 2 through 5 you are racing a short summer, so earliness matters. In zones 8 through 11 the race is the other way: grow in the cooler months, and do not ask a vine to flower through the hottest stretch. The chart below is a starting sketch. Your frost date outranks it." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneGuide, {})
	] });
}
function SowingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "IV",
			label: "Sowing"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Seed into warm ground" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/sowing.jpg",
			alt: "Cucumber seedlings with thick seed leaves just opening in soil blocks, and loose seeds on a wooden bench.",
			plate: "Plate III",
			caption: "If you start them indoors, sow in something you can plant whole. Cucumber roots notice the disturbance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Direct sowing is the cleaner method. The plants dislike transplanting, and in most zones the soil is warm enough soon enough that a head start indoors buys you very little. Sow about an inch deep. In heavy soil, slightly shallower is safer than deeper."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "On a trellis, which is the spacing worth using, set seeds 12 to 15 inches apart. Without a trellis, make hills about a foot across and at least six feet apart. Sow six to eight seeds in a hill and thin to the strongest three or four. Snip the extras. Pulling them yanks the keeper’s roots." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "If you do start them inside" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Four weeks before the last frost, no earlier. One or two seeds in a soil block or a pot that goes into the ground intact. Keep them warm, give them light the day they emerge, and harden them off for about a week before they go out. Plant in the evening or under cloud, water them in, and do not bury the stem the way you would a tomato. The crown wants to stay at the soil line." }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Row cover, then bees",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Where cucumber beetles are a yearly event, cover the bed as soon as you sow. The cover comes off when female flowers open, unless the variety is parthenocarpic and you intend to keep insects out for the whole crop. A covered vine that cannot be pollinated will drop its little fruits." })
		})
	] });
}
function VinePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "V",
			label: "The vine"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Put the trellis up first" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/trellis.jpg",
			alt: "An A-frame wooden trellis in a kitchen garden, covered with cucumber vines, yellow flowers, and straw at the base.",
			plate: "Plate IV",
			caption: "Air under the leaves, fruit off the soil, and a harvest you can see. Build it before the vines ask."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "A trellis is not decoration. It keeps fruit off damp ground, which is how you avoid belly rot. It dries the leaves, which slows mildew. It makes the daily hunt for fruit possible, and a cucumber you do not find today is a bitter club by the weekend. An A-frame, a cattle panel, or a run of stout string all work. Tendrils will grab. You may tuck a leader. Do not yank one that has already committed."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Water like you mean to keep the same plant" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Give a steady supply, on the order of an inch a week and more in heat, at the base, in the morning, with the leaves left dry. Uneven moisture is the usual cause of bitter fruit and of blossom-end rot, the sunken tip that looks like a calcium shortage. Often the calcium is in the soil. The plant simply could not move it because the water came in surges." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mulch after the soil is warm, not before. Straw over a cold bed keeps it cold. Straw over a warm, watered bed keeps the moisture even and the fruit cleaner if a cucumber does touch down." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Compost at planting is the main feeding. When the vines begin to run, a side-dressing is enough. A heavy hand with nitrogen buys leaves and delays flowers. One healthy plant, picked hard, will give something like ten to twenty cucumbers in a season." })
		] })
	] });
}
function FlowerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "VI",
			label: "Flowers"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Males first, then fruit" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/flowers.jpg",
			alt: "Two yellow cucumber flowers on a vine. The left flower sits on a thin stem. The right flower has a tiny cucumber behind the petals.",
			plate: "Plate V",
			caption: "Male on a plain stem. Female with a miniature fruit already formed behind the blossom."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "The first flowers are usually male, and they may hold the vine for a week or two before a female appears. A run of yellow blossoms and no fruit is not a failure. Look behind the flower. A female carries a tiny cucumber. A male is just a flower on a slender stem."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bees do the ordinary work, in the morning, because the blossom does not last the day. If little fruits shrivel just behind the flower, they were not pollinated. You can do it yourself: pick a male, take the petals off, and dab the center of a female before noon. That is also the move for pure seed, told in full in the seed chapter. Bag the flower if purity matters. For a salad, the bees are welcome." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "The seedless exception",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Some greenhouse and “burpless” varieties are parthenocarpic. They set fruit without pollen, which is why they can crop under a cover or in a tunnel with no bees. Those fruits may hold few seeds or none. If a bee does get in, the fruit can turn seedy. For a seed crop, choose a variety that expects to be pollinated." })
		})
	] });
}
function TroublePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "VII",
			label: "Trouble"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "What actually takes a vine" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Most cucumber losses are beetles, wilt that the beetles carry, mildew late in the year, or water that came at the wrong pace. The rest of the list is real and less common. Start with the habits that prevent the usual ones: a trellis, morning water at the soil, a rotation of about three years before cucurbits return to that bed, and a cover early in the season."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Beetles and the wilt they spread" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Striped and spotted cucumber beetles eat leaves, flowers, and stems. They also carry bacterial wilt. A vine that flags in the afternoon and is still collapsed the next morning, with no improvement overnight, is often finished. Pull it. It will not recover, and the beetles will move the bacteria to the neighbor. Hand-pick beetles into soapy water while the plants are small. Row cover is the better tool. Nasturtium and radish, in the companion chapter, are support, not a substitute." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Slugs take seedlings and any fruit sitting on damp soil. The trellis is the fix. Squash vine borer is more a squash pest, but a stem base full of sawdust-like frass is the same insect. The year you see it, cover early and move the crop. Deer and raccoons need a fence. Scent remedies are a story you tell while they eat." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Leaves and fruit" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Powdery mildew is the white dust on older leaves, usually late, usually after you have already picked plenty. Air and uncrowded plants slow it. Downy mildew is worse: yellow angular patches, gray or purple under the leaf, traveling on weather. Trellis, dry foliage, and a resistant variety if it visits your region every year. Anthracnose shows as brown spots and comes back from debris and wet leaves. Clean up the vines. Do not compost a diseased cucurbit pile onto next year’s cucumber bed." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Belly rot is a dark sunken patch where the fruit rested on wet ground. Blossom-end rot is the sunken blossom tip, almost always from uneven water. Bitter fruit is stress, age, drought, or a variety that still makes plenty of cucurbitacin. Taste a slice from the stem end if you are unsure. Spit out a sharply bitter one. Do not serve it, and do not save its seed." })] })
	] });
}
function PickingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "VIII",
			label: "Picking"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Small, often, with a knife" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Once a vine is fruiting, look every day. A slicer is usually best around six to eight inches. A pickler is better at two to four, sooner if you want the tiny ones. A lemon cucumber is ready when the skin is pale yellow, not when it has gone deep gold and soft — that is seed ripeness, and the flesh will have given up. Long Asian types can go further and stay sweet. Trust the variety’s habit, then trust your knife over a ruler."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cut the stem, leaving about an inch on the fruit. Yanking tears the vine, and a torn vine is how a good week ends. A fruit left to ripen tells the plant that its work is done. New flowers slow. The seed cucumber in the next chapter is the deliberate exception, and you only allow one or two of those." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Keeping them" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bring them in unwashed. They keep best cool and fairly humid, around 45 to 55°F, for ten days to two weeks — a crisper drawer is the household version. A very cold refrigerator pits the skin. Do not seal wet fruit in plastic. Use the ugly one first. It will not improve." }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "Check daily once they start. They do not wait out of politeness." })
	] });
}
var PANEL = {
	lengthFt: 16,
	heightFt: 50 / 12,
	/** Face the wind sees once the panel is walked down: length times a low bulk of vine. */
	laidHeightFt: 1.25,
	leafy: .5,
	tarp: 1
};
var GUSTS = [
	40,
	60,
	80
];
var MELONS = [
	{
		id: "sprite",
		name: "Sprite and Korean",
		latin: "Cucumis melo",
		fruitLb: 1.5,
		keep: 6,
		vineLb: 5,
		hang: "sling",
		spacingFt: 2,
		note: "The stem will often hold a fruit this light. The sling is for wind, and for the morning the fruit ripens and lets go."
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
		note: "Small muskmelons. Leave four on the vine and eat or thin the rest. Sling each one so a ripe fruit cannot drop."
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
		note: "Size the trellis for the heavy end of the variety, not the catalog average. A full-slip cantaloupe detaches when it is ripe. The sling is what catches it."
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
		note: "A seven-pound fruit will kink its own stem in a gust. Sling every one, to two wires, while the fruit is still the size of a fist."
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
		note: "A watermelon stem does not carry the fruit. The sling is the structure. Two fruit is enough on a vine you are hanging."
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
		note: "One fruit in the air. Cradle it early and let the cloth take the weight as it grows. Do not try to sling a melon that is already ten pounds and swinging."
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
		note: "Standard watermelons of 15 to 30 pounds, casaba, Crenshaw, and anything bred for size stay on the ground. Hanging them bends the panel or snaps the stem on the first real gust."
	}
];
var HEAT = [
	{
		id: "short",
		zones: "Zones 2–4",
		title: "A short, cool summer",
		text: "Sprite, Korean, and the earliest cantaloupes only, on black woven groundcover to warm the bed. Start them indoors no more than three weeks before the soil holds near 70°F, in pots you can plant whole. Icebox watermelon is a gamble. A standard watermelon will not finish."
	},
	{
		id: "mid",
		zones: "Zones 5–6",
		title: "Enough heat if you do not wait",
		text: "Cantaloupe, Galia, and Charentais are the reliable hang. Honeydew needs a long warm tail. Icebox watermelon in a hot summer; standard watermelon only in the warmer end of zone 6, and on the ground. Sow when the soil, not the air, is near 70°F."
	},
	{
		id: "long",
		zones: "Zones 7–8",
		title: "A full melon summer",
		text: "Muskmelons and ground watermelons both have time. Direct sow or transplant once the soil is warm, and get the trellis, the hinge, and the cover roller up the same week. Fruit that is still small in a September storm is the crop you laid the panel down to save."
	},
	{
		id: "hot",
		zones: "Zones 9–11",
		title: "Heat is not the limit. Wet leaves are.",
		text: "Sow as a warm-season crop and do not ask vines to flower through the wettest month if you can choose. Trellis for air. In a humid summer the storm cloth must come off as soon as the wind drops, or downy mildew and gummy stem blight will take what the gusts spared."
	}
];
function melonById(id) {
	return MELONS.find((melon) => melon.id === id) ?? MELONS[2];
}
function plantLoad(melon) {
	const fruit = melon.fruitLb * melon.keep;
	const staticLb = fruit + melon.vineLb;
	const designLb = staticLb * 2;
	const plants = PANEL.lengthFt / melon.spacingFt;
	return {
		fruit,
		staticLb,
		designLb,
		plants,
		panelLb: designLb * plants
	};
}
/** Velocity pressure in pounds per square foot. Speed is miles per hour. */
function velocityPressure(mph) {
	return .00256 * mph * mph;
}
function lateralLb(mph, areaSqFt, solidity) {
	return velocityPressure(mph) * areaSqFt * solidity;
}
function windCases(mph) {
	const standingArea = PANEL.lengthFt * PANEL.heightFt;
	const laidArea = PANEL.lengthFt * PANEL.laidHeightFt;
	return {
		standing: lateralLb(mph, standingArea, PANEL.leafy),
		tarp: lateralLb(mph, standingArea, PANEL.tarp),
		laid: lateralLb(mph, laidArea, PANEL.leafy)
	};
}
var SPRING_TASKS = [
	{
		id: "posts",
		label: "Galvanized posts are 30 inches in the ground, 4 feet apart"
	},
	{
		id: "hinge",
		label: "Bottom hinge pins are in, and the panel has been laid down once on a calm day"
	},
	{
		id: "shackles",
		label: "The top is held by two snap shackles, not by wire"
	},
	{
		id: "anchors",
		label: "Screw anchors are already in the ground, windward and for the lay-down"
	},
	{
		id: "roller",
		label: "Wind cloth is rolled on the ridge pipe, loose end ready"
	},
	{
		id: "hail",
		label: "Hail net and clamps are in a bin at the row, not at the back of the shed"
	},
	{
		id: "slings",
		label: "Hanging fruit is slung from the wire while it is still small"
	},
	{
		id: "hoops",
		label: "Ground-melon hoop rods are already in the row"
	}
];
var WATCH_TASKS = [
	{
		id: "pick",
		label: "Fruit that will slip is off the vine"
	},
	{
		id: "thin",
		label: "Extra shoots are clipped so the sail is thinner"
	},
	{
		id: "down",
		label: "If gusts may pass 45 mph, the panel is walked down before dark"
	},
	{
		id: "pin",
		label: "The lowered panel is pinned to the anchors"
	},
	{
		id: "net",
		label: "If hail is forecast, the net is over the lowered row"
	},
	{
		id: "chain",
		label: "Ground-melon hail net is unrolled and the hem is chained"
	}
];
var SHADE = [{
	id: "first",
	label: "First summer",
	title: "The morning glories make the roof",
	text: "Sown at the posts after frost, they cover the wire by midsummer. You sit in dappled shade the same year you build. The roses are only canes you have tied in, flowering at the sides, not overhead."
}, {
	id: "later",
	label: "Third summer",
	title: "The roses hold the walls",
	text: "Fanned canes cover the side panels and bloom along their length. Keep sowing morning glories. A climber that stays near ten feet will not, by itself, make a solid ceiling, and you do not want it to. The glory is the quick shade. The rose is the room."
}];
var SEAT_TASKS = [
	{
		id: "place",
		label: "The square sits on the north side of the beds, in full sun"
	},
	{
		id: "piers",
		label: "Four posts are 3 feet in the ground, 8 feet apart, plumbed and braced"
	},
	{
		id: "rail",
		label: "A galvanized top rail runs the square at 7½ feet"
	},
	{
		id: "ridge",
		label: "A ridge rail sits about 18 inches above the eaves"
	},
	{
		id: "roof",
		label: "Two half cattle panels are clipped from eave to ridge, not a solid roof"
	},
	{
		id: "walls",
		label: "North, east, and west panels are on shackles. The garden side is open"
	},
	{
		id: "bench",
		label: "The bench faces the beds: galvanized frame, HDPE slats, a rail at your back"
	},
	{
		id: "floor",
		label: "Gravel is down over pinned woven groundcover"
	},
	{
		id: "roses",
		label: "Two climbers are 18 inches off the side posts, on their own inner wires"
	},
	{
		id: "glory",
		label: "Morning glory seed is on the outer grid, not on the rose canes"
	}
];
function lb(n) {
	const rounded = Math.round(n * 10) / 10;
	return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
function MelonCover() {
	const setChapter = useReading((state) => state.setChapter);
	const setVolume = useReading((state) => state.setVolume);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "plate-in mx-auto grid w-full max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-10 md:py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm text-vine",
				children: "The Vinekeeper · Volume II"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl font-semibold leading-tight text-ink md:text-6xl",
				children: "Melons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md font-display text-xl italic leading-snug text-ink/85",
				children: "What the fruit weighs, what the trellis must be, and how to cover it before the wind arrives."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-md text-base leading-relaxed text-ink/80",
				children: "Cantaloupe through icebox watermelon, hung in cloth and carried on galvanized steel. A solid tarp is not a storm plan. A hinge you already installed is."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setChapter(1),
					className: "inline-flex min-h-11 items-center bg-ink px-5 text-paper",
					children: "Open the book"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setVolume("cucumber"),
					className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-ink",
					children: "Cucumber volume"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 border-t border-ink/15",
				children: [
					{
						chapter: 1,
						label: "Weight",
						note: "What each fruit asks of the wire"
					},
					{
						chapter: 2,
						label: "The trellis",
						note: "Metal that stays clean and does not rot"
					},
					{
						chapter: 3,
						label: "Wind",
						note: "Standing, tarped, or laid down"
					},
					{
						chapter: 4,
						label: "The storm",
						note: "Covers you can drop before dark"
					},
					{
						chapter: 7,
						label: "A seat",
						note: "A wire gazebo, glories, and roses"
					}
				].map((jump) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setChapter(jump.chapter),
						className: "flex min-h-11 w-full flex-col items-start justify-center py-2 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-ink",
							children: jump.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-ink/70",
							children: jump.note
						})]
					})
				}, jump.chapter))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/plates/melon-cover.jpg",
			alt: "A botanical painting of a melon vine with a netted cantaloupe, a pale honeydew, and a small striped watermelon.",
			className: "w-full border border-ink/10 bg-paper"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 text-sm leading-relaxed text-ink/75",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display italic text-seed",
				children: "Plate I. "
			}), "Three fruits, three weights. Only the lighter two belong in the air."]
		})] })]
	});
}
function WeightsPage() {
	const melonId = useReading((state) => state.melonId);
	const setMelon = useReading((state) => state.setMelon);
	const melon = melonById(melonId);
	const load = plantLoad(melon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "I",
			label: "Weight"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Hang only what the stem can survive" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/melon-kinds.jpg",
			alt: "A painted row of melons from a tiny pale fruit through cantaloupe and honeydew to a small watermelon and a large ground watermelon.",
			plate: "Plate II",
			caption: "Left to right the fruit gets heavier. Past a certain weight it stays on the ground, on purpose."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "A melon trellis fails in two different ways, and they are easy to confuse. The wire can be too weak for the fruit. Or the fruit can be light enough for the wire and still tear off its own stem the first time the vine sails in a gust. The sling is how you separate those problems. The cloth carries the pounds. The stem only has to stay unkinked."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The figures below use the heavy end of a typical fruit, not a hopeful average. Static load is the fruit you chose to keep, plus a wet vine. The design load doubles that, because a sling swings. This is a gardener’s allowance, not a stamped drawing." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Melon types",
			children: MELONS.map((entry) => {
				const selected = entry.id === melon.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": selected,
					onClick: () => setMelon(entry.id),
					className: "min-h-11 px-3 text-left text-sm " + (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink"),
					children: entry.name
				}, entry.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 border border-ink/15 px-4 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm text-seed",
					children: melon.latin
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl font-semibold leading-tight text-ink",
					children: melon.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-ink",
					children: melon.note
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Fruit",
							text: melon.hang === "ground" ? `${lb(melon.fruitLb)} lb, and it stays down` : `${lb(melon.keep)} fruit × ${lb(melon.fruitLb)} lb = ${lb(load.fruit)} lb`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Wet vine",
							text: `${lb(melon.vineLb)} lb of leaves and stem after rain`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Static",
							text: `${lb(load.staticLb)} lb on that plant`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Design",
							text: `${lb(load.designLb)} lb, static times two, per plant`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "On 16 ft",
							text: `${lb(load.plants)} plants at ${melon.spacingFt} ft, ${lb(load.panelLb)} lb of design load on the panel`
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Space the heavy ones",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Anything with a design load of about 40 pounds or more is set 4 feet apart, not 2. You carry fewer fruit on the panel, and the wind gets a gap. A 16-foot cattle panel can take the vertical load. The post and the anchor are what fold." })
		})
	] });
}
function Row({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1 border-t border-ink/10 pt-4 sm:flex-row sm:gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-display text-sm text-vine sm:w-24 sm:shrink-0",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-base tabular-nums leading-relaxed text-ink",
			children: text
		})]
	});
}
function TrellisPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "II",
			label: "The trellis"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Metal, cloth, and anchors" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/melon-trellis.jpg",
			alt: "A galvanized steel arch trellis with two cantaloupes resting in cloth slings, no wood and no rust.",
			plate: "Plate III",
			caption: "The panel is the shelf. The sling is the shelf bracket. The stem is not a bracket."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Choose materials that wet leaves cannot feed, that sap cannot stain or rot, and that a storm cannot soften. That rules out wood, bamboo, cotton, jute, and the thin zinc on bargain wire. It leaves hot-dip galvanized steel, stainless where the air is salty, anodized aluminum for light frames, and cloth that does not drink water."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "The frame" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Use a 16-foot cattle panel or hog panel in 4-gauge wire that was hot-dip galvanized, not merely electroplated. Electroplate looks silver in May and freckles by August. Hot-dip zinc survives wet foliage, soil splash, and years of weather. Hose it off. Do not let bare copper pipe or copper wire rest on it. Copper strips zinc." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Posts are galvanized steel pipe, the 2-3/8 inch chain-link terminal post, set 30 to 36 inches in the ground, 4 feet apart. In clay that stays wet, guy the top or set the post in a concrete pier. A T-post driven a foot deep is a fair-weather stick. It will hinge at the soil in a gust." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Within about ten miles of salt water, use 316 stainless for shackles, cable, and sling clips. Type 304 tea-stains and then pits. Anodized 6061 aluminum tube is a clean light frame if the wall is thick, about an eighth of an inch, and the diameter is at least an inch and a half. Aluminum is less stiff than steel. Do not build a melon arch out of thin conduit." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "The sling" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One-inch polyester webbing, the outdoor-chair kind, or a doubled square of UV-stable HDPE shade cloth. Neither one absorbs water, so they do not stay wet against the rind and they do not host the mildew a cotton hammock keeps. Girth the fruit loosely. Clip the sling to two horizontal wires with a galvanized or stainless snap, not a zip tie. A zip tie goes brittle in the sun, and you cannot open it with cold wet hands." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Put the sling on while the fruit is small. A cantaloupe that slips when ripe will fall the height of the wire if nothing is under it. A watermelon never slips. Its stem simply breaks." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Do not build it out of these" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Untreated wood rots at the soil and holds disease from one summer to the next. Pressure-treated lumber stays damp, grows a film, and the copper in the treatment is hard on galvanized wire. Bamboo fails at the node in a wet year. PVC pipe chalks and turns brittle in the sun, then shatters in a cold gust. Sisal, jute, and cotton twine rot where they touch a wet stem. Baling twine stretches and then snaps. A solid blue tarp is a material problem of its own, and it is treated on the wind page." }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "The panel is rarely what fails. The anchor is." })
	] });
}
function WindPage() {
	const gust = useReading((state) => state.gust);
	const setGust = useReading((state) => state.setGust);
	const cases = windCases(gust);
	const advice = gust <= 40 ? "A guyed panel can stay up. Check the shackles and the slings before the wind, not during it." : gust <= 60 ? "A thick vine is near the edge. If the forecast says gusts rather than a steady breeze, lay the panel down." : "Do not leave it standing. The laid-down load is the one the anchors can actually hold.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "III",
			label: "Wind"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "A trellis is a sail" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Fruit weight pulls down. Wind pushes sideways, and sideways is how posts fold. A 16-foot panel that stands about four feet tall is roughly 67 square feet of vine. The push on it is estimated here with the ordinary velocity pressure, 0.00256 times the speed squared, speed in miles per hour, answer in pounds per square foot. A leafy panel you can still see light through is taken as half a solid wall. A sealed tarp is the whole wall."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Gust speed",
			children: GUSTS.map((speed) => {
				const selected = speed === gust;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": selected,
					onClick: () => setGust(speed),
					className: "min-h-11 min-w-16 px-4 tabular-nums " + (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink"),
					children: [speed, " mph"]
				}, speed);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-4 border border-ink/15",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindRow, {
					label: "Leafy panel, standing",
					pounds: cases.standing,
					hint: "Half a solid wall of vine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindRow, {
					label: "Solid tarp, standing",
					pounds: cases.tarp,
					hint: "The same panel under a sealed cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindRow, {
					label: "Panel laid down",
					pounds: cases.laid,
					hint: "About 16 feet by a foot and a quarter of vine"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-relaxed text-ink",
			children: advice
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Read the middle number twice",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"At ",
				gust,
				" mph a solid cover does not protect the trellis. It roughly doubles the sideways load. That is why the storm cloth in the next chapter is a permeable windbreak, about half solid, and why a hail net goes over a panel that is already lying down. Four screw anchors, each rated well above the share of a standing hit, live in the ground from spring. If the forecast is an 80 mph gust, you do not ask them to prove it."
			] })
		})
	] });
}
function WindRow({ label, pounds, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-ink/10 px-4 py-4 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-lg text-ink",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
				className: "font-display text-2xl tabular-nums text-seed",
				children: [lb(pounds), " lb"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-ink/70",
			children: hint
		})]
	});
}
function StormPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "IV",
			label: "The storm"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Drop it before the wind does" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/melon-storm.jpg",
			alt: "A galvanized melon trellis at dusk with a roll of pale cloth on a pipe along the top and one length already dropped.",
			plate: "Plate IV",
			caption: "The cloth lives on the ridge all season. A storm is an unroll, not a trip to the shed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "The covers that survive a bad decade of wind are the ones already attached. If the plan requires finding a tarp, a ladder, and eight loose bricks, it will not happen in the twenty minutes you actually get. Bricks become projectiles. A sealed tarp becomes a sail. Build three setups in the spring, and the warning is a short list."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "One. The hinged panel" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pin the bottom wire of the cattle panel to the posts with two galvanized hitch pins, so the panel can rotate down to the leeward side. Hold the top with two snap shackles. On a calm day in May, unclip it and walk it down onto boards or straw, then stand it back up. You want to know the path of the fruit before you do it in the dark." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When gusts may pass 45 mph, that is the move. Two shackles, walk it down, pin it to the anchors that are already in the ground. A panel on its side is no longer a four-foot sail. Do this before dark if you can. A vine laid down for one night is usually fine. A vine left standing through the gust is the one that kinks." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Two. Wind cloth on a pipe" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For a wind you intend to ride out with the panel still up — a 40 mph blow, not an 80 — keep a knitted agricultural windbreak, about half solid, rolled on an aluminum pipe at the ridge. One slip knot releases it. Clip the leeward edge. Leave the bottom open a hand’s width so the cloth cannot balloon. Half-solid cloth sheds some speed and lets air through. A painter’s tarp does the opposite, and the wind page is the arithmetic." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fleece row cover is not this cloth. It shreds, and it sticks to wet leaves." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Three. Hail over a lowered row, and over fruit on the ground" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hail wants a cover. Wind wants that cover small. So the hail net goes on after the panel is down, or over low hoops, never as a lid on a standing trellis. Use knitted hail net, not vinyl. Weight the hem with chain in a sleeve, or with a sand tube sewn in. Nothing loose." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For melons that live on the ground, leave fiberglass hoop rods in the row all season, pushed a foot deep, every 4 feet. Fiberglass flexes. Sun-rotted PVC snaps. The net stays rolled at the end of the row, and the clamps live on the hoops. Two people can cover one row in about ten minutes. A windward fence of the same half-solid cloth, 4 feet high and a few feet upwind, slows the gust at the fruit without building a roof." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sit ground fruit on coarse gravel or a pinned sheet of HDPE so the rain that follows does not leave them in mud. Do not use a loose edge of plastic mulch. Storms turn it into litter and a small sail. Woven groundcover, pinned and taken up at the end of the year, is the piece that stays clean." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "If the hinge is not in yet, you do not have a fifteen-minute plan." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An unwired panel is not a job for a warning. Guy the posts if that is all you can do, pick what will slip, and put the hinge in before the next one. The lists below stay on this device." }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
			title: "Set this in the spring",
			items: SPRING_TASKS
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
			title: "When a watch is posted",
			items: WATCH_TASKS
		})
	] });
}
function CheckList({ title, items }) {
	const checks = useReading((state) => state.stormChecks);
	const toggle = useReading((state) => state.toggleStorm);
	const done = items.filter((item) => checks[item.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-semibold text-vine",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-sm tabular-nums text-seed",
				children: [
					done,
					" of ",
					items.length
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 border-t border-ink/15",
			children: items.map((item) => {
				const on = Boolean(checks[item.id]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => toggle(item.id),
						className: "flex min-h-11 w-full items-start gap-3 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid size-5 shrink-0 place-items-center border " + (on ? "border-ink bg-ink text-paper" : "border-ink/40 bg-paper"),
							"aria-hidden": "true",
							children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3",
								strokeWidth: 2.5
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: on ? "text-ink/50 line-through" : "text-ink",
							children: item.label
						})]
					})
				}, item.id);
			})
		})]
	});
}
function HeatPage() {
	const heatId = useReading((state) => state.heat);
	const setHeat = useReading((state) => state.setHeat);
	const band = HEAT.find((entry) => entry.id === heatId) ?? HEAT[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "V",
			label: "Heat"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "They will not rush for you" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Melons want warmer soil than cucumbers and a longer run of hot days. Seed sits and rots below about 70°F. Germination is happier near 80°F to 90°F. If you start them indoors, give them no more than three weeks, in a pot that is planted whole. A torn root is a vine that sits there while the season leaves."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A zone number is only a hint about how long the heat lasts. Pick the band you actually garden in." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Summer length",
			children: HEAT.map((entry) => {
				const selected = entry.id === band.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": selected,
					onClick: () => setHeat(entry.id),
					className: "min-h-11 px-3 text-sm " + (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink"),
					children: entry.zones
				}, entry.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 border border-ink/15 px-4 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm text-seed",
					children: band.zones
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl font-semibold leading-tight text-ink",
					children: band.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-ink",
					children: band.text
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Sugar is a heat problem too",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Keep water steady while the fruit is sizing. Ease off only after it is full size, and not in the middle of a scorching week. A drought swing early makes small, split, or tasteless fruit. The last dry days are for concentrating sugar, not for saving a wilted vine." })
		})
	] });
}
function MelonVinePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "VI",
			label: "The vine"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Flowers, water, and the day it lets go" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Melon flowers work like cucumber flowers. Males open first, on a plain stem. Females carry a tiny fruit behind the blossom. Bees do the work in the morning, or you do it with a male flower stripped of its petals, before noon. A fruit that yellows and drops when it is the size of a thumb was not pollinated."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Muskmelons, honeydews, Galias, and Charentais are all ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Cucumis melo" }),
			". They cross with each other, and with an Armenian cucumber, which is a melon wearing the wrong name. They do not cross with watermelon, and they do not cross with a true cucumber. Watermelon crosses only with watermelon."
		] })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "When it is ready" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A cantaloupe or Galia is ready at full slip: the fruit separates from the stem with a gentle push, and it smells like itself across the row. Do not pull a half-slip fruit and expect it to sweeten on the counter the way a pear might. Honeydew and Canary do not slip. The rind turns cream or gold and the blossom end gives slightly." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Watermelon does not slip. Look at the tendril nearest the fruit, the yellow ground spot, and a thud that has gone dull. Those signs together are better than any one of them. Cut it. Do not tear the vine you are hoping will feed the next fruit." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "A sling under a slipping cantaloupe is the difference between a fruit and a bruise." })
	] });
}
function GazeboPage() {
	const shadeId = useReading((state) => state.shade);
	const setShade = useReading((state) => state.setShade);
	const checks = useReading((state) => state.seatChecks);
	const toggle = useReading((state) => state.toggleSeat);
	const shade = SHADE.find((entry) => entry.id === shadeId) ?? SHADE[0];
	const done = SEAT_TASKS.filter((item) => checks[item.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "VII",
			label: "A seat"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Shade at the edge of the beds" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/gazebo.jpg",
			alt: "A galvanized gazebo with blue morning glories on the wire roof, pink climbing roses on the sides, and a bench facing the vegetable beds.",
			plate: "Plate V",
			caption: "The garden side stays open. The vines shade the seat, not the beds."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Set an eight-foot square of the same galvanized pipe on the north side of the garden, in full sun. Morning glories cover the wire the first summer. Climbing roses take the sides and stay. You sit facing the beds, in dappled light, close enough to see what wants picking."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Put it on the north edge so the noon shadow falls inside the square and not across the melons. The structure itself wants sun. The vegetables do not want its shade." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "The frame, in a weekend" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Four galvanized posts, the 2-3/8 inch chain-link terminal post, ten feet long. Dig a hole about a foot across and three feet deep at each corner, eight feet apart. Set the post, plumb it, and pour concrete. Brace it and leave it overnight. About seven and a half feet of post stand above the gravel." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clamp a galvanized fence rail around the top, a level square. Then a ridge of the same rail down the middle, about eighteen inches higher, held by two short uprights clamped to the side rails. Bolt-cut a sixteen-foot cattle panel into two halves. Bend each half from an eave up to the ridge and clip it. That is the roof: open wire, not decking and not a tarp. A sealed lid is the sail the wind chapter already priced." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clip panels to the north, east, and west with snap shackles at the top, the same hardware as the melon trellis, so a windward wall can come off before a warning. Leave the south side open toward the beds. You walk in there. You look out there." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "A bench you can hose" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A galvanized frame, five feet long, set against the north panel and facing the garden. Seat height eighteen inches, depth about sixteen. Slats of HDPE lumber, gapped half an inch so rain does not sit. It does not splinter, rot, or hold a film the way a wooden seat does in a wet summer. A horizontal rail a foot above the seat is the backrest. Do not lean into the wires. The roses will live there, and they have thorns." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Floor the square with gravel over a pinned sheet of woven groundcover. Gravel drains, hoses clean, and does not splash soil onto rose leaves. Do not leave a loose edge of plastic. Wind takes it." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "Two plants, two wires" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Give them separate grids. Morning glory dies at frost and has to be pulled. If it has twined through the rose, you strip bark when you pull it. Roses go on an inner run of wire at the east and west posts. Morning glories go on the outer grid and across the roof." }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Which summer",
			children: SHADE.map((entry) => {
				const selected = entry.id === shade.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": selected,
					onClick: () => setShade(entry.id),
					className: "min-h-11 px-3 text-sm " + (selected ? "bg-ink text-paper" : "border border-ink/20 bg-paper text-ink"),
					children: entry.label
				}, entry.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 border border-ink/15 px-4 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-semibold leading-tight text-ink",
				children: shade.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-ink",
				children: shade.text
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Sow ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Ipomoea tricolor" }),
				", the annual morning glory, not bindweed. Soak the seed overnight and sow half an inch deep when the soil is near 65°F, about six seeds at each post, thinned to three. Set them six inches out from the metal so the stem is not against a post that heats in the sun. They twine on wire. A bare post is not a trellis. Pull the dead vines while they are still limp, before they dry into a mat. Pull seedlings that come up in the beds. They will."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Plant two repeat-blooming climbers that stay near eight to twelve feet. Not a rambler. A rambler can throw twenty feet of cane and turn the roof into a solid sail. Eighteen inches off the side posts, so the crown is not against hot metal and your hand can get in to tie. Where winters freeze hard, set the bud union about two inches below the soil. Where they do not, set it at soil level." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fan the canes toward horizontal. A cane trained straight up flowers at the tip. A cane laid along the wire flowers along its length, which is the wall beside the bench. Tie with a loose strip of polyester webbing or soft stretch tape, never wire, and loosen the ties each spring before they girdle. Water the soil, not the leaves. Wet foliage is how black spot starts." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In late winter take out dead and crossing wood and keep the main canes. Do not cut a climber down to stubs." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pull, { children: "The glory is this summer’s shade. The rose is the reason you sit there next year." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold text-vine",
					children: "Raise it, then plant it"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm tabular-nums text-seed",
					children: [
						done,
						" of ",
						SEAT_TASKS.length
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 border-t border-ink/15",
				children: SEAT_TASKS.map((item) => {
					const on = Boolean(checks[item.id]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-ink/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => toggle(item.id),
							className: "flex min-h-11 w-full items-start gap-3 py-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid size-5 shrink-0 place-items-center border " + (on ? "border-ink bg-ink text-paper" : "border-ink/40 bg-paper"),
								"aria-hidden": "true",
								children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-3",
									strokeWidth: 2.5
								}) : null
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: on ? "text-ink/50 line-through" : "text-ink",
								children: item.label
							})]
						})
					}, item.id);
				})
			})]
		})
	] });
}
function AfterPage() {
	const setVolume = useReading((state) => state.setVolume);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
			numeral: "VIII",
			label: "After"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterTitle, { children: "Lift it in the morning" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop",
			children: "Once the gusts are under about 25 mph, stand the panel back up and take the cloth off. Melon leaves that stay wet under a cover get downy mildew and gummy stem blight, which will take the rest of the season even if the wind took nothing. Rewind the cloth on the pipe while it is dry. A wet roll mildews in the sleeve and welds itself shut."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Reset every sling. A fruit that spent the night on a board may have a kinked stem. If the stem is pinched white, eat that fruit if it is close, or accept that it has stopped. Check the hinge pins and the anchor eyes. Replace a shackle that opened. Do not “temporarily” wire the top shut. Wire is how the next storm catches you." })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Subhead, { children: "What the decade changed" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A trellis that was fine in a calm year is a sail in a year of warnings. Build the hinge, the anchors, and the roller as part of the trellis, out of metal and cloth that the plants and the weather do not eat. Then the warning is a walk down the row, not a rebuild." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setVolume("cucumber"),
			className: "min-h-11 text-left underline decoration-seed decoration-2 underline-offset-4",
			children: "The cucumber volume is the other half of this press."
		}) })] })
	] });
}
var MELON_PAGES = [
	{
		id: "cover",
		title: "Cover",
		dek: "Weight, metal, and weather",
		Page: MelonCover
	},
	{
		id: "weight",
		title: "Weight",
		dek: "What each fruit asks of the wire",
		Page: WeightsPage
	},
	{
		id: "trellis",
		title: "The trellis",
		dek: "Metal that stays clean",
		Page: TrellisPage
	},
	{
		id: "wind",
		title: "Wind",
		dek: "Standing, tarped, or laid down",
		Page: WindPage
	},
	{
		id: "storm",
		title: "The storm",
		dek: "Covers you can drop before dark",
		Page: StormPage
	},
	{
		id: "heat",
		title: "Heat",
		dek: "They will not rush for you",
		Page: HeatPage
	},
	{
		id: "vine",
		title: "The vine",
		dek: "Flowers, water, and slip",
		Page: MelonVinePage
	},
	{
		id: "seat",
		title: "A seat",
		dek: "Glory overhead, roses at the sides",
		Page: GazeboPage
	},
	{
		id: "after",
		title: "After",
		dek: "Lift it in the morning",
		Page: AfterPage
	}
];
var PAGES = [
	{
		id: "cover",
		title: "Cover",
		dek: "The field book",
		Page: CoverPage
	},
	{
		id: "plant",
		title: "The plant",
		dek: "Eaten before it is ripe",
		Page: PlantPage
	},
	{
		id: "ground",
		title: "Ground",
		dek: "Sun, a rich bed, warm feet",
		Page: GroundPage
	},
	{
		id: "zones",
		title: "Zones",
		dek: "When the ground is ready",
		Page: ZonePage
	},
	{
		id: "sowing",
		title: "Sowing",
		dek: "Seed into warm ground",
		Page: SowingPage
	},
	{
		id: "vine",
		title: "The vine",
		dek: "Trellis, water, and food",
		Page: VinePage
	},
	{
		id: "flowers",
		title: "Flowers",
		dek: "Males first, then fruit",
		Page: FlowerPage
	},
	{
		id: "trouble",
		title: "Trouble",
		dek: "Beetles, mildew, bitterness",
		Page: TroublePage
	},
	{
		id: "picking",
		title: "Picking",
		dek: "Small, often, with a knife",
		Page: PickingPage
	},
	{
		id: "seed",
		title: "Saving seed",
		dek: "Harvest past the kitchen",
		Page: SeedPage
	},
	{
		id: "companions",
		title: "Companions",
		dek: "The plants around the vine",
		Page: CompanionPage
	},
	{
		id: "year",
		title: "The year",
		dek: "A season you can tick",
		Page: YearPage
	}
];
function Reader() {
	const stored = useReading((state) => state.chapter);
	const setChapter = useReading((state) => state.setChapter);
	const volume = useReading((state) => state.volume);
	const setVolume = useReading((state) => state.setVolume);
	const [contentsOpen, setContentsOpen] = (0, import_react.useState)(false);
	const scrollerRef = (0, import_react.useRef)(null);
	const pages = volume === "melon" ? MELON_PAGES : PAGES;
	const index = stored >= 0 && stored < pages.length ? stored : 0;
	const page = pages[index];
	const PageView = page.Page;
	const last = pages.length - 1;
	(0, import_react.useEffect)(() => {
		useReading.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
	}, [index, volume]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const target = event.target;
			if (target instanceof HTMLElement && target.closest("input, textarea, select, button, a")) return;
			if (event.key === "Escape") setContentsOpen(false);
			if (contentsOpen) return;
			if (event.key === "ArrowRight" && index < last) setChapter(index + 1);
			if (event.key === "ArrowLeft" && index > 0) setChapter(index - 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		index,
		last,
		setChapter,
		contentsOpen
	]);
	const go = (next) => {
		setContentsOpen(false);
		setChapter(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-14 shrink-0 flex-col items-center justify-between bg-vine py-6 text-paper md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "spine-title font-display text-sm tracking-wide",
					children: volume === "melon" ? "Melons" : "Cucumbers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm tabular-nums",
					children: index + 1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-center gap-2 border-b border-ink/10 px-3 py-2 md:px-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Contents",
								"aria-expanded": contentsOpen,
								onClick: () => setContentsOpen(true),
								className: "grid size-11 shrink-0 place-items-center text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xs tracking-wide text-ink/70",
									children: ["The Vinekeeper · ", volume === "melon" ? "Melons" : "Cucumbers"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-display text-base text-ink",
									children: page.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "shrink-0 font-display text-sm tabular-nums text-ink/60",
								children: [
									index + 1,
									" / ",
									pages.length
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						ref: scrollerRef,
						className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageView, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "grid grid-cols-2 gap-2 border-t border-ink/10 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => go(index - 1),
							disabled: index === 0,
							className: "inline-flex min-h-11 items-center justify-center gap-1 border border-ink/20 px-3 text-ink disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Previous"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => go(index === last ? 0 : index + 1),
							className: "inline-flex min-h-11 items-center justify-center gap-1 bg-ink px-3 text-paper",
							children: [index === 0 ? "Open the book" : index === last ? "Back to the cover" : "Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})]
					})
				]
			}),
			contentsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-20 flex bg-ink/40",
				role: "presentation",
				onClick: () => setContentsOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "contents-title",
					className: "flex h-full w-full max-w-md flex-col bg-paper text-ink shadow-none",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-ink/10 px-5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "contents-title",
								className: "font-display text-2xl font-semibold",
								children: "Contents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close contents",
								onClick: () => setContentsOpen(false),
								className: "grid size-11 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									"aria-hidden": "true"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "min-h-0 flex-1 overflow-y-auto px-3 py-2",
							children: pages.map((entry, entryIndex) => {
								const current = entryIndex === index;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => go(entryIndex),
									"aria-current": current ? "page" : void 0,
									className: "flex min-h-11 w-full items-baseline gap-4 px-2 py-2 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 shrink-0 font-display tabular-nums text-seed",
										children: entryIndex + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-lg " + (current ? "text-vine" : "text-ink"),
											children: entry.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm text-ink/60",
											children: entry.dek
										})]
									})]
								}) }, entry.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-ink/10 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setVolume(volume === "melon" ? "cucumber" : "melon");
									setContentsOpen(false);
								},
								className: "min-h-11 w-full px-2 text-left font-display text-lg text-vine",
								children: volume === "melon" ? "Open the cucumber volume" : "Open the melon volume"
							})
						})
					]
				})
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, {});
}
//#endregion
export { Home as component };
