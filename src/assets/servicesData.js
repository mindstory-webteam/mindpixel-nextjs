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
      "We build mobile apps that respond fast and feel good in the hand. Maybe you want a native iPhone app in Swift, an Android app in Kotlin, or one codebase that runs on both through React Native or Flutter. We work in all four. Whichever route you take, the app stays stable, runs smoothly, keeps working offline and connects to your APIs without drama. If you're looking for mobile application development in Thrissur, our team is based right here in Kuriachira.",
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
    capabilitiesHeading: "Mobile Capabilities & Engineering",
    capabilitiesDesc:
      "A good app feels right the second someone touches it. We take care of the gestures and animations people see, and the background services they never notice.",
    features: [
      {
        title: "Native & Hybrid Mastery",
        desc: "We work with React Native, Flutter, Swift and Kotlin. Which one we suggest depends on your deadline, how fast the app needs to feel, and what you're able to spend.",
      },
      {
        title: "Offline-First Sync",
        desc: "Data is saved on the phone first, using SQLite, Realm or WatermelonDB. So when someone's signal drops on a bus or in a basement, they don't get stuck staring at a loading spinner.",
      },
      {
        title: "Hardware & Sensor Integration",
        desc: "Camera, Bluetooth BLE, GPS, NFC, haptics, biometrics. If the phone has it, we can usually wire it into your app.",
      },
      {
        title: "Store Publishing & ASO",
        desc: "Apple and Google both have strict review rules. We guide you through them, fine-tune your listing text so people can find the app, and handle the release.",
      },
    ],
    deliverablesHeading: "What You Receive (Tangible Deliverables)",
    deliverables: [
      "Ready-to-ship iOS and Android builds (IPA and AAB files)",
      "Complete source code with architecture notes",
      "Automated tests: unit, end-to-end and UI",
      "Approved App Store and Google Play listings",
      "Live analytics and crash reports",
    ],
    technologiesHeading: "Tools & Stacks Tailored for Mobile",
    technologiesDesc:
      "Battle-tested mobile frameworks, testing harnesses, and native SDKs that guarantee store approval and smooth runtimes.",
    technologies: [
      { name: "React Native", icon: "/icons/react.svg", category: "Framework" },
      { name: "Next JS / Node", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "TypeScript", icon: "/icons/typescript.svg", category: "Language" },
      { name: "Firebase", icon: "/icons/firebase.svg", category: "Cloud & Auth" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Docker", icon: "/icons/docker.svg", category: "DevOps" },
    ],
    processHeading: "How We Build Your Mobile App",
    processDesc:
      "We keep the process clear and steady, so you see working builds early and the store review doesn't catch us off guard.",
    process: [
      {
        step: "01",
        title: "Discovery & Wireframes",
        desc: "Before any code, we map out what users will do, where things could go wrong, which features make the cut, and how the tech fits together.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        desc: "We design the screens in Figma, with real touch patterns and native gestures, so you can tap through it before we build it.",
      },
      {
        step: "03",
        title: "Two-Week Sprints",
        desc: "Frontend and backend get built in two-week sprints. You receive regular TestFlight and internal beta builds along the way.",
      },
      {
        step: "04",
        title: "Testing",
        desc: "We test on different screen sizes, OS versions and network speeds, including the slow ones.",
      },
      {
        step: "05",
        title: "Submission & Launch",
        desc: "We submit to both stores, fix whatever the reviewers flag, and keep an eye on live data after release.",
      },
    ],
    commitmentsHeading: "Our Mobile Engineering Commitment",
    commitmentsDesc:
      "We build apps to handle millions of sessions without slowing down or running into store trouble. Whether the project is a small startup idea or a large product, our approach to mobile application development in Thrissur stays the same: build it to last.",
    commitments: [
      {
        num: "01",
        title: "We Stay Until You're Approved",
        desc: "We work with your team through every round of Apple and Google review, until the app is live.",
      },
      {
        num: "02",
        title: "Smooth at 60fps",
        desc: "Gestures feel quick and natural, with no dropped frames on iOS or Android.",
      },
      {
        num: "03",
        title: "You Own Everything",
        desc: "The code, repositories, assets and build pipelines are yours. No lock-in.",
      },
      {
        num: "04",
        title: "Watching the Launch Window",
        desc: "The first days after launch matter most. We monitor crash data and fix problems quickly as new users come in.",
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
      "Building a SaaS product takes careful planning up front. We design platforms that start small, maybe 100 pilot users, and keep working properly when you reach 100,000 paying seats. That means keeping each customer's data separate, controlling who can see what, setting up Stripe billing, creating workspaces automatically, and building a backend that can be split into services when it needs to. If you're searching for SaaS products in Thrissur, we're a local team that turns an idea into something that earns recurring revenue.",
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
    capabilitiesHeading: "Cloud-Native SaaS Engineering",
    capabilitiesDesc:
      "Strong multi-tenancy, fast event handling for many users at once, and an easy way to charge for your product. That's the foundation of a subscription business.",
    features: [
      {
        title: "Multi-Tenant Architecture",
        desc: "Each customer gets a private workspace. We separate them using Postgres Row Level Security or dedicated schemas, whichever fits your compliance needs, so larger clients can sign off on where their data lives.",
      },
      {
        title: "Flexible Subscription Billing",
        desc: "Seamless integration with Stripe, LemonSqueezy, or Paddle for recurring subscriptions, seat-based pricing, usage metering, and tax compliance.",
      },
      {
        title: "Real-Time Collaboration",
        desc: "When several people work in the same place, everyone sees changes as they happen. We do this with WebSockets, Server-Sent Events and operational transformation.",
      },
      {
        title: "Developer APIs & Webhooks",
        desc: "Want your own customers to build on top of your product? We set up public REST or GraphQL APIs, write the documentation, and add outbound webhooks.",
      },
    ],
    deliverablesHeading: "What You Receive (Tangible Deliverables)",
    deliverables: [
      "Complete SaaS web application with authentication & tenant spaces",
      "Admin superuser dashboard for user management & MRR analytics",
      "Subscription billing & invoicing integration",
      "Infrastructure as Code (Terraform / Docker) scripts",
      "Public API documentation and webhooks",
    ],
    technologiesHeading: "Tools & Stacks Tailored for SaaS",
    technologiesDesc:
      "High-throughput databases, caching clusters, and modern frontend frameworks built for fast cloud deployment.",
    technologies: [
      { name: "Next JS", icon: "/icons/nextjs.svg", category: "Frontend" },
      { name: "Node JS", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Redis", icon: "/icons/redis.svg", category: "Caching & Queues" },
      { name: "Docker", icon: "/icons/docker.svg", category: "Containers" },
      { name: "Azure / AWS", icon: "/icons/azure.svg", category: "Cloud" },
    ],
    processHeading: "How We Engineer Your SaaS Platform",
    processDesc:
      "We work in short architecture-focused sprints. The aim is to prove the multi-tenant setup early, so your first customers get value quickly.",
    process: [
      {
        step: "01",
        title: "Architecture & Data Modeling",
        desc: "We sketch out tenant schemas, data access rules, pricing tiers, and security basics.",
      },
      {
        step: "02",
        title: "Workflow & Interface Design",
        desc: "We design dashboards that load fast and feel comfortable on a desktop, with navigation people can figure out without a manual.",
      },
      {
        step: "03",
        title: "Platform Development",
        desc: "Login, multi-tenant middleware, the core features, and billing all get built here.",
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
    commitmentsHeading: "Our SaaS Delivery Commitment",
    commitmentsDesc:
      "Strict data separation, steady uptime, and billing that doesn't break. Those are the three things a subscription business can't afford to get wrong, and they shape how we build SaaS products in Thrissur and for clients further afield.",
    commitments: [
      {
        num: "01",
        title: "99.99% Uptime Architecture",
        desc: "Auto-scaling, disaster recovery and automatic regional failover are part of the setup from the start.",
      },
      {
        num: "02",
        title: "Strict Tenant Isolation",
        desc: "We use tested row-level policies, so one customer's data stays out of another's reach.",
      },
      {
        num: "03",
        title: "Production Billing Reliability",
        desc: "PCI-compliant subscription flows, with webhook retries, automatic prorations, and no invoices stuck in limbo.",
      },
      {
        num: "04",
        title: "Extensible API Foundation",
        desc: "Clean REST or GraphQL interfaces, ready for integrations, documentation and a wider ecosystem later.",
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
      "Ready-made software tends to squeeze your business into a shape that doesn't quite fit. We build the thing your team needs instead: internal portals, automated workflows, calculation tools for the odd jobs standard packages can't handle. As a custom software company in Thrissur, we start by learning how your operation runs, then build software that removes the slow, repetitive parts and gives your team a real edge.",
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
    capabilitiesHeading: "Custom Software Engineering",
    capabilitiesDesc:
      "Business logic written for your company, portals made for each department, and connectors that link your systems. Nothing starts from a template.",
    features: [
      {
        title: "Bespoke Workflow Engines",
        desc: "We take your real procedures, including approval chains and document handling, and turn them into clear digital steps.",
      },
      {
        title: "Legacy Modernization",
        desc: "Still running on a desktop program or a giant Excel file? We move it to a fast, cloud-connected web app, and your data stays safe through the switch.",
      },
      {
        title: "Deep API Integrations",
        desc: "Your CRM, payment gateway, logistics partner and internal tools probably don't talk to each other. We bring them together in one place.",
      },
      {
        title: "Enterprise Grade Security",
        desc: "End-to-end encryption, strict access by role, complete audit trails and automatic backups.",
      },
    ],
    deliverablesHeading: "What You Receive (Tangible Deliverables)",
    deliverables: [
      "Custom application tailored to exact business requirements",
      "Clean, modular codebase with comprehensive documentation",
      "Database schema and data migration scripts",
      "User guides and administrative training walkthroughs",
      "Post-launch SLA and maintenance package",
    ],
    technologiesHeading: "Tools & Stacks Tailored for Custom Engineering",
    technologiesDesc:
      "Versatile languages and performant backend engines chosen to integrate cleanly with your existing technical environment.",
    technologies: [
      { name: "React JS", icon: "/icons/react.svg", category: "Frontend" },
      { name: "Node JS", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "Python", icon: "/icons/python.svg", category: "Automation" },
      { name: "MySQL", icon: "/icons/mysql.svg", category: "Database" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Nginx", icon: "/icons/nginx.svg", category: "Infrastructure" },
    ],
    processHeading: "How We Deliver Custom Software",
    processDesc:
      "We study how your business runs before we build anything, then release in phases so your daily work doesn't stop.",
    process: [
      {
        step: "01",
        title: "Operations Audit & Requirements",
        desc: "We sit with your team and watch the work happen. We look for slow steps, places where people type the same data twice, and what needs to connect to what.",
      },
      {
        step: "02",
        title: "Blueprint & Prototype",
        desc: "Data models, wireframes and architecture diagrams come next. Your stakeholders review them before we build.",
      },
      {
        step: "03",
        title: "Iterative Sprints",
        desc: "We build one module at a time, so each department can try it out and tell us what's off while it's still easy to change.",
      },
      {
        step: "04",
        title: "Data Migration & Dry Run",
        desc: "We import your historical records, clean them up, and run the old and new systems side by side to check the numbers match.",
      },
      {
        step: "05",
        title: "Training & Cutover",
        desc: "We train your staff, switch over, and stay close with extra support during the first weeks.",
      },
    ],
    commitmentsHeading: "Our Custom Software Commitment",
    commitmentsDesc:
      "Software made for your operations, with no per-user fees and full ownership of the IP. That's the standard we hold ourselves to as a custom software company in Thrissur, whether the client is a small firm or a large team.",
    commitments: [
      {
        num: "01",
        title: "Fits How You Work",
        desc: "We build around your actual business logic, not a template or a workflow somebody else invented.",
      },
      {
        num: "02",
        title: "Works With What You Have",
        desc: "Clean connections to your ERP, databases, accounting software and CRM.",
      },
      {
        num: "03",
        title: "No Recurring Seat Fees",
        desc: "You own the platform outright. No monthly charge for each person who logs in.",
      },
      {
        num: "04",
        title: "Grows With You",
        desc: "The modular codebase can handle more staff, more transactions and more demands over the years.",
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
      "Large organizations deal with a lot at once: strict governance, rules that differ by region, old systems that still have to work, and thousands of people using the software at the same time. We build enterprise systems to carry that weight, and we make sure the people running the company can actually see what's going on through dashboards built for them. If you're after an enterprise software company in Thrissur that understands this kind of pressure, that's the work we do.",
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
    capabilitiesHeading: "Enterprise Architecture & Scale",
    capabilitiesDesc:
      "Hardened security, single sign-on across your tools, and transaction pipelines that can take heavy traffic from large teams.",
    features: [
      {
        title: "Enterprise Security & SSO",
        desc: "We connect to Microsoft Entra ID, Okta, Google Workspace and SAML 2.0, with strict multi-factor authentication rules.",
      },
      {
        title: "Departmental Sync",
        desc: "Sales, Inventory, Finance and Operations stop working in separate corners. Shared event streams and automated approvals keep them in step.",
      },
      {
        title: "Real-Time Telemetry & BI",
        desc: "Transform terabytes of transactional data into instantaneous business intelligence dashboards and automated management reports.",
      },
      {
        title: "High Availability",
        desc: "Kubernetes clusters, replicated databases and redundant cloud setups, so a single failure doesn't take everything down.",
      },
    ],
    deliverablesHeading: "What You Receive (Tangible Deliverables)",
    deliverables: [
      "Enterprise software application with SSO/SAML integration",
      "Centralized administrative control panel with audit logging",
      "Automated ETL pipelines and analytics dashboards",
      "Security audit compliance documentation",
      "Enterprise SLA and 24/7 incident response agreement",
    ],
    technologiesHeading: "Tools & Stacks Tailored for Enterprise Systems",
    technologiesDesc:
      "Hardened backend frameworks, distributed caching, and container orchestration designed for high reliability.",
    technologies: [
      { name: "Next JS", icon: "/icons/nextjs.svg", category: "Frontend" },
      { name: "Node JS", icon: "/icons/nodejs.svg", category: "Backend" },
      { name: "Python / Django", icon: "/icons/django.svg", category: "Backend" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
      { name: "Redis", icon: "/icons/redis.svg", category: "Cache" },
      { name: "Docker / Azure", icon: "/icons/docker.svg", category: "Infrastructure" },
    ],
    processHeading: "How We Deliver Enterprise Solutions",
    processDesc:
      "Compliance comes first, threats get modeled early, and migrations happen in stages so the business keeps running.",
    process: [
      {
        step: "01",
        title: "Discovery & Compliance Audit",
        desc: "We review your security needs, regulatory duties, data separation requirements and what your stakeholders want.",
      },
      {
        step: "02",
        title: "Architecture & Threat Modeling",
        desc: "We draft a microservices or modular monolith design, along with a solid disaster recovery plan.",
      },
      {
        step: "03",
        title: "Phased Delivery",
        desc: "Features roll out in stages, so ongoing operations aren't interrupted.",
      },
      {
        step: "04",
        title: "Penetration Testing & Load Simulation",
        desc: "Simulating peak concurrent loads and conducting vulnerability scans to guarantee system hardening.",
      },
      {
        step: "05",
        title: "Rollout & Hypercare",
        desc: "We coordinate the multi-tier deployment and the SSO cutover, with engineers available around the clock.",
      },
    ],
    commitmentsHeading: "Our Enterprise Engineering Commitment",
    commitmentsDesc:
      "Reliability at enterprise level, strict security rules and response times written into an SLA. A good enterprise software company in Thrissur should be able to promise all three and then stick to them.",
    commitments: [
      {
        num: "01",
        title: "SOC 2 & SSO Compliance",
        desc: "Enterprise authentication with SAML 2.0 / OIDC Single Sign-On, granular role-based access, and immutable audit logs.",
      },
      {
        num: "02",
        title: "Sub-Second Query Latency",
        desc: "Optimized database indexing, replica pooling, and caching layers engineered for heavy concurrent transactions.",
      },
      {
        num: "03",
        title: "Data Integrity & Disaster Recovery",
        desc: "Automated continuous backups, point-in-time recovery, and multi-region failover protocols ensuring zero data loss.",
      },
      {
        num: "04",
        title: "SLA-Backed 24/7 Response",
        desc: "Guaranteed incident response windows with senior engineers standing by for mission-critical operations.",
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
      "Design isn't just how something looks. It's how a product explains itself and nudges someone to sign up, buy or book. We start by getting inside your users' heads through research, journey mapping and wireframes, then build interfaces where complicated tasks stop feeling complicated. If you've been looking for UI UX design services in Kerala that care about results as much as visuals, this is where we come in.",
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
    capabilitiesHeading: "User Experience & Design Craft",
    capabilitiesDesc:
      "We take complicated product requirements and turn them into clear layouts, natural flows and components you can reuse.",
    features: [
      {
        title: "Research & Journey Mapping",
        desc: "We find the places where users give up and work out the shortest route from what they want to what your business needs them to do.",
      },
      {
        title: "High-Fidelity Interactive Prototypes",
        desc: "Before development begins, you click through a realistic version in Figma, with real data and small interactions in place.",
      },
      {
        title: "Complete Design Systems",
        desc: "Type scales, colors, responsive layouts and reusable components, all kept together so your brand looks the same everywhere.",
      },
      {
        title: "Accessibility (WCAG AA)",
        desc: "Good contrast, readable type and clear focus states, so people of all abilities can use what you build.",
      },
    ],
    deliverablesHeading: "What You Receive (Tangible Deliverables)",
    deliverables: [
      "Complete Figma project file with organized pages and layers",
      "Clickable interactive prototype ready for usability tests",
      "Design system with reusable component library and tokens",
      "Developer handoff documentation with spacing & animation specs",
      "Responsive artboards for mobile, tablet, and desktop views",
    ],
    technologiesHeading: "Tools & Stacks Tailored for UI/UX",
    technologiesDesc:
      "Modern industry-standard design tools, token generators, and prototyping software for fluid cross-functional handoff.",
    technologies: [
      { name: "Figma", icon: "/icons/figma.svg", category: "Design Tool" },
      { name: "Photoshop", icon: "/icons/photoshop.svg", category: "Graphics" },
      { name: "Illustrator", icon: "/icons/illustrator.svg", category: "Vectors" },
      { name: "Html / Css", icon: "/icons/html5.svg", category: "Prototyping" },
      { name: "Next JS", icon: "/icons/nextjs.svg", category: "Handoff" },
    ],
    processHeading: "How We Craft Your UI/UX",
    processDesc:
      "We move through research and prototyping in short cycles, and we check the results against real users completing real tasks.",
    process: [
      {
        step: "01",
        title: "User Research & Problem Definition",
        desc: "We study how users behave, how competitors do things and what your product is meant to achieve. That's how we spot where design can make the biggest difference.",
      },
      {
        step: "02",
        title: "Information Architecture & Wireframes",
        desc: "Sitemaps, navigation structure and rough layouts come first, so the flow makes sense before it looks good.",
      },
      {
        step: "03",
        title: "Visual Design & System Building",
        desc: "Your brand's personality shows up here, through mood boards, color tokens and a polished set of components.",
      },
      {
        step: "04",
        title: "Prototyping & User Testing",
        desc: "We build animated click-through prototypes and put them in front of real users to see if our assumptions hold.",
      },
      {
        step: "05",
        title: "Pixel-Perfect Developer Handoff",
        desc: "Annotating exact measurements, states, responsive rules, and exporting assets for the engineering team.",
      },
    ],
    commitmentsHeading: "Our UI/UX Design Commitment",
    commitmentsDesc:
      "Designs that respect how people feel, use what we know about conversion, and hand off cleanly to developers. We hold every project to that standard, and it's why teams searching for UI UX design services in Kerala come to us.",
    commitments: [
      {
        num: "01",
        title: "Pixel-Perfect Developer Handoff",
        desc: "Production-ready Figma files with auto-layout, design tokens and precise annotations, so what gets built matches what we designed.",
      },
      {
        num: "02",
        title: "WCAG AA Accessibility",
        desc: "We test contrast, touch target sizes and text legibility across devices, so the product works for everyone.",
      },
      {
        num: "03",
        title: "Usability-Validated Flows",
        desc: "We test interactive prototypes with real people before you spend money on engineering.",
      },
      {
        num: "04",
        title: "Scalable Design Systems",
        desc: "Reusable component libraries, tokens, and variants that keep your visual brand consistent and fast to update.",
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
      "SEO isn't about tricking search engines. It's about making your site the fastest, most useful and most trusted option in your market. We combine the technical side with a keyword strategy built around what people actually want when they search, plus a content structure that earns top spots on Google. If you need SEO services in Thrissur from a team that explains what it's doing and why, that's what we offer.",
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
    capabilitiesHeading: "Search Engine & Growth Strategy",
    capabilitiesDesc:
      "We repair Core Web Vitals, tidy up how search engines crawl your site, and group your content around buyer intent, so traffic keeps building month after month.",
    features: [
      {
        title: "Technical SEO & Speed",
        desc: "We fix crawl errors, duplicate URLs, canonical tags and sitemaps, and sort out JavaScript rendering, aiming for a 90+ score on Google PageSpeed.",
      },
      {
        title: "Keyword & Intent Mapping",
        desc: "We go after the commercial keywords your buyers really search for, and give each one its own landing page.",
      },
      {
        title: "Content & Topic Authority",
        desc: "We plan topic clusters that show real Expertise, Experience, Authoritativeness and Trustworthiness (E-E-A-T).",
      },
      {
        title: "Local & National Visibility",
        desc: "Whether you want to show up in local map results or compete nationally, we work on your Google Business profile, citation consistency and reviews.",
      },
    ],
    deliverablesHeading: "What You Receive (Tangible Deliverables)",
    deliverables: [
      "Comprehensive 360-degree technical SEO audit report",
      "Targeted keyword matrix mapped by search volume & buyer intent",
      "On-page optimization across metadata, headers, and internal links",
      "Structured data (Schema.org) code snippets for rich search snippets",
      "Monthly KPI performance, keyword ranking, and traffic dashboards",
    ],
    technologiesHeading: "Tools & Stacks Tailored for SEO",
    technologiesDesc:
      "Server-side rendering frameworks, structured markup validators, and search console analytics for ranking dominance.",
    technologies: [
      { name: "Next JS (SSR)", icon: "/icons/nextjs.svg", category: "SEO Framework" },
      { name: "Html 5", icon: "/icons/html5.svg", category: "Semantic Markup" },
      { name: "Analytics", icon: "/icons/clerk.svg", category: "Telemetry" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Data Storage" },
    ],
    processHeading: "How We Execute Your SEO Strategy",
    processDesc:
      "We start with the technical foundation, move into keyword expansion for high-intent searches, and keep refining using Search Console data.",
    process: [
      {
        step: "01",
        title: "Technical Audit & Competitor Benchmark",
        desc: "We scan your site structure, indexing status and mobile experience, and see where competitors are ahead of you.",
      },
      {
        step: "02",
        title: "Search Intent & Keyword Strategy",
        desc: "We look for the exact keywords and long-tail phrases that bring in qualified buyers, not just visitors who never convert.",
      },
      {
        step: "03",
        title: "On-Page & Technical Fixes",
        desc: "Clean semantic HTML, JSON-LD schema, fast page loads and well-written metadata all get done here.",
      },
      {
        step: "04",
        title: "Content Clusters & Authority Iteration",
        desc: "We write landing pages and supporting articles that speak to every stage of the buying journey.",
      },
      {
        step: "05",
        title: "Rank Tracking, CRO & Ongoing Tuning",
        desc: "We watch Search Console, track keyword movement and A/B test your calls-to-action so more of your traffic turns into leads.",
      },
    ],
    commitmentsHeading: "Our Organic Search Commitment",
    commitmentsDesc:
      "Honest reporting, ethical methods and rankings that last and bring in revenue. That's the standard behind every SEO services in Thrissur project we take on.",
    commitments: [
      {
        num: "01",
        title: "100% White-Hat Practices",
        desc: "We follow Google Search Essentials closely. No shortcuts, no black-hat risks.",
      },
      {
        num: "02",
        title: "Commercial Intent Targeting",
        desc: "We aim for searches that lead to sales, not big traffic figures that never turn into revenue.",
      },
      {
        num: "03",
        title: "Core Web Vitals Benchmarks",
        desc: "Technical speed tuning targeting sub-1.2s Largest Contentful Paint (LCP) and 90+ mobile PageSpeed scores.",
      },
      {
        num: "04",
        title: "Transparent Bi-Weekly Reports",
        desc: "Actionable Search Console dashboards tracking impression share, keyword rankings, crawl health, and conversions.",
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