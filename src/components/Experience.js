import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  projects,
  highlights,
  techStack,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-10 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} 
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark capitalize hover:underline"
          >
            @{company}
          </a>
        </h3>
        <span className="block capitalize font-semibold text-dark/75 dark:text-light/75 xs:text-sm mt-1">
          {time} | {address}
        </span>
        {projects && (
          <span className="block text-sm font-semibold text-primary dark:text-primaryDark mt-1 mb-2">
            Core Projects: {projects}
          </span>
        )}
        <ul className="list-disc ml-5 mt-2 space-y-2 font-medium text-dark dark:text-light md:text-sm">
          {highlights.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        {techStack && (
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-semibold px-2.5 py-1 rounded-md border border-solid border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Frontend & AI Engineer (SE III)"
            company="Nextiva"
            companyLink="https://www.nextiva.com"
            time="July 2025 – April 2026"
            address="Bengaluru, India"
            projects="NCX Admin, Next Usage & Billing, Onboarding Journey, Next Platform AI"
            highlights={[
              "Architected a scalable micro-frontend ecosystem within an Nx/Turborepo monorepo using React Router for federated mesh navigation, accelerating cross-team deployment cycles by 40%.",
              "Engineered intelligent UI modules integrating AI Agents, RAG pipelines, and GenAI workflows—and leveraged Claude Code & Cursor for Figma-to-React automation—boosting workflow efficiency by 60–80%.",
              "Designed a dual-layer state architecture pairing Apollo Client (custom offset-pagination typePolicies, key normalization, Reactive Variables, and optimisticResponse with automatic rollbacks) with TanStack Query for the voice REST xbert API.",
              "Built NCX Admin & Next Usage and Billing interfaces (license provisioning, workspace quotas, seat changes) dispatching events to payment microservices, plus PCI-masked payment forms using React Hook Form, Zod, and inline Luhn validation behind LaunchDarkly flags.",
              "Enforced GraphQL Code Generator in GitLab CI (preventing 100% of schema crashes at tsc compile time) and mitigated a 25%-tier canary memory leak within 3 minutes via New Relic alerts and a LaunchDarkly kill-switch.",
              "Maintained 85%+ test coverage across Jest, React Testing Library, and Playwright E2E onboarding flows while blocking non-compliant PRs in CI using @axe-core/playwright and jest-axe.",
            ]}
            techStack={[
              "React.js",
              "TypeScript",
              "Nx / Turborepo",
              "Apollo Client (GraphQL)",
              "TanStack Query",
              "AI Agents & RAG",
              "React Hook Form & Zod",
              "LaunchDarkly",
              "New Relic",
              "Playwright & Jest",
            ]}
          />

          <Details
            position="Senior Software Engineer"
            company="Gupshup"
            companyLink="https://www.gupshup.io"
            time="June 2022 – May 2025"
            address="Bengaluru, India"
            projects="Converse CX Platform (Multi-Channel Messaging & Conversational AI)"
            highlights={[
              "Architected and built the Converse CX host container shell from scratch using Webpack 5 Module Federation, Next.js, React.js, TypeScript, Context API, and Styled Components, scaling the platform from 10 initial users to 2,000+ active enterprise B2B clients.",
              "Orchestrated runtime remoteEntry.js deployments on AWS S3/CloudFront with independent SemVer tags and wrapped dynamic remote slots in asynchronous React Error Boundaries—enabling 5 squads to ship autonomously without crashing the host shell.",
              "Configured React, React-DOM, MUI, and Zustand as strict singletons (singleton: true) and implemented async import() lazy loading, cutting bundle duplication by 35%.",
              "Catapulted Lighthouse performance scores from 45 to 90+ and slashed page load times by 2.5s via SSR, code-splitting, and multi-tenant react-i18next localization, while establishing a Storybook design system that accelerated feature delivery by 60%.",
              "Traced live client WebSocket issues via Datadog and Sentry back to backend BullMQ/PostgreSQL services, and eliminated 95% of critical vulnerabilities via strict CSP and XSS guards while leading the UI Guild.",
            ]}
            techStack={[
              "Next.js",
              "React.js",
              "TypeScript",
              "Webpack 5 Module Federation",
              "Zustand",
              "MUI & Storybook",
              "AWS S3 / CloudFront",
              "Datadog & Sentry",
              "WebSockets",
            ]}
          />

          <Details
            position="Software Engineer (Full-Stack)"
            company="Part Analytics"
            companyLink="https://www.partanalytics.com"
            time="Feb 2021 – June 2022"
            address="Bengaluru, India"
            projects="Supply Chain Spend Intelligence SaaS, BOM Ingestion & ERP Microservices"
            highlights={[
              "Engineered high-throughput Node.js and Express.js REST microservices deployed on AWS to automate structured Bill-of-Materials (BOM) parsing and real-time cost/risk analytics.",
              "Architected asynchronous data ingestion and cross-database synchronization across relational PostgreSQL instances using BullMQ and Redis via a publisher-subscriber pattern with sequential upserts to eliminate lock contention.",
              "Developed interactive multi-tenant B2B analytics dashboards using React.js, Redux, TypeScript, Tailwind CSS, Chart.js, and Formik—scaling the client base from 2 to 30 enterprise customers in 12 months ($30K–$60K USD deals).",
            ]}
            techStack={[
              "React.js",
              "Redux",
              "TypeScript",
              "Node.js",
              "Express.js",
              "BullMQ & Redis",
              "PostgreSQL",
              "AWS",
              "Tailwind CSS",
              "Chart.js",
            ]}
          />

          <Details
            position="Software Engineer"
            company="Infosys"
            companyLink="https://www.infosys.com"
            time="Feb 2019 – Feb 2021"
            address="Bengaluru, India"
            projects="eDocket Enterprise Document Suite & Asian Development Bank (Fintech)"
            highlights={[
              "Engineered the eDocket enterprise document management platform using React.js and Material UI (MUI) for 5,000+ daily active users, and built mission-critical loan/grant disbursement modules for the Asian Development Bank in Angular.",
              "Integrated frontend component trees with scalable Node.js backend REST APIs (improving data exchange speeds by 3x) and contributed to a centralized Storybook design system using SCSS, CSS Modules, ESLint, Prettier, and GitHub Actions CI.",
            ]}
            techStack={[
              "React.js",
              "Angular",
              "Node.js",
              "Material UI",
              "Storybook",
              "SCSS / CSS Modules",
              "GitHub Actions",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;