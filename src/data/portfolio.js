export const personalInfo = {
  name: "Suriya Sankar",
  role: "Senior Software Engineer",
  company: "Akbar Offshore",
  location: "Kochi, India",
  email: "suriyasankar.dev@gmail.com",
  github: "https://github.com/suriyasankar",
  linkedin: "https://linkedin.com/in/suriyasankar",
  tagline: "Backend-focused Full-Stack .NET Engineer",
  bio: "Senior Software Engineer at Akbar Offshore with ~3 years of experience building enterprise-grade backend systems. Founding member of the T3 Center of Excellence team. Passionate about Clean Architecture, distributed systems, and cloud-native deployments.",
};

export const techStack = [
  {
    category: "Backend",
    items: [
      "ASP.NET Core", "C#", "Entity Framework Core",
      "Clean Architecture", "DDD", "Microservices",
      "REST API", "JWT / IdentityServer8", "Hangfire",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "MongoDB", "Aerospike", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Docker Compose", "Kubernetes", "Azure DevOps", "Azure Key Vault", "NGINX", "Azure Functions"],
  },
  {
    category: "Search & Messaging",
    items: ["Elasticsearch", "Kafka", "Serilog"],
  },
  {
    category: "AI & Integration",
    items: ["Azure OpenAI", "Semantic Kernel", "Microsoft Graph API"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Material UI", "TypeScript", ".NET MAUI"],
  },
];

export const projects = [
  {
    title: "BuyBestFares / GetFares",
    subtitle: "B2C & B2B Flight Booking Platform",
    role: "Senior Backend Engineer",
    description:
      "Enterprise-scale flight booking platform with multi-supplier integration. Built fare-rules rendering, caching layers, payment gateway integration, and parallel fan-out search architecture.",
    highlights: [
      "Supplier integrations: AeroHub, Amadeus, Sabre, Wego (HMAC-signed auth)",
      "Fixed GZip/encoding bug in Aerospike cache — significant payload size reduction",
      "CCAvenue AES-128-CBC payment gateway integration",
      "Concurrency bug fix: DbContext scope misuse in search pipeline",
      "Currently leading .NET 8 → .NET 10 upgrade",
    ],
    tech: ["ASP.NET Core", "MySQL", "Aerospike", "Redis", "NGINX", "Docker", "Azure DevOps"],
    type: "Production",
  },
  {
    title: "MailIntelligent",
    subtitle: "AI-powered Email Triage Pipeline",
    role: "Backend Engineer",
    description:
      "Intelligent email classification and routing pipeline using Azure OpenAI, integrated with Breezer CRM via Microsoft Graph API.",
    highlights: [
      "Hangfire background job pipeline for email processing",
      "Azure OpenAI integration for smart email categorization",
      "Microsoft Graph API for mailbox access",
      "Admin dashboard and management endpoints",
    ],
    tech: ["ASP.NET Core", "Hangfire", "Azure OpenAI", "Microsoft Graph API", "Semantic Kernel"],
    type: "Production",
  },
  {
    title: "SalesCompanion",
    subtitle: ".NET MAUI Field Sales App",
    role: "Full-Stack Engineer",
    description:
      "Cross-platform mobile application for field sales teams. Managed complete iOS and Android deployment pipelines.",
    highlights: [
      "iOS pipeline: TestFlight → App Store with App Store Connect metadata",
      "Android Play Store deployment and release management",
      "Cross-platform .NET MAUI architecture",
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
    from: "April 2026",
    to: "Present",
    note: "Promoted — Founding member, T3 Center of Excellence",
  },
  {
    role: "Software Engineer",
    company: "Akbar Offshore",
    location: "Kochi, India",
    from: "May 2023",
    to: "April 2026",
    note: "Backend-focused full-stack .NET development",
  },
];
