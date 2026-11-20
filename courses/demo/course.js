/* Demo course: a tiny dummy course that proves the engine runs a second course.
   1 module, 3 items, no revision countdown. Not real training content. */
self.COURSE = {
  id: 'demo',                   // progress kept under 'xrf.demo.progress.v1'
  version: '0.1.0',
  name: 'Engine Demo Course',
  shortName: 'Demo',
  tagline: 'A dummy course for testing the learning engine',
  listed: true,

  passMark: 0.7,
  examLength: 5,
  ai: { enabled: false, endpoint: '', accessKey: null },

  modules: ['module1'],
  revision: false,

  owner: { name: 'XRF Systems', url: 'https://example.com', label: 'example.com' },
  notices: [
    'This is dummy content for testing only, owned by {owner}.',
    'It is not training material.'
  ],
  agreement: 'I understand this is a test course.',
  coverNote: 'Dummy content for testing the engine.',

  text: { formatsHome: 'the demo formats', formatsRevision: 'the demo formats', modulesOpen: 'The module stays open for practice at any time.' },
  labels: { intro: 'Start', unit: 'Topic', moduleTag: 'D' },

  theme: {
    light: { bg: '#eef4f3', card: '#ffffff', ink: '#16242a', mute: '#566a70', line: '#cfdcda', accent: '#11706b', 'accent-ink': '#ffffff',
      good: '#1f7a4d', goodbg: '#dff3e7', bad: '#b3261e', badbg: '#fbe3e1', mid: '#8a6100',
      glow: 'rgba(17, 112, 107, .18)', glow2: 'rgba(17, 112, 107, .15)', markshadow: 'rgba(17, 80, 78, .35)' },
    dark: { bg: '#0f1718', card: '#182224', ink: '#e8f0ef', mute: '#93a8a6', line: '#2a3a3c', accent: '#4fd1c5', 'accent-ink': '#062120',
      good: '#5fd39a', goodbg: '#153526', bad: '#ff8a80', badbg: '#40201d', mid: '#f0c060' },
    themeColor: '#11706b'
  },
  brand: { logo: 'brand/logo.svg', bg: null }
};
