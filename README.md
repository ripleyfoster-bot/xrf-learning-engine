# XRF Learning Engine

One engine, many courses. Built from the IFE Level 3 Revision app (v0.10.2).
Plain HTML and JavaScript, no build tools. Runs on GitHub Pages.

| Version | Engine 1.0.0 · IFE course 0.11.0 · Demo course 0.1.0 |
| --- | --- |

## Layout

```
index.html            front page: lists the courses in courses.js
courses.js            course ids, in the order shown
engine/               the same for every course: never put course wording here
  app.js              screens, question types, papers, scoring, read-aloud
  styles.css          look (colours are defaults: each course overrides them)
  loader.js           reads course.js, sets name and colours, loads content then app.js
  sw-core.js          offline cache, built from course.js
  version.js          ENGINE_VERSION
courses/<id>/
  index.html  sw.js   identical in every course: copy them unchanged
  course.js           all settings and wording for this course
  manifest.webmanifest  name, short name and theme colour (must match course.js)
  content/            module1.js ... and optional revision.js
  brand/              logo.svg, bg.svg (optional), icon-180.png, icon-192.png, icon-512.png
tools/check.html      setup check: tools/check.html?c=<id>
```

Each course has its own address (`.../courses/ife3/`) and installs to the Home Screen as its own app.

## Add a course

1. Copy `courses/demo` to `courses/<new id>` (lowercase letters and digits only).
2. Edit `course.js`: new `id`, `storageKey` (e.g. `'<id>.progress.v1'`), name, wording, colours, `modules` list.
3. Edit `manifest.webmanifest` to match the name, short name and theme colour.
4. Replace the files in `brand/` and `content/`.
5. Add the id to `courses.js`.
6. Open `tools/check.html?c=<id>`: every line should be green.

## Updating

- Change in a course folder: bump `version` in that course's `course.js`.
- Change in `engine/`: bump `ENGINE_VERSION` in `engine/version.js`.
- Either one changes the cache name, so phones fetch the new files. No file list to edit.
- Content: add only at the END of each list. Never change a module `id`, course `id` or `storageKey` once live.

## Saved progress

Progress is kept in the browser under the course's `storageKey`. The IFE course keeps `ife3.progress.v1`, the same key as the original app.
All apps on `ripleyfoster-bot.github.io` share one storage area, so every course needs its own key.
Offline caches are named `xrf-<id>-v<course>-e<engine>` so they do not clash with other apps on the same address.

A GitHub Pages address is public to anyone who has the link. Do not share it beyond people entitled to the course material until an access gate is in place.

© 2026 Ripley Foster, XRF Systems. All rights reserved.
