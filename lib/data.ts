export const site = {
  name: "Skander Abid",
  role: "Software Engineer",
  location: "Tunis, Tunisia",
  email: "skander.abid@ensi-uma.tn",
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
      "Frontend engineer on PromoAI, Cognira's retail-AI platform for promotion planning and forecasting.",
    bullets: [
      "Ship and maintain feature areas of the PromoAI web application used by enterprise retail teams.",
      "Design component systems and UI architecture around complex tabular data, filters, and forecast flows.",
      "Profile and resolve frontend performance issues across rendering, data loading, and state updates.",
      "Work directly with API, UX, and QA to take work from spec to release with tests, reviews, and documentation."
    ],
    stack: ["TypeScript", "React", "Next.js", "REST APIs", "Testing"]
  },
  {
    company: "Cognira",
    companyUrl: COGNIRA_URL,
    role: "Software Engineer Intern",
    period: "Feb 2024 — May 2024",
    summary:
      "Built an internal agile project-management platform with real-time collaboration features.",
    bullets: [
      "Designed and implemented sprint planning, discussion boards, document sharing, and live chat.",
      "Architected the Next.js frontend and an Express/MongoDB service layer; shipped against a Scrum cadence."
    ],
    stack: ["Next.js", "Express", "MongoDB"]
  },
  {
    company: "Cognira",
    companyUrl: COGNIRA_URL,
    role: "Software Engineer Intern",
    period: "Jul 2023 — Aug 2023",
    summary:
      "Shipped an internal event platform for the company's social committee — event creation, voting, and feedback.",
    bullets: [],
    stack: ["Next.js", "Firebase", "PostgreSQL"]
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
  Languages: ["TypeScript", "JavaScript", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  Backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB"],
  Infra: ["Docker", "Kubernetes", "Vercel", "Render", "Neon"],
  Practice: ["Git", "Code review", "Testing", "CI/CD"]
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
