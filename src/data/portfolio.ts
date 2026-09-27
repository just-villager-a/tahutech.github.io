export const profile = {
  name: 'Ade Widyatama Dian Boernama',
  brand: 'TahuTech',
  role: '.NET / Backend Software Engineer',
  summary:
    'Backend developer with 3+ years of experience maintaining and enhancing web applications, REST APIs, integrations, and production services with .NET and SQL Server.',
  email: 'adewidyatamadb@gmail.com',
  location: 'Jakarta, Indonesia',
  linkedin: 'https://linkedin.com/in/ade-widyatama-db',
  github: 'https://github.com/just-villager-a'
};

export const experiences = [
  {
    company: 'Dikshatek Indonesia',
    role: '.NET Backend Developer (Contract)',
    period: 'Jul 2025 — Present',
    context: 'Placement: Mandiri Inhealth',
    description: 'Developing and maintaining REST APIs for internal business services and system integrations.',
    highlights: [
      'Implemented change requests while preserving existing production behavior.',
      'Investigated production bugs and collaborated with QA and business stakeholders through release preparation.',
      'Worked with SQL Server queries, stored procedures, and reporting requirements.',
      'Built a FastAPI KTP OCR service with YOLO-based detection, PaddleOCR, and image preprocessing.'
    ],
    technologies: ['C#', '.NET Core', 'ASP.NET', 'SQL Server', 'Python', 'FastAPI']
  },
  {
    company: 'PT. Astra Graphia Information Technology',
    role: '.NET Developer (Contract)',
    period: 'Oct 2023 — Jul 2025',
    context: 'Placement: Astra Otoparts Head Office',
    description: 'Maintained and enhanced ASP.NET applications, Web APIs, and console applications used in production.',
    highlights: [
      'Developed REST APIs for system integrations and application features.',
      'Built an OCR-based tax invoice processing API using Flask and Python.',
      'Maintained SQL Server queries and supported production issue investigation.',
      'Collaborated across teams during integration and feature delivery.'
    ],
    technologies: ['.NET Framework', 'ASP.NET', 'Web API', 'SQL Server', 'Python', 'Flask']
  },
  {
    company: 'Xtremax Teknologi Indonesia',
    role: 'Associate Backend Developer',
    period: 'Mar 2023 — Aug 2023',
    context: 'Project: Singapore Government',
    description: 'Supported maintenance and enhancement of a government web application with strict quality and security requirements.',
    highlights: [
      'Contributed to SEO, accessibility, and performance improvements.',
      'Implemented IIS configuration changes and security-related configuration.',
      'Investigated application issues and supported ongoing maintenance with the Sitecore Architect.'
    ],
    technologies: ['.NET', 'IIS', 'SEO', 'Accessibility', 'Sitecore']
  }
];

export const skillGroups = [
  { title: 'Backend & systems', items: ['C#', '.NET', 'ASP.NET', '.NET Core', 'REST API', 'Web API'] },
  { title: 'Database', items: ['SQL Server', 'MySQL', 'SQL', 'Stored procedures'] },
  { title: 'Frontend foundations', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
  { title: 'Development tools', items: ['Git', 'IIS', 'API integration', 'Visual Studio'] },
  { title: 'Working exposure', items: ['Python', 'FastAPI', 'Flask', 'YOLO', 'PaddleOCR'] }
];

export const projects = [
  {
    index: '01',
    title: 'Mini Microservices Project',
    eyebrow: 'Learning project · .NET 6',
    description: 'A small exploration of service boundaries and communication using Student Service and Book Service.',
    details: 'The project experiments with API gateway routing, command/query separation, asynchronous messaging, and independently stored service data.',
    technologies: ['.NET 6', 'MediatR', 'Ocelot', 'MassTransit', 'RabbitMQ']
  }
];

export const education = [
  { degree: 'Master of Engineering — Information Technology', institution: 'Gadjah Mada University', period: 'Aug 2019 — Sep 2022', note: 'GPA 3.65 / 4.00' },
  { degree: 'Bachelor of Computer Science — Informatics Engineering', institution: 'Mulawarman University', period: 'Sep 2015 — May 2019', note: 'GPA 3.83 / 4.00' }
];
