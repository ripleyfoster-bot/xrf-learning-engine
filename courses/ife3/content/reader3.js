/* IFE reading notes: Module Three (engine 1.5.0 reader chapters, IFE course 0.13.0).
   Ported from the original IFE app (content/reader-m3.js, v0.15.2), wording unchanged.
   Written in plain words from the Attendees Resource Pack, Module Three, Revision 3 2023.
   These are revision notes, not the pack itself: always check the official course material.
   One chapter per unit, linked to the module and unit with mod and unit, so the module screen
   offers "Read the unit" / "Read the module". Reading never counts towards mastery or exam scores.
   Chapter ids never change. Add new chapters at the END. */
self.COURSE_READER = self.COURSE_READER || { title: 'Reading notes', subtitle: 'Read each unit, or have it read to you',
  note: 'Revision notes in plain words, written from the ASFP course pack. Always check the official course material.', chapters: [] };

/* Unit 1: Detection and alarms */
self.COURSE_READER.chapters.push({ id: 'm3u0', mod: 'm3', unit: 0, title: 'Unit 1: Detection and alarms',
  source: 'Attendees Resource Pack, Module Three, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Module One showed that many factors affect when, or even whether, people respond to a possible fire. False alarms make this worse: caused by cooking, poor installation, faulty alarms, or careless acts such as hot work done without isolating the local detector.'],
    ['p', 'False alarms have fallen a lot. For the London Fire Brigade alone they dropped from over 71,500 a year in 2007 (more than one callout every ten minutes) to just over 38,000 (about 104 a day) by 2017. Nationally, false alarms are thought to cost the UK fire service more than £1 billion a year. Correct specification and proper maintenance are essential to cut false alarms and the complacency about reacting that they breed.'],
    ['h', 'Smoke detectors and heat detectors'],
    ['p', 'A smoke detector picks up evidence of smoke (think burnt toast in the kitchen setting off the hallway alarm). A heat detector recognises a temperature rise to an unacceptable level.'],
    ['p', 'Smoke is a breathing hazard and also seriously hinders safe escape, so the alarm from a smoke detector is vital for triggering the passive fire protection measures that stop smoke spreading: automatic fire door closers and smoke dampers in ductwork, as well as releasing access control on escape route doors.'],
    ['p', 'Heat detectors are often fitted where smoke is a regular occurrence, such as kitchens, which are a likely fire source (for example a fat pan fire) but naturally produce smoke. A heat detector generally covers a smaller area than a smoke detector, so places like commercial kitchens may need more of them.'],
    ['h', 'Systems in non-domestic buildings'],
    ['p', 'Detection and alarm systems in commercial, retail and industrial buildings are much larger and more complex than residential ones. Detectors and components are linked to a central control panel so the exact location of the fire can be pinpointed. Addressable panels give every device an address, so the triggered detector is quickly identified. They have a programmable cause and effect matrix that decides what happens on activation, controlling sounders and visual indicators and also systems such as active fire curtains and fire and smoke dampers.'],
    ['p', 'Manual call points (break glass call points) are also fitted, typically at floor exits and final exits, and in the UK no one should have to travel more than 45 metres to reach one. Where occupants have limited mobility, or rapid fire development is likely, this is reduced to 20 metres along an escape route, so the alarm can be raised whether or not a detector has picked up the fire.'],
    ['h', 'Interaction with passive fire protection'],
    ['p', 'As Module Two showed, many passive fire protection systems depend on the detection and alarm system to work. The alarm may trigger:'],
    ['ul', [
      'Automatic door hold-open and self-closing release devices.',
      'Smoke and fire damper activation.',
      'Door access control systems.',
      'Release of security locked fire door mechanisms.'
    ]],
    ['p', 'Not every alarm system suits every case. Some passive measures only activate with an alarm above a certain decibel level, set by the passive fire protection manufacturer, so the specifier must check the active and passive systems are compatible. Alternatively the passive measure can be hard wired into the alarm system through an I/O (input/output) unit, like a detector, and triggered by the control panel.'],
    ['p', 'Because the passive part is usually installed separately from the detection and alarm system, everyone specifying, installing and inspecting must keep the whole system in mind. For example, the National Occupational Standard for installing timber fire door assemblies and doorsets (COSVR358) expects the installer to understand how the door works in a fire, which may include how the automatic closer works. Its performance criteria include interpreting drawings, specifications, schedules, method statements, risk assessments, work instructions, fire documentation and manufacturers\' information; and its methods of work include understanding the implications of incorrect installation, the fire resisting requirements, teamwork and communication, and the needs of other trades. So specifiers, installers and inspectors of passive measures need a basic understanding of how detection and alarm systems work.'],
    ['h', 'Work after construction'],
    ['p', 'Over a building\'s life, upgrades and refits often include new alarm and detection systems, with new cabling passed through existing, working compartment walls and ceilings. Post-fire forensic evidence from many fires shows fire and smoke spread made worse by follow-on trades opening up compartmentation for new services and not resealing it, or using unsuitable products that failed early. Everyone doing post-construction or maintenance work must understand the Module Two guidance and be able to show competence. This applies to many of the active systems in this module.'],
    ['h', 'Types of smoke detector'],
    ['p', 'A smoke detector senses a wide range of smoke types as a potential sign of fire. At home it works alone (a smoke alarm); in non-domestic buildings it signals a fire alarm control panel as part of a building-wide system. Sensitive alarms can even detect and deter smoking where it is banned, such as aircraft toilets. In large buildings, detectors are usually powered by the central fire alarm system, which runs on mains power with battery backup.'],
    ['ul', [
      'Ionisation smoke detectors: use a radioisotope to ionise the air and alarm when smoke changes the air. More sensitive to flaming fires, such as burning paper and wood, detecting them early before the smoke gets thick.',
      'Optical (photo-electric) smoke detectors: use light, commonly a pulsed infra-red LED sending a beam into the sensing chamber every few seconds to check for smoke particles. Respond well to smoke from foam filled furniture and overheated PVC wiring, and can be fitted near (but not in) kitchens, as they are less likely than ionisation alarms to go off with burnt toast.',
      'Aspirating smoke detectors: a central unit continually draws air through a network of small pipes into a sampling chamber, commonly using a laser to detect smoke particles. Used in ceiling voids, cold rooms, computer rooms, and warehouses or production plants, especially dusty or dirty places with restricted access.',
      'Optical beam detectors: a transmitter projects a beam of light across a large area to a receiver and detects partial obstruction by smoke. Used where building height makes point detectors restrictive, so often in warehouses to protect large open spaces.'
    ]],
    ['h', 'Heat detectors'],
    ['p', 'Heat detectors respond when a fire\'s thermal energy raises the temperature of a heat sensitive element, and are used particularly where smoke detectors cannot be. For life safety they are generally not seen as an alternative to smoke detection. There are two basic types:'],
    ['ul', [
      'Fixed temperature: operates when the element reaches its operating temperature. The most common fixed point for electrically connected heat detectors is 58°C, though it varies by type.',
      'Rate-of-rise: operates on a rapid rise in element temperature, typically 6.7°C to 8.3°C per minute, whatever the starting temperature, so it can respond at a lower temperature than a fixed threshold allows. It may use two thermocouples or thermistors, one measuring heat from convection or radiation and one ambient temperature, responding when the first rises relative to the second. Because it may miss slow fires with low energy release, a fixed temperature element is added that eventually responds at the design threshold.'
    ]],
    ['h', 'Alarms'],
    ['p', 'Once a fire is detected, people must be alerted by audible, and sometimes visual, means. Alarms can be local, or also sent to a remote point using alarm transmission and fault warning routing equipment, for example from a care home direct to the fire service or to an alarm receiving centre. The choice depends on building type and use:'],
    ['ul', [
      'Electronic sounders: a range of tones and combinations, suitable for most uses.',
      'Bells: historically common, less so now. Once sounders start to be introduced, bells should be removed and replaced: a building cannot have both.',
      'Visual indicators: where background noise could drown out an audible alarm, and where occupants may have impaired hearing.',
      'Voice alarms: emergency voice alarm communication systems give pre-recorded and live messages, for example in arenas, shopping centres and other large complexes with a stay put policy where total evacuation at once is hard but guidance is needed. Repeated tests show voice alarms are very effective at cutting delays from people misinterpreting alarm signals.'
    ]],
    ['h', 'Standards'],
    ['ul', [
      'BS 5839-1:2017: design, installation, commissioning and maintenance of fire detection and alarm systems in non-domestic premises.',
      'BS 5839-3:1988: automatic release mechanisms for certain fire protection equipment.',
      'BS 5839-6:2013: fire detection and alarm systems in domestic premises.',
      'BS 5839-8:2013: voice alarm systems. BS 5839-9:2011: emergency voice communication systems. PD 6531:2010: queries and interpretations on BS 5839-1.',
      'EN 54 series: the European standards for system components, including Part 2 control and indicating equipment (the fire alarm control panel), Part 3 sounders, Part 4 power supplies, Part 5 point heat detectors, Part 7 point smoke detectors (scattered light, transmitted light or ionisation), Part 10 flame detectors, Part 11 manual call points, Part 12 optical beam line smoke detectors, Part 13 compatibility of components, Part 14 planning, design, installation, commissioning, use and maintenance, Part 16 voice alarm control equipment, Part 17 short circuit isolators, Part 18 input/output devices, Part 20 aspirating detectors, Part 21 alarm transmission and fault warning routing equipment, Part 22 line heat detectors, Part 23 visual alarms, Part 24 voice alarm loudspeakers, Part 25 radio linked components, Part 26 carbon monoxide point detectors, Part 27 duct smoke detectors, Part 28 non-resettable line heat detectors, and Parts 29 to 31 multisensors (smoke and heat; CO and heat; smoke, CO and heat).'
    ]],
    ['h', 'Further guidance'],
    ['ul', [
      'Fire Industry Association (www.fia.uk.com): represents manufacturers and suppliers; guidance and training.',
      'Fire Protection Association (www.thefpa.co.uk): research, consultancy and training.',
      'British Approvals for Fire Equipment, BAFE (www.bafe.org.uk): third-party certification schemes for fire protection companies.'
    ]]
  ]
});

/* Unit 2: Firefighting equipment */
self.COURSE_READER.chapters.push({ id: 'm3u1', mod: 'm3', unit: 1, title: 'Unit 2: Firefighting equipment',
  source: 'Attendees Resource Pack, Module Three, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Here firefighting does not mean the fire service\'s work at a fire. It means equipment for putting out a fire in its very early stages, and equipment built into a building for the fire service to use. These include portable fire extinguishers, fire blankets, wet and dry rising mains, and gaseous fire suppression systems.'],
    ['h', 'Portable fire extinguishers'],
    ['p', 'A fire extinguisher is an active fire protection device for putting out or controlling small fires, often in emergencies. It is not for an out of control fire, such as one that has reached the ceiling, endangers the user or needs the fire service. It is usually a hand-held cylindrical pressure vessel holding an agent that is discharged onto the fire.'],
    ['p', 'The first recorded fire extinguisher was patented in England in 1723 by the chemist Ambrose Godfrey: a cask of extinguishing liquid with a pewter chamber of gunpowder, set off by fuses to explode and scatter the liquid. Not very practical.'],
    ['p', 'The type and location of extinguishers depend on the location (reception, corridor, office, kitchen, laboratory, school, warehouse and so on) and the likely fire type (wood, paper and textiles, electrical equipment, flammable liquids).'],
    ['h', 'Maintenance'],
    ['p', 'In commercial and public buildings, extinguishers should generally be visually inspected monthly for damage or loss of pressure, and serviced to BS 5306-3 once a year. Water, foam and powder extinguishers must be discharged and refilled every five years; CO2 extinguishers refurbished after ten years. Maintenance-free extinguishers only need refurbishment after ten years, with no maintenance in between other than the monthly visual check and a recorded yearly visual inspection by the owner.'],
    ['h', 'Extinguishers and passive fire protection'],
    ['p', 'There is no direct link between where passive fire protection goes and where extinguishers go, but the National Occupational Standards for installing any passive fire protection system require the operative to know the types of fire extinguisher and how and when they are used (knowledge item K5).'],
    ['p', 'The fire dictates the extinguishing medium, so anyone using an extinguisher must understand what is in it and how it will affect the fire. Using water on a fat or oil fire, for example, can spread the fire and seriously burn the user.'],
    ['h', 'Extinguishing media and fire classes'],
    ['p', 'There are five types of extinguishing material: water, foam, powder, CO2 and wet chemical. Fire classes are:'],
    ['ul', [
      'Class A: solids such as wood, paper and textiles (freely burning materials).',
      'Class B: flammable liquids such as petrol, diesel, oils and paint.',
      'Class C: flammable gases such as methane, propane and natural gas.',
      'Class D: flammable metals such as magnesium, aluminium and lithium.',
      'Class E: not a formal classification in the UK, though sometimes used for electrical fires. In reality it is the surrounding materials that burn, such as cable jackets, casings and circuit boards, so use extinguishers with a non-conducting agent designed for electrical equipment, such as carbon dioxide (CO2) or dry powder.',
      'Class F: cooking oils, fats and grease (combustible cooking media).'
    ]],
    ['h', 'Extinguisher types and label colours'],
    ['p', 'Under current UK rules extinguishers are mainly red, with a coloured band or label showing the contents so users can match the extinguisher to the fire:'],
    ['ul', [
      'Water (red label): for solid combustibles such as wood, paper and textiles. Water conducts electricity, so generally do not use it near electrical equipment.',
      'Powder (blue label): ideal for mixed risks, with all-round capability; its Class C rating means it also works on flammable gas fires.',
      'Foam (cream label): for solid combustibles and highly effective on flammable liquids. The foam layer helps stop re-ignition.',
      'Carbon dioxide (black label): for flammable liquid fires and fires involving electrical equipment. One of the cleanest agents, leaving no residue.',
      'Wet chemical (yellow label): designed for Class F fires, tackling large burning oil fires, so suited to kitchens.',
      'Water mist (white label): a newer type using microscopic water particles to cool the fire, smother it, then cool the burning material to prevent re-ignition. Usable on all fire types, so good for areas with multiple risks.'
    ]],
    ['h', 'Fire blankets'],
    ['p', 'A fire blanket is a sheet of fire retardant material placed over a fire to smother it. Small blankets for domestic kitchens fold into a quick release container and, being simple, may suit someone inexperienced with extinguishers. Larger blankets for laboratories and industry are usually in vertical quick release containers so they can be pulled out and wrapped round a person whose clothes are on fire.'],
    ['h', 'Rising mains'],
    ['p', 'Dry and wet rising mains are installed for the fire service or other trained people, giving a ready way to deliver large amounts of water to put out or stop the spread of fire.'],
    ['ul', [
      'Dry risers: vertical mains with an outlet valve on each floor and an inlet at ground level where the fire service connects its water supply. In the UK they are installed in buildings above 18 metres. They should be in firefighting shafts, and where necessary in protected escape stairs; outlets may be in protected lobbies, stairs or enclosures. Inlets and outlets should be signed.',
      'Wet risers: pipes kept permanently charged with water, from a storage tank via a boost pump or direct from the mains. Installed in new buildings above 50 metres, or where a suitable breeching inlet for a dry riser is impossible or difficult. Like dry risers, they should be in firefighting shafts, and where necessary protected escape stairs, with outlets in protected lobbies, stairs or enclosures.'
    ]],
    ['p', 'Rising mains pass through every floor, so either the riser sits in a service riser of fire resisting construction, or the gaps between riser and floor slab are sealed with suitable passive fire protection so the floor keeps its required fire resistance. Where it is in a fire resisting service riser, any access panels or doors must be installed and maintained so the riser\'s fire performance is at least equal to the compartmentation\'s.'],
    ['h', 'Gaseous fire suppression'],
    ['p', 'Gaseous (clean agent) fire suppression uses inert gases or chemical agents to put out fires. It is normally used for automatic protection of hazardous areas with critical uses, such as over commercial kitchen cooking areas, mainframe computer rooms, data centres and IT communications centres. It works in one of two ways:'],
    ['ul', [
      'Inert gas systems: reduce the oxygen concentration to below 15%, where most combustibles will not burn. Life is sustainable at that level and healthy people would notice no ill effects. These use naturally occurring gases: nitrogen, argon, CO2, or combinations.',
      'Clean chemical systems: blended man-made gases that absorb heat (a cooling mechanism) rather than removing oxygen. Halon was the main gas until the early 1990s; after it was banned in 1994 for depleting the ozone layer, it was replaced by gases such as FM200 and Novec 1230.'
    ]],
    ['p', 'The gas is held in one or more cylinders and piped into the protected area. Where pipes pass through a compartment wall, proper fire-stopping must keep the wall\'s integrity. Pressure relief is a key consideration: discharging the agent into an enclosed space creates positive pressure, and without enough natural leakage the over-pressure can damage the structure. Where pressure relief dampers are installed, passive fire protection must be taken into account.'],
    ['h', 'Standards'],
    ['ul', [
      'BS 5306 (fire extinguishing installations): Part 0 selection of installed systems and other equipment; Part 1 hose reels and foam inlets; Part 2 sprinkler systems; Part 3 commissioning and maintenance of portable extinguishers; Part 4 carbon dioxide systems; Part 8 extinguishing installations and equipment on premises; Part 9 recharging portable extinguishers.',
      'Fire blankets: BS EN 1869.',
      'Rising mains, wet and dry: BS 9990:2015.',
      'Fixed gaseous systems: BS EN 15004-1 (design, installation and maintenance) and Parts 2 to 10 (physical properties and design for each extinguishant: FK-5-1-12, HCFC Blend A, HFC 125, HFC 227ea, HFC 23, IG-01, IG-100, IG-55 and IG-541).',
      'BS 7273-1: electrical actuation of gaseous total flooding systems. BS 6266: fire protection for electronic equipment installations.'
    ]],
    ['h', 'Further guidance'],
    ['ul', [
      'Fire Industry Association (www.fia.uk.com), Fire Protection Association (www.thefpa.co.uk), and BAFE (www.bafe.org.uk) for third-party certification of fire protection companies.'
    ]]
  ]
});

/* Unit 3: Fire suppression */
self.COURSE_READER.chapters.push({ id: 'm3u2', mod: 'm3', unit: 2, title: 'Unit 3: Fire suppression',
  source: 'Attendees Resource Pack, Module Three, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'The purpose of a suppression system is not necessarily to put the fire out, although that may happen. Its purpose is to limit the fire\'s growth by slowing it, ideally so flashover does not happen, or at least is limited. That keeps the means of escape tenable for longer, so occupants can get out safely and fire and rescue crews can get in safely. Suppression systems include sprinklers, water mist and deluge systems.'],
    ['h', 'A short history of sprinklers'],
    ['p', 'The first recognisably modern sprinkler system is said to have been installed in 1812 at the Theatre Royal, Drury Lane, by its architect William Congreve: an airtight reservoir of 400 hogsheads (about 95,000 litres) fed by a 10 inch (250 mm) main that branched throughout the theatre, with smaller pipes pierced with half inch (13 mm) holes that poured water in a fire. The first automatic sprinkler system was patented by Philip W. Pratt of Abington, Massachusetts, in 1872. By 1874 Henry S. Parmalee had improved on it with what is believed to be the first practical automatic sprinkler head, which he called the "automatic fire extinguisher".'],
    ['p', 'Today sprinklers can be part of the fire protection in most building types, but whether they are required depends on regulations, codes and insurance requirements, which vary widely around the world.'],
    ['h', 'How sprinklers work'],
    ['p', 'The protected areas are covered by a grid of pipes with sprinkler heads at regular intervals, filled with water from a tank via pumps, or from the town main if it gives enough flow. Each head opens only when it reaches its own operating temperature and then sprays water on the fire. It is a myth, popularised by blockbuster films, that every sprinkler in the building goes off. The hot gases from a fire usually operate the heads nearby; the rest stay closed, so no water goes where there is no fire and less water is needed.'],
    ['p', 'Heads are spaced, usually on the ceiling, so there is always enough flow when one or more operate, calculated to control a fire given the building\'s size and construction and its contents or use. Heads can also go in enclosed roof spaces and floor ducts where fires could start unnoticed, and in large warehouses within the storage racks as well as at roof level.'],
    ['p', 'Where water enters the system there is a main valve, used to shut it off for maintenance. For safety it is kept locked open, and only authorised people should be able to close it.'],
    ['p', 'A sprinkler head typically has a plug holding back the water, kept in place by a trigger. The most common trigger is a glass bulb filled with a glycerine-based liquid that expands when heated and breaks the bulb at a set temperature, most commonly around 65 to 70°C. The water pressure forces the plug out, a bevelled edge deflects it away, and the water sprays over the deflector plate in an even pattern. Water keeps flowing until the main valve is shut.'],
    ['h', 'Sprinkler classifications'],
    ['ul', [
      'Commercial: for example industrial warehousing, manufacturing units, shopping centres, retail parks, office complexes, institutions such as universities, and waste recycling plants.',
      'Residential: for example care homes, residential homes, and student accommodation or rented property.',
      'Domestic: for example open plan loft conversions, private homes of 3 or more storeys with an open plan layout, multiple occupancy housing, open plan flats and houses, and buildings that are difficult to bring into line with the regulations.'
    ]],
    ['h', 'Types of sprinkler system'],
    ['ul', [
      'Wet pipe: the most common, used where there is no risk of freezing. Quick to react, because water is always in the pipes above the heads. Wet systems are required for multi-storey or high rise buildings and for life safety as well as property protection.',
      'Alternate: pipes full of water in summer, drained and filled with pressurised air in winter. Important for unheated buildings.',
      'Dry pipe: for places where freezing is an issue, avoiding burst pipes. The pipes always hold pressurised air and the control valve holds back the water. When a head opens, the drop in air pressure opens the valve and water flows to the fire.',
      'Pre-action: also filled with air, but water is only let in when a detector (such as a smoke detector) operates. Used where pipes full of water are unacceptable unless there is a fire, for example where there is a risk of freezing.',
      'Deluge and recycling: not strictly sprinkler systems, used only in special industrial cases.'
    ]],
    ['h', 'Water mist systems'],
    ['p', 'Water mist is newer than sprinklers and works differently: water is forced through micro nozzles to make a mist of much smaller droplets. These control, suppress or extinguish fires by cooling the flame and surrounding gases through evaporation, displacing oxygen through evaporation, and reducing radiant heat through the droplets themselves. Water mist is increasingly used in large data rooms and where flammable liquids are stored, and widely in the marine sector.'],
    ['ul', [
      'Open head: a nozzle that simply propels the water out, usually triggered by automatic fire detection (AFD).',
      'Closed head: a heat fractured bulb acts as a valve and releases the water, just like a sprinkler head.',
      'Cylinder systems: for smaller risks, with cylinders of water and nitrogen in or near the room and small pipes run to the nozzles.',
      'Tank and pump systems: work much like a sprinkler system, with a large water supply from the building\'s own supply.'
    ]],
    ['h', 'Interaction with passive fire protection'],
    ['p', 'Retrofitting water suppression into existing buildings, especially high rise flats, is a growing market. As regulations and codes are updated, suppression is now required in some situations where it was not before, for example flats of a certain height and layout. Retrospective compliance may not be mandatory but may be seen as desirable.'],
    ['p', 'Retrofitting means running pipes through existing compartmentation. Keep openings in compartment walls and floors as few and as small as possible, and seal the gaps with fire-stopping suited to the pipe and its supports, giving at least the fire performance required of the wall or floor.'],
    ['p', 'The CPVC caution from Module Two, Unit 3 applies: fire retardants and plasticisers in some fire-stopping products have reacted with CPVC sprinkler pipes and fractured them even with no fire. Follow the written guidance for the CPVC pipe, or get advice directly from the pipe manufacturer.'],
    ['h', 'Standards'],
    ['ul', [
      'BS EN 12845: fixed firefighting systems, automatic sprinkler systems: design, installation and maintenance.',
      'BS 9251: sprinkler systems for residential and domestic occupancies: design, installation, components, water supplies, commissioning and maintenance.',
      'BS 8458: water mist systems for domestic and residential use.',
      'BS 8489 series: water mist systems for industrial and commercial use.'
    ]],
    ['h', 'Further guidance'],
    ['ul', [
      'British Automatic Fire Sprinkler Association (www.bafsa.org.uk): represents manufacturers and suppliers of suppression systems.',
      'International Water Mist Association (www.iwma.net): supports the development, research and application of water mist systems.',
      'Fire Industry Association (www.fia.uk.com), Fire Protection Association (www.thefpa.co.uk) and BAFE (www.bafe.org.uk).'
    ]]
  ]
});

/* Unit 4: Signage and emergency lighting */
self.COURSE_READER.chapters.push({ id: 'm3u3', mod: 'm3', unit: 3, title: 'Unit 4: Signage and emergency lighting',
  source: 'Attendees Resource Pack, Module Three, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['h', 'Safety signs regulations'],
    ['p', 'Following the EC Safety Signs Directive of 1992, the Health and Safety (Safety Signs and Signals) Regulations 1996 cover the fire safety signs required at work. They cover illuminated signs; hand and acoustic signals (such as fire alarms and spoken communication); marking of pipework carrying dangerous substances; and signboards such as prohibition and warning signs, fire safety signs, fire exit signs and firefighting equipment signs. They apply wherever people are employed or have communal access, but not to labels used for supplying substances, products and equipment or transporting dangerous goods.'],
    ['h', 'Sign categories'],
    ['ul', [
      'Prohibition signs (fire prevention): red circle outline with a red diagonal line, possibly over a black symbol, with white text on a red block. Each shows a forbidden behaviour, for example "Do not use lift in the event of a fire".',
      'Escape route signs: green, with white text or symbols showing the way out. An exit route is one occupants generally know and use; a fire exit route is provided specifically for use in a fire emergency.',
      'Escape equipment signs: green with white text or symbols, showing what to do, for example to use an emergency door device.',
      'Assembly point signs: green with white text or symbols, marking an assembly point outside or a temporary safe area inside.',
      'Mandatory instruction signs (fire action): blue circle with white text and symbols, requiring actions that must be followed, for example "Fire door keep shut".',
      'Mandatory notices (fire safety management): combine several instructions, mandatory (blue), evacuation (green) and prohibition (red), placed in conspicuous places such as lift areas and by call points.',
      'Firefighting equipment location signs: red with white text and symbols, marking extinguishers or hose reels. Not formally required, but good practice in the UK is to add information on the extinguisher type and what it can and cannot be used on.',
      'Warning signs: a yellow triangle, possibly with a box, black symbols and text, identifying nearby danger. They may be combined with signs from other categories.'
    ]],
    ['h', 'Wayfinding signage'],
    ['p', 'Wayfinding signs in the stairwells of high rise residential buildings help the fire and rescue service identify floors and areas in low light and smoke, under the Fire Safety (England) Regulations 2022. They are now compulsory in all residential buildings with more than three storeys or an upper occupied storey over 11 m above ground.'],
    ['h', 'Where signs go'],
    ['p', 'Escape route signs should show the shortest route to a place of safety; where there are equally short alternative routes, each should be signed separately. Escape route signs take precedence over all other signs, and every change of direction, such as in corridors and stairwells, needs intermediate signs. Anyone escaping should always have an escape sign in sight wherever they must change direction, so signs must be within a normal field of vision:'],
    ['ul', [
      'Above doors: 2 m to 2.5 m from the floor to the base of the sign, as close to the centre line as possible.',
      'On walls: 1.7 m to 2 m from the floor to the base of the sign.',
      'Higher than 2.5 m may be considered in large open spaces, and signs viewed from a long way off should be bigger.'
    ]],
    ['p', 'UK law has no specific requirement for photoluminescent (glow in the dark) signs, but they are now common. They absorb natural and artificial light, and if the lights fail in a fire or other emergency, the sign glows strongly. The PSPA (Photoluminescent Safety Products Association) regulates them: Class A is the minimum, and Classes B, C and D are increasingly bright with longer decay times.'],
    ['p', 'Escape signs can also be lit by emergency lighting, or built into it to backlight the sign. Then the lighting must be positioned to light every sign along the escape route corridor.'],
    ['h', 'Emergency lighting'],
    ['p', 'If the mains supply is cut, especially in a fire, occupants must not be plunged into sudden darkness, which could put them in physical danger or increase panic. So as well as lit signs, emergency lighting may be designed in to come on automatically and give enough light for everyone to evacuate safely. Emergency lighting divides into standby lighting and emergency escape lighting.'],
    ['p', 'Standby lighting is the part that lets normal activities continue if the mains supply fails. Emergency escape lighting has three main forms:'],
    ['ul', [
      'Escape route lighting: lights escape routes such as corridors and stairways, and the location of firefighting equipment, so the building can be evacuated safely.',
      'Open area (anti-panic) lighting: for large public buildings such as shopping centres and exhibition halls, where many visitors do not know the layout and panic could follow an alarm. It helps them find the escape routes and exits.',
      'High risk task area lighting: for a limited range of situations where people are involved in a dangerous process, giving enough light to carry out shutdown procedures, for example in plant rooms.'
    ]],
    ['h', 'Where emergency lighting is needed'],
    ['p', 'National rules vary, but typical locations are: each final exit door; escape routes; corridor intersections; outside each final exit and on external escape routes; emergency escape signs; stairways, so each flight is well lit; changes in floor level; windowless rooms and toilets; firefighting equipment; fire alarm call points; equipment that must be shut down in an emergency; lifts; first aid equipment; and areas over a set size (60 m² in the HM Government fire safety risk assessment guide). Each item does not need its own light (luminaire), but the overall light level must make them all visible and usable.'],
    ['h', 'Types of emergency lighting'],
    ['ul', [
      'Self-contained luminaires: probably the most common. Each unit has everything needed to work alone: charger and changeover device, lamp, diffuser and backup battery. Connected to the local lighting circuit. Often wired to come on only when the power fails, a "non-maintained" system, which may need periodic functional tests to check the lamp. Where the public gather, the luminaire may need to be lit all the time, power cut or not: a "maintained" system, where the lamp condition can always be seen.',
      'Conversions of main luminaires: usually done by the emergency lighting manufacturer, who fits a conversion unit into an existing light. In a fitting with more than one lamp, normally only one is converted.',
      'Central battery systems: backup battery cells, transformers, a charging system and a control panel monitoring the mains. Found in medium to large installations where central control and testing are wanted. They can supply ordinary mains luminaires or special low voltage ones, often at or near full light output, so they suit places needing higher light levels, such as open areas and ceilings over 2.5 m. Battery life is usually at least 10 years.'
    ]],
    ['h', 'Interaction with passive fire protection'],
    ['p', 'As with detection and alarms, emergency lighting is likely to be upgraded during refits over the building\'s life, with new cabling passed through existing, working compartment walls. Everyone doing post-construction or maintenance work must understand the Module Two guidance and be able to show competence.'],
    ['h', 'Standards'],
    ['ul', [
      'Signs: BS 5499-1 (geometric shapes, colours and layout), BS 5499-2 (self-luminous fire safety signs), BS 5499-4 (escape route signing), BS 5499-5 (signs with specific safety meanings), BS 5499-6 (design of graphical symbols), BS 5499-10 (use of safety signs), BS 5378-2 (colorimetric and photometric properties), BS EN 60598-2-22 (luminaires for emergency lighting).',
      'Emergency lighting: BS 5266-1 (code of practice for emergency escape lighting), BS EN 1838 (BS 5266-7, lighting applications: emergency lighting), BS EN 50172 (emergency escape lighting systems), BS EN 60598-2-22 (emergency luminaires), BS EN 62034 (automatic test systems for battery powered escape lighting), BS EN 50171 (central power supply systems).'
    ]],
    ['h', 'Further guidance'],
    ['ul', [
      'HSE L64 (third edition, 2015): guidance on the Health and Safety (Safety Signs and Signals) Regulations 1996.',
      'Industry Committee for Emergency Lighting: ICEL 1006 Emergency Lighting Design Guide.',
      'Fire Industry Association (www.fia.uk.com) and Fire Protection Association (www.thefpa.co.uk).'
    ]]
  ]
});

/* Unit 5: Fire engineering */
self.COURSE_READER.chapters.push({ id: 'm3u4', mod: 'm3', unit: 4, title: 'Unit 5: Fire engineering',
  source: 'Attendees Resource Pack, Module Three, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Module One set out the main difference between prescriptive fire protection and fire engineering. This unit looks at fire engineering in more detail.'],
    ['h', 'Origins'],
    ['p', 'Fire engineering emerged as a distinct discipline in the early 20th century, separate from civil, mechanical and chemical engineering, in response to new fire problems from the Industrial Revolution. Early fire protection engineers worked out how to protect large factories, especially spinning mills and other manufacturing sites, and the insurance industry helped advance the profession and the development of fire protection systems and equipment.'],
    ['h', 'What fire engineering is'],
    ['p', 'Fire engineering is the application of scientific and engineering principles, rules and codes, and expert judgement, based on an understanding of how fire behaves and its effects, and of how people react and behave in fire, to protect people, property and the environment from the destructive effects of fire. It does this through:'],
    ['ul', [
      'Assessing the hazards and risks of fire and its effects: what is the risk of a fire, and what would its consequence be?',
      'Reducing potential fire damage through proper design, construction, arrangement and use of buildings, materials, structures, industrial processes, transport systems and so on.',
      'Evaluating, to the right level, the best preventive and protective measures to limit the consequences of fire.',
      'Designing, installing, maintaining and developing fire detection, suppression, control and fire related communication systems and equipment.',
      'Directing and controlling equipment and people in firefighting and rescue strategy and operations.',
      'Post-fire investigation, analysis, evaluation and feedback.'
    ]],
    ['p', '"Fire engineering", "fire safety engineering" and "fire protection engineering" are used in different parts of the world but mean the same thing. As a result, fire engineering can mean many things to many people, and covers a wide range of knowledge and competence.'],
    ['p', 'Fire engineering is about measurements and relationships backed by scientific study and applied to real problems, with experience and judgement contributing, as in other engineering disciplines. It evaluates fire hazard and risk and offers fire strategies and designs based on performance, not prescription:'],
    ['ul', [
      'The tools are the calculation methods (models) describing the measurements, relationships and interactions.',
      'The inputs are the physical data for those calculations, from measurement methods such as tests.',
      'The framework is the essential core and transfer of knowledge that allows an engineering approach, the education and training of users, and professional recognition of the discipline.'
    ]],
    ['h', 'What fire engineers are expected to know'],
    ['p', 'To gain a qualification through bodies such as the Institution of Fire Engineers, fire engineers are expected to have knowledge, at least in part and at the right level, of: fire science (fire chemistry and fire dynamics); fire protection engineering (active and passive); smoke control; interaction between fire and people, including means of escape; fireground operations; fire investigation; fire risk assessment and measurement, including fire insurance; fire safety of consumer items; energy sources; and fire safety design and management of buildings, industrial processes, transport activities, and cities and communities.'],
    ['h', 'Key drivers'],
    ['p', 'Fire engineering often forms the basis of design today, especially for major projects such as airport terminals, stadiums and large atrium buildings, which are so big that current technical guidance cannot overcome the design limits imposed by prescriptive regulations and codes.'],
    ['p', 'But a fire engineered design must not simply aim for the minimum regulation at minimum cost, sometimes called "value engineering": that is the difference between protecting people from a fire in a building and protecting the building itself from fire. Fire engineering design should consider:'],
    ['ul', [
      'Life safety: all occupants can leave in reasonable safety, or the risk to them is acceptably low; firefighters can operate in reasonable safety; and collapse does not endanger people, including firefighters, likely to be near the building.',
      'Loss control: the structure and fabric, the contents, and ongoing business viability.',
      'Environmental impact: the effect of the fire on adjacent buildings, and the release of hazardous materials into the environment.'
    ]],
    ['h', 'Fire engineering and passive fire protection'],
    ['p', 'Do not assume fire engineering removes the prescriptive use of passive fire protection. In recent years, though, it has become common to engineer out some measures a prescriptive approach would include, for example removing passive fire protection from secondary steel beams, or adjusting the limiting temperature of certain steel members. There may be no actual test evidence for this, with the judgement based on computer modelling or expert judgement.'],
    ['p', 'The fire engineering process must also fully understand "equivalency", for example comparing an untested solution with a tested one using what is known as a desktop judgement.'],
    ['h', 'Fire engineering for the whole life of a building'],
    ['p', 'Many of today\'s buildings could not be built without fire engineering, but for the safety of the occupants and the structure, the building\'s facilities management must fully understand how later changes and maintenance affect it. Changes over time can lead to redesign of the building\'s internal and external make-up, which can harm its overall fire performance if the original fire engineering principles are not understood. Poor maintenance, such as new penetrations through compartments left unrepaired or repaired incorrectly, can weaken the fire engineering assumptions and affect the building\'s overall fire performance.'],
    ['h', 'Standards'],
    ['ul', [
      'BS 9999: fire safety in the design, management and use of buildings.',
      'BS 9991: fire safety for residential buildings.',
      'BS 7974: application of fire safety engineering principles to the design of buildings.',
      'Department for Education BB 100: design for fire safety in schools.'
    ]]
  ]
});
