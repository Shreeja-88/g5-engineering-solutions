import { ServiceItem, MetricStat, ProcessStep } from '../types';

export const companyProfile = {
  name: 'G5 Engineering Solutions Pvt. Ltd.',
  shortName: 'G5 Engineering',
  tagline: 'Precision that builds possibilities.',
  motto: 'Serve for quality',
  foundedYear: 2019,
  hqCity: 'Mysore, India',
  address: {
    street: '#7680, 80ft Road, 2nd Phase, 4th Stage',
    area: 'Vijay Nagar',
    city: 'Mysore',
    pincode: '570017',
    state: 'Karnataka',
    country: 'India'
  },
  contact: {
    globalPhone: '+1 213 402 0495',
    indiaPhone: '+91 89702 00082',
    email: 'anil@g5engineerings.com',
    website: 'www.g5engineerings.com'
  },
  mission: 'To provide engineering solutions and defect-free shop drawings, working as an extended team so our clients can focus on building relationships and managing their business.',
  vision: 'To enhance our clients’ engineering capabilities by providing cost-effective design and drafting solutions — building long-lasting relationships and strengthening your company’s image.',
  teamQuote: 'The strength of our team is each individual member. The strength of each member is our team.'
};

export const heroStats: MetricStat[] = [
  { value: '30,000+', label: 'Tons Detailed', sublabel: 'Across commercial & industrial projects' },
  { value: '90%', label: 'On-Time Delivery', sublabel: 'Strict adherence to client milestones' },
  { value: '70+', label: 'Engineers', sublabel: 'Operating in 3 rotational shifts' },
  { value: '40+', label: 'Global Clients', sublabel: 'US, Canada, UK, India & Middle East' },
  { value: '24×7', label: 'Customer Support', sublabel: 'Continuous global coordination' }
];

export const operationalCapacity: MetricStat[] = [
  { value: '10,000+', label: 'Detailing Hours / Month', sublabel: 'Scalable production capacity' },
  { value: '1,000+', label: 'Tons Detailed / Month', sublabel: 'Fabrication-ready steel' },
  { value: '2,000+', label: 'MTO Hours / Month', sublabel: 'Optimized material take-offs' },
  { value: '100', label: 'Work Stations', sublabel: 'Latest high-performance hardware' },
  { value: '18', label: 'Licensed Tekla Stations', sublabel: 'Official structural licenses' },
  { value: '12', label: 'Model-Sharing Stations', sublabel: 'Real-time multi-user BIM sync' }
];

export const trackRecordStats = [
  { value: '30', label: 'Large Scale Projects' },
  { value: '150', label: 'Medium Projects' },
  { value: '200', label: 'Small Projects' },
  { value: '90%', label: 'On-Time Delivery Rate' },
  { value: '600+', label: 'Telecom & Transmission Towers' },
  { value: '300+', label: 'Radome & Concealment Panels' },
  { value: '300+', label: 'Reinforcement Detailing' },
  { value: '1,000+', label: 'Material Take-Offs Delivered' }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'structural-steel-detailing',
    number: '01',
    title: 'Structural Steel Detailing',
    headline: 'Fabrication-ready clarity for complex geometry.',
    summary: 'From detailed erection drawings to fabrication-ready shop drawings, we deliver precise structural detailing solutions that keep shop floors running efficiently.',
    deliverables: [
      'Detailed erection drawings with comprehensive mark plans',
      'Clear, single-part and assembly fabrication shop drawings',
      '3D isometric drawings and clarity views for proactive RFIs',
      'Advanced Bill of Materials (ABM) and procurement reports',
      'Electronic CNC, DXF, and KISS data for automated workshop equipment',
      'Anchor bolt layout plans and cast-in embed templates',
      'Specialized concealment tower and architectural steel detailing'
    ],
    image: '/assets/projects/g5_structural_complex_3d.png',
    standards: ['AISC', 'CISC', 'IS 800', 'BS 5950']
  },
  {
    id: 'connection-design-calculation',
    number: '02',
    title: 'Connection Design & Calculation',
    headline: 'Engineering-driven connections focused on constructability.',
    summary: 'Engineering-driven connection design and calculations focused on structural efficiency, shop economy, and safe, swift erection in the field.',
    deliverables: [
      'Comprehensive connection design calculation booklets',
      'Moment, shear, vertical diagonal, and seismic joint engineering',
      'Professional engineering (PE) review and coordination',
      'Professional engineering stamping and sign-off (by location)',
      'Constructability review to lower weld volume and bolt count',
      'Standardized connection libraries tailored to fabricator preferences'
    ],
    image: '/assets/projects/power_plant_store_connection.png',
    standards: ['AISC 360', 'AWS D1.1', 'NISD', 'IS 800']
  },
  {
    id: 'material-take-off',
    number: '03',
    title: 'Material Take-Off (MTO)',
    headline: 'Sharper bids through mill-accurate material estimation.',
    summary: 'Accurate material quantities, customized MTO reports, and optimized material lengths to support precise estimation and efficient project planning.',
    deliverables: [
      'Accurate stick models and preliminary connected 3D models',
      'Customized MTO summary reports categorized by grade and profile',
      'Most optimal procurement lengths to minimize drop wastage',
      'Importable Tekla 3D estimation models for client estimators',
      'Fast-turnaround bid support for competitive fabricator tenders',
      'Bolt and fastener schedules with hardware specifications'
    ],
    image: '/assets/projects/power_plant_store_truss.png',
    standards: ['ASTM', 'AISC', 'CISC', 'IS']
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Thoroughly review design contract drawings, architectural intent, specifications, and client detailing preferences.',
    deliverables: ['Scope matrix', 'Design discrepancy log', 'Initial RFI generation']
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Establish project execution schedule, detailing sequencing, fabrication lots, and model coordination milestones.',
    deliverables: ['Project detailing schedule', 'Sequence zoning plan', 'Milestone dates']
  },
  {
    step: '03',
    title: 'Model',
    description: 'Develop intelligent, coordinate-accurate 3D structural models incorporating primary frames, bracing, and secondary steel.',
    deliverables: ['Parametric 3D Tekla model', 'Preliminary anchor bolt plan', 'ABM report']
  },
  {
    step: '04',
    title: 'Coordinate',
    description: 'Perform rigorous spatial clash detection, equipment coordination, and resolve interface conflicts with other trades.',
    deliverables: ['Clash resolution reports', 'Clear isometric RFIs', 'Multidisciplinary sign-off']
  },
  {
    step: '05',
    title: 'Detail',
    description: 'Generate high-clarity fabrication shop drawings, assembly mark sheets, and machine-readable CNC files.',
    deliverables: ['Erection mark drawings', 'Assembly & single-part sheets', 'NC1/DXF machine data']
  },
  {
    step: '06',
    title: 'Quality Check',
    description: 'Independent multi-tier checking by senior engineers against checklists, contract documents, and client standards.',
    deliverables: ['Internal QC sign-off audit', 'Defect-free release package', 'Transmittal record']
  }
];

export const whyChooseG5 = [
  {
    number: '01',
    title: 'Experience & Expertise',
    description: 'Years in the industry across complex, large-scale industrial and commercial structures have honed our technical mastery and domain instinct.'
  },
  {
    number: '02',
    title: 'Attention to Detail',
    description: 'Drawings that strictly adhere to every specification, code, and fabricator shop rule — leaving zero room for ambiguity on the shop floor.'
  },
  {
    number: '03',
    title: 'Collaborative Approach',
    description: 'Transparent communication across time zones. We operate as an organic extension of your engineering and fabrication team.'
  },
  {
    number: '04',
    title: 'Efficient Turnaround',
    description: 'Streamlined workflows, automated routines, and 3-shift operational capacity ensure critical deliverables arrive within agreed timeframes.'
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description: 'Rigorous multi-tier quality control by dedicated checkers protects the integrity and constructability of every single drawing.'
  },
  {
    number: '06',
    title: 'Technology Advancement',
    description: 'Licensed Tekla Structures, SDS/2, and cloud model-sharing provide an intelligent, real-time representation of your structural assets.'
  }
];

export const standardsAndCodes = [
  { code: 'AISC', title: 'American Institute of Steel Construction', region: 'United States' },
  { code: 'NISD', title: 'National Information Society of Detailing', region: 'North America' },
  { code: 'AWS D1.1', title: 'American Welding Society Structural Code', region: 'International' },
  { code: 'OSHA', title: 'Occupational Safety and Health Administration', region: 'Safety Standards' },
  { code: 'CISC', title: 'Canadian Institute of Steel Construction', region: 'Canada' },
  { code: 'IS 800', title: 'Bureau of Indian Standards', region: 'India' },
  { code: 'BS 5950 / EN', title: 'British & European Structural Standards', region: 'UK & Europe' },
  { code: 'SANS', title: 'South African National Standards', region: 'South Africa' }
];

export const softwareTools = [
  { name: 'Tekla Structures', type: '3D BIM Structural Modeling & Detailing', licensed: '18 Dedicated Seats' },
  { name: 'Tekla Model Sharing', type: 'Cloud Multi-User Collaborative Modeling', licensed: '12 Connected Seats' },
  { name: 'SDS/2', type: 'Automated 3D Steel Detailing & Connection Engine', licensed: 'Enterprise Workstations' },
  { name: 'AutoCAD', type: '2D Drafting & General Arrangement Layouts', licensed: 'Multi-Seat Deployment' },
  { name: 'Navisworks', type: '3D Multi-Trade BIM Coordination & Clash Review', licensed: 'Coordination Suite' }
];

export const structuresDetailed = [
  'Heavy Industrial & Process Plants',
  'Refinery & Petrochemical Structures',
  'Schools, Commercial & Hospitals',
  'Residential & Mixed-Use Framing',
  'Civil & Transportation Hubs',
  'Industrial Conveyors & Transfer Towers',
  'Highway & Pedestrian Bridges',
  'Telecom & Transmission Towers',
  'Architectural Canopies & Portals',
  'Curved Stairs & Marine Waterfront'
];
