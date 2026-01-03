import type {
  ApproachPhase,
  BlogPostMeta,
  CaseStudy,
  Logo,
  NavLink,
  Service,
  Stat,
  Testimonial,
  ValuePillar,
} from "./types";

export const siteConfig = {
  name: "Apex Nova Labs Sri Lanka",
  shortDescription:
    "Colombo-based product studio crafting resilient digital experiences for Sri Lankan brands.",
  description:
    "Apex Nova Labs Sri Lanka is a Colombo product consultancy delivering reliable engineering, human-centred design, and measurable growth for organisations across the island and the wider South Asian region.",
  contactEmail: "hello@apexnovalabs.lk",
  contactPhone: "+94 11 458 7780",
  headquarters: "Colombo 03, Sri Lanka",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/apexnovalabslk" },
    { label: "GitHub", href: "https://github.com/apexnovalabslk" },
    { label: "Dribbble", href: "https://dribbble.com/apexnovalabslk" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Reliability",
    headline: "Trust the team that ships on schedule.",
    description:
      "We run battle-tested delivery playbooks, communicate in the open, and protect your roadmap with disciplined engineering practices.",
  },
  {
    title: "Craft",
    headline: "Design with clarity, build with precision.",
    description:
      "From system architecture to interface details, every decision is intentional. We measure twice, build once, and leave teams with maintainable foundations.",
  },
  {
    title: "Results",
    headline: "Progress that moves business metrics.",
    description:
      "We anchor every engagement to measurable outcomes that matter in Sri Lanka - launch velocity, customer activation, retention, or revenue. No vanity work, just impact.",
  },
];

export const services: Service[] = [
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    tagline: "Native-quality experiences from a single codebase.",
    description:
      "We craft mobile applications that feel perfectly native on iOS and Android while sharing a maintainable foundation. From digital banking to last-mile delivery in Sri Lanka, rapid iteration, consistent UI, and reliable releases are built in from the start.",
    painPoints: [
      "Maintaining separate iOS and Android codebases is slowing releases.",
      "User experience feels inconsistent across devices and screen sizes.",
      "Store submissions and QA processes are fragile or manual.",
    ],
    outcomes: [
      "Unified design language that matches your brand on every platform.",
      "Automated build and release pipelines that keep shipping predictable.",
      "Insight into engagement through analytics, crash reporting, and user feedback loops.",
    ],
    deliverables: [
      "Product brief, user flows, and UI kit",
      "Flutter or React Native codebase with modular architecture",
      "App Store/Play Console release pipelines with automated QA",
      "Analytics, crash reporting, and performance dashboards",
    ],
    stack: ["Flutter", "React Native", "Expo", "Firebase", "Supabase"],
    metrics: [
      { label: "Release cadence", value: "Bi-weekly" },
      { label: "Crash-free sessions", value: "> 99.5%" },
    ],
    faqs: [
      {
        question: "Do you work with existing mobile teams?",
        answer:
          "Yes. We embed alongside your product and engineering leads, bringing pairing, documentation, and support so hand-off is seamless.",
      },
      {
        question: "Can you help ship V1 apps quickly?",
        answer:
          "We regularly guide teams from idea to app store launch. Discovery, design, engineering, and launch operations are all included in our playbook.",
      },
    ],
  },
  {
    slug: "websites",
    name: "Websites",
    tagline: "High-performing websites that convert and scale.",
    description:
      "Marketing and product websites built with modern tooling, Sinhala and Tamil localisation, and content models your Sri Lankan teams can actually maintain. We keep speed, accessibility, and SEO tuned for local and regional audiences.",
    painPoints: [
      "Existing site is slow, outdated, or difficult to update.",
      "Content editors rely on developers for every change.",
      "SEO and analytics visibility are limited or inaccurate.",
    ],
    outcomes: [
      "Sub-second performance budgets that keep bounce rates low.",
      "Reusable component library and CMS integration for rapid updates.",
      "Analytics, tracking, and experiment setup aligned with your KPIs.",
    ],
    deliverables: [
      "Information architecture and content strategy",
      "Design system tokens and themed components",
      "Next.js website with accessibility and SEO best practices",
      "Content editor documentation and training",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Contentlayer", "Sanity"],
    metrics: [
      { label: "Performance target", value: "< 1.5s LCP" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
    ],
    faqs: [
      {
        question: "Can you migrate content from our current CMS?",
        answer:
          "Absolutely. We plan the migration, build scripts when needed, and ensure redirects maintain your existing search equity.",
      },
      {
        question: "Do you provide ongoing updates?",
        answer:
          "We can stay on retainer for growth experiments or train your internal team to manage the new stack independently.",
      },
    ],
  },
  {
    slug: "erp-systems",
    name: "ERP Systems",
    tagline: "Connected ERP platforms tailored to your operations.",
    description:
      "We implement or extend ERP solutions that match the way Sri Lankan enterprises actually work, integrating finance, inventory, HR, and reporting into a single source of truth that respects local compliance.",
    painPoints: [
      "Manual spreadsheets or legacy tools create data silos.",
      "Teams lack real-time visibility into operations and inventory.",
      "Off-the-shelf ERP modules don�t match custom workflows.",
    ],
    outcomes: [
      "Unified data model that keeps every department aligned.",
      "Role-based dashboards and reports that surface the right insights.",
      "Automations that remove repetitive manual steps from daily operations.",
    ],
    deliverables: [
      "Process mapping and requirement gathering",
      "System architecture and integration plan",
      "Custom modules or extensions built around your workflows",
      "User training, documentation, and support playbooks",
    ],
    stack: ["Node.js", "NestJS", "PostgreSQL", "Supabase", "AWS"],
    metrics: [
      { label: "Data accuracy", value: "> 99%" },
      { label: "Manual tasks reduced", value: "-40%" },
    ],
    faqs: [
      {
        question: "Do you integrate with existing ERP platforms?",
        answer:
          "Yes. We extend systems like Odoo, SAP Business One, or Microsoft Dynamics, and build custom middleware when necessary.",
      },
      {
        question: "Can you help transition from spreadsheets?",
        answer:
          "We lead migrations end-to-end: data audit, cleaning, import scripts, and change management for your team.",
      },
    ],
  },
  {
    slug: "pos-systems",
    name: "POS Systems",
    tagline: "Reliable point-of-sale experiences for retail and hospitality.",
    description:
      "From Colombo boutiques to resort hospitality, we deliver POS solutions that stay online, sync inventory, and make training staff painless for multilingual teams.",
    painPoints: [
      "Current POS is unreliable or lacks offline support.",
      "Inventory and sales data aren�t synced with back-office tools.",
      "Staff onboarding takes too long due to confusing interfaces.",
    ],
    outcomes: [
      "Intuitive front-of-house flows that keep queues moving.",
      "Real-time reporting and inventory sync across channels.",
      "Hardware integrations (printers, scanners, cash drawers) tested and documented.",
    ],
    deliverables: [
      "Customer journey mapping and interface design",
      "POS application (web, desktop, or tablet) with offline-first architecture",
      "Payment provider integrations (PayHere, WebXPay, LankaQR, etc.)",
      "Roll-out playbook with staff training materials",
    ],
    stack: ["React", "Electron", "Flutter", "SQLite", "Stripe Terminal"],
    metrics: [
      { label: "Uptime", value: "> 99.9%" },
      { label: "Checkout speed", value: "< 2 min" },
    ],
    faqs: [
      {
        question: "Do you supply hardware?",
        answer:
          "We help you choose certified hardware and work with your procurement team or partners to source it.",
      },
      {
        question: "Can the POS work offline?",
        answer:
          "Yes. We design offline-first architectures so sales continue and sync automatically when connectivity returns.",
      },
    ],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    tagline: "Software built around your unique workflows.",
    description:
      "When off-the-shelf tools won�t do, we partner with you to design and build bespoke platforms that slot directly into your operations.",
    painPoints: [
      "Generic tools create workarounds and technical debt.",
      "Growth is limited by manual processes or disconnected systems.",
      "Need a technical partner who can translate business goals into software.",
    ],
    outcomes: [
      "Product strategy that reflects the realities of your business.",
      "Modular architecture ready to evolve with new requirements.",
      "Enablement so your team can own the platform after launch.",
    ],
    deliverables: [
      "Discovery workshops and roadmap",
      "Full-stack application design and development",
      "Testing, documentation, and deployment playbooks",
      "Knowledge transfer and optional ongoing support",
    ],
    stack: ["TypeScript", ".NET", "Python", "PostgreSQL", "Azure"],
    metrics: [
      { label: "Time to launch", value: "12-16 weeks" },
      { label: "Adoption", value: "> 90%" },
    ],
    faqs: [
      {
        question: "Can you work with our internal developers?",
        answer:
          "Yes. We frequently co-create with in-house teams, pairing on architecture and establishing standards they can maintain.",
      },
      {
        question: "Do you handle post-launch support?",
        answer:
          "We can remain on retainer, or transition ownership with documentation, training, and support runbooks.",
      },
    ],
  },
];

export const approach: ApproachPhase[] = [
  {
    slug: "discovery",
    name: "Discovery",
    description:
      "We align on goals, collect user insights, and map the north star metrics for the engagement.",
    activities: [
      "Stakeholder interviews & context gathering",
      "User journey mapping",
      "Technical audits & architecture spikes",
    ],
    artifacts: [
      "Opportunity solution tree",
      "Experience principles & success metrics",
      "Execution roadmap",
    ],
  },
  {
    slug: "delivery",
    name: "Delivery",
    description:
      "A multidisciplinary pod executes in focused build cycles, shipping work that is tested, demoed, and production-ready.",
    activities: [
      "Design system build-out & component library",
      "Incremental feature development",
      "Automated testing & QA gates",
    ],
    artifacts: [
      "Accessible, responsive product increments",
      "Documentation & runbooks",
      "Analytics and experiment setup",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    description:
      "We monitor outcomes, run experiments, and enable your team to sustain velocity with confidence.",
    activities: [
      "Performance & reliability tuning",
      "Conversion optimization & experimentation",
      "Knowledge transfer & pairing",
    ],
    artifacts: [
      "Observability dashboards & reporting cadence",
      "Experiment backlogs & playbooks",
      "Enablement sessions & capability hand-off",
    ],
  },
];

export const caseStudies: CaseStudy[] = [];


export const testimonials: Testimonial[] = [
  {
    quote:
      "Apex Nova Labs Sri Lanka helped us relaunch mobile banking with zero downtime. Their team translated every regulatory constraint into clear technical decisions.",
    name: "Ruwani Perera",
    role: "Chief Digital Officer",
    company: "Ceylon Trust Bank",
  },
  {
    quote:
      "They modernised our island-wide retail operations in record time. Inventory sync, LankaQR payments, and analytics now run in a single pane of glass.",
    name: "Dilshan Jayawardena",
    role: "Head of Technology",
    company: "Serendib Retail Group",
  },
  {
    quote:
      "From the first discovery workshop, the team understood the nuances of delivering care in Sri Lanka. We now have a patient platform trusted by doctors and communities alike.",
    name: "Dr. Meera Fernando",
    role: "Program Director",
    company: "Lanka HealthNet",
  },
];

export const logoCloud: Logo[] = [
  { name: "Ceylon Trust Bank", svg: "" },
  { name: "Serendib Retail Group", svg: "" },
  { name: "Lanka HealthNet", svg: "" },
  { name: "TeaFlow Logistics", svg: "" },
  { name: "IslandPay", svg: "" },
  { name: "Dialog Insight", svg: "" },
];

export const heroStats: Stat[] = [
  {
    label: "Launches delivered",
    value: "64",
    detail: "Products and major releases launched with Sri Lankan teams since 2018.",
  },
  {
    label: "Average uplift",
    value: "28%",
    detail: "Median increase in key product metrics for local and regional rollouts.",
  },
  {
    label: "Client NPS",
    value: "73",
    detail: "Client satisfaction measured across engagements in Sri Lanka over the last 18 months.",
  },
];

export const blogHighlights: BlogPostMeta[] = [
  {
    slug: "design-systems-that-scale",
    title: "Design systems for multilingual Sri Lankan products",
    summary:
      "Lessons from building Sinhala, Tamil, and English component libraries that engineering teams actually adopt.",
    publishedAt: "2025-06-12",
    readingTime: "7 min read",
    tags: ["Design systems", "Sri Lanka"],
  },
  {
    slug: "shipping-edge-ready-experiences",
    title: "Scaling payments with LankaQR and beyond",
    summary:
      "How we designed resilient payment flows that meet Central Bank guidance while keeping checkout fast.",
    publishedAt: "2025-04-08",
    readingTime: "9 min read",
    tags: ["Fintech", "Engineering"],
  },
];


