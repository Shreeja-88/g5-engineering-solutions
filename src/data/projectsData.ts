import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'gold-mine-project',
    slug: 'gold-mine-project',
    title: 'Gold Mine Processing Complex',
    subtitle: 'Heavy Industrial Multi-Level Mineral Processing Structure',
    category: 'Industrial',
    structureType: 'Heavy Industrial Mineral Processing',
    location: 'Confidential Global Site',
    schedule: 'Fast-Track Phased Execution',
    tonnage: '1,200+ Tons',
    codeStandard: 'AISC / AWS D1.1',
    scope: 'Complete 3D Tekla Modeling, Structural Steel Detailing, Chutes & Equipment Supports, Part & Assembly Drawings',
    criticalChallenge: 'Complex multi-level structural steel system designed around specialized material-handling and mineral-processing equipment coordinated in a highly congested 3D environment with tight tolerances.',
    description: 'A completed flagship gold processing plant detailing project. The facility incorporates massive structural framing engineered around complex mechanical processing equipment including heavy vibratory chutes, feed splitter boxes, trommel screens, and discharge hoppers.',
    detailingApproach: [
      'Reviewed process flow diagrams, equipment cut sheets, and primary structural specifications to map all critical clearances.',
      'Developed an intelligent 3D structural model integrating primary framing, secondary bracing, maintenance walkways, and chute hanging systems.',
      'Coordinated steel geometry directly around mechanical equipment (Hopper, Splitter Box, Chutes, Trommel, Kibble, Launder).',
      'Conducted exhaustive automated and manual clash detection in Tekla Structures to resolve member conflicts before shop fabrication.',
      'Generated over 6,300 assembly drawings and 22,200 individual part drawings with comprehensive bolt lists and NC data.',
      'Multi-tier quality check and independent review by senior checkers ensuring zero shop-floor rework.'
    ],
    keyDeliverables: [
      '6,300+ Assembly Drawings',
      '22,200+ Part Drawings',
      '77,760+ Structural Elements Detailed',
      '80+ Mechanical Equipment Interfaces Coordinated',
      'Full NC / DXF Data for automated fabrication machinery'
    ],
    metrics: [
      { label: 'Steel Tonnage', value: '1,200+ Tons' },
      { label: 'Assembly Drawings', value: '6,300+' },
      { label: 'Part Drawings', value: '22,200+' },
      { label: 'Modeled Elements', value: '77,760+' },
      { label: 'Equipment Systems', value: '80+' }
    ],
    elementsCount: '77,760+',
    equipmentCount: '80+ Systems',
    images: {
      hero: '/assets/projects/gold_mine_hero.png',
      cadModel: '/assets/projects/gold_mine_substructures.png',
      details: [
        '/assets/projects/gold_mine_hopper.png',
        '/assets/projects/gold_mine_trommel.png'
      ]
    },
    featured: true
  },
  {
    id: 'civic-union-towers',
    slug: 'civic-union-towers',
    title: 'Civic Union Towers Frame',
    subtitle: 'Twin Architectural Sign Towers with Sloped & Skewed Geometry',
    category: 'Commercial',
    structureType: 'Architectural Sign Towers',
    location: 'El Paso, Texas 79901, USA',
    schedule: '1.5 Weeks',
    tonnage: 'Custom Tower Framing',
    codeStandard: 'AISC 360',
    scope: 'Structural Steel Detailing, Connection Geometry, Erection Modeling',
    criticalChallenge: 'Highly tapered tower framework with complex skewed columns and compound sloped diagonal bracing members intersecting at multi-planar spatial nodes.',
    description: 'Detailed two towering architectural sign pylons serving as the prominent civic beacon in downtown El Paso. The dynamic geometric profile required millimeter-accurate detailing of skewed plates, column splices, and stiffened base plates over deep concrete caissons.',
    detailingApproach: [
      'Built parametric 3D Tekla model based on architectural design intent and civil engineer foundation coordinates.',
      'Created custom joint configurations for multi-angle bracing members meeting at sloped column faces.',
      'Produced clear 3D isometric RFI packages early to clarify skewed anchor bolt orientations with the foundation contractor.',
      'Delivered shop assembly and erection drawings within an aggressive 1.5-week window.'
    ],
    keyDeliverables: [
      'Complete Erection Marking Plans',
      'Shop Fabrication Drawings for Tapered Columns',
      'Custom Multi-Planar Connection Detail Sheets',
      'Anchor Bolt Setting Templates with Precise Skew Angles'
    ],
    metrics: [
      { label: 'Project Schedule', value: '1.5 Weeks' },
      { label: 'Code Compliance', value: 'AISC 360' },
      { label: 'Geometry', value: 'Compound Skew' },
      { label: 'On-Time Status', value: '100% On-Time' }
    ],
    images: {
      hero: '/assets/projects/civic_union_towers_hero.png',
      cadModel: '/assets/projects/civic_union_towers_tekla.png',
      details: [
        '/assets/projects/civic_union_towers_plan.png'
      ]
    },
    featured: true
  },
  {
    id: 'sports-park-canopy',
    slug: 'sports-park-canopy',
    title: 'Sports Park Curved Canopy',
    subtitle: 'Curved Organic Roof Framing & Railing Enclosure',
    category: 'Commercial',
    structureType: 'Curved Architectural Canopy',
    location: 'Zaragoza Rd, El Paso, TX 79936, USA',
    schedule: '2 Weeks',
    tonnage: '4 Canopy Structures + Railings',
    codeStandard: 'AISC / AWS D1.1',
    scope: 'Structural steel detailing of 4 curved canopy structures and perimeter architectural railings',
    criticalChallenge: 'Compound-curved structural tube rafters supported by central built-up tapered tree columns, requiring precision bending coordinates and weld seam details.',
    description: 'Comprehensive structural detailing for four distinctive sports park shade canopies. The signature tree-branching structural column splays outward to carry sweeping radiused purlins and canopy decking in extreme wind load conditions.',
    detailingApproach: [
      'Modeled rolled structural hollow sections (HSS) with exact radius of curvature and camber coordinates.',
      'Engineered shop splices to facilitate highway transportation and rapid field erection.',
      'Supplied CNC tube-cutting files and bending templates for the pipe fabricator.',
      'Completed all 4 distinct canopy sets and handrail assemblies within 2 weeks.'
    ],
    keyDeliverables: [
      'Rolled Rafter Fabrication Sheets with Cut Coordinates',
      'Built-up Branching Column Shop Drawings',
      'Architectural Guardrail & Railing Schedules',
      'Field Bolt & Erection Sequencing Diagrams'
    ],
    metrics: [
      { label: 'Turnaround', value: '2 Weeks' },
      { label: 'Canopy Sets', value: '4 Complete Sets' },
      { label: 'Profile', value: 'Rolled HSS' },
      { label: 'Standard', value: 'AISC' }
    ],
    images: {
      hero: '/assets/projects/sports_park_canopy_hero.png',
      cadModel: '/assets/projects/sports_park_canopy_tekla.png',
      details: [
        '/assets/projects/sports_park_canopy_tree.png'
      ]
    },
    featured: true
  },
  {
    id: 'manassas-city-school-facility',
    slug: 'manassas-city-school-facility',
    title: 'Manassas City School Facility',
    subtitle: 'Multi-Wing Educational Facility with Interconnected Framing',
    category: 'Institutional',
    structureType: 'Educational & Municipal Campus',
    location: 'Manassas City, Virginia, USA',
    schedule: 'Phased Sequence',
    tonnage: '270+ Tons',
    codeStandard: 'AISC / AWS',
    scope: 'Structural Steel Detailing, Joist Coordination, Embed Layout, Folding Partition Steel, Roof Openings',
    criticalChallenge: 'Complex building layout comprising multiple interconnected wings, varied roof geometries, stepped elevations, and high density of concrete embeds.',
    description: 'Full BIM structural detailing for an advanced public educational complex in Manassas City, VA. Required seamless coordination between structural steel frames, steel joists, mechanical roof openings, operable acoustic partition headers, and cast-in concrete embeds.',
    detailingApproach: [
      'Synchronized multi-wing Tekla structural models across shared grids to ensure alignment at expansion joints.',
      'Detailed over 2,800 embedded plates and anchor assemblies for concrete tilt-up and masonry interfaces.',
      'Generated 1,500+ assembly drawings, 1,300+ part drawings, and 290+ erection mark plans.',
      'Coordinated structural support for folding partition walls and mechanical rooftop units.'
    ],
    keyDeliverables: [
      '1,500+ Assembly Drawings',
      '1,300+ Part Drawings',
      '2,800+ Concrete Embed Items Detailed',
      '290+ Erection Plans & Framing Details'
    ],
    metrics: [
      { label: 'Steel Tonnage', value: '270+ Tons' },
      { label: 'Embeds Detailed', value: '2,800+' },
      { label: 'Assembly Drawings', value: '1,500+' },
      { label: 'Erection Plans', value: '290+' }
    ],
    images: {
      hero: '/assets/projects/manassas_school_hero.png',
      cadModel: '/assets/projects/manassas_school_framing.png',
      details: [
        '/assets/projects/manassas_school_elevations.png'
      ]
    },
    featured: true
  },
  {
    id: 'delia-k12-replacement-school',
    slug: 'delia-k12-replacement-school',
    title: 'Delia K-12 Replacement School',
    subtitle: 'Comprehensive Institutional Campus Detailing to CISC Standards',
    category: 'Institutional',
    structureType: 'K-12 Educational Campus',
    location: '205 3rd Ave, Delia, Alberta, Canada',
    schedule: '3 Weeks',
    tonnage: '160 Tons',
    codeStandard: 'CISC (Canadian Institute of Steel Construction)',
    scope: 'Complete Structural Steel Detailing, Joists, Deck, Skewed Framing & Misc. Steels',
    criticalChallenge: 'Skewed and sloped roof members requiring close coordination with open-web steel joists, load-bearing masonry walls, and architectural clerestory glazing.',
    description: 'Detailed structural framing for the replacement K-12 school in Delia, Alberta. The project adhered strictly to Canadian Institute of Steel Construction (CISC) standards, incorporating gymnasium high-bay framing, classroom wings, and administrative spaces.',
    detailingApproach: [
      'Executed 3D Tekla modeling to Canadian metric standards with CISC connection conventions.',
      'Coordinated interface points with pre-engineered joist suppliers and architectural wall stud systems.',
      'Detailed all miscellaneous metals including roof access ship ladders, guardrails, and mechanical dunnage.',
      'Delivered full fabrication package in 3 weeks, enabling on-time winter erection in Alberta.'
    ],
    keyDeliverables: [
      'CISC-compliant Shop Drawings',
      'Joist & Deck Coordination Layouts',
      'Miscellaneous Metal Details (Caged Ladders, Stairs, Railings)',
      'Erection Diagrams with Field Bolt Schedules'
    ],
    metrics: [
      { label: 'Steel Tonnage', value: '160 Tons' },
      { label: 'Schedule', value: '3 Weeks' },
      { label: 'Standard', value: 'CISC Canadian' },
      { label: 'Facility', value: 'K-12 Campus' }
    ],
    images: {
      hero: '/assets/projects/delia_school_hero.png',
      cadModel: '/assets/projects/delia_school_hero.png',
      details: [
        '/assets/projects/delia_school_ladder.png',
        '/assets/projects/delia_school_connection.png'
      ]
    },
    featured: true
  },
  {
    id: 'riverfront-amphitheater',
    slug: 'riverfront-amphitheater',
    title: 'Riverfront Amphitheater',
    subtitle: 'Multi-Segmented Radial Tubular Arch Structure',
    category: 'Commercial',
    structureType: 'Open-Air Amphitheater Canopy',
    location: 'Alexandria, LA 71301, USA',
    schedule: '2 Weeks',
    tonnage: 'Architectural Arch Tube Frame',
    codeStandard: 'AISC 360 / AWS',
    scope: 'Structural Steel Detailing, Curved Geometry Calculations, Deck Interface Coordination',
    criticalChallenge: 'Multi-segmented radial tube steels forming concentric parabolic arches with compound purlin bevels and tensile membrane/deck interface connections.',
    description: 'An iconic open-air riverfront performance venue canopy in Alexandria, Louisiana. The structure consists of multiple segmented concentric curved steel pipe arches creating an acoustic shell over the amphitheater stage.',
    detailingApproach: [
      'Calculated work point geometry and tangent angles for all tubular arch segments using mathematical curve unrolling.',
      'Modeled heavy base shoe hinge assemblies anchored to stepped concrete abutments.',
      'Detailed radial bracing struts and purlin deck clips to match curving acoustic roof profile.',
      'Delivered shop drawings and bend schedules in 2 weeks.'
    ],
    keyDeliverables: [
      'Segmented Arch Pipe Shop Sheets with True Radius Dimensions',
      'Deck & Purlin Coordination Layouts',
      'Base Shoe & Anchor Bolt Setting Templates',
      'Assembly Weld Procedures & Field Erection Instructions'
    ],
    metrics: [
      { label: 'Schedule', value: '2 Weeks' },
      { label: 'Geometry', value: 'Radial Segmented Arch' },
      { label: 'Code', value: 'AISC 360' },
      { label: 'Location', value: 'Alexandria, LA' }
    ],
    images: {
      hero: '/assets/projects/riverfront_amphitheater_hero.png',
      cadModel: '/assets/projects/riverfront_amphitheater_tekla.png',
      details: [
        '/assets/projects/riverfront_amphitheater_drawing.png'
      ]
    },
    featured: true
  },
  {
    id: 'commonwealth-pier-phase-2',
    slug: 'commonwealth-pier-phase-2',
    title: 'Commonwealth Pier — Phase 2',
    subtitle: 'Harbor Marine Pier Revitalization & Gangway Structures',
    category: 'Infrastructure',
    structureType: 'Marine Waterfront & Pier Construction',
    location: '255 State Street, Boston, MA 02109, USA',
    schedule: '3 Weeks',
    tonnage: '275 Tons',
    codeStandard: 'AISC / AWS Marine Standards',
    scope: 'Structural Steel Detailing, Pile Caps, Deck Framing, Gangways & Guardrails',
    criticalChallenge: 'Marine environment detailing requiring heavy galvanized corrosion-resistant connection hardware, pile collar attachments, and tight tidal elevation constraints.',
    description: 'Structural detailing for the iconic Commonwealth Pier revitalisation along Boston Harbor. Includes deep pile cap collars, heavy platform stringers, timber-deck support steel, and modular pedestrian gangway spans.',
    detailingApproach: [
      'Engineered detailing with hot-dip galvanizing allowances, oversized bolt hole clearances, and vent holes.',
      'Coordinated steel pipe pile attachments with underwater foundation survey data.',
      'Produced fabrication packages for heavy offshore marine contractors.',
      'Delivered 275 tons of detailing deliverables in 3 weeks.'
    ],
    keyDeliverables: [
      'Pile Collar & Stiffened Cap Assemblies',
      'Main Marine Deck Framing Mark Plans',
      'Galvanizing Drain / Vent Hole Schedules',
      'Pedestrian Gangway Shop Drawings'
    ],
    metrics: [
      { label: 'Steel Tonnage', value: '275 Tons' },
      { label: 'Schedule', value: '3 Weeks' },
      { label: 'Application', value: 'Marine Construction' },
      { label: 'Port City', value: 'Boston, MA' }
    ],
    images: {
      hero: '/assets/projects/commonwealth_pier_gangway.png',
      cadModel: '/assets/projects/commonwealth_pier_gangway.png',
      details: [
        '/assets/projects/commonwealth_pier_pile.png'
      ]
    },
    featured: true
  },
  {
    id: 'kane-school-spiral-stair',
    slug: 'kane-school-spiral-stair',
    title: 'Kane School Curved Spiral Stair',
    subtitle: 'Architectural Feature Spiral Staircase & Integrated Guardrail',
    category: 'Institutional',
    structureType: 'Architectural Spiral Stair & Balustrade',
    location: 'Alberta Infrastructure, St. Albert School Division, Canada',
    schedule: '1 Week',
    tonnage: '5 Tons Architectural Steel',
    codeStandard: 'CISC / National Building Code of Canada',
    scope: 'Parametric Spiral Stair Detailing, Rolled Stringers, Treads & Curved Guardrails',
    criticalChallenge: 'Precision helical stringer unrolling with uniform tread riser ratios, smooth radius handrails, and clean concealed structural welds.',
    description: 'Detailed a showcase curved spiral stair for a civic school facility in St. Albert, Alberta. Required exacting mathematical precision to unroll helical stringer plates and align glass/steel architectural guardrails.',
    detailingApproach: [
      'Generated 3D helical spiral model with exact pitch and inner/outer stringer radiuses.',
      'Supplied flattened plate development patterns with brake press bend lines for the fabrication shop.',
      'Detailed stainless steel handrail brackets and anti-slip tread inserts.',
      'Completed in a rapid 1-week turnaround with zero site fit-up adjustments.'
    ],
    keyDeliverables: [
      'Unrolled Helical Plate DXF Cutting Patterns',
      'Tread Pan & Riser Fabrication Sheets',
      'Curved Pipe Handrail Schedules',
      'Field Splicing & Anchor Plate Details'
    ],
    metrics: [
      { label: 'Turnaround', value: '1 Week' },
      { label: 'Steel Tonnage', value: '5 Tons' },
      { label: 'Stair Profile', value: 'True Helical Spiral' },
      { label: 'Jurisdiction', value: 'Alberta, Canada' }
    ],
    images: {
      hero: '/assets/projects/kane_spiral_stair_hero.png',
      cadModel: '/assets/projects/kane_spiral_stair_plan.png',
      details: [
        '/assets/projects/kane_spiral_stair_hero.png'
      ]
    },
    featured: false
  },
  {
    id: 'power-plant-construction-office',
    slug: 'power-plant-construction-office',
    title: "Owner's Construction Office — Power Plant",
    subtitle: 'Multi-Bay Industrial Facility with Spliced Trusses',
    category: 'Industrial',
    structureType: 'Heavy Industrial Power Plant Building',
    location: 'Industrial Complex, India',
    schedule: '2 Weeks',
    tonnage: '160 Tons',
    codeStandard: 'Indian Standards (IS 800) / AISC',
    scope: 'Connection Design & Complete Structural Steel Detailing',
    criticalChallenge: 'Over 17,000 distinct structural elements. Optimized connection design for lower member profiles to minimize steel tonnage while accommodating spliced long-span roof trusses.',
    description: 'Turnkey structural detailing and connection design calculations for the primary administrative and engineering control facility of a major thermal power project. Heavy focus on steel weight optimization and constructability.',
    detailingApproach: [
      'Designed efficient moment and shear connections to permit lighter beam/column sections, lowering overall project tonnage.',
      'Modeled multi-segment spliced roof trusses with bolted field splices to ease trucking.',
      'Coordinated gantry crane brackets, wall purlins, and industrial glazing framing.',
      'Completed detailing of all 17,000+ components in 2 weeks.'
    ],
    keyDeliverables: [
      'Connection Design Calculation Booklets',
      'Spliced Truss Shop & Assembly Sheets',
      'Advanced Bill of Materials (ABM) for procurement',
      'Erection Sequences for Crane Bays'
    ],
    metrics: [
      { label: 'Elements', value: '17,000+ Items' },
      { label: 'Steel Tonnage', value: '160 Tons' },
      { label: 'Schedule', value: '2 Weeks' },
      { label: 'Standard', value: 'IS 800 / AISC' }
    ],
    images: {
      hero: '/assets/projects/power_plant_office_hero.png',
      cadModel: '/assets/projects/power_plant_office_framing.png',
      details: [
        '/assets/projects/power_plant_office_tekla.png'
      ]
    },
    featured: false
  },
  {
    id: 'power-plant-owners-store',
    slug: 'power-plant-owners-store',
    title: "Owner's Store Facility — Power Plant",
    subtitle: 'Curved Barrel-Vaulted Industrial Warehouse & Logistics Center',
    category: 'Industrial',
    structureType: 'Long-Span Industrial Warehouse & Store',
    location: 'Industrial Complex, India',
    schedule: '2 Weeks',
    tonnage: '186 Tons',
    codeStandard: 'IS 800 / AISC',
    scope: 'Connection Design & Complete Structural Steel Detailing',
    criticalChallenge: 'Consisted of more than 12,000 elements. Engineered connection design for curved and spliced bowstring trusses to maintain high internal clearance while keeping tonnage minimal.',
    description: 'Detailed a large-span industrial equipment store and warehouse featuring sweeping curved roof trusses and overhead crane runways. Optimized profile selections significantly reduced steel raw material costs.',
    detailingApproach: [
      'Modeled 12,000+ elements with curved tubular top chords and spliced tie members.',
      'Engineered connection joints to satisfy wind uplifting forces and crane dynamic vibration.',
      'Generated optimized cut lists reducing scrap wastage to less than 2.5%.',
      'Delivered shop packages on schedule in 2 weeks.'
    ],
    keyDeliverables: [
      'Bowstring Truss Fabrication Drawings',
      'Crane Runway Beam Splice & Rail Clip Details',
      'MTO Length Optimization Reports',
      'Anchor Bolt Layout Plans'
    ],
    metrics: [
      { label: 'Elements', value: '12,000+ Items' },
      { label: 'Steel Tonnage', value: '186 Tons' },
      { label: 'Schedule', value: '2 Weeks' },
      { label: 'Truss Type', value: 'Curved Bowstring' }
    ],
    images: {
      hero: '/assets/projects/power_plant_store_hero.png',
      cadModel: '/assets/projects/power_plant_store_truss.png',
      details: [
        '/assets/projects/power_plant_store_connection.png'
      ]
    },
    featured: false
  },
  {
    id: 'chlorine-dioxide-system-stair-tower',
    slug: 'chlorine-dioxide-system-stair-tower',
    title: 'Chlorine Dioxide System Access Tower',
    subtitle: 'Industrial Chemical Access Tower with Grating & Pipe Railings',
    category: 'Industrial',
    structureType: 'Process Industrial Stair Tower',
    location: 'Middle East Petrochemical Complex',
    schedule: '0.5 Weeks (Fast-Track)',
    tonnage: 'Custom Multi-Tier Tower',
    codeStandard: 'AISC / OSHA / British Standards',
    scope: 'Structural Steel Detailing, Industrial Grating, Safety Railings, Equipment Access',
    criticalChallenge: 'Rapid 3.5-day turnaround for a complex stair tower with anti-slip bar grating treads, continuous pipe handrails, and strict petrochemical safety clearances.',
    description: 'Designed and detailed a multi-flight industrial access tower for a chlorine dioxide chemical treatment facility in the Middle East. Prioritized worker safety, clear headroom, and simple field bolt-up.',
    detailingApproach: [
      'Modeled stringers, platform landings, kick plates, and welded pipe guardrails.',
      'Ensured full compliance with OSHA safety standards for stair angles and handrail heights.',
      'Integrated galvanized bar grating layouts with accurate cutouts around piping penetrations.',
      'Delivered complete fabrication package in just 3.5 business days.'
    ],
    keyDeliverables: [
      'Stair Flight Assembly Drawings',
      'OSHA Compliant Handrail Modules',
      'Bar Grating Cutout & Fastener Plans',
      'Column Anchor Base Plates'
    ],
    metrics: [
      { label: 'Turnaround', value: '0.5 Weeks' },
      { label: 'Standards', value: 'OSHA / AISC' },
      { label: 'Sector', value: 'Petrochemical' },
      { label: 'Region', value: 'Middle East' }
    ],
    images: {
      hero: '/assets/projects/chlorine_stair_tower_hero.png',
      cadModel: '/assets/projects/chlorine_stair_tower_wireframe.png',
      details: [
        '/assets/projects/chlorine_stair_tower_erected.png'
      ]
    },
    featured: false
  },
  {
    id: 'hawbridge-school-upper-campus',
    slug: 'hawbridge-school-upper-campus',
    title: 'The Hawbridge School Upper Campus',
    subtitle: 'Educational Facility Structural Steel Detailing',
    category: 'Institutional',
    structureType: 'School Classroom & Commons Building',
    location: 'Saxapahaw, Alamance County, NC, USA',
    schedule: '1 Week',
    tonnage: '90 Tons',
    codeStandard: 'AISC',
    scope: 'Structural Steel Detailing, Erection Plans, Shop Drawings',
    criticalChallenge: 'Rapid 1-week turnaround for complete building structural steel detailing with gable roof framing, exterior entry stairs, and structural mezzanines.',
    description: 'Structural steel detailing for the new upper school facility in Saxapahaw, North Carolina. Coordinated structural steel frame with architectural gable roofs and open learning commons.',
    detailingApproach: [
      'Built fast-track 3D Tekla model from engineering and architectural contract drawings.',
      'Detailed all perimeter roof beams, columns, knee braces, and moment frames.',
      'Provided advanced bill of materials to expedite steel mill orders.',
      'Delivered complete shop drawings within 1 week.'
    ],
    keyDeliverables: [
      'Full Shop Fabrication Drawings',
      'Field Erection Plans',
      'Advanced Bill of Materials (ABM)',
      'Exterior Canopy Framing Details'
    ],
    metrics: [
      { label: 'Steel Tonnage', value: '90 Tons' },
      { label: 'Schedule', value: '1 Week' },
      { label: 'Code', value: 'AISC' },
      { label: 'Location', value: 'North Carolina, USA' }
    ],
    images: {
      hero: '/assets/projects/hawbridge_school_hero.png',
      cadModel: '/assets/projects/hawbridge_school_hero.png',
      details: [
        '/assets/projects/hawbridge_school_hero.png'
      ]
    },
    featured: false
  }
];
