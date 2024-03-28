import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amirhossein Mohammadi",
  initials: "AM",
  location: "Tehran, Iran, GMT+3.5",
  locationLink: "https://www.google.com/maps/place/Tehran",
  about:
    "Full Stack Engineer focused on building products with an interesting twist.",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 3 years of experience in working with different clients.",
  avatarUrl: "https://avatars.githubusercontent.com/u/45223699?v=4",
  personalWebsiteUrl: "https://github.com/accretence",
  contact: {
    email: "accretence@gmail.com",
    tel: "+989122396706",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/accretence",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/accretence/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/accretence",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "IAUTNB",
      degree: "Bachelor's Degree in Architectural Engineering",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "ACHAREH",
      link: "https://achareh.co",
      badges: ["Internship"],
      title: "Front-End Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "My first full-time position as an intern which taught me collaboration in a medium sized team under supervision of senior developers.",
    },
    {
      company: "RAYBOD",
      link: "https://www.raybod.net",
      badges: ["Contract"],
      title: "Back-End Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "In two separate projects contracted by Abidi Pharmaceuticals ( biggest pharmaceutical company in Iran ) and RAI - The Railways of Iran  I was in charge of writing performant, safe and scalable Javascript code for custom business intelligence dashboards on the server-side using Node.js and Express.js.",
    },
    {
      company: "Bytogene UK",
      link: "https://www.linkedin.com/company/bytogene/about/",
      badges: ["Full-Time"],
      title: "Senior Back-End Developer & DevOps Engineer",
      logo: JojoMobileLogo,
      start: "2023",
      end: "PRESENT",
      description:
        "In my role as a Senior Developer at BytoGene UK on a project designed to launch in the UK market, I implemented a robust infrastructure and scalable back-end system from scratch using Nginx, Docker, Kubernetes and ArgoCD.",
    },
    {
      company: "Saman Insurance",
      link: "https://www.si24.ir",
      badges: ["Contract"],
      title: "Corporate Consultant & Internal Code Auditor",
      logo: NSNLogo,
      start: "2023",
      end: "PRESENT",
      description: "Auditing and consulting the insuretech startups invested by the Saman Insurance Corporation.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
  ],
  projects: [
    {
      title: "Next-Prisma-Tailwind-Ecommerce",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "GITHUB",
        href: "https://github.com/Accretence/next-prisma-tailwind-ecommerce",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    }
  ],
} as const;
