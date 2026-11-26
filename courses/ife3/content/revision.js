/* Revision module: a 7-day exam countdown.
   It does not repeat Modules One to Three. Each day sets a paper in the IFE online exam formats,
   built from the reviewed items already in those modules, plus the new items below.
   Day order follows the course's own revision days (fire science, envelope, ducts and dampers,
   testing, structural frame, fire engineering), extended so every unit of every module is covered.
   The course revision handouts were used for topic and style ideas only; no wording is copied.

   Every new item names the existing item(s) its facts come from in `src`.
   RULE: add new items at the END of each list. Inserting in the middle scrambles saved progress. */
window.COURSE_REVISION = {
  id: 'rv',
  title: 'Revision',
  subtitle: '7-day exam countdown',
  paperLength: 20,
  mockLength: 65,               // like the real IFE exam (65 questions, pass mark 45)

  /* The IFE online exam formats, plus diagrams. Order = order shown in results. */
  formats: [
    ['mc', 'Multiple choice', 'Select the single best answer.'],
    ['mr', 'Multiple response', 'Select all correct answers. There may be more than one.'],
    ['type', 'Fill in the blank', 'Type the answer. Spelling must be accurate.'],
    ['match', 'Matching', 'Match items from two lists.'],
    ['select', 'Select from list', 'Choose the answer from a dropdown list.'],
    ['seq', 'Sequence', 'Arrange the items in order, first at the top.'],
    ['rank', 'Ranking', 'Rank the items by importance, priority or performance.'],
    ['num', 'Numeric', 'Enter a number.'],
    ['diagram', 'Diagram', 'Identify the labelled parts of a diagram.']
  ],
  /* How many of each format on a daily paper (20) and on the Day 7 full mock (40). */
  paperMix: { mc: 3, mr: 3, type: 2, match: 2, select: 2, seq: 2, rank: 2, num: 2, diagram: 2 },
  mockMix: { mc: 11, mr: 11, type: 5, match: 5, select: 5, seq: 7, rank: 10, num: 6, diagram: 5 },   // adds up to 65; was 40 before 0.15.0

  /* units: [module id, unit index] */
  days: [
    { n: 1, title: 'Fire science and people', units: [['m1', 0], ['m1', 1], ['m1', 2]] },
    { n: 2, title: 'Fire protection and strategy', units: [['m1', 3], ['m1', 6], ['m2', 0]] },
    { n: 3, title: 'Compartmentation and the building envelope', units: [['m2', 2], ['m2', 3]] },
    { n: 4, title: 'Ducts, dampers, doors and glazing', units: [['m2', 4], ['m2', 5], ['m2', 6]] },
    { n: 5, title: 'Fire performance, testing and certification', units: [['m1', 4], ['m1', 5]] },
    { n: 6, title: 'The structural frame and coatings', units: [['m2', 1], ['m2', 7]] },
    { n: 7, title: 'Active fire protection and fire engineering', units: [['m3', 0], ['m3', 1], ['m3', 2], ['m3', 3], ['m3', 4]], mock: true }
  ],

  /* Numeric: [day, sentence with ___, answer, src] */
  numeric: [
    [1, 'The Great Fire of London started in the year ___.', 1666, 'm1.c1'],
    [1, 'The Bradford City stadium fire of 1985 caused ___ deaths.', 56, 'm1.c5'],
    [1, 'Fire deaths in England stood at ___ in 1988.', 898, 'm1.c8'],
    [2, 'Passive fire protection controls fire and smoke spread for a prescribed period, generally between thirty minutes and ___ hours.', 4, 'm1.c44'],
    [3, 'Since December 2018, Regulation 7(2) applies to residential buildings more than ___ metres above ground.', 18, 'm2.c72'],
    [3, 'Approved Document B says fire-stopping should be reinforced or supported where the unsupported span is greater than ___ mm.', 100, 'm2.c74'],
    [3, 'Timber typically chars at 0.5 to ___ mm per minute.', 0.8, 'm2.c41'],
    [4, 'The standard thickness of a sixty-minute timber door leaf is ___ mm.', 54, 'm2.c95'],
    [4, 'Fire insulating glazing typically performs for up to ___ minutes.', 120, 'm2.c111'],
    [5, 'Tunnel fire test curves reach furnace temperatures as high as ___ °C.', 1350, 'm1.c72'],
    [6, 'A thin film intumescent coating starts to react at around ___ °C.', 200, 'm2.c27'],
    [6, 'The char from a thin film intumescent coating can be up to ___ times its original thickness.', 50, 'm2.c27'],
    [6, 'For a fully loaded non-composite beam carrying a concrete slab, the limiting temperature on the lower flange is about ___ °C.', 620, 'm2.c20'],
    [7, 'Wet risers are installed in new buildings above ___ metres.', 50, 'm3.c37'],
    [7, 'The application of fire safety engineering principles to building design is covered by BS ___.', 7974, 'm3.c85']
  ],

  /* Sequence (s) or ranking (r): { d, f, q, order (correct, first at top), src } */
  orders: [
    { d: 4, f: 'r', q: 'Rank these fire resistant glazing classifications by the protection they give the non-fire side, most protection first.', order: ['EI: integrity and insulation', 'EW: integrity with limited heat radiation', 'E: integrity only'], src: 'm2.c109' },
    { d: 6, f: 'r', q: 'Rank these European reaction to fire classes by performance, best first.', order: ['A1', 'A2', 'B', 'D', 'F'], src: 'm2.c127' },
    { d: 6, f: 's', q: 'Place these steel and coating temperatures in order, lowest first.', order: ['A thin film intumescent coating starts to react', 'Structural steel has lost about half its strength', 'Heavily loaded steel loses its design margin of safety', 'Limiting temperature on the lower flange of a beam under a concrete slab'], src: 'm2.c27, m1.c56, m2.f7, m2.c20' }
  ],

  /* Sorting into categories, set as matching questions: { d, q, cats, rows: [statement, category index], src } */
  sorts: [
    { d: 2, q: 'Match each measure to its type of fire protection.', cats: ['Active', 'Passive'],
      rows: [['Sprinkler or water mist system', 0], ['Fire detection and alarm system', 0], ['Gaseous suppression system', 0], ['Smoke control system', 0],
        ['Fire protection to the structural frame', 1], ['Compartmentation and fire-resisting construction', 1], ['Paints and varnishes that improve reaction to fire', 1]],
      src: 'm1.c45, m1.c46, m1.c48' },
    { d: 2, q: 'Match each statement to the design approach it describes.', cats: ['Prescriptive design', 'Fire safety engineering'],
      rows: [['Based on the occupancy classification and the code for that building type', 0], ['Enforcement is simpler because buildings in one occupancy class meet the same parameters', 0],
        ['Uses computer modelling, calculations and expert judgement', 1], ['May be the only practical route for an airport terminal', 1], ['May lead to a reduction in passive and/or active measures', 1]],
      src: 'm1.c49, m1.q38, m1.q122, m1.c50, m1.c51, m1.q121' },
    { d: 4, q: 'Match each statement to the fire resisting ductwork criterion it describes.', cats: ['Stability', 'Integrity', 'Insulation'],
      rows: [['The duct and its supports remain intact and functioning', 0], ['No cracks, holes or openings outside the fire compartment', 1], ['The outside surface stays below 140°C average and 180°C maximum rise', 2]],
      src: 'm2.c77' },
    { d: 4, q: 'Match each description to the way a damper closes.', cats: ['Fusible link', 'Motorised control system', 'Intumescent material'],
      rows: [['A link melts and releases a spring-activated mechanism', 0], ['Closed as part of a fire and smoke control system', 1], ['Has no thermal release mechanism and relies on a powered control system (smoke control damper)', 1], ['Swells in heat to close the opening', 2]],
      src: 'm2.c80, m2.c89' },
    { d: 5, q: 'Match each statement to the tier of evidence it describes.', cats: ['Third-party certification', 'Assessment', 'Fire test report'],
      rows: [['Audits factory production control and requires labelling for traceability', 0], ['Covers configurations it is not practical to test', 1], ['The next best thing to certification, but without the quality control', 1], ['Applies only to the product or construction as tested', 2]],
      src: 'm1.c74, m1.c77, m1.c78, m1.c79' },
    { d: 5, q: 'Match each description to the type of certification.', cats: ['First-party', 'Second-party', 'Third-party'],
      rows: [['The supplier\'s own assurance', 0], ['Assurance through membership of an association', 1], ['Independent assessment by a UKAS-accredited certification body', 2]],
      src: 'm1.c76' },
    { d: 7, q: 'Match each item to the part of fire engineering it belongs to.', cats: ['Tools', 'Inputs', 'Framework'],
      rows: [['Calculation methods (models)', 0], ['Physical data from tests and measurement', 1], ['Knowledge, education and professional recognition', 2]],
      src: 'm3.c77' },
    { d: 7, q: 'Match each design consideration to the fire engineering objective it serves.', cats: ['Life safety', 'Loss control', 'Environment'],
      rows: [['All occupants can leave in reasonable safety', 0], ['Firefighters can operate in reasonable safety', 0], ['The structure, fabric and contents', 1], ['Ongoing business viability', 1], ['The effect on adjacent buildings', 2], ['Release of hazardous materials', 2]],
      src: 'm3.c80, m3.c81' }
  ]
};
