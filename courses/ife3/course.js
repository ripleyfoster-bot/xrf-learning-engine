/* IFE Level 3 Revision: course settings.
   Everything specific to this course lives in this folder. The engine (../../engine/) is shared.
   Uses self, not window, so the offline cache (sw.js) can read it too.
   NEVER change id or module ids once the course is live: saved progress depends on them. */
self.COURSE = {
  id: 'ife3',                   // lowercase letters and digits only, same as the folder name.
                                // Saved progress is kept under 'xrf.ife3.progress.v1' (made from this id).
  version: '0.17.0',            // course version: bump on any change in this folder
  name: 'IFE Level 3 Revision',
  shortName: 'IFE L3',
  tagline: 'A revision companion for the ASFP Level 3 course',
  listed: true,                 // shown on the course list page
  importFrom: ['ife3'],         // also accept save files from the original IFE app (same item ids)

  passMark: 0.85,               // target: score to reach in practice before the real exam (engine 1.7.0)
  examLength: 40,               // module exams: 40 questions (the Day 7 mock is 65, like the real exam)
  realExam: { questions: 65, pass: 45 },   // the real IFE exam: pass mark 45 of 65 (69%), used for every paper (engine 1.8.0)
  ai: { enabled: false, endpoint: '', accessKey: null }, // never put an AI provider key here

  /* Content files in content/, in load order. revision: true loads content/revision.js. */
  modules: ['module1', 'module2', 'module3'],
  revision: true,
  /* Reading notes (engine 1.5.0): one chapter per unit, read from the module screen (Read the unit / Read the module). */
  reader: ['reader1', 'reader2', 'reader3'],
  /* Why reasons (engine 1.6.0): content/why.js, a reason after every checked missing-word and question item. */
  why: true,
  /* International exam tick (engine 1.8.0): content/filter.js lists 33 items on UK and European standard numbers (checked by Ripley). */
  filter: true,

  /* Owner wording. {owner} in a notice becomes a link to owner.url.
     The engine adds its own copyright and "no responsibility" lines. */
  owner: { name: 'ASFP (Association for Specialist Fire Protection)', url: 'https://www.asfp.org.uk', label: 'www.asfp.org.uk' },
  notices: [
    'The course material is owned by the ASFP (Association for Specialist Fire Protection), {owner}.',
    'All content in this app is based on the ASFP Level 3 course workbooks.',
    'It may contain errors or omissions. Always check against the official course material.'
  ],
  agreement: 'I confirm I received the course material directly from the ASFP. I will not use or share this information without the ASFP\'s permission, and I accept the points above.',
  coverNote: 'Course material owned by the ASFP, www.asfp.org.uk. Always check the official course material.',

  /* Wording on screens */
  text: {
    formatsHome: 'the IFE exam formats',          // home screen: "...: every module, in the IFE exam formats"
    formatsRevision: 'the IFE online formats',    // revision screen: "One exam-style paper a day, in the IFE online formats."
    modulesOpen: 'Modules One to Three stay open for practice at any time.',
    // How to use page (engine 1.7.0)
    realExam: 'The IFE Level 3 exam has 65 questions and you need 45 of them (69%) to pass. Each question is worth one mark. In this app, a question with several correct answers only scores if every part is right, so treat the real exam the same way.'
  },
  labels: { intro: 'Intro', unit: 'Unit', moduleTag: 'M' }, // unit chips; "M1" day tags

  /* Look. Keys become CSS variables (--bg, --accent ...). */
  theme: {
    light: { bg: '#f4f1ec', card: '#ffffff', ink: '#1c2430', mute: '#5d6878', line: '#ddd6cb', accent: '#c8451b', 'accent-ink': '#ffffff',
      good: '#1f7a4d', goodbg: '#dff3e7', bad: '#b3261e', badbg: '#fbe3e1', mid: '#8a6100',
      glow: 'rgba(226, 96, 43, .22)', glow2: 'rgba(226, 96, 43, .2)', markshadow: 'rgba(167, 51, 26, .35)' },
    dark: { bg: '#12161c', card: '#1c222b', ink: '#edf0f4', mute: '#9aa5b5', line: '#2e3643', accent: '#ff7a45', 'accent-ink': '#1a0d06',
      good: '#5fd39a', goodbg: '#153526', bad: '#ff8a80', badbg: '#40201d', mid: '#f0c060' },
    themeColor: '#c8451b'       // also set in manifest.webmanifest
  },
  /* Files in brand/. Icon names are fixed: icon-180.png, icon-192.png, icon-512.png. */
  brand: { logo: 'brand/logo.svg', bg: 'brand/bg.svg' }
};
