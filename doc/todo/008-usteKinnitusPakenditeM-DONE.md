> Run with: Opus 5.5 / high
> Machine: dell

# Uste kinnitus, pakendite mõõdud ja kaal

## Original Requirement

[NEVER REMOVE]

Klient küsis, kuidas ukse külgede PVC kinnitub. Kas kummidega. Ma vaatan pilte ja näen, et mingeid trosse kasutatakse (aga kas katte jaoks?). doc/providers/inamiot/9x12m-GS304020/paigaldus/18-PVC-kinnitus.png ma näen musta sikk-sakk ilmselt nööri? Kuskil on ilmselt ka kummid.

Lisaks uurib klient, et kas iga pakend on vist üksi tõtetav? Mis on suurima paki mõõdud? Kogu infot tahab, mida transpordi firmagi tahaks, et hinda öelda. Klient tahab teada palju selle saatmine Tartust Haapsallu vs kas ta saaks ise kaubikuga järgi tulla.

_From Kanban card `b36b787e-6ce0-4ac5-b12e-bee6bd0c86e4`, moved to the agent list._

_GitHub issue #8 — end the commit subject with `(#8)`._

## Results

**Summary** — Wrote an Estonian answer to the client (ready to send, plus internal notes) for PVC3040203:
- How the door and end-wall PVC attaches: no bungees. The end-wall cover is laced with the kit rope (part 29) through eyelets in a zig-zag around the end arch, the door guide rails, the lintel and the horizontal tubes. That zig-zag is the black line in photo 18. The bottom edge holds a tension tube in a pocket. The roll-up door has tubes in pockets that run in the guide rails and is lifted by two winch cables. The thin diagonal steel cables are frame bracing, not cover fasteners. The roof cover is held by pocket tubes and ratchet straps, and laced at its front and back edges.
- Packing: the supplier ships the whole kit in one steel crate (inamiot.pl/dostawa) and publishes no crate size or weight. Estimate from comparable 30′×40′×20′ dual-truss kits: about 3.1 × 1.1 × 0.9–1.0 m and about 1.4–1.6 t. The rolled roof cover weighs about 200–250 kg. The crate needs a forklift, telehandler or crane truck; it cannot be lifted by hand.
- Tartu → Haapsalu (about 260–290 km): the answer lists what a carrier needs for a quote and recommends a truck with its own crane (HIAB). A standard 3.5 t van is overloaded by the full crate. A van only works if the crate is opened and the parts loaded by hand, in two trips or with a trailer.

**Files changed**
- created `doc/providers/inamiot/9x12m-GSPVC3040203-kinnitus-transport.md`
- modified `doc/providers/inamiot/9x12m-GSPVC3040203.md` (link under "4. Kate")
- modified `package.json` (0.1.0 → 0.1.1)

**Verification** — Docs only, so no build or tests. Checked the links and image path by hand. Attachment details come from the manual drawings 12 and 17, photo 18 and the parts list. Crate size and weight are estimates, cross-checked against the Gold Mountain listing (123×43×36″, 1175–1420 kg).

**Deviations** — There are no supplier crate figures and no transport price. Both are listed as questions for the supplier and a quote to request, rather than invented.
