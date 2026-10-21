# GS304020 images: Polish text → Estonian

## Original Requirement

[NEVER REMOVE]

Translate on all images where appears Polish into Estonian

## Outcome

Checked all 12 photos and 17 assembly figures in `doc/providers/inamiot/9x12m-GS304020/`. Polish text was in 7; replaced in place (same size, layout, fonts matched as closely as possible):

- `09-joonis-eestvaade.jpg` – "Widok z przodu" → "Eestvaade", "HALA NAMIOTOWA" → "TELKHALL".
- `10-joonis-perspektiiv-mootmed.jpg` – table header: MUDEL, mõõdud (m), tuulekoormus, lumekoormus.
- `11-pvc-kate-roheline.jpg`, `12-pvc-kate-valge.jpg` – "PLANDEKA PVC" → "PVC KATE"; feature labels (Veekindlus 100%, Paksem kui konkurentidel / Paks kangas, Tulekindlus klass B1, Eluiga 15 aastat). Photo background rebuilt under the old text.
- `paigaldus/01-osade-nimekiri.png` – full parts table (Kood / Kirjeldus / Kogus, all 47 descriptions, "zestawy" → "kompl."), terms aligned with the parts table in `9x12m-GS304020.md`.
- `paigaldus/16-katuse-pingutamine.png` – three callouts and steps A–D.
- `paigaldus/17-uste-paigaldus.png` – "Seo terastrossid", "Seo terastross alumise toru külge".

The other figures are English-only labels/part numbers or contain no text; left as is. Done with a Pillow script (Liberation Serif, Noto Sans, Anton, Poppins Light); originals remain in git history.

_GitHub issue #5 — end the commit subject with `(#5)`._
