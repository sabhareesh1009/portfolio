import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2"
      whileHover={{ scale: 1.08 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const skillCategories = [
  {
    title: "Frontend & Micro-Frontends",
    skills: [
      "React.js (Hooks, Context API)",
      "Next.js (SSR / App Router)",
      "TypeScript & JavaScript (ES6+)",
      "Webpack 5 Module Federation",
      "Nx & Turborepo Monorepos",
      "Apollo Client (GraphQL)",
      "TanStack / React Query",
      "Zustand & Redux",
      "React Router",
      "MUI, Tailwind CSS & Storybook",
      "SCSS, CSS Modules & Styled Components",
      "React Hook Form, Formik, Zod & Yup",
    ],
  },
  {
    title: "AI Engineering & GenAI Workflows",
    skills: [
      "Autonomous AI Agents",
      "RAG Pipelines & Knowledge UIs",
      "GenAI Workflow Integration",
      "Streaming LLM Interfaces",
      "Conversational AI & Bot Flows",
      "Figma-to-React AI Automation",
      "Claude Code & Cursor",
      "OpenAI Codex & Windsurf",
      "AI-Generated Edge-Case Testing",
    ],
  },
  {
    title: "Backend, Queues & Cloud",
    skills: [
      "Node.js & Express.js",
      "RESTful Microservices",
      "GraphQL Schemas & Codegen",
      "BullMQ & Redis Queues",
      "PostgreSQL & Multi-DB Sync",
      "WebSockets & Server-Sent Events",
      "AWS (S3, CloudFront, WorkSpaces)",
      "Docker, Azure & Vercel",
    ],
  },
  {
    title: "Quality, Observability & Security",
    skills: [
      "Jest & React Testing Library",
      "Playwright & Cypress (E2E)",
      "@axe-core/playwright & WCAG a11y",
      "LaunchDarkly (Canary & Kill-Switches)",
      "Datadog, New Relic & Sentry",
      "GitLab CI & GitHub Actions",
      "Lighthouse (90+ Core Web Vitals)",
      "PCI Masking, Luhn, CSP & XSS Guards",
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      {/* Interactive Orbital Map */}
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-5 md:p-3 xs:text-xs xs:p-2 text-center"
          whileHover={{ scale: 1.05 }}
        >
          Full-Stack & AI
        </motion.div>

        <Skill name="React.js" x="-5vw" y="-10vw" />
        <Skill name="Next.js" x="-20vw" y="2vw" />
        <Skill name="TypeScript" x="20vw" y="6vw" />
        <Skill name="Micro-Frontends" x="0vw" y="13vw" />
        <Skill name="Module Federation" x="-22vw" y="-15vw" />
        <Skill name="AI Agents & RAG" x="18vw" y="-13vw" />
        <Skill name="GenAI Workflows" x="30vw" y="-4vw" />
        <Skill name="Node.js & Express" x="0vw" y="-21vw" />
        <Skill name="Apollo GraphQL" x="-26vw" y="16vw" />
        <Skill name="BullMQ & Redis" x="18vw" y="18vw" />
        <Skill name="Tailwind & MUI" x="-32vw" y="-4vw" />
        <Skill name="AWS & CI/CD" x="26vw" y="-20vw" />
      </div>

      {/* Categorized Senior Engineering Skills Matrix */}
      <div className="w-full mt-20 grid grid-cols-12 gap-8 lg:gap-6 sm:gap-y-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="col-span-6 lg:col-span-12 rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-primaryDark">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-sm font-medium px-3 py-1.5 rounded-lg border border-solid border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/10 text-dark dark:text-light sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;