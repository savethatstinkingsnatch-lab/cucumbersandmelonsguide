import { ChapterTitle, Kicker, Note, Page, Plate, Prose, Pull, Subhead } from "@/components/vinekeeper/plates";
import { ZoneGuide } from "@/components/vinekeeper/zone-guide";

export function PlantPage() {
  return (
    <Page>
      <Kicker numeral="I" label="The plant" />
      <ChapterTitle>Eaten before it is ripe</ChapterTitle>
      <Plate
        src="/plates/kinds.jpg"
        alt="A painted plate of five cucumbers: a long slicer, a pickler, a round lemon cucumber, a slender pale cucumber, and a golden seed cucumber."
        plate="Plate II"
        caption="Slicer, pickler, lemon, a long pale type, and the gold fruit you leave for seed. They are the same species at different moments, except when they are not."
      />
      <Prose>
        <p className="drop">
          A cucumber is eaten unripe. That one fact explains the awkward parts of the crop: why a fruit
          turns bitter if you forget it, why the vine slows down when you stop picking, and why the seed
          you want looks nothing like the cucumber you slice for lunch.
        </p>
        <p>
          The plant is <em>Cucumis sativus</em>, an annual. It makes separate male and female flowers on
          the same vine, and it wants heat, steady water, and something to climb. Most of what we call a
          cucumber — slicers, picklers, lemon cucumbers, the long pale Asian types — is this species.
          Open-pollinated kinds come true from saved seed. Hybrids, the packets marked F1, do not.
        </p>
      </Prose>
      <Subhead>Names that lie a little</Subhead>
      <Prose>
        <p>
          A Mexican sour gherkin is <em>Melothria scabra</em>, a different genus. It is a fine pot plant
          and it will not cross with your cucumbers. An Armenian cucumber is a melon,{" "}
          <em>Cucumis melo</em>. It climbs like a cucumber and crosses with melons, not with a Marketmore.
        </p>
        <p>
          Grocery fruit is a poor place to start seed. It was picked immature, so the seed inside is not
          finished, and the variety is often a hybrid in any case. Begin with a named open-pollinated
          packet: Marketmore 76 or Straight Eight for slicing, Boston Pickling for jars, a lemon cucumber
          if you want something round, Suyo Long if you want length that stays tender.
        </p>
      </Prose>
      <Pull>Leave the seed fruit until it no longer looks like food.</Pull>
      <Prose>
        <p>
          For the kitchen you pick small and often. For seed you choose one fruit and do the opposite.
          The rest of this book is how to tell those two jobs apart, and how to time them where you live.
        </p>
      </Prose>
    </Page>
  );
}

export function GroundPage() {
  return (
    <Page>
      <Kicker numeral="II" label="Ground" />
      <ChapterTitle>Sun, a rich bed, warm feet</ChapterTitle>
      <Prose>
        <p className="drop">
          Cucumbers want at least six hours of direct sun, and eight is better. They also want a soil that
          holds moisture without staying cold and sour. A slightly acid to near-neutral bed, worked with
          finished compost, is the usual home. Do not lay raw manure in the same season. The fruit ends up
          near the soil, and fresh manure is a poor neighbor for anything you eat uncooked.
        </p>
        <p>
          Drainage matters as much as richness. Seed in cold, wet ground rots. If your spring soil is heavy
          clay, a raised row or a low hill warms faster than a flat bed. Shelter from the prevailing wind
          helps too: the leaves are large, and a vine that has grabbed a trellis will still tear if the
          trellis itself rocks.
        </p>
      </Prose>
      <Subhead>In a pot</Subhead>
      <Prose>
        <p>
          Use a deep container, opaque so the root ball does not bake, with real drainage. A compost-heavy
          potting mix beats garden soil in a pot. Choose a smaller vine — a pickler, a bush type, something
          like Miniature White — and do not expect a pot to feed a rampant slicer without constant water.
        </p>
      </Prose>
      <Note title="The warmth test">
        <p>
          Germination is poor in cold soil and happiest in real warmth. Wait until the top two inches hold
          near 70°F before you sow outdoors. A cheap soil thermometer is more useful here than another bag
          of fertilizer.
        </p>
      </Note>
    </Page>
  );
}

export function ZonePage() {
  return (
    <Page>
      <Kicker numeral="III" label="Zones" />
      <ChapterTitle>When the ground is ready</ChapterTitle>
      <Prose>
        <p className="drop">
          A USDA zone tells you how cold the winter gets. Cucumbers care more about the last spring frost
          and about summer heat, but the zone is a workable shorthand for when the soil usually wakes up.
          Direct sow after frost danger has passed and the soil has warmed. If you start plants indoors, do
          it no earlier than four weeks before that last frost. They resent a long stay in a pot, and they
          resent a cold transplant even more.
        </p>
        <p>
          In zones 2 through 5 you are racing a short summer, so earliness matters. In zones 8 through 11
          the race is the other way: grow in the cooler months, and do not ask a vine to flower through the
          hottest stretch. The chart below is a starting sketch. Your frost date outranks it.
        </p>
      </Prose>
      <ZoneGuide />
    </Page>
  );
}

export function SowingPage() {
  return (
    <Page>
      <Kicker numeral="IV" label="Sowing" />
      <ChapterTitle>Seed into warm ground</ChapterTitle>
      <Plate
        src="/plates/sowing.jpg"
        alt="Cucumber seedlings with thick seed leaves just opening in soil blocks, and loose seeds on a wooden bench."
        plate="Plate III"
        caption="If you start them indoors, sow in something you can plant whole. Cucumber roots notice the disturbance."
      />
      <Prose>
        <p className="drop">
          Direct sowing is the cleaner method. The plants dislike transplanting, and in most zones the soil
          is warm enough soon enough that a head start indoors buys you very little. Sow about an inch deep.
          In heavy soil, slightly shallower is safer than deeper.
        </p>
        <p>
          On a trellis, which is the spacing worth using, set seeds 12 to 15 inches apart. Without a
          trellis, make hills about a foot across and at least six feet apart. Sow six to eight seeds in a
          hill and thin to the strongest three or four. Snip the extras. Pulling them yanks the keeper’s
          roots.
        </p>
      </Prose>
      <Subhead>If you do start them inside</Subhead>
      <Prose>
        <p>
          Four weeks before the last frost, no earlier. One or two seeds in a soil block or a pot that goes
          into the ground intact. Keep them warm, give them light the day they emerge, and harden them off
          for about a week before they go out. Plant in the evening or under cloud, water them in, and do
          not bury the stem the way you would a tomato. The crown wants to stay at the soil line.
        </p>
      </Prose>
      <Note title="Row cover, then bees">
        <p>
          Where cucumber beetles are a yearly event, cover the bed as soon as you sow. The cover comes off
          when female flowers open, unless the variety is parthenocarpic and you intend to keep insects out
          for the whole crop. A covered vine that cannot be pollinated will drop its little fruits.
        </p>
      </Note>
    </Page>
  );
}

export function VinePage() {
  return (
    <Page>
      <Kicker numeral="V" label="The vine" />
      <ChapterTitle>Put the trellis up first</ChapterTitle>
      <Plate
        src="/plates/trellis.jpg"
        alt="An A-frame wooden trellis in a kitchen garden, covered with cucumber vines, yellow flowers, and straw at the base."
        plate="Plate IV"
        caption="Air under the leaves, fruit off the soil, and a harvest you can see. Build it before the vines ask."
      />
      <Prose>
        <p className="drop">
          A trellis is not decoration. It keeps fruit off damp ground, which is how you avoid belly rot. It
          dries the leaves, which slows mildew. It makes the daily hunt for fruit possible, and a cucumber
          you do not find today is a bitter club by the weekend. An A-frame, a cattle panel, or a run of
          stout string all work. Tendrils will grab. You may tuck a leader. Do not yank one that has already
          committed.
        </p>
      </Prose>
      <Subhead>Water like you mean to keep the same plant</Subhead>
      <Prose>
        <p>
          Give a steady supply, on the order of an inch a week and more in heat, at the base, in the
          morning, with the leaves left dry. Uneven moisture is the usual cause of bitter fruit and of
          blossom-end rot, the sunken tip that looks like a calcium shortage. Often the calcium is in the
          soil. The plant simply could not move it because the water came in surges.
        </p>
        <p>
          Mulch after the soil is warm, not before. Straw over a cold bed keeps it cold. Straw over a warm,
          watered bed keeps the moisture even and the fruit cleaner if a cucumber does touch down.
        </p>
        <p>
          Compost at planting is the main feeding. When the vines begin to run, a side-dressing is enough.
          A heavy hand with nitrogen buys leaves and delays flowers. One healthy plant, picked hard, will
          give something like ten to twenty cucumbers in a season.
        </p>
      </Prose>
    </Page>
  );
}

export function FlowerPage() {
  return (
    <Page>
      <Kicker numeral="VI" label="Flowers" />
      <ChapterTitle>Males first, then fruit</ChapterTitle>
      <Plate
        src="/plates/flowers.jpg"
        alt="Two yellow cucumber flowers on a vine. The left flower sits on a thin stem. The right flower has a tiny cucumber behind the petals."
        plate="Plate V"
        caption="Male on a plain stem. Female with a miniature fruit already formed behind the blossom."
      />
      <Prose>
        <p className="drop">
          The first flowers are usually male, and they may hold the vine for a week or two before a female
          appears. A run of yellow blossoms and no fruit is not a failure. Look behind the flower. A female
          carries a tiny cucumber. A male is just a flower on a slender stem.
        </p>
        <p>
          Bees do the ordinary work, in the morning, because the blossom does not last the day. If little
          fruits shrivel just behind the flower, they were not pollinated. You can do it yourself: pick a
          male, take the petals off, and dab the center of a female before noon. That is also the move for
          pure seed, told in full in the seed chapter. Bag the flower if purity matters. For a salad, the
          bees are welcome.
        </p>
      </Prose>
      <Note title="The seedless exception">
        <p>
          Some greenhouse and “burpless” varieties are parthenocarpic. They set fruit without pollen, which
          is why they can crop under a cover or in a tunnel with no bees. Those fruits may hold few seeds
          or none. If a bee does get in, the fruit can turn seedy. For a seed crop, choose a variety that
          expects to be pollinated.
        </p>
      </Note>
    </Page>
  );
}

export function TroublePage() {
  return (
    <Page>
      <Kicker numeral="VII" label="Trouble" />
      <ChapterTitle>What actually takes a vine</ChapterTitle>
      <Prose>
        <p className="drop">
          Most cucumber losses are beetles, wilt that the beetles carry, mildew late in the year, or water
          that came at the wrong pace. The rest of the list is real and less common. Start with the habits
          that prevent the usual ones: a trellis, morning water at the soil, a rotation of about three years
          before cucurbits return to that bed, and a cover early in the season.
        </p>
      </Prose>
      <Subhead>Beetles and the wilt they spread</Subhead>
      <Prose>
        <p>
          Striped and spotted cucumber beetles eat leaves, flowers, and stems. They also carry bacterial
          wilt. A vine that flags in the afternoon and is still collapsed the next morning, with no
          improvement overnight, is often finished. Pull it. It will not recover, and the beetles will move
          the bacteria to the neighbor. Hand-pick beetles into soapy water while the plants are small. Row
          cover is the better tool. Nasturtium and radish, in the companion chapter, are support, not a
          substitute.
        </p>
        <p>
          Slugs take seedlings and any fruit sitting on damp soil. The trellis is the fix. Squash vine
          borer is more a squash pest, but a stem base full of sawdust-like frass is the same insect. The
          year you see it, cover early and move the crop. Deer and raccoons need a fence. Scent remedies are
          a story you tell while they eat.
        </p>
      </Prose>
      <Subhead>Leaves and fruit</Subhead>
      <Prose>
        <p>
          Powdery mildew is the white dust on older leaves, usually late, usually after you have already
          picked plenty. Air and uncrowded plants slow it. Downy mildew is worse: yellow angular patches,
          gray or purple under the leaf, traveling on weather. Trellis, dry foliage, and a resistant
          variety if it visits your region every year. Anthracnose shows as brown spots and comes back from
          debris and wet leaves. Clean up the vines. Do not compost a diseased cucurbit pile onto next
          year’s cucumber bed.
        </p>
        <p>
          Belly rot is a dark sunken patch where the fruit rested on wet ground. Blossom-end rot is the
          sunken blossom tip, almost always from uneven water. Bitter fruit is stress, age, drought, or a
          variety that still makes plenty of cucurbitacin. Taste a slice from the stem end if you are
          unsure. Spit out a sharply bitter one. Do not serve it, and do not save its seed.
        </p>
      </Prose>
    </Page>
  );
}

export function PickingPage() {
  return (
    <Page>
      <Kicker numeral="VIII" label="Picking" />
      <ChapterTitle>Small, often, with a knife</ChapterTitle>
      <Prose>
        <p className="drop">
          Once a vine is fruiting, look every day. A slicer is usually best around six to eight inches. A
          pickler is better at two to four, sooner if you want the tiny ones. A lemon cucumber is ready
          when the skin is pale yellow, not when it has gone deep gold and soft — that is seed ripeness,
          and the flesh will have given up. Long Asian types can go further and stay sweet. Trust the
          variety’s habit, then trust your knife over a ruler.
        </p>
        <p>
          Cut the stem, leaving about an inch on the fruit. Yanking tears the vine, and a torn vine is how
          a good week ends. A fruit left to ripen tells the plant that its work is done. New flowers slow.
          The seed cucumber in the next chapter is the deliberate exception, and you only allow one or two
          of those.
        </p>
      </Prose>
      <Subhead>Keeping them</Subhead>
      <Prose>
        <p>
          Bring them in unwashed. They keep best cool and fairly humid, around 45 to 55°F, for ten days to
          two weeks — a crisper drawer is the household version. A very cold refrigerator pits the skin.
          Do not seal wet fruit in plastic. Use the ugly one first. It will not improve.
        </p>
      </Prose>
      <Pull>Check daily once they start. They do not wait out of politeness.</Pull>
    </Page>
  );
}
