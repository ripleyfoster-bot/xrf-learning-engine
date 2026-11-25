/* IFE reading notes: Module Two (engine 1.5.0 reader chapters, IFE course 0.13.0).
   Ported from the original IFE app (content/reader-m2.js, v0.15.2), wording unchanged.
   Written in plain words from the Attendees Resource Pack, Module Two, Revision 3 2023.
   These are revision notes, not the pack itself: always check the official course material.
   One chapter per unit, linked to the module and unit with mod and unit, so the module screen
   offers "Read the unit" / "Read the module". Reading never counts towards mastery or exam scores.
   Chapter ids never change. Add new chapters at the END. */
self.COURSE_READER = self.COURSE_READER || { title: 'Reading notes', subtitle: 'Read each unit, or have it read to you',
  note: 'Revision notes in plain words, written from the ASFP course pack. Always check the official course material.', chapters: [] };

/* Introduction: passive fire protection and competency */
self.COURSE_READER.chapters.push({ id: 'm2u0', mod: 'm2', unit: 0, title: 'Introduction: passive fire protection and competency',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['h', 'What this module covers'],
    ['p', 'Module Two builds essential knowledge of the types of passive fire protection found in today\'s buildings, in seven units: the structural frame; walls, floors and ceilings; fire-stopping, penetration seals, cavity barriers and the building envelope; ductwork and dampers; doors, industrial shutters and hardware; fire resisting glazing; and fire retardant coatings.'],
    ['p', 'For each group of measures, the module looks at the passive fire protection objective, the generic options, points to consider, the relevant standards and testing, and further reading. The standards and testing sections are mainly for reference and later reading, so the course may not cover them in detail.'],
    ['h', 'Why passive fire protection matters'],
    ['p', 'Passive fire protection is vital to how a building performs in a fire. It is built into the structure to keep it stable, and into walls and floors to divide the building into areas of manageable risk. It restricts the growth and spread of fire so occupants can escape and firefighters can do their job. It comes either from the materials the building is made of, or from protection added to improve fire resistance.'],
    ['p', 'Fire resistance is the ability of parts of the construction, such as beams, columns, walls, floors and doors, to resist fire for set periods. These parts are:'],
    ['ul', [
      'Loadbearing elements, such as beams, columns, walls and floors, which must carry their load in a fire.',
      'Separating elements, such as doors, walls, glazed screens and suspended ceilings, which must stop fire passing through, whether by flames or by heat conduction.',
      'Elements that are both loadbearing and separating, such as loadbearing walls and floors, which must do both.',
      'Building services passing through separating elements, such as cables, pipes and fire resisting ducts, which must be fire-stopped so the service does not give fire an easy route.'
    ]],
    ['p', 'These are critical because they are often in concealed spaces, where fire can pass unnoticed, and that also makes it harder to check they were installed correctly.'],
    ['h', 'Competency in installation'],
    ['p', 'As Module One explained, passive fire protection must be correctly designed, specified, installed and maintained if the building is to behave as expected in a fire. By its nature it stays passive until there is a fire, and only then is its real performance shown.'],
    ['p', 'Unless responsibilities are clearly defined, specialist passive fire protection can end up with an inexperienced or unsuitable subcontractor. Without proper training, or the ability to read a manufacturer\'s instructions and limitations, the result is very likely to be an installation that is not fit for purpose.'],
    ['p', 'The requirements and responsibilities for passive fire protection must be stated clearly in the project contract, and those doing the work must have the expertise to install it to the manufacturer\'s printed instructions.'],
    ['h', 'What the guidance says about third-party certification'],
    ['p', 'Regional approved guidance stresses the importance of competent installers by referring to third-party certification:'],
    ['ul', [
      'Approved Document B (England): third-party certification and accreditation of installers is a way of making sure installations are done by knowledgeable contractors to proper standards, making the expected fire performance more reliable.',
      'Technical Handbook (Scotland): because performance depends on proper site installation, testing and maintenance, independent certification and accreditation of installers and maintenance firms gives confidence in the standard of workmanship.'
    ]],
    ['p', 'Without competent, verifiable installation there is no assurance that the product or system will work as intended in a real fire.'],
    ['p', 'Third-party certification can only come from a certification body that is itself accredited by UKAS, the United Kingdom Accreditation Service. It ensures:'],
    ['ul', [
      'An audit of the company\'s operating and management procedures, typically once a year.',
      'Regular inspection of ongoing site work.',
      'Competence assessment of site supervisors and installers.',
      'A certificate confirming the scope of product types the company can install under certification.',
      'A listing on the certification body\'s website, giving assurance to regulators, building owners, insurers, management contractors and others.',
      'The ability to issue the client a certificate of conformity for the work on each project, backed by the certification body.',
      'For fire stopping, labelling of the work done, to help identify the specification used.'
    ]],
    ['p', 'As well as being good practice, making sure of the right level of competence is essential for legal liability if there is a fire. Legal liability is covered later in the course.']
  ]
});

/* Unit 1: The structural frame */
self.COURSE_READER.chapters.push({ id: 'm2u1', mod: 'm2', unit: 1, title: 'Unit 1: The structural frame',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Building Regulations and national codes require buildings to be designed and built so that they stay stable for a reasonable period in a fire. They must not collapse early, so occupants have time to escape and the fire service can get in. Structural frames are usually concrete, timber or steel.'],
    ['h', 'Concrete frames'],
    ['p', 'Most concrete frames do not need extra passive fire protection, because they are designed to achieve the specified fire resistance period. Where spalling could be an issue, such as in a road tunnel, extra protection may be needed, and only products intended and tested for that use should be used.'],
    ['h', 'Timber frames'],
    ['p', 'Timber frames fall into two broad groups in fire:'],
    ['ul', [
      'Heavy timber construction, usually glulam or similar fabricated beams: fire resistance comes from a sacrificial layer of wood that chars in a fire.',
      'Lightweight timber framing: needs extra fire protection, usually a board system such as plasterboard.'
    ]],
    ['p', 'Exposed timber can be designed with extra sacrificial timber, so the outer part chars at a slow, predictable rate and protects the inner part. Otherwise, structural elements, including mechanical fasteners, can be insulated with one or more layers of fire resisting board, such as gypsum plasterboard or calcium silicate board, of a set thickness. The thickness depends on the density and make-up of the element, for example solid timber, glulam or Laminated Veneer Lumber (LVL).'],
    ['h', 'Steel frames'],
    ['p', 'Steel frames often need extra passive fire protection on some or all members. The most practical way to limit the steel temperature rise is to insulate it with proprietary products:'],
    ['ul', [
      'Reactive (intumescent) paint coatings, which swell when heated to form a protective char.',
      'Plaster or cementitious spray or trowel coatings.',
      'Dry cladding made from fire resisting boards or stone wool.'
    ]],
    ['p', 'Corrosion protection may also need considering. Some systems need no anti-corrosion primer; others need a compatible primer applied before the fire protection.'],
    ['h', 'System testing'],
    ['p', 'Whatever the protection, it is evaluated by testing a variety of structural members in fire resistance furnaces. The temperatures reached are analysed, and calculation and other methods are used to predict how much material is needed across the almost endless sizes and shapes of section available. The results belong to the system as tested AND the substrate it is applied to, not to the product in isolation.'],
    ['h', 'Loaded and unloaded data'],
    ['p', 'Loadbearing tests must show that the elements carry their load without collapse for the length of the test (loadbearing capacity). A loaded section is tested alongside a similar unloaded reference section to measure the effect of load and arrive at a correction factor, which is then used to adjust data from unloaded sections to reflect performance when fully loaded.'],
    ['p', 'Unloaded beam tests give a basis for judging how long a beam, girder, column or similar assembly, or a non-loadbearing wall, will keep doing its job under a controlled, standard fire exposure.'],
    ['h', 'Section factor (A/V)'],
    ['p', 'For steel, the fire resistance period achieved depends on the thickness of protection and the steel configuration, and is calculated from the size and weight of the section using the section factor, A/V:'],
    ['ul', [
      'A = surface area of steel exposed to the fire per unit length.',
      'V = volume of the section per unit length.'
    ]],
    ['p', 'In the past A/V was also written Hp/A: the heated perimeter of the exposed cross section divided by the total cross-sectional area.'],
    ['p', 'A thicker, heavier section heats up more slowly, so it needs less protection to stay below the critical temperature than a thin, light section.'],
    ['h', 'Limiting temperature'],
    ['p', 'Building fires regularly pass 1000°C within 30 to 60 minutes, yet heavily loaded steel of any grade loses its design margin of safety (about 40%) at around 550°C, and as the temperature climbs further the strength loss is rapid and significant. So the steel temperature rise must be limited to keep enough strength for the frame to carry its load.'],
    ['p', '550°C used to be seen as the fixed limiting temperature before collapse. It is now recognised that the limiting temperature varies with:'],
    ['ul', [
      'The temperature profile.',
      'The load, which depends on the building\'s use. A storage facility, for example, needs a lower limiting temperature.',
      'The structural model. Engineers increasingly model every member to give a limiting temperature that makes the most economical use of fire protection. These temperatures apply to that building only.'
    ]],
    ['p', 'A common case where temperature gradients matter is a beam supporting a concrete slab. The slab shields the top of the upper flange from the fire and acts as a heat sink, which can give a difference of more than 200°C between the upper and lower flanges in a standard fire test. Tests show the limiting (lower flange) temperature of fully loaded, non-composite beams carrying concrete slabs is about 620°C, compared with 550°C for beams exposed on all four sides.'],
    ['p', 'The ASFP Yellow Book gives the correct thickness of any third-party tested fire protection material for the required fire resistance period, based on the size and weight of the steel section. In the course example, a 914 mm x 305 mm x 201 kg universal beam protected on 3 sides has a section factor of 105, and the chosen reactive coating needs a dry film thickness of 0.93 mm. The same section factor needs different thicknesses on different steel configurations. Products may be assessed at several limiting temperatures, which can change the applied thickness markedly, and multiple temperature analysis is used in fire engineered solutions.'],
    ['h', 'Cellular beams'],
    ['p', 'Cellular beams, with multiple openings in the web (usually but not always evenly spaced), are now widely used, especially in offices. They can span further than conventional hot rolled sections, and services can run through the openings, reducing the overall floor depth. Many opening sizes and spacings are available, and the steel between two openings is called the web post.'],
    ['p', 'They are made in one of two ways: cutting along the web of a hot rolled section (usually a universal beam or column) to a profile, separating the halves and welding the Tee sections back together to make a deeper beam (usually from one section size, though different sections give an asymmetric beam); or welding three plates together and cutting the openings into the web.'],
    ['p', 'For fire protection the key point is the failure mode. Rolled sections usually fail in bending, so the lower flange temperature matters most. Cellular and castellated beams usually fail by web post buckling, so the web post temperature matters most, and the web post dimensions strongly affect fire performance. A limiting temperature for a cellular beam needs a structural model by a suitably qualified engineer: default limiting temperatures cannot be used.'],
    ['h', 'Generic options: reactive (intumescent) coatings'],
    ['p', 'No single material suits every design, so a range of systems is available.'],
    ['ul', [
      'Thin film coatings: designed for the cellulosic fire condition, in water based or solvent based types. Usually applied by airless spray in several coats to build the required thickness, or by brush or roller. Generally give up to 1 hour across most steel configurations and section factors, with some offering 90 minutes and 2 hours over a limited section factor range.',
      'Thick film coatings: generally epoxy, designed for the hydrocarbon fire condition, spray applied to the profile of the element, usually with reinforcement. Historically rare in buildings but common offshore and in petrochemical plants, tested at hydrocarbon temperatures for up to 4 hours. Their use in civil construction is growing, especially for long term external durability, as they give a tough, hard finish.'
    ]],
    ['p', 'Unlike boards or mineral sprays, intumescent coatings react to fire: what looks like decorative paint turns into a layer of carbonaceous char that only forms when heated. The char can be 50 times the thickness of the original coat, forming as the paint and steel heat above 275°C. At around 200°C the acid generator produces a mild acid, which combines with a blowing agent to form a gas, and the coating swells into an insulating char. The carbonific then burns to provide heat, and this continues until the coating is used up.'],
    ['p', 'Thick film coatings work the same way but use harder epoxy resins. They expand more slowly, to only about 5 times their original thickness, and the much tougher char can withstand the high temperatures of hydrocarbon and jet fires.'],
    ['h', 'Generic options: plaster or cementitious coatings'],
    ['p', 'These mineral coatings are made from vermiculite or perlite cementitious premixes, gypsum with vermiculite or synthetic aggregate premixes, cementitious mineral fibre premixes, or man-made mineral fibre (stone wool). By density:'],
    ['ul', [
      'Higher density spray or trowel systems: typically 675 to 800 kg/m³.',
      'Medium density spray systems: typically 200 to 400 kg/m³.',
      'Low density ("dry" spray) systems: 120 to 200 kg/m³.'
    ]],
    ['p', 'All give at least 3 hours, and most up to 4 hours, across most steel configurations and section factors. They can be applied as a profile (following the shape of the member), a box (onto pre-fitted metal lathing), or solid (applied to the member and filling in the web area). They stay in place without changing structure for the design life of the fire, absorbing heat to keep the steel below its critical temperature. Some suit both internal and fully exposed conditions, and some are designed for hydrocarbon as well as cellulosic fires. They are applied with specialist pumps or, for some materials, by hand trowel.'],
    ['h', 'Generic options: boards and stone wool cladding'],
    ['ul', [
      'High density boards: nominally 750 to 1000 kg/m³.',
      'Medium density boards: nominally 200 to 750 kg/m³.',
      'Low density boards: nominally 100 to 200 kg/m³.',
      'Blankets: nominally under 100 kg/m³.',
      'Pre-cased: density depends on the finished surface material.',
      'Preformed: standard sizes or made to order.'
    ]],
    ['p', 'All give at least 2 hours, many up to 4 hours, across most steel configurations and section factors. Materials include fire resistant plasterboard, glass fibre reinforced gypsum, calcium silicate (with or without vermiculite), man-made stone wool, bonded exfoliated vermiculite, ceramic fibre (as blanket) and preformed products.'],
    ['p', 'Except for blankets, which can also follow the section profile, boards are generally used to box in the section. They are mainly for internal use, though some allow sheltered external use, and casings with a suitable external finish may be considered for exterior use. Like sprays, they stay in place unchanged for the design life of the fire, absorbing heat. Fixing methods vary by manufacturer, many with patented clip and screw systems, and the installation method can affect the thickness needed for a given fire resistance period.'],
    ['h', 'Junctions between different systems'],
    ['p', 'ASFP best practice is to protect each individual steel or structural element entirely with the same fire protection system, and to avoid mixing systems on one element, because testing every possible interface is impractical. Contact the manufacturers for advice before adding a system next to an existing one. Overlapping or abutting different systems needs care, because they may behave differently in fire, for example shrinking back at junctions. The procedure depends on which system goes on first and how long before the second can be added.'],
    ['h', 'Points of consideration'],
    ['p', 'In theory any generic system can go on most steel sections, but the choice is governed by:'],
    ['ul', [
      'Fire rating needed: cellulosic or hydrocarbon.',
      'Limiting steel temperature.',
      'Time (fire resistance period).',
      'Appearance, unless hidden.',
      'Environmental conditions such as humidity and temperature during application, before occupation and in use.',
      'Lifetime to first major maintenance.',
      'Robustness against impact damage.',
      'Future adaptation, fit-out (partitions), capital and maintenance costs.',
      'Whether protection is applied off-site or in situ on site.'
    ]],
    ['p', 'The manufacturer will always give detailed guidance on whether the product suits a design brief. Product information should include a clear description (thickness range, density, durability and so on), clear statements of fire protection periods, thickness tables for each section type within a suitable A/V range, surface preparation and primer type and thickness where relevant, fixing or application details with a clear installation specification, any specialist equipment needed, surface preparation and top coat finishing, supporting test evidence (or how to get it), relevant approvals, health and safety data, repair requirements if damaged, and limitations such as application temperatures.'],
    ['p', 'It may not be obvious on completion whether structural fire protection has been installed correctly, and some signs call for further investigation.'],
    ['h', 'Standards and testing'],
    ['p', 'Which standards apply depends on where in the world the product is installed:'],
    ['ul', [
      'BS 476 Parts 20/21: used in the UK and many countries that traditionally use British Standards, and gradually being replaced by European standards, recognised in the UK through Approved Document B: 2006 (England and Wales) and its equivalents in Scotland, Northern Ireland and the Republic of Ireland. The European standards are intended to remove technical barriers to trade within Europe.',
      'EN 13381 series: used throughout Europe, formally standardised as EN 13381-4 (non-reactive products), EN 13381-8 (reactive products) and EN 13381-9 (cellular beams). Loaded and unloaded specimens are tested, as in the UK, but technical differences from the British Standard make an exact comparison difficult.',
      'ISO 834: the international standard, similar to the others and being revised to align with the European standard. ISO 834-10 (test method) and ISO 834-11 (assessment method) cover BS EN 13381-4 and BS EN 13381-8; ISO 834-13 (cellular beams) will become BS EN 13381-9; draft ISO 834-14 will become EN 13381-10 (unloaded tension rod testing).'
    ]],
    ['p', 'In every case the evaluation follows a time and temperature curve over a set period. Ideally the specimen matches the element in its real orientation: loaded beams are tested horizontally with protection on three sides, and columns vertically with protection on all sides, hence the terms "three sided" and "four sided" exposure. Results relate to the section size and loading and the thickness and performance of the protection. Testing every combination would be prohibitive, so assessment procedures estimate the performance of a range of sections from a limited number of tests.'],
    ['h', 'Further reading'],
    ['ul', [
      'ASFP Yellow Book: Fire protection for structural steel in buildings, 5th edition, volumes 1 and 2.',
      'ASFP Technical Guidance Documents: TGD 2 (sprayed mineral coatings), TGD 8 (junctions between different fire protection systems), TGD 10 (refurbishment of structural steelwork), TGD 11 (specification and on-site installation of intumescent coatings), TGD 13 (over cladding of reactive coatings), TGD 14 (installation and inspection of board systems), TGD 15 (installation and inspection of sprayed non-reactive coatings), TGD 16 (off-site applied thin film intumescent coatings), and a best practice guide for specifying reactive coatings in preparation.',
      'ASFP Guide to Passive Fire Protection for Fire Risk Assessors, and ASFP Ensuring Best Practice for Passive Fire Protection in Buildings.',
      'Structural Timber Association: Structural timber engineering bulletin 7.',
      'ASFP YouTube video: Fire protection to the structure of the building.'
    ]]
  ]
});

/* Unit 2: Walls, floors and ceilings */
self.COURSE_READER.chapters.push({ id: 'm2u2', mod: 'm2', unit: 2, title: 'Unit 2: Walls, floors and ceilings',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Each type of fire resisting wall, floor and ceiling does a different job in resisting the spread of fire and smoke, so it is important to know the types.'],
    ['h', 'Fire walls'],
    ['p', 'A fire wall is a separating element designed to stop fire spreading from one side to the other for a set time. Fire walls divide buildings into compartments and enclose special fire hazards and protected escape routes. Most must resist fire from either side, so they are often symmetrical. Depending on location they may be loadbearing, and most must keep structural stability for the fire period as well as giving integrity and insulation. They may separate production from storage, isolate high risk production areas, or simply separate areas with different uses.'],
    ['h', 'Compartment walls common to two or more buildings'],
    ['p', 'A compartment wall shared by two or more buildings (for example two terraced houses) or separated parts of a building (for example flats in a block) is fire resisting construction that restricts fire spread. It runs continuously from the foundations to or through the roof, and is stable enough in fire to survive the collapse of the construction on either side without collapsing itself.'],
    ['h', 'Compartment walls and floors'],
    ['p', 'Compartment walls and floors keep a fire in its compartment of origin and stop it spreading sideways or upwards. Compartmentation is the first line of defence in any fire strategy. Its objectives are:'],
    ['ul', [
      'To prevent rapid spread of fire and products of combustion that could endanger occupants.',
      'To stop a small fire growing to threaten occupants, people near the building, and firefighters who may need to go in. Compartments give clear lines of safety for firefighters and occupants.'
    ]],
    ['p', 'Allowable compartment size depends on the building\'s height and use and on how effectively firefighters can intervene. A dependable sprinkler system may allow larger compartments.'],
    ['p', 'A compartment wall below a service void, such as a suspended ceiling, should continue up through the ceiling so fire and smoke cannot spread through the void. Junctions of compartment walls and floors with each other must keep the expected fire resistance continuous. Anything passing through, including structural elements, should be fire-stopped where it penetrates, with the opening kept as small as practicable, and the design must make sure a penetrating element failing in one compartment does not cause failure in the next.'],
    ['p', 'Junctions with external walls and roofs must also keep fire resistance continuous. Resilient fire stopping systems are recommended where compartment walls meet roofs, and double skinned roof sheeting should have bands of limited combustibility material centred over each compartment wall. Most guidance documents give allowable compartment sizes and junction details. Insurers may set higher requirements than the Building Regulations, to limit damage to the property and within the "protected zone" either side of the compartment wall.'],
    ['h', 'Compartmentation fire performance'],
    ['p', 'The fire resistance required depends on:'],
    ['ul', [
      'The specified fire resistance period.',
      'The height of the top floor above ground and the building\'s use (its purpose group).',
      'Whether fire resistance is needed from one side or both sides.',
      'The type of performance needed: stability, integrity and insulation.'
    ]],
    ['h', 'Fire resisting floors'],
    ['ul', [
      'Timber joist floors: above certain temperatures the timber chars and is consumed steadily but predictably. Timber thickness is critical and must be correctly specified. Char rate is typically 0.5 to 0.8 mm per minute. Fire resistance usually comes from protection to the underside, normally fire resistant boards such as plasterboard, plus enough sacrificial timber in the joists.',
      'Concrete floors: contain trapped moisture and may have steel reinforcement. In fire the moisture turns to steam, the pressure builds, and it can escape violently, blowing off large pieces in explosive spalling. The concrete protects the reinforcement until spalling exposes it; the steel then expands substantially and threatens the floor. The concrete cover over the reinforcement is therefore critical and must be correctly specified.',
      'Composite floors: a profiled metal deck with poured concrete topping. The metal conducts heat sideways and tries to expand. The temperature rise in critical parts may be slower than in concrete alone, but the floor is fixed to the steel frame by shear connectors. Steam in the concrete can force the decking off, distorting it and opening gaps that lead to failure, and the composite floor may finally deform and sag under the weight of the concrete.'
    ]],
    ['p', 'All floors can be improved with added passive fire protection suited to the floor type. These systems insulate the timber, concrete or steel for set periods. How they protect depends on the system, so careful design based on fire test evidence is essential, and the manufacturer\'s test evidence must be understood and built into the specification. The choice also matters if floor deformation is not to cancel out the protection: some materials cope less well with deformation and may fracture.'],
    ['h', 'Active fire curtain barriers'],
    ['p', 'Active fire curtain barriers form compartments or protected routes and can replace traditional non-loadbearing walls, ceilings, fire doorsets or glazing. They can also give flexible compartmentation where the alternative might be a suppression system. They generally consist of a fire resistant fabric in a compact steel housing, hidden while retracted until an alarm or detector signal makes them descend into their fire position.'],
    ['p', 'A curtain may be pleated for three dimensional designs and is deployed on activation of the fire alarm to provide the fire resisting construction a wall, floor or door would normally give. Typical uses: atriums, lobbies and receptions, external boundary protection, openings in walls, compartmentation, stairwells, lifts and escalators.'],
    ['ul', [
      'Vertical curtains: fabric wound on a metal roller in a metal box above the opening, usually driven by an electric motor. A weighted metal bar runs along the bottom edge, and each side runs in a vertical metal channel fixed to the sides of the opening. The motor connects through a power supply to a control panel linked to a local detector or the fire alarm panel. Deployment is usually started by the fire alarm, but must also fail safe by gravity.',
      'Horizontal curtains: fabric on a metal roller in a metal box to one or both sides of the opening, usually motor driven. A tension bar on the leading edge stiffens it and engages a receiving channel on the opposite side, or a male and female joint between two curtains, and the curtain runs in horizontal channels. Deployment is usually by the fire alarm, but must also fail safe by gravity or dual power supplies.',
      'Folded or pleated curtains: folded fabric fixed at the top in a metal enclosure and at the bottom to a weighted metal tray, usually motor driven. Where it meets supporting construction at each vertical edge it runs in vertical channels; circular or multi-faceted curtains usually need none. Deployment is usually by the fire alarm, but must also fail safe by gravity.'
    ]],
    ['h', 'Fire resisting ceiling membranes'],
    ['p', 'A fire resisting ceiling membrane can be critical to a building\'s fire resistance, either to protect a structure above (such as a timber floor or steelwork) or to separate building services from the space below. Here the ceiling membrane itself is the separating element. Do not confuse it with a loadbearing floor system that includes a boarded ceiling, where the whole floor (joists, deck and other components) is the separating element.'],
    ['p', 'Documentary test evidence is essential to show the system meets the right fire resistance for the application, and it must be designed, specified and built exactly to the manufacturer\'s instructions. Light fittings and other penetrations must have the same proven fire resistance and suit the ceiling type. The design must allow for parts of the ceiling being removed for maintenance or access, with management procedures in place so the ceiling is restored to its original condition.'],
    ['h', 'Generic options'],
    ['ul', [
      'Loadbearing fire walls: part of the structure, so usually materials with inherent fire performance such as precast, preformed or reinforced concrete, brick or block, typically capable of up to four hours\' fire resistance. They can also be steel or timber studs, which rely critically on the correct type and number of layers of protection board.',
      'Fire resisting floors: usually timber, concrete, or metal deck and concrete. Fire resistance depends on the material, its behaviour in fire, and how the parts are fixed together.',
      'Compartment walls and floors: depending on make-up, also called fire barriers or fire resistant partitions. Options include partitions faced with gypsum plasterboard, gypsum fibre board, glass reinforced gypsum, glass reinforced cementitious board, cellulose reinforced cement based board, calcium silicate board or steel faced board; fire resisting glazing; and fire barrier systems.'
    ]],
    ['p', 'Fire barrier systems, generally made from stone wool, carry a partition\'s fire resistance up above ceiling level, extending the fire separating element into the roof space with the same fire resistance as the partition. Fire barriers have a higher fire performance than cavity barriers, and cavity barriers should not be used as part of a compartment wall.'],
    ['h', 'Suspended ceilings and raised floors'],
    ['p', 'A fire resisting ceiling covers the top of a room and is generally not structural: it is a finished surface hiding the underside of the roof or the floor above. It is usually suspended from the structure so pipes and ducts can run above it, and is generally made from gypsum, stone wool or calcium silicate products on a lightweight steel frame.'],
    ['p', 'A fire resisting raised floor works the same way as a suspended ceiling, protecting the services running beneath it (common in offices) for the required fire performance. It can be made from gypsum, multi-layer chipboard or mineral wool.'],
    ['h', 'Points of consideration'],
    ['p', 'Compartmentation is governed by the minimum requirements of local regulations and by the internal design that meets the client\'s brief. Many combinations of the options above may be used, but in every case fire must not get through the compartment for the set period, whatever passes through it, such as doors or services. Factors include:'],
    ['ul', [
      'The fire rating required.',
      'Robustness against impact damage.',
      'Future adaptation, such as new services penetrating the wall or floor.',
      'Access for future inspection.'
    ]],
    ['p', 'The specification should cover: a clear description of the system, its components and installation; clear fire performance periods for the intended use; how it interacts with other construction; for partitions, the type, thickness and number of board layers, height limits, framework (studs, head and base track), board fixing method, and type, length and diameter of fixings; assembly quality; any surface treatment; specialist equipment; for active fire barriers, the suitability of the fire alarm system; supporting test evidence; approvals; health and safety data; repair if damaged; and any limitations.'],
    ['h', 'Standards and testing'],
    ['ul', [
      'BS 476 Part 20:1987: general principles of fire resistance testing for elements of construction.',
      'BS 476 Part 21:1987: fire resistance of loadbearing elements.',
      'BS 476 Part 22:1987: fire resistance of non-loadbearing elements. For partitions it measures two criteria: integrity and insulation.',
      'BS 476 Part 23:1987: the contribution of components to the fire resistance of a structure.'
    ]],
    ['p', 'European classifications are in EN 13501 Part 2 (classification using data from fire resistance tests, excluding ventilation services). Test results for loadbearing capacity, integrity, insulation and so on are rounded down to a set list of classes: R for loadbearing capacity, E for integrity and I for insulation. So a loadbearing wall with loadbearing capacity of 155 minutes, integrity of 80 minutes and insulation of 42 minutes is classified R 120, RE 60 or REI 30.'],
    ['p', 'The basic test principles are broadly the same as the BS (and ISO) methods, but the EN standards are more rigorous, with new procedures to satisfy all member states. Each standard has a field of direct application clause listing constructions that differ from the test specimen but to which the result automatically applies. The main methods are BS EN 1363-1 (general requirements), BS EN 1364-1 (non-loadbearing walls), EN 1365-1 (loadbearing walls) and EN 1365-2 (loadbearing floors and roofs).'],
    ['p', 'Active fire curtains are tested under BS EN 1634-1 (fire resistance of doors, shutters and openable windows, adapted for curtains): a representative curtain is mounted on the opening of a furnace, normally 3 m wide by 3 m high, run to a standard heat and pressure regime, and assessed for integrity and insulation. BS EN 1634-3 (smoke control, adapted for curtains) mounts a sample on a 3 m by 3 m air leakage chamber run to a standard pressure regime and measures air leakage.'],
    ['h', 'Further reading'],
    ['ul', [
      'ASFP Purple Book: Fire resisting partitions, 2nd edition.',
      'ASFP Black Book: Active Fire Curtain Barrier Systems, Compartmentation and Protected Routes, 1st edition.',
      'ASFP Guide to Passive Fire Protection for Fire Risk Assessors, and ASFP Ensuring Best Practice for Passive Fire Protection in Buildings.',
      'ASFP YouTube video: Construction of fire resisting walls, floors and ceilings.'
    ]]
  ]
});

/* Unit 3: Fire-stopping, cavity barriers and the envelope */
self.COURSE_READER.chapters.push({ id: 'm2u3', mod: 'm2', unit: 3, title: 'Unit 3: Fire-stopping, cavity barriers and the envelope',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Compartmentation divides a building into manageable areas of risk to stop smoke and fire spreading, let occupants escape and give firefighters safe access. For it to work, every imperfection and every breach of a wall or floor, by services or building joints for example, must be properly sealed to restore the compartment line.'],
    ['h', 'Fire-stopping'],
    ['p', 'Fire-stopping seals openings, imperfections of fit and design tolerances between fire resisting walls, floors and ceilings to restrict the passage of fire and smoke. Fire-stopping products should have at least the same fire resistance as the element they are installed in. Openings for pipes, ducts, conduits and cables through a fire barrier should be:'],
    ['ul', [
      'As few as possible. Some services, such as ducts and dampers, should ideally have their own separate openings.',
      'As small as practical.',
      'Fire-stopped, allowing for thermal movement in the case of metal pipes and ducts.'
    ]],
    ['p', 'Fire-stopping may also need to extend along the service, so heat is not conducted along it to the side away from the fire (insulation performance). Whatever temperature the fire reaches, the non-fire face of the compartment must not rise by more than an average of 140°C, or by more than 180°C at any one point, above the starting temperature for the set period. To achieve this:'],
    ['ul', [
      'Gaps around openings must be sealed so the required fire resistance period is kept.',
      'Penetrations such as plastic pipes and cable trays must be properly supported so they do not collapse and let fire through.',
      'All gaps around penetrations must be sealed and, where relevant, allow the service to expand or move freely in normal service without breaking the seal, for example fire ducting and metal pipes.'
    ]],
    ['p', 'Fire-stopping is a generic term for many products and systems, grouped as:'],
    ['ul', [
      'Penetration seals: where services pass through fire separating elements or compartment walls and floors.',
      'Linear joint seals: between fire resisting elements, for example where a wall meets a floor, possibly needing to accommodate movement.',
      'Small cavity barriers: at imperfections in the building, such as where walls and floors meet cladding or curtain walling, between separating walls and a roof, and over and between the leaves of masonry walls.',
      'Large cavity barriers: subdividing large roof spaces and underfloor voids.',
      'Open state cavity barriers: for example in rain screen cladding, open when cold to let air move for ventilation, closing in a fire to stop its spread.'
    ]],
    ['h', 'Penetration seal options'],
    ['ul', [
      'Ablative coated stone wool batts or boards: "ablative" means to carry away, so the coating is a sacrificial layer that absorbs heat and releases it as gas, protecting the stone wool. Can give up to four hours depending on the integrity and insulation specification, but performance is usually restricted, which may make them unsuitable for large voids. Used through compartment walls and floors, and new services can easily be added. Blank seals can be fitted for future services and then reinstated, using the same manufacturer\'s products unless an assessment covers an alternative. Batts are friction fitted to clean, dust free sides of the opening and around services, with a fire resistant sealant tested with the batt on all batt to batt joints and raw edges, and usually a mastic fillet round the outer face perimeter and services. Some need structural or secondary support; a horizontal seal needing to bear load needs a separate loadbearing provision, such as steelwork and grating.',
      'Sealants and mastics (for example silicone, acrylic): gun or trowel applied into an opening and around suitable services where testing supports it, and used with coated batts, in small openings, complex penetrations and imperfect fits. In linear joints with movement, use a sealant that can accommodate it, so the seal holds in service and in fire. The ratio of joint width to depth is critical to fire performance.',
      'Mortars (compounds): gypsum or cementitious powder with lightweight fillers, reinforcement and modifiers, mixed with water to give a rigid seal, some loadbearing. Getting the water mix right is important, especially for loadbearing seals. Mainly for concrete and masonry walls and floors, though some work with lightweight partitions or timber floors. Blank seals can be fitted. When making new holes in cured mortar, non-hammer diamond drilling is normally preferred, to avoid breaking the bond with the substrate.',
      'Bags and pillows: non-combustible fabric enclosing a filling, which may be intumescent, for temporary or permanent sealing where services such as cables pass through. Easy to remove, so useful where services are often re-routed and as adaptable protection during construction. Must go in with the right orientation, packing density and staggered overlap. Normally self-supporting in walls, but large openings with few services may need steel mesh on both sides. Usually the whole bag length sits within the substrate.',
      'Plugs and blocks: rigid or flexible, made from bonded vermiculite, stone wool, gypsum or cementitious materials, polyurethane, modified rubber and so on. Some are inherently fire resistant, some rely on an intumescent coating, some are made from intumescent material. Rectangular, cylindrical or conical, plus trapezoidal plugs for openings under profiled metal decking. Used singly or in layers, loose laid, friction fitted or bonded, some with sealant on joints. Useful where services are re-routed occasionally. Silicate based plugs, such as bonded vermiculite, may need extra protection in high humidity.',
      'Cable transits and sleeves: preformed units that make it easy to remove, replace or add cables later, some with blast and high water table resistance. Ideal in active working environments where shutting down to replace traditional fire-stopping would be disruptive. Mechanically assembled and opened or closed by hand.'
    ]],
    ['h', 'Loadbearing seals'],
    ['p', 'Floor openings, especially in service risers, can take foot traffic during maintenance, so the seal (almost always a mortar) must resist the load, or a loadbearing platform of secondary steelwork and grating must be provided. Some materials bear enough load on their own, usually to the standard for workspaces and cupboards in BS 6399, but always check site requirements. Wet applied systems need time to cure before they can take load, and the installer must put up warning signs and temporary barriers meanwhile. The ASFP does not recommend large non-loadbearing seals (such as batts) protected only by barriers and signs: use loadbearing seals, limit non-loadbearing seals to, for example, 200 mm x 200 mm, or provide a loadbearing platform.'],
    ['h', 'Pipe closures'],
    ['p', 'Plastic pipes, plastic trunking, and insulated steel or plastic pipes soften and collapse when heated, so something must close off the opening. Pipe closures do this by squeezing the softened pipe shut. All contain an intumescent compound that expands in fire and presses on the pipe (or its insulation), creating a constriction; some also have a mechanical device. The four main types:'],
    ['ul', [
      'Pipe collars: have an outer casing that restrains the intumescent, so they can be surface fixed to, or built into, the separating element. Normally fitted on the fire side; with fire risk on both sides, each side may need one. The fixing must not be compromised by fire, some fixings are unsuitable, and the manufacturer\'s instructions must be followed. Mostly designed for solid walls and floors and drywall.',
      'Pipe wraps: no casing, so they must sit inside the separating element, which restrains the intumescent. Fitted in an oversized hole around the pipe; two may be needed for fire risk on both sides. Position matters: many wraps on soil pipes through floors must sit at the bottom of the opening to work. A wrap tested in a rigid wall may not work in a flexible wall without framing out. Newer wraps with ceramic or fibreglass casings may suit drywall or coated batts: check with the manufacturer.',
      'Insulated graphite pipe sleeves: stone wool sections impregnated with graphite, usually tested on plastic and metal pipes in different substrates, vertical and horizontal.',
      'High pressure exerting (HPE) sealants: installed in an oversized opening around the service, to a set annular gap and depth, on both sides if there is fire risk on both. Check the backing material is approved. As with wraps, a rigid wall test may not cover a flexible wall without framing out, although some manufacturers have data for it.'
    ]],
    ['p', 'Always check that the fire test evidence covers the actual end use.'],
    ['p', 'Caution, CPVC pipes: take care fire-stopping around chlorinated polyvinyl chloride (CPVC) sprinkler pipes. Fire retardants and plasticisers in some fire-stopping products have reacted with CPVC and fractured the pipes, even with no fire. Check compatibility with the pipe and fire-stopping manufacturers.'],
    ['h', 'Ducts and dampers'],
    ['p', 'The fire performance of fire resisting and smoke extraction ducts, fire and smoke control dampers and their penetration seals is set by product-specific fire tests, which include a specified fire-stopping system and significant support for the duct or damper. These should not be swapped for other systems unless extra information justifies it. Cable and pipe penetration seals are not suitable for ducts and dampers unless proven by test. The tests are BS 476 Part 24 for fire resisting and smoke extraction ducts, and EN 1366: Part 1 ventilation ducts, Part 2 fire dampers, Part 5 service ducts and shafts, Part 8 smoke extraction ducts, Part 9 single compartment smoke extraction ducts, Part 10 smoke control dampers and Part 12 non-mechanical fire barriers.'],
    ['p', 'To meet both integrity and insulation, ductwork must be insulated to stop heat passing through the seal; insulation can be waived only as part of a proper fire engineered case. Dampers must be supported and restrained back to the element or adjacent structure in a way that works in fire and allows thermal movement when cold, and must be in line with the element unless the manufacturer has EN 1366 test data allowing "out of line" installation.'],
    ['p', 'Avoid mixed penetrations (ducts, dampers, pipes and cables in one opening) wherever possible: heat and expansion from a duct harm the fire resistance of other services, and because ducts are tested to a different standard, a mixed penetration cannot strictly be validated by test. If unavoidable, get advice and a seal design from a UKAS accredited laboratory, a suitably qualified fire consultant, or a fire engineer experienced in mixed penetrations.'],
    ['h', 'Partial penetrations and patressing'],
    ['p', 'Partial penetrations, such as downlighters, sockets, switches and sound systems, can let heat into the cavity of a wall, floor or ceiling and cause early failure. Where a service enters one side but does not come out the other, a device is needed: socket box inserts, putty pads, intumescent pads, downlighter covers, fire hoods or boxes, conduit fillers and so on. Whatever is used must be proven by test or assessment so the element\'s overall performance is not compromised. At present these are tested ad hoc, based on BS 476 Part 20 / EN 1363-1 exposure and the wall or floor requirements of BS 476 Parts 21 or 22 / EN 1365-2; CEN is developing a method. The ASFP recommends asking the manufacturer for test and assessment evidence that covers all relevant factors, such as outlet type, its position relative to the floor, and the wall construction (timber or metal framing).'],
    ['p', 'Patressing applies a penetration seal (for cables and pipes) to the face of the element rather than within its thickness, where normal installation is impossible or impractical. Systems include batt and mastic and some tested patress devices. Installers often use it ad hoc, so it must be covered by fire test data or by engineering judgement from the manufacturer. Specialist installation and following the manufacturer\'s instructions are even more critical here.'],
    ['h', 'Linear joint seals'],
    ['ul', [
      'Preformed elastomeric seals: elastomeric foam, sometimes around stone wool and sometimes with reinforcing sheets, which may be intumescent, supplied in strips. Common at movement joints such as floor to wall. Compressed by hand and pushed into the gap; the correct size must be used to allow both expansion and contraction.',
      'Two-part fire-stopping foams: silicone or polyurethane, two components that foam and expand when mixed, curing at room temperature into a highly resilient seal of up to 120 minutes integrity and insulation. They can stop cold smoke (and halon gas where permitted) and resist water well, including flooding.',
      'Polyurethane (PU) foams: one-component aerosols that set at room temperature and fit difficult spaces. They usually have a very restricted fire field of application, are generally unsuitable for service penetrations, pipes and large or complex seals, and testing shows limited use, for example gaps around door frames and small simple penetrations, with shorter fire periods than silicone foams. Work within the product\'s limitations.'
    ]],
    ['p', 'Neither two-part nor PU foam floor seals are loadbearing. Foams suit small service openings, especially where access is difficult or spaces between groups of services are complex.'],
    ['h', 'Cavity barriers'],
    ['p', 'A cavity barrier is a construction, other than a smoke curtain, that closes a concealed space, such as a cavity wall or ceiling void, against smoke or flame, or restricts their movement within it. They need special design attention: once covered up they are hidden and hard to inspect, yet they only work once covered, and opening the work to inspect could harm them.'],
    ['p', 'Small cavity barriers, such as those in masonry cavity walls, are usually stone wool slabs and strips or preformed elastomeric seals. Large cavity barriers, which can be several metres high or wide and divide underfloor voids and roof spaces, are usually non-combustible fabric (glass or ceramic cloth) or stone wool curtains. They are used around window frames, in cavity walls (masonry and timber frame), in floor voids below raised floors, and in ceiling and roof voids. Those in cavity walls need particular care because they cannot be inspected or maintained afterwards.'],
    ['p', 'Cavity barriers usually only need 30 minutes\' integrity and 15 minutes\' insulation (requirements may differ in Scotland, Wales, Ireland and elsewhere), but always check the site specification.'],
    ['h', 'Fire barriers'],
    ['p', 'Fire barriers are large curtain type barriers of non-combustible glass or ceramic cloth, or stone wool curtains with reinforcing mesh. They can act as large cavity barriers, but are typically used to continue a fire resisting wall\'s compartment line up to the roof or the underside of a compartment floor, sealing large openings in roof spaces and ceiling voids, and they must keep the integrity and insulation rating of that wall. They are usually hung from a metal angle or frame, and in timber roof spaces the supporting substrate often needs protecting too. They exceed the 30/15 minute cavity barrier requirement and can give up to 120 minutes\' integrity and insulation depending on the substrate. Seek the manufacturer\'s guidance on penetrating services and supporting substrates.'],
    ['h', 'Curtain wall seals and stone wool products'],
    ['p', 'Curtain wall seals, usually stone wool with metal supports and/or mastics, self-levelling or sprayed compounds, seal the gap between a compartment floor slab and the curtain walling. Over their life they must cope with large movements from dynamic loading, seismic and fire loads, often large compared with the gap. They come preformed or cut on site. Their effectiveness depends on the curtain wall keeping the compression fit for the full fire period, so day to day movement must be considered: unless the seal is installed pre-compressed and can move to stay compressed, it may fail early. Some need secondary support or compounds, varying by manufacturer.'],
    ['p', 'Stone wool slabs and strips come as mats, batts or preformed shapes, each made for a purpose such as rain screen systems, cavity barriers, heads of walls, blank seals and penetration seals. Some need secondary support and extra sealing or coating to stay resilient to long term movement, for example at deflection head joints.'],
    ['h', 'Open state cavity barriers'],
    ['p', 'Used in ventilated rain screen cladding, roof ventilation, eaves, internal walls and anywhere ventilation is needed when cold, these stay open for ventilation and drainage and either close in fire or are inherently fire resisting. They are usually foil-faced stone wool with a reactive component, such as an intumescent, that closes the gap in fire. Like other cavity barriers, they are not normally meant to be fire separating elements, which need higher fire resistance (check on site), and they are usually hard to reach after installation, so install with care.'],
    ['h', 'Service supports'],
    ['p', 'If a service support fails, the falling or moving service puts load and stress on the fire-stop, which may then fail early. Supports should be designed to hold the service in fire, which also keeps escape routes clear and does not hinder the emergency services; confirm with the M&E consultants where possible. Specify fire tested, fire rated anchors and installation systems (such as formed metal channels). Plastic plugs and ties, for example, are not suitable for services such as cables unless proven by test. Support spacings should be as tested or assessed.'],
    ['p', 'Approved Document B (England) says fire-stopping materials should be reinforced or supported by materials of limited combustibility where the unsupported span is over 100 mm, and in any other case where non-rigid materials are used (unless shown satisfactory by test). It refers to proprietary tested, preferably third-party certificated, systems, whose test data or certification should cover these points.'],
    ['h', 'Lightweight compartment walls'],
    ['p', 'Unsealed openings let flames, heat and smoke through; proper penetration seals make the building safer. Most lightweight compartment walls bow and deflect in fire because one side is much hotter. Unless the seal allows for this movement, integrity can fail within the seal or where its components meet. Seals that do not expand in fire may need the surrounding structure to keep them tightly compressed for the fire period, or a fire resistant flexible filler in the annular gap. Products for lightweight construction should be proven by test.'],
    ['h', 'Combustible pipes under 40 mm'],
    ['p', 'Should fire-stopping be provided around combustible pipes under 40 mm diameter? Yes. Approved Document B says the performance of a fire separating element should not be impaired: every joint, imperfect fit and service opening should be sealed, because fire-stopping delays the spread of fire and generally smoke too. Pipes through a fire separating element, unless in a protected shaft, should follow one of three alternatives:'],
    ['ul', [
      'Alternative A: a proprietary, tested sealing system that keeps the fire resistance of the wall, floor or cavity barrier.',
      'Alternative B: without a proprietary system, fire-stop around the pipe and keep the opening as small as possible.',
      'Alternative C: a pipe of up to 160 mm internal diameter with a sleeve of high melting point metal, if the pipe is lead, aluminium, aluminium alloy, fibre cement or uPVC (to BS 4514 or BS 5255). A high melting point metal, such as cast iron, copper or steel, is one that at 800°C will not soften or fracture enough to let flame or hot gases through the pipe wall.'
    ]],
    ['h', 'The building envelope'],
    ['p', 'A curtain wall is an outer covering where the outer walls are non-structural, acting as a weather barrier against rain and controlling light into the building, so it can be made of lightweight materials. A facade is the exterior wall or face of a building, usually with design elements affecting where windows and doors go; the word often means the front wall with the entrance.'],
    ['p', 'Cladding and external walls must resist rain, wind, temperature, noise and pollution, and must also stop fire spreading between floors. Heat radiated from a burning building can ignite neighbours that are too close. Several major fires involving poor facades have shown the importance of proper specification and of not choosing materials that add to the fire load. Buildings over 18 m high, and the combustibility of the products installed, need extra attention.'],
    ['p', 'After the Grenfell Tower fire and a review, changes to Approved Document B took effect on 23 December 2018. For residential buildings more than 18 m above ground, Regulation 7(2) applies and the materials must be of limited combustibility: European class A2-s1,d0 or class A1. Some parts of the external wall are exempt under Regulation 7(3), such as membranes, window frames and glass, and intumescent and fire-stopping materials.'],
    ['p', 'Walls and cladding may also need to give light, views, ventilation and comfort, support the structure and services, and look right. Roofs must meet most of the same criteria and may form part of an escape route. Both contribute to thermal insulation and air tightness, which needs many design disciplines and subcontractors to coordinate.'],
    ['p', 'The combustible material allowed depends mainly on building height, size, use and distance from the boundary. Built-in fire protection may come from ordinary, mostly low combustibility products not marketed as passive fire protection, such as brick, block, concrete, cement, plasterboard and timber. These can form compartment walls and floors, cavity barriers, cavity closures or fire-stopping, but are generally not tested solutions and only give a rigid seal that does not allow for movement. Some measures, such as cavity barriers in cavity walls or roofs, must be fitted during construction; others, such as cavity barriers in roof spaces, may go in later. Either way they must be properly designed, installed, inspected and maintained, especially ordinary products whose fire role is easily overlooked and hard to inspect.'],
    ['h', 'External fire spread'],
    ['p', 'External cladding may not be fire resisting in the usual loadbearing or separating sense, and the way fire spreads in cladding is not properly captured by conventional reaction to fire or fire resistance tests. Rain screen cladding is often retrofitted to improve weather protection and thermal efficiency, or designed into new buildings.'],
    ['p', 'Cladding can be a major route for vertical fire spread: a fire in a room by a window breaks out, and if the cladding is flammable, or there is no cavity barrier between the cladding and the wall, the fire travels upwards and re-enters through a window higher up. Several fatal fires have been made worse by fire spreading up the outside of the building but inside the rain screen, where the chimney effect makes spread very rapid. Others have involved combustible cladding. Pay particular attention to rain screen and other external cladding, including insulation, and to replaced facades, on high rise offices and blocks of flats.'],
    ['h', 'Points of consideration'],
    ['p', 'Fire strategies increasingly include some fire engineering, but whether the design is prescriptive or performance based, compartmentation is still a basic necessity, part of the holistic approach. Several performance based methods assume building elements are sealed and imperforate (no openings), so fire-stopping is vital. Key questions before choosing fire-stopping include:'],
    ['ul', [
      'Wall, floor, or junction between fire separating elements? What is the substrate made of, and its thickness and dimensions? If a floor, must it be loadbearing?',
      'What fire resistance period, and are integrity and insulation both needed, for the same period?',
      'How big is the gap or opening, and must the seal allow for movement?',
      'What services pass through, how many, what size, how close to each other and to the edge, and how big is the annular space?',
      'Does the system suit the construction, and is there access for installation, from both sides?',
      'Are acoustic, air tightness, water resistance, reaction to fire or electrical resistance properties needed?',
      'Is pipe insulation passing through, and of what type? Are the services adequately supported? In drywall, how are the voids prepared (framing out)?'
    ]],
    ['p', 'The answers guide the choice. Each product suits particular end uses, so assess the criteria for each application, note the limitations in the fire test evidence, and confirm with the manufacturer and their published information. Whether fire-stopping is correctly installed may not be obvious, or even visible, on completion.'],
    ['h', 'Standards and testing'],
    ['p', 'With no dedicated British Standard fire tests for fire-stopping, ad-hoc or indicative tests were often used. These are open to widely varying interpretation, confusing specifiers, contractors, building control and end users, and can lead to installations that do not give the protection needed. The ASFP therefore recommends either EN fire test data, or third-party certification by a UKAS accredited certification body, which can verify performance claims against ad-hoc and indicative tests.'],
    ['p', 'European test methods now evaluate fire-stopping to support CE marking under the Construction Products Regulation. They replace the ad-hoc and indicative methods and are far more sophisticated and comprehensive:'],
    ['ul', [
      'BS EN 1366-3 (penetration seals): tests pipe closures, cable support systems (trays and ladders) and non-combustible pipe seals wherever services pass through fire resisting walls and floors. Weights simulate a continuous service run away from the seal, and "standard configurations" cover many end uses, reducing the testing needed.',
      'BS EN 1364-3 (curtain walling, full configuration) and BS EN 1364-4 (part configuration): include configurations that evaluate, for example, slab edge seals.'
    ]],
    ['p', 'Every European fire resistance test has direct field of application (DIAP) rules, allowing simple changes such as limited extrapolations, substitutions and size variations without an assessment or a laboratory. For example, a penetration seal tested in a lightweight (flexible) partition may be used in masonry, and a horizontal linear joint tested horizontally in a wall allows horizontal joints between walls and floors.'],
    ['p', 'Because not every variant can be tested economically, assessments (expert or engineering judgements) extend the scope of tested products. They are the view of a recognised expert in that test. With no statutory competence requirements for those who write them, check every assessment thoroughly: does it cover the installation, are its arguments robust, and is it based on adequate test data? Ad-hoc tests are sometimes unavoidable where there is no British Standard, but indicative tests should be avoided and EN test data is always preferred.'],
    ['p', 'With CE marking, assessments are likely to give way to Extended Application (EXAP) reports, a European standard protocol that predicts a test result for a product variation from one or more tests: in effect, documented and justified assessments. EXAP uses defined rules, which may include calculations and agreed expert judgement rules, but expert judgement on its own is forbidden. Only a body notified to the European Commission, such as an accredited test laboratory, can issue EXAP reports. Assessments not based on an EXAP standard remain possible but will increasingly be for national use only.'],
    ['p', 'Site conditions sometimes mean the manufacturer\'s tested method cannot be followed. Then a site specific assessment or expert judgement report should describe the condition and the changes, and justify them. Typical cases are one-off projects where testing would be uneconomic, and constructions that cannot be fire tested because of size or configuration.'],
    ['p', 'After testing and any extended application, a classification document is produced to BS EN 13501-2, giving a European class used to check compliance with member states\' building codes and as the basis for the fire performance in CE marking. UK and Irish regulations did not use fire resistance classes for many passive fire protection products in the past, but guidance such as Approved Document B now recognises the European classes.'],
    ['h', 'Further reading'],
    ['ul', [
      'ASFP Red Book: Fire-stopping: linear joint seals, penetration seals and cavity barriers, 4th edition.',
      'ASFP TGD 17 (installation and inspection of fire-stopping) and TGD 19 (fire resistance test for open state cavity barriers in the external envelope).',
      'ASFP Advisory Notes: PU foams; 6 mixing and matching components; 7 horizontal linear joint seals; 8 service support centres; 9 selecting fire seal materials to amend existing seals; 10 framing out partitions for penetration seals.',
      'ASFP Guide for Fire Risk Assessors; Ensuring Best Practice; On-site guide to installing fire-stopping; and the ASFP videos on fire-stopping, cavity barriers and cladding.'
    ]]
  ]
});

/* Unit 4: Ductwork and dampers */
self.COURSE_READER.chapters.push({ id: 'm2u4', mod: 'm2', unit: 4, title: 'Unit 4: Ductwork and dampers',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Ductwork is part of every non-domestic building, used for ventilation, smoke extract, kitchen extract and pressurisation. Most ventilation ductwork gives little or no protection against fire spread, so wherever it passes through fire compartmentation, the regulations and guidance must be followed so the ductwork and all its supports meet the relevant fire test criteria for the stated period.'],
    ['h', 'Criteria for fire resisting ductwork'],
    ['ul', [
      'Stability: the duct, ductwork and supports stay intact and do their job for the set time in fire.',
      'Integrity: the duct stays free of cracks, holes or openings outside the fire compartment for the set time.',
      'Insulation: the duct keeps its integrity without its outside surface, outside the fire compartment, rising more than 140°C on average or 180°C at any one point above ambient.'
    ]],
    ['p', 'For ducts with a combustible lining, such as kitchen extracts, the Duct A (fire outside) test applies these limits to the inside surface of the duct within the fire compartment.'],
    ['p', 'Where fire resisting ductwork passes through a compartment wall or floor, it generally needs the same stability, integrity and insulation period as that wall or floor, typically 30 to 240 minutes, so it does not compromise it. Stability and integrity should always be at least equal to the penetrated element. In some cases fire engineers may argue for, or authorities may allow, no insulation or a shorter insulation period, where there is no chance of combustibles being near the duct.'],
    ['p', 'A duct should be tested for fire outside (Duct A test) and fire inside (Duct B test), in both horizontal and vertical orientations, unless its end use is to be restricted.'],
    ['h', 'Four ways to protect walls and floors penetrated by ducts'],
    ['ul', [
      'Method 1, thermally actuated fire dampers: normally open, they close in fire to stop fire and smoke passing through the duct. They are closed by fusible links (heat sensitive devices) releasing a spring mechanism, or by motors as part of a fire and smoke control system (Method 4), or are intumescent dampers: a matrix coated with intumescent that swells and closes the opening when heated. Whatever the barrier, the damper must be fixed within or directly next to it and supported independently of the ductwork, so if the duct fails on either side the damper still acts as part of the barrier.',
      'Method 2, fire resisting enclosures: the air handling system is protected by a fire resisting enclosure such as a service duct or protected shaft, defined as "a shaft which enables persons, air or objects to pass from one compartment to another and which is enclosed in fire-resisting construction".',
      'Method 3, fire resisting ductwork: general ventilation ductwork built to the Building and Engineering Services Association (BESA) guide DW/144 gives little or no fire protection and cannot be used or converted as fire resisting ductwork unless tested to the right standard. Proprietary tested and certificated fire resisting ducts remove the need for fire dampers. Steel ductwork, with or without fire protection paint, gives stability and integrity only; adding fire boards (typically calcium silicate or vermiculite) or stone wool (not glass wool) gives insulation and makes it fully fire resisting.',
      'Method 4, automatic fire and smoke dampers triggered by smoke detectors: intumescent dampers and dampers worked only by fusible links are not suitable for protecting escape routes, but an ES classified (integrity, reduced smoke leakage) fire and smoke damper activated by a suitable fire protection system may be used. In buildings with a sleeping risk, such as hotels and care homes, fire dampers should be released by smoke detector controlled automatic mechanisms as well as thermal devices.'
    ]],
    ['p', 'Duct systems also serve smoke extract, dual ventilation and smoke, pressurisation, car park extract and kitchen extract. Where cleaning access is part of the tested criteria, as for kitchen extract, access panels must be fitted at suitable spacings for regular cleaning. Cutting in access panels later should only be done by people who can prove competence, in consultation with the duct manufacturer.'],
    ['h', 'ASFP Blue Book'],
    ['p', 'The ASFP Blue Book, Fire Resisting Ductwork, is the industry guide for specifying, installing, inspecting and verifying fire rated ductwork. The British Standards version uses BS 476 Part 24 test data and is useful outside Europe; the European version is wholly based on EN tests and classifications to BS EN 13501 Parts 3 and 4. The course examples come from the EN version.'],
    ['h', 'Types of ductwork system'],
    ['ul', [
      'Mechanical ventilation: extracts vitiated air (air with reduced oxygen) or polluted air and supplies fresh or conditioned air, with fans and plant usually in a basement or roof plant room. The ducts can be very large, run throughout the building, cross compartment walls and floors and open into every space they pass, so without fire precautions they can spread fire, smoke and toxic gases rapidly.',
      'Smoke extraction: removes smoke and toxic gases that would cut visibility and impair people, helping occupants escape and firefighters find and fight the fire. Ductwork is needed where natural ventilation is difficult, such as large deep basements or high rise buildings without opening windows. Fans are used where natural buoyancy is not enough, and ducted air inlets may supply replacement air. Ducts wholly within one fire compartment can be tested to BS EN 1366-9 at around 600°C (pre-flashover temperatures), lower than the roughly 1000°C fully developed fire in EN 1366; ducts that cross a fire barrier must also meet the relevant part of EN 1366.',
      'Kitchen extract: grease and other combustible deposits build up inside and can spread fire if ignited, carrying a kitchen fire to other areas and threatening escape routes. Consider a fire igniting grease in the duct where it passes through a room, so fire insulation is essential. The ASFP recommends BESA DW 172 for full compliance.',
      'Dual ventilation and smoke extraction: normal ventilation day to day, smoke extraction in a fire: an economical dual system.',
      'Pressurisation: keeps critical areas at higher air pressure than their surroundings so smoke cannot get in, especially protected stairways, lobbies and corridors, and firefighting shafts serving deep basements. Because the air supply must continue throughout the fire, fire dampers cannot be used in the ductwork, so any duct through a fire barrier must be fire resisting. BS 9999 gives guidance on pressurisation for smoke control, for example in atria and firefighting stairs.',
      'Car park extract: car parks need separate, independent extract systems because the air is polluted. Fire dampers are not recommended in car park extract ductwork, so ducts through fire barriers must be fire resisting.'
    ]],
    ['h', 'Types of damper'],
    ['ul', [
      'Curtain (folding curtain) fire dampers: interlocking blades folded at the top for maximum free area, held open by a thermal release normally rated at 72°C ± 4°C, then falling or sprung shut to fill the airway.',
      'Intumescent fire dampers: components expand when heated to close the airway; the intumescent is the main integrity component, sometimes backed by a mechanical device against cold smoke leakage. Activation is typically 120°C to 270°C depending on the material. Some add an electro-mechanical device linked to smoke sensors through the fire alarm panel for cold smoke containment.',
      'Asymmetric fire dampers: fitted remotely from the wall or floor, with supported fire protection to the exposed duct at least equal to the compartment\'s rating. Follow the damper and duct manufacturers\' guidance strictly, and never install "out of line" without the manufacturer\'s specific supporting details.',
      'Multi-blade fire dampers: linked pivoting blades in a frame, released by a thermal release normally rated at 72°C ± 4°C, pivoting closed.',
      'Single blade fire dampers: one pivoting blade, same 72°C ± 4°C release.',
      'Multi-section dampers: for ducts bigger than the largest tested single damper, joined on site with strips or mullions that are not necessarily structural, so larger units may need extra support.',
      'Leakage classified fire dampers (S): meet integrity and reduced leakage requirements; often called fire and smoke dampers.',
      'Smoke control dampers: single or multi-blade with two positions, open for smoke extraction or closed to keep the compartment. No thermal release: they rely on a powered control system to reach the right position.'
    ]],
    ['p', 'Fire dampers must meet the relevant integrity and leakage requirements, and insulation where required. For curtain, multi-blade, single blade and leakage classified dampers, test results or assessments are needed for the plane of installation (horizontal or vertical) and the installation method.'],
    ['h', 'Enclosures and fire resisting ductwork options'],
    ['p', 'Fire resisting enclosures can be traditional construction, such as a plasterboard shaft wall, or proprietary service ducts and shafts in calcium silicate, cement based or other fire boards.'],
    ['p', 'Fire resisting ductwork falls into three generic types:'],
    ['ul', [
      'Fire cladding of existing sheet metal ducts: with vermiculite boards, calcium silicate boards, or stone wool batts and wraps. Performance must allow for the supports and the penetration seal, it should be tested for fire inside and outside in both orientations, the existing duct\'s construction and sealing must be at least equal to the tested method, and duct supports usually need increasing.',
      'Purpose made sheet metal fire ducts, fabricated off site and erected on site: coated or clad with thin film mineral coatings, intumescent or ablative coatings, vermiculite or calcium silicate boards, or stone wool batts and wraps; some sheet metal systems need no coating. Up to 4 hours\' stability, integrity and insulation, fire inside and outside, depending on the product. Thin film mineral and intumescent or ablative coatings only give stability and integrity (up to 4 hours); insulation needs extra material such as stone wool.',
      'Self-supporting ducts: made entirely from fire resisting insulation materials on strengthened hangers and rods, part assembled off site or built fully on site, from vermiculite boards, calcium silicate boards, or fibre cement between bonded galvanised steel facings. Up to 4 hours\' stability, integrity and insulation, fire inside and outside.'
    ]],
    ['h', 'Points of consideration: fire dampers'],
    ['ul', [
      'At design stage, name a competent person responsible for designing the correct installation of dampers in compartment walls and floors.',
      'Always follow the damper manufacturer\'s installation instructions; any variation must be approved by the designer, manufacturer and building approval body. Details can differ for different wall and floor types.',
      'For dampers in drywall, consult both the drywall and the damper manufacturers.',
      'Always install dampers in the plane of the fire separating element, unless test evidence supports an alternative.',
      'Use only the support system the manufacturer specifies for that barrier and any associated services, with cleats, angle clamps, rods and suspension rods sized to match the barrier\'s fire resistance, and allow for barriers being built after the damper or ductwork is in.'
    ]],
    ['h', 'Points of consideration: fire resisting ductwork'],
    ['p', 'Key questions include the duct function (ventilation, smoke extract or kitchen extract); type (self-supporting, factory made, or cladding on specified steel ducts); orientation; size (longer side or diameter); thickness of steel, board or coating; shape; panel and duct stiffening, internal stiffeners or tie rods; maximum section length; cross joint type, shape and size; hanger and bearer spacing; fire protection layers or insulation (material, thickness, fixings); fire resistance required (for example 60 minutes\' stability, integrity and insulation to the required standard); the seal detail where it passes through walls, floors or fire divisions; and the type, specification and position of access panels. Fire resisting ductwork is measured as a complete item in linear metres, with ancillaries and fittings described and measured separately. Whether dampers and ducts are correctly installed may not be obvious, or even visible, on completion.'],
    ['h', 'Standards and testing'],
    ['p', 'European standards sit under a product standard listing the agreed classification; the classification document sets out the tests needed, and the field of application is decided by agreed rules for direct and extended application.'],
    ['ul', [
      'Fire dampers: product standard EN 15650; test BS EN 1366-2; classification EN 13501-3; extended application EN 15882-2.',
      'Smoke control dampers: product standard EN 12101-8; test EN 1366-10; classification BS EN 13501-4.',
      'Fire resisting ducts (British Standards): BS 476 Part 4 (non-combustibility), Part 6 (fire propagation), Part 7 (surface spread of flame), Part 11 (heat emission), Part 20 (general principles) and Part 24 (fire resistance of ventilation ducts).',
      'Other British Standards: BS EN 12101-3 (smoke and heat control fans), BS EN 12101-7 (smoke duct sections), BS 9999 (fire safety in design, management and use of buildings), and BS ISO 10294 Parts 1 to 5 (fire dampers for air distribution: test method, classification, guidance, thermal release test, intumescent dampers).',
      'Fire resisting ducts (European): product standard BS EN 15871 (not yet published); classification EN 13501-3; test EN 1366-1; extended application EN 15882-1.',
      'Smoke control ducts (European): product standard EN 12101-7; classification EN 13501-4; tests EN 1366-8 (multi compartment) and EN 1366-9 (single compartment); extended application prEN 15882-5 (not yet published).',
      'International: ISO 834-1 (general requirements), ISO 6944 (ventilation ducts) and ISO 6944-2 (kitchen extract ducts).'
    ]],
    ['h', 'Further reading'],
    ['ul', [
      'ASFP Blue Book: Fire resisting ductwork, European version (BS EN 13501 Parts 3 and 4), 1st edition, and BS 476 Part 24 version, 3rd edition.',
      'ASFP Grey Book, Volume 1: Fire dampers (European standards), E and ES classified, 2nd edition.',
      'ASFP TGD 18: installation and inspection of fire resisting duct systems.',
      'ASFP Guide for Fire Risk Assessors; Ensuring Best Practice; ASFP video on ducts and dampers.'
    ]]
  ]
});

/* Unit 5: Doors, shutters and hardware */
self.COURSE_READER.chapters.push({ id: 'm2u5', mod: 'm2', unit: 5, title: 'Unit 5: Doors, shutters and hardware',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Of all the openings in a compartment wall, the fire door is the best known and often the most abused. Seen as an inconvenience, it is all too often wedged open with a wedge or a fire extinguisher, and unlike services hidden above a ceiling it takes constant impact, wear and tear from people passing through.'],
    ['h', 'What fire doors do'],
    ['ul', [
      'Maintain the building\'s compartmentation, which limits the size and spread of fire to control the assessed risk.',
      'Give access to protected escape routes, vertical and horizontal, without losing fire resistance, and limit smoke movement into those routes, such as protected corridors, lobbies, stairways and shafts.'
    ]],
    ['p', 'Locations and ratings of fire doors for means of escape are in building regulation guidance and risk based design standards such as BS 9991 and BS 9999; complex buildings may use fire safety engineering under BS 7974. Fire doors are crucial to safe escape, and to stay put strategies, where they let people take refuge in a compartment.'],
    ['p', 'Most fire doors are meant to stay shut, but some stay open normally and close automatically in fire. They may be held by an electro-magnet wired to the fire alarm: on alarm or power failure the magnet releases and the closer shuts the door. Wireless battery hold-open devices can also be used. Held-open doors must be checked regularly to make sure they close properly, and battery devices checked that the battery has not run out or been removed.'],
    ['p', 'Fire doors are generally evaluated only for resisting the passage of flames. In most cases there is no limit on temperature rise on the unexposed face, and guidance generally recommends integrity of 20, 30, 60 or 90 minutes. In most situations a fire door is also expected to give cold smoke protection.'],
    ['p', 'Fire doors are precision engineered life safety products, in timber, metal and composite, from simple single-leaf doors in houses, flats and offices to large power-operated steel doors in industrial buildings.'],
    ['h', 'A fire door is a system'],
    ['p', 'A fire door is made of several essential parts: the door leaf, the frame, hinges and other ironmongery, glass in any vision panels, and the fire and smoke seals round the edge. They must all be chosen to work together, like a team. Fire doors are therefore tested as complete working assemblies, never as door leaves on their own. Specify complete doorsets or assemblies wherever possible and do not change the specification, which can badly harm fire performance.'],
    ['p', 'Manufacturers can only test a limited number of assemblies to cover their many variations, so check that what is sold or installed is covered by proper documentation, ideally third-party certification or an assessment by a qualified fire consultant or laboratory. Where a test report is the evidence, only exactly what is in that report is covered: no variation at all is allowed.'],
    ['h', 'Door assemblies and doorsets'],
    ['ul', [
      'Door assemblies: usually put together on site by a joiner or specialist subcontractor from components tested or assessed as able to work together.',
      'Doorsets: supplied complete, with frame and hardware as a matched set relating to the testing and assessment of that configuration.'
    ]],
    ['p', 'Either can be third-party certificated, and all essential hardware on fire doors is subject to mandatory CE marking.'],
    ['p', 'Fire doors are needed in any doorway in fire resisting construction, and are rated by testing to a standard such as BS 476 Part 22:1987 or EN 1634-1, mainly by the time for fire to breach integrity (classification "E"), letting flames or hot gases through.'],
    ['p', 'Doors need gaps between leaf and frame (top, sides and threshold) to move. Sealing strips next to these gaps expand in fire to close them. Doors and hardware, including seals, hinges, latches and vision panels, must be kept in good condition, and timber doorsets must meet the door to frame gap tolerances in the test reports or certification, usually 3 to 4 mm. Most doors can also have smoke seals to limit smoke spread at ambient temperature, either combined with the intumescent seal or fitted separately in the frame or door edge as the documentation specifies.'],
    ['p', 'Most fire doors are timber, but metal fire doors meeting the right standard are often used, and are better in some situations, such as doors that take very heavy impact. Most metal door manufacturers require their own frames and hardware, and metal doorsets do not always have intumescent strips, mainly because metal expands in fire, whereas timber chars and shrinks.'],
    ['h', 'Fire resisting shutters'],
    ['p', 'A fire shutter may have one or more leaves, and the term includes a cover or other protection to an opening in a fire resisting wall or floor or a protected shaft enclosure. A wide range of products exists. Fire shutters should have an automatic self-closing device, typically released by a heat detector such as a fusible link near the door, or by a solenoid triggered by remote heat or smoke detection or the alarm system. If held open, the shutter should come down in a controlled descent when the device operates.'],
    ['p', 'Historically shutters were steel; reinforced glass fibre matting shutters are now available. All should have an automatic self-closing device or be held open by: a local heat release such as a fusible link (for example where a shutter crosses a means of escape); an automatic release from remote smoke detection or the alarm system; or a closure delay device where an audio or visual warning is needed as well as normal safety.'],
    ['p', 'Whatever the door or shutter, every component must be certain to perform in fire and smoke so the whole system achieves the required performance. Early failure of any one part can cause the door to fail early.'],
    ['h', 'The door leaf'],
    ['ul', [
      'Timber: standard thickness is 44 mm for a thirty minute flush door and 54 mm for a sixty minute door. Above sixty minutes (ninety or one hundred and twenty), timber doors may have a mineral inner core to stop burn through.',
      'Steel: depending on design and core, up to six hours\' fire resistance, so common in industrial settings and high traffic areas such as airports and shopping centres. Cores can be honeycomb for rigidity, semi-rigid stone wool, or rigid mineral, which may also meet insulation requirements.',
      'Composite: an outer skin such as glass reinforced polyester over a mineral core (such as formed vermiculite) or polyurethane. They generally meet the thirty minute class and are often used as exterior doors in many moulded styles.',
      'Glazed: frameless or minimally framed glass doors are covered under fire resisting glazing.'
    ]],
    ['h', 'Classification'],
    ['p', 'Fire doors are classified by tested duration: a 30 minute door is FD30. A door that must also give insulation for the same period is EI30. Where smoke control is required, the suffix S is added (for example FD30S or EI30Sa), meaning a combined intumescent and smoke seal must be fitted. Cold smoke control tested to EN 1634-3:2004 is designated Sa (ambient smoke control). UK smoke control currently relates only to cold, ambient temperature smoke.'],
    ['h', 'The door frame'],
    ['p', 'Doorsets come with the tested frame, but door assemblies may need the frame chosen separately. The frame or door stop must have at least the fire performance of the leaf: a fire tested leaf in an untested, incompatible frame will not achieve the rating. The frame must also suit the wall type, and existing frames must be checked (size, profile, density and material) for compatibility with the certificated leaf and components. BS 8214:2016 (timber-based fire door assemblies, code of practice) references solid timber, engineered timber, metal and composite frames. The frame must support the leaf when cold and in fire, and take the hardware fixings and the fixings holding it in the wall.'],
    ['h', 'Ironmongery'],
    ['p', 'The ironmongery depends on the door type, the fire rating and its use, for example security access control. For a doorset, all ironmongery is set by the fire testing and supplied by the doorset manufacturer. For an assembly, every item must be compatible with the assembly\'s fire performance, meaning the specific components listed on the product certification, and its classification must suit the usage, weight and category of the doorset (the Guild of Architectural Ironmongers gives more information). The combinations of hinges, latches, locks, bolts, viewers, push plates and so on are almost endless, and modern electronic access systems can remove large areas of leaf or frame, harming fire performance.'],
    ['ul', [
      'Hinges: can suffer heavy wear, so inspect regularly. At least three are usual on fire doors, CE marked to BS EN 1935, with strength and specification suited to the door\'s size, weight and configuration. Many need intumescent pads or mastic behind them, because heat conducted through ironmongery can cause early failure or even let the leaf fall from the frame.',
      'Self-closing devices: all fire doors except those to locked cupboards and service ducts should have a controlled self-closer that closes the door from any angle. Concealed closers must close the door from any angle against any latch; spring hinges are unlikely to be suitable. Rising butt hinges are not suitable, as they cannot close and latch from any angle and need material removed from the top of the door. Closers must be CE marked for fire doors and adjusted to the right opening and closing forces; badly fitted or adjusted closers become a barrier to users and are likely to be vandalised, removed or disengaged.'
    ]],
    ['h', 'Automatic hold-open and release devices'],
    ['p', 'These hold self-closing fire doors open, or let them swing free, in normal use, then release them on alarm so the closer shuts them. They are especially useful on busy escape routes or for people with impaired mobility. Examples:'],
    ['ul', [
      'CE marked electro-magnetic devices to BS EN 1155 on the door, releasing when the fire detection and warning system operates so a separate closer shuts it. If separate from the closer, fit them at the same level to avoid twisting or warping the door.',
      'Electro-magnetic hold-open built into the closer (to BS EN 1155), which stops working when the system operates.',
      'Free swing closers: the door moves independently of the closer normally, and an electro-magnetic device in the spring mechanism, linked to the fire system, makes it self-close again when the system operates.'
    ]],
    ['p', 'On escape route doors, these should only be fitted with an automatic fire detection and warning system with smoke detectors designed to protect the escape routes. In every case the device must release the door to close fully in its frame (latching if a latch is fitted) on any of: smoke detected by an automatic detector; manual operation of the alarm, such as a break glass call point; any failure of the fire detection and alarm system; or any electrical power failure.'],
    ['p', 'Acoustically activated release mechanisms (to BS EN 1155) may be used in some cases, but not where: there is no fire alarm; the door serves the only escape stair in the building or part of it; the first alarm signal alerts staff only; sounders may be muted or turned down; or the system uses a voice alarm. They may also fail if one sounder fails and the sound level drops, and they do not respond to mains failure or alarm faults.'],
    ['h', 'Door fastenings and escape doors'],
    ['p', 'Any device that hinders escape, by being complicated or not readily operable, is unacceptable, although security often needs some access control. Electronic devices must be connected to the fire alarm so they fail open in a fire. Mechanical devices such as digital locks should use lever handles, not knobs, and be the only device needing operation to open the door.'],
    ['ul', [
      'Where the public or others unfamiliar with the building are present: panic exit devices to EN 1125, CE marked (push bars or touch bars), on final exit doors.',
      'Where a limited number of staff familiar with the building are present and panic is unlikely: emergency exit devices to EN 179, CE marked (push pads or lever handles with emergency escape locks).'
    ]],
    ['p', 'Escape doors (not necessarily fire doors, for example final exits) must open easily: one hand movement, such as turning a lever or pressing a pad or bar, for an emergency escape door; body contact alone for a panic escape door; allow for exterior doors sticking in bad weather; check they are properly signed; and no extra security ties. CE marked electronic devices linked to the fire alarm are available to keep escape doors secure.'],
    ['h', 'Letter plates, air transfer grilles and seals'],
    ['ul', [
      'Letter plates: doors on common passageways, such as in apartments or assisted living, may need fire and smoke resistant letterboxes, with a cover giving the right fire resistance.',
      'Air transfer grilles: let air circulate normally and close in fire. Intumescent grilles stop fire and hot gases but not cold smoke, so on a fire door protecting a means of escape the grille must also be linkable to the fire detection and alarm system so it closes against cold smoke.',
      'Intumescent seals: without them, fire and smoke simply pass around the edge of the leaf. Older doors may lack them and give lower fire resistance. Current recommendations for timber doors include an intumescent strip, usually giving 30 minutes. There are many types, so check the documentation for compatibility, and never mix and match different strips on one door. Metal doors may not need them.',
      'Smoke seals: reduce cold smoke leakage, very important for escape routes and stay put strategies in flats and hospitals. Usually a wiping polymer blade, a brush or a "batwing" type in the frame rebate. They should not be interrupted at ironmongery, threshold gaps over 3 mm should be sealed, and a drop down threshold seal can help where the floor is uneven.'
    ]],
    ['h', 'Glazing apertures and signage'],
    ['p', 'Glazed apertures, common on escape routes, should be made as part of manufacture, not cut on site: cutting an aperture in a door not tested that way can seriously undermine its performance. The glass is only one part; beading, glazing sealant, setting blocks and bead fixings all combine to achieve the tested performance.'],
    ['p', 'All fire doors should carry the right sign: "Fire door keep shut" (kept shut when not in use), "Keep locked shut" (kept locked when not in use), or "Automatic fire door keep clear" (held open on an automatic release). Size and location are in the Code of Practice, Hardware for fire and escape doors.'],
    ['h', 'Third-party certification and replacement doors'],
    ['p', 'With so many options and so much ongoing maintenance, you need to understand how a doorset or assembly is made up. Doors get replaced when damaged, worn out, or simply for looks (for example residents in flats fitting a door they prefer). Without knowing the original specification, a replacement may not meet the same objective, and may give no fire performance at all.'],
    ['p', 'Third-party certification makes identification straightforward: the door carries a label or coloured plug showing its fire resistance period and a unique number that traces it back to the manufacturer for full test details and support.'],
    ['p', 'A reliable fire door will have been tested to a standard by a UKAS accredited laboratory. The report limits the result to the tested construction; extensions are usually given by assessment from a UKAS accredited laboratory or recognised fire consultant. Increasingly fire doors have full third-party product certification, where the certification body visits the factory, monitors production and factory production control, selects samples for testing and certificates the assembly and its variations. The test, assessment or certification covers the whole assembly: overall size; size and number of leaves; single or double swing; size, location and number of glazed openings; hardware, including any extra intumescent protection; frames; over panels, fanlights and side panels; and performance seals.'],
    ['p', 'If there is no third-party evidence and any doubt, the only safe option is a professional opinion, such as a competent fire door inspector or a professional from a UKAS accredited organisation, or a proven replacement.'],
    ['h', 'Upgrading doors'],
    ['p', 'Any change to an existing fire door can make its test, assessment or certification null and void. Upgrading, for example where a historic door must be kept, needs a qualified technical consultant, with the work done by a specialist installer and supporting test data sought on: the wood type and density; leaf thickness; door structure, including panelling; the frame; hardware and the gaps to floor and frame; extra protection for fixings and panelling; and any fire enhancing surface coating. Ad-hoc testing done for a manufacturer\'s own benefit may be inadequate on its own; results should be fully reported to the standard by an accredited test body.'],
    ['h', 'Maintenance inspection (BWF Best Practice Guide)'],
    ['ul', [
      'Leaf and frame: fixed securely, square and level; no distortion between the stiles and the frame head; gaps no bigger than the installation instructions or certificate data sheet allow; no damage.',
      'Intumescent and smoke seals: good condition, full length and secure in the groove. If damaged, badly finished or painted over, replace with exactly the same size and material originally specified; replace smoke seals in one continuous length if possible.',
      'Locks and lever handles: levers return fully to horizontal; latch bolt engages smoothly and fully into the keep; wipe off metal dust; adjust, lubricate or replace as the manufacturer recommends.',
      'Hinges: no visible wear, dark marks or staining round the knuckle, which could mean wear and impending failure.',
      'Closers: open the door fully and check it closes without binding on the floor; open it to about five degrees and check it still closes fully, engaging latch and seals; closing from ninety degrees should take about ten seconds without slamming; doors must not be wedged open; hold-open devices must not strain the door against the closer; no mechanical hold-open devices; hold-open devices must be electro-magnetic and linked directly to the fire detection and alarm system.',
      'Signs: not damaged or removed. Ironmongery: secure and in good condition, lubricated where the manufacturer requires.',
      'Apertures: glass not cracked or broken, beads secure and undamaged; grilles, letter plates and other fittings secure, fire resistant and in good condition.',
      'Cleaning: as the manufacturer instructs.',
      'Label and gaps: check for the certificate label, on the top of the door or below the bottom hinge on a doorset. Never tamper with or paint over it. A damaged or missing label invalidates certification; if damaged, tell the manufacturer. Check the leaf, frame and threshold gaps.'
    ]],
    ['h', 'Standards and testing'],
    ['p', 'Timber doorsets are tested to BS 476 Part 22:1987 or BS EN 1634-1, as complete assemblies (door, frame and all hardware) fixed in a wall representing real use. One face is exposed to fire conditions for a set time while stability and integrity are evaluated. The upper part of the door is kept under a small positive pressure to simulate a real fire, and loss of integrity is judged by whether a combustible fibrous pad on the unexposed side ignites. Because a door must be tested from both sides, two specimens are needed.'],
    ['p', 'Metal doorsets are tested to the same standards. Some designs are more prone to distortion and bowing, opening gaps, and some cores and adhesives may give off flammable gases, either of which can cause integrity failure. Metal doors that do not meet the insulation criterion conduct a lot of heat to the unexposed side, and even insulated ones may get very hot at the perimeter by the frame. So hardware, glass and frame seals tested with timber doors must not be assumed to work with metal doors without independent test evidence.'],
    ['p', 'Fire shutters are tested to BS 476 Part 22:1987 or BS EN 1634-1 for integrity for 30, 60, 90, 120 or 240 minutes. Where door openings make up more than twenty five per cent of the length of a compartment wall, the door classification must cover both integrity and insulation.'],
    ['h', 'Further reading and training'],
    ['ul', [
      'BS 8214:2016 Timber-based fire door assemblies, code of practice.',
      'ASFP Guide for Fire Risk Assessors; ASFP Ensuring Best Practice.',
      'BWF-Certifire Fire Doors and Doorsets Best Practice Guide; ASDMA Best Practice Guide to Timber Fire Doors.',
      'Door and Hardware Federation: method of restraining roller door barrels; Hardware for fire and escape doors (with the Guild of Architectural Ironmongers).',
      'Training: Fire Door Inspection Scheme (FDIS) Diploma in Fire Doors and Certificated Fire Door Inspector; BWF fire door installation training; GAI Certificate and Diploma.'
    ]]
  ]
});

/* Unit 6: Fire resisting glazing */
self.COURSE_READER.chapters.push({ id: 'm2u6', mod: 'm2', unit: 6, title: 'Unit 6: Fire resisting glazing',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Glass has been made since about 3500 BC, but only at the turn of the twentieth century, with glass containing strong steel wire mesh, could glazing offer passive fire protection on an industrial scale. By the turn of the twenty-first century, new fire resisting glass technologies had opened up design possibilities that were impossible a few decades earlier.'],
    ['p', 'Glass on its own is not fire resistant: it is glass combined with other technologies that gives fire resistance. To the untrained eye, fire resisting glazing looks no different from ordinary glazing.'],
    ['h', 'How glass behaves in fire'],
    ['p', 'Ordinary glass cannot cope with the thermal stresses of a fire, which can arise at temperatures below 100°C. It cracks in many places and falls out of its frame within minutes. Thermal shock from a fire hose or sprinkler water hitting the hot glass makes this worse. Toughened (tempered) glass, often chosen for security, fails catastrophically in fire.'],
    ['p', 'So it is vital to understand how fire resisting glazing works: some systems give integrity only, others insulation as well, and performance also depends on the framing system that holds the glass. Because glass is transparent, even if it stays in place it lets a lot of heat through to the non-fire side, which is why the difference between integrity only and insulating glazing matters.'],
    ['h', 'Classifications'],
    ['p', 'Under BS 476 Part 22 there are two categories, integrity, and integrity and insulation, generally in 30 minute steps. Under European testing (EN 13501-2:2016) there are three:'],
    ['ul', [
      'E: fire integrity.',
      'EW: fire integrity with limited heat radiation.',
      'EI: fire integrity with full radiant fire insulation.'
    ]],
    ['h', 'Integrity only glazing'],
    ['p', 'Sometimes called fire protective glazing, it holds back flames, hot gases and smoke in the compartment of origin for a set time, typically 20 to 180 minutes; 20 minutes is listed in the regulations but not normally accepted in practice. Technologies include wired glass, laminated float glass with intumescent or char promoting interlayers, modified toughened glass, borosilicate glass, glass ceramic, and various non-insulating organic interlayers.'],
    ['p', 'EW (integrity with limited heat radiation) is only classified under European standards and is very dependent on glazed area. When choosing integrity or EW glazing, consider where it is going and how the chosen glass achieves its performance.'],
    ['h', 'Insulating glazing'],
    ['p', 'As well as integrity, insulating glazing limits heat passing through to below an average of 140°C on the non-fire surface, with no single point above 180°C, for a set time, typically up to 120 minutes. It must be considered where radiant or conducted heat between compartments is a high risk, such as a means of escape corridor. Because it is complex to make, there are fewer generic types: laminated composites with a hard intumescent interlayer between annealed glass, and water content gel interlayers between toughened glass.'],
    ['h', 'Framing and support'],
    ['p', 'Whatever glass is chosen, its performance may depend entirely on the frame and support (the assembly). Frames may be timber (glazed panel frames or timber fire doors); steel or fire tested aluminium, for example for large glazed areas; or composite, including uPVC types, which may combine materials such as calcium silicate board with metal covers. Frameless or butt jointed systems keep fire rated fixings to a minimum or remove vertical mullions altogether, with fire rated sealing compound or tested seal combinations in the joints, or slim vertical profiles over the joints that can be decorated.'],
    ['p', 'In every case the system approval sets the frame dimensions, overall size, glazing details and allowed pane sizes. Components must not be substituted without proper approval, such as an assessment by a UKAS accredited laboratory or a fire consultant specialising in that construction.'],
    ['h', 'Identification stamp'],
    ['p', 'Fire resisting glass should carry a permanent stamp, generally in the bottom right hand corner. This proves it is fire resisting and supports long term maintenance. Stamps vary by manufacturer but should show the manufacturer, the product name, the European glass product standard (not the test standard), and the impact classification, a(B)c. Only the first digit of the impact class must be shown, but best practice is to show it all. This gives full traceability. (The Contraflam stamp is a European example where the impact class is not required.)'],
    ['h', 'Choosing glazing'],
    ['p', 'Specification depends on the fire resistance period and also on: integrity only or the more onerous insulation, typically 30 to 120 minutes and sometimes 180; glazed area size; the frame and glazing system; security; acoustics; reflectivity; whether it is butt jointed; interior or exterior use; and appearance.'],
    ['h', 'Integrity rated glass types'],
    ['ul', [
      'Wired glass (Georgian wired glass): the oldest type, with a thin metal mesh embedded during manufacture. The wire stops the glass falling out even when it cracks, and it keeps integrity under thermal shock such as a water spray. Used in fire door vision panels, screens, overhead glazing and fanlights.',
      'Laminated float glass: either with intumescent layers (float glass bonded with reactive water based interlayers) or with char promoting layers (a resin interlayer that chars when heated).',
      'Modified toughened glass: slightly thicker float glass heated and cooled to build in stresses so it survives the temperature differences early in a fire test, with higher impact resistance.',
      'Borosilicate glass: silica and boron trioxide, with very low thermal expansion, so highly resistant to thermal shock (as in Pyrex cookware). Can keep integrity for extended periods.',
      'Glass ceramic: tested to withstand extreme temperature differences, such as thermal shock from a high pressure fire hose.',
      'Gel interlayers between annealed or toughened glass: perform like intumescent interlayers, relying on their water based formulation.'
    ]],
    ['p', 'Understanding how integrity glass performs is key. EW glass depends heavily on glazed area, and EW glasses differ in how much heat they radiate, so consult the manufacturer on radiation levels and size limits. For example, EW 60 glass still gives 60 minutes\' integrity and some heat resistance, but not enough for any given period, and it does not limit the non-fire side temperature the way EI glass does.'],
    ['h', 'Insulation rated glass types'],
    ['ul', [
      'Water content gel interlayers between toughened glass: gel filled double or multiple panes. In fire the gel releases water, giving a measured level of insulation, which lasts until the gel layers lose their insulating properties.',
      'Laminated composites with a hard intumescent interlayer between annealed glass: typically a sodium silicate interlayer that turns opaque and swells in fire, keeping the cracking glass bonded to it. The process is progressive, so more layers give longer insulation.'
    ]],
    ['h', 'Where glazing is used and maintained'],
    ['p', 'Fire resisting glass appears in fire door panels, facade screens, partitions and doors, roof and floor glazing, and windows. How it is supported is fundamental, so follow the manufacturer\'s instructions for each use.'],
    ['p', 'Glazing in fire doors is part of the doorset or assembly, so it is not fixed on site, but repairs over time must consider the glass, the bead, the glazing seal (intumescent or other tested seal), the setting block, the door\'s condition, and the screws or nails holding the bead. For glazing that forms part of the building fabric (facades, partitions, floors, roofs), follow the manufacturer\'s maintenance recommendations, covering the perimeter frame and its fire rated mastic seal, setting blocks, glazing beads, the gap and sealant between butt jointed panes, and the supporting construction.'],
    ['h', 'Points of consideration'],
    ['ul', [
      'Timber systems: glass type (integrity only, partial or full insulation); timber type and density; frame section sizes; rebate depth; bead size, shape and design; bead fixing type, position and angle for the glass type; edge cover and clearances (especially for modified toughened soda-lime glass); glazing seal; any timber treatment; compatibility of all parts; frame fixing to the structure; fire-stopping between frame and wall; internal or external; doors within screens; test or third-party assessment evidence; and installer capability, with trained and certified staff.',
      'Metal systems: steel or aluminium; integrity only or integrity and insulation frame design; section sizes; frame fixing and fire-stopping to the structure; rebate depth; bead or glass retaining fixings; edge cover and clearance; seals; compatibility; and fire test evidence for the metal frame profile, generally from the profile supplier.',
      'Glass floors: required fire classification; fire resistance of elements it supports and of surrounding elements; loads; slip resistance; acoustics; internal or external (U-value); privacy and obscuration; weights for handling; and CDM requirements for installation and replacement.'
    ]],
    ['p', 'For full information, see the Glass and Glazing Federation\'s Guide to Best Practice in the Specification and Use of Fire-Resistant Glazed Systems.'],
    ['h', 'Standards and testing'],
    ['p', 'Glazing in a door is tested with the doorset or assembly under the door standards from Unit 5, BS 476-22:1987 or BS EN 1634-1:2014.'],
    ['p', 'For European tested glazed systems, BS EN 1364-1 and BS EN 1634-1 allow some extensions under clearly defined direct application rules, always applying to the test result and report concerned. Going beyond direct application is possible only under the extended application rules of BS EN 15254-4 (glazed partitions) or BS EN 15269-2 or -3 (steel or timber doorsets), based on the collective judgement of industry experts. These are the European equivalent of UK assessments, but based on published rules and valid across Europe.'],
    ['p', 'Glass types and their EN product standards:'],
    ['ul', [
      'Wired (BS EN 572-3 and BS EN 572-6): integrity.',
      'Ceramic (BS EN 1748-2-1): integrity.',
      'Heat soaked thermally toughened soda lime silicate safety glass (BS EN 14179): integrity.',
      'Modified toughened soda lime silicate safety glass (BS EN 12150): integrity.',
      'Resin laminated (EN 14449): integrity.',
      'Laminated intumescent (EN 14449): integrity, or integrity and insulation.',
      'Gel laminated (EN 14449): integrity and insulation.',
      'Thermally toughened borosilicate safety glass (EN 13024): integrity.',
      'Thermally toughened alkaline earth silicate safety glass (EN 14321): integrity.'
    ]],
    ['h', 'Further reading'],
    ['ul', [
      'Glass and Glazing Federation: A Guide to Best Practice in the Specification and Use of Fire-Resistant Glazed Systems.',
      'Intumescent Fire Seals Association: The Role of Intumescent Materials in Timber and Metal Based Fire Resisting Glazing Systems.'
    ]]
  ]
});

/* Unit 7: Fire retardant coatings */
self.COURSE_READER.chapters.push({ id: 'm2u7', mod: 'm2', unit: 7, title: 'Unit 7: Fire retardant coatings',
  source: 'Attendees Resource Pack, Module Two, Revision 3 2023, rewritten in our own words',
  blocks: [
    ['p', 'Fire retardant treatments are everywhere: in furniture fabrics, mattresses and curtains, in protective clothing for firefighters, in electrical wiring and in insulation such as polystyrene and polyurethane foam. This unit concentrates on impregnation and coating systems that affect a building\'s built-in fire performance, mainly on wood and wood products in the building fabric: hardwoods (birch, ash, oak), softwoods (cedar, pine, larch), chipboard and medium density fibreboard (MDF).'],
    ['p', 'As part of the fire strategy, these systems help restrict the growth and spread of fire. But the performance achieved depends on the coating and the surface it is on or in, together. A flame retardant coating on softwood is likely to perform less well than on hardwood, because hardwood naturally performs better in fire. Correctly selected, specified and installed, these systems improve or maintain a substrate\'s fire retardant performance.'],
    ['h', 'Reaction to fire'],
    ['p', 'Performance depends on how the substrate and the treatment interact, described as reaction to fire (see Module One, Unit 4): the properties of a product that let a fire grow up to flashover in a room, including ignitability, spread of flame, heat release, combustibility, smoke production and toxicity. It is sometimes confused with resistance to fire, which is the ability of an element of construction to stop a fully grown fire leaving the room of origin.'],
    ['p', 'Reaction to fire asks what happens when a product meets fire: does it take part, spread flame over its surface, release significant heat, give off lots of smoke, alter the thermal environment, or not ignite, or ignite briefly and quickly go out? A fire retardant treatment on the surface aims to limit the damage from a small fire trying to grow, stopping it reaching unmanageable proportions. To avoid flashover, both heat release (fire propagation) and flame spread must be considered.'],
    ['h', 'Spread of flame and heat release'],
    ['p', 'Spread of flame testing measures how fast and how far flames spread across a surface, using a reproducible national standard test of the coated substrate. The result belongs to the coating AND the background it is on: a coating on a surface that already has low flame spread has an easier job than one on a high flame spread surface.'],
    ['p', 'Heat release is a comparative measure of how much heat a product contributes to fire growth. A heat release (fire propagation) test may be required as well as a flame spread test where national rules require a rating, typically for surfaces in escape routes and circulation areas in public buildings.'],
    ['h', 'How retardants work'],
    ['ul', [
      'Cooling: some chemical reactions are endothermic and actually cool the material.',
      'Forming a protective layer that stops the material underneath igniting.',
      'Dilution: some retardants release water and/or carbon dioxide when burning, which can dilute the radicals in the flame enough to put it out.'
    ]],
    ['h', 'Treatments for timber'],
    ['p', 'Timber and wood products can be treated to allow their use where better reaction to fire is needed. Unless the manufacturer has proper test evidence, assume flame retardant treatments make no significant contribution to the fire resistance of structures.'],
    ['p', 'Upgrading existing fire doors with flame retardant coatings is a case in point, especially where the door\'s appearance must be kept. As Unit 5 explained, testing applies to the whole door system: wood type and density, leaf thickness, structure and panelling, frame, hardware and gaps to floor and frame, and extra protection for fixings and panelling. Upgrading an ordinary door with a proprietary system needs very careful study of all the manufacturer\'s documents, ideally directed by a qualified fire consultant, and only a specialist installer should do it.'],
    ['p', 'Room surfaces and escape route linings may be limited in how far they can spread flame and release heat. Various products, some intumescent, claim to upgrade poor wall and ceiling linings, but again performance depends on the system AND the make-up and condition of the substrate. Several layers of old material of unknown origin, for example, can cause adhesion problems and poor fire performance. Always follow the manufacturer\'s guidance, backed by relevant testing to an appropriate standard.'],
    ['h', 'Generic options'],
    ['p', 'Fire retardant treatments for timber fall into two groups: impregnation with inorganic salt solutions or leach-resistant chemicals, and surface coatings.'],
    ['p', 'Impregnation: dipping alone will not get enough treatment in to reach Class 1 surface spread of flame or Class 0. That needs an industrial vacuum and pressure process to force the solution into the timber. Timbers that are hard to impregnate are also steamed to improve uptake. The water is then removed by controlled drying to limit degradation and distortion. Because it goes below the surface, impregnation resists abrasion better than coatings, but not all wood-based sheets tolerate the process, and some swell.'],
    ['p', 'Surface coatings come in two types:'],
    ['ul', [
      'Intumescent coatings: swell in fire to form a char, a thermally insulating layer that blocks heat and oxygen, controlling combustion at the surface.',
      'Ablative coatings: give off gases or vapours that interfere with the chemistry of the flame reactions.'
    ]],
    ['p', 'Either can be applied off site or in situ to a prepared surface. Do not overpaint existing painted surfaces without checking the paint manufacturer\'s guidance for compatibility. Some intumescent coatings are moisture sensitive, so check the system suits humid conditions.'],
    ['h', 'Points of consideration'],
    ['p', 'Impregnation is a factory controlled process, so site preparation does not apply. But the treatment usually forms an envelope around an untreated core, so timbers should be machined to roughly their final size before treatment, and later machining kept to a minimum: over-machining may remove the treated material. Operators may need protecting and treated wood waste disposed of carefully, so always consult the manufacturer first.'],
    ['p', 'Surface coatings can be factory applied or applied on site, where following the manufacturer\'s instructions is essential given the many conditions and substrates. In general:'],
    ['ul', [
      'Surfaces must be free of dirt, dust, wax, grease, oils, visible moisture and previous film forming coatings.',
      'Timber naturally discolours with age and UV; in some cases a primer is part of the system to reduce discolouration.',
      'A trial application to confirm adhesion and full cure before doing the whole area is good practice.',
      'Air and substrate temperature and relative humidity must be within the manufacturer\'s limits.',
      'Coatings can be brushed, rolled or sprayed, but the correct loading must be achieved, in one or more coats; otherwise efficiency drops and the stated performance is invalidated.'
    ]],
    ['h', 'Class 0'],
    ['p', 'Current English regulations refer to Class 0 for wall and ceiling linings. Class 0 is not a fire test: it combines the results of two British Standards, BS 476 Part 6 and Part 7, and is defined in supporting documents to building regulations rather than in a standard, which often causes confusion. Class 0 is met when a system achieves Class 1 surface spread of flame under BS 476 Part 7, and a fire propagation index (I) of no more than 12 with a sub-index (i1) of no more than 6 under BS 476 Part 6.'],
    ['h', 'BS 476 Part 6: fire propagation (heat release)'],
    ['p', 'Gives a fire propagation index, a comparative measure of how much an essentially flat material, composite or assembly contributes to fire growth, mainly for internal wall and ceiling linings. It shows performance in the early stages of a fire and depends on ignition characteristics, the amount and rate of heat release, and the material\'s ability to accelerate fire growth. The lower the index, the better. Test and calibration curves are compared, giving total index I = i1 + i2 + i3, from readings every thirty seconds up to three minutes, every minute from four to ten minutes, and every two minutes from twelve to twenty minutes. The calculation gives more weight to the early stages of the test.'],
    ['h', 'BS 476 Part 7: surface spread of flame'],
    ['p', 'Measures sideways flame spread along a specimen placed at right angles to a radiant heat source, by rate and extent, in four classes:'],
    ['ul', [
      'Class 1: no more than 165 mm at one and a half minutes and no more than 165 mm at the end of the test.',
      'Class 2: no more than 215 mm at one and a half minutes and 455 mm at the end.',
      'Class 3: no more than 265 mm at one and a half minutes and 710 mm at the end.',
      'Class 4: exceeds the Class 3 limits.'
    ]],
    ['h', 'European classification'],
    ['p', 'UK regulators historically chose BS 476 tests but now also refer to the European BS EN tests and classifications. The BS EN tests are different and the results are not equivalent; both are still accepted by the UK and Irish regulators. Test data from a set of methods, with formal specimen conditioning, gives a classification under EN 13501-1, with seven levels from A1 (best) to F (no performance determined).'],
    ['p', 'There are no direct equivalences, because some properties are measured differently, but as a rough guide: non-combustible = A1; limited combustibility = A2; Class 0 = B; Class 1 = B/C; Class 3 = D; Class 4 = E/F; not tested = NPD.'],
    ['p', 'The reaction to fire tests for building products are:'],
    ['ul', [
      'EN ISO 1182, non-combustibility: for homogeneous products and substantial components of non-homogeneous ones, relevant to classes A1 and A2 (and Af1 and Af2 for floorings). The weighed specimen sits in a basket with a thermocouple in its centre and another in the furnace, and is lowered into the furnace at 750°C for the full 20 minutes, logging temperatures and recording any flaming.',
      'EN ISO 1716, heat of combustion: a powdered specimen is burned in oxygen at constant volume in a bomb calorimeter calibrated with certified benzoic acid. It gives an absolute value of the total heat the product could generate, more than it would in a real fire.',
      'EN 13823, Single Burning Item (SBI): an intermediate scale open corner test of two vertical walls at 90°, measuring lateral flame spread, total and rate of heat release, flaming drips, and total and rate of smoke production. It simulates linings in a small room with a nominal 30 kW single burning item, such as a waste paper basket in the corner. Used, with other tests, for classes A2, B, C and D. Flooring uses EN ISO 9239-1 instead.',
      'EN ISO 11925-2, small flame test: a match size flame at 45° is applied in one movement for 15 or 30 seconds (depending on the class sought) to the surface or edge of a vertical specimen, with no other heat source. Flame spread must be under 150 mm above the point of application. Used with other tests for classes B, C and D, and on its own for E and F.'
    ]],
    ['h', 'Further reading'],
    ['ul', [
      'ASFP Orange Book: Guidance on the classification for reaction to fire performance of fire retardant coating systems.',
      'ASFP Guide to Passive Fire Protection for Fire Risk Assessors; ASFP Ensuring Best Practice for Passive Fire Protection in Buildings.'
    ]]
  ]
});
