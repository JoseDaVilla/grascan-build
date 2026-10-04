/**
 * Contenido del sitio tomado del documento "Website GRASCAN BUILD" (estructura y textos del cliente).
 * Los textos se reproducen tal cual; sólo se corrigieron erratas evidentes
 * ("decisionmaking" → "decision-making", "multiresidential" → "multi-residential").
 */
export type ServiceIcon =
  | 'building'
  | 'commercial'
  | 'industrial'
  | 'institutional'
  | 'healthcare'
  | 'residential'
  | 'rehab'
  | 'designbuild'
  | 'cm'
  | 'precon'
  | 'gc'
  | 'interior'
  | 'envelope'
  | 'concrete'
  | 'site';

export interface Offering {
  /** Ancla en /services (sólo si el servicio tiene sección propia en la página Services). */
  slug?: string;
  title: string;
  /** Subtítulo corto del documento (p. ej. "Early involvement creates better decisions."). */
  tagline?: string;
  text: string;
  icon: ServiceIcon;
  /** Alcances mencionados en el propio texto del documento. */
  scope?: string[];
}

/* ------------------------------------------------------------------ */
/*  WHAT WE BUILD (Home)                                               */
/* ------------------------------------------------------------------ */
export const whatWeBuild = {
  title: 'Building the places that shape Ontario.',
  intro: [
    'Grascan Build delivers commercial, industrial, institutional and mixed-use buildings designed around the needs of the people and organizations they serve.',
    'From new construction to complex renovations and building rehabilitation, we bring together experienced teams, disciplined project management and a practical understanding of construction to deliver buildings that perform today and stand the test of time.',
  ],
  closing: 'Built for purpose. Built for performance. Built for the future.',
};

export const sectors: Offering[] = [
  {
    slug: 'commercial-construction',
    title: 'Commercial',
    text: 'From office environments and retail spaces to complex mixed-use developments, we deliver commercial buildings with a focus on functionality, quality and long-term value.',
    icon: 'commercial',
    scope: ['Office environments', 'Retail spaces', 'Mixed-use developments'],
  },
  {
    slug: 'industrial-construction',
    title: 'Industrial',
    text: 'We build the facilities that support Ontario’s economy, including manufacturing, distribution, logistics and specialized industrial environments where performance, coordination and schedule are critical.',
    icon: 'industrial',
    scope: ['Manufacturing', 'Distribution', 'Logistics', 'Specialized industrial environments'],
  },
  {
    slug: 'institutional-construction',
    title: 'Institutional',
    text: 'We deliver buildings that serve the public and the communities around them, including education, government, civic and other institutional facilities.',
    icon: 'institutional',
    scope: ['Education', 'Government', 'Civic', 'Other institutional facilities'],
  },
  {
    title: 'Healthcare',
    text: 'We understand the heightened requirements of healthcare environments, where safety, coordination, quality and continuity of operations are essential.',
    icon: 'healthcare',
  },
  {
    slug: 'residential-mixed-use',
    title: 'Residential & Mixed-Use',
    text: 'From multi-residential developments to integrated mixed-use communities, we coordinate the structural, technical and architectural requirements necessary to deliver complex urban projects.',
    icon: 'residential',
    scope: ['Multi-residential developments', 'Integrated mixed-use communities'],
  },
  {
    slug: 'building-rehabilitation',
    title: 'Building Rehabilitation',
    text: 'We extend the life and value of existing buildings through thoughtful renovation, modernization, structural improvements and adaptive reuse.',
    icon: 'rehab',
  },
];

/* ------------------------------------------------------------------ */
/*  WHAT WE DO (Home)                                                  */
/* ------------------------------------------------------------------ */
export const whatWeDo = {
  title: 'From planning to completion.',
  intro: [
    'Grascan Build provides integrated construction services across the full project lifecycle. We work with owners, developers, architects, consultants and trade partners to establish clear objectives, manage complexity and deliver with discipline.',
    'Our approach brings planning, construction expertise and project leadership together from the earliest stages of a project through completion.',
  ],
};

export const capabilities: Offering[] = [
  {
    slug: 'pre-construction',
    title: 'Pre-Construction',
    tagline: 'Early involvement creates better decisions.',
    text: 'Our pre-construction teams help establish realistic budgets, schedules, procurement strategies and construction plans before work begins. Through estimating, constructability review, value engineering and risk management, we identify opportunities early and create greater certainty for our clients.',
    icon: 'precon',
    scope: ['Budgets & schedules', 'Procurement strategies', 'Estimating', 'Constructability review', 'Value engineering', 'Risk management'],
  },
  {
    title: 'General Contracting',
    tagline: 'Complete responsibility. Disciplined execution.',
    text: 'As General Contractor, we coordinate the people, materials, trades and processes required to deliver the project safely, efficiently and to the required standard.',
    icon: 'gc',
  },
  {
    slug: 'construction-management',
    title: 'Construction Management',
    tagline: 'Experience applied to complexity.',
    text: 'Our construction management teams provide the leadership, coordination and controls required to manage complex projects, from procurement and scheduling to cost management, quality and field execution.',
    icon: 'cm',
    scope: ['Procurement', 'Scheduling', 'Cost management', 'Quality', 'Field execution'],
  },
  {
    slug: 'design-build',
    title: 'Design-Build',
    tagline: 'One team. One point of accountability.',
    text: 'Our Design-Build approach brings design and construction together to improve coordination, accelerate decision-making and create greater alignment between project objectives, cost and schedule.',
    icon: 'designbuild',
  },
  {
    slug: 'building-construction',
    title: 'Building Construction',
    tagline: 'From foundations to final finishes.',
    text: 'We coordinate the structural, architectural and building systems required to deliver high-performance buildings, working closely with specialized trade partners and consultants throughout construction.',
    icon: 'building',
    scope: ['Structural', 'Architectural', 'Building systems'],
  },
  {
    slug: 'interior-construction',
    title: 'Interior Construction',
    tagline: 'Spaces designed for the people who use them.',
    text: 'We deliver commercial interiors, tenant improvements, fit-outs and specialized environments with careful attention to coordination, finishes, functionality and schedule.',
    icon: 'interior',
    scope: ['Commercial interiors', 'Tenant improvements', 'Fit-outs', 'Specialized environments'],
  },
  {
    slug: 'building-rehabilitation',
    title: 'Building Rehabilitation',
    tagline: 'Improving what already exists.',
    text: 'We modernize and restore existing buildings through structural upgrades, building improvements, adaptive reuse and carefully managed renovation programs.',
    icon: 'rehab',
    scope: ['Structural upgrades', 'Building improvements', 'Adaptive reuse', 'Renovation programs'],
  },
  {
    slug: 'building-envelope',
    title: 'Building Envelope',
    tagline: 'Performance begins at the exterior.',
    text: 'We coordinate the systems that protect a building from the elements, including façades, roofing, glazing, waterproofing, insulation and other envelope components.',
    icon: 'envelope',
    scope: ['Façades', 'Roofing', 'Glazing', 'Waterproofing', 'Insulation'],
  },
  {
    title: 'Concrete & Structures',
    tagline: 'Strength begins with the structure.',
    text: 'Our teams manage structural concrete, foundations, slabs, structural steel and related building systems with a focus on precision, coordination and quality.',
    icon: 'concrete',
  },
  {
    slug: 'site-development',
    title: 'Site Development',
    tagline: 'Preparing the ground for what comes next.',
    text: 'We coordinate excavation, grading, servicing, utilities, site concrete, access and related site works to create a complete construction solution from the ground up.',
    icon: 'site',
    scope: ['Excavation', 'Grading', 'Servicing & utilities', 'Site concrete', 'Access'],
  },
];

/* ------------------------------------------------------------------ */
/*  SERVICES (página Services): los 12 servicios, en el orden del documento */
/* ------------------------------------------------------------------ */
const bySlug = (list: Offering[], slug: string) => list.find((o) => o.slug === slug)!;
const sector = (slug: string, title: string): Offering => ({ ...bySlug(sectors, slug), title });
const capability = (slug: string, title?: string): Offering => {
  const o = bySlug(capabilities, slug);
  return title ? { ...o, title } : o;
};

export const services: Offering[] = [
  capability('building-construction'),
  sector('commercial-construction', 'Commercial Construction'),
  sector('industrial-construction', 'Industrial Construction'),
  sector('institutional-construction', 'Institutional Construction'),
  sector('residential-mixed-use', 'Residential & Mixed-Use'),
  capability('design-build', 'Design/Build'),
  capability('construction-management'),
  capability('pre-construction'),
  capability('building-rehabilitation'),
  capability('interior-construction'),
  capability('building-envelope'),
  capability('site-development'),
];

/* ------------------------------------------------------------------ */
/*  BUILDING ON EXPERIENCE (Home / About)                              */
/* ------------------------------------------------------------------ */
export const story = {
  title: 'Built on experience. Focused on what comes next.',
  paragraphs: [
    'Grascan Build is a new building construction company backed by the experience and expertise of Grascan Construction, an established Ontario contractor with roots dating back to 1987.',
    'For decades, Grascan has delivered complex, time-sensitive infrastructure projects across Southern Ontario, earning a reputation for disciplined project execution, innovation, safety and quality.',
    'Grascan Build brings that foundation into vertical construction, delivering commercial, industrial and institutional buildings through an integrated approach to pre-construction, construction management, general contracting and design-build.',
  ],
  proposition: 'A new company. A proven foundation. A different approach to building.',
};

/** OUR FOUNDATION: 01–04. `lead` = primera frase del documento, `detail` = la segunda. */
export const foundation = [
  { n: '01', title: 'Experience', lead: 'Decades of construction experience behind the brand.' },
  { n: '02', title: 'Expertise', lead: 'Technical knowledge built through complex projects.', detail: 'Construction, engineering, project management and technical knowledge.' },
  { n: '03', title: 'Execution', lead: 'Disciplined delivery from preconstruction to completion.', detail: 'Disciplined planning, coordination and project delivery.' },
  { n: '04', title: 'Accountability', lead: 'One team. One commitment to the outcome.', detail: 'One team focused on safety, quality, cost and schedule.' },
];

export const newChapter = {
  title: 'A new chapter in the Grascan story',
  paragraphs: [
    'Grascan Build represents the next evolution of the <strong>Grascan organization</strong>.',
    'Building on the experience gained through decades of heavy civil and infrastructure construction, <strong>Grascan Build extends that expertise into commercial, industrial and institutional building construction.</strong>',
  ],
};

export const buildingOnExperience = {
  eyebrow: 'Building on experience.',
  title: 'Building the places that shape Ontario.',
  text: 'Grascan Build brings the experience, discipline and expertise of Grascan to commercial, industrial and institutional building construction in Ontario.',
};

/* ------------------------------------------------------------------ */
/*  OUR APPROACH                                                       */
/* ------------------------------------------------------------------ */
export const approach = {
  title: 'Built on experience. Driven by execution.',
  intro: [
    'Construction is complex. Successful projects depend on more than building expertise—they require planning, communication, accountability and the ability to make informed decisions at every stage.',
    'Grascan Build brings an integrated approach to every project, aligning owners, consultants, trade partners and project teams around a common objective: delivering the right outcome safely, efficiently and with confidence.',
  ],
  steps: [
    { title: 'Plan', lead: 'We establish the foundation for success before construction begins.', text: 'Through early planning, estimating, constructability reviews, scheduling and risk management, we identify challenges before they become problems.' },
    { title: 'Collaborate', lead: 'The best projects are built by aligned teams.', text: 'We work closely with owners, architects, engineers, consultants and trade partners to maintain clear communication, resolve issues efficiently and keep decisions moving.' },
    { title: 'Execute', lead: 'Plans become results through disciplined execution.', text: 'Our project teams maintain rigorous control of schedule, cost, quality, procurement and field operations throughout construction.' },
    { title: 'Deliver', lead: 'Completion is more than turning over a building.', text: 'We remain focused on quality, documentation, commissioning, closeout and the long-term performance of the finished project.' },
  ],
};

export const commitment = [
  { title: 'Experience', text: 'Knowledge gained through complex construction environments.' },
  { title: 'Accountability', text: 'Clear ownership from the first decision to final completion.' },
  { title: 'Quality', text: 'A disciplined approach to workmanship, materials and execution.' },
  { title: 'Safety', text: 'A fundamental responsibility shared by everyone on the project.' },
  { title: 'Integrity', text: 'Straightforward communication and responsible decision-making.' },
  { title: 'Innovation', text: 'Practical solutions that improve how projects are planned and built.' },
];

/* ------------------------------------------------------------------ */
/*  SAFETY & QUALITY                                                   */
/* ------------------------------------------------------------------ */
export const safety = {
  title: 'Safety is how we build.',
  intro: [
    'At Grascan Build, safety is not a separate function of construction. It is embedded in how projects are planned, managed and executed.',
    'From pre-construction planning through site operations and project closeout, we work to identify risk, establish clear controls and create an environment where every person has the responsibility and authority to work safely.',
  ],
  closing: 'Responsible construction.',
};

export const safetyTopics = {
  management: { title: 'Safety Management', text: 'Our safety approach begins before construction starts. Project-specific planning, hazard identification, training, communication and ongoing monitoring are integrated into our project delivery process.' },
  training: { title: 'Worker Safety & Training', text: 'A safe project depends on informed and prepared people. We support appropriate orientation, training, competency and communication so workers understand the work, the risks and the standards expected on site.' },
  subcontractor: { title: 'Subcontractor Safety', text: 'Safety extends across the entire project team. We establish clear expectations for trade partners and subcontractors and work collaboratively to maintain consistent safety standards throughout the site.' },
  site: { title: 'Construction Site Safety', text: 'Building projects involve constantly changing conditions. Our teams actively manage site access, lifting operations, working at heights, equipment, temporary conditions, logistics and other project-specific hazards.' },
  emergency: { title: 'Emergency Preparedness', text: 'Every project requires preparation for the unexpected. Emergency procedures, response planning, communication protocols and site-specific controls form part of our commitment to protecting workers, partners, clients and the public.' },
  quality: { title: 'Quality Management', lead: 'Quality is established through planning, coordination and accountability.', text: 'We work to identify requirements early, coordinate construction activities effectively and maintain appropriate inspection, documentation and quality control processes throughout the project.' },
  environmental: { title: 'Environmental Responsibility', text: 'Responsible construction means considering the impact of our work on the surrounding environment and community. We incorporate appropriate environmental controls, waste management, hazardous-material procedures and site practices into project planning and execution.' },
};

/* ------------------------------------------------------------------ */
/*  FEATURED PROJECTS                                                  */
/* ------------------------------------------------------------------ */
export const projectsCopy = {
  title: 'Experience you can see.',
  intro: [
    'Every project is an opportunity to create lasting value for an owner, a community and the people who will ultimately use the building.',
    'Our project portfolio will showcase the buildings, facilities and developments delivered by <strong>Grascan Build</strong>, from complex commercial and institutional projects to industrial facilities and major building transformations.',
  ],
  ourProjects: {
    title: 'Our Projects',
    text: 'From the first site meeting to final completion, every project reflects the same principles: careful planning, disciplined execution, open communication and uncompromising attention to safety and quality.',
  },
};

/* ------------------------------------------------------------------ */
/*  NEWS & INSIGHTS                                                    */
/* ------------------------------------------------------------------ */
export const newsCopy = {
  title: 'Perspectives from the people building what’s next.',
  intro: [
    'Construction is constantly evolving. New technologies, materials, regulations, project-delivery methods and expectations are changing the way buildings are designed and built.',
    'News & Insights provides a closer look at Grascan Build—our projects, people, capabilities and perspective on the construction industry.',
  ],
};

export const newsCategories = [
  { title: 'Project Updates', text: 'Follow major milestones from groundbreaking through completion.' },
  { title: 'Company News', text: 'Learn about Grascan Build’s growth, people, partnerships and achievements.' },
  { title: 'Industry Insights', text: 'Perspectives on construction trends, project delivery, technology, sustainability and the evolving needs of the built environment.' },
  { title: 'People & Culture', text: 'Meet the people behind our projects and learn about the expertise, experience and values that shape our organization.' },
  { title: 'Community', text: 'Discover how our projects and people contribute to the communities where we work.' },
] as const;

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */
export const contactCopy = {
  title: 'Let’s build what’s next.',
  intro: [
    'Whether you are planning a new development, evaluating a project delivery strategy or preparing for construction, <strong>Grascan Build</strong> brings the experience and resources to help move your project forward.',
    'Tell us about your project, objectives and timeline. Our team will connect you with the appropriate construction and project-delivery professionals.',
  ],
  start: { title: 'Start a Project', lead: 'Have a project in mind?', text: 'Share your project requirements with our team and begin the conversation.', cta: 'Start a project' },
  general: { title: 'General Inquiries', text: 'For general information about Grascan Build, our services, projects or capabilities:', cta: 'Contact our team' },
  ontario: { title: 'Building in Ontario', text: 'Our focus is the Ontario market, where local knowledge, strong relationships and disciplined project execution are essential to delivering successful construction projects.' },
};
