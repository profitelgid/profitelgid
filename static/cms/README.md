# CMS images (formerly Directus)

Images the site used to load from `https://cms.admin.servicehost.io/assets/…`.
Pages reference them as `/cms/<filename_disk>` (filenames come from `src/lib/data/categories/*.json`).

The Directus server is gone (its host now shows a CapRover "nothing here" page) and it used
`local` storage, so the originals could not be downloaded. `MISSING-FILES.json` lists every
file that is still missing. Recover each one from the old server's Directus `uploads` volume
or a backup, then drop it in this folder under its `filename_disk` name and remove its entry.
