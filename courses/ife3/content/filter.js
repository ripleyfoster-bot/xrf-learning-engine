/* International exam tick (engine 1.8.0, IFE course 0.16.0).
   Items that ask for UK and European standard numbers and what each covers (BS, EN, BS EN codes), plus a few
   EN ISO tests and one UK industry document. The IFE exam is taken internationally, so these are not expected
   to come up, but they matter for work in the UK. Classes such as Class 0, Euroclasses and E/EW/EI still count. While the tick is on they are still practised, but do not count
   towards mastery, progress bars or exam results. List checked and changed by Ripley, 27 Nov 2026 (33 items).
   Ids: m1.c3 card, m1.f3 missing word, m1.q3 question, m1.p3.2 match pair (m1.p3 = whole set), rv.n3 / rv.o3 / rv.s3 revision items. */
self.COURSE_FILTER = {
  label: 'International exam: leave out UK and European standards',
  short: 'UK and European standards',
  note: 'The IFE exam is taken internationally, so questions on UK and European standard numbers and what each covers (such as the parts of EN 1366, or BS 5839 for fire alarms) are not expected to come up. With this ticked you still practise them, but they do not count towards mastery, progress or exam results. Classes such as Class 0, Euroclasses and E, EW and EI still count.',
  items: [
    'm2.c33', 'm2.c50', 'm2.q44', 'm2.q117', 'm2.p9.0', 'm2.p9.1', 'm2.p9.2', 'm2.p9.3', 'm2.p9.4', 'm2.p9.5', 'm2.p12.5', 'm2.p15.0', 'm2.p15.1', 'm2.p15.2', 'm2.p15.3', 'm2.p15.4', 'm2.p15.5', 'm2.q231', 'm2.q234', 'm2.p12.0', 'm2.p12.1', 'm2.p12.3', 'm2.q136',
    'm3.c19', 'm3.c57', 'm3.c85', 'm3.q35', 'm3.q77', 'm3.q105', 'm3.q106', 'm3.q138', 'm3.q166', 'm3.p7.4'
  ]
};
