export const personalInfo = {
  name: "Suriyasankar P",
  role: "Senior Software Engineer",
  company: "Akbar Offshore",
  location: "Kochi, India",
  email: "suriyasankar.dev@gmail.com",
  github: "https://github.com/suriyasankarp",
  linkedin: "https://linkedin.com/in/suriyasankarp",
  tagline: "Backend-focused Full-Stack .NET Engineer",
  bio: "Backend-focused .NET engineer with 4 years of experience building high-traffic flight booking platforms — handling 20–30K searches and 200K+ supplier API calls every day. I design resilient, cache-heavy ASP.NET Core services, secure them with JWT and role-based access, and ship them with Docker and Azure DevOps. Founding member of the T3 Center of Excellence.",
};

export const techStack = [
  {
    category: "Backend",
    items: [
      "ASP.NET Core", "C#", "Entity Framework Core",
      "Clean Architecture", "DDD", "Microservices",
      "REST API", "JWT / IdentityServer", "RBAC", "Hangfire",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "MongoDB", "Aerospike", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker", "Docker Compose", "Kubernetes", "Azure DevOps", "Azure Functions",
      "Azure Event Grid", "Azure Blob Storage", "Azure Key Vault", "NGINX",
    ],
  },
  {
    category: "Search & Messaging",
    items: ["Elasticsearch", "Serilog"],
  },
  {
    category: "AI & Integration",
    items: ["Azure OpenAI", "Semantic Kernel", "Microsoft Graph API", "Sabre", "Amadeus"],
  },
  {
    category: "Frontend",
    items: ["React", "Material UI", "JavaScript", ".NET MAUI"],
  },
];

export const projects = [
  {
    title: "BuyBestFares",
    subtitle: "B2C Flight Booking Platform",
    role: "Architect & Lead Developer",
    description:
      "End-to-end B2C flight booking platform that I designed and built independently — from the high-level design to production — using the existing GetFares B2B system as its upstream API.",
    highlights: [
      "Authored the high-level design and built the platform end to end",
      "Authentication layer with JWT, role-based access and custom signing keys",
      "RBAC model across ~30 API endpoints with staff/client separation and row-level data isolation",
      "Found and fixed a privilege-escalation flaw in the existing authorization logic",
      "CCAvenue payment gateway integration (AES-128-CBC)",
      "Background job processing for long-running booking workflows",
    ],
    tech: ["ASP.NET Core", "C#", "JWT", "RBAC", "Hangfire", "MySQL", "Docker"],
    type: "Production",
  },
  {
    title: "GetFares",
    subtitle: "B2B Flight Search & Booking Platform",
    role: "Backend Engineer",
    description:
      "High-concurrency B2B flight search and booking platform aggregating fares from multiple suppliers, built for reliability when external APIs are slow or failing.",
    highlights: [
      "Serves 20–30K daily searches and 200K+ supplier API calls per day",
      "Supplier integrations: AeroHub, Amadeus, Sabre, Wego (HMAC-signed auth)",
      "Retry, timeout, partial-failure and graceful-fallback handling for supplier APIs",
      "~30% faster responses via EF Core query optimization and Aerospike caching",
      "Re-engineered cache compression: ~27% smaller payloads, ~50% faster compression",
      "Secured 5+ microservices with IdentityServer claims-based authorization",
    ],
    tech: ["ASP.NET Core", "EF Core", "Aerospike", "Redis", "MySQL", "IdentityServer", "Azure DevOps"],
    type: "Production",
  },
  {
    title: "MailIntelligent",
    subtitle: "AI-powered Email Auto-Reply",
    role: "Backend Engineer",
    description:
      "Replaced a manual email triage workflow: incoming mail is read, search criteria are extracted with AI, fares are fetched from the B2B system and a reply is sent automatically.",
    highlights: [
      "Mailbox ingestion via Microsoft Graph API",
      "Azure OpenAI + Semantic Kernel to extract travel search criteria from free text",
      "Queries GetFares over its API and composes the auto-reply",
      "Hangfire background pipeline with admin endpoints for monitoring",
    ],
    tech: ["ASP.NET Core", "Azure OpenAI", "Semantic Kernel", "Microsoft Graph API", "Hangfire"],
    type: "Production",
  },
  {
    title: "SalesCompanion",
    subtitle: "Cross-platform Field Sales App",
    role: "R&D Lead",
    description:
      "Cross-platform mobile app for field sales teams. Led the R&D from prototype through to App Store submission.",
    highlights: [
      "Took the .NET MAUI prototype through to a production app",
      "iOS release pipeline: TestFlight → App Store Connect submission",
      "Android Play Store deployment and release management",
    ],
    tech: [".NET MAUI", "C#", "REST API", "Azure DevOps"],
    type: "Production",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Akbar Offshore",
    location: "Kochi, India",
    from: "Apr 2026",
    to: "Present",
    highlights: [
      "Architected and independently built the BuyBestFares B2C platform on top of the B2B system",
      "Designed RBAC across ~30 endpoints with row-level isolation; fixed a privilege-escalation flaw",
      "Cut cached payload size by ~27% and compression time by ~50%",
      "Built MailIntelligent, an AI-powered email auto-reply system that replaced manual triage",
      "Integrated the CCAvenue payment gateway (AES-128-CBC) into BuyBestFares",
      "Led mobile app R&D through to App Store submission; regular code reviews for the team",
    ],
  },
  {
    role: "Software Engineer",
    company: "Akbar Offshore",
    location: "Kochi, India",
    from: "Apr 2025",
    to: "Apr 2026",
    highlights: [
      "Supported 20–30K daily searches on GetFares with retry, timeout and fallback handling",
      "Improved backend response times by ~30% through EF Core optimization and Aerospike caching",
      "Founding member of the T3 Center of Excellence — high-severity incident triage and cross-team escalations",
      "Upgraded the platform to .NET 8",
      "Built a serverless Azure Function (Event Grid + Blob Storage) for automatic file tagging",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Akbar Offshore",
    location: "Kochi, India",
    from: "May 2023",
    to: "Apr 2025",
    highlights: [
      "Built REST APIs and booking/search workflows for GetFares using ASP.NET Core",
      "Integrated suppliers including Sabre; resilient handling of supplier timeouts",
      "Built POCs including Semantic Kernel AI orchestration and a .NET MAUI prototype",
    ],
  },
  {
    role: "Junior Programmer (Intern)",
    company: "Akbar Offshore",
    location: "Remote",
    from: "Oct 2022",
    to: "Apr 2023",
    highlights: [],
  },
];
