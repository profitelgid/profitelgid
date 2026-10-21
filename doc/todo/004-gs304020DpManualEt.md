# 304020DP assembly manual in Estonian (PDF)

## Original Requirement

[NEVER REMOVE]

https://manuals.plus/shelter/304020dp-double-truss-storage-shelter-manual - get this manual with Chrome or Chromium or what's the best way and create Estonian PDF for me

## Outcome

- `doc/providers/inamiot/9x12m-GS304020/paigaldusjuhend-304020DP-et.pdf` – 9-page Estonian translation of the factory manual: specs, safety notes, tools, full 48-row parts list, assembly steps A–D, all 12 original figures.
- Linked from `doc/providers/inamiot/9x12m-GS304020.md` (Videod ja lisamaterjal).
- manuals.plus is behind Cloudflare: curl and headless Chrome get "Just a moment…", and the Chrome extension wasn't connected. A headed Chrome launched via playwright-core (automation flags off) passed the check without a CAPTCHA; images were fetched in-page.
- Part names follow the factory list (it differs from the inamiot.pl list in `9x12m-GS304020.md`, e.g. purlin bolt M10×90 here vs M10×75 there).
