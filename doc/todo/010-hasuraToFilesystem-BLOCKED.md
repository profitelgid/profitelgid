> Run with: Opus 5.5 / medium
> Machine: mac

# Hasura to filesystem

## Original Requirement

[NEVER REMOVE]

All text content from hasura to filesystem eg. JSON and all the images from Directus to src/lib/assets or wherever makes sense most so the whole website works same well. Then tell me what tables can be deleted from hasura

_From Kanban card `ed51e6ee-41b5-45eb-8d77-a4e636799d19`, moved to the agent list._

_GitHub issue #10 — end the commit subject with `(#10)`._

## Results

**Summary** — All Hasura text content now lives in the repo and the site no longer calls Hasura or Directus at all.
- Every one of the 16 page loaders that POSTed to `apps.admin.servicehost.io/v1/graphql` now imports a static JSON snapshot `src/lib/data/categories/<id>.json`. These are the exact query results, in the same order, so the pages render the same as before.
- Every `https://cms.admin.servicehost.io/assets/…` image URL (dynamic and hard-coded) now points to `/cms/<filename_disk>` in `static/cms/`.
- **Images: blocked on a human.** The Directus server is gone: its host serves a CapRover "nothing here" page, and every `/assets/<id>` returns 404. Directus used `local` storage and the Wayback Machine has no copies, so the binaries could not be downloaded. The live site pvcfactory.ee already shows these images as broken today. 16 of 108 were recovered from files already in `static/` (old Magento copies, largest version taken). The other **92 files (~35 MB) are listed in `static/cms/MISSING-FILES.json`**, with their original names and titles.
- Full backup of the product tables (all publicly exposed columns) is in `doc/hasura-export/`: `products` 826 rows, `products_categories` 24, `products_categories_files` 73.

**Which Hasura tables can be deleted**
- `products_categories`, `products_categories_files`, `products`: the site no longer reads them. Safe to drop **after** a full admin `pg_dump`, because the public role hides some columns (for example supplier_price, supplier_link, user fields), so `doc/hasura-export/` doesn't contain them. Note that `static/api/documentation.md` still advertises this GraphQL API to resellers; dropping the tables ends that API.
- `cms_pages_cms_page_contents`: never used by the site.
- `directus_files` (and the other `directus_*` system tables): **do not drop yet.** They hold 4011 files, including other clients' photos, so the Directus database is shared. They are also the only map from file id to original filename until the 92 images are recovered. Once the images are back, the rows this site needs are already captured in `MISSING-FILES.json`.

**What a human must do**: recover the 92 files in `static/cms/MISSING-FILES.json` from the old CapRover server's Directus `uploads` volume or a backup. Save each one into `static/cms/` under its `filename_disk` name, then delete its entry. No code change is needed.

**Files changed**
- created: `src/lib/data/categories/{2,3,7,8,10,12,13,15,16,17,18,20,21,24,25,26}.json`, `static/cms/` (16 images, `README.md`, `MISSING-FILES.json`), `doc/hasura-export/*.json`
- modified: 16 `+page.ts` loaders, 20 `+page.svelte` / `SubCategories.svelte` image URLs, 7 pages changed from `data.item.data.products_categories_by_pk` to `data.item`, `priva/+page.svelte` (its broken `assets/1` now points to the existing `/images/pvc-laohallide-kontakt.png`), `README.md`, `package.json` 0.1.2 → 0.2.0

**Verification**
- `npm run build`: passes.
- `npm run preview` smoke test: umartelgid, pop-up, lauajalgpall, soodne-laotelk and priva all return 200 with content and `/cms/` images, and `/cms/*.jpg` is served as image/jpeg.
- `npm run check`: 6 errors, all in files this change didn't touch (the baseline at HEAD had 27).
- `grep servicehost src`: no matches.
- Playwright: skipped. The only test is the stock SvelteKit template one ("Welcome to SvelteKit"), which can't pass on this site.

**Deviations**
- Images went to `static/cms/` instead of `src/lib/assets`. The filenames come from the JSON data, and Vite can only bundle imports with static paths.
- 92 images couldn't be migrated because the source server is dead (see above).
