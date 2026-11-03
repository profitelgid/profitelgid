> Run with: Opus 5.5 / high
> Machine: karel

# Assembling

## Original Requirement

[NEVER REMOVE]

See 003 todo task what PVC warehouse we are talking about at write about estonian how to assemble. Client:

Ma tahan seda telki panna \~60cm maapinnast kõrgemale sest ta tuleb olemasoleva hoone ümber ja muidu tuleks kõrgusest puudu. Tahaks panna plokid maha ja prussid peale, et kui lai see tald tal on? Et kui laiad prussid ja kuidas see aluspind plokkidest ehitada?

Samuti õpetustes on, et kõigepealt mõõta ristkülikukujuline pind, kuhi see panna ning tõmmata lindid, et aga nemad õpetuses tõmbavad diagonaalid ka aga ma ei saa diagonaale tõmmata, kuna maja ümber tuleb see. Kas ma saan üldse maja ümber teda paigaldada?

Sooviks ka näha milline telgi torud/PVC välja näevad, et kas kuskil Eestis saan näha sellist PVC materjali või sellise paksusega galvaniseeritud torusid kuna teie tellite poolast ja sinna ma vaatama ei lähe.

Me: maybe ask for a picture and measurments of the house as he will need to use the house to climb to it's roof probably for assembly?

_From Kanban card `b2ad174d-1120-4768-aed6-952052b0f59e`, moved to the agent list._

_GitHub issue #7 — end the commit subject with `(#7)`._

## Results

**Summary** — Wrote an Estonian answer to the client for PVC3040203 (9,15 × 12,2 m): a ready-to-send reply plus internal notes.
- Base: the tent stands on 10 frame plates and 4 door plates, not on its whole edge. Plate size is about 20–25 × ~40 cm, estimated from photos 06/08 because the factory gives no drawing. The reply recommends a concrete or filled formwork-block pier under each plate, with the plate anchored straight into concrete. If timber is used, it must be at least as wide as the plate, anchored to each pier with threaded rods and through-bolted. It warns about wind uplift: loose blocks are not acceptable, and the base must be level to ±1 cm.
- Squaring without diagonals: the 3-4-5 (6-8-10) rule at every corner, equal opposite sides, string lines outside the house, or a laser meter or surveyor.
- Around the house: it can be done if the house fits inside the arch profile. The reply asks the client for photos and measurements of the house (the "Me:" note in the request). It covers arches assembled beside the house and lifted over it by crane, working at height (a basket lift is safer than the house roof), the door sill ending up 60 cm high, keeping heat sources 2 m from the cover, the low snow load (0.28 kPa), and checking with the municipality about a building notice or permit for over 60 m².
- Where to see materials in Estonia: Ø48 is the scaffolding tube diameter (Ramirent and Cramo; thicker wall there), and 900 g/m² PVC is truck-tarpaulin material. It offers a fabric sample and close-up photos or video from the factory.
- Supplier questions: base-plate drawing, inner clearance profile, fabric sample, and warranty with the raised base.

**Files changed**
- created `doc/providers/inamiot/9x12m-GSPVC3040203-tostetud-alus.md`
- modified `doc/providers/inamiot/9x12m-GSPVC3040203.md` (link under "1. Alusplaadid")

**Verification** — Docs only, so no build or tests. Checked the links and paths by hand. Plate size and truss depth (~30 cm) are estimates from photos and are marked as such.

**Deviations** — None. The exact base-plate dimensions are not in any manual or public page; added to the questions for the supplier.
