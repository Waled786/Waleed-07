import {
  Code2,
  Server,
  Cloud,
  Database,
  GitBranch,
  Cpu,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const PROFILE = {
  name: 'Aarav Mehta',
  title: 'Senior Software Engineer',
  tagline: 'I design and build resilient web products where clean architecture meets quiet, deliberate craft.',
  location: 'Bengaluru, India',
  email: 'hello@aaravmehta.dev',
  github: 'https://github.com/aaravmehta',
  linkedin: 'https://linkedin.com/in/aaravmehta',
  resumeUrl: '#',
  available: true,
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT_JOURNEY = [
  {
    year: '2015',
    title: 'First lines of code',
    text: 'Started building small web apps while studying computer science, falling for the craft of turning ideas into interfaces.',
  },
  {
    year: '2018',
    title: 'Engineering in production',
    text: 'Shipped my first real product to tens of thousands of users — and learned that performance is a feature, not an afterthought.',
  },
  {
    year: '2021',
    title: 'Leading systems',
    text: 'Began owning platform architecture, mentoring engineers, and turning fragile codebases into systems that teams trust.',
  },
  {
    year: 'Now',
    title: 'Senior engineering',
    text: 'I build products end to end — from data model to pixel — with an obsession for detail and a bias toward simplicity.',
  },
];

export const ABOUT_VALUES = [
  {
    title: 'Clarity over cleverness',
    text: 'Code is read far more than it is written. I optimize for the next engineer, not for showing off.',
  },
  {
    title: 'Measure, then decide',
    text: 'Every architectural tradeoff should be grounded in data, benchmarks, and real user behavior.',
  },
  {
    title: 'Ship small, ship often',
    text: 'Incremental, reversible changes beat heroic launches. Momentum compounds; big bangs implode.',
  },
];

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  blurb: string;
  skills: { name: string; level: number }[];
};

export const SKILLS: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Code2,
    blurb: 'Interfaces that feel instant and considered.',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Animation & Motion', level: 85 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    blurb: 'APIs designed for clarity and longevity.',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Go', level: 80 },
      { name: 'GraphQL', level: 84 },
      { name: 'REST design', level: 92 },
    ],
  },
  {
    name: 'Cloud',
    icon: Cloud,
    blurb: 'Infrastructure that scales without drama.',
    skills: [
      { name: 'AWS', level: 86 },
      { name: 'Cloudflare', level: 82 },
      { name: 'Serverless', level: 84 },
      { name: 'Terraform', level: 78 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    blurb: 'Models that survive real-world load.',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis', level: 82 },
      { name: 'Supabase', level: 88 },
      { name: 'Indexing & tuning', level: 85 },
    ],
  },
  {
    name: 'DevOps',
    icon: GitBranch,
    blurb: 'Pipelines teams actually enjoy using.',
    skills: [
      { name: 'CI/CD', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'Observability', level: 80 },
      { name: 'IaC', level: 76 },
    ],
  },
  {
    name: 'AI / ML',
    icon: Cpu,
    blurb: 'Practical intelligence, woven in carefully.',
    skills: [
      { name: 'LLM integration', level: 86 },
      { name: 'RAG pipelines', level: 82 },
      { name: 'Vector search', level: 80 },
      { name: 'Prompt design', level: 88 },
    ],
  },
  {
    name: 'Tools',
    icon: Wrench,
    blurb: 'The kit I reach for daily.',
    skills: [
      { name: 'Vite / Turbopack', level: 90 },
      { name: 'Vitest / Playwright', level: 84 },
      { name: 'Figma', level: 78 },
      { name: 'Linear / GitHub', level: 92 },
    ],
  },
];

export const EXPERIENCE = [
  {
    company: 'Northwind Labs',
    role: 'Staff Software Engineer',
    duration: '2023 — Present',
    location: 'Bengaluru',
    summary:
      'Lead the platform group building developer-facing infrastructure used by 40+ internal teams.',
    points: [
      'Re-architected the feature-flag system, cutting release incidents by 63%.',
      'Drove adoption of edge rendering, dropping p95 latency from 420ms to 110ms.',
      'Mentor a group of 6 engineers; own the front-end platform roadmap.',
    ],
    tech: ['React', 'TypeScript', 'Go', 'AWS', 'Terraform', 'PostgreSQL'],
  },
  {
    company: 'Helio Software',
    role: 'Senior Software Engineer',
    duration: '2020 — 2023',
    location: 'Remote',
    summary:
      'Built the customer-facing analytics suite from prototype to a product serving 12k organizations.',
    points: [
      'Designed a streaming ingestion pipeline handling 2B events/day.',
      'Shipped a real-time dashboard library reused across three product lines.',
      'Reduced bundle size 38% through code-splitting and lazy charting.',
    ],
    tech: ['Next.js', 'Node.js', 'Kafka', 'Redis', 'ClickHouse'],
  },
  {
    company: 'Cobalt Studio',
    role: 'Software Engineer',
    duration: '2018 — 2020',
    location: 'Pune',
    summary:
      'Delivered marketing and commerce sites for global brands with a focus on performance.',
    points: [
      'Built a reusable component library adopted across 9 client projects.',
      'Achieved 100 Lighthouse scores on 14 production launches.',
      'Introduced visual regression testing into the agency workflow.',
    ],
    tech: ['React', 'Gatsby', 'GraphQL', 'Stripe', 'Vercel'],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Lumen Analytics',
    description:
      'A privacy-first product analytics platform with sub-second dashboards, streaming ingestion, and a composable charting SDK reused across three product lines.',
    image:
      'https://images.pexels.com/photos/7668073/pexels-photo-7668073.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tech: ['Next.js', 'TypeScript', 'ClickHouse', 'Kafka', 'Redis'],
    github: 'https://github.com/aaravmehta/lumen',
    live: 'https://lumen.example.com',
    accent: 'from-blue-500/20 to-cyan-400/20',
  },
  {
    title: 'Forge CLI',
    description:
      'A developer tooling suite that scaffolds, tests, and deploys full-stack apps in seconds — with opinionated defaults, zero-config CI, and live preview environments.',
    image:
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tech: ['Go', 'Terraform', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/aaravmehta/forge',
    live: 'https://forge.example.com',
    accent: 'from-cyan-400/20 to-blue-500/20',
  },
  {
    title: 'Atlas Edge',
    description:
      'An edge-rendered commerce framework reaching 100 Lighthouse scores in production, with incremental static regeneration and a headless checkout flow.',
    image:
      'https://images.pexels.com/photos/5905789/pexels-photo-5905789.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tech: ['Next.js', 'Cloudflare', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/aaravmehta/atlas',
    live: 'https://atlas.example.com',
    accent: 'from-blue-500/20 to-cyan-400/20',
  },
  {
    title: 'Sage Docs',
    description:
      'An AI-assisted documentation engine that indexes codebases, answers natural-language queries, and keeps docs in sync with source — built around a retrieval pipeline.',
    image:
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tech: ['Python', 'pgvector', 'LangChain', 'FastAPI'],
    github: 'https://github.com/aaravmehta/sage',
    live: 'https://sage.example.com',
    accent: 'from-cyan-400/20 to-blue-500/20',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Planning',
    text: 'I start with the problem, not the stack. Constraints, users, and success metrics come first — every later decision refers back to them.',
  },
  {
    step: '02',
    title: 'Architecture',
    text: 'Sketching data flow, boundaries, and failure modes before any code. The cheapest bug is the one designed out on a whiteboard.',
  },
  {
    step: '03',
    title: 'Development',
    text: 'Small, reversible commits behind feature flags. Tests travel with the code; reviews happen early, not at the finish line.',
  },
  {
    step: '04',
    title: 'Testing',
    text: 'Unit, integration, and visual regression layered together. I trust the suite enough to deploy on a Friday and sleep well.',
  },
  {
    step: '05',
    title: 'Deployment',
    text: 'Progressive rollouts with instant rollback. Infrastructure as code, reviewed like application code, shipped through the same pipeline.',
  },
  {
    step: '06',
    title: 'Monitoring',
    text: 'Dashboards, alerting, and tracing wired in before launch. Production behavior is the real test suite — I read it constantly.',
  },
];

export const ACHIEVEMENTS = [
  { value: 9, suffix: '+', label: 'Years engineering' },
  { value: 70, suffix: '+', label: 'Projects shipped' },
  { value: 24, suffix: '', label: 'Clients & teams' },
  { value: 18, suffix: '', label: 'Technologies' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Aarav operates a level above the room. He turned a fragile prototype into a platform three teams now build on — and made it look effortless.',
    name: 'Priya Nair',
    role: 'VP Engineering, Northwind Labs',
    initials: 'PN',
  },
  {
    quote:
      'The kind of engineer who quietly raises the standard of everyone around them. Our dashboards finally feel like a product, not a prototype.',
    name: 'Marcus Lee',
    role: 'Product Lead, Helio Software',
    initials: 'ML',
  },
  {
    quote:
      'Rare combination of deep technical instinct and genuine design taste. Every launch he touched shipped on time and scored flawlessly.',
    name: 'Sofia Alvarez',
    role: 'Founder, Cobalt Studio',
    initials: 'SA',
  },
  {
    quote:
      'He thinks in systems but cares about pixels. Working with Aarav is what senior engineering should feel like — calm, precise, dependable.',
    name: 'David Okafor',
    role: 'CTO, Lumen',
    initials: 'DO',
  },
];
