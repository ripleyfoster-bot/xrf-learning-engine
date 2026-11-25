# XRF Learning Engine

One engine, many courses. Built from the IFE Level 3 Revision app (v0.10.2).
Plain HTML and JavaScript, no build tools. Runs on GitHub Pages.

| Version | Engine 1.6.0 · IFE course 0.14.0 · Demo course 0.2.0 |
| --- | --- |

## Layout

```
index.html            front page: lists the courses in courses.js
courses.js            course ids, in the order shown
engine/               the same for every course: never put course wording here
  app.js              screens, question types, papers, scoring, read-aloud, reader
  styles.css          look (colours are defaults: each course overrides them)
  loader.js           reads course.js, sets name and colours, loads content then app.js
  sw-core.js          offline cache, built from course.js
  version.js          ENGINE_VERSION
courses/<id>/
  index.html  sw.js   identical in every course: copy them unchanged
  course.js           all settings and wording for this course
  manifest.webmanifest  name, short name and theme colour (must match course.js)
  content/            module1.js ... optional revision.js, optional reader chapters (reader1.js ... and pictures in content/reader/)
  brand/              logo.svg, bg.svg (optional), icon-180.png, icon-192.png, icon-512.png
tools/check.html      setup check: tools/check.html?c=<id>
```

Each course has its own address (`.../courses/ife3/`) and installs to the Home Screen as its own app.

## Add a course

1. Copy `courses/demo` to `courses/<new id>` (lowercase letters and digits only).
2. Edit `course.js`: new `id` (same as the folder name), name, wording, colours, `modules` list.
3. Edit `manifest.webmanifest` to match the name, short name and theme colour.
4. Replace the files in `brand/` and `content/`.
5. Add the id to `courses.js`.
6. Open `tools/check.html?c=<id>`: every line should be green.

## Updating

- Change in a course folder: bump `version` in that course's `course.js`.
- Change in `engine/`: bump `ENGINE_VERSION` in `engine/version.js`.
- Either one changes the cache name and the sw.js address (sw.js?v=<course>-<engine>), so phones install the new files and reload once. No file list to edit.
- Engine 1.3.0 fixed updates on iPhone: before it, a phone that had a course never picked up a new version.
- Content: add only at the END of each list. Never change a module `id` or the course `id` once live.

## Saved progress

Progress is kept in the browser under `xrf.<course id>.progress.v1`, made automatically from the course id. Folder names are unique, so keys are too.
All apps on `ripleyfoster-bot.github.io` share one storage area; the `xrf.` prefix keeps engine courses apart from them.
The engine's IFE course does not share storage with the original IFE app (`ife3.progress.v1`). To move across, use Save my progress in the original app and Import a save here (`importFrom` in course.js).

Read the unit (engine 1.5.0): reader chapters that carry `mod` and `unit` are read from the module screen, in a full-width tile under Train me. One unit chosen: Read the unit. All units: Read the module, every unit on one page under a sticky bar, with Listen reading on unit after unit. The reading place is saved per chapter (`reader.pos` in the saved data), from scrolling and listening, and a dialogue offers to resume. It never counts towards mastery or exam scores. The IFE course has 20 chapters of reading notes (`content/reader1.js` to `reader3.js`), ported unchanged from the original IFE app v0.15.2.
Why reasons (engine 1.6.0): set `why: true` in `course.js` and add `content/why.js` (`self.COURSE_WHY`). A reason and its source show after every checked missing-word and question item. The IFE course has 720, ported unchanged from the original IFE app.
Exam soon? (engine 1.6.0): a tick box in About opens every Revision day and the mock at once. Unticking goes back to one day at a time; scores are kept.
Voice (engine 1.5.0): About offers "Device default (British English)", which names no voice and lets the device choose.

Save and import (engine 1.2.0): About screen. The file holds everything in the course's storage (progress, exam history, name, exam date, voice), tagged `xrf.<course id>`. Import replaces this device's data after a confirm.
Offline caches are named `xrf-<id>-v<course>-e<engine>` so they do not clash with other apps on the same address.

A GitHub Pages address is public to anyone who has the link. Do not share it beyond people entitled to the course material until an access gate is in place.

© 2026 Ripley Foster, XRF Systems. All rights reserved.

## Reader (engine 1.1.0)

A course can include its source material as chapters to read on screen or have read aloud.
List the chapter files in `course.js` as `reader: ['reader1']`, put them in `content/`, and pictures in `content/reader/`.
Every picture needs a written description (`desc`): read aloud uses it. Format: Content Pack Spec v0.3, section 6.
The full text is public to anyone with the link: only your own material until the access lock exists.
