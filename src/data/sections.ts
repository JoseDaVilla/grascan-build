/**
 * Textos del documento "Website GRASCAN BUILD" para Markets, Why Grascan Build, Health & Safety y Careers.
 * Se reproducen tal cual; sólo se unificaron guiones como en el resto del sitio
 * ("multi unit" → "multi-unit", "building specific" → "building-specific").
 */

/* ------------------------------------------------------------------ */
/*  MARKETS (página): intro + texto de cada mercado + Our Approach     */
/* ------------------------------------------------------------------ */
export const marketsPage = {
  title: 'Building for the Needs of Today and the Demands of Tomorrow',
  intro: [
    'Grascan Build delivers construction services across institutional, commercial, industrial, multi-unit residential, and transit-related markets. Our approach combines practical construction expertise, disciplined project management, and coordinated project delivery to address the unique requirements of each sector.',
    'We understand that every project is shaped by a distinct set of operational objectives, technical considerations, regulatory requirements, stakeholder expectations, and long-term performance needs. From early planning and pre-construction coordination through procurement, construction, and project completion, we emphasize a structured approach that supports informed decision-making, effective collaboration, and consistent execution.',
    'Our services are grounded in a commitment to safety, quality, schedule management, cost control, and accountability. Working closely with owners, consultants, trade partners, suppliers, and other project stakeholders, we strive to establish clear objectives, anticipate challenges, coordinate complex construction activities, and maintain alignment throughout the project lifecycle.',
    'Supported by our construction expertise and our connection to Grascan’s broader civil construction capabilities, Grascan Build brings an integrated perspective to projects where building construction, site development, and civil works intersect. We approach each opportunity with an understanding of the importance of coordination, constructability, and responsible project execution.',
  ],
  closing: 'Regardless of sector or project complexity, our objective remains consistent: to deliver well-coordinated, durable, and functional built environments that respond to our clients’ needs and provide lasting value.',
};

/** Texto de cada mercado (clave = slug de `markets` en services.ts). */
export const marketDetails: Record<string, { subtitle: string; paragraphs: string[]; closing: string }> = {
  institutional: {
    subtitle: 'Constructing Essential Spaces for Education, Healthcare, and Public Services',
    paragraphs: [
      'Institutional buildings play a fundamental role in the communities they serve. From educational facilities and healthcare environments to public-service buildings and community infrastructure, these projects must accommodate diverse users, support critical activities, and meet demanding functional, technical, and regulatory requirements.',
      'Grascan Build provides construction services for institutional projects with an emphasis on thoughtful planning, coordinated execution, and attention to the requirements that define successful public and institutional environments. We recognize that these facilities must do more than meet immediate construction objectives; they must support reliable operations, accommodate changing needs, and maintain their functionality over the long term.',
      'Our approach begins with a clear understanding of the project’s intended use, design requirements, operational considerations, and delivery objectives. Through coordination with owners, consultants, trade partners, and relevant authorities, we work to establish an organized construction process that addresses technical interfaces, procurement requirements, schedule constraints, and quality expectations.',
      'Institutional projects can involve complex building systems, specialized equipment, stringent compliance obligations, and coordination among multiple stakeholder groups. We place particular importance on constructability, communication, site safety, and the sequencing of construction activities to help manage these demands and maintain progress throughout delivery.',
      'Where projects involve renovations, additions, or work within active facilities, planning and coordination become especially important. Construction activities may need to be organized around ongoing operations, access restrictions, occupant safety, and the need to minimize disruption. We approach these considerations with an emphasis on advance planning, clear communication, and appropriate construction controls.',
      'Quality management remains central to our delivery approach. From reviewing construction requirements and coordinating trade activities to monitoring workmanship and addressing deficiencies, we aim to maintain alignment with project specifications, applicable codes, and established quality expectations.',
      'Through disciplined project management and a collaborative approach, Grascan Build works to deliver institutional environments that are functional, durable, and responsive to the needs of their owners and the communities they serve.',
    ],
    closing: 'Building the spaces that support communities, strengthen public services, and enable future generations.',
  },
  commercial: {
    subtitle: 'Delivering Functional, Adaptable Spaces for Business and Growth',
    paragraphs: [
      'Commercial construction requires a careful balance of design intent, operational functionality, financial objectives, and construction performance. Whether a project involves office environments, retail spaces, mixed-use developments, or other commercial properties, successful delivery depends on the ability to coordinate multiple disciplines while maintaining clear control over scope, schedule, cost, and quality.',
      'Grascan Build provides construction services for commercial developments, working collaboratively with owners, consultants, designers, trade partners, and suppliers to support the delivery of spaces aligned with their intended purpose. We recognize that commercial facilities must respond to the practical needs of their occupants while meeting the expectations of ownership, investment, and long-term building performance.',
      'Our approach emphasizes early coordination, detailed planning, and a clear understanding of project objectives. By considering construction sequencing, procurement requirements, material availability, building systems, and trade interfaces, we work to identify potential challenges and address them before they affect the progress or cost of the work.',
      'Commercial projects often involve demanding schedules, evolving design requirements, and coordination among numerous specialized contractors. Effective management of these elements is essential to maintaining construction momentum and reducing the risk of avoidable delays. We apply a structured approach to scheduling, cost monitoring, subcontractor coordination, and quality management to support informed decision-making throughout the construction process.',
      'We also understand the importance of balancing quality and cost. Through practical construction planning, constructability considerations, and active coordination with the project team, we seek opportunities to improve efficiency, manage construction risks, and maintain alignment with the project’s approved budget and performance requirements.',
      'For projects involving renovations, tenant improvements, or work within existing commercial properties, our approach considers the condition of the existing building, the coordination of new and existing systems, site logistics, and the potential need to maintain ongoing operations. These considerations require flexibility, careful sequencing, and consistent communication among all parties involved.',
      'From initial planning through construction completion, Grascan Build remains focused on delivering commercial spaces that meet project requirements, support their intended operations, and provide a durable foundation for business activity.',
    ],
    closing: 'Creating spaces where businesses operate, communities engage, and opportunities grow.',
  },
  industrial: {
    subtitle: 'Constructing Durable Facilities for Manufacturing, Logistics, and Operations',
    paragraphs: [
      'Industrial facilities are essential to the movement of goods, production of materials, storage, distribution, and delivery of specialized services. Their construction requires a detailed understanding of operational requirements, building performance, site conditions, equipment interfaces, and the coordination of multiple construction disciplines.',
      'Grascan Build provides construction services for industrial developments, including facilities intended to support manufacturing, warehousing, logistics, distribution, and other operational uses. Our approach is guided by practical construction knowledge, disciplined planning, and a focus on delivering facilities that align with the technical and functional requirements established for each project.',
      'Industrial projects frequently involve demanding specifications, substantial equipment requirements, complex utility interfaces, and specialized mechanical and electrical systems. Building layouts, structural requirements, loading conditions, service access, and equipment clearances can have a direct impact on how a facility functions once construction is complete. We recognize the importance of coordinating these requirements throughout the construction process.',
      'Our project delivery approach emphasizes constructability, technical coordination, procurement planning, and the logical sequencing of work. By working closely with project owners, consultants, specialist contractors, suppliers, and equipment providers, we seek to identify potential conflicts, coordinate interfaces, and maintain alignment between design requirements and construction activities.',
      'Site logistics and construction sequencing are also critical considerations in industrial environments. Material handling, equipment installation, access requirements, and the coordination of multiple trades must be carefully managed to maintain safe working conditions and support efficient progress. Our approach prioritizes clear communication, organized site operations, and active monitoring of schedule and quality requirements.',
      'For projects involving the expansion, renovation, or modification of existing facilities, additional attention may be required to coordinate new construction with existing structures, services, and operational constraints. Careful planning and appropriate construction controls help manage these interfaces while supporting the project’s functional objectives.',
      'Throughout delivery, Grascan Build emphasizes adherence to project specifications, applicable regulatory requirements, established safety procedures, and defined quality standards. We understand that industrial facilities represent significant operational investments and that construction decisions can influence their long-term functionality, durability, and adaptability.',
      'Our objective is to support the delivery of industrial environments that meet their intended operational requirements through coordinated execution, sound construction practices, and disciplined project management.',
    ],
    closing: 'Building the facilities that power production, support supply chains, and keep essential operations moving.',
  },
  'multi-unit-residential': {
    subtitle: 'Building Quality Housing for Growing and Evolving Communities',
    paragraphs: [
      'Multi-unit residential developments play an important role in meeting housing needs and supporting the growth of communities. From apartment buildings and condominium developments to other multi-residential properties, these projects require careful coordination across structural systems, building envelopes, mechanical and electrical services, interior finishes, and site development.',
      'Grascan Build provides construction services for multi-unit residential projects, with an emphasis on coordinated planning, construction quality, effective trade management, and disciplined execution. We recognize that successful residential construction requires the integration of numerous building components and systems, each contributing to the safety, functionality, durability, and overall performance of the completed development.',
      'Our approach begins with an understanding of the project’s design, construction requirements, schedule objectives, and intended occupancy. Working collaboratively with owners, consultants, designers, subcontractors, and suppliers, we seek to coordinate construction activities and establish a clear framework for managing the various disciplines involved in residential delivery.',
      'Multi-unit residential construction presents particular coordination challenges. Structural construction, building envelope installation, waterproofing, mechanical and electrical rough-ins, fire protection, interior finishes, and exterior works must be carefully sequenced to maintain progress and avoid conflicts between trades. Effective planning and ongoing communication are essential to ensuring that these activities remain aligned with the project schedule and quality requirements.',
      'Building envelope performance and the coordination of building systems are especially important to the long-term functionality of residential properties. Attention to construction details, installation requirements, interfaces between materials, and applicable building standards helps support the delivery of durable buildings designed for their intended use.',
      'We also recognize the importance of maintaining quality throughout the many stages of residential construction. A structured approach to inspections, deficiency management, documentation, and coordination helps address issues systematically and supports the transition from active construction to project completion.',
      'Where residential developments incorporate substantial site works, servicing, access infrastructure, or other civil construction elements, coordination between building and civil scopes can be an important consideration. Grascan Build’s connection to Grascan’s civil construction capabilities provides a broader perspective on these interfaces and the importance of integrating site development with building delivery.',
      'Our focus is to support the construction of residential environments that meet established project requirements, provide functional living spaces, and contribute to the long-term quality of the communities in which they are located.',
    ],
    closing: 'Delivering durable residential environments that support housing needs and the continued growth of our communities.',
  },
  transit: {
    subtitle: 'Constructing the Facilities That Keep Communities Connected',
    paragraphs: [
      'Transit infrastructure is essential to the movement of people, the connection of communities, and the effective operation of transportation networks. The buildings and supporting facilities associated with these systems must meet demanding requirements for safety, functionality, durability, operational reliability, and coordination with existing infrastructure.',
      'Grascan Build focuses on construction opportunities within the transit sector, including facilities associated with public transportation networks, bus operations, rail systems, maintenance activities, and related transportation infrastructure. Our approach recognizes the importance of delivering these projects within complex operating environments where construction activities must be coordinated with technical requirements, project authorities, and the needs of multiple stakeholders.',
      'Transit-related building projects can involve maintenance and storage facilities, operational buildings, support spaces, renovations, and other specialized facilities required to maintain transportation services. These projects often bring together building construction, civil works, site servicing, utilities, structural systems, and specialized mechanical and electrical installations. Effective coordination among these disciplines is fundamental to successful execution.',
      'Grascan Build approaches transit construction with an emphasis on detailed planning, constructability, schedule coordination, and disciplined management of project interfaces. Working with owners, consultants, trade partners, utility providers, and other project participants, we aim to establish clear communication and coordinated work plans that address project requirements and support efficient construction progress.',
      'Safety and operational considerations are particularly important in transit environments. Projects may involve restricted access, existing transportation infrastructure, active facilities, specialized equipment, and specific requirements governing the movement of personnel and materials. These conditions demand careful planning, adherence to established procedures, and close coordination with the relevant authorities and project teams.',
      'Schedule management is another critical component of transit construction. Procurement lead times, complex installations, access restrictions, testing requirements, and the coordination of multiple contractors can all influence project delivery. We emphasize forward planning, sequencing, progress monitoring, and timely communication to help identify constraints and manage potential impacts.',
      'Where transit projects incorporate significant civil and site-related components, coordination between building construction and external infrastructure is especially important. Grascan Build’s connection to Grascan’s broader civil construction capabilities supports an integrated understanding of these interfaces, including the coordination of site development, servicing, access, and building-related work where applicable.',
      'Throughout each project, we remain focused on quality assurance, compliance with project specifications, safe construction practices, and the effective coordination of all work required for completion. Our objective is to support the delivery of dependable transit facilities that meet their intended operational purpose and contribute to the long-term functionality of transportation networks.',
    ],
    closing: 'Supporting the facilities, systems, and infrastructure that keep communities moving.',
  },
};

export const marketsApproach = {
  title: 'A Consistent Standard Across Every Market',
  intro: 'While each sector presents distinct challenges, Grascan Build applies a consistent set of principles to project delivery. We believe that successful construction depends on the integration of sound planning, clear communication, technical coordination, responsible cost management, and a sustained focus on quality and safety.',
  principles: [
    { title: 'Collaborative Project Delivery', text: 'We work with owners, consultants, trade partners, and suppliers to establish shared objectives, coordinate responsibilities, and maintain clear communication throughout construction.' },
    { title: 'Planning and Constructability', text: 'We emphasize practical planning, construction sequencing, procurement coordination, and the early identification of potential constraints to support efficient project execution.' },
    { title: 'Safety and Quality', text: 'We prioritize safe work practices, adherence to project requirements, and systematic attention to workmanship, inspections, and quality management throughout the construction process.' },
    { title: 'Cost and Schedule Management', text: 'We apply disciplined project controls to monitor progress, manage resources, track costs, and support informed decisions as project conditions evolve.' },
    { title: 'Integrated Construction Perspective', text: 'Through our connection to Grascan’s civil construction capabilities, we recognize the importance of coordinating building work with site development and civil infrastructure where project requirements call for an integrated approach.' },
  ],
  tagline: 'Built on experience. Focused on what’s next.',
};

export const buildingWithPurpose = {
  title: 'Building with purpose.',
  paragraphs: [
    'At Grascan Build, every project represents a responsibility to our clients, our project partners, and the people who will ultimately use the spaces we construct.',
    'Across every market we serve, our focus is on understanding project requirements, coordinating the work effectively, and maintaining the standards of safety, quality, and accountability that support successful construction.',
  ],
  closing: 'Grascan Build. Practical expertise. Coordinated delivery. Built for lasting value.',
};

/* ------------------------------------------------------------------ */
/*  WHY GRASCAN BUILD                                                  */
/* ------------------------------------------------------------------ */
export const whyIntro = {
  title: 'A Better Approach to Building',
  paragraphs: [
    'At Grascan Build, we believe successful construction is built on more than the completion of a project. It requires a clear understanding of our clients’ objectives, thoughtful planning, effective coordination, and a disciplined approach to execution.',
    'We bring together practical construction expertise, responsive project management, and a collaborative approach to project delivery. Supported by our connection to Grascan’s established civil construction capabilities, we offer a broader perspective on the challenges and opportunities that shape complex construction projects.',
    'Our approach is grounded in accountability, efficiency, and long-term relationships. We work to understand the specific requirements of every project, coordinate the people and resources necessary to deliver it, and maintain a consistent focus on safety, quality, schedule, and cost.',
    'Whether delivering a building project independently or coordinating building works alongside civil infrastructure, Grascan Build is committed to providing a structured, practical, and client-focused construction experience.',
  ],
  closing: 'Our objective is straightforward: to make construction more coordinated, more responsive, and more effective for our clients.',
};

export interface WhyItem {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  /** Principios con título (Our Competitive Advantage). */
  principles?: { title: string; text: string }[];
  closing?: string;
}

export const whyItems: WhyItem[] = [
  {
    slug: 'integrated-building-civil',
    n: '01',
    title: 'Integrated Building & Civil',
    subtitle: 'One Coordinated Perspective. A More Complete Approach to Construction.',
    paragraphs: [
      'Construction projects rarely exist in isolation. Building works often intersect with site development, underground servicing, utilities, access infrastructure, grading, and other civil construction activities. Managing these interfaces effectively is essential to maintaining project coordination, controlling costs, and supporting schedule performance.',
      'Grascan Build benefits from its connection to Grascan’s established civil construction capabilities, providing an integrated perspective on projects where building and civil scopes intersect. This relationship supports a broader understanding of site conditions, construction sequencing, logistical requirements, and the coordination necessary to bring multiple disciplines together.',
      'By considering building construction and related civil works within a coordinated framework, we seek to identify potential conflicts early, improve communication between project participants, and support more informed planning and execution. This approach can be particularly valuable on institutional, industrial, and transit-related projects where site infrastructure and building systems must be delivered in close coordination.',
      'Our focus is on understanding the full construction environment, anticipating interfaces between scopes, and maintaining alignment among the activities that contribute to successful project delivery.',
      'Where appropriate to the project structure, our relationship with Grascan’s civil division can provide clients with access to complementary construction expertise and a more coordinated approach to managing complex site and building requirements.',
    ],
  },
  {
    slug: 'client-focused',
    n: '02',
    title: 'Client Focused',
    subtitle: 'Built Around Your Objectives. Driven by Collaboration.',
    paragraphs: [
      'Every construction project begins with a distinct set of objectives. Budget, schedule, operational requirements, design intent, stakeholder expectations, and long-term performance all influence the decisions that shape a successful outcome.',
      'At Grascan Build, we place our clients’ priorities at the centre of our approach. We believe effective construction delivery starts with listening, understanding project requirements, and establishing a clear framework for communication, coordination, and decision-making.',
      'From pre-construction planning through active construction and project completion, we work collaboratively with owners, consultants, trade partners, and other stakeholders to maintain a shared understanding of project goals and responsibilities.',
      'Our approach emphasizes accessibility, responsiveness, and practical problem-solving. By maintaining open lines of communication and addressing challenges as they arise, we aim to support informed decisions, reduce unnecessary uncertainty, and keep project activities aligned with established objectives.',
      'We recognize that construction projects evolve. Design coordination, procurement challenges, site conditions, and changing operational requirements can introduce new considerations throughout delivery. Our focus is on responding constructively, evaluating available options, and working with the project team to identify practical solutions that respect the project’s broader requirements.',
      'For us, client service extends beyond day-to-day communication. It means taking responsibility for our role, understanding the implications of our decisions, and approaching every project with a commitment to professionalism, transparency, and accountability.',
    ],
  },
  {
    slug: 'lean-hands-on',
    n: '03',
    title: 'Lean & Hands On',
    subtitle: 'Efficient Processes. Direct Involvement. Practical Execution.',
    paragraphs: [
      'We believe effective construction management depends on clear accountability, informed decision-making, and the ability to respond to project requirements without unnecessary complexity.',
      'Grascan Build embraces a lean, hands-on approach that emphasizes practical planning, efficient coordination, and direct involvement in the construction process. Our focus is on maintaining clear lines of responsibility, reducing avoidable inefficiencies, and ensuring that decisions remain connected to the realities of the job site.',
      'We approach each project with an emphasis on constructability, procurement planning, scheduling, cost management, and the coordination of trades. By considering how work will be executed in practice, we seek to identify constraints early, improve sequencing, and support the efficient use of labour, materials, equipment, and time.',
      'A hands-on management philosophy also means remaining engaged with project progress. Construction challenges require timely attention, practical judgment, and effective communication among the people responsible for delivery. We emphasize active coordination and a solutions-oriented mindset to help resolve issues and maintain alignment with project objectives.',
      'Our lean approach is intended to support efficiency without compromising the standards that matter most. Safety, quality, documentation, and responsible project controls remain fundamental to how we work.',
      'By combining streamlined processes with active project involvement, Grascan Build aims to maintain a responsive operating model that adapts to the needs of each project while keeping attention focused on execution and results.',
    ],
  },
  {
    slug: 'trade-subcontractor-network',
    n: '04',
    title: 'Trade & Subcontractor Network',
    subtitle: 'Strong Partnerships. Coordinated Performance.',
    paragraphs: [
      'Successful construction depends on the collective performance of the people and organizations involved in delivering a project. Qualified subcontractors, reliable suppliers, experienced consultants, and effective trade coordination are essential to maintaining quality, schedule, safety, and cost control.',
      'Grascan Build places significant value on building and maintaining professional relationships with trade partners and subcontractors. Through the broader relationships associated with Grascan and our commitment to collaborative project delivery, we seek to establish a dependable network of construction professionals who understand the importance of performance, communication, and accountability.',
      'We recognize that every project has unique technical requirements, scheduling constraints, and procurement considerations. Our approach emphasizes selecting and coordinating trade partners according to the needs of the work, while maintaining clear expectations regarding scope, quality, safety, schedule, and contractual responsibilities.',
      'Effective subcontractor management begins before work reaches the site. Careful scope review, procurement planning, coordination of shop drawings and submittals, and the identification of potential trade interfaces help establish the conditions for a more organized construction process.',
      'During execution, we emphasize communication, progress monitoring, and the timely resolution of coordination issues. By maintaining a collaborative working environment with clearly defined responsibilities, we aim to support productive relationships and consistent performance across the project team.',
      'We believe strong partnerships are developed through mutual respect, reliable commitments, and professional conduct. Our objective is to foster relationships that contribute to successful individual projects while creating opportunities for continued collaboration over the long term.',
    ],
  },
  {
    slug: 'competitive-advantage',
    n: '05',
    title: 'Our Competitive Advantage',
    subtitle: 'Established Relationships. Practical Expertise. Disciplined Delivery.',
    paragraphs: [
      'Grascan Build brings together complementary strengths that support our approach to construction. Our connection to Grascan’s civil construction business, our emphasis on efficient operations, and our focus on client and trade relationships provide a foundation for pursuing building projects with a practical, coordinated, and commercially aware mindset.',
      'We understand that clients need more than a contractor capable of completing a defined scope of work. They need a construction partner who understands project constraints, communicates effectively, manages resources responsibly, and remains focused on the objectives established at the outset.',
      'Our competitive advantage is built around the following principles.',
    ],
    principles: [
      { title: 'An Integrated Construction Perspective', text: 'Our connection to Grascan’s civil capabilities supports a broader understanding of projects involving building construction, site development, servicing, and related infrastructure. This perspective can help inform constructability reviews, work sequencing, and coordination between related scopes.' },
      { title: 'A Lean Operating Philosophy', text: 'We emphasize efficient processes, practical management, and a disciplined approach to overhead and resource allocation. By maintaining a focus on the work itself, we aim to reduce unnecessary complexity while preserving the controls and expertise required for responsible project delivery.' },
      { title: 'Established Industry Relationships', text: 'The broader Grascan network and our commitment to developing strong working relationships provide a foundation for collaboration with owners, consultants, subcontractors, and suppliers. We recognize that dependable relationships are built through performance, communication, and consistent professional conduct.' },
      { title: 'Client-Focused Project Management', text: 'We approach each project with an understanding that successful delivery depends on the client’s objectives. Our focus on communication, coordination, and accountability supports a working relationship in which issues can be addressed constructively and decisions remain connected to project priorities.' },
      { title: 'Practical, Solutions-Oriented Execution', text: 'We value an approach grounded in the realities of construction. From evaluating site constraints and coordinating trades to managing procurement and addressing unforeseen conditions, we focus on practical solutions that support the project’s requirements and delivery objectives.' },
      { title: 'A Commitment to Long-Term Value', text: 'We recognize that a successful project is measured not only by its completion, but also by the quality, functionality, durability, and operational suitability of the finished facility. Our approach emphasizes the importance of responsible construction practices and decisions that support lasting value for our clients.' },
    ],
    closing: 'Together, these principles define how Grascan Build approaches the market: combining the perspective of an established civil construction business with a focused building operation designed around client service, efficient management, and coordinated execution.',
  },
];

export const whyCommitment = {
  title: 'A Construction Partner Focused on What Matters.',
  paragraphs: [
    'At Grascan Build, our approach is guided by a simple principle: successful projects begin with understanding what matters to our clients and carrying that understanding through every stage of construction.',
    'We value strong relationships, clear communication, practical problem-solving, and a disciplined approach to execution. We recognize the responsibility that comes with managing construction work and the importance of maintaining high standards of safety, quality, professionalism, and accountability.',
    'By bringing together building expertise, complementary civil capabilities, and a collaborative approach to project delivery, we aim to create lasting value for our clients and contribute to the successful delivery of the environments and infrastructure that communities depend on.',
  ],
  closing: 'Grascan Build. Lasting value.',
};

/* ------------------------------------------------------------------ */
/*  HEALTH & SAFETY (página)                                           */
/* ------------------------------------------------------------------ */
export const healthSafety = {
  title: 'Safety Is Fundamental to How We Build.',
  intro: [
    'At Grascan Build, protecting the health and safety of our people, trade partners, clients, and the public is a fundamental responsibility. Safety must be considered from the earliest stages of planning through construction and project completion.',
    'We believe effective safety management begins with preparation, clear communication, and accountability at every level. By identifying hazards, coordinating construction activities, and promoting safe work practices, we aim to create work environments where safety remains an essential part of every decision.',
    'Building on Grascan’s existing safety resources and incorporating the specific requirements of building construction, we are committed to developing a practical, proactive approach to health and safety across our projects.',
  ],
  principle: 'Our principle is simple: no project objective takes precedence over the health and safety of the people involved.',
  approachTitle: 'Our Approach to Safety',
  sections: [
    {
      id: 'cor',
      title: 'COR / ISO 45001',
      subtitle: 'Recognized standards. A commitment to continuous improvement.',
      paragraphs: [
        'Established health and safety management frameworks provide an important foundation for identifying risks, establishing procedures, and evaluating performance.',
        'Grascan Build will work to ensure its health and safety practices reflect applicable regulatory requirements, client expectations, and project-specific obligations. Where formal certifications or management-system credentials apply, their scope and status will be communicated clearly and accurately.',
      ],
    },
    {
      id: 'preparedness',
      title: 'Safety & Emergency Preparedness',
      subtitle: 'Prepare for the work. Identify the risks. Know how to respond.',
      paragraphs: [
        'Effective emergency preparedness starts with understanding the work environment and the potential hazards associated with each project.',
        'Grascan Build recognizes the importance of appropriate safety planning, clear communication, and emergency arrangements suited to the site and the activities being performed. Project teams must understand relevant safety expectations, reporting procedures, and emergency response requirements before and during construction.',
      ],
    },
    {
      id: 'portal',
      title: 'Employee Safety Portal',
      subtitle: 'Access to the information that supports safer work.',
      paragraphs: [
        'Employees need timely access to relevant safety information, training resources, and company guidance.',
        'Where applicable, Grascan Build employees will be directed to approved Grascan safety resources and training materials to help them understand workplace expectations and support safe work practices.',
        'The employee safety portal can provide a central access point for relevant resources, subject to confirmed access arrangements for Grascan Build personnel.',
      ],
    },
    {
      id: 'subcontractors',
      title: 'Subcontractor Safety',
      subtitle: 'A shared responsibility across every trade.',
      paragraphs: [
        'Safe construction depends on effective coordination among everyone working on a project. Grascan Build recognizes the important role that subcontractors and trade partners play in maintaining safe and organized construction sites.',
        'We aim to establish clear safety expectations, communicate site-specific requirements, and coordinate work activities to help identify and manage potential hazards. Subcontractors are expected to meet applicable legal requirements and the safety requirements established for their work and the project.',
        'Through communication, cooperation, and accountability, we seek to build productive working relationships that place safety at the centre of project delivery.',
      ],
    },
    {
      id: 'site-safety',
      title: 'Construction Site Safety',
      subtitle: 'Safety built into planning and execution.',
      paragraphs: [
        'Every construction site presents its own conditions, activities, and risks. Effective site safety requires ongoing attention, appropriate planning, and coordination as work progresses.',
        'Grascan Build aims to integrate safety considerations into construction sequencing, site organization, trade coordination, and day-to-day project management. Hazards must be identified and addressed in accordance with applicable requirements and project procedures.',
        'Our focus is to promote safe working conditions while delivering projects with the quality, coordination, and professionalism our clients expect.',
      ],
    },
    {
      id: 'environmental',
      title: 'Environmental & Hazard Management',
      subtitle: 'Responsible construction. Thoughtful risk management.',
      paragraphs: [
        'Construction activities can affect workers, surrounding properties, the public, and the environment. Recognizing and managing these impacts is an important part of responsible project delivery.',
        'Depending on the project, environmental and hazard considerations may include dust, noise, waste, spills, hazardous materials, material handling, and the protection of surrounding areas.',
        'Grascan Build aims to address relevant risks through appropriate planning, coordination, and project-specific controls, in accordance with applicable requirements and site conditions.',
      ],
    },
    {
      id: 'policies',
      title: 'Grascan Build Policies & Resources',
      subtitle: 'Clear guidance. Consistent expectations.',
      paragraphs: [
        'Company policies and safety resources help establish expectations and support responsible decision-making across projects.',
        'Grascan Build intends to draw on relevant Grascan safety resources, together with building-specific training and procedures appropriate to its operations. Applicable policies, forms, training materials, and other documentation will be made available through the appropriate company channels as confirmed.',
        'Employees and subcontractors should refer to the current, approved documentation applicable to their work and project.',
      ],
    },
  ],
  shared: {
    title: 'A Commitment Shared by Everyone',
    paragraphs: [
      'Health and safety are responsibilities shared by management, supervisors, employees, subcontractors, and everyone involved in construction.',
      'At Grascan Build, our objective is to make safety an integral part of how we plan, coordinate, and execute our work. Through preparation, communication, and continual attention to workplace risks, we aim to support safer sites and responsible project delivery.',
    ],
    closing: 'We build with purpose. We plan with care. We put people first.',
  },
};

/* ------------------------------------------------------------------ */
/*  CAREERS                                                            */
/* ------------------------------------------------------------------ */
export const careers = {
  title: 'Building Careers. Creating Opportunities.',
  intro: [
    'At Grascan Build, we see people as an essential part of every successful project. We are building a team focused on delivering quality construction, developing strong industry relationships, and creating opportunities for long-term growth.',
    'As a growing building division supported by Grascan’s established civil construction experience and resources, Grascan Build offers the opportunity to contribute to a developing business while working across a range of construction sectors and project delivery models.',
    'We value people who take ownership, work collaboratively, approach challenges with a practical mindset, and understand the importance of safety, quality, and client relationships.',
  ],
  whyTitle: 'Why Build Your Career With Us?',
  reasons: [
    { title: 'A Growing Business', text: 'Join a developing building division with the opportunity to contribute to its growth, help shape how we work, and take on increasing responsibility as the business evolves.' },
    { title: 'Integrated Construction Experience', text: 'Work within a business that brings building construction and civil construction capabilities together, creating opportunities for collaboration across complementary scopes of work.' },
    { title: 'A Hands-On Approach', text: 'Be part of a team that values direct communication, practical problem-solving, efficient decision-making, and involvement throughout the construction process.' },
    { title: 'Strong Industry Relationships', text: 'Contribute to projects built on collaboration with clients, consultants, subcontractors, and trade partners.' },
    { title: 'Professional Development', text: 'As Grascan Build grows, we aim to develop our team and create opportunities for people to expand their skills, experience, and responsibilities.' },
    { title: 'A Commitment to Responsible Construction', text: 'Help deliver projects with a focus on safety, quality, accountability, and respect for the people involved.' },
  ],
  lookFor: {
    title: 'Who We Look For',
    paragraphs: [
      'We welcome professionals who bring technical knowledge, initiative, sound judgment, and a collaborative attitude to their work. Relevant backgrounds may include project management, estimating, construction supervision, project coordination, preconstruction, and other building construction disciplines.',
      'Whether you bring established industry experience or are looking to develop your career, we value people who are ready to contribute, learn, and grow with the business.',
    ],
  },
  next: {
    title: 'Build What Comes Next',
    text: 'Grascan Build is developing its team to support its projects and long-term growth. If you are interested in contributing to a growing construction business, we invite you to connect with us.',
    closing: 'Interested in joining Grascan Build? Explore our career opportunities or contact us to express your interest.',
  },
  opportunities: {
    title: 'Career Opportunities',
    subtitle: 'Build Your Future With Grascan Build.',
    paragraphs: [
      'Grascan Build is building a team of construction professionals committed to delivering projects with a focus on quality, safety, collaboration, and client service.',
      'Our planned growth will create opportunities across project management, estimating, construction supervision, coordination, and other areas of building construction as business needs evolve.',
      'We are interested in connecting with people who bring initiative, technical capability, a practical approach to problem-solving, and a commitment to working collaboratively.',
    ],
    currentTitle: 'Current Opportunities',
    currentText: 'Explore the positions listed below to learn about available roles, responsibilities, and qualifications.',
    empty: 'If no positions are currently listed, please check back for future opportunities or contact us to express your interest in joining Grascan Build.',
  },
  interested: {
    title: 'Interested in Working With Us?',
    paragraphs: [
      'Even if there is no current opening that matches your experience, we welcome you to introduce yourself and share your professional background.',
      'Please use our contact page to enquire about career opportunities and the appropriate way to submit your résumé.',
    ],
    closing: 'Help us build the next chapter of Grascan Build.',
  },
};
