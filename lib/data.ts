export const site = {
  name: "Skander Abid",
  role: "Software Engineer",
  location: "Tunis, Tunisia",
  email: "skanderabid53@gmail.com",
  github: "https://github.com/skander2905",
  linkedin: "https://www.linkedin.com/in/skander-abid-1a5997236",
  url: "https://skander-portfolio-henna.vercel.app/",
  description:
    "Software engineer focused on the frontend. I build product interfaces in React, Next.js, and TypeScript — UI architecture, component systems, and the small details that make products feel finished."
};

export const about = [
  "I'm a software engineer focused on the frontend. I work in React, Next.js, and TypeScript, building interfaces for products that need to be fast, predictable, and easy to evolve.",
  "I think about UI as a system — how components compose, where state lives, how data flows in, and how the whole thing degrades when something goes wrong. I'm comfortable across the stack and write Node and SQL when the work calls for it, but my best work happens close to the product surface.",
  "Right now I'm building PromoAI at Cognira, a retail-AI platform used by enterprise pricing and promotion teams."
];

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

const COGNIRA_URL = "https://www.cognira.com";

export const experience: Experience[] = [
  {
    company: "Cognira",
    companyUrl: COGNIRA_URL,
    role: "Software Engineer",
    period: "Sep 2024 — Present",
    location: "Tunis",
    summary:
      "Frontend-focused engineer on PromoAI, Cognira's retail-AI platform for promotion planning and forecasting, also contributing to the Automation team.",
    bullets: [
      "Develop and maintain the PromoAI web application used by enterprise retail teams, with React, Redux Toolkit, and TypeScript.",
      "Build complex, data-heavy interfaces and reusable components; improve state management and rendering performance, and modernise legacy code toward TypeScript.",
      "Contribute to the Automation team by writing Playwright end-to-end tests that run in CI, and work with backend, QA, and product teams from spec to release through code review."
    ],
    stack: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Material UI",
      "Vite",
      "Vitest",
      "Playwright",
      "GitHub Actions"
    ]
  },
  {
    company: "Cognira",
    companyUrl: COGNIRA_URL,
    role: "Software Engineer Intern",
    period: "Feb 2024 — May 2024",
    summary:
      "Owned an internal project-management tool for Cognira's teams, from design to release.",
    bullets: [
      "Designed and shipped an internal agile project-management platform covering sprint planning, discussion boards, and document sharing.",
      "Built the Next.js frontend, the Express/MongoDB service layer, and real-time team chat, owning the work end-to-end.",
      "Ran the project on a Scrum cadence with sprint planning, reviews, and retrospectives."
    ],
    stack: ["JavaScript", "Next.js", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    company: "Cognira",
    companyUrl: COGNIRA_URL,
    role: "Software Engineer Intern",
    period: "Jul 2023 — Aug 2023",
    summary:
      "Summer internship building a tool for the company's social committee.",
    bullets: [
      "Built an internal event platform for Cognira's social committee to create and manage company events.",
      "Added voting, feedback, and suggestion flows so employees could shape upcoming events.",
      "Implemented frontend and backend in Next.js, with Firebase for auth/realtime and PostgreSQL for persistence."
    ],
    stack: ["JavaScript", "Next.js", "React", "Firebase", "PostgreSQL"]
  }
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  year: string;
};

export const projects: Project[] = [
  {
    name: "CarCare",
    tagline: "A vehicle cost and maintenance platform that tells you what your car really costs.",
    description:
      "CarCare turns fuel receipts, service invoices, insurance renewals, and odometer readings into a true cost per kilometre, and flags what needs attention next.",
    highlights: [
      "Full-to-full fuel consumption engine that handles partial fills and missed logs, plus a maintenance due/overdue engine for schedules by distance, time, or both.",
      "Layered NestJS API with I/O-free domain logic, exact-decimal money, SQL-side cost aggregation, membership-based authorisation, JWT refresh-token rotation, and Google sign-in.",
      "BullMQ workers for expiry and service reminders; integration tests against real PostgreSQL and Redis; GitHub Actions CI publishing Docker images to GHCR."
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Tailwind",
      "shadcn/ui",
      "Docker"
    ],
    links: [
      { label: "Live", href: "https://carcare-phi.vercel.app" },
      { label: "Source", href: "https://github.com/skander2905/carcare" }
    ],
    year: "2026"
  },
  {
    name: "SplitEase",
    tagline: "A fullstack expense splitter with a real settlement algorithm.",
    description:
      "An expense-splitting app for groups. Beyond tracking who owes what, SplitEase computes the minimum set of transactions to settle a group's debts using a greedy min-cash-flow algorithm.",
    highlights: [
      "Min-cash-flow settlement algorithm to minimize the number of transfers between members.",
      "Typed end-to-end with Prisma and PostgreSQL; optimistic UI updates for snappy interactions.",
      "Deployed in production on Vercel (web), Render (API), and Neon (Postgres)."
    ],
    stack: ["TypeScript", "React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind", "shadcn/ui"],
    links: [
      { label: "Live", href: "https://split-app-taupe-one.vercel.app" },
      { label: "Source", href: "https://github.com/skander2905/split-app" }
    ],
    year: "2025"
  }
];

export const stack = {
  Frontend: [
    "TypeScript",
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Next.js",
    "Material UI",
    "Tailwind CSS",
    "shadcn/ui",
    "Vite"
  ],
  "Backend & Data": [
    "Node.js",
    "NestJS",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQL"
  ],
  "Testing & DevOps": [
    "Playwright",
    "Vitest",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Vercel",
    "Render"
  ]
};

export const education = {
  school: "National School of Computer Sciences (ENSI)",
  shortName: "ENSI",
  url: "https://www.ensi.rnu.tn/",
  degree: "Engineering Degree in Computer Science",
  specialization: "Finance and Information Systems",
  period: "2021 — 2024",
  location: "Manouba, Tunisia",
  description:
    "ENSI is one of Tunisia's top engineering schools for computer science, admitting students through the national engineering entrance exam after two years of preparatory studies in mathematics and physics.",
  coursework: [
    "Algorithms & Data Structures",
    "Operating Systems",
    "Databases & SQL",
    "Software Engineering",
    "Distributed Systems",
    "Web & Mobile Development",
    "Quantitative Finance",
    "Statistics & Probability"
  ]
};
