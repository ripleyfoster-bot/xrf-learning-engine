/* Demo module: three items only (one card, one missing word, one exam question). Dummy content. */
window.COURSE_MODULES = window.COURSE_MODULES || [];
window.COURSE_MODULES.push({
  id: 'd1',
  title: 'Demo Module',
  subtitle: 'Three test items',
  noIntro: true,
  units: ['Topic 1: Getting started'],
  cards: [
    [0, 'What does this demo course test?', 'That the learning engine can run a second course from its own folder.']
  ],
  fills: [
    [0, 'Each course keeps its settings in a file called ___.', 'course.js', ['app.js', 'styles.css', 'sw.js']]
  ],
  matches: [],
  diagrams: [],
  questions: [
    { u: 0, q: 'Which file must never change its storage key after launch?', o: ['course.js', 'styles.css', 'index.html', 'bg.svg'], a: [0], x: 'The storage key in course.js links learners to their saved progress.' }
  ]
});
