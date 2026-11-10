> Run with: Opus 5.5 / high
> Machine: mac

# Client questions

## Original Requirement

[NEVER REMOVE]

See the client questions below (context on previous few todo sessions) and answer shortly. 60cm need to elevate was the initial suggestion:

Edastan veelkord mõõdud, et asi ikka kindel oleks, et kui palju ma pean tõstma.

Räästast räästasse 7,5 meetrit.

Räästa kõrgus maast 4,5 meetrit.

Harja kõrgus maast 6,35 meetrit.

Räästa horisontaal joonelt harjani 2,05 meetrit

Paigaldusjuhendi pilti vaadates tundub, et telgi katusekaldenurk on natuke suurem kui minu katusel.

Fermid teevad kasutatavat pinda väiksemaks. Katusel allapoole, seintes sissepoole. Aga kui palju?

_From Kanban card `3cfbcc22-31f0-48d6-b863-22bad841edf1`, moved to the agent list._

_GitHub issue #9 — end the commit subject with `(#9)`._

## Results

**Summary** — Wrote a short Estonian answer to the client (ready to send, plus internal notes). It says 60 cm is not enough and recommends raising the tent **85–90 cm**.
- From drawing 09, the truss is 33 cm deep, which is about 37 cm vertically on the roof. With the tent on the ground, the clear space inside is: ridge about 5.71 m, roof above the house eave (3.75 m from centre) about 3.83 m, width about 8.5 m, floor about 104 m² instead of 111.6 m².
- The house reaches higher than that by about 67 cm at the eave (4.50 m) and about 64 cm at the ridge (6.35 m). Adding 15–20 cm margin for frame deflection, tolerances and pulling the cover over gives 85–90 cm.
- Roof pitch: the tent is about 27° and the house 26–29°, so practically the same. The manual picture looks steeper because of the perspective.
- The client's numbers disagree by 20 cm (6.35 − 4.50 = 1.85, not 2.05). If the ridge is really 6.55 m, the tent needs about 1.0–1.05 m. The answer asks the client to re-measure the highest points (gutter, ridge cap, chimney or antenna), give the house length (the end-wall lintel and centre post mean the house must sit between the end walls), and keep the tent centred within ±10 cm.

**Files changed**
- created `doc/providers/inamiot/9x12m-GSPVC3040203-maja-kohal.md`
- modified `doc/providers/inamiot/9x12m-GSPVC3040203.md` (link under "1. Alusplaadid")
- modified `package.json` (0.1.1 → 0.1.2)

**Verification** — Docs only, so no build or tests. The geometry was cross-checked two ways: worked out from the drawing's dimensions and measured from pixels on drawing 09 (inner ridge about 5.71 m, inner roof at x = 3.75 about 3.82 m). The links were checked by hand. Prettier could not run because `prettier-plugin-svelte` is not installed.

**Deviations** — None. It is still unconfirmed whether the 33 cm is the full truss depth and whether the roof cables or purlins hang below the inner chord. Both are noted as questions for the supplier.
