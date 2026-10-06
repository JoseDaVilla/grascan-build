/**
 * Contenido del sitio tomado del documento "STRUCTURE WEBSITE: GRASCAN BUILD" (estructura y textos del cliente).
 * Home, About y Services están completos según el documento. Los textos se reproducen tal cual;
 * sólo se unificaron guiones ("pre construction" → "pre-construction", "design build" → "design-build",
 * como aparecen en la estructura del menú) y se corrigieron erratas evidentes ("decisionmaking", "..").
 */
export type ServiceIcon =
  | 'building'
  | 'commercial'
  | 'industrial'
  | 'institutional'
  | 'residential'
  | 'transit'
  | 'designbuild'
  | 'cm'
  | 'precon'
  | 'gc'
  | 'apd';

/* ------------------------------------------------------------------ */
/*  HOME: HERO (texto bajo el hero)                                    */
/* ------------------------------------------------------------------ */
export const heroCopy = {
  lead: 'A new generation of building construction, backed by decades of experience delivering complex projects across the Greater Toronto Area.',
  paragraphs: [
    'Backed by the experience of Grascan Construction, <strong>Grascan Build delivers commercial, industrial and institutional buildings</strong> with the same commitment to safety, quality and performance that has defined Grascan since 1987.',
    'Our approach is grounded in strong project leadership, LEAN construction principles, trusted trade relationships and a commitment to clear communication throughout every stage of the project. From early planning and pre-construction through construction and completion, we work closely with owners, consultants, trades and project partners to create an integrated and accountable delivery process.',
    'Grascan Build also benefits from the capabilities and resources of the broader Grascan organization, creating opportunities to coordinate building and civil requirements and pursue projects where these disciplines intersect. This integrated foundation allows us to remain responsive and competitive while bringing the resources, relationships and experience required for sophisticated and demanding projects.',
  ],
};

/* ------------------------------------------------------------------ */
/*  HOME: BUILT ON EXPERIENCE / OUR FOUNDATION / NEW CHAPTER           */
/* ------------------------------------------------------------------ */
export const story = {
  title: 'Built on experience. Focused on what comes next.',
  paragraphs: [
    'Grascan Build Limited is the building division of the Grascan organization, established to expand its capabilities into building construction across the Greater Toronto Area. Backed by the experience and expertise of Grascan Construction, an established Ontario contractor with roots dating back to 1987, Grascan Build brings the strength of an established organization to a focused building construction platform.',
    'For decades, Grascan has delivered complex, time-sensitive infrastructure projects across Southern Ontario, earning a reputation for disciplined project execution, innovation, safety and quality. Grascan Build brings that foundation into vertical construction, delivering commercial, industrial and institutional buildings through an integrated approach to pre-construction, construction management, general contracting and design-build.',
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
  title: 'Building on experience.',
  text: 'Grascan Build delivers commercial, industrial and institutional projects through a focused and integrated approach, supported by the capabilities, relationships and expertise of the broader Grascan organization.',
};

/* ------------------------------------------------------------------ */
/*  HOME: WHAT WE BUILD (= MARKETS)                                    */
/* ------------------------------------------------------------------ */
export const whatWeBuild = {
  title: 'Building for the demands of today. Preparing for what comes next.',
  intro: [
    'Grascan Build provides construction services for institutional, commercial, industrial, transit and multi-unit residential projects across the Greater Toronto Area and surrounding areas.',
    'We work with owners, consultants, developers and project partners to deliver projects through general contracting, construction management, design-build and alternative project delivery. Our involvement can begin during pre-construction, helping establish project requirements, delivery strategies, budgets, schedules and construction planning before work begins on site.',
    'Our project experience and strategic focus are aligned with sectors where construction quality, coordination and project execution are critical. This includes transit and transportation infrastructure, institutional facilities, commercial developments, industrial projects, multi-unit residential construction and major renovation work.',
  ],
};

export interface Market { slug: string; title: string; icon: ServiceIcon }

/** Markets, en el orden del documento. */
export const markets: Market[] = [
  { slug: 'institutional', title: 'Institutional', icon: 'institutional' },
  { slug: 'commercial', title: 'Commercial', icon: 'commercial' },
  { slug: 'industrial', title: 'Industrial', icon: 'industrial' },
  { slug: 'multi-unit-residential', title: 'Multi-Unit Residential', icon: 'residential' },
  { slug: 'transit', title: 'Transit', icon: 'transit' },
];

/* ------------------------------------------------------------------ */
/*  HOME: WHAT WE DO (Our Capabilities) + WHERE WE BUILD               */
/* ------------------------------------------------------------------ */
export interface Capability { slug: string; title: string; text: string; icon: ServiceIcon }

export const capabilities: Capability[] = [
  { slug: 'pre-construction-planning', title: 'Pre-Construction', icon: 'precon', text: 'Early involvement to support planning, constructability, project strategy, budgeting, scheduling and coordination before construction begins.' },
  { slug: 'general-contracting', title: 'General Contracting', icon: 'gc', text: 'End-to-end construction delivery with direct project oversight, coordination of trades and subcontractors, and a focus on schedule, cost and quality.' },
  { slug: 'construction-management', title: 'Construction Management', icon: 'cm', text: 'A collaborative approach that provides owners with experienced project leadership, construction planning and coordination throughout the project lifecycle.' },
  { slug: 'design-build', title: 'Design-Build', icon: 'designbuild', text: 'An integrated delivery approach that brings design and construction together to improve coordination, accountability and project execution.' },
  { slug: 'alternative-project-delivery', title: 'Alternative Project Delivery', icon: 'apd', text: 'Flexible delivery models including Progressive Design-Build, Integrated Project Delivery and customized approaches based on the requirements of the owner and project.' },
];

export const whereWeBuild = {
  title: 'Where We Build',
  paragraphs: [
    'Our focus is on projects that serve the communities, institutions and industries that drive Ontario forward. We are strategically positioned to pursue opportunities in transit, institutional, commercial, industrial and multi-unit residential construction, while leveraging the broader Grascan organization where building and civil requirements intersect.',
    'Through established trade relationships, a growing subcontractor network and the capabilities of the Grascan civil division, Grascan Build brings a coordinated approach to projects of varying scale and complexity.',
  ],
  closing: 'From early planning through final delivery, our focus remains consistent: understand the project, align with the owner’s objectives and deliver with accountability.',
};

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */
export const about = {
  title: 'Built on experience. Focused on what comes next.',
  lead: 'Grascan Build Limited is the building division of the Grascan organization, established to expand its capabilities into building construction across the Greater Toronto Area.',
  paragraphs: [
    'Backed by the strength, expertise and established relationships of Grascan Construction, an Ontario contractor that has been delivering heavy civil and infrastructure projects across Southern Ontario since 1987, Grascan Build brings an established construction foundation to the building sector.',
    'Grascan Build provides general contracting, construction management, design-build and alternative project delivery services for institutional, commercial, industrial, transit and multi-unit residential projects.',
    'The business is structured around a customer-focused, lean and hands-on approach. We work closely with owners, consultants, developers, trades and project partners to understand project requirements, establish the appropriate delivery strategy and maintain accountability from pre-construction through completion.',
    'A key advantage of Grascan Build is its connection to the broader Grascan organization and its established civil capabilities. This creates opportunities to coordinate building and civil requirements on projects where these disciplines intersect, while allowing Grascan Build to leverage established industry relationships and a broader subcontractor network.',
    'Our strategic focus is on building a sustainable construction business supported by strong client relationships, repeat opportunities and new partnerships. Transit and transportation infrastructure represent a particular area of focus, alongside institutional, commercial, industrial and multi-unit residential construction.',
    'Grascan Build is positioned to pursue increasingly sophisticated projects while maintaining a focused operating structure and a direct approach to project delivery.',
  ],
  closing: 'A new building division backed by an established construction organization.',
};

export const people = {
  title: 'Experienced people. One team.',
  lead: 'Construction is ultimately delivered by people.',
  paragraphs: [
    'Grascan Build is being developed around a focused team of construction professionals supported by the broader Grascan organization. Our people bring project management, construction, estimating, coordination and industry knowledge together to support projects from early planning through completion.',
    'We believe strong project outcomes come from teams that communicate effectively, understand their responsibilities and remain engaged throughout the construction process.',
    'Our structure is intentionally focused. It allows our team to work closely with clients, consultants, trades and project partners while maintaining direct involvement in project decisions and execution.',
    'As Grascan Build grows, our objective is to develop a team of professionals and an established subcontractor network capable of supporting increasingly complex projects across the GTA.',
    'The culture of the broader Grascan organization places importance on motivated, committed people and takes pride in innovation, quality and safety.',
  ],
  drivenByTitle: 'Our People Are Driven By',
  drivenBy: ['Accountability', 'Collaboration', 'Quality', 'Safety', 'Practical problem solving', 'Client service'],
  closing: 'Strong projects start with strong teams.',
};

/** Categorías de News & Insights en About (documento). */
export const aboutNewsCategories = ['Project Updates', 'Industry Insights', 'Market Updates', 'People & Culture'] as const;

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */
export const servicesIntro = {
  title: 'Construction expertise from planning through completion',
  lead: 'Grascan Build provides integrated construction services for institutional, commercial, industrial, transit and multi-unit residential projects across the Greater Toronto Area and surrounding areas.',
  paragraphs: [
    'Our services are structured to support owners through every stage of project delivery, from early planning and procurement through construction and completion. We provide general contracting, construction management, design-build, alternative project delivery and pre-construction planning, allowing our role and level of involvement to be aligned with the specific requirements of each project.',
    'We work closely with owners, consultants, design professionals, trades and project partners to establish clear objectives, develop practical delivery strategies and maintain accountability throughout the project lifecycle.',
    'Our approach combines experienced project leadership, established trade relationships, a growing subcontractor network and the broader capabilities of the Grascan organization.',
  ],
};

export interface Service {
  slug: string;
  title: string;
  /** Subtítulo del documento (p. ej. "Clear accountability. Disciplined project delivery."). */
  subtitle: string;
  paragraphs: string[];
  /** Sub-servicios con título y texto propios (Alternative Project Delivery). */
  approaches?: { slug: string; title: string; paragraphs: string[] }[];
  /** Lista con título ("Our General Contracting Focus", "Design Build Focus"…). */
  list?: { title: string; items: string[] };
  closing?: string;
  icon: ServiceIcon;
}

export const services: Service[] = [
  {
    slug: 'general-contracting',
    title: 'General Contracting',
    subtitle: 'Clear accountability. Disciplined project delivery.',
    icon: 'gc',
    paragraphs: [
      'Grascan Build provides general contracting services for owners seeking a dedicated construction partner responsible for coordinating and managing the delivery of their project.',
      'Our team oversees the construction process from procurement and mobilization through completion, coordinating subcontractors, suppliers, consultants and project stakeholders while maintaining control of the work on site.',
      'Our general contracting services include project coordination, procurement, subcontractor management, construction scheduling, cost management, quality coordination and project administration.',
      'We maintain a hands-on approach throughout construction, working closely with the project team to address issues, coordinate activities and keep the work progressing in accordance with the project requirements.',
      'General contracting engagements may be structured through fixed price contracts, including CCDC2 and customized owner contracts, as well as design-build arrangements where appropriate.',
    ],
    list: {
      title: 'Our General Contracting Focus',
      items: ['Project planning and mobilization', 'Procurement and subcontractor coordination', 'Construction scheduling and project controls', 'Site and trade coordination', 'Cost and change management', 'Quality coordination', 'Project administration', 'Completion and closeout'],
    },
    closing: 'Our objective is to provide owners with a clear point of accountability and a construction partner focused on delivering the project safely, efficiently and to the required standard.',
  },
  {
    slug: 'construction-management',
    title: 'Construction Management',
    subtitle: 'Experienced leadership. Coordinated delivery.',
    icon: 'cm',
    paragraphs: [
      'Grascan Build provides construction management services for projects that benefit from early contractor involvement, collaborative planning and active coordination throughout the project lifecycle.',
      'Our construction management approach brings construction expertise into the project early, allowing project requirements, constructability, procurement, scheduling and construction planning to be considered before work begins.',
      'We work with owners, consultants and project stakeholders to establish an effective construction strategy and coordinate the transition from planning and design into execution.',
      'During construction, our team provides ongoing project leadership and coordination across trades, subcontractors and other project participants. We maintain visibility over schedule, cost, procurement, site activities and project requirements while working with the owner and consultant team to address issues as they arise.',
      'Construction management arrangements can be structured around percentage or fixed fees for profit, project staff and labour charge-out rates, and chargeable or fixed general conditions, depending on the requirements of the project.',
      'Where appropriate, Grascan Build may also self-perform selected construction packages, creating opportunities for greater coordination and additional value within the overall project.',
    ],
    list: {
      title: 'Construction Management Services',
      items: ['Construction planning and scheduling', 'Procurement and trade coordination', 'Project staff and site management', 'Cost and project controls', 'Subcontractor management', 'Constructability coordination', 'General conditions management', 'Progress monitoring and reporting', 'Project closeout'],
    },
  },
  {
    slug: 'design-build',
    title: 'Design-Build',
    subtitle: 'One integrated approach from design through construction.',
    icon: 'designbuild',
    paragraphs: [
      'Design-Build provides owners with an integrated delivery model that brings design and construction together under a coordinated approach.',
      'Grascan Build works with owners and design partners to establish project objectives, coordinate design and construction requirements and develop a practical path from initial concept through construction.',
      'By considering constructability, procurement, scheduling and project requirements throughout the design process, the Design-Build approach can improve coordination and provide greater alignment between design decisions and construction execution.',
      'Our team remains engaged throughout the delivery process, coordinating the relationship between the owner, design professionals, trades and construction team.',
    ],
    list: {
      title: 'Design-Build Focus',
      items: ['Early project planning', 'Design and construction coordination', 'Constructability review', 'Budget and schedule considerations', 'Procurement planning', 'Trade and subcontractor coordination', 'Construction execution', 'Project completion and closeout'],
    },
    closing: 'Design-Build can be particularly effective for owners seeking an integrated project team and a coordinated approach to design, construction and project delivery.',
  },
  {
    slug: 'alternative-project-delivery',
    title: 'Alternative Project Delivery',
    subtitle: 'Delivery strategies designed around the project.',
    icon: 'apd',
    paragraphs: [
      'Every project has different objectives, constraints, procurement requirements and risk considerations. Grascan Build provides alternative project delivery approaches for owners seeking a structure beyond traditional general contracting or conventional construction management.',
      'Our approach is flexible and can be adapted to the needs of the owner, project team and scope of work.',
    ],
    approaches: [
      {
        slug: 'progressive-design-build',
        title: 'Progressive Design-Build',
        paragraphs: [
          'Progressive Design-Build provides a collaborative framework in which design development and construction planning progress together.',
          'The approach allows the project team to work through scope, constructability, pricing and delivery considerations as the project develops, creating opportunities for greater collaboration and informed decision-making before full construction execution.',
        ],
      },
      {
        slug: 'integrated-project-delivery',
        title: 'Integrated Project Delivery',
        paragraphs: [
          'Integrated Project Delivery brings the owner, design team, contractor and other key project participants together around shared project objectives.',
          'The model emphasizes early collaboration, coordinated decision-making and alignment between project stakeholders, with the goal of improving project integration and delivery outcomes.',
        ],
      },
      {
        slug: 'custom-alternative-approaches',
        title: 'Custom Alternative Approaches',
        paragraphs: [
          'Not every project fits a standard delivery model.',
          'Grascan Build can work with owners and project partners to develop customized approaches based on project scope, schedule, procurement requirements, commercial considerations and risk allocation.',
          'Where appropriate, alternative approaches may also include opportunities to work with the broader Grascan organization and potential financing partners to evaluate integrated project solutions.',
        ],
      },
    ],
  },
  {
    slug: 'pre-construction-planning',
    title: 'Pre-Construction Planning',
    subtitle: 'Establishing the right foundation before construction begins.',
    icon: 'precon',
    paragraphs: [
      'Pre-construction is an important part of successful project delivery. Early involvement allows the construction team to understand project objectives, evaluate requirements and identify potential challenges before they affect the work on site.',
      'Grascan Build provides pre-construction planning as part of our broader project delivery services, working with owners, consultants and project partners during the early stages of development.',
      'Our team can contribute construction knowledge and practical considerations to help establish a clear and achievable path to construction.',
    ],
    list: {
      title: 'Pre-Construction Services',
      items: ['Project planning', 'Construction strategy', 'Delivery model evaluation', 'Preliminary budgeting', 'Schedule development', 'Constructability considerations', 'Procurement planning', 'Trade and subcontractor input', 'Scope coordination', 'Construction planning', 'Project risk identification', 'Coordination with consultants and project partners'],
    },
    closing: 'Our goal is to provide owners with better visibility into the project before construction begins and to establish a delivery strategy that reflects the project’s objectives, requirements and constraints.',
  },
];

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
  title: 'Featured Projects',
  intro: 'Our project portfolio will showcase the buildings, facilities and developments delivered by <strong>Grascan Build</strong>, from complex commercial and institutional projects to industrial facilities and major building transformations.',
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
