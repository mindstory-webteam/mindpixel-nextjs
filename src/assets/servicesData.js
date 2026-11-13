import { img } from "./assest";

export const SERVICES_DATA = [
  {
    id: "01",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Excellence",
    badge: "iOS & Android",
    detail: "From concept to App Store end-to-end.",
    shortDescription:
      "We design and develop high-performance mobile applications tailored for iOS and Android platforms, combining native precision with the flexibility of cross-platform technologies.",
    fullDescription:
      "Our mobile app development process blends clean software architecture with intuitive, motion-rich user experiences. Whether you need a native iOS app built with Swift, a native Android application in Kotlin, or a scalable cross-platform product powered by React Native or Flutter, we deliver rock-solid stability, high frame rates, offline persistence, and seamless API integrations.",
    image: img.mobileappdevelopment,
    stats: [
      { value: "4.9★", label: "Average Store Rating" },
      { value: "99.9%", label: "Crash-Free Sessions" },
      { value: "60fps", label: "Fluid Interface Performance" },
      { value: "50k+", label: "Active Mobile Users" },
    ],
    highlights: [
      "Cross-Platform Architecture (Single codebase, native speed)",
      "Offline-First Data Synchronization",
      "Biometric Authentication & Hardware Integration",
      "Automated CI/CD App Store & Play Store Deployment",
    ],
    features: [
      {
        title: "Native & Hybrid Mastery",
        desc: "We build with React Native, Flutter, Swift, and Kotlin, selecting the optimal framework to match your timeline, performance benchmarks, and budget.",
      },
      {
        title: "Offline-First Sync",
        desc: "Local-first storage with SQLite, Realm, or WatermelonDB ensures zero interruption for users in low-connectivity conditions.",
      },
      {
        title: "Hardware & Sensor Integration",
        desc: "Deep integration with cameras, Bluetooth BLE, GPS geolocation, NFC, haptics, and biometrics for next-generation mobile capabilities.",
      },
      {
        title: "App Store Publishing & ASO",
        desc: "Full guidance through Apple App Store and Google Play compliance, metadata tuning, App Store Optimization, and release management.",
      },
    ],
    deliverables: [
      "Production-ready iOS and Android binaries",
      "Full source code and architecture documentation",
      "Automated testing suite (Unit, E2E, UI tests)",
      "App Store & Google Play approved listings",
      "Analytics and crash reporting dashboards",
    ],
    technologies: [
      { name: "React Native", icon: "/icons/react.svg", category: "Framework" },
      { name: "Next JS / Node", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "TypeScript", icon: "/icons/typescript.svg", category: "Language" },
      { name: "Firebase", icon: "/icons/firebase.svg", category: "Cloud & Auth" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Docker", icon: "/icons/docker.svg", category: "DevOps" },
    ],
    process: [
      {
        step: "01",
        title: "Product Discovery & Wireframing",
        desc: "We define user journeys, edge cases, feature sets, and technical architecture before writing a single line of code.",
      },
      {
        step: "02",
        title: "UI/UX & Interactive Prototyping",
        desc: "Crafting fluid mobile interfaces in Figma with tactile touch patterns and native gestures.",
      },
      {
        step: "03",
        title: "Agile Sprint Development",
        desc: "Building the frontend and backend in 2-week sprints with regular TestFlight and internal beta builds.",
      },
      {
        step: "04",
        title: "Rigorous QA & Stress Testing",
        desc: "Testing across multiple device sizes, OS versions, and network speeds to ensure flawless reliability.",
      },
      {
        step: "05",
        title: "Store Submission & Launch Support",
        desc: "Submitting to App Store and Play Store, resolving review feedback, and monitoring live telemetry.",
      },
    ],
    faqs: [
      {
        q: "Should I build native apps or choose cross-platform (React Native/Flutter)?",
        a: "For 90% of business applications, cross-platform with React Native or Flutter delivers identical performance and native feel while slashing development cost and maintenance time in half. If your application relies on intensive 3D graphics or deep OS-level kernel hooks, we recommend pure native.",
      },
      {
        q: "How long does it take to develop a custom mobile application?",
        a: "A typical MVP mobile app takes approximately 8 to 12 weeks from discovery to store submission. Complex enterprise apps with heavy custom backends or integrations may take 14 to 20 weeks.",
      },
      {
        q: "Will you manage the App Store and Google Play Store submission process?",
        a: "Yes. We take full ownership of the submission process, creating store assets, writing compliant privacy policies, configuring in-app purchases, and addressing any store review inquiries.",
      },
      {
        q: "Who owns the code and intellectual property once completed?",
        a: "You retain 100% full intellectual property and ownership rights of all code, design files, databases, and assets upon project completion.",
      },
    ],
  },
  {
    id: "02",
    slug: "saas-application",
    title: "SaaS Application",
    subtitle: "Cloud-Native Platforms Built to Scale",
    badge: "Cloud & Multi-Tenant",
    detail: "Architected to grow with your user base.",
    shortDescription:
      "We build robust, scalable software-as-a-service platforms engineered with multi-tenant architecture, automated subscription billing, and real-time data sync.",
    fullDescription:
      "Launching a software-as-a-service platform requires deep architectural rigor. We architect SaaS solutions that scale horizontally from your first 100 pilot users to 100,000+ paying enterprise seats. From tenant isolation and RBAC security models to Stripe billing meters, automated provisioning, and microservice backends, we turn ambitious ideas into sustainable recurring revenue machines.",
    image: img.saasservice,
    stats: [
      { value: "99.99%", label: "Uptime Reliability" },
      { value: "<150ms", label: "Average API Response" },
      { value: "Multi-Tenant", label: "Complete Data Isolation" },
      { value: "Stripe-Ready", label: "Automated Global Billing" },
    ],
    highlights: [
      "Multi-Tenant Database Architecture (Row-level security or separate DBs)",
      "Self-Serve Onboarding & Automated Workspace Provisioning",
      "Stripe / LemonSqueezy Tiered Billing & Usage Metering",
      "Role-Based Access Control (RBAC) & Audit Logs",
    ],
    features: [
      {
        title: "Multi-Tenant Cloud Architecture",
        desc: "Secure customer workspace isolation using Postgres Row Level Security (RLS) or dedicated schemas to satisfy enterprise data compliance.",
      },
      {
        title: "Flexible Subscription Billing",
        desc: "Seamless integration with Stripe, LemonSqueezy, or Paddle for recurring subscriptions, seat-based pricing, usage metering, and tax compliance.",
      },
      {
        title: "Real-Time Collaboration",
        desc: "Live multi-user sync via WebSockets, Server-Sent Events (SSE), and operational transformation algorithms.",
      },
      {
        title: "Developer APIs & Webhooks",
        desc: "Provide your users with public REST/GraphQL APIs, developer documentation, and outbound webhook delivery systems.",
      },
    ],
    deliverables: [
      "Complete SaaS web application with authentication & tenant spaces",
      "Admin superuser dashboard for user management & MRR analytics",
      "Subscription billing & invoicing integration",
      "Infrastructure as Code (Terraform / Docker) scripts",
      "Public API documentation and webhooks",
    ],
    technologies: [
      { name: "Next JS", icon: "/icons/nextjs.svg", category: "Frontend" },
      { name: "Node JS", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Redis", icon: "/icons/redis.svg", category: "Caching & Queues" },
      { name: "Docker", icon: "/icons/docker.svg", category: "Containers" },
      { name: "Azure / AWS", icon: "/icons/azure.svg", category: "Cloud" },
    ],
    process: [
      {
        step: "01",
        title: "Architecture & Data Modeling",
        desc: "Drafting tenant schemas, data access policies, billing tier strategies, and security protocols.",
      },
      {
        step: "02",
        title: "Core Workflow UX & UI",
        desc: "Designing fast, responsive dashboards with ergonomic desktop density and intuitive navigation.",
      },
      {
        step: "03",
        title: "Platform Development",
        desc: "Building the auth, multi-tenant middleware, core platform features, and billing integrations.",
      },
      {
        step: "04",
        title: "Security Audit & Load Testing",
        desc: "Stress-testing concurrency, simulating tenant leakage edge cases, and validating webhook fallbacks.",
      },
      {
        step: "05",
        title: "Production Deployment & Scaling",
        desc: "Setting up CI/CD, auto-scaling clusters, automated backups, and 24/7 uptime monitoring.",
      },
    ],
    faqs: [
      {
        q: "How do you ensure data isolation between different customer accounts?",
        a: "We implement rigorous tenant isolation using either schema-per-tenant, database-per-tenant, or PostgreSQL Row Level Security (RLS) with parameterized tenant context middleware, preventing cross-tenant access at the database level.",
      },
      {
        q: "Can you handle usage-based or metered billing models?",
        a: "Yes. We implement event-driven meter tracking that tallies customer consumption (such as API calls, compute minutes, or active seats) and syncs directly with billing gateways like Stripe Billing.",
      },
      {
        q: "What infrastructure do you recommend for hosting a SaaS?",
        a: "We recommend modern serverless or containerized setups using AWS, Google Cloud, Azure, or Vercel with managed PostgreSQL (Supabase, Neon, RDS), Redis, and CDN caching for maximum speed and minimal maintenance.",
      },
    ],
  },
  {
    id: "03",
    slug: "custom-software",
    title: "Custom Software",
    subtitle: "Bespoke Engineering Tailored to Your Workflows",
    badge: "Bespoke Solutions",
    detail: "No templates. No compromise.",
    shortDescription:
      "We design and build bespoke software systems engineered specifically around your unique business operations, data flows, and growth objectives.",
    fullDescription:
      "Off-the-shelf software often forces your business into rigid boxes. Our custom software development services solve the exact operational bottlenecks that standard software cannot. From proprietary internal portals and workflow automations to specialized calculation engines, we architect software that gives your team an unbeatable operational advantage.",
    image: img.happynexmockup,
    stats: [
      { value: "100%", label: "Custom Architecture" },
      { value: "3x", label: "Workflow Speedup" },
      { value: "Zero", label: "Licensing Seat Fees" },
      { value: "Seamless", label: "Third-Party Integration" },
    ],
    highlights: [
      "Custom Workflow Automation & Paperless Operations",
      "Seamless Legacy System & ERP Integrations",
      "Tailored Role-Based Portals & Dashboards",
      "High Security & Proprietary IP Ownership",
    ],
    features: [
      {
        title: "Bespoke Workflow Engines",
        desc: "Map your exact business procedures, approval chains, and document pipelines into efficient digital workflows.",
      },
      {
        title: "Legacy Modernization",
        desc: "Modernize legacy desktop or Excel-based setups into fast, cloud-connected web applications without risking data integrity.",
      },
      {
        title: "Deep API Integrations",
        desc: "Connect disparate internal systems, third-party CRMs, payment gateways, and logistics providers into a single unified hub.",
      },
      {
        title: "Enterprise Grade Security",
        desc: "End-to-end encryption, strict role-based access controls, complete audit trails, and automated backups.",
      },
    ],
    deliverables: [
      "Custom application tailored to exact business requirements",
      "Clean, modular codebase with comprehensive documentation",
      "Database schema and data migration scripts",
      "User guides and administrative training walkthroughs",
      "Post-launch SLA and maintenance package",
    ],
    technologies: [
      { name: "React JS", icon: "/icons/react.svg", category: "Frontend" },
      { name: "Node JS", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "Python", icon: "/icons/python.svg", category: "Automation" },
      { name: "MySQL", icon: "/icons/mysql.svg", category: "Database" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Nginx", icon: "/icons/nginx.svg", category: "Infrastructure" },
    ],
    process: [
      {
        step: "01",
        title: "Operations Audit & Requirements",
        desc: "Shadowing your team to diagnose workflow bottlenecks, manual data entry points, and integration needs.",
      },
      {
        step: "02",
        title: "Solution Blueprint & Prototyping",
        desc: "Creating data models, wireframes, and architectural diagrams to validate the design with stakeholders.",
      },
      {
        step: "03",
        title: "Iterative Sprint Development",
        desc: "Building the platform modularly so core departments can test and provide feedback in real time.",
      },
      {
        step: "04",
        title: "Data Migration & Dry Run",
        desc: "Safely importing historical data, sanitizing records, and running side-by-side verification tests.",
      },
      {
        step: "05",
        title: "Staff Training & Cutover",
        desc: "Hands-on team onboarding, system cutover, and dedicated hypercare support.",
      },
    ],
    faqs: [
      {
        q: "Why choose custom software instead of buying existing SaaS tools?",
        a: "Off-the-shelf tools charge high monthly subscription fees per seat, often lack 20-30% of your critical operational workflows, and make it difficult to migrate your data. Custom software belongs entirely to you, adapts as your company grows, and eliminates recurring seat fees.",
      },
      {
        q: "Can custom software connect with our existing tools (Accounting, ERP, CRM)?",
        a: "Yes. We build custom API connectors, webhooks, or database bridges to ensure bidirectional sync between your custom platform and tools like Zoho, SAP, Salesforce, or Tally.",
      },
      {
        q: "What happens if we need new features in the future?",
        a: "Because our codebase is written with modular, clean architecture and documented APIs, your internal team or our engineers can add new features anytime without breaking existing workflows.",
      },
    ],
  },
  {
    id: "04",
    slug: "enterprise-software",
    title: "Enterprise Software",
    subtitle: "Complex Workflows Simplified at Scale",
    badge: "Enterprise Grade",
    detail: "Built for teams of 10 to 10,000.",
    shortDescription:
      "We deliver comprehensive enterprise solutions that eliminate departmental silos, automate high-volume transactions, and maintain rigorous regulatory compliance.",
    fullDescription:
      "Enterprise organizations face unique challenges: strict governance, multi-region compliance, legacy interoperability, and high concurrent load. We engineer enterprise systems built to withstand the heaviest organizational demands while giving executives crystal-clear visibility through custom analytical intelligence.",
    image: img.EnterpriseSoftware,
    stats: [
      { value: "10k+", label: "Concurrent Users Handled" },
      { value: "SOC 2", label: "Compliance-Ready Architecture" },
      { value: "Sub-second", label: "Reporting Speeds" },
      { value: "24/7", label: "Mission-Critical Stability" },
    ],
    highlights: [
      "Role-Based Access Control (RBAC) & Single Sign-On (SSO / SAML)",
      "Automated High-Volume Document & Financial Pipelines",
      "Executive Dashboards & Predictive Analytics",
      "Enterprise Disaster Recovery & Multi-Region Failover",
    ],
    features: [
      {
        title: "Enterprise Security & SSO",
        desc: "Integrate with Microsoft Entra ID, Okta, Google Workspace, and SAML 2.0 with strict multi-factor authentication policies.",
      },
      {
        title: "Departmental Workflow Sync",
        desc: "Break down barriers between Sales, Inventory, Finance, and Operations with centralized event streams and automated approvals.",
      },
      {
        title: "Real-Time Telemetry & BI",
        desc: "Transform terabytes of transactional data into instantaneous business intelligence dashboards and automated management reports.",
      },
      {
        title: "High-Availability Infrastructure",
        desc: "Containerized Kubernetes clusters, distributed database replicas, and redundant cloud architectures that prevent downtime.",
      },
    ],
    deliverables: [
      "Enterprise software application with SSO/SAML integration",
      "Centralized administrative control panel with audit logging",
      "Automated ETL pipelines and analytics dashboards",
      "Security audit compliance documentation",
      "Enterprise SLA and 24/7 incident response agreement",
    ],
    technologies: [
      { name: "Next JS", icon: "/icons/nextjs.svg", category: "Frontend" },
      { name: "Node JS", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "Python / Django", icon: "/icons/django.svg", category: "Backend" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Redis", icon: "/icons/redis.svg", category: "Cache" },
      { name: "Docker / Azure", icon: "/icons/docker.svg", category: "Infrastructure" },
    ],
    process: [
      {
        step: "01",
        title: "Enterprise Discovery & Compliance Audit",
        desc: "Evaluating security requirements, regulatory compliance, data isolation, and stakeholder goals.",
      },
      {
        step: "02",
        title: "System Architecture & Threat Modeling",
        desc: "Drafting microservices or modular monolith architectures with robust disaster recovery plans.",
      },
      {
        step: "03",
        title: "Phased Milestone Implementation",
        desc: "Deploying functionality in staged phases to avoid disrupting ongoing business operations.",
      },
      {
        step: "04",
        title: "Penetration Testing & Load Simulation",
        desc: "Simulating peak concurrent loads and conducting vulnerability scans to guarantee system hardening.",
      },
      {
        step: "05",
        title: "Enterprise Rollout & Hypercare",
        desc: "Coordinating multi-tier deployment, single sign-on cutover, and round-the-clock engineer support.",
      },
    ],
    faqs: [
      {
        q: "Can your system integrate with our existing Active Directory or Okta?",
        a: "Yes. We support SAML 2.0, OpenID Connect (OIDC), and OAuth2 to provide seamless Single Sign-On (SSO) with Microsoft Entra ID, Okta, OneLogin, or Google Workspace.",
      },
      {
        q: "How do you handle data privacy and compliance?",
        a: "Our architectures implement end-to-end TLS encryption in transit and AES-256 encryption at rest, along with comprehensive tamper-proof audit trails for every create, read, update, and delete action.",
      },
      {
        q: "Do you offer SLA-backed technical maintenance?",
        a: "Yes. We provide tailored Enterprise SLAs with guaranteed response windows, proactive monitoring, regular vulnerability patching, and database optimizations.",
      },
    ],
  },
  {
    id: "05",
    slug: "ui-ux-design",
    title: "UI / UX Design",
    subtitle: "Human-Centred Digital Experiences that Convert",
    badge: "Design Systems & Research",
    detail: "Design that converts, not just impresses.",
    shortDescription:
      "We design intuitive, conversion-focused user interfaces and design systems that bridge brand aesthetics with seamless usability across all screen sizes.",
    fullDescription:
      "Design is more than decoration; it is how a product thinks, communicates, and converts. We immerse ourselves in your users' mindset through behavioral research, user journey mapping, and wireframing, crafting interfaces that minimize cognitive friction and make complex digital interactions feel effortless.",
    image: img.uiux,
    stats: [
      { value: "+60%", label: "Average Conversion Uplift" },
      { value: "100%", label: "Component Reusability" },
      { value: "WCAG", label: "Accessibility AA Standard" },
      { value: "Figma", label: "Interactive Component Tokens" },
    ],
    highlights: [
      "User Research, Personas & Friction Analysis",
      "Clickable Wireframes & Interactive Prototypes",
      "Scalable Figma Design Systems & Token Architecture",
      "Usability Testing & Micro-Interaction Animations",
    ],
    features: [
      {
        title: "Deep User Research & Journey Mapping",
        desc: "Discovering where users drop off and identifying the shortest path between customer intent and business conversion.",
      },
      {
        title: "Interactive High-Fidelity Prototypes",
        desc: "Experience realistic click-through flows in Figma with real data and micro-interactions before development starts.",
      },
      {
        title: "Comprehensive Design Systems",
        desc: "Standardized typography scales, color palettes, responsive layouts, and reusable components that keep your digital brand cohesive.",
      },
      {
        title: "Accessibility (WCAG AA)",
        desc: "Thoughtful contrast ratios, legible typography, and focus states that ensure your digital products are usable by everyone.",
      },
    ],
    deliverables: [
      "Complete Figma project file with organized pages and layers",
      "Clickable interactive prototype ready for usability tests",
      "Design system with reusable component library and tokens",
      "Developer handoff documentation with spacing & animation specs",
      "Responsive artboards for mobile, tablet, and desktop views",
    ],
    technologies: [
      { name: "Figma", icon: "/icons/figma.svg", category: "Design Tool" },
      { name: "Photoshop", icon: "/icons/photoshop.svg", category: "Graphics" },
      { name: "Illustrator", icon: "/icons/illustrator.svg", category: "Vectors" },
      { name: "Html / Css", icon: "/icons/html5.svg", category: "Prototyping" },
      { name: "Next JS", icon: "/icons/nextjs.svg", category: "Handoff" },
    ],
    process: [
      {
        step: "01",
        title: "User Research & Problem Definition",
        desc: "Analyzing user behavior, competitor benchmarks, and product goals to uncover core design opportunities.",
      },
      {
        step: "02",
        title: "Information Architecture & Wireframing",
        desc: "Mapping sitemaps, navigation hierarchies, and low-fidelity layout wireframes to establish logical flow.",
      },
      {
        step: "03",
        title: "Visual Design & System Crafting",
        desc: "Infusing brand character, mood boards, color tokens, and polished UI component libraries.",
      },
      {
        step: "04",
        title: "Interactive Prototyping & User Testing",
        desc: "Building animated click-through prototypes and testing with real users to validate assumptions.",
      },
      {
        step: "05",
        title: "Pixel-Perfect Developer Handoff",
        desc: "Annotating exact measurements, states, responsive rules, and exporting assets for the engineering team.",
      },
    ],
    faqs: [
      {
        q: "What tool do you use for UI/UX design and handoff?",
        a: "We work primarily in Figma, using auto-layout, nested component variants, and design tokens to ensure your engineering team has an effortless, 1:1 implementation experience.",
      },
      {
        q: "Can you redesign our existing platform without changing the backend?",
        a: "Yes. We frequently conduct UI/UX redesigns where we retain your existing APIs and databases while modernizing the user-facing interface, improving usability, and dramatically boosting user engagement.",
      },
      {
        q: "Do you test designs with real users?",
        a: "Yes. We conduct moderated and unmoderated usability tests on clickable prototypes to identify points of friction before engineering investments are made.",
      },
    ],
  },
  {
    id: "06",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Organic Growth Engine Built for Long-Term Authority",
    badge: "Organic Search & Technical SEO",
    detail: "Results you can measure, traffic you can trust.",
    shortDescription:
      "We develop data-driven SEO strategies that improve search rankings, optimize Core Web Vitals, and attract high-intent organic customers to your business.",
    fullDescription:
      "SEO is not about gaming search engines; it is about building the fastest, most authoritative, and most useful digital experience in your market. We combine hardcore technical optimizations (site speed, structured schema, crawl budgeting) with deep search-intent keyword strategy and content architecture that wins top positions on Google.",
    image: img.seoservice,
    stats: [
      { value: "300%+", label: "Organic Traffic Growth" },
      { value: "<1.2s", label: "Core Web Vitals LCP" },
      { value: "Top 3", label: "Rankings for Target Terms" },
      { value: "100%", label: "White-Hat Practices" },
    ],
    highlights: [
      "Technical Core Web Vitals & Site Speed Optimization",
      "Semantic Topic Clusters & Keyword Intent Mapping",
      "Structured Schema Data (JSON-LD) Implementation",
      "Transparent Monthly Ranking & Revenue Attribution Reports",
    ],
    features: [
      {
        title: "Technical SEO & Speed Optimization",
        desc: "Fix crawl errors, duplicate URLs, canonical tags, sitemaps, and optimize JavaScript rendering to score 90+ on Google PageSpeed.",
      },
      {
        title: "Keyword & Search Intent Mapping",
        desc: "Target high-converting commercial keywords your prospective buyers are searching for, mapping them directly to dedicated landing pages.",
      },
      {
        title: "Content & Topic Authority",
        desc: "Plan and structure topic clusters that demonstrate deep Expertise, Experience, Authoritativeness, and Trustworthiness (E-E-A-T).",
      },
      {
        title: "Local & National Search Visibility",
        desc: "Dominate local map packs or national search results with optimized Google Business profiles, citation consistency, and reviews.",
      },
    ],
    deliverables: [
      "Comprehensive 360-degree technical SEO audit report",
      "Targeted keyword matrix mapped by search volume & buyer intent",
      "On-page optimization across metadata, headers, and internal links",
      "Structured data (Schema.org) code snippets for rich search snippets",
      "Monthly KPI performance, keyword ranking, and traffic dashboards",
    ],
    technologies: [
      { name: "Next JS (SSR)", icon: "/icons/nextjs.svg", category: "SEO Framework" },
      { name: "Html 5", icon: "/icons/html5.svg", category: "Semantic Markup" },
      { name: "Analytics", icon: "/icons/clerk.svg", category: "Telemetry" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Data Storage" },
    ],
    process: [
      {
        step: "01",
        title: "Technical Audit & Competitor Benchmark",
        desc: "Scanning your site architecture, indexing status, mobile responsiveness, and ranking gaps versus competitors.",
      },
      {
        step: "02",
        title: "Search Intent & Keyword Strategy",
        desc: "Identifying the precise keywords and long-tail phrases that drive qualified buyers rather than vanity traffic.",
      },
      {
        step: "03",
        title: "On-Page & Technical Remediation",
        desc: "Implementing semantic HTML, structured JSON-LD schema, blazing fast page speed, and optimized metadata.",
      },
      {
        step: "04",
        title: "Content Clustering & Authority Building",
        desc: "Crafting authoritative landing pages and supporting articles that address every stage of the customer buying cycle.",
      },
      {
        step: "05",
        title: "Rank Tracking, CRO & Ongoing Iteration",
        desc: "Monitoring Google Search Console metrics, keyword movements, and A/B testing calls-to-action to convert traffic into leads.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to see tangible results from SEO?",
        a: "Technical fixes and indexing improvements often show ranking lifts within 4 to 8 weeks. For competitive commercial keywords, compounding organic traffic and sustained top-tier rankings typically take 3 to 6 months of consistent optimization.",
      },
      {
        q: "Why is technical SEO crucial for modern JavaScript websites (Next.js / React)?",
        a: "Search engine bots can struggle with client-side JavaScript rendering. We implement Server-Side Rendering (SSR) or Static Site Generation (SSG) in Next.js, ensuring search bots see fully rendered HTML instantly with zero crawl delay.",
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a: "No ethical agency can guarantee a #1 ranking because Google's algorithm evaluates hundreds of dynamic variables. However, we guarantee strict adherence to Google's search guidelines and have a proven track record of securing page-one rankings for high-intent business terms.",
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  if (!slug) return null;
  return SERVICES_DATA.find((s) => s.slug === slug.toLowerCase().trim()) || null;
}

export function getAllServices() {
  return SERVICES_DATA;
}

