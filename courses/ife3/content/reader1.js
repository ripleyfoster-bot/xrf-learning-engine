/* IFE reading notes: Module One (engine 1.5.0 reader chapters, IFE course 0.13.0).
   Ported from the original IFE app (content/reader-m1.js, v0.15.2), wording unchanged.
   Written in plain words from the Attendees Resource Pack, Module One, Revision 3 2023.
   These are revision notes, not the pack itself: always check the official course material.
   One chapter per unit, linked to the module and unit with mod and unit, so the module screen
   offers "Read the unit" / "Read the module". Reading never counts towards mastery or exam scores.
   Chapter ids never change. Add new chapters at the END. */
self.COURSE_READER = self.COURSE_READER || { title: 'Reading notes', subtitle: 'Read each unit, or have it read to you',
  note: 'Revision notes in plain words, written from the ASFP course pack. Always check the official course material.', chapters: [] };

/* Introduction: a brief history */
self.COURSE_READER.chapters.push({ id: 'm1u0', mod: 'm1', unit: 0, title: 'Introduction: a brief history',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Fire has always been essential to human progress. Controlling it made the Bronze Age, the Iron Age and the Industrial Revolution possible. Out of control, it becomes one of our greatest enemies: wildfires can burn for months, and fire can move quickly through a building, threatening lives and causing huge damage.'],
    ['h', 'Early fire control'],
    ['p', 'In the eleventh century William the Conqueror, worried by how many buildings were catching fire, ordered that all fires be put out at night. A metal cover was placed over the fire to keep the air out. In French this was a "couvert feu", meaning covered fire, and the word has become our "curfew". Firefighting itself is much older: the ancient Egyptians are thought to have used hand-worked wooden pumps.'],
    ['h', 'Major fires'],
    ['ul', [
      'Great Fire of Southwark, 1212: an earlier and less well known London fire. There are no reliable figures, but some accounts put the deaths in the thousands.',
      'Great Fire of London, 1666: started in the early hours of 2 September after a long, dry summer and burned for four days, destroying five-sixths of the city. Only 6 deaths were recorded, but it destroyed 3,200 houses, 87 churches, six chapels, the Royal Exchange, the Custom House, Newgate jail, 3 city gates, the Guild Hall and 4 bridges. Aviva estimates it would cost £34 billion today.',
      'San Francisco, 1906: an earthquake set off fires that burned for several days, causing some 3,000 deaths and destroying 80% of the city.'
    ]],
    ['h', 'Fire legislation is often disaster driven'],
    ['p', 'Within a year of the Great Fire of London, the 1667 London Building Act set out to give buildings some fire resistance. Two more recent UK disasters brought a fast legislative response:'],
    ['ul', [
      'Bradford City Football Stadium, 1985: 56 died and many were seriously injured. This led directly to the Fire Safety of Places of Sport Act 1987.',
      'King\'s Cross Underground Station, 1987: 31 died and many more were scarred for life. This led to the Fire Precautions (Sub-Surface Railway Stations) Regulations 1989.'
    ]],
    ['h', 'Fire deaths and the cost of fire'],
    ['p', 'Since then, fire deaths have fallen sharply. In England they dropped from 898 in 1988 to 261 by the end of 2018. The main reasons given are the take-up of smoke detectors, fewer people smoking, and the upholstered furniture regulations of 1988/89.'],
    ['p', 'The Grenfell Tower fire in West London in June 2017 killed 72 people: 71 at the time and one more who later died from injuries. It has led to a thorough review of the Building Regulations in England and of how building designs are approved. This matters because the way we build has changed a great deal in the last ten years, and regulation and guidance have struggled to keep up.'],
    ['p', 'While deaths have fallen, the cost of fire has kept rising. In 2008 the UK Government put the cost of fire in England at around £8.3 billion a year. More recent figures suggest £12 billion in 2020, and it is thought to have risen every year since.'],
    ['h', 'Why this course matters'],
    ['p', 'Anyone responsible for other people\'s safety needs to understand fire: its properties, how it reacts to its surroundings, how people react to it, and where and how fire protection is used and performs in a real fire. The course gives the underpinning knowledge: the science of fire, the passive and active fire protection disciplines, and the regulations, standards and best practice for how these systems are specified, installed and inspected.']
  ]
});

/* Unit 1: The fire process */
self.COURSE_READER.chapters.push({ id: 'm1u1', mod: 'm1', unit: 1, title: 'Unit 1: The fire process',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['h', 'What fire protection means'],
    ['p', 'Fire protection is generally defined as the study and practice of reducing the unwanted effects of potentially destructive fires. Wider definitions include the study of fire behaviour, compartmentation, suppression and fire investigation, plus the research, development, production, testing and use of the systems that reduce fire\'s effects, in buildings on land, offshore and on ships. Owners and operators must maintain their buildings to a design basis rooted in law, including the local building and fire codes, enforced by the authority having jurisdiction.'],
    ['p', 'Most definitions leave out smoke, even though smoke comes with every fire and is the most likely cause of death in one.'],
    ['h', 'What fire is'],
    ['p', 'Fire is the rapid oxidation of a material in a chemical reaction that gives out heat (an exothermic reaction), releasing heat, light and other reaction products. Oxygen atoms combine with hydrogen and carbon to form water and carbon dioxide. Rusting iron is the same chemical process, but it is so slow that very little heat is released. With paper or wood, oxidation can be very fast, and when heat is produced faster than it can escape, combustion occurs.'],
    ['p', 'A fire also has flames or smouldering, and exhaust gases. A very clean burn gives invisible exhaust gases. When some fuel particles do not burn completely, you see smoke, made of evaporated water, carbon dioxide and unburnt fuel particles. Bonfire smoke and vehicle exhaust are partly burnt products of the fuel.'],
    ['p', 'As a chemical equation, burning natural gas is: methane plus oxygen gives carbon dioxide plus water, written CH4 + 2O2 → CO2 + 2H2O.'],
    ['p', 'A fire in its most common form can become a conflagration, an extensive fire, with the potential to cause physical damage by burning.'],
    ['h', 'How fires start in buildings'],
    ['ul', [
      'Smoking materials: for example smoking in bed, or children playing with matches or lighters.',
      'Electrical: faulty wiring or equipment, or incorrect use.',
      'Cooking equipment: careless use, such as leaving chip pans or fryers unattended.',
      'Heaters: drying fabric near gas or electric fires, portable heaters placed close to furniture and curtains, poorly serviced gas heaters.',
      'Hot work: not following hot-work procedures during construction or maintenance.',
      'Arson: estimated at over £5.7 billion in 2022.',
      'Miscellaneous: poor detailing such as flues through combustible walls, lightning, self-heating materials, mechanical sparks, and sunlight focused through glass or bottles.'
    ]],
    ['h', 'The fire triangle and the fire tetrahedron'],
    ['p', 'Once lit, a fire keeps itself going by a chain reaction: combustion releases more heat, which drives more combustion, and the fire may spread as long as fuel and oxygen keep coming. Both must be present in the right proportions. A flammable liquid, for example, only burns when the fuel and oxygen mix is right.'],
    ['p', 'The fire triangle shows the three things a fire needs: heat, fuel and oxygen. Take any one away and the fire is prevented or put out. A fire blanket over a burning deep fat fryer starves the fire of oxygen, so it goes out.'],
    ['p', 'The fire tetrahedron adds a fourth element: the chemical chain reaction. The exothermic chain reaction keeps the fire going until at least one element is blocked or removed. Water can cool the fuel below its ignition point or remove and disperse the fuel. Foam denies the fire oxygen. Certain gases form an inert barrier that attacks the chemical reaction directly.'],
    ['h', 'How a fire develops'],
    ['p', 'Fire is a useful tool when controlled: a gas hob, a barbecue, central heating, a log fire, a garden bonfire. The problem comes when it becomes uncontrolled, and that matters across the whole built environment: offices, factories, schools, hospitals, care homes, hotels, petrochemical plants and prisons, and also vehicles, ships and planes.'],
    ['p', 'A fire starts when something very hot (the ignition source) meets something readily combustible. A combustible material does not always light easily, but a sustained heat source, such as a burning waste paper bin, may eventually ignite it. Each burning item makes more heat, so more items catch, and a room or compartment speeds this up by holding the heat in.'],
    ['p', 'How the fire then develops depends on how much combustible material there is and how densely it is packed, and on the wall and ceiling linings. As it grows, the air supply matters more. In a small closed room the fire may use up the air and smoulder or go out. In a larger room, or with doors or windows open or broken by the fire, it grows faster.'],
    ['p', 'Eventually the fire is so hot that it gives off flammable volatiles (substances that easily turn from solid or liquid to vapour) faster than air can reach them. These can escape through openings and burn outside the room of origin. At this point the fire is very dangerous, because it can spread quickly into the next compartment.'],
    ['p', 'Some fires start as smouldering hot spots. They grow slowly and give little heat, but can produce very toxic smoke, and they can suddenly burst into flame and grow fast. They are especially dangerous where people may be asleep, such as a hotel.'],
    ['p', 'People who know a building find the exits more easily than newcomers. Sleeping people react more slowly than those awake, and people who are confused or affected by drink or drugs are at greater risk. People in a partly occupied building are at risk if fire breaks out in the empty part.'],
    ['h', 'The stages of fire development'],
    ['p', 'In a contained space, such as a school classroom, fire development has at least four distinct stages: ignition (sometimes called incipient), growth, fully developed and decay, with flashover between growth and full development, counted either as a stage or as an event.'],
    ['ul', [
      'Ignition: heat, oxygen and fuel combine in a chemical reaction, for example an appliance catching fire or a cigarette dropped in a bin. The fire is very small, gives little heat, and may go out by itself or be put out with an extinguisher.',
      'Growth: the room\'s contents, furnishings and wall coverings, together called the fire load, start to burn. Growth depends on the size of the room (the same fire in the open air, like a bonfire, would be mostly harmless), how flammable the contents are (for example a plastics or solvent paint factory), the build-up of a hot smoke layer at ceiling level, and how much air gets in through doors and windows. Without intervention, such as a water suppression system, the fire is likely to reach flashover.',
      'Flashover: a hot smoke layer builds up under the ceiling, trapped by the walls. Its radiated heat rapidly heats every exposed combustible surface, which gives off flammable gases. When these gases are hot enough they ignite throughout the smoke layer. This almost instant event brings a very rapid temperature rise and involves every combustible item in the room.',
      'Fully developed: everything combustible is burning and the fire is at its maximum. The focus moves to keeping the fire in the compartment of origin, using passive fire protection, and fighting it from outside that compartment.',
      'Decay: likely to be the longest stage, governed by falling oxygen or fuel and by how the fire service can get in to put it out. The fire can return if oxygen is let back into the hot, confined space, or if smouldering combustibles not fully put out start a new fire.'
    ]],
    ['h', 'Means of escape'],
    ['p', 'Understanding fire growth is essential when planning evacuation. In simple buildings, such as offices and schools, where occupants know the building and practise fire drills, escape routes are fairly simple to design, and the maximum travel distances to a place of safety are set out in building regulation guidance. Three key definitions:'],
    ['ul', [
      'Travel distance: the actual distance travelled from any point in a building to a place of relative or ultimate safety, allowing for furniture and internal partitions.',
      'Place of relative safety: a place inside the building that protects people from fire for a limited time, so they can reach a floor exit or a place of ultimate safety. Usually a protected corridor or stairwell.',
      'Place of ultimate safety: a place reached by leaving through a final exit, a safe distance from the building and the effects of fire.'
    ]],
    ['p', 'Other buildings are more complex. Flats, hospitals and care homes may need a "stay put" or "remain in place while safe to do so" policy, where people stay in their flat or ward when the alarm sounds unless asked to move or fully evacuate. Some buildings, such as petrochemical plants or nuclear power stations, put the surroundings at serious risk; others, such as detention centres and prisons, have very specific needs.'],
    ['h', 'Smoke inhalation'],
    ['p', 'Smoke is the main cause of death for victims of indoor fires. Estimates of deaths from smoke inhalation, including burns to the respiratory system, range from 50 to 80%. Modern buildings and their contents contain many synthetic materials that produce lethal substances when they burn:'],
    ['ul', [
      'Particles: partly and fully burnt substances small enough to get past the respiratory system\'s defences and settle in the lungs. Some are toxic; others irritate the eyes and digestive system.',
      'Vapours: fine liquid droplets that can poison if breathed in or absorbed through the skin.',
      'Toxic gases: the most common, carbon monoxide (CO), can kill even in small amounts because it irreversibly replaces oxygen in the blood. Others, such as hydrogen cyanide from burning plastics, interfere with cellular respiration.'
    ]],
    ['p', 'Fire can also disable or kill by lowering oxygen levels, either by using the oxygen up or by displacing it with other gases. Heat is a breathing hazard too: superheated gases burn the respiratory tract, and if they are hot enough a single breath is likely to kill.'],
    ['h', 'How building design affects the fire process'],
    ['p', 'Building design and materials have changed greatly in recent decades. Demands for a lower carbon footprint and better energy efficiency have changed how buildings are built, which challenges how we predict a fire will develop and behave. Modern Methods of Construction (MMC) may challenge standard fire tests, which are based on brick and mortar construction. More airtight, highly insulated buildings affect how a building performs in a fire and how the fire service must fight it. The Grenfell Tower fire, which killed 72 people in June 2017, arose partly from changes in building techniques aimed at better insulation to cut carbon dioxide emissions.']
  ]
});

/* Unit 2: Human behaviour in fire */
self.COURSE_READER.chapters.push({ id: 'm1u2', mod: 'm1', unit: 2, title: 'Unit 2: Human behaviour in fire',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['h', 'What affects how people respond'],
    ['p', 'How a person or group responds to a possible fire depends on several factors, including:'],
    ['ul', [
      'How well they know the building layout.',
      'How often they hear the alarm, for example after repeated false alarms.',
      'Fire drill discipline.',
      'Their physical state, such as being asleep or under the influence of alcohol or drugs.',
      'Whether they are able bodied or impaired, for example visually or hearing impaired, a wheelchair user, or elderly.',
      'Whether family or friends are spread around the building.',
      'Whether their senses (smell, sight or hearing) can detect fire or smoke.',
      'How others around them react: the "herd" mindset.',
      'How clear the fire exit signs are.'
    ]],
    ['h', 'Response times'],
    ['p', 'Many reports have looked at likely response times: the time from the alarm first sounding to when occupants actually start to leave. This matters when setting travel distances in a fire evacuation strategy.'],
    ['p', 'Even when fire is plainly visible, other factors can delay evacuation. With full sensory evidence of fire, people can still respond very slowly because they still feel safe. This proved disastrous at the Bradford City Football Stadium fire in 1985, where 56 people died and many were seriously injured, even though a clear escape route onto the pitch was available; some may have seen the pitch as a no-go area. In the Stardust fire in 1981, people at first moved towards the fire as something of interest, sealing their own fate.'],
    ['h', 'The old assumptions'],
    ['p', 'Evacuation planning was historically based on assumptions such as:'],
    ['ul', [
      'People\'s safety cannot be guaranteed because they may panic and behave inappropriately.',
      'People respond immediately when they hear an alarm.',
      'The time to clear a floor is set by how long it takes to physically move to and through the fire exit.',
      'People will most likely use the fire exit nearest to them.',
      'People move independently of each other unless in a large crowd.',
      'People are unlikely to use a smoke-filled escape route.',
      'Everyone present is equally able to move to a fire exit.'
    ]],
    ['h', 'What the 1991 report found'],
    ['p', 'A UK Government report on Human Behaviour in Fires in 1991 examined these assumptions in detail. Taking account of how well people know the building and how much they are told about the threat, it proposed a more accurate model:'],
    ['ul', [
      'Deaths in large fires blamed on panic are far more likely to have been caused by delays in people being told about the fire.',
      'Fire alarms cannot always be relied on to make people evacuate straight away.',
      'Start-up time, the time people take to react to an alarm, is just as important as the time to physically reach the exit.',
      'Unless an exit is seriously blocked, people tend to move in a familiar direction, even if it is further, or even towards the fire, rather than use an unfamiliar fire escape route.',
      'People often move towards members of their group and stay close to those they have an emotional tie with.',
      'Fire exit signs are not always noticed or remembered, and may not overcome the difficulty of finding the way caused by the building\'s layout and escape route design.',
      'People are often prepared to move through smoke if they have to.',
      'People\'s ability to move to exits varies greatly, for example a young fit adult compared with an elderly or disabled person.'
    ]]
  ]
});

/* Unit 3: Fire protection */
self.COURSE_READER.chapters.push({ id: 'm1u3', mod: 'm1', unit: 3, title: 'Unit 3: Fire protection',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Fire protection is a holistic subject: a building usually needs a range of solutions, some passive and some active, and they often work together.'],
    ['h', 'Passive fire protection'],
    ['p', 'Passive fire protection, sometimes called built-in fire protection, is the components, materials and systems that make up, or sit within, the fabric of the building.'],
    ['p', 'Many building materials, such as bricks, are not specified for a fire role but still have some natural fire resistance, which forms part of the building\'s built-in protection. This can be improved with added materials and components, known together as passive fire protection. They are called passive because they need no special power or command signal to work, although some, such as fire curtains, fire and smoke dampers and some doors, can be designed to operate that way.'],
    ['p', 'Passive fire protection covers many different types of system:'],
    ['ul', [
      'Fire protection to the structural frame.',
      'Internal compartmentation and fire resisting construction: walls (partitions) and floors, suspended ceilings, fire resisting glazing, fire doors and hardware, industrial fire shutters, fire curtains, and firefighting shafts and stairwells.',
      'Building services: fire resisting dampers, fire resisting ductwork, fire resisting service ducts and shafts, penetration seals for pipes, cables and other services, linear joint seals, cavity barriers and fire resisting air transfer grilles.',
      'The building envelope: fire resisting external walls, curtain walling, cladding systems and insulation applied to the outside of buildings.'
    ]],
    ['p', 'These are covered in more depth in Module Two.'],
    ['p', 'The main job of passive fire protection is to control the spread of fire and smoke within a fire compartment for a set period, generally between thirty minutes and four hours. For a compartment wall or ceiling, the fire rating applies not just to the wall or ceiling itself but also to every service passing through it, horizontally or vertically, and to every opening, such as doors, windows and hatches.'],
    ['p', 'Passive fire protection also includes paints, coatings, varnishes and surface impregnations used to improve or maintain the reaction to fire performance of wall and ceiling linings.'],
    ['h', 'Active fire protection'],
    ['p', 'Active fire protection needs special power or a command signal to work. It includes:'],
    ['ul', [
      'Detection systems.',
      'Alarm systems.',
      'Sprinkler and water mist systems.',
      'Other suppression systems, such as gaseous systems.',
      'Smoke control systems.'
    ]],
    ['p', 'Many active systems, such as a fire alarm, are triggered by a signal from a detector nearby responding to heat, smoke, CO, CO2 and so on. They can usually also be set off by hand, for example from a control room or a break glass call point. Powder, gas or water extinguishing systems can be triggered by detectors, or used by hand as portable extinguishers. Fixed sprinklers activate when the temperature around the sprinkler head gets high enough.'],
    ['p', 'Fire hoses and firefighting risers are also active measures. Active and passive measures can combine into one solution, such as a detector that triggers a fire door to close or a smoke ventilation system to open. Active fire protection is covered in more detail in Module Three.'],
    ['h', 'Other fire protection measures'],
    ['p', 'Buildings also include escape signage, either luminous (luminescent) or wired in, to show the safe route out, and fire warden training as part of the building\'s planned evacuation. These are covered in Module Three.'],
    ['h', 'Prescriptive and fire engineered approaches'],
    ['p', 'Many modern buildings no longer follow a traditional prescriptive approach to the building guidance. Instead they use a fire safety engineered, or performance based, fire strategy that combines active and passive protection, fire safety management and other measures tailored to that building.'],
    ['p', 'A prescriptive approach starts from the occupancy classification (for example hospital, factory or school) and the matching prescriptive code. The code may offer choices of passive or active measures, or allow alternative ways to reach the required level of safety. For many buildings this is the simplest and most efficient option, and enforcement is easier because buildings in the same class follow the same rules.'],
    ['p', 'Approved Document B (the guidance to the Building Regulations in England) says fire safety engineering can be an alternative approach to fire safety. It may be the only practical way to reach a satisfactory standard in some large and complex buildings, or buildings with mixed uses such as airport terminals, and it can also solve a problem with one aspect of a design that otherwise follows the guidance.'],
    ['p', 'Fire safety engineering applies scientific and engineering techniques, such as computer modelling, rules, codes, calculations and expert judgement, based on an understanding of how fire behaves and how people react to it, to protect people, property and the environment. It may lead to fewer passive or active measures, or both, than a prescriptive approach would need. Fire engineering is covered in more detail in Module Three.']
  ]
});

/* Unit 4: Building performance in a fire */
self.COURSE_READER.chapters.push({ id: 'm1u4', mod: 'm1', unit: 4, title: 'Unit 4: Building performance in a fire',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'A building should be designed so that, if a fire breaks out, everyone can get out safely without any supporting element of the structure failing early, and without smoke or fire passing from one fire compartment to another. The design should also stop the fire spreading to neighbouring buildings and putting their occupants at risk.'],
    ['h', 'Fire resistance'],
    ['p', 'Fire resistance is the umbrella term for the ability of a building, through its construction or the components that make up its elements, to meet the criteria of the relevant fire test standard for a given period of time.'],
    ['p', 'Taking Approved Document B (England) as the example, fire resistance depends on fire severity, building height and building occupancy. In its own review of the guidance, the insurance sector adds the potential to protect the assets of the business.'],
    ['p', 'The required standards assume a certain fire severity and certain consequences if part of the structure fails. Fire severity is estimated very broadly from the building\'s use (its purpose group), on the assumption that buildings with the same use have similar contents, which make up the fire load. The factors that affect the fire resistance specified are:'],
    ['ul', [
      'Fire load density: the amount of combustible material per unit of floor area.',
      'Height of the top floor above ground: this affects how easy escape and firefighting are, and the consequences of a large collapse.',
      'Occupancy type: how easily the building can be evacuated quickly.',
      'Basements: with no external wall to vent heat and smoke, heat can build up, lengthening the fire and complicating firefighting.',
      'Single storey construction: escape is direct and the structure is unlikely to fail before everyone is out.'
    ]],
    ['p', 'Insurers also consider the risk of fire starting, the area that could be damaged by fire and smoke, and the financial exposure. Because a building\'s use can change, a precise fire severity estimate based on one use can mislead, so a fire engineering approach must consider that the fire load may change in future. For factories and storage buildings, insurers find that ignition sources, fire spread potential and fire load can vary a lot over the building\'s life, so high fire loads should be assumed.'],
    ['h', 'The three fire resistance criteria'],
    ['p', 'Fire resistance is broken down into three main classifications: loadbearing capacity, integrity and insulation.'],
    ['h', 'Loadbearing capacity'],
    ['p', 'The ability of the building\'s support system, such as a steel, concrete or timber frame, to stay intact and keep doing its job for a set time without collapsing. Each type of construction behaves differently:'],
    ['ul', [
      'Structural steel loses about half its strength at around 500°C. An unprotected steel structure carrying its full design load might be expected to collapse at a steel temperature of about 500 to 600°C, which is reached quickly in most fires.',
      'Reinforced concrete can suffer spalling, where pieces break away from the frame in a fire. Long exposure to a severe fire can erode the concrete and greatly reduce its strength, and may expose the reinforcement, raising the risk of losing loadbearing capacity.',
      'Timber chars at a measurable rate, but without suitable extra protection it will eventually be consumed by the fire, leading to collapse.'
    ]],
    ['p', 'Adding suitable passive fire protection considerably extends the fire resistance of all three frame types.'],
    ['h', 'Integrity'],
    ['p', 'The ability of the construction to stop gaps opening up that are big enough to let hot gases, smoke and flames through from one fire compartment to another.'],
    ['p', 'This is a particular concern where pipes, cables and ducts pass through a compartment wall or floor: the fire seal around each penetration must keep its integrity for at least as long as the integrity performance required of the wall.'],
    ['p', 'If fire breaks into concealed cavities where fire separating walls and floors link up, every opening and gap must be fire-stopped to limit sideways and vertical spread and achieve the required containment. Otherwise fire can spread unchecked and unseen through the building\'s cavities.'],
    ['h', 'Insulation'],
    ['p', 'The temperature of the unexposed face, the side of the compartment wall away from the fire, must not rise by more than an average of 140°C, or by more than 180°C at any one point.'],
    ['p', 'This stops anything combustible near or touching the wall from being set alight by heat passing through it. This is why fire doors in the UK are not usually required to be insulating: combustible items will not be stored against them.'],
    ['p', 'The type and duration of fire resistance required are set by the fire code for the structure, based on the fire condition defined.'],
    ['h', 'Cellulosic and hydrocarbon fires'],
    ['p', 'There are two main fire conditions.'],
    ['p', 'Cellulosic: fires where the fuel is mainly cellulose, such as timber, paper and cotton. They grow relatively slowly, although they can eventually reach very high temperatures. With very few exceptions, all building types in the built environment, such as offices, factories, schools and hospitals, fall into this category, and are tested to a time and temperature curve that rises steadily to around 1000 to 1100°C.'],
    ['p', 'Hydrocarbon: fires in places such as onshore petrochemical sites and offshore oil and gas rigs, often involving highly combustible volatile liquids or gases, which reach very high temperatures in seconds. Fire types include:'],
    ['ul', [
      'Jet fires: for example from a ruptured pressure vessel or gas line.',
      'Pool fires: flammable liquid leaks from a vessel or pipeline, forms a pool, and ignites.',
      'BLEVE (boiling liquid expanding vapour explosion) fires: from catastrophic failure of a tank holding liquid above its boiling point at normal atmospheric pressure.'
    ]],
    ['p', 'Other test curves cover very severe fires, such as those in tunnels, with furnace temperatures as high as 1350°C.'],
    ['h', 'Reaction to fire'],
    ['p', 'Reaction to fire is about how the materials lining a room\'s walls and ceiling help a fire grow up to flashover. It is measured by a material\'s tendency to:'],
    ['ul', [
      'Ignite.',
      'Spread flame over its surface.',
      'Release heat (rate of fire propagation).',
      'Be combustible to any extent at all.',
      'Produce flaming droplets and smoke (not used in UK regulations).'
    ]],
    ['p', 'So reaction to fire is how much a material may contribute to a fire\'s growth. Fire resistance, by contrast, is the ability of a construction such as a wall or door to stop the fire getting past it, for example beyond the room of origin.'],
    ['h', 'UK national standards and European classifications'],
    ['p', 'In the UK and Ireland the national fire regulator decides which fire tests and classifications are needed to reach set levels of life safety, and the requirements can vary with building type, use and size. In England the guidance and test methods are in Approved Document B, Fire Safety, with equivalent documents in Wales, Scotland, Northern Ireland and Ireland.'],
    ['p', 'Regulators historically chose parts of the BS 476 series of fire tests. Since 2005 they have also referred in parallel to the European fire tests adopted across the EU, known in the UK as BS EN tests, with their own BS EN or "Euroclass" classifications. The BS EN tests are different from the old BS tests and the results are not equivalent, but both are still accepted by the UK regulator as routes to compliance with the Building Regulations.'],
    ['p', 'Some test methods, especially the European ones, only give raw results such as rate of heat release or thermocouple temperature rises. These are turned into a classification by Approved Document B (and its equivalents), or by classification standards for BS EN tests.'],
    ['h', 'Reaction to fire classes in UK building regulations'],
    ['ul', [
      'Non-combustible (Euroclass A1): the highest reaction to fire performance, for materials classed as non-combustible under the relevant national or European test. Typical examples are stone, concrete, fired clay, ceramics, metals, plaster and masonry, or materials containing no more than 1% by weight or volume of organic material.',
      'Limited combustibility (Euroclass A2): includes non-combustible materials plus materials that show limited combustibility within set limits, for example a non-combustible core at least 8 mm thick with combustible facings no more than 0.5 mm thick on one or both sides, such as plasterboard. Where these are exposed as linings, they should also meet any surface reaction to fire class required.',
      'Class 0 (Euroclass B-s3,d2): in the UK, Class 0 is decided by two tests, one measuring heat release (fire propagation) from the material and one measuring flame spread over its surface.'
    ]],
    ['p', 'Standards covering fire performance are covered in more detail later in the course.']
  ]
});

/* Unit 5: Testing, assessment and certification */
self.COURSE_READER.chapters.push({ id: 'm1u5', mod: 'm1', unit: 5, title: 'Unit 5: Testing, assessment and certification',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Every fire protection material, product or system used in a building must meet the building code for that building type, for the required period.'],
    ['p', 'The performance awarded belongs to the system as tested AND the end use condition it is installed in, not just the product on its own. For example, the way to fire-stop a pipe or cable through a solid block wall may be very different from the way to fire-stop the same service through a dry lined wall. Unless both constructions are tested, nobody can be sure the fire stopping will work as intended in both. Testing and assessment must take account of every factor that could affect the result, such as integrity and insulation.'],
    ['h', 'Fire testing and assessment'],
    ['p', 'Before a fire protection material, product or system can go on the market, it must be fire tested in a way that suits its intended use. This usually means a physical test, possibly with an assessment that sets out the conditions it can be installed in and any limitations. For example, a coating that upgrades a steel beam to ninety minutes may only be approved for a limited number of steel sections at that rating.'],
    ['p', 'It is not practical to test every possible installation, and a fire test can never fully reproduce a real fire. A single action, single leaf fire door on hinges might be tested at 30 minutes, but that result does not apply to double doors, doors with over panels or side panels, pivot-hung doors, glazed doors, doors larger than tested, or doors with different hardware. All of these could be tested, but the combinations are so many that it is neither practical nor economic.'],
    ['p', 'So manufacturers run a fairly small range of tests to cover the basics, and the gaps between them and any extensions are covered by assessments from test laboratories and suitably qualified fire consultants. Test programmes are usually planned with the laboratory or consultant to get the widest field of application from the fewest tests.'],
    ['p', 'After testing, the manufacturer receives written evidence of the tests and assessments to support the product on the market. How much detail it contains depends on how much testing the applicant (usually the manufacturer) asked for, so when reading it you must understand any limits on how the data can be used or presented.'],
    ['h', 'The three tiers of evidence'],
    ['p', 'There are generally three tiers of evidence supporting manufacturers\' products:'],
    ['ul', [
      'Certification from a third-party certification body.',
      'An assessment or expert judgement from an accredited fire test laboratory or a suitably qualified fire consultant.',
      'A fire test report.'
    ]],
    ['h', '1. Product certification'],
    ['p', 'Certification comes in different forms:'],
    ['ul', [
      'First-party certification: the person or organisation supplying the goods or services gives its own assurance that they meet certain claims.',
      'Second-party certification: an association the person or organisation belongs to gives some assurance through membership.',
      'Third-party certification: an independent assessment by a certification body, itself accredited by the United Kingdom Accreditation Service (UKAS), declaring that set requirements for a product, person, process or management system have been met.'
    ]],
    ['p', 'Beyond testing and assessment, a manufacturer may choose to have the product evaluated under third-party certification. The certification body considers the test and assessment data, and also:'],
    ['ul', [
      'Evaluates performance from a range of tests, not just one, to create a scope of certification covering the whole product range.',
      'Draws on evidence from the tests used in assessments to build that scope.',
      'Carries out factory production control audits and inspections, typically once a year.',
      'Requires the manufacturer to declare any changes to the products.',
      'Requires the manufacturer to label the products sold, for traceability if problems arise.',
      'Carries out ongoing product verification, through audit tests and inspections, at set intervals.'
    ]],
    ['p', 'The number of products under third-party certification has grown considerably, partly because tenders increasingly require it as a minimum and partly through endorsement by industry bodies such as the Association for Specialist Fire Protection (ASFP). Government guidance supports it too. The Scottish Technical Handbook (Non-Domestic, clause 2.0.10) says such schemes both identify products and systems shown to have the required fire performance and give confidence that what is actually supplied matches what was tested or assessed. The statutory guidance in England, Wales and Ireland gives similar encouragement.'],
    ['h', '2. Assessment or expert judgement'],
    ['p', 'An assessment from an accredited fire test laboratory or a suitably qualified fire consultant covers part of what third-party certification does: it evaluates performance from a range of tests, not just one, and assesses the test evidence to set a field of application. It is the next best thing to third-party certification, but has none of the quality control. It lets the manufacturer present a full picture of where the product can and cannot be used.'],
    ['p', 'Those giving the assessment must be qualified to make that judgement and able to show their competence. The lessons of Grenfell show there is a responsibility to understand the differences between expert judgements, engineering judgements and desktop studies, and what is done on the strength of each.'],
    ['h', '3. Fire test report'],
    ['p', 'Because product certification is not mandatory, fire test reports are often used to show fire performance. But a test report only covers the product or construction exactly as tested, with limited variations allowed under the direct field of application of that test method. It has none of the quality control of third-party certification, and reports are often long and complex, unsuitable for marketing or for authorities such as building control.'],
    ['p', 'Many end users do not know the different kinds of fire test, so unsuitable reports can end up being used to get approval, for example an indicative or small scale fire resistance test offered as proof of how a full size element will perform. Knowing how to evaluate a fire test is essential.'],
    ['h', 'The three test types (UK Fire Test Study Group)'],
    ['p', 'The UK Fire Test Study Group, representing all the major UK fire test laboratories, recognises three test types and how each is reported:'],
    ['ul', [
      'Standard test: reported in full to the Standard, with complete details of the test specimen\'s construction and the test process.',
      'Indicative test: normally reported by letter only. It gives the data from the test but does not interpret it against any classification. It carries a statement that the full requirements of the Standard were not met, that the results are for the test sponsor\'s information only, that they must not be used to show performance against the Standard or regulatory compliance, and that the test was not done under UKAS accreditation.',
      'Ad-hoc test: carried out to a non-standard procedure, where no standard procedure exists, but using the principles of fire resistance testing from the relevant test method. The report states that the procedure is not covered by any British or European standard, and recommends referring the report back to the laboratory to check the method and results are still valid, because standards keep being reviewed and amended.'
    ]],
    ['p', 'Unless the conditions on site are the same as, or less onerous than, those the ad-hoc test was based on, the test evidence has no validity. If in doubt, ask the laboratory that did the test.']
  ]
});

/* Unit 6: Developing a fire strategy */
self.COURSE_READER.chapters.push({ id: 'm1u6', mod: 'm1', unit: 6, title: 'Unit 6: Developing a fire strategy',
  source: 'Attendees Resource Pack, Module One, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'This unit brings together how a building performs in fire and how its occupants respond to evacuation.'],
    ['p', 'Every building design starts with the client\'s vision. The architect, structural engineer and, more and more, the fire engineer turn that into a practical, buildable design within the client\'s budget.'],
    ['h', 'The two fundamental questions'],
    ['ul', [
      'Is the aim to protect people from a fire in the building and give them enough time to escape?',
      'Or is it also to protect the building and its contents?'
    ]],
    ['h', 'Issues to consider'],
    ['ul', [
      'What is the maximum acceptable damage value?',
      'Should a fire be contained within a defined compartment?',
      'How quickly should the fire be put out after ignition?',
      'How quickly should the building be reoccupied or back to trading?'
    ]],
    ['h', 'Passive fire protection from start to finish'],
    ['p', 'Correctly installed passive fire protection is essential to fire safety. Everyone in the construction process has a part in making sure it is designed, commissioned and installed correctly, so it must be considered from project inception right through to maintenance of the finished building.'],
    ['p', 'Changing construction practice puts more responsibility on contractors, who must consider the safety and stability of the building at every stage. The basic fire strategy should be agreed as early as possible in the design, and fire safety should never be a "bolt-on" during or after the project.'],
    ['p', 'The product or system supplier must show, through third-party certification, assessments or defined national test standards (not just small scale ad-hoc tests), that the product performs properly in the conditions of the chosen design. Installation should be done by competent installers who can prove their competence through a third-party audited process.'],
    ['h', 'Contractor responsibilities'],
    ['p', 'The main contractor coordinates all the work on a project. Because passive fire protection exists to protect occupants\' lives, it should not be given to contractors who cannot prove they are competent to install it.'],
    ['p', 'Passive fire protection, including correct and timely scheduling of all subcontractor work, must be part of the main programme. That way it goes in in the right order, avoiding rework later that could lead to an unsatisfactory ad-hoc fix.'],
    ['p', 'Passive fire protection should be treated as a specialist trade with its own separate contracts. With specialists and careful programming, the right materials are much more likely to be specified and installed, avoiding damage and rework. If non-specialists are used, far more inspection of the finished work is needed.'],
    ['h', 'Inspection'],
    ['p', 'Inspection of completed work is recommended. Separately from any Building Control inspection, a project-specific, systematic approach is essential, involving the installer, their supervisor, the main contractor and an inspection agency (which may be a third-party certification body), so that passive fire protection is checked before other parts of the building go up and fit-out starts.'],
    ['p', 'Inspecting and putting right poor passive fire protection late on is very hard and time consuming, because it is often hidden or inaccessible once the building is finished. It is also far more expensive than getting it right first time.'],
    ['h', 'Handover'],
    ['p', 'At completion the main contractor must hand the client or occupier the relevant fire safety information, including certificates of conformity from the passive fire protection subcontractors. The occupier needs this to run and maintain the building properly, and it must be available to any fire risk assessor carrying out a fire risk assessment under the relevant legislation. Details of the installed passive fire protection also belong in the building\'s fire safety manual, which the designer should compile for the occupier.'],
    ['h', 'Lifetime protection'],
    ['p', 'How the building is managed and maintained is vital to keeping the fire strategy working. Its fire provisions must be maintained properly for its whole working life, and any activity that could affect fire performance must be monitored and acted on, because over the years many contractors, follow-on trades and maintenance staff will work in it.'],
    ['p', 'With so many professions involved, each with its own agenda and priorities and all seeking value for money, there are many chances for fire safety to be forgotten, for misunderstandings to creep in, and for decisions about materials, layouts and installation to be made without thought for life safety or the building\'s ability to withstand fire.'],
    ['p', 'Follow-on trades such as plumbers, electricians and IT providers regularly breach fire compartmentation in the course of their work. They are competent in their own fields, but many lack the skills to avoid seriously weakening a compartment\'s fire performance.'],
    ['p', 'A lack of knowledge, both among those who buy fire protection installation and among those who offer it without a recognised standard of competence, can and does lead to inappropriate installations.']
  ]
});
