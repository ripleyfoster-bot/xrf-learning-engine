/* Demo reader: two short chapters written for this test course (XRF Systems' own wording).
   Shows every reader block type: heading, paragraph, lists, note, picture file, drawn diagram, chart and table.
   Not training material. */
self.COURSE_READER = self.COURSE_READER || { title: 'Course material', subtitle: 'Read the source, or have it read to you', chapters: [] };
self.COURSE_READER.chapters.push({
  id: 'r1',
  title: 'How the learning engine is built',
  source: 'XRF Systems, demo notes, November 2026',
  blocks: [
    ['p', 'The learning engine is one set of files that runs many courses. Each course lives in its own folder and brings its own wording, colours and content.'],
    ['h', 'The two parts'],
    ['p', 'The picture below shows how the parts fit together. Tap the picture to see it full screen.'],
    { fig: 'img', src: 'content/reader/parts.svg', alt: 'Diagram of the engine folder above two course folders',
      cap: 'Figure 1: the engine and two courses',
      desc: 'A dark green box at the top is labelled "engine", shared by every course. Two lines run down from it to two light green boxes side by side. The left box is the IFE course folder and the right box is the Demo course folder. The text between them says each course uses the same engine.' },
    ['ul', ['engine: screens, question types, scoring and read-aloud', 'course folder: settings, wording, colours and content', 'courses.js: the list shown on the front page']],
    ['note', 'A change in the engine reaches every course at once, so every course is tested before an engine change goes live.'],
    ['h', 'Where the time goes'],
    ['p', 'The chart shows a made-up split of the work in building a course. It is here to test how charts are shown and described.'],
    { fig: 'chart', alt: 'Bar chart of four stages of building a course',
      cap: 'Figure 2: share of the work in building a course (made-up figures)',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 190" font-family="Helvetica, Arial, sans-serif" font-size="11">' +
        '<rect width="340" height="190" fill="#ffffff"/>' +
        '<line x1="40" y1="160" x2="330" y2="160" stroke="#16242a"/><line x1="40" y1="20" x2="40" y2="160" stroke="#16242a"/>' +
        '<text x="34" y="164" text-anchor="end" fill="#566a70">0%</text><text x="34" y="94" text-anchor="end" fill="#566a70">25%</text><text x="34" y="24" text-anchor="end" fill="#566a70">50%</text>' +
        '<rect x="55" y="48" width="50" height="112" fill="#11706b"/><text x="80" y="42" text-anchor="middle" fill="#16242a">40%</text><text x="80" y="176" text-anchor="middle" fill="#16242a">Writing</text>' +
        '<rect x="125" y="76" width="50" height="84" fill="#11706b"/><text x="150" y="70" text-anchor="middle" fill="#16242a">30%</text><text x="150" y="176" text-anchor="middle" fill="#16242a">Review</text>' +
        '<rect x="195" y="104" width="50" height="56" fill="#11706b"/><text x="220" y="98" text-anchor="middle" fill="#16242a">20%</text><text x="220" y="176" text-anchor="middle" fill="#16242a">Design</text>' +
        '<rect x="265" y="132" width="50" height="28" fill="#11706b"/><text x="290" y="126" text-anchor="middle" fill="#16242a">10%</text><text x="290" y="176" text-anchor="middle" fill="#16242a">Testing</text>' +
        '</svg>',
      desc: 'A bar chart with four bars, tallest on the left. Writing takes 40 percent of the work, review 30 percent, design 20 percent and testing 10 percent. Writing and review together are 70 percent.' },
    { fig: 'table', cap: 'Table 1: the files in a course folder',
      head: ['File', 'What it holds'],
      rows: [['course.js', 'Settings and wording'], ['content/', 'Modules, revision and reader chapters'], ['brand/', 'Logo and Home Screen icons']] },
    ['p', 'That is the end of the first demo chapter.']
  ]
});
self.COURSE_READER.chapters.push({
  id: 'r2',
  title: 'Reading on your phone',
  source: 'XRF Systems, demo notes, November 2026',
  blocks: [
    ['p', 'Use A minus and A plus to change the text size. The app remembers your size and your place in each chapter.'],
    ['ol', ['Scroll to where you want to start.', 'Tap Read aloud.', 'Tap Stop at any time. Tap Read aloud again to carry on.']],
    ['p', 'The speed button changes how fast the voice reads. At a picture, the voice reads its written description.']
  ]
});
